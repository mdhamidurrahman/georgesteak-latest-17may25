
export default function ContactUs() {
    return (
        <section className='bg-white py-10'>
            <div id="contact" className="estd">
                <div className="animal">
                    <h2>CONTACT US</h2>
                </div>
            </div>

            <div className="container">
                <div className="box-icon">
                    <div className="icon_boxx">
                        <div className="icon-box">
                            <div className="icon">
                                <img src="assets\image\map-u320.png" />
                            </div>
                            <a href="#" className="w-5">2 South Water Street Greenwich, CT 06830</a>

                        </div>
                        <div className="icon-box">
                            <div className="icon">
                                <img src="assets\image\mobile-u321.png" />
                            </div>
                            <a href="#">(203) 531-7050</a>
                        </div>
                        <div className="icon-box">
                            <div className="icon">
                                <img src="assets\image\enveope-u322.png" />
                            </div>
                            <a href="#">info@georgesteakhouse.com</a>
                        </div>
                        <div className="center-box">
                            <div className="icon-box">
                                <div className="icon">
                                    <img src="assets\image\valeticon-u68177.png" />
                                </div>
                                <a href="#">Complimentary Parking</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mailingList">
                    <h2>MAILING LIST</h2>
                    <div className="hline"></div>
                    <p>Get updates on The best Italian Restaurants in Greenwich CT George Italian Seafood
                        & Steakhouse and get latest news, special offers and events before anyone else</p>
                </div>

                <form className="userInfo">
                    <div className="sentdata">
                        <div className="form-group">
                            <label htmlFor="name">FIRST NAME</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">EMAIL</label>
                            <input type="text" />
                        </div>
                        <a href="#">SEND</a>
                    </div>
                </form>
            </div>
        </section>
    )
}
