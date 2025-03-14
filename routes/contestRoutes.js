const express = require('express');
const router = express.Router();
const contestController = require('../controllers/contestController');

// Fetch contests
router.get('/contests', contestController.getContests);

// Bookmark a contest
router.post('/contests/:id/bookmark', contestController.bookmarkContest);

module.exports = router;