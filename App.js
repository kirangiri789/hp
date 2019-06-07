import React, { Component } from "react";
import SideBar from "./dashbord";
import Iteams from "./pages/Iteams";
import Home from "./pages/Home";
import Supplier from "./pages/Supplier";
import GenerateBills from "./pages/GenerateBills";
import Customer from "./pages/Customer";
import ReturnIteams from "./pages/ReturnIteams";
import Credits from "./pages/Credits";
import Reports from "./pages/Reports";
import Setting from "./pages/Setting";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default class App extends Component {
  // Link = () => {
  //   return (

  //   );
  // };

  render() {
    return (
      <Router>
        <div>
          <div className="row">
            <section className="col-sm-12">
              <h1 className="smk">
                <center>SMK FABRICATION</center>
              </h1>
            </section>
            <section className="col-sm-2">
              <Link>
                <div className="list-group">
                  <NavLink
                    className="list-group-item"
                    id="listgroupcol"
                    activeClassName="active"
                    to="/"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className="list-group-item"
                    id="listgroupcol"
                    activeClassName="active"
                    to="/Iteams"
                  >
                    Items
                  </NavLink>
                  <NavLink
                    className="list-group-item"
                    id="listgroupcol"
                    activeClassName="active"
                    to="/Supplier"
                  >
                    Supplier
                  </NavLink>
                  <NavLink
                    className="list-group-item"
                    id="listgroupcol"
                    activeClassName="active"
                    to="/GenerateBills"
                  >
                    Generate Bills
                  </NavLink>
                  <NavLink
                    className="list-group-item"
                    id="listgroupcol"
                    activeClassName="active"
                    to="/Customer"
                  >
                    Customer
                  </NavLink>
                  <NavLink
                    className="list-group-item"
                    id="listgroupcol"
                    activeClassName="active"
                    to="/ReturnIteams"
                  >
                    Return Items
                  </NavLink>
                  <NavLink
                    className="list-group-item"
                    id="listgroupcol"
                    activeClassName="active"
                    to="/Credits"
                  >
                    Credits
                  </NavLink>
                  <NavLink
                    className="list-group-item"
                    id="listgroupcol"
                    activeClassName="active"
                    to="/Reports"
                  >
                    Reports
                  </NavLink>
                  <NavLink
                    className="list-group-item"
                    id="listgroupcol"
                    activeClassName="active"
                    to="/Setting"
                  >
                    Setting
                  </NavLink>
                </div>
              </Link>
            </section>

            <Route exact path="/" component={Home} />
            <Route path="/Iteams" component={Iteams} />
            <Route path="/Supplier" component={Supplier} />
            <Route path="/GenerateBills" component={GenerateBills} />
            <Route path="/Customer" component={Customer} />
            <Route path="/ReturnIteams" component={ReturnIteams} />
            <Route path="/Credits" component={Credits} />
            <Route path="/Reports" component={Reports} />
            <Route path="/Setting" component={Setting} />
          </div>
        </div>
      </Router>
    );
  }
}
