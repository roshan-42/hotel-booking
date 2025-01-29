const Homepage = () => {
  return (
    <div className="">
      <div className="">
        <img
          className="object-cover h-[500px] w-full"
          src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg "
          alt=""
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 p-4 px-14 gap-12 ">
        <img
          className="object-cover h-[300px] md:h-[300px] w-full"
          src="https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_1280.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between">
          <p className="text-4xl font-bold text-gray-800">ABOUT US</p>
          <p className="text-2xl">
            Experience effortless hotel bookings with our user-friendly
            platform.
          </p>

          <p>
            This hotel booking app, built with React (Vite) and TypeScript,
            offers a seamless and intuitive user experience. Designed with
            Tailwind CSS, it provides a modern interface for browsing and
            booking hotels. The app ensures a smooth booking process, from
            selecting accommodations to confirming reservations, all based on a
            well-planned Figma design.
          </p>
          <button className="border border-black w-fit p-2 mt-2">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
