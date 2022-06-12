import computer from "../images/image-computer.png";

function Features(){

    return(
        <section id="features">

            <div className="section-container my-20 px-10">
                <div className="relative flex flex-col md:flex-row md:space-x-32">
                    <div className="md:w-1/2">
                        <img src={computer} alt="" className=" top-0 right-[50%] md:absolute "/>
                    </div>
                
            
                    <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue text-center">
                                Quick Search
                            </h5>
                            <p className="max-w-md text-grayishBlue text-center">
                                Easily search your snippets by content, category, web address, application, and more.

                            </p>
                        </div>
                        <div>
                            <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue text-center">
                                iCloud Sync
                            </h5>
                            <p className="max-w-md text-grayishBlue text-center">
                                Instantly saves and syncs snippets across all your devices.
                            </p>
                        </div>
                        <div>
                            <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue text-center">
                                Complete History
                            </h5>
                            <p className="max-w-md text-grayishBlue text-center">
                                Retrieve any snippets form the first moment you started using the app.

                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Features;