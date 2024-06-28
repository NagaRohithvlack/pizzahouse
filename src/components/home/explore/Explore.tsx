// import { ExploreData } from "./ExploreData";
// import bgimg from "../../../assets/imgs/bgimg.jpeg"
// import mainpizza from "../../../assets/imgs/mainpizza.png"
// import dish from "../../../assets/imgs/dish.png"
// import mainspices from "../../../assets/imgs/mainspices.png"
// import tomato from "../../../assets/imgs/tomato.png"
// import { motion } from "framer-motion";
// import { cardVariantsl, cardVariantsr } from "../../../utils/motion";

// function Explore() {
//     return(
//         <div className="p-24 relative " style={{ backgroundImage: `url(${bgimg})` }} 
//         >

//             <div className="flex justify-center items-center text-yellow-900">

//                 <div className="w-3/6 flex flex-col gap-4 px-24">
//                     <h1 className="text-4xl font-semibold">{ExploreData[0].title}</h1>
//                     <h1 className="text-4xl font-semibold">{ExploreData[0].title2}</h1>
//                     <h1 className="text-3xl font-semibold ">{ExploreData[0].lable}</h1>
//                     <p className="text-xl font-normal">{ExploreData[0].content}</p>
//                     <button className="p-2 rounded-full bg-[#BE681B] w-2/6 text-black font-normal">Explore Now</button>
//                 </div>

//                 <div className="w-3/6 relative p-8 flex justify-center items-center">
//                     <img src={mainpizza} alt="mainpizza" className="w-4/6"/>
//                     <img src={dish} alt="dishimg" className="w-2/6 absolute bottom-0 left-8"/>

//                 </div>

//             </div>


//             <motion.div 
            
//             viewport={{ once: false, amount: 0.1 }}>

//                 <motion.div initial="offscreen" animate="onscreen"  className="">
//                 <motion.img src={mainspices} alt="spices" className="absolute -left-44 -top-28 w-2/6" variants={cardVariantsl}/>
//                 </motion.div>
//                 <motion.div initial="offscreen" animate="onscreen">
//                 <motion.img src={tomato} alt="tomato" className="absolute w-1/6 top-12 -right-20" variants={cardVariantsr}/>
//                 </motion.div>
//             </motion.div>

//         </div>
//     )
// }

// export default Explore;

import { ExploreData } from "./ExploreData";
import bgimg from "../../../assets/imgs/bgimg.jpeg";
import mainpizza from "../../../assets/imgs/mainpizza.png";
import dish from "../../../assets/imgs/dish.png";
import mainspices from "../../../assets/imgs/mainspices.png";
import tomato from "../../../assets/imgs/tomato.png";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { cardVariantsl, cardVariantsr } from "../../../utils/motion";

function Explore() {
  const { scrollYProgress } = useViewportScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="p-24 relative " style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="flex justify-center items-center text-yellow-900">
        <div className="w-3/6 flex flex-col gap-4 px-24">
          <h1 className="text-4xl font-semibold">{ExploreData[0].title}</h1>
          <h1 className="text-4xl font-semibold">{ExploreData[0].title2}</h1>
          <h1 className="text-3xl font-semibold ">{ExploreData[0].lable}</h1>
          <p className="text-xl font-normal">{ExploreData[0].content}</p>
          <button className="p-2 rounded-full bg-[#BE681B] w-2/6 text-black font-normal">Explore Now</button>
        </div>
        <div className="w-3/6 relative p-8 flex justify-center items-center">
          <motion.img
            src={mainpizza}
            alt="mainpizza"
            className="w-4/6"
            style={{ rotate }}
          />
          <img src={dish} alt="dishimg" className="w-2/6 absolute bottom-0 left-8" />
        </div>
      </div>
      <motion.div viewport={{ once: false, amount: 0.1 }}>
        <motion.div initial="offscreen" animate="onscreen" className="">
          <motion.img src={mainspices} alt="spices" className="absolute -left-44 -top-28 w-2/6 " variants={cardVariantsl} />
        </motion.div>
        <motion.div initial="offscreen" animate="onscreen">
          <motion.img src={tomato} alt="tomato" className="absolute w-1/6 top-12 -right-20" variants={cardVariantsr} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Explore;
