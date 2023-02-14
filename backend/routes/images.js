const express = require('express')
const { getImage , uploadImage } = require('../controllers/imagesController')
const upload = require('../middleware/filesMiddleware')
const router = express.Router()


router.get('/download/:id' , getImage)
router.post('/upload' , upload.single('image') , uploadImage)

module.exports = router ;