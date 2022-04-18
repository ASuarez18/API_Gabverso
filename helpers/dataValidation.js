

module.exports.intCheck = (num,check) => {
  if (isNaN(num) || num < 0) {
    return false;
  }
  return check;
}

module.exports.stringCheck = (str,check) => {
  if (str == "") {
    return false;
  }
  return check;
}

