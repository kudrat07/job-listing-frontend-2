import React from "react";
import Register from "../../components/Register/Register";

export default function RegisterPage() {
    return (
        <div style={{ display: "flex" }}>
            <Register />
            <img
                src="https://res.cloudinary.com/duicg4gyd/image/upload/v1732074899/signup-img_x4kzcj.jpg"
                style={{ maxHeight: "100vh", width: "50vw" }}
                alt="Login cover"
            />
        </div>
    );
}
