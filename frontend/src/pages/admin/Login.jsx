import React from "react";
import './Login.css';
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AdminLogin=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, seterrors] = useState({});
    const [formerrors, setFormerror] = useState({});

    const navigate = useNavigate();

    const userLogin = async (e)=>{
        e.preventDefault();
        
        let errors = {}
        let formerrors = {};
        
        if(!email)
            errors.email = "Please enter your email address";

        if(!password)
            errors.password = "Please enter your password";

        seterrors(errors);

        //console.log("Email="+email+", Password="+password);

        try {
            const res = await axios.post("http://localhost:3000/users/login",{
                email:email,
                password:password
            });
            
            const response = res.data;
            console.log(response);
            if(response.success){
                localStorage.setItem('token',response.token);
                navigate("/admin/dashboard");
            }else{
                //console.log(response)
                formerrors.error =error.response.data.message;
            }
            
        } catch (error) {
            if (error.response) {
                console.log("Backend Message:", error.response.data.message);
                formerrors.error =error.response.data.message;
            } else {
                console.log("Other Error:", error.message);
                formerrors.error =error.message;
            }            
        }    
        
        setFormerror(formerrors);
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
                            <h4 className="card-title text-light text mt-3">Admin Login</h4>
                        </div>
                        <div className="card-body">
                            <div className="login-box">
                                <div className="text-warning text-center fw-medium mb-3">{formerrors.error}</div>
                                <form action="" method="post" onSubmit={userLogin}>
                                    <div className="mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <FaEnvelope />
                                            </span>
                                            <input type="email" name="kmsemail" id="kmsemail" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} autoComplete="new-email" placeholder="Enter your email" />
                                        </div>
                                        
                                        <span className="text-warning">{error.email}</span>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <FaLock />
                                            </span>
                                            <input type="password" name="kmspassword" id="kmspassword" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} autoComplete="new-password" placeholder="Enter your password" />
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

export default AdminLogin;