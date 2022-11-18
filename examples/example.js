
const gotime = require("../build/index.js");

const { dhms, unixToFormat } = gotime

const timestamp = Date.now();

console.log(dhms(timestamp) + "\n" + unixToFormat(timestamp))