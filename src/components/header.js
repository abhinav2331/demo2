import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


class Header extends React.Component {

    
    renderLinks() {
        if (this.props.authenticated) {
            return [
                <li className="nav-item" key="ho">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>,
                <li className="nav-item" key="home">
                    <Link to="/dashboard" className="nav-link">
                        Dashboard
                    </Link>
                </li>,
                <li className="nav-item" key="employeeprofile">
                    <Link to="/employeeprofile" className="nav-link">
                        Employee Profile
                    </Link>
                </li>,
                <li className="nav-item" key="addnewpost">
                    <Link to="/addnewpost" className="nav-link">
                        Add New Post
                    </Link>
                </li>,
                <li className="nav-item" key="signout">
                    <Link to="/signout" className="nav-link">
                        Sign Out
                    </Link>
                </li>
            ];
        } else {
            return [                
                <li className="nav-item" key="login">
                    <Link to="/login" className="nav-link">
                        Sign in
                    </Link>
                </li>,
                <li className="nav-item" key="signup">
                    <Link to="/signup" className="nav-link">
                        Sign Up
                    </Link>
                </li>
            ];
        }
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Web API</a>
                        </div>
                        <ul className="nav navbar-nav pull-right">
                            {this.renderLinks()}
                        </ul>
                    </div>
                </nav>
            </header>

        )
    }
}

const mapStateToProps = (state) => {
    return { authenticated: state.EmployeeAuth.authenticated };
};

export default connect(mapStateToProps)(Header);