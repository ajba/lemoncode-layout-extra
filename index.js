var pjson = require('./package.json');
console.log(pjson.version);

document.getElementById("footer").innerHTML += " " + pjson.version;