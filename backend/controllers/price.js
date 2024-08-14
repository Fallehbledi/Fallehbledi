const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
module.exports = {
    // add farmtool 
    Createprice: async (req, res) => {
        try {
            const { name,  price, image} = req.body;
            const addprice = await prisma.prices.create({
                data: {
                    name,
                    price:parseInt(price),
                    image,
                }
            });

            res.status(201).json(addprice); 
        } catch (error) {
            console.error("Failed to create price:", error);
            res.status(500).send("Failed to create your price");
        }
    },
    GetAllpricebydate:async(req,res)=>{
        const now = new Date();
        const week = new Date(now);
        week.setDate(now.getDate() - 7);

  const allprices = await prisma.prices.findMany({
    where: {
      updatedAt: {
        gte: week,
      },
    },
    orderBy: {
      updatedAt: 'desc',
    },
  });

  res.status(200).json(allprices);

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