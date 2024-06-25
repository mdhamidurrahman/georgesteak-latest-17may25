import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollImage = ({ imageUrl, height }:{imageUrl:string,height:number}) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const image = imgRef.current;

    gsap.fromTo(
      image,
      { y: '-20%' },
      {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: image,
          start: 'top bottom', 
          end: 'bottom top', 
          scrub: true 
        }
      }
    );
  }, [imageUrl]); 

  return (
    <div style={{ height: `${height}px`, overflow: 'hidden' }}>
      <img className='w-full'  ref={imgRef} src={imageUrl} alt="" />
    </div>
  );
};

export default ScrollImage;
