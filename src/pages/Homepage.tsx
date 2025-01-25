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
          <p className="text-2xl">Lorem Ipsum is simply dummy text</p>

          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source
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
