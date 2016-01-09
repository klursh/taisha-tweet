'use strict';

module.exports = {
  env: {
    port: process.env.PORT || 3000,
  },
  twitter: {
    consumerKey:        'your consumer key',
    consumerSecret:     'your consumer secret',
    accessToken:        'your access token',
    accessTokenSecret:  'your access token',
  },
  tweet: () => {
    const now = new Date();
    return `${now.getHours()}時${now.getMinutes()}分に退社しました。`;
  },
};