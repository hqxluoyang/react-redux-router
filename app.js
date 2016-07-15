
import React , {Component , PropTypes} from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers  , applyMiddleware} from 'redux'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import RouterTree from './components/router/routerTree'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
//import DevTools from './devTools'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as reducers from './reducers'



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
            <div>
              <RouterTree history={history} />
            </div>  
         </Provider>  
      )
    }
}


export default Approuter
