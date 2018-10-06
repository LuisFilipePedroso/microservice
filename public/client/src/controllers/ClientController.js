const mongoose = require('mongoose');
const Client = mongoose.model('Client');

module.exports = {
    async index(req,res) {
        const clients = await Client.find();

        return res.json(clients);
    },

    async store(req,res) {
        const client = await Client.create(req.body);

        return res.json(client);
    }
}