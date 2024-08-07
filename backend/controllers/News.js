const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    // add news
    AddNew: async (req, res) => {
        try {
            const { title, content, image } = req.body;
            const news = await prisma.news.create({
                data: {
                    title,
                    content,
                    image
                }
            });
            res.status(201).json(news); 
        } catch (error) {
            console.log(error);
            res.status(500).send("Failed to add your new");
        }
    }, 
    // get all news
    getAllNews: async (req, res) => {
        try {
            const news = await prisma.news.findMany();
            res.status(200).json(news);
        } catch (error) {
            res.status(500).send("Failed to get all news");
        }
    },
    // delete news
    DeleteNews: async (req, res) => {  
        try {
            const deletedNews = await prisma.news.delete({
                where: {
                    id: +req.params.id
                }
            });
            res.status(200).json({ message: "News deleted successfully", deletedNews });
        } catch (error) {
            console.error("Failed to delete news:", error);
            res.status(500).send("Failed to delete the news");
        }
    },
    // update news
    UpdateNews: async (req, res) => {
        try {
            const { id } = req.params;
            const { title, content, image } = req.body;
            const updatedNews = await prisma.news.update({
                where: { id: +id },
                data: {
                    title,
                    content,
                    image
                }
            });
            res.status(200).json(updatedNews);
        } catch (error) {
            console.error("Failed to update news:", error);
            res.status(500).send(error);
        }
    }
};