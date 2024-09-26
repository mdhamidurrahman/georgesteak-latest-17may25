
import { barMenuItems, barMenuItemsheader } from "../ArrayObject/Const";

const SubBarMenu = () => {
  const heroImage = "assets/image/navAnimatedImg.svg";
  return (
    <div className="border-[3px] border-[#400] p-2 m-4 md:m-6">
      <div className="grid place-items-center border-[2px] border-[#400] p-2 w-full font-bold">
        <div className="w-1/3">
          <img src={heroImage} />
        </div>

        {barMenuItemsheader.map((data, index) => (
          <div key={index} className="grid place-items-center">
            <h2 className="text-lg sm:text-2xl pb-2 tracking-[4px]">{data.bartitle}</h2>
            <div className="w-1/4 h-[1px] bg-[#400]"> </div>
            <h2 className="py-4 text-lg sm:text-xl text-center">{data.subtitle}</h2>
          </div>
        ))}

        {barMenuItems.map((item, index) => (
          <div className="py-4 text-center" key={index}>
            <h2 className="text-lg sm:text-xl">
              {item.title}{" "}
              {item.price && <sub className="text-[10px] sm:text-sm">{item.price}</sub>}
            </h2>
            <h2 className="text-sm sm:text-xl">{item.description}</h2>
            <div className={`${index === 12 ? "pt-16 pb-4" : ""}`}>
              <h2 className="text-lg sm:text-2xl">{item.seatBar}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubBarMenu;
