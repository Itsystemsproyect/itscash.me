import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import "./assets/css/Home.css";
import "./assets/css/LoginPage.css"

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={LoginPage} />
    </Router>
  );
}

export default App;
