var operationData = (() => {
  var add = (fVal, sVal) => {
    var values = convertValues(fVal, sVal);
    var result = values[0] + values[1];
    return result;
  };
  var sub = (fVal, sVal) => {
    var values = convertValues(fVal, sVal);
    var result = values[0] - values[1];
    return result;
  };
  var mul = (fVal, sVal) => {
    var values = convertValues(fVal, sVal);
    var result = values[0] * values[1];
    return result;
  };
  var division = (fVal, sVal) => {
    var values = convertValues(fVal, sVal);
    var result = values[0] / values[1];
    return result;
  };
  var convertValues = (fVal, sVal) => {
    var fVal = parseInt(fVal);
    var sVal = parseInt(sVal);
    return [fVal, sVal];
  };
  return {
    addition: add,
    subtraction: sub,
    multiplication : mul,
    division : division
  };
})();
