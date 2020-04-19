import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser, loginSuccess } from "../../../_actions/user_actions";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Icon,
  Button,
  Checkbox,
  TextField,
  FormControlLabel,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function LoginPage(props) {
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(rememberMeChecked);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const initialEmail = localStorage.getItem("rememberMe")
    ? localStorage.getItem("rememberMe")
    : "";

  return (
    <Formik
      initialValues={{
        email: initialEmail,
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email không hợp lệ")
          .required("Vui lòng nhập email"),
        password: Yup.string()
          .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
          .required("Vui lòng nhập mật khẩu"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password,
          };

          dispatch(loginUser(dataToSubmit))
            .then((response) => {
              console.log(response);
              if (response.payload.loginSuccess) {
                // dispacth(loginSuccess(response.payload));
                window.localStorage.setItem("userId", response.payload.userId);
                if (rememberMe === true) {
                  window.localStorage.setItem("rememberMe", values.email);
                } else {
                  localStorage.removeItem("rememberMe");
                }
                props.history.push("/");
              } else {
                setFormErrorMessage("Kiểm tra lại email hoặc mật khẩu");
              }
            })
            .catch((err) => {
              setFormErrorMessage("Kiểm tra lại email hoặc mật khẩu");
              setTimeout(() => {
                setFormErrorMessage("");
              }, 3000);
            });
          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className="app">
            <h2>Đăng nhập</h2>
            <form onSubmit={handleSubmit} style={{ width: "350px" }}>
              <TextField
                id="email"
                variant="outlined"
                size="small"
                fullWidth
                style={{ marginBottom: 15 }}
                placeholder="Nhập email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoFocus
                className={
                  errors.email && touched.email
                    ? "text-input error"
                    : "text-input"
                }
                error={errors.email && touched.email}
                helperText={errors.email && touched.email && errors.email}
              />
              <TextField
                id="password"
                variant="outlined"
                size="small"
                fullWidth
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Nhập mật khẩu"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password
                    ? "text-input error"
                    : "text-input"
                }
                error={errors.password && touched.password}
                helperText={
                  errors.password && touched.password && errors.password
                }
              />
              {formErrorMessage && (
                <label>
                  <p
                    style={{
                      color: "#ff0000bf",
                      fontSize: "0.7rem",
                      border: "1px solid",
                      padding: "1rem",
                      borderRadius: "10px",
                    }}
                  >
                    {formErrorMessage}
                  </p>
                </label>
              )}
              <FormControlLabel
                control={
                  <Checkbox
                    id="rememberMe"
                    onChange={handleRememberMe}
                    checked={rememberMe}
                    color="default"
                  />
                }
                label="Ghi nhớ mật khẩu"
                style={{ color: "gray" }}
              />
              <Link
                className="login-form-forgot"
                to="/reset_user"
                style={{ float: "right" }}
              >
                Quên mật khẩu?
              </Link>
              <Button
                variant="contained"
                htmlType="submit"
                className="login-form-button"
                fullWidth
                color="primary"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                Đăng nhập
              </Button>
              Hoặc <Link to="/register">đăng ký tài khoản</Link>
            </form>
          </div>
        );
      }}
    </Formik>
  );
}

export default withRouter(LoginPage);
