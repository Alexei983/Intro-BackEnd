import Post from "./Post.js"
import PostServes from "./PostServes.js"

class PostController {
    async create(req, res){
        try {
            // console.log(req.query.test)
            // console.log(req.body)
            // const {author, title, content, picture} = req.body
            // const Post = await Post.create({author, title, content, picture})
            const Post = await PostServes.create(req.body)
            res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getAll(req, res){
        try{
            // const posts = await Post.find();
            const posts = await PostServes.getAll()
            return res.json(posts)
        } catch(e){
            res.status(500).json(e.message)
        }
    }
    async getOne(req, res){
        try{
            // const {id} = req.params
            // if (!id) {
            //     res.status(400).json({message: "No id"})
            // }
            // const post = await Post.findById(id)
            const post = await PostServes.getOne(req.params.id)
            return res.json(post)
        } catch(e){
            res.status(500).json(e.message)
        }
    }
    async update(req, res){
        try{
            // const post = req.body
            // if (!post.id) {
            //    res.status(400).json({message: "No id"})
            // }
            // const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true})
            const updatePost = await PostServes.update(req.body)
            return res.json(updatePost)
        } catch(e){
            res.status(500).json(e.message)
        }
    }
    async delete(req, res){
        try{
            // const {id} = req.params
            // if (!id) {
            //     res.status(400).json({message: "No id"})
            // }
            // const post = await Post.findByIdAndDelete(id)
            const post = await PostServes.delete(req.params.id)
            return res.json(post)
        } catch(e){
            res.status(500).json(e.message)
        }
    }
}

export default new PostController;