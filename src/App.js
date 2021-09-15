import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import BlogPost from "./components/BlogPost";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={About} path='/about' />
          <Route component={Cards} path='/' />
          <Route component={BlogPost} path='/blogpost' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
