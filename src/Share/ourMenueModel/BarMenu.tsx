import SubBarMenu from "./SubBarMenu";

type Props = {
  onClose: () => void;
};
const BarMenu = ({ onClose }: Props) => {
  const heroImage = "assets/image/navAnimatedImg.svg";
  return (
    <section className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="relative w-4/5 h-screen shadow-lg bg-white"
        style={{
          overflowY: "scroll",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(0,0,0,0) rgba(0,0,0,0)",
        }}
      >
        <button
          className="absolute top-4 text-[#400] right-4 bg-[#FFB728] p-2 text-sm"
          onClick={onClose}
        >
          X
        </button>
        <div className="w-full h-[1000px] flex flex-col justify-between place-items-center bg-[#400] pt-64 pb-28">
          <div className="w-1/3">
            <img src={heroImage} />
          </div>
          <h2 className="text-[#FFB728]">@GEORGESTEAKHOUSE</h2>
        </div>
        {/* ========= Bar Menu ========= */}

        <SubBarMenu />
      </div>
    </section>
  );
};

export default BarMenu;
