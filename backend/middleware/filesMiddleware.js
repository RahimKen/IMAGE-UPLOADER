const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination : (req , file , cb) => {
        cb(null , 'upload')
    } ,
    filename : (req , file , cb) => {
        const prefix = Date.now() + file.originalname 
        cb(null , prefix)
    }
})


const fileFilter = (req , file , cb) => {
   const allowedMimetypes = ["image/png" , "image/jpg" , "image/jpeg"]
   if(allowedMimetypes.includes(file.mimetype)){
    cb(null , true)
   }
   else{
    cb(null , true)
   }
}


const limits = {
    fileSize : 10*1024*1024
}


const upload = multer({storage , fileFilter , limits})


module.exports = upload ;