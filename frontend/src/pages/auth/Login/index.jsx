import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../apis/api";
import { Icons } from "../../../constants";
import { jwtDecode } from "jwt-decode";
import { FaHandFist } from "react-icons/fa6";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [serverResponse, setServerResponse] = useState({ error: "", success: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // () => (window.location.href = `https://schedulx-backend-ybdo.onrender.com/api/v1/auth/google`)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
      setTimeout(() => navigate("/publish"));
    }
  }, [navigate]);

  const handleGoogleLogin = () => {
    const apiUrl = import.meta.env.VITE_API_URL || "https://schedulx-backend-ybdo.onrender.com";
    console.log(apiUrl);
    if (!apiUrl || apiUrl === "undefined") {
      console.error("API URL is not set correctly:", apiUrl);
      alert("Login failed: API URL is missing. Please check your configuration.");
      return;
    }
  
    console.log("Redirecting to:", `${apiUrl}/api/v1/auth/google`);
    window.location.href = `${apiUrl}/api/v1/auth/google`;
  };
  

  const validateForm = useCallback(() => {
    let errors = {};
    if (!formData.email) errors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email format.";

    if (!formData.password) errors.password = "Password is required.";
    else if (formData.password.length < 6) errors.password = "Password must be at least 6 characters.";

    return errors;
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerResponse({ error: "", success: "" });

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await api.post("/api/v1/auth/login", formData, { withCredentials: true });

      if (response.data.token) {
        setServerResponse({ success: "Login successful!", error: "" });
        const { token, data } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", data._id);
        window.dispatchEvent(new CustomEvent("user-login", { detail: jwtDecode(token).user }));
        navigate("/publish");
      }
    } catch (err) {
      const message = err.response?.data?.message || "Something went wrong.";
      setFormErrors(message.includes("email") ? { email: message } : message.includes("password") ? { password: message } : {});
      setServerResponse({ error: message, success: "" });
    }
  };

  return (
    <div className="h-[80vh] flex items-center justify-center px-4 sm:px-0">
      <div className="w-full max-w-md sm:max-w-lg mx-auto bg-white p-4 md:p-8 sm:p-10 rounded-xl shadow dark:text-white dark:bg-bgCopnents overflow-y-auto ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold flex flex-wrap items-center gap-2">
          Login to
          <span className="flex items-center text-2xl sm:text-3xl md:text-4xl dark:text-white whitespace-nowrap">
            Schedul<span className="text-red-600">{Icons.schedulXAuth}</span>
          </span>
        </h1>

        <p className="text-slate-500 mt-2 dark:text-white">Hi, Welcome back 👋</p>

        <div className="my-5">
          <button
            type="button"
            className="w-full py-3 border flex items-center justify-center border-slate-200 rounded-lg hover:border-slate-400 hover:shadow transition dark:border-borderDarkmode dark:bg-bgbutton dark:text-white hover:dark:bg-white hover:dark:text-black"
            onClick={handleGoogleLogin}
          >
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="Google Icon" />
            <span className="ms-2">Login with Google</span>
          </button>
        </div>

        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-5">
            <label htmlFor="email">
              <p className="font-medium text-slate-700 pb-2 dark:text-white">Email address</p>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full py-3 border ${formErrors.email ? "border-red-500" : "border-slate-200"} rounded-lg px-3 focus:outline-none hover:shadow dark:text-white dark:bg-darkmode`}
                placeholder="Enter email address"
                required
              />
              {serverResponse.error && <p className="text-red-500 text-sm">{serverResponse.error}</p>}
              {serverResponse.success && <p className="text-red-500 text-sm">{serverResponse.success}</p>}
            </label>

            <label htmlFor="password">
              <p className="font-medium text-slate-700 pb-2 dark:text-white">Password</p>
              <div className="relative flex items-center">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full py-3 border ${formErrors.password ? "border-red-500" : "border-slate-200"} rounded-lg px-3 focus:outline-none hover:shadow dark:text-white dark:bg-darkmode`}
                  placeholder="Enter your password"
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-4">
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {formErrors.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}
            </label>

            <div className="flex flex-wrap justify-between items-center gap-3">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 border-slate-200" />
                <span className="text-slate-700 dark:text-white">Remember me</span>
              </label>
              <Link to="/forget-password" className="text-indigo-600 font-medium text-sm sm:text-base">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="w-full py-3 font-medium text-white bg-gray-950 hover:bg-gray-900 rounded-lg hover:shadow dark:bg-bgbutton">
              Login
            </button>

            <p className="text-center">
              Not registered yet?{" "}
              <Link
                to={"/registration"}
                className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
              >
                <span>Register now</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
