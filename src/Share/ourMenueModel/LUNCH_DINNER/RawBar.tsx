const Rawbarlist = [
  {
    title: "OYSTERS",
    value: 3,
    pc: "pc",
  },
  {
    title: "CLAMS",
    value: 2.5,
    pc: "pc",
  },
  {
    title: "CRAB MEAT",
    value: 22,
  },
  {
    title: "SEAFOOD TOWER",
    value: "FOR TWO OR MORE MP",
    pc: "COCKTAIL SAUCE",
  },
  {
    title: "JUMBO SHRIMP",
    value: 7,
    pc: "pc",
  },
  {
    title: "LOBSTER",
    pc: "MP",
  },
];

const RawBar = () => {
  return (
    <div className="relative border-[3px] border-[#400] p-2 my-8 w-11/12 2xl:w-4/5">
      <div className="border-[1px] border-[#400] p-4">
        <h1 className="text-[12px] whitespace-nowrap sm:whitespace-normal md:text-xl lg:text-2xl font-bold absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2">
          RAW BAR
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-4 xl:gap-8 place-items-center text-center">
          {Rawbarlist.map((data, index) => (
            <div
              key={index}
              className={`${
                index === 3 ? "border-r border-l border-[#400] px-4 lg:px-8" : ""
              }`}
            >
              <h3 className="font-bold !text-[10px] xl:!text-sm">{data.title}</h3>
              <div
                className={`${
                  index === 3
                    ? "flex flex-col text-[10px]"
                    : "text-[10px] flex place-items-center gap-2 justify-center"
                }`}
              >
                <span>{data.value}</span>
                <span>{data.pc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RawBar;
