const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const prisma = require('@prisma/client')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const signInExpert = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(404).json({ error: "Email or Password not found." });
    }
  
    try {
      // Retrieve doctor from the database by email
      const experts = await prisma.experts.findUnique({
        where: {
          email: email
        }
      });
  
      // Check if doctor exists
      if (!experts) {
        return res.status(404).json({ error: "User not found." });
      }
  
      // Checking if the password is valid
      const passwordMatch = await bcrypt.compare(password, experts.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: "Password is incorrect." });
      }
  
      // Generate a JSON Web Token (JWT) for authentication
      const token = jwt.sign(
        {
          userId: experts.id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );
  
      let loggedUser = {
        id: experts.id,
        FirstName: experts.firstName,
        LastName: experts.lastName
      };
  
      res.status(200).json({ loggedUser, token, message: "Login succeeded" });
    } catch (error) {
      console.error("Sign in error:", error);
      res.status(500).send("Internal server error");
    }
  };

  module.exports = signInExpert