import "./App.css";
import { useState } from "react";
import { moviesData } from "./Data";
import MoviesList from "./Components/moviesList";
import AddMovie from "./Components/addMovie";
import Search from "./Components/search";
import { Route, Switch, Redirect } from "react-router-dom";
import Description from "./Components/Description";
import Error from "./Components/Error";

function App() {
  const [movies, setMovie] = useState(moviesData);
  const [search, setSearch] = useState("");
  const add = (newMovie) => setMovie([...movies, newMovie]);
  return (
    <div className="App">
      <div className="topNav">
        <Search setSearch={setSearch} />
        <AddMovie add={add} />
      </div>
      <Switch>
        <Redirect exact from="/" to="/home" />

        <Route
          exact
          path="/home"
          render={(props) => <MoviesList movies={movies} search={search} />}
        />

        <Route
          path="/movies/:id"
          render={(props) => <Description moviesData={moviesData} {...props} />}
        />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
