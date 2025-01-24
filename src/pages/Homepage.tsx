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

      <div className="flex flex-col md:flex-row  mt-4 p-12 gap-8 ">
        <img
          className="object-cover h-[300px] md:h-64 w-full"
          src="https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_1280.jpg"
          alt=""
        />
        <div className="flex    flex-col  justify-between">
          <div className="">
            <p className="text-2xl">ABOUT US</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              neque explicabo nam et, officia placeat, animi id earum a ad
              magnam enim, molestias ex modi consequuntur aperiam nesciunt
              mollitia reprehenderit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aperiam distinctio illum cumque unde asperiores
              accusamus! Quasi cumque, fugiat libero provident quas beatae
              molestiae autem et illum dolor. Reiciendis, placeat quibusdam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis nesciunt impedit neque explicabo accusamus vitae quasi
              nam error tempora molestias. Voluptatem nam consectetur fugit
              reprehenderit magnam cum, eius aut obcaecati.
            </p>
          </div>

          <button className="border border-black w-fit p-2">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
