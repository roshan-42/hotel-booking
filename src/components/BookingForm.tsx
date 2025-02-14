import { useForm } from "react-hook-form";
import useUser from "../context/useUser";
import api from "../utils/api";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const BookingForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      // Get the access token (could be from localStorage, state, etc.)
      const accessToken = user.accessToken;

      // If access token is present, append it to the header
      const response = await api.post(
        "/bookings/api/bookings/",
        { ...data, room: searchParams.get("room") },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 201) {
        toast.success("Room booked successfully!");
        navigate("/");
      } else {
        toast.error("Room booking failed, please try again!");
      }
    } catch (error) {
      toast.error("You must login first before booking !");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Room Booking</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Guest Name */}
          {/* <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              {...register("fullName", { required: "Full name is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

        
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

         
          <div>
            <label className="block font-medium">Phone Number</label>
            <input
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div> */}

          {/* Room Type */}
          {/* <div>
            <label className="block font-medium">Room Type</label>
            <select
              {...register("roomType", { required: "Select a room type" })}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="standard">Standard Room</option>
              <option value="deluxe">Deluxe Room</option>
              <option value="suite">Suite</option>
            </select>
            {errors.roomType && (
              <p className="text-red-500 text-sm">{errors.roomType.message}</p>
            )}
          </div> */}

          {/* Check-in & Check-out */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Check-in</label>
              <input
                type="date"
                {...register("check_in_date", {
                  required: "Check-in date is required",
                })}
                className="w-full p-2 border rounded"
              />
              {errors.check_in_date && (
                <p className="text-red-500 text-sm">
                  {errors.check_in_date.message}
                </p>
              )}
            </div>
            <div>
              <label className="block font-medium">Check-out</label>
              <input
                type="date"
                {...register("check_out_date", {
                  required: "Check-out date is required",
                })}
                className="w-full p-2 border rounded"
              />
              {errors.check_out_date && (
                <p className="text-red-500 text-sm">
                  {errors.check_out_date.message}
                </p>
              )}
            </div>
          </div>

          {/* Payment Method */}
          {/* <div>
            <label className="block font-medium">Payment Method</label>
            <select
              {...register("paymentMethod", {
                required: "Select a payment method",
              })}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank">Bank Transfer</option>
            </select>
            {errors.paymentMethod && (
              <p className="text-red-500 text-sm">
                {errors.paymentMethod.message}
              </p>
            )}
          </div> */}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition-all duration-300"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
