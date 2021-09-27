module.exports = (instance, attributes) => {
  const result = {};

  for (const attribute of attributes) {
    if (instance[attribute]) {
      result[attribute] = instance[attribute];
    }
  }

  return result;
};
