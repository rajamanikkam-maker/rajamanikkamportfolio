import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [inputValues, setInputValues] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { fname, lname, email, mobile, message } = inputValues;

    if (fname === "" || lname === "" || email === "" || mobile === "") {
      toast.error("All fields are required");
    } else if (!email.includes("@")) {
      toast.error("Invalid email");
    } else {
      try {
        const response = await fetch("http://localhost:6002/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            fname, lname, email, mobile, message
          })
        });

        const data = await response.json();

        if (data.status === 201) {
          toast.success("Your response has been submitted");
          setInputValues({
            fname: "",
            lname: "",
            email: "",
            mobile: "",
            message: ""
          });
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again later.");
      }
    }
  }

  return (
    <div className="container mb-3 contact">
      <h2 className='text-center'>Contact Us</h2>
      <div className="container mt-2">
        <Form className='row mt-2'>
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name='fname' value={inputValues.fname} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name='lname' value={inputValues.lname} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name='email' value={inputValues.email} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" name='mobile' value={inputValues.mobile} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} name="message" value={inputValues.message} onChange={handleInputChange} />
          </Form.Group>
          <div className='d-flex justify-content-center'>
            <Button variant="primary" className='col-lg-6' type="submit" onClick={handleFormSubmit}>
              Submit
            </Button>
          </div>
        </Form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Contact;
