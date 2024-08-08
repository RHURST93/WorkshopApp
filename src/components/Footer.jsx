import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#4a07b5' }} className="page-footer font-small blue pt-4  text-light">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Workshop</h5>
            <p>Workshop is designed to be a fun way to test the waters with HTML, CSS, and Javascript.</p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0"/>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.nucamp.co">Nucamp</a></li>
              <li><a href="https://www.javascript.com">Javascript</a></li>
              <li><a href="https://www.html.com">HTML</a></li>
              <li><a href="https://www.w3schools.com/css/">CSS</a></li>
            </ul>
          </div>

          
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © {currentYear} Copyright:
        <a href="https://hurstdevelopment.com/">HurstDevelopment.com</a>
      </div>
    </footer>
  );
};

export default Footer;
