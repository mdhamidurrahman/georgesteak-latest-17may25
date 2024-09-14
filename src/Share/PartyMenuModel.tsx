const menuItems = [
  {
    title: "ORGANIC CHICKEN MARTINI",
    description: ["parmesan crusted, lemon butter sauce"],
  },
  {
    title: "VEAL SCALLOPINI MARSALA",
    description: ["mushrooms, marsala wine sauce"],
  },
  {
    title: "SOLE OREGANATA",
    description: ["breadcrumbs, oregano, lemon white", "wine sauce"],
  },
  {
    title: "3H WINE BEER & SODA",
    description: ["$50 per person", "(not including tax & tip)"],
  },
];
const menuItems2 = [
  {
    title: "ORGANIC CHICKEN MARTINI",
    description: ["parmesan crusted, lemon butter sauce"],
  },
  {
    title: "VEAL SCALLOPINI MARSALA",
    description: ["mushrooms, marsala wine sauce"],
  },
  {
    title: "SOLE OREGANATA",
    description: ["breadcrumbs, oregano, lemon white", "wine sauce"],
  },
  {
    title: "3H WINE BEER & SODA",
    description: ["$50 per person", "(not including tax & tip)"],
  },
];

const menuTitle = [
  {
    title: "P A R T Y MENU 1",
    menuItems: menuItems,
    familystyle: "choice of",
    heading: "*GEORGE HOUSE SALAD",
    vigitable: "mixed greens, tomatoes, house dressing",
    table: "*MEATBALLS",
    Braised: "Braised meatballs, parmesan cheese,tomato basil sauce",
  },
  {
    title: "P A R T Y MENU II",
    menuItems: menuItems2,
    familystyle: "family style",
    heading: "GEORGE HOUSE SALAD",
    vigitable: "FRESH MOZZARELLA",
    table: "FRIED CALAMARI",
    Braised: "BAKED CLAMS OREGANATA EGGPLANT ROLLATINI SAUSAGE & PEPPERS",
    pasta: "PASTA",
    penne: "PENNE ALA VODKA",
  },
  {
    title: "P A R T Y MENU 3",
    familystyle: "family style",
    heading: "GEORGE HOUSE SALAD",
    vigitable: "FRESH MOZZARELLA",
    table: "FRIED CALAMARI",
    Braised: "EGGPLANT ROLLATINI SAUSAGE & PEPPERS",
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const PartyMenuModel = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex w-full items-center z-50 justify-center bg-black bg-opacity-70"
      onClick={onClose}
    >
      <div
        className="relative w-4/5 bg-white py-10 h-screen overflow-y-scroll text-[#400] rounded-md shadow-lg z-50"
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
      >
        <div className="flex flex-col gap-5">
          {menuTitle.map((item, index) => (
            <div key={index}>
              <div className="grid place-items-center">
                <div className="w-full sm:w-[80%] lg:w-[70%] border-4 border-[#400] grid place-items-center p-4 sm:p-2">
                  <div className="border-2 border-[#400] w-full grid place-items-center gap-4 text-center p-4">
                    <div className="w-3/4 sm:w-2/4 lg:w-1/3">
                      <img
                        src="assets/image/navAnimatedImg.svg"
                        className="w-full"
                      />
                    </div>
                    <div className="border-t border-b border-[#400] w-1/3 py-2">
                      {item?.title}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold">
                        APPETIZERS
                      </h2>
                      <span className="text-lg sm:text-xl">
                        {item.familystyle}
                      </span>
                    </div>
                    <div className="pt-4 sm:pt-8 grid gap-2">
                      <h4>{item.heading} </h4>
                      <span>{item.vigitable} </span>
                      <span> {item.table} </span>
                      <span>{item.Braised} </span>

                      <h2 className="text-2xl sm:text-3xl font-bold">
                        ENTREES
                      </h2>
                      <span className="text-lg sm:text-xl">choice of</span>

                      {index === 1 && (
                        <div>
                          <h2 className="text-2xl sm:text-3xl font-bold">
                            {" "}
                            {item.pasta}
                          </h2>
                          <div className="text-lg sm:text-xl">{item.penne}</div>
                        </div>
                      )}
                    </div>

                    <div>
                      {item.menuItems?.map((item, index) => (
                        <article key={index} className="py-6">
                          <h2
                            className={`${
                              item.title === "3H WINE BEER & SODA"
                                ? "text-xl font-bold"
                                : "text-lg"
                            }`}
                          >
                            {item.title}
                          </h2>
                          {item.description.map((desc, i) => (
                            <span key={i} className="block">
                              {desc}
                            </span>
                          ))}
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  className="absolute top-4 z-50 right-2 bg-white p-2 rounded shadow-md"
                  onClick={onClose}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartyMenuModel;
