const Expertise = () => {
    return (
        <>
            <div className="my-14">
                <div>
                    <div className="text-center text-4xl font-bold underline ">My Expertise</div>
                </div>
                <div className=" flex justify-center items-center my-16">
                    <div className="w-1/2 text-center space-y-4 ">
                        <h2 className="text-2xl font-semibold">I love these technology</h2>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad non alias unde corporis temporibus quia reprehenderit eligendi itaque excepturi sed.</p>
                       <button className="px-3 py-1 rounded-full cursor-pointer bg-orange-500">click</button>
                    </div>

                    {/* skills container */}
                    <div className="w-1/2 flex justify-center flex-wrap p-3 space-x-4  space-y-3">
                        <p className="bg-gray-300 max-w-fit px-2 py-1 rounded-full"> Core Java</p>
                        <p className="bg-gray-300 w-fit px-1 py-0 rounded-full"> C</p>
                        <p className="bg-gray-300 w-fit px-2 py-1 rounded-full "> React JS</p>
                        <p className="bg-gray-300 w-fit px-2 py-2 rounded-full "> Tailwind CSS</p>
                        <p className="bg-gray-300 w-fit px-2 py-2 rounded-full "> Node JS</p>
                        <p className="bg-gray-300 w-fit px-2 py-2 rounded-full "> MYSQL</p>
                        <p className="bg-gray-300 w-fit px-2 py-2 rounded-full "> DSA</p>
                        <p className="bg-gray-300 w-fit px-2 py-2 rounded-full "> HTML</p>
                        <p className="bg-gray-300 w-fit px-2 py-2 rounded-full "> CSS</p>
                        <p className="bg-gray-300 w-fit px-2 py-2 rounded-full "> JS</p>
                        <p className="bg-gray-300 w-fit px-2 py-2 rounded-full "> Flutter</p>
                        <p className="bg-gray-300 w-fit px-2 py-2 rounded-full "> React Native</p>
                        <p className="bg-gray-300 w-fit px-2 py-1 rounded-full "> Flutter</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Expertise;