import React, {Component} from 'react';
import axios from 'axios';
// import history from '../history';

class AuthenticationPage extends Component {

    state={
        username:'',
        password:'',
        value:false
    }

    handleChange=(e)=>{
        this.setState({
                          [e.target.name]:e.target.value
                      })
    }

    handleAuth= async ()=> {
        var user = {
            "username": this.state.username,
            "password": this.state.password
        }
        // const response = await fetch('http://localhost:8080/prattle/rest/user/auth', {
        //     method: 'POST',
        //     body: JSON.stringify(user),
        //     headers: {
        //         'content-type': 'application/json',
        //         "Access-Control-Allow-Origin": "*"
        //     }
        // })
        // if (response) {
        //     this.props.history.push('/');
        // } else {
        //     this.setState({value: !this.state.value})
        // }
        axios.post('http://localhost:8080/prattle/rest/user/auth',user).then((err,res)=>{
            if(res){
                this.props.history.push('/');
            }
            else{
                this.setState({value: !this.state.value})
            }
        })
    }


    render() {
        return (
            <div>
                <input name="username" type="text" id="username"
                       value={this.state.username} onChange={e=>this.handleChange(e)}
                       placeholder="Username"/>
                <br/>
                <input name="password" type="text" id="password"
                       value={this.state.password} onChange={e=>this.handleChange(e)}
                       placeholder="Password"/>
                <br/>
                <button type="button" onClick={this.handleAuth}>Submit</button>
                {this.state.value?<div>The details entered are incorrect</div>:null}
            </div>
        );
    }
}

export default AuthenticationPage;
