const express = require('express')
const bcrypt = require('bcrypt')
const { register, login } = require('../controllers/UserController')
const jwt = require('jsonwebtoken')

const secretKey = 'token_ya'

const router = express.Router()

router.post('/api/register', async (req, res) => {
    // console.log('register');
    try {
        const { username, email, password } = req.body
        const pwd = await bcrypt.hash(password, 10)
        await register({ username, email, password: pwd })
        res.status(200).send('registered successfully')
    } catch (error) {
        res.status(500).send('failed')
    }
})

router.post('/api/login', async (req, res) => {
    // console.log('login');
    const { email, password } = req.body
    const user = await login({ email })
    if (!user) {
        return res.status(404).send('user not found')
    }
    const validPwd = await bcrypt.compare(password, user.password)

    if (!validPwd) {
        return res.status(401).send('Invalid password')
    }
    const token = jwt.sign({ email, password }, secretKey, { expiresIn: '7d' })

    res.status(200).json({ token })

})

// // 只有用户登录以后才能访问
// // Bearer +token字符串 拼接在请求头上
router.get('/admin', (req, res) => {
    // console.log('admin');
    res.send('welcome')
})

module.exports = router