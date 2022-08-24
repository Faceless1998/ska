import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home.js";
import About from "./components/about/About";
import News from "./components/news/News";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import { Newsingle } from "./components/news/Newsingle";

import { Header } from "./components/header/Header";

const App = () => {
  return (
    <>
      <div>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/news" component={News} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/news/:id" component={Newsingle} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default App;
