var Rx = require('rx');
var request = require('request-promise');
var events = require('events');
var ee = new events.EventEmitter();

var eventStream = Rx.Observable.fromEvent(ee, 'url')

var oddStream = eventStream.filter(function(num) {
  if (num % 2) return num
})

var evenStream = eventStream.filter(function(num) {
  if (num % 2 === 0) return num;
})

oddStream.subscribe(function(data) {
  console.log("odd", data);
})

evenStream.subscribe(function(data) {
  console.log("even", data);
})

setInterval(function() {
  ee.emit('url', Math.floor(Math.random()*500));
}, 1000);