const Counter = Recompose.componentFromStream(props$ => {
  const {
    handler: onClick,
    stream: btnClick$
  } = Recompose.createEventHandler();




  // Stream logic
  const count$ = btnClick$
    .mapTo(1)
    .scan((count, n) => count + n, 0)
    .startWith(0);




  // Statless functional component.
  return props$.combineLatest(count$,
    (props, count) => (
      <div>
        Count: {count}
        <button onClick={onClick}>+</button>
      </div>
    )
  );
});

render(<Counter />, mountNode);
