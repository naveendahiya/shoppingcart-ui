import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import ROUTES, { RenderRoutes } from "./config/routes";
import PersistentDrawerLeft from './components/drawer';


function App() {
  return (
    <>
    <BrowserRouter>
    <PersistentDrawerLeft />
    <RenderRoutes routes={ROUTES} />
    </BrowserRouter>
    </>
  );
}

export default App;
