
import logo from "../images/logo.svg";

function Home(){

    return(
        <section id="hero" className="">

            <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
                <img src={logo} alt="logo" className="mx-auto my-16" />
                <h3 className="mb-3 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
                     A History Of Everything You Copy
                </h3>
                <p className="max-w-3xl mx-auto mb-10 text-2xl text-darkGrayishBlue">
                    Clipboard allows you to track and organize everything you copy. Instantly
                    access your clipboard on all your devices.
                </p>
                <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
                    <a className="p-4 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80" href="#hero">
                        Download for iOS
                    </a>
                    <a className="p-4 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80" href="#hero">
                        Download for Mac
                    </a>
                </div>
            </div>



        </section>

    );


}
export default Home;