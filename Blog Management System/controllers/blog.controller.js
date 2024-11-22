const Blog = require("../models/blog.schema");


const CreateBlog = async(req, res) => {
    console.log(req.body);

    let data = await Blog.create(req.body)
    res.send(data)
}

const Get = async(req, res) => {
    let data = await Blog.find()
    res.send(data)
    console.log(res);

}

const Delete = async(req, res) => {
    let { id } = req.params
    let data = await Blog.findByIdAndDelete(id)
    res.send(data)
}

const Upadte = async(req, res) => {
    let { id } = req.params
    let data = await Blog.findByIdAndUpdate(id, req.body)
    res.send(data)
}

const findById = async(req, res) => {
    let { id } = req.params
    let data = await Blog.findById(id)
    res.send(data)
}

const findBlogByUserId = async(req, res) => {
    let { userId } = req.params
    let data = await Blog.find({ userId: userId })
    res.send(data)

}
module.exports = { CreateBlog, Delete, Upadte, Get, findById, findBlogByUserId }