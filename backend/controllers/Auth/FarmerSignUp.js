const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.Register = [
  body('firstName')
    .isLength({ min: 4 }).withMessage('First name must be longer than 4 characters'),
  body('lastName')
    .isLength({ min: 4 }).withMessage('Last name must be longer than 4 characters'),
  body('email')
    .isEmail().withMessage('Email must be valid')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).withMessage('Email must be a valid email address format'),
  body('password')
    .isLength({ min: 6 }).withMessage('Password must be longer than 6 characters')
    .matches(/[0-9]/).withMessage('Password must contain at least one digit'),
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
          status: farmerStatus 
        }
      });

      console.log('User registered successfully:', newUser);
      res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      console.error('Server error:', error); 
      res.status(500).json({ errors: [{ msg: "Server error", param: "general" }] });
    }
  }
];
// const getAllfarmer = async (req, res) => {
//   try {
//     let result = await prisma.farmer.findMany()
//     console.log(result);
//     res.status(200).json(result)
//   } catch (err) {
//     console.log(err);
//     res.status(404).json({ error: " not found." })
//   }
// }
// const getOnefarmer = async (req, res) => {
//   try {
//     const { id } = req.params;
    
//     const farme = await prisma.farmer.findUnique({
//       where: { id: parseInt(id) },

//     });

//     if (farme) {
//       console.log(patient);
//       res.status(200).json(patient);
//     } else {
//       res.status(404).json({ error: "Patient not found." });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "An error occurred while retrieving the patient." });
//   }
// };
// module.exports={getAllfarmer,getOnefarmer}