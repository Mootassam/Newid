import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [fullname, setFullName] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [nationality, setnationality] = useState("");
  const [message, setmessage] = useState("");
  const [loading, setloading] = useState(false);

  const submit = () => {
    try {
      setloading(true);
      const data = {
        fullname,
        email,
        phonenumber,
        nationality,
        message,
      };
      axios
        .post("https://mini-ringed-gastonia.glitch.me/sendemail", { data })
        .then((res) => {
          setFullName("");
          setemail("");
          setphonenumber("");
          setnationality("");
          setmessage("");
        })
        .catch((error) => {
          // Handle error
        })
        .finally(() => {
          setloading(false);
        });
    } catch (error) {
      setloading(false);
    }
  };

  return (
    <div className="col-lg-5" data-aos="fade">
      <div className="php-email-form section-bg">
        <h3>Contact Form</h3>
        <p>
          Feel free to reach out to us with any questions or inquiries. We're
          here to assist you every step of the way.
        </p>
        <div className="row gy-3 section-bg">
          <div className="col-md-12">
            <input
              type="text"
              name="fullname"
              className="form-control"
              placeholder="Full name"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="col-md-12">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              name="phonenumber"
              placeholder="Phone"
              value={phonenumber}
              onChange={(e) => setphonenumber(e.target.value)}
            />
          </div>
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              name="nationality"
              placeholder="Nationality"
              value={nationality}
              onChange={(e) => setnationality(e.target.value)}
            />
          </div>
          <div className="col-md-12">
            <textarea
              className="form-control"
              name="message"
              rows={6}
              placeholder="Do you have any questions"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            />
          </div>
          <div className="col-md-12 text-center">
            { loading &&  <div className="loading">Loading</div>} 
            <div className="error-message" />
            <div className="sent-message">
              Your quote request has been sent successfully. Thank you!
            </div>

            <div className="error-message">
              Form submission failed and no error message returned from
            </div>
            <button type="submit" onClick={() => submit()}>

              
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
