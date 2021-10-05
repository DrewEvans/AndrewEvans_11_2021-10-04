import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
// import useFetch from "./hooks/useFetch";
// import { Home, ApartmentPage, ErrorPage } from "./pages/index";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const ApartmentPage = lazy(() => import("./pages/ApartmentPage"));

function App() {
  // const { response, loading, error } = useFetch(
  //   "http://localhost:5000/api/data",
  //   {}
  // );
  // const apartments = response.data;

  // // if (apartments) {
  // //   apartments.map((apartment, index) => {
  // //     console.log(apartment, index);
  // //   });
  // // }

  // apartments && !loading
  //   ? console.log("apartments after load")
  //   : console.log("no aparts after load");
  // !error ? console.log(true) : console.log(false);

  // console.log(response);
  // console.log(loading);
  // console.log(error);
  // // const apartments = Array.from(response.data);

  // // response.data.map((x) => console.log(x.id));

  return (
    <>
      <Router>
        <Suspense fallback={<div>...Loading</div>}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/appartement/:id' component={ApartmentPage} />
            {/* <Route exact path='/erreurPage' component={ErrorPage} /> */}
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
