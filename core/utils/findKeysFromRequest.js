const debugLogger = requireUtil("debugLogger");

module.exports = (req, attributes) => {
  const result = {};
  // debugLogger(req.body, req.params, req.query, attributes);

  for (const attribute of attributes) {
    if (req.body && req.body[attribute]) {
      result[attribute] = req.body[attribute];
    }
    if (req.params && req.params[attribute]) {
      result[attribute] = req.params[attribute];
    }
    if (req.query && req.query[attribute]) {
      result[attribute] = req.query[attribute];
    }
  }

  return result;
};
