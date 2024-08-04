import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    //create a router for going differnt paths in our URL
    <Router>
      <Switch>
        <Route path="/" exact component={EmployeeList} />
        <Route path="/employee/:id" component={EmployeeDetails} />
        <Route path="/add-employee" component={AddEmployee} />
      </Switch>
    </Router>
  );
}

export default App;
