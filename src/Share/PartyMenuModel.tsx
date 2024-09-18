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
    title: <span style={{ fontWeight: "700" }}>3H WINE BEER & SODA</span>,
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
    description: [
      "breadcrumbs, oregano, lemon white wine sauce",
      "NY STRIP STEAKS",
    ],
  },
  {
    title: (
      <span style={{ fontWeight: "700", fontSize: "24px" }}>
        DESSERTS & COFFEE
      </span>
    ),
    description: ["Family Style"],
  },
  {
    title: <span style={{ fontWeight: "700" }}>$54 per person</span>,
    description: ["(not including tax & tip)"],
  },
];
// ===== menuItems 3 ======
const menuItems3 = [
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
    description: [
      <div className="mt-[50px]">
        breadcrumbs, oregano, lemon white wine sauce
      </div>,
      <p>GRILLED WILD SALMON</p>,
      <p>NY STRIP STEAKS</p>,
      <p>FILET MIGNON</p>,
      "RIBEYE STEAK",
    ],
  },
];
// ======= menuItems 4 =======
const menuItems4 = [
  {
    title: "This party menu its",
    description: [
      <div className="flex place-items-baseline gap-1">
        <h2 className="text-lg font-bold">3 hours</h2> food and{" "}
        <h2 className="text-lg font-bold">Wine Bear & sods</h2>
      </div>,
    ],
  },
  {
    title: <h2 className="text-lg font-bold">$45 per person</h2>,
    description: ["(no tax or tip induced)"],
  },
];
const menuTitle = [
  {
    title: "P A R T Y MENU 1",
    menuItems: menuItems,
    appetizers: "APPETIZERS",
    familystyle: "choice of",
    entrees: "ENTREES",
    choiceof: "choice of",
    heading: "*GEORGE HOUSE SALAD",
    vigitable: "mixed greens, tomatoes, house dressing",
    table: "*MEATBALLS",
    Braised: "Braised meatballs, parmesan cheese,tomato basil sauce",
  },
  {
    title: "P A R T Y MENU II",
    menuItems: menuItems2,
    appetizers: "APPETIZER",
    familystyle: "family style",
    entrees: "ENTREES",
    choiceof: "choice of",
    heading: "GEORGE HOUSE SALAD",
    vigitable: "FRESH MOZZARELLA",
    table: "FRIED CALAMARI",
    Braised: "BAKED CLAMS OREGANATA",
    Egg: "EGGPLANT ROLLATINI",
    Peper: "SAUSAGE & PEPPERS",
    pasta: "PASTA",
    penne: "PENNE ALA VODKA",
  },
  {
    title: "P A R T Y MENU 3",
    appetizers: "APPETIZER",
    familystyle: "family style",
    entrees: "ENTREES",
    choiceof: "choice of",
    clams: <p style={{ paddingTop: "20px" }}>OSYTERS, CLAMS, SHRIMP </p>,
    cocktail: <span>cocktail sauce</span>,
    AHI: "AHI TUNA TARTARE",
    heading: "GEORGE HOUSE SALAD",
    vigitable: "FRESH MOZZARELLA",
    table: "FRIED CALAMARI",
    Braised: "EGGPLANT ROLLATINI",
    Peper: "SAUSAGE & PEPPERS",
    pasta: "PASTA",
    penne: "PENNE ALA VODKA",
    P_menuItems: menuItems3,
  },
  // ======= menuItems 4 =======
  {
    desserts: "DESSERTS & COFFEE",
    person: "$85 per person",
    title: <div className="py-4"></div>,
    appetizers: <h2 className="py-12">BUFFET STYLE</h2>,
    clams: (
      <h1 className="text-2xl font-bold pt-8">*Tray –Mozzarella Caprese</h1>
    ),
    cocktail: (
      <span>
        Organic Tomato, Red bell peppers, fresh basil, mix olives, Balsamic
        drizzle
      </span>
    ),
    AHI: <h2 className="text-2xl font-bold">*Tray – Eggplant Rollatini</h2>,
    heading: "Fresh Mozzarella, ricotta, tomato basil sauce",
    vigitable: <h2 className="text-2xl font-bold">*Tray –Chicken Martini</h2>,
    table: "With green peas, lemon white wine sauce ",
    Braised: <h2 className="text-2xl font-bold">*Tray –Veal Marsala</h2>,
    Peper: "With mushroom, Marsala wine sauce",
    pasta: <h2 className="text-2xl font-bold">*Tray- Penne Ala Vodka</h2>,
    penne: "Penne Pasta with tomato vodka cream sauce",
    Party_menues: menuItems4,
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
                  <div className="relative border-2 border-[#400] w-full grid place-items-center gap-4 text-center p-4">
                    <div className="w-3/4 sm:w-2/4 lg:w-1/3">
                      <img
                        src="assets/image/navAnimatedImg.svg"
                        className="w-full"
                      />
                    </div>
                    {/* ========== Party Menu 4 -> DESSERTS & COFFEE ======== */}
                    <div className="absolute top-56">
                      <h2 className="text-2xl sm:text-3xl font-bold">
                        {item.desserts}
                      </h2>
                      <span>{item.person}</span>
                    </div>
                    <div
                      className={
                        index === 3
                          ? "mt-10 border-t border-b border-[#400] w-1/3 py-2"
                          : "border-t border-b border-[#400] w-1/3 py-2"
                      }
                    >
                      {item?.title}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold">
                        {item.appetizers}
                      </h2>
                      <span className="text-lg sm:text-xl">
                        {item.familystyle}
                      </span>
                      {/* ======= Party Menu 3 ====== */}
                      <div>
                        {item.clams}
                        {item.cocktail}
                      </div>
                    </div>
                    <div className="pt-4 sm:pt-8 grid gap-2">
                      <p>{item.AHI} </p>
                      <h4>{item.heading}</h4>
                      <span>{item.vigitable} </span>
                      <span> {item.table} </span>
                      <span>{item.Braised} </span>
                      <span>{item.Egg} </span>
                      <span className="pb-4">{item.Peper} </span>

                      {index === 1 || index === 2 || index === 3 ? (
                        <div className="pb-6">
                          <h2 className="text-2xl sm:text-3xl font-bold">
                            {item.pasta}
                          </h2>
                          <div className="text-lg sm:text-xl">{item.penne}</div>
                        </div>
                      ) : (
                        ""
                      )}

                      <h2 className="text-2xl sm:text-3xl font-bold">
                        {item.entrees}
                      </h2>
                      <span className="text-lg sm:text-xl">
                        {item.choiceof}
                      </span>
                    </div>

                    <div>
                      {item.menuItems?.map((item, index) => (
                        <article
                          key={index}
                          className={index === 2 ? "!py-0" : "py-6"}
                        >
                          <h2 className="text-lg">{item.title}</h2>
                          {item.description.map((desc, i) => (
                            <span key={i} className="block">
                              {desc}
                            </span>
                          ))}
                        </article>
                      ))}
                      {
                        /* ======== Party Menu 3 ======== */
                        item.P_menuItems?.map((P_item, index) => (
                          <div key={index}>
                            <h2>{P_item.title}</h2>
                            <div>{P_item.description}</div>
                          </div>
                        ))
                      }
                      {/* ===== List of Menu Items 4 ===== */}
                      <div className="mt-10">
                        {item.Party_menues?.map((list, index) => (
                          <div key={index}>
                            <h2>{list.title} </h2>
                            <p>{list.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="absolute top-4 z-50 right-2 bg-white p-2 rounded shadow-md"
                  onClick={onClose}
                >
                  <i className="fa fa-times" aria-hidden="true"></i>
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
