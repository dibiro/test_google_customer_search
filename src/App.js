import React, { Component } from 'react';
import Navbar from './component/NavBar';
import SideBar from './component/SideBar';
import FormPrincipal from './component/FormPrincipal';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store'
import { Provider } from 'react-redux'
import { store } from './redux/store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className="App">
            <Navbar />
            <SideBar />
            <FormPrincipal />
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
