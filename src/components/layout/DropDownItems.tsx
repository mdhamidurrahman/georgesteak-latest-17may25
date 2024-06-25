import React from 'react'

const DropDownItems = () => {
    const menuItems = ["About", "Menus", "ORDER ONLINE SOON","RESERVATION" ,"EVENT INQUERY","GIFT CARDS","EVENTS & SPETIALS", "GALLRY","CONTECT", "JOIN MAILING LIST"];
  return (
    <ul className="w-[241px] bg-[#580000]">
    {menuItems.map((item, index) => (
      <li
        key={index}
        className={`px-4 py-2 bg-transparent hover:bg-[#2b0505] w-full border-b-2 ${index === 0 ? 'border-t-2' : ''} border-[#BEA570] cursor-pointer flex justify-center items-center`}
      >
        {item}
      </li>
    ))}
  </ul>
  )
}

export default DropDownItems