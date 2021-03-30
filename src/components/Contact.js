import React from "react";

function Contact() {
    return (
        <div className="Contact">
            <img
                className="avatar"
                src="http://placekitten.com/200/300"
                alt="Kitten"
            ></img>
            <div className="status">
                <h3 className="name">Anita Sutton</h3>
                <div className="status-online"></div>
                <p className="status-text">online</p>
            </div>
        </div>
    );
}
export default Contact;
