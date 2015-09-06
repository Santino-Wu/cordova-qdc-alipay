var exec = require('cordova/exec');

var alipay = {
  pay: function(payInfo, successFn, failureFn) {
    exec(successFn, failureFn, 'Alipay', 'pay', [ payInfo ]);
  }
};

module.exports = alipay;
