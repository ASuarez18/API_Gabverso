

module.exports.intCheck = (num,check) => {
  if (isNaN(num)) {
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

