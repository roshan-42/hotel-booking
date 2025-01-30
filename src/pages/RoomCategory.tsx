import { useEffect, useState } from "react";
import api from "../utils/api";
import { useParams } from "react-router-dom";
import CategoryCard from "../components/cards/CategoryCard";

interface RoomCategory {
  name: string;
  image: string;
}

const RoomCategory = () => {
  const [data, setData] = useState<RoomCategory[]>([]);
  const id = useParams().slug;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/rooms/api/room-types/`);
        setData(response?.data?.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    fetchData();
  }, []);
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

  return <CategoryCard category={data} hotelId={id} />;
};

export default RoomCategory;
