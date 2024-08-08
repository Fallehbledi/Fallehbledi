// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// module.exports = {
//     CreateFarmtool: async (req, res) => {
//         try {
//             const { name, description, price, image, category, quantity } = req.body;

//             const farmtool = await prisma.farmtools.create({
//                 data: {
//                     name,
//                     description,
//                     price,
//                     image,
//                     category,
//                     quantity
//                 }
//             });

//             res.status(201).json(farmtool); // Assuming you want to send back the created farmtool
//         } catch (error) {
//             console.error("Failed to create farmtool:", error);
//             res.status(500).send("Failed to create your farmtool");
//         }
//     }
// };
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  // add farmtool
  CreateFarmtool: async (req, res) => {
    try {
      const { name, description, price, image, category, quantity } = req.body;

      const farmtool = await prisma.farmtools.create({
        data: {
          name,
          description,
          price,
          image,
          category,
          quantity,
        },
      });

      res.status(201).json(farmtool);
    } catch (error) {
      console.error('Failed to create farmtool:', error);
      res.status(500).send('Failed to create your farmtool');
    }
  },
  // read all farmtools
  GetAllFarmtools: async (req, res) => {
    try {
      const farmtools = await prisma.farmtools.findMany();

      res.status(200).json(farmtools);
    } catch (error) {
      console.error('Failed to fetch farmtools:', error);
      res.status(500).send('Failed to fetch farmtools');
    }
  },

  // delete formtool
  DeleteFarmtool: async (req, res) => {
    try {
      const farmtooll = await prisma.farmtools.delete({
        where: {
          id: +req.params.id,
        },
      });

      res.status(200).json({ message: 'Farmtool deleted successfully', farmtooll });
    } catch (error) {
      console.error('Failed to delete farmtool:', error);
      res.status(500).send('Failed to delete the farmtool');
    }
  },

  GetFarmtoolByName: async (req, res) => {
    try {
      const { name } = req.params;

      const farmtool = await prisma.farmtools.findMany({
        where: {
          name: {
            contains: name,
            mode: 'insensitive',
          },
        },
      });

      if (farmtool.length > 0) {
        res.status(200).json(farmtool);
      } else {
        res.status(404).send('Farmtool not found');
      }
    } catch (error) {
      console.error('Failed to fetch farmtool:', error);
      res.status(500).send('Failed to fetch farmtool');
    }
  },
};
