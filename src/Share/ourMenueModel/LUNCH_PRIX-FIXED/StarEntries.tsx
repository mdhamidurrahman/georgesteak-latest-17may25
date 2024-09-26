type Props = {
  list1?: any[];
  list2?: any[];
};

const StartEntries = ({ list1 = [], list2 = [] }: Props) => {
  return (
    <div className="w-full">
      {/* ====== List1 ======= */}

      <div className="w-full">
        {list1.length > 0 &&
          list1.map((item: any) => (
            <div key={item.id} className="text-center py-3">
              <h2 className="text-sm lg:text-[16px] font-semibold">{item.title} </h2>
              <div className="grid text-[10px] lg:text-sm">
                <span>{item.desc1} </span>
                <span>{item.desc2} </span>
              </div>
            </div>
          ))}
      </div>
      {/* ====== List2 ======= */}
      <div className="w-full md:border-l-2">
        {list2.length > 0 &&
          list2.map((data: any) => (
            <div key={data.id} className="text-center py-1">
              <h2 className="text-sm lg:text-[16px] font-semibold">{data.title} </h2>
              <div className="grid text-[10px] lg:text-sm">
                <span>{data.desc1} </span>
                <span>{data.desc2} </span>
              </div>
              <h3 className="text-2xl font-bold">{data.subtitle} </h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StartEntries;
