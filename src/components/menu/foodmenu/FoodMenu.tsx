import { FoodMenuData } from "./FoodMenuData";
import { MenuData } from "./FoodMenuData";
import { useEffect, useState } from "react";

function FoodMenu() {
    const[index , setIndex] = useState(0);
    const[selectedIndex, setSelectedIndex] = useState([]); 
    
    useEffect(() => {
        switch(index) {
            case 0:
                setSelectedIndex(FoodMenuData[0]);
                break;
            case 1:
                setSelectedIndex(FoodMenuData[1]);
                break;
            case 2: 
                setSelectedIndex(FoodMenuData[2]);
                break;
            case 3: 
                setSelectedIndex(FoodMenuData[3]);
                break;
            case 4: 
                setSelectedIndex(FoodMenuData[4]);
                break;
            case 5: 
                setSelectedIndex(FoodMenuData[5]);
                break;
                
        }
    }, [index])

    // useEffect(() => {
    //     setSelectedIndex(FoodMenuData[index] || []);
    // }, [index])
    
    function handleClick(clickedindex) {
           setIndex(clickedindex)
    }
    return(

        <div className="bg-[#FFF5EF] flex flex-col justify-center items-center gap-12 p-8 text-yellow-900">

            <h1 className="text-3xl font-medium">FoodMenu</h1>

            <div className="flex gap-4 text-2xl">
               {MenuData.map((item, indexm) => (
                <div key={item.id} className="flex justify-around">
                    <p onClick={() => {handleClick(indexm)}} className={`cursor-pointer `}>{item.name}</p>
                </div>
               ))}
            </div>

            
            <div className=" grid grid-cols-2 gap-12 gap-x-24 w-4/6">
                {selectedIndex.map((item, idx) => {
                    return(
                        <div key={idx} className="w-full flex gap-8 ">

                            <div className="  flex justify-center items-center">
                                <img src={item.img} alt="" className=" "/>
                            </div>

                            <div className="flex flex-col gap-4">

                                <div className="flex justify-between">
                                    <h1 className="text-xl font-medium ">{item.title}</h1>
                                    <p className="text-lg font-medium">{item.price}</p>
                                </div>

                                <p>{item.content}</p>
                            </div>

                        </div>
                    )
                } )}
              
            
        </div>

        </div>
    )
}

export default FoodMenu;