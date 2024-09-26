import {
  SteaksChopsArray,
  SteaksChopsArray2,
  SteaksChopsArray3,
} from "../../ArrayObject/Const";

const SteaksChops = () => {
  return (
    <div className="relative border-[3px] border-[#400] p-2 my-8 w-11/12 2xl:w-4/5">
      <div className="border-[1px] border-[#400] px-4 pt-4">
        <h1 className="text-[10px] whitespace-nowrap lg:whitespace-normal sm:text-xl lg:text-2xl font-bold lg:tracking-[4px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2">
          STEAKS CHOPS
        </h1>
        {/* ======= Steaks Chops ======= */}
        <div className="flex flex-col md:flex-row w-full justify-center gap-4 place-items-center">
          {SteaksChopsArray.map((data, index) => (
            <div key={index} className="md:border-r last:border-0 pr-4">
              <h2 className="text-[10px] xl:text-[12px] font-bold">
                {data.title} <sub className="text-[10px]">{data.value} </sub>
              </h2>
            </div>
          ))}
        </div>
        {/* ======= Steaks Chops 2 ======= */}
        <div className="flex flex-col md:flex-row justify-center text-center gap-4 place-items-center py-2">
          {SteaksChopsArray2.map((data, index) => (
            <div
              key={index}
              className={`${index === 1 ? "md:border-r pr-4" : ""}`}
            >
              <h2 className="text-[10px] xl:text-[12px] font-bold">
                {data.title} <sub className="text-[10px]">{data.value} </sub>
              </h2>
            </div>
          ))}
        </div>
        {/* ======= Steaks Chops 3 ======= */}
        <div className="flex flex-col md:flex-row justify-center place-items-center pt-3">
          {SteaksChopsArray3.map((data, index) => (
            <div key={index} className="md:border-r last:border-0 px-1">
              <h2 className="text-[10px] xl:text-[12px] font-bold">
                {data.title} <sub className="text-[10px]">{data.value} </sub>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SteaksChops;
