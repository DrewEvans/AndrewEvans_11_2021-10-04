import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
// import useFetch from "./hooks/useFetch";
import { ErrorPage, About } from "./pages/index";
import "./App.scss";
import FooterPage from "./components/PageFooter";

const Home = lazy(() => import("./pages/Home"));
const ApartmentPage = lazy(() => import("./pages/ApartmentPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>...Loading</div>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/appartement/:id' component={ApartmentPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
