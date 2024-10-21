const isvalid = (req, res, next) => {

    let { email, password, userName } = req.body
    if (!email || !password || !userName) {
        res.send('invalid data')
    }
    else {
        next()
    }
}

module.exports = isvalid