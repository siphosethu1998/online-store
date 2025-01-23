import { useEffect, useRef } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./store/productState";

const SignupForm = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // formik hook to create and validated the form
  const formik = useFormik({
    initialValues: {
      firstName:"",
      surname:"",
      username:"",
      email:"",
      password:"",
      confirmPassword:""
    },
    validationSchema: Yup.object({ // validating the form values
      firstName: Yup.string().max(15, "Name must be 15 charcters or less").required("First name is required"),
      surname: Yup.string().max(20, "Surname must be 20 charcters or less").required("Surname is required"),
      username: Yup.string().max(20, "Username must be 20 charcters or less").required("Username is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string()
        .min(8, "Password should be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password")
    }),
    onSubmit: values => {
      alert(JSON.stringify(values,null, 2));
      dispatch(addUser(values));
      navigate("/login"); // sends the user to the login page after they register
    }
  });

  useEffect(() => {
    inputRef.current.focus();
  },[])

  return (
    <div className="flex flex-col gap-8 items-center mt-8">
      <div className="flex flex-col gap-4">
        <p className="text-3xl font-medium">Register for free</p> 
        <span className="self-center">Or </span> 
        <Link to="/login" className="text-gray-700 self-center font-medium underline">Login to your existing account</Link>
      </div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-2 bg-white gap-x-4 p-6 mx-auto w-fit rounded-lg shadow-sm">
        <label htmlFor="firstName">First Name</label>
        <input
          className="px-4 py-2 w-80 focus:outline-none border border-gray-200 rounded-md" 
          ref={inputRef}
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Enter your first name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        { 
          formik.touched.firstName && formik.errors.firstName ? 
          <div className="text-red-600">{ formik.errors.firstName }</div>: null 
        }

        <label htmlFor="surname">Surname</label>
        <input
          className="px-4 py-2 w-80 focus:outline-none border border-gray-200 rounded-md" 
          id="surname"
          name="surname"
          type="text"
          placeholder="Enter your surname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.surname}
        />
        { 
          formik.touched.surname && formik.errors.surname ? 
          <div className="text-red-600">{ formik.errors.surname }</div>: null 
        }

        <label htmlFor="username">Username</label>
        <input
          className="px-4 py-2 w-80 focus:outline-none border border-gray-200 rounded-md" 
          id="username"
          name="username"
          type="text"
          placeholder="Enter your username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        { 
          formik.touched.username && formik.errors.username ? 
          <div className="text-red-600">{ formik.errors.username }</div>: null 
        }

        <label htmlFor="email">Email</label>
        <input
          className="px-4 py-2 w-80 focus:outline-none border border-gray-200 rounded-md" 
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        { 
          formik.touched.email && formik.errors.email ?
          <div className="text-red-600">{ formik.errors.email }</div>: null 
        }

        <label htmlFor="password">Password</label>
        <input
          className="px-4 py-2 w-80 focus:outline-none border border-gray-200 rounded-md" 
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        { 
          formik.touched.password && formik.errors.password ? 
          <div className="text-red-600"> { formik.errors.password }</div>: null 
        }

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          className="px-4 py-2 w-80 focus:outline-none border border-gray-200 rounded-md" 
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        { 
          formik.touched.confirmPassword && formik.errors.confirmPassword ? 
          <div className="text-red-600"> { formik.errors.confirmPassword }</div>: null
        }

        <button
          className="px-4 py-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignupForm;