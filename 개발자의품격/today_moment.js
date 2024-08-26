// npm i moment
const moment = require("moment");

console.log("today", moment().format("YYYY-MM-DD"));
console.log("today+1day", moment().add(1,"day").format("YYYY-MM-DD"));
console.log("today+1week", moment().add(1,"week").format("YYYY-MM-DD"));
console.log("today+1month", moment().add(1,"month").format("YYYY-MM-DD"));