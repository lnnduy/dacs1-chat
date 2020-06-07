import React from "react";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../../functions/user";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function RegisterPage(props) {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: "",
        lastName: "",
        name: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Vui lòng nhập tên"),
        email: Yup.string()
          .email("Email không hợp lệ")
          .required("Vui lòng nhập email"),
        password: Yup.string()
          .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
          .required("Vui lòng nhập mật khẩu"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Mật khẩu không trùng khớp")
          .required("Vui lòng nhập lại mật khẩu"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password,
            name: values.name,
            avatar: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`,
          };

          registerUser(dataToSubmit).then((response) => {
            if (response.success) {
              props.history.push("/login");
            } else {
              alert(response.err.errmsg);
            }
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
            <h2>Đăng ký</h2>
            <form
              style={{ maxWidth: "375px" }}
              {...formItemLayout}
              onSubmit={handleSubmit}
            >
              <TextField
                id="name"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Nhập tên"
                type="text"
                style={{ marginBottom: 15 }}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.name && touched.name
                    ? "text-input error"
                    : "text-input"
                }
                error={errors.name && touched.name}
                helperText={errors.name && touched.name && errors.name}
              />
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
                placeholder="Nhập mật khẩu"
                type="password"
                style={{ marginBottom: 15 }}
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
              <TextField
                id="confirmPassword"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Nhập lại mật khẩu"
                type="password"
                style={{ marginBottom: 15 }}
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? "text-input error"
                    : "text-input"
                }
                error={errors.confirmPassword && touched.confirmPassword}
                helperText={
                  errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword
                }
              />
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
              >
                Đăng ký
              </Button>
              Hoặc <Link to="/login">đăng nhập</Link> vào tài khoản đã có
            </form>
          </div>
        );
      }}
    </Formik>
  );
}

export default RegisterPage;
