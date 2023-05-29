import React from "react";
import { colors } from "../utils/colors";
import { Button, Form, Input, InputNumber, Card } from "antd";
import { Link } from "react-router-dom";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const onFinish = (values) => {
  console.log(values);
};

const Register = () => {
  return (
    <div
      style={{
        backgroundColor: colors.whiteGray,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        width: window.innerWidth,
        height: window.innerHeight,
      }}
    >
      <Card
        title="Register"
        bordered={true}
        style={{
          width: window.innerWidth / 1.5,
          height: window.innerHeight / 1.5,
          backgroundColor: colors.secondary,
        }}
      >
        <div style={{ justifyContent: "center", alignItems: "center",}}>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "firstname"]}
              label="First Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "lastname"]}
              label="Last Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item name={["user", "password"]} label="Password">
              <Input />
            </Form.Item>

            <Form.Item name={["user", "number"]} label="Mo. Number">
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <div
            style={{
              // backgroundColor: colors.whiteGray,
              justifyContent: "center",
              alignItems: "center",
              // display: "flex",
              // width: window.innerWidth,
              // height: window.innerHeight,
            }}
          >
            <p>Already have account! <Link to={`login`}>Login</Link></p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Register;
