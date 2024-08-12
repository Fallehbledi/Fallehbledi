const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    // add farmtool 
    AddProdToCard: async (req, res) => {
        try {
            const { name, description, price, image, category, quantity,farmerId } = req.body;

            const card = await prisma.addedToCard.create({
                data: {
                    name,
                    description,
                    price,
                    image,
                    category,
                    quantity,
                    farmerId
                }
            });

            res.status(201).json(card); 
        } catch (error) {
            console.error("Failed to create card:", error);
            res.status(500).send("Failed to create your card");
        }
    },
    getAddedProducts : async (req, res) => {
        // const { id } = req.params.id;
      
        try {
          const AddedProd = await prisma.addedToCard.findMany({
            where: {farmerId:Number(req.params.id) }
          });
      
          if (AddedProd) {
            res.status(200).json(AddedProd);
          } else {
            res.status(404).json({ error: 'AddedProd not found' });
          }
        } catch (error) {
          console.log(error);
          res.status(500).json(error);
        }
    },
    DeleteAddedProd : async (req, res) => {  
        try {
            const AddedProd = await prisma.addedToCard.delete({
                where: {
                    id: +req.params.id
                }
            });
            
            res.status(200).json({ message: "AddedProd deleted successfully", AddedProd });
        } catch (error) {
            console.error("Failed to delete AddedProd:", error);
            res.status(500).send("Failed to delete the AddedProd");
        }
    }

}