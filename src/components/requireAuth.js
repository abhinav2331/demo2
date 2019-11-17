import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const RequireAuths = (ComposedComponent) => {

    class Authentication extends React.Component {
        static contextTypes = {
            router: PropTypes.object
        }

        componentWillMount() {
            //debugger;
            if (!this.props.authenticated) {
                this.props.history.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            //debugger;
            if (!nextProps.authenticated) {
                this.props.history.push('/');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    const mapStateToProps = (state) => {
        return { authenticated: state.EmployeeAuth.authenticated };
    }

    return (
        connect(mapStateToProps, null)(Authentication)
    )
}


export default RequireAuths;