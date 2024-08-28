import { Link } from "react-router-dom";

const TableBooking = () => {
  return (
    <div
      id="home"
      className=" lg:pt-[350px] pt-[100px] backDrop font-light flex justify-center items-center flex-col"
    >
      <div className="hidden lg:hidden sm:block">
        <img
          className="h-[460px] w-[423px]"
          src="assets/image/estd.svg"
          alt="imag"
        />
      </div>
      <Link
        to={
          "https://www.opentable.com/restref/client/?rid=1250434&restref=1250434&lang=en-US&color=1&r3uid=cfe&dark=false&partysize=2&datetime=2024-08-26T22%3A30&ot_source=Restaurant%20website&corrid=9174bdb8-c665-4d56-aeec-e5f0e93b9402"
        }
        className="w-[318px] lg:hidden mb-10 min-h-[40px] hidden sm:flex justify-center items-center text-center  
            border-white bg-inherit border-solid border-[1px] hover:text-[#ffd400] hover:border-[#ffd400]
         hover:bg-[rgba(0,0,0,0.2)] rounded-[4px] 
            text-white text-[12px] 
            leading-[41px] 
            font-light "
      >
        BOOK YOUR TABLE
      </Link>
      <div className="flex md:hidden flex-col lg:hidden  text-white leading-7 text-center font-[300] text-[12px]">
        <div>2 S WATER STREET, GREENWICH, CT</div>
        <div>(203) 531-7050</div>
        <div>INFO@GEORGESTEAKHOUSE.COM</div>
      </div>
      <div className="flex md:hidden gap-4 mt-10 pb-[100px] justify-center items-center">
        <img
          className="h-[20px] w-[25px]"
          src="https://georgesteakhouse.com/images/facebook2.svg?crc=159406103"
          alt="ff"
        />
        <img
          className="h-[20px] w-[25px]"
          src="https://georgesteakhouse.com/images/instagram2.svg?crc=3925054431"
          alt="thd"
        />
      </div>

      <div className="text-center hidden lg:flex flex-col justify-center  items-center text-white">
        <div className="text-[40px] xl:text-[50px]  leading-[75px] tracking-[4px]">
          ITALIAN SEAFOOD & STEAKHOUSE
        </div>
        <div className="text-[27px] xl:text-[36px] leading-[54px] tracking-[9px]">
          IN GREENWICH, CT
        </div>
      </div>
      <Link
        to={
          "https://www.opentable.com/restref/client/?rid=1250434&restref=1250434&lang=en-US&color=1&r3uid=cfe&dark=false&partysize=2&datetime=2024-08-26T22%3A30&ot_source=Restaurant%20website&corrid=9174bdb8-c665-4d56-aeec-e5f0e93b9402"
        }
        className="w-[318px] min-h-[40px] hidden lg:flex justify-center items-center text-center  
            border-white bg-inherit border-solid border-[1px] hover:text-[#ffd400] hover:border-[#ffd400]
         hover:bg-[rgba(0,0,0,0.2)] rounded-[4px] 
            text-white text-[12px] 
            leading-[41px] 
            font-light mt-[23px] "
      >
        BOOK YOUR TABLE
      </Link>
      <div className="flex md:block justify-center sm:hidden lg:py-[300px] xl:py-[400px] py-9 items-center text-center">
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
