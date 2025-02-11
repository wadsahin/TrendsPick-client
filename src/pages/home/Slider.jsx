
const Slider = ({img, title, desc}) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-around md:px-10 bg-teal-500 bg-opacity-80" style={{height: "100vh"}}>
      <div className="flex-1">
        <img src={img} alt="" />
      </div>
      <div className="flex-1 text-start">
        <h2 className="text-5xl font-bold text-white leading-tight mb-4 mt-5">{title}</h2>
        <p className="text-white opacity-95">{desc}</p>
      </div>
    </div>
  );
};

export default Slider;