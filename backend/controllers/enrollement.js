const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  createEnrollement: async (req, res) => {
    try {
      const { farmerId, expertId, message } = req.body;
      const existEnrollement = await prisma.enrollement.findFirst({
        where: { farmerId: Number(farmerId), expertId: Number(expertId) },
      });
      if (existEnrollement)
        return res.status(400).send('You have already created an enrollement.');
      const enrollement = await prisma.enrollement.create({
        data: {
          farmerId,
          expertId,
          message,
          status: 'INVALID',
        },
      });
      console.log('create enrollement === ', enrollement);
      res.status(200).json(enrollement);
    } catch (error) {
      console.error('Failed to create enrollement:', error);
      res.status(500).send('Failed to create enrollement');
    }
  },
  getEnrollements: async (req, res) => {
    try {
      const enrollements = await prisma.enrollement.findMany({
        include: {
          farmer: true,
          expert: true,
        },
      });
      res.status(200).json(enrollements);
    } catch (error) {
      console.error('Failed to get enrollements:', error);
      res.status(500).send('Failed to get enrollements');
    }
  },
  getEnrollementsByExpert: async (req, res) => {
    try {
      const { id } = req.params;
      const enrollements = await prisma.enrollement.findMany({
        where: { expertId: Number(id) },
        include: {
          farmer: true,
          expert: true,
        },
      });
      res.status(200).json(enrollements);
    } catch (error) {
      console.error('Failed to get enrollements:', error);
      res.status(500).send('Failed to get enrollements');
    }
  },
  updateEnrollement: async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      await prisma.enrollement.update({
        where: { id: Number(id) },
        data: {
          status,
        },
      });
      res.status(200).json({ msg: 'updated successfully' });
    } catch (error) {
      console.error('Failed to delete enrollement:', error);
      res.status(500).send('Failed to delete enrollement');
    }
  },
  deleteEnrollement: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.enrollement.delete({
        where: { id: Number(id) },
      });
      res.status(200).json({ msg: 'Deleted successfully' });
    } catch (error) {
      console.error('Failed to delete enrollement:', error);
      res.status(500).send('Failed to delete enrollement');
    }
  },
};
