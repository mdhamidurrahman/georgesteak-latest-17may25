import { Link } from "react-router-dom";

export default function Socialicon() {
  return (
    <section className="social-icons py-20">
      <div className="social_icon">
        <Link
          className="cursor-pointer"
          to={"https://www.facebook.com/GeorgeItalianSteakhouse/"}
        >
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </Link>{" "}
        <Link
          className="cursor-pointer"
          to={"https://www.instagram.com/georgesteakhouse/?hl=en"}
        >
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </Link>
      </div>
      {/* <div className="contetn">
                <a href="#">ADA COMPLIANCE STATEMENT</a>
                <p>Copyright 2024. All Rights Reserved
                    <a href="#"> DESIGNED BY NYC RESTAURANT</a>
                </p>
            </div> */}
    </section>
  );
}
