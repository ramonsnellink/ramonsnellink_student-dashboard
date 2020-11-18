import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/NavBar";

import StudentDashboard from "./components/StudentDashboard";
import StudentList from "./components/StudentList";
import StudentPage from "./components/StudentPage";
import { StudentsProvider } from "./contexts/StudentsContext";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <StudentsProvider>
            <Route path="/" exact component={StudentDashboard} />
            <Route path="/students" exact component={StudentList} />
            <Route path="/students/:name" component={StudentPage} />
          </StudentsProvider>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
