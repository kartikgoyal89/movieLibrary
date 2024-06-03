import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import CustomInput from "../../components/CustomInput/customInput";
import { useNavigate } from "react-router-dom";

const signUpSchema = yup.object({
  email: yup.string().required("Email is required!"),
});

const ForgotPass = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log("Submitted");
    },
  });

  return (
    <>
      {/* <Meta title={"Sign Up"} /> */}
      {/* <BreadCrumb title="Sign Up" /> */}

      <div className=" auth-wrapper login-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h5 className="text-center mb-4">Forgot Password</h5>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-20"
              >
                <div>
                  <p>We will send you a link to reset your password</p>
                  <CustomInput
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                  />
                  <div className="error">
                    {formik.touched.email && formik.errors.email}
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center gap-15">
                  <button className="btn border-0">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
