import React from "react";
import Login from "../../components/Login/Login";

export default function LoginPage() {
    return (
        <div style={{ display: "flex" }}>
            <Login />
            <img src="https://res.cloudinary.com/duicg4gyd/image/upload/v1732074899/signup-img_x4kzcj.jpg" alt="" style={{ maxHeight: "100vh", width: "50vw" }} />
        </div>
    );
}
