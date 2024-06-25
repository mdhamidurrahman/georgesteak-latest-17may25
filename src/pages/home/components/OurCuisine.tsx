import ScrollImage from "./ScrollImage";

export default function OurCuisine() {
    const imageUrl="assets/image/pevents.jpg"
    return (
        <section className='reservation'>

            <div id="gallery" className="estd">
                <div className="animal">
                    <h2>OUR CUISINE</h2>
                </div>
            </div>

            <div className="galery">
                <div className="gallery cuisineGalery">
                    <div className="gallery-item">
                        <img src="assets/image/f01.jpg" alt="Image 1" />
                        <div className="gallery-item-overlay">
                            <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                            <h3>Jumbo Shrimp Cocktail</h3>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src="/assets/image/f02.jpg" alt="Image 2" />
                        <div className="gallery-item-overlay">
                            <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                            <h3>Maryland Crab Cake</h3>

                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src="assets/image/f03.jpg" alt="Image 3" />
                        <div className="gallery-item-overlay">
                            <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                            <h3>Baked Clams Oreganata</h3>

                        </div>
                    </div>

                    <div className="gallery-item">
                        <img src="assets/image/f04.jpg" alt="Image 3" />
                        <div className="gallery-item-overlay">
                            <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                            <h3>Ahi Tuna Tartare</h3>

                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src="/assets/image/f05.jpg" alt="Image 3" />
                        <div className="gallery-item-overlay">
                            <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                            <h3>Cavatelli </h3>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src="/assets/image/f06.jpg" alt="Image 3" />
                        <div className="gallery-item-overlay">
                            <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                            <h3>Grilled Wild Salmon</h3>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src="assets/image/f07.jpg" alt="Image 3" />
                        <div className="gallery-item-overlay">
                            <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                            <h3>Grilled Lamb Chops</h3>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src="assets/image/f08.jpg" alt="Image 3" />
                        <div className="gallery-item-overlay">
                            <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                            <h3>Linguine Zuppa di Pesce</h3>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src="assets/image/f09.jpg" alt="Image 3" />
                        <div className="gallery-item-overlay">
                            <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                            <h3>Dry Aged Porterhouse</h3>
                        </div>
                    </div>
                </div>
            </div>
            
            <ScrollImage imageUrl={imageUrl} height={500}/>
        </section>
    )
}
