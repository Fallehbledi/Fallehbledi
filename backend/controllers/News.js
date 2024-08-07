const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    // add news
    AddNew: async (req, res) => {
        try {
            const { title,content,image } = req.body;
            const news = await prisma.news.create({
                data: {
                    title,
                    content,
                    image
                }
            });
            res.status(201).json(news); 
        } catch (error) {
            console.log(error)
            res.status(500).send("Failed to add your new");
        }
    }, 
    //get all news
    getAllNews : async (req,res) => {
        try {
            const news = await prisma.news.findMany();
            res.status(200).json(news)
    } catch (error) {
        res.status(500).send("Failed to get all news");
    }
}
}