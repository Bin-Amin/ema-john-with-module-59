import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate('/shop')
    }

    const handleUserSingIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Login</h2>
                <form onSubmit={handleUserSingIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="pasword">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error ? 'Email and password not match' : ''}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className="form-submit" type="submit" value="Login" />
                </form>
                <p className="form-link-father">
                    New to Ema-John? <Link className="form-link" to="/singup">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;