import React, {useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Login submitted");
    };
    
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label> 
                <input
                    type="email" 
                    id="email"
                    value={email}
                    onchange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label> 
                <input
                    type="password" 
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> 
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;