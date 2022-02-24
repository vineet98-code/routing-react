import { Switch, Route } from "react-router-dom";
import Article from "./Article";
import Articles from "./Articles";
import Help from "./Help";
import Home from "./Home";
import NotFound from "./NotFound";



function Main() {
  return (
    <div className="page-content">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/articles" exact>
          <Articles />
        </Route>
        <Route path="/articles/:slug">
          <Article />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
