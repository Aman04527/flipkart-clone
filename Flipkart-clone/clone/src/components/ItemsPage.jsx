import React from "react";
import data from "../utils/data";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "../context/StateProvider";

const ItemsPage = () => {
  const [{ ProductItems }, dispatch] = useStateValue();
  console.log(ProductItems);
  return (
    <div className="w-full flex  items-center gap-3 my-24 mx-12">
      <div className="flex flex-wrap items-center justify-evenly cursor-pointer ">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[340px] h-[400px] bg-white rounded-lg p-4 px-4 my-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 1px 3px 0 grey" }}
            >
              <div className="w-full h-[400px] flex flex-col items-center justify-between relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain px-4 py-4 "
                />
                <FontAwesomeIcon
                  icon={faHeart}
                  className="absolute top-8 right-0 -mt-7 mr-2 "
                  color="#d3d3d3"
                />
                <div className="text-left w-full p-2">
                  <p className="md:text-lg">{item.title}</p>
                  <p className="font-light">Free Delivery</p>
                  <p className="text-textColor font-semibold text-base md:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
