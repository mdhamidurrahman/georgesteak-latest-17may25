import ScrollImage from "./ScrollImage";

const galleryItems = [
  {
    title: "PRIX-FIXED LUNCH",
    bgImage: "assets/image/special_lunch.jpg",
    time: "Mon - Sat 12pm - 4pm | $24.95 |",
    menu: "MENU",
    url: "https://www.opentable.com/r/george-seafood-and-steakhouse-greenwich",
  },
  {
    title: "HAPPY HOUR",
    bgImage: "assets/image/special_happyhour01.jpg",
    time: "Mon - Sat 3:30pm - 6:30pm 1/2 OFF Drinks |",
    menu: "MENU",
    url: "https://www.opentable.com/r/george-seafood-and-steakhouse-greenwich",
  },
  {
    title: "SUNDAY BRUNCH",
    bgImage: "assets/image/special_express.jpg",
    time: "Sundays 12pm - 4pm |",
    menu: "MENU",
    url: "https://www.opentable.com/r/george-seafood-and-steakhouse-greenwich",
  },
  {
    title: "WINE WEDNESDAYS",
    bgImage: "assets/image/special_happyhour.jpg",
    time: "Wines 50% OFF | Up to $100",
    url: "https://www.opentable.com/r/george-seafood-and-steakhouse-greenwich",
  },
];
export default function Spevents() {
  const handleRedirect = (url: any) => {
    window.location.href = url;
  };

  const imageUrl = "assets/image/pgiftcards.jpg";
  return (
    <section className="spevent reservation">
      <div id="events-specials" className="estd">
        <div className="animal">
          <h2>EVENTS & SPECIALS</h2>
        </div>
      </div>
      <div className="galery">
        <div className="gallery eventSpecial">
          {galleryItems.map((item, index) => (
            <div className="gallery-item" key={index}>
              <div className="prix hour">
                <h2>{item.title} </h2>
                <img
                  src={item.bgImage}
                  className="cursor-pointer"
                  onClick={() => handleRedirect(item.url)}
                />
                <p>
                  {item.time} <a href={item.url}>{item.menu} </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="galery">
        <div className="gallery eventSpecial">
          <div className="gallery-item">
            <div className="prix">
              <h2>PRIX-FIXED LUNCH</h2>
              <img src="assets\image\special_lunch.jpg" />
              <p>
                Mon - Sat 12pm - 4pm | $24.95 | <a href="#">MENU</a>
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <div className="hour">
              <h2>HAPPY HOUR </h2>
              <img src="assets\image\special_happyhour01.jpg" alt="" />
              <p>
                Mon - Sat 3:30pm - 6:30pm 1/2 OFF Drinks | <a href="#">MENU</a>
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <div className="prix">
              <h2>SUNDAY BRUNCH</h2>
              <img src="assets\image\special_express.jpg" alt="" />
              <p>
                Sundays 12pm - 4pm | <a href="#">MENU</a>
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <div className="hour">
              <h2>WINE WEDNESDAYS </h2>
              <img src="assets\image\special_happyhour.jpg" alt="" />
              <p>Wines 50% OFF | Up to $100</p>
            </div>
          </div>
        </div>
       
      </div> */}

      <ScrollImage imageUrl={imageUrl} />
    </section>
  );
}
