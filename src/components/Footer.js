import logo from "../images/logo.svg"
import FbIcon from "../images/icon-facebook.svg";
import InstaIcon from "../images/icon-instagram.svg";
import TwitIcon from "../images/icon-twitter.svg";

function Footer(){

    return(

        <footer id="footer" className="bg-gray-50">
            <div className="section-container">
                <div className="flex flex-col items-center justify-between md:flex-col">
                    <img src={logo} alt="" className="scale-50"/>
                    <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
                        <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                            <div className="flex flex-col space-y-4 text-center md:text-left">
                               <a href="#footer" className="hover:text-strongCyan">FAQs</a> 
                            </div>
                            <div className="flex flex-col space-y-4 text-center md:text-left">
                               <a href="#footer" className="hover:text-strongCyan">Contact Us</a> 
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                            <div className="flex flex-col space-y-4 text-center md:text-left">
                               <a href="#footer" className="hover:text-strongCyan">Privacy Policy</a> 
                            </div>
                            <div className="flex flex-col space-y-4 text-center md:text-left">
                               <a href="#footer" className="hover:text-strongCyan">Press Kit</a> 
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                            <div className="flex flex-col space-y-4 text-center md:text-left">
                               <a href="#footer" className="hover:text-strongCyan">Install Guide</a> 
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between w-32 mt-5 py-1">
                        <a href="#footer">
                            <img src={FbIcon} alt="" className="duration-200 ficon" />
                        </a>
                        <a href="#footer">
                            <img src={InstaIcon} alt="" className="duration-200 ficon" />
                        </a>
                        <a href="#footer">
                            <img src={TwitIcon} alt="" className="duration-200 ficon" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;