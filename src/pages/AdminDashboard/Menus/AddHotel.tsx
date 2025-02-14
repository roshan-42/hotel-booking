import { useState } from "react";
import api from "../../../utils/api";
import { Upload } from "lucide-react";

const AddHotel = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState<number | string>("");
  const [images, setImages] = useState<File[]>([]); // Store files directly
  const [errors, setErrors] = useState<any>({});

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const selectedImages = Array.from(files); // Convert FileList to array
      setImages(selectedImages);
    }
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!name) newErrors.name = "Hotel name is required";
    if (!location) newErrors.location = "Location is required";
    if (description.length < 10)
      newErrors.description = "Description must be at least 10 characters";
    if (rating < 1 || rating > 5)
      newErrors.rating = "Rating must be between 1 and 5";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) return;

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("location", location);
      formData.append("description", description);
      formData.append("rating", rating.toString());

      // Append images in binary format directly
      if (images.length > 0) {
        images.forEach((image) => {
          formData.append("images", image); // Append file as binary
        });
      }

      const response = await api.post("/hotels/api/admin/hotels/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Hotel added successfully:", response.data);
    } catch (error) {
      console.error("Error adding hotel:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-bold mb-4">Add Hotel</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Hotel Name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 border w-full rounded-md"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium">
            Location
          </label>
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 p-2 border w-full rounded-md"
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 border w-full rounded-md"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>

        <div>
          <label htmlFor="rating" className="block text-sm font-medium">
            Rating (1-5)
          </label>
          <input
            id="rating"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="mt-1 p-2 border w-full rounded-md"
          />
          {errors.rating && (
            <p className="text-red-500 text-sm">{errors.rating}</p>
          )}
        </div>

        <div>
          <label htmlFor="image-upload" className="block text-sm font-medium">
            Image Upload
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="image-upload"
            multiple // Allow multiple file selection
          />
          <label
            htmlFor="image-upload"
            className="cursor-pointer flex items-center gap-2 border p-2 rounded-lg text-gray-600"
          >
            <Upload size={20} /> Upload Images
          </label>
          <div className="mt-2 flex gap-4">
            {images.map((image, index) => (
              <div key={index} className="w-32 h-32 overflow-hidden rounded-lg">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddHotel;
