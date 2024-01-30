// import React, { useEffect, useState } from "react";
// import { useStateValue } from "../context/StateProvider";

// const Products2 = () => {
//   const [{ ProductItems }, dispatch] = useStateValue();

//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     const filteredProducts = ProductItems.filter(
//       (item) => item.category === "mobiles"
//     );
//     setFilteredData(filteredProducts);
//   }, [ProductItems]);

//   return (
//     // <div className="w-full flex items-center gap-3 my-24 mx-12">
//     //   <div className="flex flex-wrap items-center justify-evenly cursor-pointer ">
//     //     {filteredProducts && filteredProducts.length > 0 ?(
//     //         filteredProducts.map((item)=>(
//     //             <div className="w-[340px] h-[400px] bg-white rounded-lg p-4 px-4 my-8">

//     //             </div>
//     //         ))
//     //     )}
//     //   </div>
//     // </div>
//   );
// };

// export default Products2;
