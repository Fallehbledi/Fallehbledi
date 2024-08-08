const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.Register = [
  body('firstName')
    .isLength({ min: 4 })
    .withMessage('First name must be longer than 4 characters'),
  body('lastName')
    .isLength({ min: 4 })
    .withMessage('Last name must be longer than 4 characters'),
  body('email')
    .isEmail()
    .withMessage('Email must be valid')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .withMessage('Email must be a valid email address format'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be longer than 6 characters')
    .matches(/[0-9]/)
    .withMessage('Password must contain at least one digit'),

  async (req, res) => {
    console.log('Received register request:', req.body); // Log request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array()); // Log validation errors
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, phone, bio, password, profileImage } = req.body;

    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = await prisma.experts.create({
        data: {
          firstName,
          lastName,
          email,
          phone,
          bio,
          profileImage,
          password: hashedPassword,
        },
      });
      console.log('User registered successfully:', newUser);
      res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ errors: [{ msg: 'Server error', param: 'general' }] });
    }
  },
];
exports.GetExperts = async (req, res) => {
  try {
    const experts = await prisma.experts.findMany();
    res.status(200).json(experts);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ errors: [{ msg: 'Server error' }] });
  }
};
