import blacklist from "../images/icon-blacklist.svg";
import icontext from "../images/icon-text.svg";
import iconpreview from "../images/icon-preview.svg";

function Supercharge(){

    return(
        <section id="supercharge">
            <div className="section-container my-20">
                <h3>
                    Supercharge Your Workflow
                </h3>
                <p className="max-w-2xl mx-auto mb-16 text-xl leading-9 text-grayishBlue text-center">
                    We've got the tools to boost your productivity!
                </p>    
                <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
                    <div className="flex flex-col items-center space-y-5">
                        <img src={blacklist} alt="blacklist" className="mb-6" />
                        <h5>
                            Create Blacklists
                        </h5>
                        <p className="max-w-md text-grayishBlue">
                            Easily search your snippets by content, category, web address,
                            application, and more.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-5">
                        <img src={icontext} alt="text icon" className="mb-6" />
                        <h5>
                            Plain Text Snippets
                        </h5>
                        <p className=" max-w-md text-grayishBlue">
                           Remove unwanted formatting from copied text for a consistant look.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-5">
                        <img src={iconpreview} alt="blacklist" className="mb-6" />
                        <h5>
                            Sneak Preview
                        </h5>
                        <p className=" max-w-md text-grayishBlue">
                            Quick preview of all snippets on your Clipboard for easy access.
                        </p>
                    </div>
                </div>
            
            </div>
        </section>
    )

}
export default Supercharge;