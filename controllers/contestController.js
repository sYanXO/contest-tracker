const Contest = require('../models/Contest');
const axios = require('axios');

// Fetch contests from Codeforces, CodeChef, and LeetCode
exports.getContests = async (req, res) => {
  try {
    const codeforcesContests = await axios.get('https://codeforces.com/api/contest.list');
    const contests = codeforcesContests.data.result.map(contest => ({
      name: contest.name,
      platform: 'Codeforces',
      startTime: new Date(contest.startTimeSeconds * 1000),
      duration: contest.durationSeconds,
      url: `https://codeforces.com/contest/${contest.id}`,
    }));

    res.json(contests);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contests' });
  }
};

// Bookmark a contest
exports.bookmarkContest = async (req, res) => {
  try {
    const contest = await Contest.findById(req.params.id);
    contest.isBookmarked = !contest.isBookmarked;
    await contest.save();
    res.json(contest);
  } catch (error) {
    res.status(500).json({ error: 'Failed to bookmark contest' });
  }
};