import React from "react";
import { Container } from "react-bootstrap";
import "./main.css";
import HeaderBlog from "./HeaderBlog.js";
import Footer from "./FooterBlog.js";

function MainBlog() {
  return (
    <Container className="login">
      <HeaderBlog />
      <Footer
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu ipsum in turpis mollis molestie eget eu turpis. Nullam vel lorem et mi dignissim commodo. "
      />
    </Container>
  );
}

export default MainBlog;
