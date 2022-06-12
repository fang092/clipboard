

function CTABottom(){

    return(
        <section id="bottom">
            <div className="section-container my-20">
                <h3>Clipboard for iOS and MacOS</h3>
                <p className="max-w-2xl mx-auto mb-10 text-xl leading-9 text-grayishBlue text-center">
                    Available for free on the App Store. Download for Mac or iOS, sync with iCloud
                    and you're ready to start adding to your clipboard.
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
    )
}
export default CTABottom;