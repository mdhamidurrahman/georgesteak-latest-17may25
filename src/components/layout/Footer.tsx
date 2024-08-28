const Footer = () => {
  const data = [
    {
      title: "2 S WATER STREET, GREENWICH, CT",
      image: "https://georgesteakhouse.com/images/gps-u2540.png?crc=24630775",
    },
    {
      title: "(203) 531-7050",
      image: "https://georgesteakhouse.com/images/phone-u2541.png?crc=58804421",
    },
    {
      title: "INFO@GEORGESTEAKHOUSE.COM",
      image:
        "https://georgesteakhouse.com/images/email-u2542.png?crc=316907290",
    },
  ];

  return (
    <>
      <div
        className={`bg-[#400000] hidden border-t border-[#ffd400]  fixed gap-6 text-center pt-2 bottom-0 w-full h-12 lg:flex  items-start justify-center`}
      >
        <div className="flex justify-end gap-10 w-[80%]">
          {data.map((link, index) => (
            <div
              key={index}
              className="flex opacity-[0.7] hover:opacity-[1] justify-center text-center items-center gap-2"
            >
              <img className="h-3 w-3" src={link.image} alt="icon" />
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
          className="flex  opacity-[0.5] gap-10 h-full w-[4
        0%] justify-start items-start "
        >
          <img
            className="h-[15px] w-[20px]"
            src="https://georgesteakhouse.com/images/facebook2.svg?crc=159406103"
            alt="ff"
          />
          <img
            className="h-[15px] w-[20px]"
            src="https://georgesteakhouse.com/images/instagram2.svg?crc=3925054431"
            alt="thd"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
