import React from 'react'
import About from './components/About'
import OurMenue from './components/OurMenue'
import ReservationForm from '../../components/ReservationForm'
import OurCuisine from './components/OurCuisine'
import TableBooking from './components/TableBooking'


const Home = () => {
  return (
    <>
    <TableBooking/>
    <About/>
    <OurMenue/>
    <ReservationForm/>
    <OurCuisine/>
    </>
  )
}

export default Home