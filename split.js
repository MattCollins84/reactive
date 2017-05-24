const Rx = require('rx');
const payload = {
	"red": true,
	"green": false,
	"blue": true
}

const input$ = Rx.Observable.create(function(observer) {
  observer.next(payload);
})

const subscribe = input$.subscribe(
  function(x) {
    console.log(x);
  }
)