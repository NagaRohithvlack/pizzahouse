import { SpecialsData } from "./SpecialsData";

function MainDish() {
    return(
        <div className="bg-[bg-[#FFF5EF]]">
            <div className="flex gap-8">
                {SpecialsData.map((item) => (
                    <div key={item.id} className="flex flex-col gap-8 justify-center items-center ">
                        <div>
                        <img src={item.img} alt="dishes" className="w-[250px]"/>
                        </div>
                        <div className="flex flex-col justify-center gap-2 items-center">
                        <h1 className="text-2xl font-medium">{item.title}</h1>
                        <p className="font-medium text-justify w-5/6">{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default MainDish;