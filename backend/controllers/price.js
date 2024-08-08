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
                    price,
                    image,
                }
            });

            res.status(201).json(addprice); 
        } catch (error) {
            console.error("Failed to create price:", error);
            res.status(500).send("Failed to create your price");
        }
    },

   
    GetAllprices: async (req, res) => {
        try {
            const allprice = await prisma.prices.findMany();

            res.status(200).json(allprice);
        } catch (error) {
            console.error("Failed to fetch farmtools:", error);
            res.status(500).send("Failed to fetch farmtools");
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