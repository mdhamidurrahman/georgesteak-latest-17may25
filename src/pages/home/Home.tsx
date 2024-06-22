import About from './components/About'
import OurMenue from './components/OurMenue'
import ReservationForm from '../../components/ReservationForm'
import OurCuisine from './components/OurCuisine'
import Spevents from './components/Spevents'
import EgiftCard from './components/EgiftCard'
import Pdining from './components/Pdining'
import EventEnquiryForm from './components/EventEnquiryForm'
import ContactUs from './components/ContactUs'
import Socialicon from './components/Socialicon'
import TableBooking from './components/TableBooking'


const Home = () => {
  return (
    <>
    <TableBooking/>
    <About/>
    <OurMenue/>
    <ReservationForm/>
    <OurCuisine/>
    <Spevents/>
    <EgiftCard/>
    <Pdining/>
    <EventEnquiryForm/>
    <ContactUs/>
    <Socialicon/>
    </>
  );
};

export default Home;
