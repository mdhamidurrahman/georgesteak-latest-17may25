

const ExpressLunch = () => {
  return (
    <div className="w-full lg:w-11/12 2xl:w-[70%]">
      <div className="border-[3px] border-[#400] p-2">
        <div className="border-[1px] border-[#400] p-4 grid place-items-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4 place-items-center">
            <div className="grid place-items-center text-center text-[8px] lg:text-[12px]">
              <span>HOUSE SALAD OR CAESAR SALAD </span>
              <span>WITH GRILLED CHICKEN</span>
            </div>
            <h2 className="text-sm text-center lg:text-xl font-bold border-l-2 border-r-2 px-4">
              EXPRESS LUNCH 18
            </h2>
            <div className="grid place-items-center text-center text-[8px] lg:text-[12px]">
              <span>CLASSIC BURGER WITH AMERICAN </span>
              <span>CHEESE & FRIES</span>
            </div>
          </div>
        </div>
      </div>
      {/* ===== Lunch Menu ======= */}
      <div className="grid place-items-center text-center gap-4 w-full py-4">
        <h2 className="text-sm lg:text-xl font-bold">
          LUNCH MENU AVAILABLE FOR MAXIMUN PARTIES OF 8 GUESTS
        </h2>
        <div className="text-center text-[10px] opacity-50 pt-2 grid">
          <span>
            IF YOU HAVE ANY FOOD ALLERGIES SPEAK TO YOUR SERVER OR MANAGER
          </span>
          <span>
            CONSUMING RAW OR UNDERCOOKED MEATS, POULTRY, SEAFOOD, SHELLFISH, OR
            EGGS MAY INCREASEYOUR RISK OF FOOD BORNE ILLNESS
          </span>
        </div>
        <div className="cursor-pointer text-[10px] sm:text-sm">www.GEORGESTEAKHOUSE.com</div>
      </div>
    </div>
  );
};

export default ExpressLunch;
