import { OthersData } from "./OthersData";
import otherpizza from "../../../assets/imgs/otherpizza.png"
// import ingredients1 from "../../../assets/imgs/ingredients1.png"
// import ingredients2 from "../../../assets/imgs/ingredients2.png"
// import ingredients3 from "../../../assets/imgs/ingredients3.png"
import other1 from "../../../assets/imgs/other1.png";
import other5 from "../../../assets/imgs/other5.png";
import other3 from "../../../assets/imgs/other3.png";
import other4 from "../../../assets/imgs/other4.png";
import { motion } from "framer-motion";
import { cardVariantsecond, cardVariantsr } from "../../../utils/motion";

function Other() {
    return(
        <div className="bg-[#FFF5EF] p-24 relative"> 

            <div className="flex justify-center items-center text-yellow-900">

                <div className="w-3/6 flex justify-center items-center">
                    <motion.img src={otherpizza} alt="mainpizza" className="w-5/6 mr-14 " whileHover={{scale: 1.1}}/>

                </div>

                <div className="w-3/6 flex flex-col gap-8 p-8">
                    <div className="flex flex-col justify-center text-left gap-4">
                        <h1 className="text-3xl font-semibold ">{OthersData[0].title}</h1>
                        <p className="text-xl font-medium">Discover the ultimate pizza experience at Pizza House!!!</p>
                        <p className="text-lg text-justify">{OthersData[0].content}</p>
                    </div>
                    
                    <div className="flex gap-4">
                        <motion.img src={OthersData[1].img1} alt="person1" className="w-[50px] h-[50px]" whileHover={{scale: 1.2}}/>
                        <motion.img src={OthersData[1].img2} alt="person2" className="w-[50px] h-[50px]" whileHover={{scale: 1.2}}/>
                        <motion.img src={OthersData[1].img3} alt="person3" className="w-[50px] h-[50px]" whileHover={{scale: 1.2}}/>
                    </div>
                </div>

            </div>

            {/* <div>

                <img src={ingredients1} alt="ingre1" className="absolute -right-24 top-0 w-1/6"/>
                <img src={ingredients2} alt="ingre2" className="absolute top-0 -left-24 w-1/6 rotate-12"/>
                <img src={ingredients3} alt="ingre3" className="absolute right-8 bottom-2 w-1/6"/>

            </div> */}

            <div>
                <motion.div initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}>
                <motion.img src={other1} alt="other1" className="absolute top-16 right-16 w-1/6" variants={cardVariantsr}/>
                </motion.div>
                <motion.div initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}>
                <motion.img src={other5} alt="other2" className="absolute -left-16 -top-8 w-1/6" variants={cardVariantsecond}/> 
                </motion.div>
                <img src={other3} alt="other3" className="absolute right-48 z-10 bottom-20 w-[80px]"/>
                <img src={other4} alt="other4" className="absolute right-20 bottom-16 w-[170px]"/>

            </div>

        </div>
    )
}

export default Other;