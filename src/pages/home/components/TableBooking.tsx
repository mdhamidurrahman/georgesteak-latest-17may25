
const TableBooking = () => {
  return (
    <div className="pt-[350px] bg-transparent font-light flex justify-center items-center flex-col">
      <div className="text-center flex flex-col justify-center  items-center text-white">
        <div className="text-[50px] leading-[75px] tracking-[4px]">
          ITALIAN SEAFOOD & STEAKHOUSE
        </div>
        <div className="text-[36px] leading-[54px] tracking-[9px]">
          IN GREENWICH, CT
        </div>
      </div>
      <div
        className="w-[318px] min-h-[40px] flex justify-center items-center text-center  
            border-white bg-inherit border-solid border-[1px] hover:text-[#ffd400] hover:border-[#ffd400]
         hover:bg-[rgba(0,0,0,0.2)] rounded-[4px] 
            text-white text-[12px] 
            leading-[41px] 
            font-light mt-[23px] "
      >
        BOOK YOUR TABLE
      </div>
      <div className="flex justify-center pt-[400px] pb-[200px] items-center text-center">
        <img
          className=" h-[60px] w-[70px] "
          src="https://georgesteakhouse.com/images/adacompliancelogo_2x69x57.png?crc=3880310862"
          alt="img"
        />
      </div>
    </div>
  );
};

export default TableBooking;
