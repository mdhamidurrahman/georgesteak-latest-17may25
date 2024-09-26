import React from "react";
type Props = {
  list1?: any;
  list2?: any;
  list3?: any;
  list4?: any;
  list5?: any;
  list6?: any;
};
const Appetizers = ({ list1, list2, list3, list4, list5, list6 }: Props) => {
  return (
    <div>
      <div className="border-r-2 px-8">
        {list1?.map((item: any) => (
          <div key={item.id} className="text-center">
            <h3 className="text-xl font-semibold">
              {item.title} <sub>{item.value} </sub>
            </h3>
            <span className="text-[12px]">{item.desc}</span>
          </div>
        ))}
      </div>
      {/* ===== List 2 ====== */}
      <div className="mt-12 px-8">
        {list2?.map((item: any) => (
          <div key={item.id} className="text-center">
            <h3 className="text-xl font-semibold">
              {item.title} <sub>{item.value} </sub>
            </h3>
            <span className="text-[12px]"> {item.desc}</span>
          </div>
        ))}
      </div>
      {/* ===== List 3 ====== */}

      <div className="pr-8">
        {list3?.map((item: any) => (
          <div key={item.id} className="text-center py-2">
            <h3 className="text-xl font-semibold">
              {item.title} <sub>{item.value} </sub>
            </h3>
            <div className="grid">
              <span className="text-[12px]"> {item.desc}</span>
              <span className="text-[12px]"> {item.desc2}</span>
            </div>
          </div>
        ))}
      </div>
      {/* ===== List 4 ====== */}
      <div className="pl-8">
        {list4?.map((item: any) => (
          <div key={item.id} className="text-center">
            <h3 className="text-xl font-semibold">
              {item.title} <sub>{item.value} </sub>
            </h3>
            <div className="grid">
              <span className="text-[12px]"> {item.desc}</span>
              <span className="text-[12px]"> {item.desc2}</span>
            </div>
          </div>
        ))}
      </div>
      {/* ===== List 5 ====== */}
      <div className="px-8">
        {list5?.map((item: any) => (
          <div key={item.id} className="text-center">
            <h2 className="text-2xl font-bold">{item.past} </h2>
            <h3 className="text-xl font-semibold">
              {item.title} <sub>{item.value} </sub>
            </h3>
            <span className="text-[12px]"> {item.desc}</span>
            <h2>{item.sides} </h2>
            {/* ====== sides ====== */}
            <div className="flex place-items-center">
              {item?.listItems?.map((d: any) => (
                <div className="flex border-r px-2">
                  <h3>
                    {d.title} <sub>{d.value} </sub>
                  </h3>
                </div>
              ))}
            </div>
            {/* ====== sides ====== */}
            <div className="flex place-items-center">
              {item?.listItems?.map((d: any) => (
                <div className="flex border-r px-2">
                  <h3>
                    {d.title} <sub>{d.value} </sub>
                  </h3>
                </div>
              ))}
            </div>
            {/* ====== sides ====== */}
            <div className="flex place-items-center">
              {item?.listItems?.map((d: any) => (
                <div className="flex border-r px-2">
                  <h3>
                    {d.title} <sub>{d.value} </sub>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* ===== List 6 ====== */}
      <div className="px-8 border-l">
        {list6?.map((item: any) => (
          <div key={item.id} className="text-center">
            <h2 className="text-2xl font-bold">{item.past} </h2>
            <h3 className="text-xl font-semibold">
              {item.title} <sub>{item.value} </sub>
            </h3>
            <span className="text-[12px]"> {item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appetizers;
