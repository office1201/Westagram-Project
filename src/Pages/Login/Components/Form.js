import React, { Component } from "react";
import FormLayout from "./FormLayout";
import Logo from "./Logo";
import Input from "./Input";
import "./Form.scss";
import Button from "./Button";

class Form extends Component {
  render() {
    const { type, data } = this.props;
    return (
      <FormLayout>
        <Logo />
        <div className="Inputs">
          {data.map((input, idx) => (
            <Input key={idx} type={input.type} text={input.text} />
          ))}
        </div>
        <Button type={type} />
        <div className="Divide">
          <div className="DivideLine"></div>
          <h6>또는</h6>
          <div className="DivideLine"></div>
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
