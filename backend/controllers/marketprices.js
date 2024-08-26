const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
module.exports = {
    // add farmtool 
    Createprice: async (req, res) => {
        try {
            const { name,  price, image,createdAt,updatedAt} = req.body;
            const addprice = await prisma.prices.create({
                data: {
                    name,
                    price:parseInt(price),
                    image,
                    createdAt: createdAt ? new Date(createdAt) : undefined,
                    updatedAt:updatedAt ? new Date(updatedAt) : undefined,
                }
            });

            res.status(201).json(addprice); 
        } catch (error) {
            console.error("Failed to create price:", error);
            res.status(500).send("Failed to create your price");
        }
    },
    GetAllpricebydate: async (req, res) => {
        try {
          // Get the current date
          const now = new Date();
      
          // Set the time to the start of the current day (00:00:00)
          const startOfDay = new Date(now.setHours(0, 0, 0, 0));
      
          // Set the end of the current day (23:59:59)
          const endOfDay = new Date(startOfDay);
          endOfDay.setHours(23, 59, 59, 999);
      
          // Fetch all prices updated today
          const allprices = await prisma.prices.findMany({
            where: {
              updatedAt: {
                gte: startOfDay,
                lte: endOfDay,
              },
            },
            orderBy: {
              updatedAt: 'desc',
            },
          });
      
          res.status(200).json(allprices);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'An error occurred while fetching prices.' });
        }
      },
      
    GetAllprices: async (req, res) => {
        try {
            const allprice = await prisma.prices.findMany({
                orderBy: {
                    id: "desc",
                }
            });

            res.status(200).json(allprice);
        } catch (error) {
            console.error("Failed to fetch product price:", error);
            res.status(500).send("Failed to fetch product price ");
        }
    },

        Deleteprice : async (req, res) => {  
        try {
            const delprice = await prisma.prices.delete({
                where: {id: parseInt((req.params.id)) }
            });
            
            res.status(200).json({ message: " deleted successfully", delprice });
        } catch (error) {
            console.error("Failed to delete price:", error);
            res.status(500).send("Failed to delete the prices");
        }
    }, Updateprice: async (req, res) => {
        try {
            const { id } = req.params;
            const { price } = req.body;

            const updatedPrice = await prisma.prices.update({
                where: { id: +id },
                data: {
        
                    price,
                    
                }
            });

            res.status(200).json(updatedPrice);
        } catch (error) {
            console.error("Failed to update price:", error);
            res.status(500).send("Failed to update the price");
        }
    }
}