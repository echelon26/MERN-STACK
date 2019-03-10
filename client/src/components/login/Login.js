import React, {Component} from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        
    };
    render() {
        return(
            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Login</h2>
            <form onSubmit ={this.handleSubmit}>
                <div className = "form-group">
                    <input 
                        type = "email"
                        placeholder = "Email"
                        className = "form-control"
                        name = "email"
                        onChange = {this.handleInputChange}
                        value = {this.state.email}
                   />
                </div>

                <div className = "form-group">
                    <input 
                        type = "password"
                        placeholder = "password"
                        className = "form-control"
                        name = "password"
                        onChange = {this.handleInputChange}
                        value = {this.state.password}
                   />
                </div>

                <div className = "form-group">
                    <button type = "submit" className="btn btn-primary">Login</button>
                </div>
            </form>
            </div>
        );
    }
}

export default Login;