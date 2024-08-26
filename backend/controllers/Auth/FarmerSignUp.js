const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { PrismaClient } = require('@prisma/client');
const nodemailer=require('../../nodemailer/nodemailer.config')
const prisma = new PrismaClient();

exports.Register = [
  body('firstName')
    .isLength({ min: 2 }).withMessage('First name must be longer than 2 characters'),
  body('lastName')
    .isLength({ min: 2 }).withMessage('Last name must be longer than 2 characters'),
    body('email')
    .isLength({ min: 2 }).withMessage('Please enter your email address'),
  body('email')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).withMessage('Email must be a valid email address format'),
  body('password')
    .matches(/[0-9]/).withMessage('Password must contain at least one digit'),
  body('location')
    .isLength({ min: 2 }).withMessage('Please enter a valid location'),
  body('email').custom(async (value) => {
    const user = await prisma.farmer.findFirst({ where: { email: value } });
    if (user) {
      throw new Error('Email already in use');
    }
    return true;
  }),

  async (req, res) => {
    console.log('Received register request:', req.body); // Log request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array()); // Log validation errors
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password, adress, profileImage, location, status ,phone} = req.body;

    const characters =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let actCode = "";
    for (let i = 0; i < 6; i++) {
      actCode += characters[Math.floor(Math.random() * characters.length)];
    }
    try {

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const validStatuses = ['pending', 'free', 'Standard', 'Premium'];
              const farmerStatus = validStatuses.includes(status) ? status : 'pending';

      const newUser = await prisma.farmer.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashedPassword,
          adress,
          location,
          profileImage,
          phone,
          status: farmerStatus,
          activationCode: actCode
        
        }
      });
      nodemailer.sendConfirmationEmail(
        newUser.firstName,
        newUser.email,
        newUser.activationCode,
      );
      res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      console.error('Server error:', error); 
      res.status(500).json({ errors: [{ msg: "Server error", param: "general" }] });
    }
  }
];