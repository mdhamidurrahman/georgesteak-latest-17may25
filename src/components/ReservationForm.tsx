import { useState } from 'react';

export default function ReservationForm() {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to server
        console.log('Date:', date);
        console.log('Time:', time);
        console.log('Number of Guests:', guests);
        // Reset form fields
        setDate('');
        setTime('');
        setGuests(1);
    };

    return (
        <section className='reservation'>
            <div className="estd">
                <div className="animal">
                    <h2>RESERVATIONS</h2>
                </div>
            </div>
            
            <div className="bookTable">
                <p>To book your table online at George Italian Seafood & Steakhouse at Greenwich CT, please enter the info and a manager will contact you soon.
                    We have a 10 minute grace period. For more than 8 guests please fill out
                    <a href="#">party form</a>.</p>
            </div>

            <form onSubmit={handleSubmit} className='text-white'>
                <div className="formField nameEmail">
                    <div>
                        <label>NAME</label>
                        <input
                            type="text"
                        />
                    </div>
                    <div>
                        <label>EMAIL</label>
                        <input
                            type="text"
                        />
                    </div>

                </div>

                <div className="formField pdtfield">
                    <div>
                        <label>PHONE</label>
                        <input
                            type="phone"
                        />
                    </div>
                    <div>
                        <label htmlFor="date">DATE</label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
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
                            onChange={(e:any) => setGuests(e.target.value)}
                            min="1"
                            required
                        />
                    </div>

                </div>
                <div className='spReuest'>
                  <div>
                  <label>SPECIAL REQUEST</label>
                    <input
                        type="request"
                    />
                  </div>
                </div>
                <button type="submit">SEND</button>
            </form>
            <div className="cusinoImg">
                {/* <img src="assets\image\pcuisine.jpg" alt="" /> */}
            </div>
        </section>
    )
}
