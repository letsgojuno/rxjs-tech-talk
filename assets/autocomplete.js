import React from 'react';
import { Observable } from 'rxjs';
import { componentFromStream, createEventHandler } from 'recompose';

const isError = input => input instanceof Error;
const style = { height: '40vh', overflowY: 'scroll', outline: '1px solid' };

const githubSearchAPI = 'https://api.github.com/search/repositories?q=';

const Autocomplete = componentFromStream(props$ => {

  const { handler: onChange, stream: searchTerms$ } = createEventHandler();

  const result$ = searchTerms$
    .filter(term => term.length > 2)
    .debounceTime(500)
    .distinctUntilChanged()
    .switchMap(term =>
      Observable.ajax(`${githubSearchAPI}${term}`)
        .map(resp => resp.response.items.map(item => item.full_name))
        .catch(error => Observable.of(new Error(error)))
    )
    .startWith([]);

  return props$.combineLatest(result$, (props, result) => (
    <div>
      <input
        onChange={ev => onChange(ev.target.value)}
        placeholder="Enter search term..."
      />
      <br />
      <pre style={style}>
        {isError(result)
          ? 'An error has occured'
          : JSON.stringify(result, null, 4)}
      </pre>
    </div>
  ));
});

export default Autocomplete;
