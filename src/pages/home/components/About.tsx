import React from 'react'


export default function About() {
  return (
    <div>
    <div className='aboutUs'>
      <div className="flex flex-row">
        <div className="basis-1/2 goerg-p">
          <div className="animal">
            <img src="assets\image\hudsonlogo_noname.svg" alt="George Italian Seafood & Steakhouse" className='w-2/4' />
            <h2>ABOUT US</h2>
          </div>
          <p>George Italian Seafood & Steakhouse offers exceptional Italian Cuisine with an American flair
            – served in a warm atmosphere where the emphasis is on comfort, taste and above all, relaxation and enjoyment!</p>
          <p>George Italian Seafood & Steakhouse is located over the 2 South Water Street location and open its first Connecticut location this spring.</p>
        </div>
        <div className="basis-1/2"></div>
      </div>


      {/* ====== Launch ======== */}
      <div className="flex flex-row">
        <div className="flex-none basis-1/4">
          <h3>LUNCH</h3>
          <p>Monday - Saturday</p>
          <p>12:00 pm - 4:00 pm</p>
        </div>
        <div className="flex-initial basis-1/4">
          <h3>DINNER</h3>
          <p>Sun - Thu 4pm - 10pm</p>
          <p>Fri & Sat 4pm - 11pm</p>
        </div>
      </div>

      {/* ====== Happy Your ======== */}
      <div className="flex flex-row mt-5">
        <div className="flex-none basis-1/4">
          <h3>HAPPY HOUR</h3>
          <p>Mon - Sat 3:30 pm - 6:30 pm</p>
          <p>Half off Drinks</p>
        </div>
        <div className="flex-initial basis-1/4">
          <h3>SUNDAY BRUNCH</h3>
          <p>Every Sunday</p>
          <p>12:00 pm - 4:00 pm</p>
        </div>
      </div>
    </div>
      <div className="dinner">
          {/* <img src="assets\image\pmenus.jpg" alt="" /> */}
      </div>
    </div>
  )
}
