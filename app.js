
import React , {Component , PropTypes} from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers  , applyMiddleware} from 'redux'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
//import DevTools from './devTools'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as reducers from './reducers'
import { App, Home, Feedback, Bar ,Set} from './components'


const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const middleware = [thunk];

const finalCreateStore = applyMiddleware(...middleware)(createStore);

const store = finalCreateStore(reducer);

const history = syncHistoryWithStore(hashHistory, store)

class Approuter extends Component {
    render () {
      return (
         <Provider store={store}>
          <MuiThemeProvider>
            <div>
              <Router history={history}>
                <Route path="/" component={App}>
                  <IndexRoute component={Home}/>
                  <Route path="foo" component={Feedback}/>
                  <Route path="bar" component={Bar}/>
                  <Route path="set" component={Set}/>
                </Route>
              </Router>
            </div>
          </MuiThemeProvider>  
         </Provider>  
      )
    }
}


export default Approuter
