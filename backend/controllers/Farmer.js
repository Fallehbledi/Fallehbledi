
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


module.exports = {
    // query of update profile of farmer 
    
    GetOneFarmer : async (req, res) => {
      try {
        const { id } = req.params; // Assuming the farmer's ID is passed as a URL parameter
        const farmer = await prisma.farmer.findUnique({
          where: { id: Number(id) },
        });
    
        if (!farmer) {
          return res.status(404).send("Farmer not found");
        }
    
        res.status(200).json(farmer);
      } catch (error) {
        console.error("Failed to fetch farmer:", error);
        res.status(500).send("Failed to fetch farmer");
      }
    },
     updateProfile : async (req, res) => {
      try {
        const { id } = req.params;
        const { firstName, lastName, phone, address, location } = req.body;
    
        const profile = await prisma.farmer.update({
          where: { id: Number(id) },
          data: {
            firstName,
            lastName,
            phone,
            address,
            location,
          },
        });
    
        res.status(200).json(profile);
      } catch (error) {
        if (error.code === 'P2025') { // P2025 is the Prisma error code for "Record to update not found."
          res.status(404).send("Farmer not found");
        } else {
          console.error("Failed to update profile:", error);
          res.status(500).send("Failed to update profile");
        }
      }
    }
}

