import React, { useState } from 'react';
import { BrowserRouter, Link, Switch, Routes, Route } from 'react-router-dom';
import Main from './view/Main';
import ViewOne from './view/ViewOne';
import Update from './view/Update';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} exact path="/home" default /> 
          <Route element={<ViewOne />} path="/product/:_id"/>
          <Route element={<Update/>} path="/people/edit/:_id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;