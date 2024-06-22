import React from "react";
import About from "./components/About";
import OurMenue from "./components/OurMenue";
import ReservationForm from "../../components/ReservationForm";
import OurCuisine from "./components/OurCuisine";
import TableBooking from "./components/TableBooking";
import ScrollImage from "./components/ScrollImage";

const Home = () => {
  const imageUrl = "assets/image/paboutus01.jpg";
  return (
    <>
      <TableBooking />
      <About />
      <OurMenue />
      <ReservationForm />
      <OurCuisine />
      <ScrollImage imageUrl={imageUrl} />
    </>
  );
};

export default Home;
