import React, { useState, ChangeEvent, FormEvent } from "react";
// import { Alert, AlertDescription } from "@/components/ui/alert";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  country: string;
  city: string;
  gender: string;
  password: string;
  password2: string;
}

interface ApiResponse {
  error?: {
    [key: string]: string[];
  };
  data: any[];
  status: boolean;
}

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    country: "",
    city: "",
    gender: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData | "form", string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData | "form", string>> = {};

    if (formData.password !== formData.password2) {
      newErrors.password2 = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await api.post("/accounts/api/register/", formData);

      // Check if the response contains error data
      if (response.data?.error) {
        const apiErrors = response.data.error;
        const formattedErrors: Partial<
          Record<keyof FormData | "form", string>
        > = {};

        // Format API errors to match your form's error structure
        Object.entries(apiErrors).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            formattedErrors[key as keyof FormData] = value[0];
          } else {
            formattedErrors[key as keyof FormData] = value as string;
          }
        });

        setErrors(formattedErrors);
        return;
      }

      // Reset form on success
      setFormData({
        first_name: "",
        last_name: "",
        address: "",
        country: "",
        city: "",
        email: "",
        gender: "",
        password: "",
        password2: "",
      });
      navigate("/login");
      toast.success("Account created successfully!");
    } catch (error: any) {
      // Handle different types of errors
      if (error.response?.data?.error) {
        // API error response
        const apiErrors = error.response.data.error;
        const formattedErrors: Partial<
          Record<keyof FormData | "form", string>
        > = {};

        Object.entries(apiErrors).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            formattedErrors[key as keyof FormData] = value[0];
          } else {
            formattedErrors[key as keyof FormData] = value as string;
          }
        });

        setErrors(formattedErrors);
      } else {
        // Network or other errors
        setErrors({
          form: "An error occurred while creating your account. Please try again.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-[#1e3a8a] rounded-lg p-8 w-full max-w-4xl flex gap-6">
        {/* Form Section */}
        <div className="flex-1">
          <h2 className="text-white text-2xl mb-8">Create an account</h2>

          {/* {errors.form && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{errors.form}</AlertDescription>
            </Alert>
          )} */}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="block text-white">First Name</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                className="w-full px-4 py-2 rounded-full text-gray-800 bg-white"
                required
              />
              {errors.first_name && (
                <p className="text-red-300 text-sm mt-1">{errors.first_name}</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="block text-white">Last Name</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                placeholder="Enter your last name"
                className="w-full px-4 py-2 rounded-full text-gray-800 bg-white"
                required
              />
              {errors.last_name && (
                <p className="text-red-300 text-sm mt-1">{errors.last_name}</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="block text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-full text-gray-800 bg-white"
                required
              />
              {errors.email && (
                <p className="text-red-300 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="space-y-1">
              <label className="block text-white">Address</label>
              <input
                type="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your address"
                className="w-full px-4 py-2 rounded-full text-gray-800 bg-white"
                required
              />
              {errors.address && (
                <p className="text-red-300 text-sm mt-1">{errors.address}</p>
              )}
            </div>
            <div className="space-y-1">
              <label className="block text-white">Country</label>
              <input
                type="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Enter your country"
                className="w-full px-4 py-2 rounded-full text-gray-800 bg-white"
                required
              />
              {errors.country && (
                <p className="text-red-300 text-sm mt-1">{errors.country}</p>
              )}
            </div>
            <div className="space-y-1">
              <label className="block text-white">City</label>
              <input
                type="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Enter your city"
                className="w-full px-4 py-2 rounded-full text-gray-800 bg-white"
                required
              />
              {errors.city && (
                <p className="text-red-300 text-sm mt-1">{errors.city}</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="block text-white">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-full text-gray-800 bg-white"
                required
              />
              {errors.password && (
                <p className="text-red-300 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            {/* Gender Dropdown */}
            <div className="space-y-1">
              <label className="block text-white">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-full text-gray-800 bg-white"
                required
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-300 text-sm mt-1">{errors.gender}</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="block text-white">Confirm Password</label>
              <input
                type="password"
                name="password2"
                value={formData.password2}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                className="w-full px-4 py-2 rounded-full text-gray-800 bg-white"
                required
              />
              {errors.password2 && (
                <p className="text-red-300 text-sm mt-1">{errors.password2}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-fit mx-auto flex bg-yellow-300 text-gray-800 rounded-full py-2 px-4 
                    ${
                      isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-yellow-400"
                    } 
                    transition-colors`}
            >
              {isSubmitting ? "Creating Account..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Image Section */}
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
};

export default Register;
