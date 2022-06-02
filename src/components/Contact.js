import Footer from "./Footer";

function Contact() {
    return (
        <div>
            <div className="contacth1">
                <h1>Contact Me!</h1>
            </div>

            <form className="form-cont">
                
                <label>Name </label>
                <input type='text' placeholder='Full Name' />

                <label>Email </label>
                <input type='text' placeholder='Email' />

                <label>Message </label>
                <textarea placeholder="Type Message Here!" />

                <input type="submit" value="Submit" className="submitbtn"/>

            </form>

            <Footer/>
        </div>


    );
}

export default Contact;