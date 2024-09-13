import { useEffect, useRef, useState } from "react";
import ScrollImage from "./ScrollImage";

export default function EventEnquiryForm() {
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (!isScriptLoaded && widgetRef.current) {
      const script = document.createElement("script");

      script.src =
        "//www.opentable.com/widget/reservation/loader?rid=1250434&type=standard&theme=standard&color=1&dark=false&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website&cfe=true";
      script.async = true;

      script.onload = () => {
        setIsScriptLoaded(true);
      };

      widgetRef.current.appendChild(script);

      return () => {
        if (widgetRef.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          widgetRef.current.removeChild(script);
        }
      };
    }
  }, [isScriptLoaded]);

  return (
    <section className="eventEquity">
      {/* <div
        id="event-inquiry"
        className="estd eventInqury flex justify-center items-center flex-col"
      >
         <div className="animal">
          <h2>EVENT INQUIRY</h2>
        </div>
        <p>
          To book your private event at George Italian Restaurants in Greenwich,
          CT please enter your info & someone will contact you shortly
        </p>
       </div> */}
      <div className="w-full flex justify-center items-center">
        <div ref={widgetRef}></div>
      </div>
      <ScrollImage imageUrl="assets/image/contactus01.jpg" />
    </section>
  );
}
