'use strict';

const express = require('express');
const config = require('config');
const Twit = require('twit');

const app = express();

app.set('port', config.env.port);

app.use(express.static('public'));

const twit = new Twit({
  'consumer_key':        config.twitter.consumerKey,
  'consumer_secret':     config.twitter.consumerSecret,
  'access_token':        config.twitter.accessToken,
  'access_token_secret': config.twitter.accessTokenSecret,
});
const getTweet = config.tweet;

app.get('/taisha', (_req, res) => {
  const tweet = getTweet();
  if (tweet == null) {
    res.status(500).send('ツイートが設定されていません');
    return;
  }

  twit.post('statuses/update', {
    status: tweet,
  }, (err, _data) => {
    if (err == null) {
      res.status(200).send('ツイートしました');
    } else {
      res.status(500).send('ツイートできませんでした');
    }
  });
});

app.listen(app.get('port'), () => {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
