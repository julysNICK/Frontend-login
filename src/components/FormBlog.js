import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./FormBlog.css";
import api from "../services/api.js";
export default function HearderBlog() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [User, setUser] = useState("");

  async function handleAddUser(e) {
    e.preventDefault();
    const response = await api.post("/api/user/register", {
      User,
      email,
      password
    });
    console.log(response.data);
  }
  return (
    <Container>
      <div className="formulario">
        <Form onSubmit={handleAddUser} className="login-container">
          <div className="col-12 user-img">
            <img
              className="mb-4"
              src="./imagen/b8dce6794c4ebf01af04bd767afd9eb7-consola-de-jogos-vermelhos-icon-svg-by-vexels.png"
              alt=""
              width="72"
              height="72"
            />
          </div>

          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

          <div className="email-control">
            <label htmlFor="name" className="sr-only">
              Name address
            </label>
            <input
              type="name"
              id="User"
              className="form-control"
              placeholder="Name address"
              required
              autoFocus
              value={User}
              onChange={e => setUser(e.target.value)}
            ></input>
          </div>
          <div className="email-control">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></input>
          </div>
          <div></div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div></div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"></input>
              <label htmlFor="remenber">remenber</label>
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
        </Form>
      </div>
    </Container>
  );
}
