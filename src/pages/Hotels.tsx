const Hotels = () => {
  const hotels = [
    {
      name: "ALOFT",
      image:
        "https://cdn.pixabay.com/photo/2024/06/07/14/45/winter-8814783_1280.jpg",
    },
    {
      name: "HAYATT",
      image:
        "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg",
    },
    {
      name: "HILTON",
      image:
        "https:/cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962_640.jpg",
    },
    {
      name: "MARRIOT",
      image:
        "https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_640.jpg",
    },
    {
      name: "SURYA",
      image:
        "https://cdn.pixabay.com/photo/2018/08/06/19/49/design-3588214_640.jpg",
    },
    {
      name: "DHAKA",
      image:
        "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_640.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">HOTELS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="group bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow relative"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="h-40 w-full object-cover group-hover:opacity-10 transition-opacity duration-300"
            />
            <div className="bg-[#344A71] text-white text-center py-2 group-hover:opacity-10 transition-opacity duration-300">
              <p className="text-lg font-semibold">{hotel.name}</p>
            </div>
            {/* Buttons visible on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col gap-4 items-center">
                <button
                  type="button"
                  className="bg-[#344A71] hover:bg-[#2c394e] p-2 px-4 rounded-lg text-white cursor-pointer transition-all duration-300"
                >
                  View Hotel
                </button>
                <button className="bg-[#E7C130] hover:bg-[#d6b52e]  p-2 px-4 rounded-lg text-white cursor-pointer transition-all duration-300">
                  Book Hotel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
