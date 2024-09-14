
const Footer = () => {
  const data = [
    {
      title: "2 S WATER STREET, GREENWICH, CT",
      image: "assets/image/map-u320.png",
    },
    {
      title: "(203) 531-7050",
      image: "assets/image/mobile-u321.png",
    },
    {
      title: "INFO@GEORGESTEAKHOUSE.COM",
      image:
        "assets/image/enveope-u322.png",
    },
  ];

  return (
    <>
      <div
        className={`bg-[#400000] hidden border-t border-[#ffd400]  fixed gap-6 text-center pt-2 bottom-0 w-full h-12 lg:flex  items-start justify-center place-items-center`}
      >
        <div className="flex justify-end gap-10 w-[80%]">
          {data.map((link, index) => (
            <div key={index} className="flex opacity-[0.7] hover:opacity-[1] justify-center text-center items-center gap-2">
              <img className="h-4 w-4" src={link.image} alt="icon" />
              <a
                href="#"
                className="text-[#ffd400] tracking-[1px] font-[300] text-[12px]"
              >
                {link.title}
              </a>
            </div>
          ))}
        </div>
        <div
          className="flex opacity-[0.5] gap-10 h-full w-[4
        0%] justify-start place-items-center"
        >
          <img
            className="h-[40px] w-[40px]"
            src="assets/image/estd.svg"
            alt="ff"
          />
          <img
            className="h-[40px] w-[40px]"
            src="assets/image/navAnimatedImg.svg"
            alt="thd"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
