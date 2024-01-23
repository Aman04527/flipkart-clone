import React, { useState } from 'react'
import {motion} from "framer-motion"
import categories from "../utils/Cate.js"
import Loader from './Loader.jsx';
import {storage} from "../config/firebase.config.js";
import {getAllProductItems , saveItem} from "../utils/firebaseFunctions"
import { useStateValue } from '../context/StateProvider.js';
import {actionType} from "../context/reducer"
import { deleteObject, getDownloadURL, uploadBytesResumable,ref } from 'firebase/storage';

const CreateContainer = () => {
    const [title, setTitle] = useState("");
    const [color , setColor] = useState("");
    const [price , setPrice] = useState("");
    const [category , setCategory] = useState(null);
    const [imageAsset , setImageAsset] = useState(null);
    const [fields , setFields] = useState(null);
    const [alertStatus , setAlertStatus] = useState("danger");
    const [msg , setMsg] = useState(null);
    const [isLoading , setIsLoading] = useState(false);
    const [{ProductItems} , dispatch] = useStateValue();

    const uploadImage = (e) => {
        setIsLoading(true);
        const imageFile = e.target.files[0];
        const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef,imageFile);

        uploadTask.on(
            "state-changed",(snapshot) => {
                const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
            (error) => {
                console.log(error);
                setFields(true);
                setMsg("Error while uploading : Try AGain 🙇");
                setAlertStatus("danger");
                setTimeout(() => {
                    setFields(false);
                    setIsLoading(false);
                }, 4000);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImageAsset(downloadURL);
                    setIsLoading(false);
                    setFields(true);
                    setMsg("Image uploaded successfully 😊");
                    setAlertStatus("success");
                    setTimeout(() => {
                        setFields(false);
                    }, 4000);
                })
            }
        )
    }

    const deleteImage = () => {
        setIsLoading(true);
        const deleteRef = ref(storage , imageAsset);
        deleteObject(deleteRef).then(() => {
            setImageAsset(null);
            setIsLoading(false);
            setFields(true);
            setMsg("Image deleted successfully 😊");
            setAlertStatus("success");
            setTimeout(() => {
                setFields(false);
            }, 4000);
        })
    }

    const saveDetails = () => {
        setIsLoading(true);
        try {
        if (!title || !color || !imageAsset || !price || !category) {
            setFields(true);
            setMsg("Required fields can't be empty");
            setAlertStatus("danger");
            setTimeout(() => {
            setFields(false);
            setIsLoading(false);
            }, 4000);
        } else {
            const data = {
            id: `${Date.now()}`,
            title: title,
            imageURL: imageAsset,
            category: category,
            color: color,
            qty: 1,
            price: price,
            };
            saveItem(data);
            setIsLoading(false);
            setFields(true);
            setMsg("Data Uploaded successfully 😊");
            setAlertStatus("success");
            setTimeout(() => {
                setFields(false);
            }, 4000);
            clearData();
        }
        } catch (error) {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading : Try AGain 🙇");
        setAlertStatus("danger");
        setTimeout(() => {
            setFields(false);
            setIsLoading(false);
        }, 4000);
        }
        fetchData();
    };

    const clearData = () => {
        setTitle("");
        setImageAsset(null);
        setColor("");
        setPrice("");
        setCategory(""); 
    }


    const fetchData = async () => {
        await getAllProductItems().then((data) => {
            dispatch({
                type: actionType.SET_PROD_ITEMS,
                ProductItems: data,
            })
        })
    }

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
        <div
        className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg 
        p-4 flex flex-col items-center justify-center gap-4"
      >
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </motion.p>
        )}
        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give me a title..."
            className="w-full h-full text-lg bg-transparent 
             outline-none border-none 
            placeholder:text-gray-400 text-textColor"
          />
        </div>
        <div className='w-full'>
            <select
                onChange={(e) => setCategory(e.target.value)}
                className="outline-none w-full text-base border-b-2 
                border-gray-200 p-2 rounded-md cursor-pointer"
            >
                <option value="" className="bg-green">
                    Select Category
                </option>
                {categories &&
                categories.map((Product) => (
                    <option
                    key={Product.id}
                    className="text-base border-0 
                        outline-none capitalize bg-white text-['#2e2e2e']"
                    value={Product.urlParamName}
                    >
                    {Product.name}
                    </option>
                ))}
            </select>
        </div>

        <div
          className="group flex justify-center items-center flex-col 
        border-2 border-dotted border-gray-300 w-full h-[16rem] md:h-340 
        cursor-pointer rounded-lg"
        >
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label
                    className="w-full h-[16rem] flex flex-col items-center 
                justify-center cursor-pointer"
                  >
                    <div
                      className="w-full h-[16rem] flex flex-col items-center 
                justify-center gap-2"
                    >
                      <p className="text-gray-500 hover:text-gray-700">
                        Click here to upload
                      </p>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                      className="w-0 h-0"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-[16rem]">
                    <img
                      src={imageAsset}
                      alt="uploaded image"
                      className="w-full h-[16rem] object-cover"
                    />
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p-3 rounded-full 
                    bg-red-500 text-['1280px'] cursor-pointer outline-none 
                    hover:shadow-md duration-500 transition-all ease-in-out"
                      onClick={deleteImage}
                    >
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div
            className="w-full py-2 border-b border-gray-300 
          flex items-center gap-2"
          >
            
            <input
              type="text"
              required
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="Color"
              className="w-full h-full text-lg bg-transparent outline-none 
              border-none placeholder:text-gray-400 text-textColor"
            />
          </div>

          <div
            className="w-full py-2 border-b border-gray-300 
          flex items-center gap-2"
          >
            
            <input
              type="text"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="w-full h-full text-lg bg-transparent outline-none 
              border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
        </div>

        <div className="flex items-center w-full">
          <button
            type="button"
            className="ml-0 md:ml-auto w-full md:w-auto border-none
      online-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold "
            onMouseOver={(e) => (e.target.style.boxShadow = "0 2px 6px 0 grey")}
            onMouseOut={(e) => (e.target.style.boxShadow = "")}
            onClick={saveDetails}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateContainer;