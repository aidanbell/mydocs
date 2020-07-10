const express = require('express');
const router = express.Router();
const osmosisCtrl = require('../../controllers/osmosis');

router.get('/search?', osmosisCtrl.searchFor)

module.exports = router;