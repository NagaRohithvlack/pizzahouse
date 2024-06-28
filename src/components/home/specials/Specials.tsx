// import { Link } from "react-router-dom";
import MainDish from "./MainDish";
import chilly from "../../../assets/imgs/chilly.png";
import garlic from "../../../assets/imgs/garlic.png";
import { motion } from "framer-motion";
import { cardVariantsecond, cardVariantsr } from "../../../utils/motion";

function Specials() {
    return(
        <div className="bg-[#FFF5EF] text-yellow-900 p-8 relative">

            <div className="flex flex-col justify-center items-center gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-4xl font-medium">Summer's Specials</h1>
                    <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipi</p>
                </div>

                <nav className=" flex justify-center items-center bg-[#FFF5EF] text-3xl gap-8 p-2 font-medium">
                    {/* <Link to="appetizer">Appetizer's</Link>
                    <Link to="maindish">Main Dish</Link>
                    <Link to="desserts">Desserts</Link> */}

                    <p>Appetizer's</p>
                    <p>Main Dish</p>
                    <p>Desserts</p>
                </nav>

                <div className="w-4/6">
                    <MainDish />
                </div>

            </div>

            <motion.div animate="visible" initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}>
                <motion.img src={chilly} alt="chilli" className="absolute top-0 rotate-180 -left-36 w-1/5"  variants={cardVariantsecond}/>

            </motion.div>

            
            <motion.div 
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }} >
                <motion.img src={garlic} alt="garlic" className="absolute -bottom-24 -right-28 w-[370px] h-[270px] object-contain" variants={cardVariantsr}/>
                
            </motion.div>

        </div>
    )
}

export default Specials;