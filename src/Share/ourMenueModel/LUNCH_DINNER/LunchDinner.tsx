import {
  AppetizersArray,
  AppetizersArray2,
  PastasArray,
  PastasArray2,
  SoupSaladArray1,
  SoupSaladArray2,
} from "../../ArrayObject/Const";
import Appetizers from "./Appetizers";
import RawBar from "./RawBar";
import SteaksChops from "./SteaksChops";
type Props = {
  onClose: () => void;
};

const LunchDinner = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="relative w-11/12 sm:w-4/5 h-screen shadow-lg bg-white p-4 md:p-12"
        style={{
          overflowY: "scroll",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(0,0,0,0) rgba(0,0,0,0)",
        }}
      >
        <button
          className="absolute top-4 text-[#400] right-2 bg-[#FFB728] p-2 text-sm"
          onClick={onClose}
        >
          X
        </button>
        <div className="border-[3px] border-[#400] p-2">
          <div className="border-[1px] border-[#400] p-4 grid place-items-center">
            <RawBar />
            <h2 className="text-xl lg:text-2xl tracking-[4px] font-semibold">
              APPETIZERS
            </h2>
            <div className="flex flex-col md:flex-row justify-between py-4 md:py-0 md:pt-8 w-full">
              <Appetizers list1={AppetizersArray} />
              <Appetizers list2={AppetizersArray2} />
            </div>
            {/* ======== soup and salad ========= */}

            <h2 className="text-xl text-center lg:text-2xl tracking-[4px] font-semibold">
              SOUP & SALADS
            </h2>
            <div className="flex flex-col md:flex-row justify-evenly place-items-center w-full relative">
              <div className="absolute h-[1px] w-[5%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 bg-[#400] rotate-90"></div>
              <Appetizers list3={SoupSaladArray1} />
              <Appetizers list4={SoupSaladArray2} />
            </div>

            <SteaksChops />
            {/* ======= Pastas ======= */}
            <div className="flex flex-col md:flex-row justify-between w-full relative">
              <Appetizers list5={PastasArray} />
              <Appetizers list6={PastasArray2} />
            </div>
            <span className="text-[6.5px] pt-3 text-center">
              IF YOU HAVE ANY FOOD ALLERGIES SPEAK TO YOUR SERVER OF MANAGER.
              CONSUMING RAW OR UNDERCOOKED MEATS, POULTRY, SEAFOOD, SHELLFISH,
              OR EGGS MAY INCREASE YOUR RISK OF FOOD BORNE ILLNESS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LunchDinner;
