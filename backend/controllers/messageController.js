const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports.getMessages = async (req, res) => {
  try {
    const messages = await prisma.message.findMany({});
    res.status(200).json(messages);
  } catch (error) {
    console.error('Sign in error:', error);
    res.status(500).send('Internal server error');
  }
};
