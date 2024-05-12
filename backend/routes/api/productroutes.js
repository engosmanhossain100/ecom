const express = require('express');
const route = express.Router()
const multer  = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log(file);
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,uniqueSuffix + '-' + file.originalname )
    }
  })
  
  const upload = multer({ storage: storage })

const addCategoryController = require('../../controllers/addCategoryController');
const addSubCategoryController = require('../../controllers/addSubCategory');
const viewSubCategoryController = require('../../controllers/viewSubCategoryController');
const viewCategoryController = require('../../controllers/viewCategoryController');
const verifyToken = require('../../middleware/verifyToken');
const secureApi = require('../../middleware/secureApi');
const productController = require('../../controllers/productController');
const allProController = require('../../controllers/allProController');


route.post('/creatcategory', secureApi , verifyToken,  addCategoryController);
route.post('/creatsubcategory', addSubCategoryController);
route.post('/creatproduct',upload.single('avatar'), productController);

route.get('/allpro', allProController);
route.get('/allcat', viewCategoryController);
route.get('/allsubcat', viewSubCategoryController);

module.exports = route