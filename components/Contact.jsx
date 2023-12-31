import React, { useState } from 'react';
import sendDataToServer from './lib/api';


const formVal = {
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: ""
} //rewireor rewrite this codes
const initState = { values: formVal };

function Contact() {

    const clearErrorMessage = () => {
        setStatusMessage('');
      };

    const clearSuccessMessage = () => {
        setStatusMessage('');
      };

    const [responseStatus, setResponseStatus] = useState(null); //status
    const [statusMessage, setStatusMessage] = useState(""); //message
    const [state, setState] = useState(initState);
    const { values } = state;
    function handleChange({ target }) {

        setState((prev) => ({
            ...prev, values: {
                ...prev.values,
                [target.name]: target.value
            }
        }))
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await sendDataToServer(values);
            // console.log(response.message);

            if (response.message === "Email sent") {
                setStatusMessage(response.message);
                setState(initState);
                setResponseStatus(true);
                setTimeout(clearSuccessMessage, 9000);
            } else {
                setResponseStatus(false);
                setStatusMessage("Failed to send email. Please try again.");
                setTimeout(clearErrorMessage, 9000);
            }
        }
        catch (error) {
            console.error('Error:', error);
            setResponseStatus(false);
            setStatusMessage("An error occurred. Please try again later.");
        }
        // console.log(values)    
    
    }


    return (
        <>
            <h1 id="contact" className="p-10 text-2xl text-secondary text-center">Get in touch with us</h1>
            <form className="flex flex-col items-center gap-5 md:max-w-screen-lg mx-auto"
                onSubmit={handleSubmit}>
                <div className="flex flex-col w-[85%] gap-5 md:flex-row md:justify-between">

                    <input placeholder="Full Name" type="text" name="name" value={values.name}
                        onChange={handleChange}
                        className="border-secondary rounded border-b-2 focus:outline-none w-[100%]"
                    />
                    <input placeholder="Subject" type="subject" name="subject" value={values.subject}
                        onChange={handleChange}
                        className="border-secondary rounded border-b-2 focus:outline-none w-[100%]"
                    />
                </div>
                <div className="flex flex-col w-[85%] gap-5 md:flex-row md:justify-between">
                    <input placeholder="Email" type="email" name="email" value={values.email}
                        onChange={handleChange}
                        className="border-secondary rounded border-b-2 focus:outline-none w-[100%]"
                    />
                    <input placeholder="what is your budget?" type="text" name="budget" value={values.budget}
                        onChange={handleChange}
                        className="border-secondary rounded border-b-2 focus:outline-none w-[100%]"
                    />
                </div>
                <textarea rows={10} cols={10} name="message" value={values.message} onChange={handleChange}
                    className="border-secondary rounded border-2 focus:outline-none w-[85%]"
                    placeholder="let us know how we can be of some help"

                >
                </textarea>
                <button type="submit" className="text-white bg-primary px-8 py-3 text-xl rounded-lg"
                >Send
                </button>

                {responseStatus ? <div className="text-4xl text-green-600">{statusMessage}</div>:<div className="text-red-600">{statusMessage}</div>}
                {/* {successMessage && <div className="text-green-600">{successMessage}</div>}
                {errorMessage && <div className="text-red-600">{errorMessage}</div>} */}
            </form>
        </>
    );
}

export default Contact;