import logoGoogle from "../images/logo-google.png";
import logoHp from "../images/logo-hp.png";
import logoIbm from "../images/logo-ibm.png";
import logoMicro from "../images/logo-microsoft.png";
import logoVGraphics from "../images/logo-vector-graphics.png";

function References(){

    return(

        <section id="references">
            <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
                <img src={logoGoogle} alt="Google logo"/>
                <img src={logoIbm} alt="Ibm logo"/>
                <img src={logoMicro} alt="Microsoft logo"/>
                <img src={logoHp} alt="HP logo"/>
                <img src={logoVGraphics} alt="Vector Graphics logo"/>
            </div>
        </section>

    )
}
export default References;