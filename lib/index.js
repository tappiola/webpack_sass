"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var pandaGenerator = function pandaGenerator() {
  return "panda";
};

console.log(pandaGenerator());
var pr = new Promise(function (resolve, reject) {
  Math.random() < 0.8 ? resolve("jiggly puff") : reject("sick puff");
});
pr.then(function (result) {
  return console.log(result);
});