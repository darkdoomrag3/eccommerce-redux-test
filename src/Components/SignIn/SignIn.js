import React from 'react'
import FormInput from '../FormInput/FormInput';
import './signin.scss'
import CustomButton from '../CustomButton/CustomButton';
import { signInWithGoogle } from '../../firebase.utils';
import { auth } from 'firebase';

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

    }

    handelSubmit =async event => {
        event.preventDefault();
       const {email,password}=this.state;
       
     
       
       this.setState({ email: '', password: '' })
    }

    handelChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }


    render() {

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span> sign in with your email and password</span>
                <form onSubmit={this.handelSubmit}>
                    <FormInput name='email' type="email" label="email" value={this.state.email} handelChange={this.handelChange} required />
                    <FormInput name='password' type="password" handelChange={this.handelChange} label="password" value={this.state.password} required />

                    <div className="buttons">

                        <CustomButton type="submit" handelChange={this.handelChange} >Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} handelChange={this.handelChange} isGooglesignIn >Sign In With Google </CustomButton>
                    </div>



                </form>

            </div>
        )
    }
}


export default SignIn;
