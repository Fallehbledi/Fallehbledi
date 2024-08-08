const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient, expertRole } = require('@prisma/client');
const prisma = new PrismaClient();

require('dotenv').config();

const signInFarmer = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (!email || !password) {
    return res.status(404).json({ error: 'Email or Password not found.' });
  }

  try {
    // Retrieve doctor from the database by email
    const farmer = await prisma.farmer.findUnique({
      where: {
        email: email,
      },
    });

    // Check if doctor exists
    if (!farmer) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Checking if the password is valid
    const passwordMatch = await bcrypt.compare(password, farmer.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Password is incorrect.' });
    }

    // Generate a JSON Web Token (JWT) for authentication

    const token = jwt.sign(
      {
        id: farmer.id,
        firstName: farmer.firstName,
        lastName: farmer.lastName,
        email: farmer.email,
        phoneNumber: farmer.phone,
        address: farmer.adress,
        profileImage: farmer.profileImage,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d',
      }
    );

    let loggedUser = {
      id: farmer.id,
      FirstName: farmer.firstName,
      LastName: farmer.lastName,
      email: farmer.email,
      phoneNumber: farmer.phone,
      address: farmer.adress,
    };

    res.status(200).json({ loggedUser, token, message: 'Login succeeded' });
  } catch (error) {
    console.error('Sign in error:', error);
    res.status(500).send('Internal server error');
  }
};

module.exports = signInFarmer;
