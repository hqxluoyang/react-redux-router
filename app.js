
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
//import DevTools from './devTools'

import * as reducers from './reducers'
import { App, Home, Foo, Bar ,Set} from './components'
import Config from './services/config'
import eventBus from './services/eventBus'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(
  reducer
  //DevTools.instrument()
)
const history = syncHistoryWithStore(browserHistory, store)

Config.eventBus = new eventBus();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="foo" component={Foo}/>
          <Route path="bar" component={Bar}/>
          <Route path="set" component={Set}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('mount')
)
