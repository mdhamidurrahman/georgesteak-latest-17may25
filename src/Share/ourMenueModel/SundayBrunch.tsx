import {
  SpecialBMenuItemsheader,
  sundayBrunchItems,
} from "../ArrayObject/Const";

const SundayBrunch = () => {
  const heroImage = "assets/image/navAnimatedImg.svg";
  return (
    <div className="border-[3px] border-[#400] p-2 m-4 sm:m-6">
      <div className="grid place-items-center border-[2px] border-[#400] p-2 w-full">
        <div className="w-1/3">
          <img src={heroImage} />
        </div>

        {SpecialBMenuItemsheader.map((data, index) => (
          <div key={index} className="grid place-items-center">
            <h2 className="font-bold text-sm sm:text-2xl text-center pb-2 tracking-[4px]">
              {data.bartitle}
            </h2>
            <div className="w-1/3 h-[1px] bg-[#400]"> </div>
            <h2 className="py-4 text-[12px] sm:text-xl">{data.subtitle}</h2>
          </div>
        ))}

        {sundayBrunchItems.map((item, index) => (
          <div className="py-2 text-center" key={index}>
            <h2 className="text-sm sm:text-xl font-bold">
              {item.title}
              {item.price && <sub className="text-[10px] sm:text-sm">{item.price}</sub>}
            </h2>
            <h2 className="text-[12px] sm:text-sm">{item.description}</h2>

            <div className={`${index === 10 ? "pt-4 pb-4" : ""}`}>
              {index === 10 && (
                <h2 className="text-sm sm:text-2xl font-bold">
                  {item.seatBar} <sub>10</sub>{" "}
                </h2>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SundayBrunch;
