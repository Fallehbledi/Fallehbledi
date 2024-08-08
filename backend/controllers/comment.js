const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.addComment = async (req, res) => {
  const { comment, postId, farmerId } = req.body;

  try {
    const comments = await prisma.comment.create({
      data: {
        comment,
        postId,
        farmerId
      }
    });
    res.status(201).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Error adding comment' });
  }
}
exports.getComment = async (req, res) => {
    // const { id } = req.params.id;
  
    try {
      const comment = await prisma.comment.findUnique({
        where: { postId:parseInt(req.params.id) },
        include: {
            farmer : true,
            post: true
          }
      });
  
      if (comment) {
        res.status(200).json(comment);
      } else {
        res.status(404).json({ error: 'Comment not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };
  
  
  exports.getAllComments = async (req, res) => {
    try {
      const comments = await prisma.comment.findMany({include: {
        farmer : true,
        post: true
      }});
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching comments' });
    }
  };