import React, { Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ApplicationNote from "./components/ApplicationNote";

const Auth = React.lazy(() => import("./components/Auth"));

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact>
        <Auth />
      </Route>
    </Switch>
  );
  return (
    <div className="App">
      <ApplicationNote />
      <Router>

        <main>
          <Suspense
            fallback={
              <div className="">
                {/* <LoadingSpinner /> */}
                Loading...
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>

      </Router>
    </div>
  );
};

export default App;