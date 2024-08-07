const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    addpost: async (req, res) => {
        const { title, content, image,farmerId } = req.body;
      
        try {
          const post = await prisma.post.create({
            data: {
              title,
              content,
              image,
              farmer: {
                connect: { id: Number(farmerId) },
              },
            },
          });
          res.status(201).json(post);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },
      getallpost:async (req, res) => {
        try {
          const posts = await prisma.post.findMany({
          });
          res.status(200).json(posts);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },
      getfarmerposts:async (req, res) => {
      console.log(req.params.id);
        try {
          const post = await prisma.post.findMany({
            where: { farmerId: Number(req.params.id) },
            include: {
                farmer : true,
                comments:true
              },
          });
          res.status(200).json(post);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
}