import HotelCard from "../components/cards/HotelCard";

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

  return <HotelCard hotels={hotels} />;
};

export default Hotels;
