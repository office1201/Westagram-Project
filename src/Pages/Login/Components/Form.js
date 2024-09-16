import React, { Component } from "react";
import FormLayout from "./FormLayout";
import Logo from "./Logo";
import Input from "./Input";
import Button from "./Button";
import "./Form.scss";

class Form extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { type, data } = this.props;
    return (
      <FormLayout>
        <Logo />
        <div className="Inputs">
          {data.map((input, idx) => (
            <Input
              key={idx}
              type={input.type}
              text={input.text}
              value={this.state[input.type]}
              handleChange={this.handleChange}
              validator={validator[input.type]}
            />
          ))}
        </div>
        <Button type={type} value={this.state} regExp={regExp} />
        <div className="Divide">
          <div></div>
          <h6>또는</h6>
          <div></div>
        </div>
        <div className="Facebook" href="#">
          <i className="fab fa-facebook-square"></i>
          <h5>Facebook으로 로그인</h5>
        </div>
        <div className="Forgot" href="#">
          <span>비밀번호를 잊으셨나요?</span>
        </div>
      </FormLayout>
    );
  }
}

export default Form;

const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

const validator = {
  email: (input) => input.match(regExp),
  password: (input) => input.length >= 8,
};
