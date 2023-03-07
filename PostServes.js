class PostServes {
    async create(req, res){   
        const createPost = await Post.create(post)
        return createPost
    }

    async getAll(){
        const posts = await Post.find();
        return posts
    }
    async getOne(id){
        if (!id) {
            throw new Errors('No id')
        }
        const post = await Post.findById(id)
        return post
    }
    async update(post){
        if (!post.id) {
            throw new Errors('No id')
        }
        const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatePost
    }
    async delete(id){
        if (!id) {
            throw new Errors('No id')
        }
        const post = await Post.findByIdAndDelete(id)
        return post
    }
}

export default PostServes