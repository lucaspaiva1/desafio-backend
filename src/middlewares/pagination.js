const ITEMS_PER_PAGE = 10;
const DEFAULT_PAGE = 1;

function parseNumber(value, defaultValue) {
  return isNaN(value)
    ? defaultValue
    : Math.abs(Number.parseInt(value)) || defaultValue;
}

function handlePagination(req, res, next) {
  req.query.limit = parseNumber(req.query.rows, ITEMS_PER_PAGE);
  req.query.page = parseNumber(req.query.page, DEFAULT_PAGE);
  req.query.skip = req.query.page ? (req.query.page - 1) * req.query.limit : 0;

  next();
}

module.exports = handlePagination;
