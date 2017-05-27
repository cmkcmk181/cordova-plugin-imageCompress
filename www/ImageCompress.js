var exec = require('cordova/exec');

exports.compress = function(arg0, success, error) {
    exec(success, error, "ImageCompress", "compress", [arg0]);
};
