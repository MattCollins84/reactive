var Rx = require('rx');

var a = 5;
var eventStream =   Rx.Observable
                    .interval(1000)
                    .map(v => a);

eventStream.subscribe(function(data) {
  console.log(data);
});

setTimeout(function() {
    a = 10;
}, 3000)