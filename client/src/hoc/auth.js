/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { auth } from "../functions/user";
import { useDispatch } from "react-redux";
import { clearUserData, updateUserData } from "../_actions/user_actions";

export default function (ComposedClass, reload, adminRoute = null) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      auth().then((response) => {
        if (!response.isAuth) {
          dispatch(clearUserData());
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
          dispatch(updateUserData(response));
        }
      });
    }, []);

    return <ComposedClass {...props} />;
  }
  return AuthenticationCheck;
}
