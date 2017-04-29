import React from 'react';
import { Observable } from 'rxjs';
import { componentFromStream, createEventHandler } from 'recompose';

const DragDrop = componentFromStream(props$ => {
  const { handler: onDown, stream: mouseDown$ } = createEventHandler();
  const { handler: onMove, stream: mouseMove$ } = createEventHandler();
  const { handler: onUp, stream: mouseUp$ } = createEventHandler();

  const transforms$ = mouseDown$
    .flatMap(downEvent => {
      console.log(downEvent.nativeEvent.offsetX);
      const startX = downEvent.nativeEvent.offsetX;
      const startY = downEvent.nativeEvent.offsetY;

      return mouseMove$.map(moveEvent => {
        moveEvent.preventDefault();

        return {
          x: moveEvent.nativeEvent.offsetX - startX,
          y: moveEvent.nativeEvent.offsetY - startY
        };
      }).takeUntil(mouseUp$);
    }).startWith({x: 0, y: 0})

  return props$.combineLatest(transforms$, (props, transforms) => (
    <div onMouseUp={onUp}
      style={{
        background: 'whitesmoke',
        outline: '1px',
        width: 500,
        height: 500
      }}
    >
      <pre>{JSON.stringify(transforms, null, 4)}</pre>
      <div
        style={{
          transform: `translate(${transforms.x}px, ${transforms.y}px)`,
          width: '50px',
          height: '50px',
          background: 'cyan'
        }}
        onMouseDown={onDown}
        onMouseMove={onMove}
      />
    </div>
  ));
});

export default DragDrop;
