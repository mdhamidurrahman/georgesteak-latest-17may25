import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ScrollImage from "./ScrollImage";
export default function EventEnquiryForm() {
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
const imageUrl="assets/image/contactus01.jpg"
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Number of Guests:", guests);
    // Reset form fields

    setTime("");
    setGuests(1);
  };
  return (
    <section className="eventEquity">
      <div className="estd eventInqury">
        <div className="animal ">
          <h2>EVENT INQUIRY</h2>
        </div>
        <p>
          To book your private event at George Italian Restaurants in Greenwich,
          CT please enter your info & someone will contact you shortly
        </p>
      </div>

      
        <form onSubmit={handleSubmit} className="text-white pb-16">
          <div className="formField nameEmail">
            <div>
              <label>NAME</label>
              <input type="text" />
            </div>
            <div>
              <label>EMAIL</label>
              <input type="text" />
            </div>
          </div>

          <div className="formField pdtfield">
            <div>
              <label>PHONE</label>
              <input type="phone" />
            </div>
            <div>
              <label htmlFor="date">DATE</label>
              <DatePicker
                selected={date}
                onChange={(date: Date | null) => setDate(date)}
              />
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
              <label>TYPE OF EVENT</label>
              <input type="request" />
            </div>
          </div>
          <button type="submit">SEND</button>
        </form>
      
      <ScrollImage imageUrl={imageUrl} height={700}/>
    </section>
  );
}
