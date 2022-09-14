import { Suspense } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ path, name }) => (
                <li key={path}>
                  <NavLink to={path} activeClassName="nav-active" exact>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Switch>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} render={() => <Component />} />
            ))}
            <Route path="/*">
              <Redirect to={routes[0].path} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
