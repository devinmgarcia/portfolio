import React from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";
import { useHistory } from "react-router-dom";

function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();

  return (
    <>
      <div onClick={handleShow} className="hamburger fa fa-bars fa-3x"></div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="offcanvas-width"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body">
          <div
            onClick={() => {
              history.push("./about");
            }}
            className="offcanvas-menu-item"
          >
            About Me
          </div>
          <a
            className="offcanvas-menu-item"
            target="blank"
            href="https://drive.google.com/file/d/1f1X63Npa9MrQy3cxrWVBnL6p1ICpWX5s/view"
          >
            Resume
          </a>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
