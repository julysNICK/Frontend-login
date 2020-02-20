import React from "react";
import { Container } from "react-bootstrap";
import "./main.css";
import FormBlog from "./FormBlog.js";
import Footer from "./FooterBlog.js";

function MainBlog() {
  return (
    <Container className="login">
      <FormBlog />
      <Footer
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu ipsum in turpis mollis molestie eget eu turpis. Nullam vel lorem et mi dignissim commodo. "
      />
    </Container>
  );
}

export default MainBlog;
