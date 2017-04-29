const runPromise = () => {
  console.clear();

  const p = new Promise(resolve => {
    console.log('I\'m not lazy yo');
    resolve(10);
  });
  // p.then(console.log)
  // p.then(console.log)
}





let runObservable = () => {
  console.clear();

  const o = Rx.Observable.create(observer => {
    console.log('I am lazy yo');
    observer.next(10);
    observer.next(11);
  });
  // o.subscribe(console.log);
  // o.subscribe(console.log);
}




















const Console = () => (
  <div>
    <h2>Promise</h2>
    <button onClick={runPromise}>Run Promise</button>

    <hr />

    <h2>Observable</h2>
    <button onClick={runObservable}>Run Observable</button>
  </div>
)
render(<Console />, mountNode);
