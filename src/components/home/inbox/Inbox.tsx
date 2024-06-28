import brocoli from "../../../assets/imgs/brocoli.png"
import redchilli from "../../../assets/imgs/redchilli.png";
import clove from "../../../assets/imgs/clove.png";
import spinach from "../../../assets/imgs/spinach.png";
import other3 from "../../../assets/imgs/other3.png";
import capci from "../../../assets/imgs/capci.png";
import lemon from "../../../assets/imgs/lemon.png";
import other1 from "../../../assets/imgs/other1.png";
import mint from "../../../assets/imgs/mint.png"
import spoon from "../../../assets/imgs/spoon.png";
import ingredients3 from "../../../assets/imgs/ingredients3.png"
import ingredients2 from "../../../assets/imgs/ingredients2.png"
import { motion } from "framer-motion";
import { cardVariantsecond, cardVariantsr } from "../../../utils/motion";


function Inbox() {
    return(
        <div className="bg-[#FFF5EF] p-24 relative">

            <div className="w-4/6 mx-auto p-8 flex flex-col gap-12">

                <div className="flex flex-col justify-center items-center text-yellow-900 gap-8">
                    <h1 className="text-4xl font-semibold">Easy receipes will send to your inbox</h1>
                    <h2 className="text-md font-normal w-3/6 text-center">Get weekly updates on the newest chinese receipes in your mailbox </h2>
                </div>

                
                <div className="p-4 relative z-10">
                    <input type="text" placeholder="your email address" className="w-full p-4 rounded-full outline-none z-10" />
                    <button className="bg-[#C52203] p-2 px-4 rounded-full absolute top-6 right-8 text-white z-20">Subscribe</button>
                </div>
 
            </div>

            <motion.div initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }} >
                <motion.img src={brocoli} alt="brocoli" className="absolute w-[150px] right-12 top-32" variants={cardVariantsr} whileHover={{scale: 1.1}}/>
                <motion.img src={lemon} alt="lemon" className="absolute w-[90px] right-56 top-12" variants={cardVariantsr} whileHover={{scale: 1.1}} />
                <motion.img src={clove} alt="clove" className="absolute w-[50px] right-1/2 top-16 rotate-12" variants={cardVariantsr} whileHover={{scale: 1.1}} />
                <motion.img src={ingredients2} alt="spinach" className="absolute w-[100px] -top-20 right-1/3 rotate-45" variants={cardVariantsr} whileHover={{scale: 1.1}} />
                <motion.img src={capci} alt="capci" className="absolute w-[80px] top-1/2 left-1/4" variants={cardVariantsecond} whileHover={{scale: 1.1}} />
                <motion.img src={redchilli} alt="redchilli" className="absolute w-[80px] right-56 bottom-1/4 rotate-90" variants={cardVariantsr} whileHover={{scale: 1.1}} />
                <motion.img src={other3} alt="onion" className="absolute w-[70px] left-1/4 top-8" variants={cardVariantsecond} whileHover={{scale: 1.1}} />
                <motion.img src={spinach} alt="spinach" className="absolute w-[80px] top-1/4 left-48" variants={cardVariantsecond} whileHover={{scale: 1.1}} />
                <motion.img src={other1} alt="other1" className="absolute w-[80px] right-1/2 bottom-12" variants={cardVariantsecond} whileHover={{scale: 1.1}} />
                <motion.img src={mint} alt="mint" className="absolute w-[80px] -left-4 bottom-16 rotate-90" variants={cardVariantsecond} whileHover={{scale: 1.1}} />
                <motion.img src={spoon} alt="spoon" className="absolute w-[150px] -left-8 rotate-180 bottom-8" variants={cardVariantsecond} whileHover={{scale: 1.1}} />
                <motion.img src={ingredients3} alt="ingre3" className="absolute -left-8 top-2 w-[150px]" variants={cardVariantsecond} whileHover={{scale: 1.1}} />
            </motion.div>

        </div>
    )
}

export default Inbox;