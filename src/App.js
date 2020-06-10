import React from 'react';
import LandingPageContainer from "./Containers/LandingPageContainer";
import AuthenticationPage from "./Containers/AuthenticationPage";
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Route path="/auth" component={AuthenticationPage} />
        <Route path="/" exact component={LandingPageContainer} />
        </BrowserRouter>
    </div>
  );
}

export default App;
