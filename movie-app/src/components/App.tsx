import Home from "./Home";
import Menu from "./Menu";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Movies from  './MoviesList/MovieList';
import About from "./Abount/Abount";
import Favourites from "./Favourites/Favourites";

const App = () => {
  return (
    <div>
      <Menu />
      <Container className="my-5">
        <main>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/favourites">
              <Favourites />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </main>
      </Container>
    </div>
  );
};

export default App;
