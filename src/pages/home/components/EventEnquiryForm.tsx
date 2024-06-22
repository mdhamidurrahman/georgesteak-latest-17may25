import { useState } from 'react'

export default function EventEnquiryForm() {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);

    const handleSubmit = (e: any) => {
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
        <section className='eventEquity'>

            <div className="estd eventInqury">
                <div className="animal ">
                <h2>EVENT INQUIRY</h2>
                </div>
                <p>To book your private event at George Italian Restaurants in Greenwich, CT please enter your info & someone will contact you shortly</p>
            </div>

            <div className="container">
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
                                onChange={(e: any) => setGuests(e.target.value)}
                                min="1"
                                required
                            />
                        </div>

                    </div>
                    <div className='spReuest'>
                        <div>
                            <label>TYPE OF EVENT</label>
                            <input
                                type="request"
                            />
                        </div>
                    </div>
                    <button type="submit">SEND</button>
                </form>
            </div>

            <div className="dindingTable">

            </div>

        </section>
    )
}
