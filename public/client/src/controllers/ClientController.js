const mongoose = require('mongoose');
const Client = mongoose.model('Client');

module.exports = {
    async index(req,res) {
        const clients = await Client.find();

        return res.json(clients);
    }
}