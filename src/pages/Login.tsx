import { useContext, useState } from "react";
import api from "../utils/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await api.post("accounts/api/login/", {
        email: email,
        password: password,
      });
      if (response.status === 200 && response.data.status) {
        const { user, access } = response.data.data;
        const userData = {
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          role: user.role,
          accessToken: access,
        };

        // Store user data in context
        loginUser(userData);

        setApiError(null);
        toast.success(`Welcome, ${user.first_name} ${user.last_name}!`);
        navigate("/");
      }
    } catch (error) {
      setApiError(error.message);
      toast.error("Invalid Credentials !");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-[#1e3a8a] rounded-lg p-8 w-full max-w-4xl flex gap-6">
        <form className="flex-1" onSubmit={onSubmit}>
          <h2 className="text-white text-2xl mb-6">Login</h2>
          <div className="mb-4">
            <label className="text-white block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-lg focus:outline-none bg-white"
              placeholder="Enter your Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-4 relative">
            <label className="text-white block mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded-lg focus:outline-none bg-white pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          {apiError && (
            <p className="text-red-500 text-sm mb-2">
              {apiError
                ? "Invalid Credentials, Check your email and password before loggin in."
                : ""}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-yellow-400 p-2 rounded-lg font-bold hover:bg-yellow-500 transition"
          >
            Login
          </button>
        </form>

        <div className="flex-1 hidden md:block">
          <div className="rounded-lg overflow-hidden h-full">
            <img
              src="/images/login image.jpg"
              alt="Luxury resort at dusk"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
