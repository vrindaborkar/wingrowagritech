import React, {useState} from 'react';
import { Route, Routes } from "react-router-dom";
import StallBooking from './StallBooking';
import './Bookings.css';
import VendorsFeed from './VendorsFeed';
import Bookinghomepage from './Bookinghomepage';
import BookingLogin from './BookingLogin';
import Ticket from './Ticket';

const Bookings = () => {
  const [bookingdata, setbookingdata]=useState()
  return (
    <Routes>
        <Route exact path="/" element={<BookingLogin/>}/>
        <Route  path="/bhome/*" element={<Bookinghomepage/>}/>
        <Route  exact path="/vendorsfeed" element={<VendorsFeed/>}/>
        {/* <Route  exact path="/bookingstall" element={<StallBooking/>}/>
        <Route  exact path="/ticket" element={<Ticket/>}/> */}
        <Route  exact path="/bookingstall" element={<StallBooking setbookingdata={setbookingdata}/>}/>
        <Route  exact path="/ticket" element={<Ticket bookingdata={bookingdata}/>}/>

    </Routes>
  )
}

export default Bookings