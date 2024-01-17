import React from 'react'
import "./footer.css"

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>HI</h4>
            <p> I'm R. Rajamanikkam. I'm a passionate developer creating amazing web experiences.</p>
            <p className='d-flex'>
            <a href="https://www.linkedin.com/in/raja-manikkam-r-6ba388281/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/rajamanikkam-maker?tab=repositories" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="mailto:rajamanikkam451@gmail.com"><i className="far fa-envelope"></i></a>

            </p>
          </div>
          <div className="second mt-5">
          <h4>Contact Me</h4>
            <p>Email: <a href="mailto:rajamanikkam451@gmail.com">rajamanikkam451@gmail.com</a></p>
            <p>Phone: +91 7339147556</p>
          </div>
          <div className="third mt-5">
  <h4>About</h4>
  <p>Flow by Resume</p>
  <a href="https://drive.google.com/file/d/1GfaDIuxtC7Utqtbgs2qdbSe0eWFqRBOf/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
    Download Resume (PDF)
  </a>
</div>
     
        </div>
      </div>
    </>
  )
}

export default Footer