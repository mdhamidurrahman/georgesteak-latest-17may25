import React from 'react'

export default function OurMenue() {
    return (
        <div className='bg-white'>
            <div className="animal">
                <img src="assets\image\hudsonlogo_noname.svg" alt="George Italian" className='w-1/4' />
                <h2>OUR MENUS</h2>
            </div>

            <div className="galery">
                <div className="gallery">
                    <div className="gallery-item">
                        <img src="assets\image\menus01.jpg" alt="" />
                        <div className="gallery-item-overlay">
                            <h3>LUNCH PRIX-FIXED</h3>
                            
                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src="assets\image\menus05.jpg" alt="" />
                        <div className="gallery-item-overlay">
                            <h3>LUNCH & DINNER</h3>
                            
                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src="assets\image\menus04.jpg" alt="" />
                        <div className="gallery-item-overlay">
                            <h3>SUNDAY BRUNCH</h3>
                          
                        </div>
                    </div>

                    <div className="gallery-item">
                        <img src="assets\image\menusbarmenu.jpg" alt="" />
                        <div className="gallery-item-overlay">
                            <h3>BAR MENU</h3>
                         
                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src="assets\image\menusdrinks01.jpg" alt="" />
                        <div className="gallery-item-overlay">
                            <h3>cocktails</h3>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src="assets\image\menus03.jpg" alt="" />
                        <div className="gallery-item-overlay">
                            <h3>DESSERTS</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
