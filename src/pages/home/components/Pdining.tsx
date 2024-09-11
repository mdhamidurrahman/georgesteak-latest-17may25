export default function Pdining() {
  const handleDownload = () => {
    const link = document.createElement("a");
    console.log(window.location.host);
    link.href = `https://${window.location.host}/assets/party-menu.pdf`; // Path to your PDF file
    link.setAttribute("download", "party-menu.pdf"); // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="bg-white priDining">
      <div id="private-dining" className="estd">
        <div className="animal">
          <h2>PRIVATE DINING</h2>
        </div>
      </div>
      <div className="pdingin">
        <p>
          George Italian Seafood & Steakhouse is the perfect place to HOST YOUR
          SPECIAL EVENT up to 200 guests, either if is a RECEPTIONS, WEDDINGS,
          or a CORPORATE EVENTS, we'll customized your needs to make an
          unforgettable experience.
        </p>
        <div
          onClick={handleDownload}
          className="relative z-0 bg-[#400] text-[#fff] px-6 py-3 cursor-pointer"
        >
          PARTY MENUS
        </div>
      </div>

      <div className="galery pDining">
        <div className="gallery eventSpecial">
          <div className="gallery-item">
            <div className="prix">
              <h2>MAIN DINING ROOM</h2>
              <img src="assets\image\main.jpg" alt="" />
              <p>
                Seated Capacity 100-120 Guests | <a href="#">BOOK</a>
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <div className="hour">
              <h2>TUSCANY ROOM </h2>
              <img src="assets\image\tuscany.jpg" alt="" />
              <p>
                Seated Capacity 35-45 Guests | <a href="#">BOOK</a>
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <div className="prix">
              <h2>THE BAR & LOUNGE</h2>
              <img src="assets\image\barlounge.jpg" alt="" />
              <p>
                Seated Capacity 30-40 Guests | <a href="#">BOOK</a>
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <div className="hour">
              <h2>GEORGE ROOM </h2>
              <img src="assets\image\bianca.jpg" alt="" />
              <p>
                Seated Capacity 100-150 Guests | <a href="#">BOOK</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
