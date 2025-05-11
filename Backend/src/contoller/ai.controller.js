const aiService = require('../services/ai.service')

module.exports.getResponse = async (req, res) => {
    const promt = req.query.promt;
    if (!promt) {
        return res.status(400).send('Promt is required')

    }
    const response = await aiService(prompt)
    res.send(response)
}