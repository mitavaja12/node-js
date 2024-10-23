const user = require('../model/user.model')

const getUser = async (req, res) => {
    let data = await user.find()
    res.send(data)
}

const postUSer = async (req, res) => {
    let { email, password, username } = req.body

    let isexit = await user.findone({ email })

    if (isexit) {
        return res.send({ msg: 'user already exit' })
    }
    else {
        let data = await user.create(req.body)
        res.send(data)
    }
}

const login = async (req, res) => {
    let { email, password } = req.body

    let isexit = await user.findone({ email })

    if (!isexit) {
        return res.send({ msg: 'user not found' })
    }
    if (isexit.password != password) {
        return res.send({ msg: 'invalid user' })
    }

    res.send({ msg: 'login successfully', user: isexit })
}

module.exports = { getUser, postUSer, login }