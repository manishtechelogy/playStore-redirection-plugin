
var exec = require('cordova/exec');

function AppRedirection() { }

AppRedirection.prototype.open = function(appId, callbackContext) {
    callbackContext = callbackContext || { };
    exec(callbackContext.success || null, callbackContext.error || null, 'AppRedirection', 'open', [appId]);
};

AppRedirection.prototype.search = function(key, callbackContext) {
    callbackContext = callbackContext || { };
    exec(callbackContext.success || null, callbackContext.error || null, 'AppRedirection', 'search', [key]);
};

var market = new AppRedirection();
module.exports = market;
