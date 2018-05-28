import './assets/css/App.css'
import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './components/NotFound'
import {createStore} from 'redux'
import rootReducer from './modules/rootReducer'
import {Provider} from 'react-redux'


// Creating store
let store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
