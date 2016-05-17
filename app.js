
import React , {Component , PropTypes} from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers  , applyMiddleware} from 'redux'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
//import DevTools from './devTools'

import * as reducers from './reducers'
import { App, Home, Foo, Bar ,Set} from './components'


const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const middleware = [thunk];

const finalCreateStore = applyMiddleware(...middleware)(createStore);

const store = finalCreateStore(reducer);

/*
const store = createStore(
  reducer
  //DevTools.instrument()
 // applyMiddleware(reducer)
)

*/
const history = syncHistoryWithStore(hashHistory, store)

class Approuter extends Component {
    render () {
      return (
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
         </Provider>  
      )
    }
}


export default Approuter
