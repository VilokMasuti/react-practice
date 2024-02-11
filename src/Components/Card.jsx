/* eslint-disable react/prop-types */
const Card = ({ data, handleCilck, index }) => {
  const { img, name, singer, added } = data;
  return (
    <div className=" mt-8 w-[225px] h-[260px] bg-gray-300 rounded-sm ml-6 pb-4 relative shadow-lg">
      <div className=" w-full h-3/5 bg-gray-300 rounded-t-md overflow-hidden">
        <img className="w-full h-full object-cover" src={img} alt={name} />
      </div>
      <div className="px-6 py-5 flex justify-between">
        <h1 className="text-lg font-semibold text-gray-800">{name}</h1>
        <p className="text-sm text-gray-600">{singer} </p>
      </div>
      <button
        onClick={() => handleCilck(index)}
        className={`"px-8 py-1 ml-4 rounded-md text-[20px] text-white ${
          added === false ? " bg-orange-500" : "bg-green-500"
        } "`}
      >
        {added === false ? "ADD Fav" : "Added"}
      </button>
    </div>
  );
};

export default Card;
