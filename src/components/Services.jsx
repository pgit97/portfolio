import { useState } from "react";

const Services = () => {
    const [servicesName, setServicesName] = useState([
        {
            id: 1,
            title: "Web Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas sequi inventore, aperiam ea eligendi eveniet nulla facere quos nisi reiciendis?"
            ,
            actionButton: "Check"
        },
        {
            id: 2,
            title: "Android Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas sequi inventore, aperiam ea eligendi eveniet nulla facere quos nisi reiciendis?"
            ,
            actionButton: "Check"
        },
        {
            id: 3,
            title: "Backend Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas sequi inventore, aperiam ea eligendi eveniet nulla facere quos nisi reiciendis?"
            ,
            actionButton: "Check"
        }
    ]);
    return (
        <>
            <div className="my-9">
                <div className="text-black-400 text-center underline text-4xl font-bold ">My Services</div>
                <div className="my-8 flex text-center space-x-5 ">
                    {servicesName.map((name) => (
                        <div key={name.id} className=" bg-slate-100 rounded-xl shadow-lg hover:bg-slate-200 cursor-pointer ">
                            <div className="space-y-3 p-5">
                                <i class=" text-5xl fa-brands fa-aws"></i>
                                <h1 className="font-bold ">{name.title}</h1>
                                <p>{name.description}</p>
                                <button className=" px-3 py-1 text-center rounded-full bg-orange-500 cursor-pointer " >{name.actionButton}</button>
                            </div>
                        </div>
                    ))}
                    {/* <div className="space-y-3 p-5">


                            <i class=" text-5xl fa-brands fa-aws"></i>
                            <h1 className="font-bold ">Web Development</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas sequi inventore, aperiam ea eligendi eveniet nulla facere quos nisi reiciendis?</p>

                            <button className=" px-3 py-1 text-center rounded-full bg-orange-500 cursor-pointer " >Check</button>

                        </div> */}


                    {/* <div className=" bg-slate-200 rounded-xl shadow-lg hover:bg-slate-100 cursor-pointer">
                        <div className="space-y-3 p-5">
                            <i class="text-5xl fa-solid fa-mobile"></i>
                            <div className="font-bold ">Mobile Development</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas sequi inventore, aperiam ea eligendi eveniet nulla facere quos nisi reiciendis?</p>

                            <button className=" px-3 py-1 text-center rounded-full bg-orange-500 cursor-pointer " >Check</button>

                        </div>

                    </div>
                    <div className=" bg-slate-200 rounded-xl shadow-lg hover:bg-slate-100 cursor-pointer">
                        <div className="space-y-3 p-5">
                            <div>aws logo</div>
                            <div className="font-bold ">Web Development</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas sequi inventore, aperiam ea eligendi eveniet nulla facere quos nisi reiciendis?</p>

                            <button className=" px-3 py-1 text-center rounded-full bg-orange-500 cursor-pointer " >Check</button>

                        </div>

                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Services;