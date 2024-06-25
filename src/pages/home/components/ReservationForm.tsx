import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ScrollImage from "./ScrollImage";

export default function ReservationForm() {
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const imageUrl="assets/image/pcuisine.jpg"

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Number of Guests:", guests);
    setTime("");
    setGuests(1);
  };

  return (
    <section className="reservation">
      <div id="reservation" className="estd">
        <div className="animal">
          <h2>RESERVATIONS</h2>
        </div>
      </div>

      <div className="bookTable">
        <p>
          To book your table online at George Italian Seafood & Steakhouse at
          Greenwich CT, please enter the info and a manager will contact you
          soon. We have a 10 minute grace period. For more than 8 guests please
          fill out
          <a href="#"> party form</a>.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="text-white reservFrom">
        <div className="formField nameEmail">
          <div>
            <label htmlFor="name">NAME</label>
            <input id="name" type="text"  required />
          </div>
          <div>
            <label htmlFor="email">EMAIL</label>
            <input id="email" type="text"  required/>
          </div>
        </div>

        <div className="formField pdtfield">
          <div>
            <label htmlFor="phone">PHONE</label>
            <input id="phone" type="phone" />
          </div>
          <div>
            <label htmlFor="date">DATE</label>
            <DatePicker selected={date}  onChange={(date: Date | null) => setDate(date)}  />
          </div>
          <div>
            <label htmlFor="time">TIME</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="guests">GUESTS</label>
            <input
              type="number"
              id="guests"
              value={guests}
              onChange={(e: any) => setGuests(e.target.value)}
              min="1"
              required
            />
          </div>
        </div>
        <div className="spReuest">
          <div>
            <label>SPECIAL REQUEST</label>
            <input type="request" />
          </div>
        </div>
        <button type="submit">SEND</button>
      </form>
      <ScrollImage imageUrl={imageUrl} height={700}/>
    </section>
  );
}
