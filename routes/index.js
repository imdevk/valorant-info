const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/agents', async (req, res) => {
    try {
        const response = await axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true');
        const agents = response.data.data.filter(agent => agent.displayName); // Filter out agents with missing displayName
        res.render('agents', { agents });
    } catch (error) {
        console.error('Error fetching agents:', error);
        res.status(500).send('Error fetching agents');
    }
});

router.get('/agent/:id', async (req, res) => {
    try {
        const agentId = req.params.id;
        const response = await axios.get(`https://valorant-api.com/v1/agents/${agentId}`);
        const agent = response.data.data;
        res.render('agent', { agent });
    } catch (error) {
        console.error('Error fetching agent:', error);
        res.status(500).send('Error fetching agent');
    }
});

router.get('/maps', async (req, res) => {
    try {
        const response = await axios.get('https://valorant-api.com/v1/maps');
        const maps = response.data.data;
        res.render('maps', { maps });
    } catch (error) {
        console.error('Error fetching maps:', error);
        res.status(500).send('Error fetching maps');
    }
})

router.get('/weapons', async (req, res) => {
    try {
        const response = await axios.get('https://valorant-api.com/v1/weapons');
        const weapons = response.data.data;
        res.render('weapons', { weapons });
    } catch (error) {
        console.error('Error fetching weapons:', error);
        res.status(500).send('Error fetching weapons');
    }
})

router.get('/weapon/:id', async (req, res) => {
    try {
        const weaponId = req.params.id;
        const response = await axios.get(`https://valorant-api.com/v1/weapons/${weaponId}`);
        const weapon = response.data.data;
        res.render('weapon', { weapon });
    } catch (error) {
        console.error('Error fetching weapon:', error);
        res.status('weapon', { weapon });
    }
})

router.get('/bundles', async (req, res) => {
    try {
        const response = await axios.get('https://valorant-api.com/v1/bundles');
        const bundles = response.data.data;
        res.render('bundles', { bundles });
    } catch (error) {
        console.error('Error fetching bundles:', error);
        res.status(500).send('Error fetching bundles');
    }
})

module.exports = router;