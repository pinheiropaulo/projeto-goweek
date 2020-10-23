const Tweet = require('../models/Tweet');

module.exports = {
  async index(req, res) {
    const tweet = await Tweet.find({}).sort('-createAt');

    return res.json(tweet);
  },

  async store(req, res) {
    const tweet = await Tweet.create(req.body);

    req.io.emit('tweet', tweet);

    return res.json(tweet);
  },
};
