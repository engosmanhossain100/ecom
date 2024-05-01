const express = require('express');
const addCategoryController = require('../../controllers/addCategoryController');
const addSubCategoryController = require('../../controllers/addSubCategory');
const viewSubCategoryController = require('../../controllers/viewSubCategoryController');
const viewCategoryController = require('../../controllers/viewCategoryController');

const route = express.Router()

route.post('/creatcategory', addCategoryController);
route.post('/creatsubcategory', addSubCategoryController);


route.get('/allcat', viewCategoryController);
route.get('/allsubcat', viewSubCategoryController);

module.exports = route