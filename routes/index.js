const route = require('express').Router();
const Controller = require('../controllers/controller.js');

route.get('/', Controller.getAllReferralCode);
route.get('/search', Controller.getByReferralCode);
route.post('/add', Controller.addReferralCode);
route.get('/add', Controller.formAddReferralCode);
route.get('/:id/delete', Controller.deleteReferralCode);
route.post('/:id/edit', Controller.editReferralCode);
route.get('/:id/edit', Controller.formEditReferralCode);

module.exports = route;