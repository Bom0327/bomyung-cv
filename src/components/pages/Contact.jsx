import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import emailjs from "emailjs-com";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prevContact) => {
      return {
        ...prevContact,
        [name]: value
      };
    });
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "contact_template",
        e.target,
        "user_sFNHEz6haCKQB06lrXBns"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setContact({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }

  const [isDone, setIsDone] = useState(false);

  function submit(event) {
    setIsDone(true);
  }

  return (
    <section className="body-section">
      <div className="container-fluid">
        <div className="container">
          <h2>
            <i class="fas fa-address-book"></i> Contact me
          </h2>
          <hr />
          <Form onSubmit={sendEmail}>
            <FormGroup>
              <Label>
                <i className="fas fa-user"></i> Your Name
              </Label>
              <Input
                type="text"
                onChange={handleChange}
                name="name"
                value={contact.name}
              />
            </FormGroup>
            <FormGroup>
              <Label>
                <i className="fas fa-envelope"></i> Your email
              </Label>
              <Input
                type="email"
                onChange={handleChange}
                name="email"
                value={contact.email}
              />
            </FormGroup>
            <FormGroup>
              <Label>
                <i class="fas fa-tag"></i> Subject
              </Label>
              <Input
                type="text"
                onChange={handleChange}
                name="subject"
                value={contact.subject}
              />
            </FormGroup>
            <FormGroup>
              <Label>
                <i class="fas fa-comment"></i> Your message
              </Label>
              <Input
                type="textarea"
                rows="5"
                onChange={handleChange}
                name="message"
                value={contact.message}
              />
            </FormGroup>

            <Button type="submit" onClick={submit}>
              <i class="fas fa-paper-plane"></i> Send
            </Button>
            <span>&nbsp;&nbsp;</span>
            {isDone && (
              <span style={{ color: "red" }}>Successfully submitted!</span>
            )}
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
