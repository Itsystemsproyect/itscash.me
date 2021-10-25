import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import PrivateRoute from "./components/routing/PrivateRoute";
import ProfilePage from "./pages/ProfilePage"; 
import AlertComponent from "./components/AlertComponent";
import "./assets/css/Home.css";
import Dashboard from "./views/Dashboard.js";


function App() {
  return (
    <AuthState>
      <AlertState>
      <AlertComponent />
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <PrivateRoute exact path="/register" component={ProfilePage} />
          <Route exact path="/Dashboard" component={Dashboard} />
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
