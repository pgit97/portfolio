import aboutImage from "../assets/me.jpeg"
const About = () => {
    return (
        <>
            <div className="my-9  ">
                <div className="text-black-400 text-center underline text-4xl font-bold"> About Me</div>
                <div className=" flex justify-between w-full items-center ">
                    {/* Left section */}
                    <div className=" w-1/2 flex justify-center">
                        <img className="w-fit h-96  " src={aboutImage} />
                    </div>

                    {/* Right Section */}
                    <div className=" px-10 w-1/2 space-y-2 ">
                        <div className="text-2xl mb-3 font-semibold text-center">Java Backend & Android Developer</div>
                        <div>
                            <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est molestias corporis laboriosam vero corrupti, dolores veritatis fugit nostrum reiciendis voluptatum?</p>
                            <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nemo laboriosam maxime ipsum reprehenderit, dolor exercitationem, architecto molestias id dolore fugiat ab unde iure earum, distinctio voluptas necessitatibus quae est eum beatae sit. Quasi soluta neque maxime accusamus quidem commodi voluptate perspiciatis odit officia dolore id, pariatur modi ea inventore!</p>
                        </div>
                        <div>
                            <button className="px-2 py-2  border bg-slate-500 rounded-full cursor-pointer hover:bg-orange-500">Read More...</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default About