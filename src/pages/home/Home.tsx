import About from "./components/About";
import OurMenue from "./components/OurMenue";
import OurCuisine from "./components/OurCuisine";
import Spevents from "./components/Spevents";
import Pdining from "./components/Pdining";
import EventEnquiryForm from "./components/EventEnquiryForm";
import Socialicon from "./components/Socialicon";
import TableBooking from "./components/TableBooking";
import GoogleMapReact from "./components/GoogleMapReact";
const Home = () => {
  return (
    <>
      <TableBooking />
      <About />
      <OurMenue />
      {/* <ReservationForm /> */}
      <OurCuisine />
      <Spevents />
      {/* <EgiftCard /> */}
      <Pdining />
      <EventEnquiryForm />
      {/* <ContactUs/> */}
      <GoogleMapReact />
      <Socialicon />
    </>
  );
};

export default Home;
