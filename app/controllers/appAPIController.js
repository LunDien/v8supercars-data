const carsModel = require('../models/carsModel')
const videosModel = require('../models/videosModel')
const brandsModel = require('../models/brandsModel')

class appAPIController {
    getPage(req, res, next) {
        res.render('home')
    }

    getCars(req, res, next) {
        carsModel.find({})
            .then(cars => {
                res.json(cars)
                res.status(200)
            })
            .catch(next)
    }

    getVideos(req, res, next) {
        videosModel.find({})
            .then(videos => {
                res.status(200)
                res.json(videos)
            })
    }

    getBrands(req, res, next) {
        brandsModel.find({})
            .then(brands => {
                res.status(200)
                res.json(brands)
            })
    }


    createCars(req, res, next) {
        const imageURL = []
        for(var i = 0; i < req.files.length; i++) {
            imageURL.push(req.files[i].path)
        }
        const cars = new carsModel({
            ...req.body,
            imageURL: imageURL
        })
        cars.save()
        res.status(201)
        res.json(cars)
    }

    createVideos(req, res, next) {
        const videos = new videosModel({
            ...req.body
        })
        videos.save()
        res.status(201)
        res.json(videos)
    }

    createBrands(req, res, next) {
        const imageURL = []
        req.files['imageURL'].forEach(file => imageURL.push(file.path))
        const brands = new brandsModel({
            ...req.body,
            imageURL: imageURL,
            logoURL: req.files['logoURL'][0].path,
            bigLogoURL: req.files['bigLogoURL'][0].path
        })
        brands.save()
        res.status(201)
        res.json(brands)
    }
}

module.exports = new appAPIController