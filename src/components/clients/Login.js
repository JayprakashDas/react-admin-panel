import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import { compose} from 'redux';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {firebaseConnect} from 'react-redux-firebase';

class Login extends Component {
    state={
        email:"",
        password:""
    }

    onChange =e=>{
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit=e=>{
        e.preventDefault();
        const{firebase} = this.props;
        const{email, password} = this.state;
        firebase.login({
            email,
            password
        }).catch(err=>alert('jjj'))
    }
    render() {
        return (
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                    <div className="card-body">
                        <h1 className="text-center pb-4 pt-3">
                            <div className="text-primary">
                                <i className="fas fa-lock"></i>
                                Login
                            </div>
                        </h1>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text" className="form-control"
                                    name="email" 
                                    value={this.state.email}
                                    onChange={this.onChange}/>
                                <label htmlFor="password">password</label>
                                <input 
                                    type="password" 
                                    className="form-control"
                                    name="password" 
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                                <input 
                                    type="submit"
                                    value="Login"
                                    className="btn btn-primary btn-block mt-4"/>
                            </div>
                        </form>
                    </div>
                </div>
              </div>  
            </div>
        )
    }
}

Login.propTypes = {
    firebase :PropTypes.object.isRequired
}

export default firebaseConnect()(Login);