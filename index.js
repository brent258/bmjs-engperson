module.exports = function(pronoun) {
  if (pronoun === undefined) {
    return 'singular';
  }
  if (pronoun.toUpperCase() === 'I') {
    return 'first';
  }
  else if (pronoun.toUpperCase() === 'YOU' || pronoun.toUpperCase() === 'THEY' ||
  pronoun.toUpperCase() === 'THESE' || pronoun.toUpperCase() === 'THOSE' || pronoun.toUpperCase() === 'WE') {
    return 'plural';
  }
  else {
    return 'singular';
  }
};
