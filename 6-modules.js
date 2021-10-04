const names = require('./4-names');
const utils = require('./5-utils');

require('./7-mind-grenade'); //this will run the functions inside in 7-mind-grenade

utils.sayHi(names.john);
utils.sayHi(names.peter);
utils.sayHi('Joseph Figz');