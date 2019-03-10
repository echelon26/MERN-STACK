import React ,{Component} from 'react';

class Signup extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
        }
        this.handleInputChange =this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            name: this.state.name,
            email:this.state.email,
            password: this.state.password
        }
        console.log(user);
    };

    render() {
        return(
            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Registration</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    onChange={ this.handleInputChange }
                    value={ this.state.name }
                    />
                </div>
                <div className="form-group">
                    <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Signup
                    </button>
                </div>
            </form>
        </div>
        );
    }
}

export default Signup;