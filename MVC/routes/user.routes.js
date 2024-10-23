const { Router } = require('express')

const { getUser, postUSer, login } = require('../controller/user.controller')

const userRouter = Router()

userRouter.get('/', getUser)

userRouter.post('/', postUSer)

userRouter.post('/login', login)

module.exports = userRouter