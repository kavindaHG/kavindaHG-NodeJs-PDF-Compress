const express = require ('express')
const multer = require ('multer')
const path = require ('path')
const {compress_controller} = require ('../controllers/compress_controller')
const router  = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });

router.post('/uploads' , upload.single('pdf'), compress_controller)
  module.exports = router
  


