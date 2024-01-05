const { DEFAULT_PAGE } = require("../utils/constants");

function pageMiddleware(req, res, next) {
  const { page, take } = req.query;

  if (!page) {
    req.query.page = DEFAULT_PAGE.page;
  }

  if (!take) {
    req.query.take = DEFAULT_PAGE.take;
  }

  next();
}

module.exports = { pageMiddleware };