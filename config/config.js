var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'jsontodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/jsontodb-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'jsontodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/jsontodb-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'jsontodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/jsontodb-production'
  }
};

module.exports = config[env];
