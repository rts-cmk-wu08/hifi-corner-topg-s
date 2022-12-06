import './infoContainerHome.css'


const InfoContainerHome = () => {
    return ( 
        <section className='infoWrapper'>
        

            <div className='whatWeDoWrapper'>
                <h2>What we do</h2>
                <p>We look forward to customising a system to meet your needs.</p>
                <p>We don’t favour one manufacturer over another – the only thing 
                we do favour is making sure our customers get the right product that
                suits their needs and listening preferences. We will ask many questions in order to ensure that what you buy 
                from us is tailored to you and you alone.
                </p>
                <p>If you are looking for a product not found in our demonstration 
                showrooms or our online site, don’t fret as we have access to hundreds of brands.
                </p>
                <p>One of our biggest pleasures of working in this industry is to see the smile on our customers’ 
                    faces when they finally hear and see the system of their dreams.
                </p>
            </div>

            <div className='openingHoursWrapper'>
                <h3>Opening hours</h3>
                <p>Edinburgh</p>
                <p>
                    2 Joppa Rd,Edinburgh, EH15 2EU
                    Monday to Friday: 10:00am - 5:30pm
                    Saturday: 10:00am - 5:30pm
                </p>
                    <p>Sunday: Closed</p>
                    <p>Falkirk</p> 
                <p>
                    44 Cow Wynd, Falkirk, Central Region, FK1 1PU <br />
                    Monday to Friday: 10:00am - 5:30pm <br />
                    Saturday - By appointment only <br />
                    Sunday: Closed
                </p>
            </div>
        </section>
     );
}
 
export default InfoContainerHome;