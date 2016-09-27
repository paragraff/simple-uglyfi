var uglifyJS = require("uglify-js"),
	fs = require('fs');

fs.writeFileSync('result_core.js', uglifyJS.minify(['core.js']).code);  // 234(9), 236(7), 240(5), 270(3) kB vs 261 kB (h.6ee075)

fs.writeFileSync('result_goods.js', uglifyJS.minify(['goods.js']).code); // 363(9), 364(7), 371(5), 416(3) vs 400 kB (h.6ee075)