import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import ROUTES, { RenderRoutes } from "./config/routes";
import PersistentDrawerLeft from './components/drawer';
import { Provider } from 'react-redux';
import store from './components/store';

function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <PersistentDrawerLeft />
    <RenderRoutes routes={ROUTES} />
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
