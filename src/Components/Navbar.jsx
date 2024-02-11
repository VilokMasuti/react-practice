const Navbar = ({ data }) => {
  return (
    <div className=" flex justify-between">
      <h1 className=" text-orange-500 text-2xl">Orange </h1>
      <div>
        <h2 className=" text-xl text-cyan-500 mt-2 px-2 py-2 mr-5 rounded-md bg-slate-900">
          Fav : {data.filter(item => item.added).length}
        </h2>
      </div>
    </div>
    // <div className=" flex justify-between">
    //   <h1 className=" text-xl text-red-600  px-2 py-2  rounded-md">Orange</h1>
    //   <div className="  mt-2 gap-3  mr-4">
    //     <h2 className=" text-sm p-2  rounded-md bg-orange-400 text-black">
    //       Fav:{data.filter(item => item.added).length}
    //     </h2>
    //   </div>
    // </div>
  );
};

export default Navbar;
