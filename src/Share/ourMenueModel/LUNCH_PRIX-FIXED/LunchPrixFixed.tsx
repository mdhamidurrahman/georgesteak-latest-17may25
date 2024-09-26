
import StartEntries from "./StarEntries";
import {
  entriesArray,
  entriesArray2,
  StartersArray,
  StartersArray2,
} from "../../ArrayObject/Const";
import VealPiccata from "./VealPiccata";
import ExpressLunch from "./ExpressLunch";
type Props = {
  onClose: () => void;
};
const LunchPrixFixed = ({ onClose }: Props) => {
  const heroImage = "assets/image/navAnimatedImg.svg";
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="relative w-11/12 md:w-4/5 h-screen shadow-lg bg-white p-4 md:p-12"
        style={{
          overflowY: "scroll",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(0,0,0,0) rgba(0,0,0,0)",
        }}
      >
        <button
          className="absolute top-2 sm:top-4 text-[#400] right-2 bg-[#FFB728] p-1 sm:p-2 text-sm"
          onClick={onClose}
        >
          X
        </button>
        {/* ============ Model content start =========== */}
        <div className="border-[3px] border-[#400] p-2 w-full">
          <div className="border-[1px] border-[#400] p-[10px] w-full sm:p-4 grid place-items-center">
            <div className="w-1/3">
              <img src={heroImage} />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-evenly place-items-center w-full text-[#400] font-bold py-4">
              <span className="text-[10px] lg:text-sm">MON - SAT</span>
              <h2 className="text-[15px] lg:text-2xl sm:tracking-[4px]">
                PRIX- F IXE D LU NC H
              </h2>
              <span className="text-[10px] lg:text-sm">12PM - 4PM</span>
            </div>
            <span className="text-[10px] lg:text-sm">$24.95</span>
            <div className="flex justify-center gap-2 place-items-center w-full">
              <div className="w-[15%] h-[1px] bg-[#400]"></div>
              <h1 className="text-[15px] lg:text-2xl tracking-[4px] font-bold">
                STARTERS
              </h1>
              <div className="w-[15%] h-[1px] bg-[#400]"></div>
            </div>
            <span className="text-[10px] lg:text-sm">choice of</span>
            {/* ======== starters ======== */}
            <div className="flex flex-col md:flex-row justify-between w-full py-4">
              <StartEntries list1={StartersArray} />
              <StartEntries list2={StartersArray2} />
            </div>

            <div className="flex justify-center gap-2 place-items-center w-full">
              <div className="w-[15%] h-[1px] bg-[#400]"></div>
              <h1 className="text-[15px] lg:text-2xl tracking-[4px] font-bold">ENTREES</h1>
              <div className="w-[15%] h-[1px] bg-[#400]"></div>
            </div>
            <span className="text-sm pb-4">choice of</span>

            {/* ======== Entries ======== */}
            <div className="flex flex-col md:flex-row justify-between w-full py-4">
              <StartEntries list1={entriesArray} />
              <StartEntries list1={entriesArray2} />
            </div>
            <VealPiccata />
            <ExpressLunch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LunchPrixFixed;
