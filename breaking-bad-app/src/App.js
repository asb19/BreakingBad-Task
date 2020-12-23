import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/ui/Header";
import CharacterUi from "./components/characters/CharacterUi";
import CharacterItem from "./components/characters/CharacterItem";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      setItems(result.data);
      setLoading(false);
    };
    fetchData();
  }, [isLoading]);
  return (
    <div className="container">
      <Header />

      <Router>
        <Switch>
          <Route exact path="/item" component={CharacterItem} />
          <Route exact path="/">
            <CharacterUi items={items} isLoading={isLoading} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
