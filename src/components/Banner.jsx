import bannerImage from "../assets/me1.jpeg"
import backgroundImage from "../assets/bg.jpg"
import { ReactTyped } from "react-typed";
const Banner = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }} className=" flex items-center">
                {/*text*/}
                <div className="flex  justify-center items-center w-full my-14" >
                    <div className="w-2/3 space-y-2 ">
                        <h3 className="text-1xl font-semibold">Hi, I am</h3>
                        <h1 className="mt-1 text-2xl font-bold">Priti Gupta</h1>
                        <h2 className="mt-1 text-1xl font-semibold">And I am 
                            <ReactTyped
                                // startWhenVisible
                                strings={[
                                    " Web Developer",
                                    " Android Developer",
                                    " Fullstack Developer",
                                ]}
                                typeSpeed={90}
                                // backSpeed={50}
                                // attr="placeholder"

                                // startDelay={100}
                                // typeSpeed={50}
                                // backSpeed={60}
                                // backDelay={100}

                                loop
                            >
                                {/* <input type="text" className="bg-transparent text-black" /> */}
                            </ReactTyped>
                            

                        </h2>    <p className="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sequi pariatur quibusdam quasi, perspiciatis assumenda facilis suscipit esse sunt officia eveniet architecto facere! Aut perferendis unde et nihil ex facilis quibusdam neque magni similique minima magnam vitae autem pariatur ab facere corporis cum exercitationem harum, optio ipsa a rerum sequi?</p>
                        <div className=" space-x-5 flex text-white">
                            <div className="cursor-pointer animate-spin hover:bg-orange-600 w-10 h-10 rounded-full flex justify-center items-center bg-gray-800">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                            <div className="cursor-pointer animate-spin hover:bg-orange-600 w-10 h-10 rounded-full flex justify-center items-center bg-gray-800">
                                <i class="fa-brands fa-linkedin"></i>
                            </div>
                            <div className="cursor-pointer animate-spin hover:bg-orange-600 w-10 h-10 rounded-full flex justify-center items-center bg-gray-800">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                        </div>
                        <button className="mt-2  bg-orange-500 border rounded-full px-3 py-1 text-white text-sm font-bold">Contact Me</button>
                    </div>
                </div>

                <div className="w-full justify-center " >
                    <img className=" w-2/3 ms-40 rounded-full my-2 shadow-lg  h-80" src={bannerImage} />
                </div> {/*Image*/}

            </div>

            {/* <ReactTyped strings={["Here you can find anything"]} typeSpeed={40} /> */}
            {/* <br /> */}



        </>
    )
}

export default Banner;