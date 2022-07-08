import "./App.css";
import CreateProposal from "./CreateProposal";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Homepage";

function App() {
  console.log("okay");
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Homepage} />
        <Route path="/newproposal" exact component={CreateProposal} />
      </Router>
    </div>
  );
}

export default App;
