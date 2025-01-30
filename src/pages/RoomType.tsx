import { useEffect, useState } from "react";
import RoomCard from "../components/cards/RoomCard";
import api from "../utils/api";
import { useParams, useSearchParams } from "react-router-dom";

interface RoomType {
  name: string;
  image: string;
}

const RoomType = () => {
  const [data, setData] = useState<RoomType[]>([]);
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const hotelId = searchParams.get("hotelId");

  console.log("Category ID:", categoryId);
  console.log("Hotel ID:", hotelId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          `/rooms/api/rooms/?hotel=${hotelId}&room_type=${categoryId}`
        );

        setData(response?.data?.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    fetchData();
  }, []);
  console.log("Check data in room types", data);

  // const data = [
  //   {
  //     name: "Deluxe",
  //     image:
  //       "https://cdn.pixabay.com/photo/2018/06/14/21/15/bedroom-3475656_640.jpg",
  //   },
  //   {
  //     name: "Family",
  //     image:
  //       "https://cdn.pixabay.com/photo/2021/12/18/06/13/hotel-6878054_1280.jpg",
  //   },
  //   {
  //     name: "AC",
  //     image:
  //       "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_640.jpg",
  //   },
  //   {
  //     name: "Budget",
  //     image:
  //       "https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_640.jpg",
  //   },
  // ];

  return <RoomCard roomtype={data} />;
};

export default RoomType;
