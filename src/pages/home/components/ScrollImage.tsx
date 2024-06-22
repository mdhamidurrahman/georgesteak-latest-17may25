
const ScrollImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="slick_img">
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default ScrollImage;
