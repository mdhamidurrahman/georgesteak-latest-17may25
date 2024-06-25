
import ScrollImage from "./ScrollImage";

export default function About() {
  const imageUrl = "assets/image/paboutus01.jpg";
  const imageUrl1 = "assets/image/pmenus.jpg";
  return (
    <section>
      <ScrollImage imageUrl={imageUrl} height={700} />

      <div className="aboutUs">
        <div className=" about-us ">
          <div className="basis-1/2 goerg-p">
            <div className="estd">
              <div className="animal">
                <h2>ABOUT US</h2>
              </div>
            </div>
            <p>
              George Italian Seafood & Steakhouse offers exceptional Italian
              Cuisine with an American flair – served in a warm atmosphere where
              the emphasis is on comfort, taste and above all, relaxation and
              enjoyment!
            </p>
            <p>
              George Italian Seafood & Steakhouse is located over the 2 South
              Water Street location and open its first Connecticut location this
              spring.
            </p>
          </div>
          <div className="basis-1/2"></div>
        </div>

        {/* ====== Launch ======== */}
        <div className="launch">
          <article className="w-1/2">
            <div className="w-1/2">
              <h3>LUNCH</h3>
              <p>Monday - Saturday</p>
              <p>12:00 pm - 4:00 pm</p>
            </div>
            <div className="w-1/2">
              <h3>DINNER</h3>
              <p>Sun - Thu 4pm - 10pm</p>
              <p>Fri & Sat 4pm - 11pm</p>
            </div>
          </article>
          <div className="w-1/2 artcontent" ></div>
        </div>

        {/* ====== Happy Your ======== */}
        <div className="launch mt-10">
          <article className="w-1/2">
            <div className="w-1/2">
              <h3>HAPPY HOUR</h3>
              <p>Mon - Sat 3:30 pm - 6:30 pm</p>
              <p>Half off Drinks</p>
            </div>
            <div className="w-1/2">
              <h3>SUNDAY BRUNCH</h3>
              <p>Every Sunday</p>
              <p>12:00 pm - 4:00 pm</p>
            </div>
          </article>
          <div className="w-1/2 artcontent" ></div>
        </div>
      </div>
      <ScrollImage imageUrl={imageUrl1} height={400} />
    </section>
  );
}
