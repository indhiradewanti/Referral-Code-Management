const { Op } = require('sequelize')
const { Referral } = require('../models')

class Controller {
    static getAllReferralCode(req, res) {
        Referral
            .findAll({
                order: [['id', 'ASC']]
            })
            .then(data => {
                res.render('homepage', { data })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getByReferralCode(req, res) {
        Referral
            .findAll({
                where: {
                    code: {
                        [Op.like]: `%${req.query.code.toUpperCase()}%`
                    }
                },
                order: [['id', 'ASC']]
            })
            .then(data => {
                res.render('homepage', { data })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static formAddReferralCode(req, res) {
        const context = 'Add'
        res.render('formpage', { context })
    }

    static addReferralCode(req, res) {
        const { code, description, type, createdBy } = req.body
        Referral
            .findAll()
            .then(data => {
                let totalData = data.length
                return Referral
                    .create({
                        id: totalData + 1,
                        code: code.toUpperCase(),
                        description,
                        type: type.toUpperCase(),
                        createdBy
                    })
            })
            .then(data => {
                res.redirect('/')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static deleteReferralCode(req, res) {
        console.log(req.params.id)
        Referral
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(data => {
                res.redirect('/')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static formEditReferralCode(req, res) {
        const context = 'Edit'
        Referral
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(data => {
                res.render('formpage', { data, context })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editReferralCode(req, res) {
        const { code, description, type, createdBy } = req.body
        Referral
            .update({ code, description, type, createdBy }, {
                where: {
                    id: req.params.id
                }
            })
            .then(data => {
                res.redirect('/')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = Controller;