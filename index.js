import React from "react";
import { render } from "react-dom";
import Rx from 'rxjs'
import { setObservableConfig } from 'recompose'

setObservableConfig({
  // Converts a plain ES observable to an RxJS 5 observable
  fromESObservable: Rx.Observable.from
});

import Presentation from "./presentation";

render(<Presentation/>, document.getElementById("root"));
