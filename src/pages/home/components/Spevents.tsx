import ScrollImage from "./ScrollImage";

export default function Spevents() {
const imageUrl="assets/image/pgiftcards.jpg"
    return (
        <section className='spevent reservation'>

            <div className="estd">
                <div className="animal">
                    <h2>EVENTS & SPECIALS</h2>
                </div>
            </div>
            <div className="galery">
                <div className="gallery eventSpecial">
                    <div className="gallery-item">
                        <div className="prix">
                            <h2>PRIX-FIXED LUNCH</h2>
                            <img src="assets\image\special_lunch.jpg" alt="" />
                            <p>Mon - Sat 12pm - 4pm | $24.95 | <a href="#">MENU</a></p>
                        </div>

                    </div>
                    <div className="gallery-item">
                        <div className="hour">
                            <h2>HAPPY HOUR </h2>
                            <img src="assets\image\special_happyhour01.jpg" alt="" />
                            <p>Mon - Sat 3:30pm - 6:30pm 1/2 OFF Drinks | <a href="#">MENU</a></p>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <div className="prix">
                            <h2>SUNDAY BRUNCH</h2>
                            <img src="assets\image\special_express.jpg" alt="" />
                            <p>Sundays 12pm - 4pm | <a href="#">MENU</a></p>
                        </div>

                    </div>
                    <div className="gallery-item">
                        <div className="hour">
                            <h2>WINE WEDNESDAYS </h2>
                            <img src="assets\image\special_happyhour.jpg" alt="" />
                            <p>Wines 50% OFF |  Up to $100</p>
                        </div>
                    </div>
                </div>
                <a href="#">JOIN OUR MAILING LIST</a>
            </div>
            <ScrollImage imageUrl={imageUrl} height={700}/>
            
        </section>
    )
}
