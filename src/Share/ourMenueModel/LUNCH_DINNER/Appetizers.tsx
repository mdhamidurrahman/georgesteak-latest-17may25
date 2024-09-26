
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
    <div className="w-full">
      <div className="md:border-r-2 w-full">
        {list1?.map((item: any) => (
          <div key={item.id} className="text-center">
            <h2 className="text-sm font-semibold">
              {item.title} <sub>{item.value} </sub>
            </h2>
            <span className="text-[12px]">{item.desc}</span>
          </div>
        ))}
      </div>
      {/* ===== List 2 ====== */}
      <div className="mt-4 md:mt-12 w-full">
        {list2?.map((item: any) => (
          <div key={item.id} className="text-center">
            <h2 className="text-sm font-semibold">
              {item.title} <sub>{item.value} </sub>
            </h2>
            <span className="text-[12px]"> {item.desc}</span>
          </div>
        ))}
      </div>
      {/* ===== List 3 ====== */}

      <div className="">
        {list3?.map((item: any) => (
          <div key={item.id} className="text-center py-2">
            <h2 className="text-sm font-semibold">
              {item.title} <sub>{item.value} </sub>
            </h2>
            <div className="grid">
              <span className="text-[12px]"> {item.desc}</span>
              <span className="text-[12px]"> {item.desc2}</span>
            </div>
          </div>
        ))}
      </div>
      {/* ===== List 4 ====== */}
      <div className="">
        {list4?.map((item: any) => (
          <div key={item.id} className="text-center">
            <h2 className="text-sm font-semibold">
              {item.title} <sub>{item.value} </sub>
            </h2>
            <div className="grid">
              <span className="text-[12px]"> {item.desc}</span>
              <span className="text-[12px]"> {item.desc2}</span>
            </div>
          </div>
        ))}
      </div>
      {/* ===== List 5 ====== */}
      <div className="">
        {list5?.map((item: any) => (
          <div key={item.id} className="text-center">
            <h2 className="text-2xl font-bold">{item.past} </h2>
            <h2 className="text-sm font-semibold">
              {item.title} <sub>{item.value} </sub>
            </h2>
            <span className="text-[12px]"> {item.desc}</span>
            <h2 className="text-2xl font-bold tracking-[4px]">{item.sides} </h2>
            <h4 className="text-sm font-semibold">{item.subsides} </h4>
            {/* ====== sides ====== */}
            <div className="flex flex-col md:flex-row place-items-center w-full justify-center">
              {item?.listItems?.map((d: any) => (
                <div className="md:border-r last:border-0 px-2">
                  <h2 className="text-[10px] xl:text-sm">
                    {d.title} <sub>{d.value} </sub>
                  </h2>
                </div>
              ))}
              {/* ====== sides List 2 ====== */}
            </div>
            <div className="flex flex-col md:flex-row place-items-center w-full justify-center">
              {item?.listItems2?.map((d: any) => (
                <div className="md:border-r last:border-0 px-2">
                  <h2 className="text-[10px] xl:text-sm">
                    {d.title} <sub>{d.value} </sub>
                  </h2>
                </div>
              ))}
            </div>
            {/* ====== sides List 3 ====== */}
            {item?.listItems3?.map((d: any) => (
              <h2 className="text-[10px] xl:text-sm">
                {d.title} <sub>{d.value} </sub>
              </h2>
            ))}
            {/* ====== sides List 4 ====== */}
            {item?.listItems4?.map((d: any) => (
              <h2 className="text-[10px] xl:text-sm">
                {d.title} <sub>{d.value} </sub>
              </h2>
            ))}
            {/* ====== sides List 5 ====== */}
            <div className="flex flex-col md:flex-row place-items-center justify-center">
              {item?.listItems5?.map((d: any) => (
                <h2 className="text-[10px] xl:text-sm">
                  {d.title} <sub>{d.value} </sub>
                </h2>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* ===== List 6 ====== */}
      <div className="md:border-l">
        {list6?.map((item: any) => (
          <div key={item.id} className="text-center">
            <h2 className="text-2xl font-bold">{item.past} </h2>
            <h2 className="text-sm font-semibold">
              {item.title} <sub>{item.value} </sub>
            </h2>
            <span className="text-[12px]"> {item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appetizers;
