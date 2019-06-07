import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../service/PostData';
import "../css/Login.css"
import "../App.css"
export default class Login extends Component {
constructor(props){
    super(props);
    this.state={
        emailid:'',
        password:'',
        redirect: false
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
}
    login(){
        if(this.state.emailid&& this.state.password){
            PostData('login', this.state).then((result)=>{
                let responseJSON = result;
                if(responseJSON.userData)
                {
                    sessionStorage.setItem('userData', responseJSON);
                    this.setState({redirect:true});
                }else{
                console.log("Login error");
            }   })
        }
    }
    onChange(e){
    this.setState({[e.target.name]: e.target.value});
       
    }
    render() {
  return (
    <div style={{background:"lightsteelblue", height:"400px", paddingLeft:"70px", paddingTop:"70px", border : "1px "}}> 
    <section className="col-sm-7">
        <center><h1>Login Form</h1>
    <input type="text" name="emailid" placeholder="Username" required onChange={this.onChange} />
        <input type="password" name="password" placeholder="Password" required onChange={this.onChange}/>
        <input type="submit" value="Login" className="button" onClick={this.login}></input>
        </center>
        </section>
    </div>
  );
}
}
