import React from 'react';

const DropDownItems = () => {
  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Menus", href: "#menus" },
    { name: "ORDER ONLINE SOON", href: "#order-online" },
    { name: "RESERVATION", href: "#reservation" },
    { name: "EVENT INQUERY", href: "#event-inquiry" },
    { name: "GIFT CARDS", href: "#gift-cards" },
    { name: "EVENTS & SPECIALS", href: "#events-specials" },
    { name: "GALLERY", href: "#gallery" },
    { name: "CONTACT", href: "#contact" },
    { name: "JOIN MAILING LIST", href: "#join-mailing-list" },
  ];

  return (
    <ul className="w-[241px] bg-[#580000]">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`px-4 py-2 bg-transparent hover:bg-[#2b0505] w-full border-b-2 ${index === 0 ? 'border-t-2' : ''} border-[#BEA570] cursor-pointer flex justify-center items-center`}
        >
          <a href={item.href} className="w-full flex justify-center items-center text-[#ffd400]">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default DropDownItems;
