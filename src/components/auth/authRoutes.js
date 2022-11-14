const router = require('express').Router()
const authController = require("./authController")

router.get('/login', authController.login)
router.post('/register', authController.register)


module.exports = router;