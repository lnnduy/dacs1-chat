/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { auth } from "../functions/user";
import { useSelector, useDispatch } from "react-redux";

export default function (ComposedClass, reload, adminRoute = null) {
  function AuthenticationCheck(props) {
    let user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      auth().then((response) => {
        if (!response.isAuth) {
          if (reload) {
            props.history.push("/login");
          }
        } else {
          if (adminRoute && !response.isAdmin) {
            props.history.push("/");
          } else {
            if (reload === false) {
              props.history.push("/");
            }
          }
        }
      });
    }, []);

    return <ComposedClass {...props} />;
  }
  return AuthenticationCheck;
}
