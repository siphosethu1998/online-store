import { useEffect, useRef } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "./store/productState";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  // formik hook to create and validated the form
  const formik = useFormik({
    initialValues: {
      username:"",
      password: "",
    },
    validationSchema: Yup.object({ // valdating the data using a validation schema
      username: Yup.string().max(20, "Username must be 20 charcters or less").required("Username is required"),
      password: Yup.string()
        .min(8, "Password should be at least 8 characters")
        .required("Password is required")
    }),
    onSubmit: values => {
      //alert(JSON.stringify(values, null, 2));
      //dispatch(setUsername(values.username));
      //dispatch(setisLoggedIn(true));

      dispatch(verifyUser(values));
      navigate("/cart");
    }
  });


  useEffect(() => {
    inputRef.current.focus();
  },[])

  return (
    <div className="flex flex-col gap-8 mt-8">
      <div className="flex flex-col gap-4">
        <p className="text-3xl font-medium self-center">Login to your account</p> 
        <span className="self-center">Or </span> 
        <Link to="/register" className="text-gray-700  self-center font-medium underline">Register for a new account</Link>
      </div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-2 bg-white gap-x-4 p-6 mx-auto w-fit rounded-lg shadow-sm">
        <label htmlFor="username">Username</label>
        <input
          ref={inputRef}
          className="px-4 py-2 w-80 focus:outline-none border border-gray-200 rounded-md" 
          placeholder="Enter your username"
          type="text"
          id="username"
          name="username"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        { formik.touched.username && formik.errors.username ? <div className="text-red-600">{ formik.errors.username }</div> : null }

        <label htmlFor="password">Password</label>
        <input
          className="px-4 py-2 w-80 focus:outline-none border border-gray-200 rounded-md" 
          placeholder="Enter your password"
          type="password"
          id="password"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        { formik.touched.password && formik.errors.password ? <div className="text-red-600">{ formik.errors.password }</div> : null }

        <button
          className="px-4 py-2 mt-4  bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
