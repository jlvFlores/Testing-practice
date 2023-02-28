const stringLength = (string) => {
  if (string.length < 1) {
    throw new Error('String length is to short');
  } else if (string.length > 10) {
    throw new Error('String length is to long');
  } else {
    return string.length;
  }
}

module.exports = stringLength;