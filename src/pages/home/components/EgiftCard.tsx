import ScrollImage from "./ScrollImage"

export default function EgiftCard() {
    const imageUrl="assets/image/pparties.jpg"
    return (
        <section className='bg-white'>

            <div className="estd">
                <div className="animal">
                    <h2>E-GIFT CARDS</h2>
                </div>
                <p>The George Seafood & Steakhouse e-Gift Card in Greenwich CT is the perfect gift for family members, friends, or important clients on your list</p>
            </div>

            <div className="george">
                <div className="seeFood w-1/2">
                    <img src="assets\image\giftcard-u.png" alt="" />
                </div>
                <div className="cAmount w-1/2">
                    <h2>CHOOSE AMOUNT</h2>
                    <div className="hline"></div>
                    <a href="#">COMMING SOON</a>
                    <div className="hline"></div>
                </div>
            </div>
            <div className="egiftc p-10">
                <p>If you do not receive an e-Gift Certificate from the Best Italian Restaurants
                    in Greenwich CT George Steakhouse within 24 hours, please check your spam folder or email us at
                    <a href="#">giftcard@nycrestaurant.com</a> </p>
            </div>
        <ScrollImage imageUrl={imageUrl} height={400} />
        </section>
    )
}
