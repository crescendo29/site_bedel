import React from "react";
import Title from "../components/Title";
import Nav from "../components/Nav";
import email from "../images/email.svg";
import phone from "../images/phone.svg";
import mobile from "../images/mobile.svg";

const contact = () => {
  return (
    <div>
      <Title />
      <Nav />
      <div className="card">
        <div className="contact">
          <h2>Didier Bedel</h2>
          <p>48 rue de Kermenguy</p>
          <p>29200 Brest</p>
          <div className="contact-email">
            <img src={email} alt="email" />
            <p>didierbedel@gmail.com</p>
          </div>
          <div className="contact-phone">
            <img
              src={phone}
              alt="telephone fixe"
            />
            <p>02 98 03 78 82</p>
          </div>
          <div className="contact-mobile">
            <img
              src={mobile}
              alt="telephone mobile"
            />
            <p>06 72 78 36 18</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
