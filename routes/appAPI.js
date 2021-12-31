var express = require('express');
var Router = express.Router();
const appAPIController = require('../app/controllers/appAPIController')

var multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + '-' +  file.originalname)
    }
})
const brandsStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images/brands')
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + '-' +  file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    
    cb(null, true);
    
    } else if(file.mimetype === 'video/mp4' && fileSize <= 22282810) {
    
    cb(null, true);
    
    }
    
    else {
    
    cb(new Error('File no valid'), false);
    
    }
    
}

const upload = multer({ storage: storage, limits: {fileSize: "maxSize"}, fileFilter: fileFilter })
const uploadLogo = multer({ storage: brandsStorage, limits: {fileSize: "maxSize"} })


Router.get('/getcars', appAPIController.getCars)
Router.get('/getvideos', appAPIController.getVideos)
Router.get('/getbrands', appAPIController.getBrands)
Router.get('/', appAPIController.getPage)
Router.post('/createcars', upload.array('images', 10), appAPIController.createCars)
Router.post('/createvideos', upload.none(), appAPIController.createVideos)
Router.post('/createbrands', uploadLogo.fields([{name : 'imageURL', maxCount: 4}, {name: 'logoURL', maxCount: 1}, {name: 'bigLogoURL', maxCount: 1}]), appAPIController.createBrands)

module.exports = Router