import { useState } from "react";
import api from "../utils/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      setApiError(null);
      setEmail("");
      setPassword("");
      // alert("Login successful!");
      toast.success("Logged in successfully");
      navigate("/");
    } catch (error) {
      setApiError(error.message);
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
          <div className="mb-4">
            <label className="text-white block mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded-lg focus:outline-none bg-white"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          {apiError && <p className="text-red-500 text-sm mb-2">{apiError}</p>}
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
