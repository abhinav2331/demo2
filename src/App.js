import React from "react";
//import { connect } from "react-redux";
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import History from './history.js';


import Header from "./components/header";
import Defaulthome from "./components/default.home"
import Login from "./components/login";
import Home from "./components/home";
import Signout from "./components/signout";
import Signup from "./components/signup";
import Currentemployee from "./components/employeeProfile";
import RequireAuths from "./components/requireAuth";
import Addnewpost from "./components/addNewPost";
import Notfound from "./components/404";
import Articledetail from "./components/articleDetail";
import Userdetail from "./components/userDetail";


class App extends React.Component {
    
    render() {
        return (
            <section className="container">
                <section>
                    <BrowserRouter>
                        <Router history={History}>
                            <section>
                                <Header />
                                <Switch>
                                    <Route exact path="/" component={Defaulthome} />
                                    <Route exact path="/dashboard" component={RequireAuths(Home)} />
                                    <Route exact path="/login" component={Login} />
                                    <Route exact path="/signout" component={Signout} />
                                    <Route exact path="/signup" component={Signup} />
                                    <Route exact path="/employeeprofile" component={RequireAuths(Currentemployee)} />
                                    <Route exact path="/addnewpost" component={RequireAuths(Addnewpost)} />
                                    <Route path="/article/:id" component={Articledetail} />
                                    <Route path="/@:username" component={Userdetail} />
                                    
                                    <Route path="*" component={Notfound} />
                                    

                                    {/*<Route exact path="/" component={Defaulthome} />                                    
                                    <Route exact path="/dashboard" component={Home} />
                                    <Route exact path="/login" component={Login} />
                                    <Route exact path="/signout" component={Signout} />
                                    <Route exact path="/signup" component={Signup} />
                                    <Route exact path="/employeeprofile" component={Currentemployee} />
                                    <Route exact path="/addnewpost" component={Addnewpost} />
                                    <Route path="*" component={Notfound} />*/}
                                    
                                </Switch>
                            </section>
                        </Router>
                    </BrowserRouter>
                </section>
            </section>
        )
    }
}

export default App;
