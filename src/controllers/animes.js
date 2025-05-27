const { Animes } = require('../models');

async function createAnime(req, res) {
    const anime = req.body;

    try {
        const animeCreated = await Animes.create(anime);
        res.status(201).send(animeCreated);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = {
    createAnime
}