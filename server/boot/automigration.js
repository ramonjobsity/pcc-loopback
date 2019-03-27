'use strict';

module.exports = function(app) {
  app.dataSources.mysqlDs.autoupdate(function(err) {
    if (err) throw err;
  });
};
