import React from "react";
import './Login.css';
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useState } from "react";

const Login=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setFormerror] = useState({});

    const userLogin = async (e)=>{
        e.preventDefault();
        
        let formerrors = {}
        if(!email)
            formerrors.email = "Please enter your email address";

        if(!password)
            formerrors.password = "Please enter your password";

        setFormerror(formerrors);
        console.log("Email="+email+", Password="+password);
    }

    return (
        <>
            <div className="main-login-screen">
                <div className="container">
                    <h2 className="text-capitalize text-center text-light">Knowledge Management System</h2>                    
                    <div className="card shadow-lg">
                        <div className="card-header">
                            <div>
                                <FaUser size={70} color="#ddd" />
                            </div>
                            <h4 className="card-title text-light text mt-3">Member Login</h4>
                        </div>
                        <div className="card-body">
                            <div className="login-box">
                                <form action="" method="post" onSubmit={userLogin}>
                                    <div className="mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <FaEnvelope />
                                            </span>
                                            <input type="email" name="kmsemail" id="kmsemail" className="form-control" value={email} autoComplete="new-email" placeholder="Enter your email" />
                                        </div>
                                        
                                        <span className="text-warning">{error.email}</span>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <FaLock />
                                            </span>
                                            <input type="password" name="kmspassword" id="kmspassword" className="form-control" value={password} autoComplete="new-password" placeholder="Enter your password" />
                                        </div>
                                        <span className="text-warning">{error.password}</span>
                                    </div>
                                    
                                    <div className="form-group mt-4">
                                        <button type="submit" className="btn btn-primary rounded-pill w-100" >Sign In</button>      
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                        <div className="card-footer"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;