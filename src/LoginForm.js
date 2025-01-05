import { useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const LoginForm = () => {
  const inputRef = useRef(null);
  // formik hook to create and validated the form
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({ // valdating the data using a validation schema
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string()
        .min(8, "Password should be at least 8 characters")
        .required("Password is required")
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  useEffect(() => {
    inputRef.current.focus();
  },[])

  return (
    <div className="bg-white flex gap-x-4 p-6 mt-8 mx-auto w-fit rounded-lg shadow-sm items-center">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-2">
        <label htmlFor="email">Email</label>
        <input
          ref={inputRef}
          className="px-4 py-2 w-80 focus:outline-none border border-gray-200 rounded-md" 
          placeholder="Enter your email"
          id="email"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        { formik.touched.email && formik.errors.email ? <div className="text-red-600">{ formik.errors.email }</div> : null }

        <label htmlFor="password">Password</label>
        <input
          className="px-4 py-2 w-80 focus:outline-none border border-gray-200 rounded-md" 
          placeholder="Enter your password"
          id="password"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        { formik.touched.password && formik.errors.password ? <div className="text-red-600">{ formik.errors.password }</div> : null }

        <button
          className="px-4 py-2 mt-4  bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;