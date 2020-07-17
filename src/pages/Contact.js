import React from 'react';


function contact() {
    return (
        <div>
            <div className="contact-container">
               <h3>
                   This is where the forms go
               </h3>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" />
                    </label>
                    <input type="submit" value="Submit" />
                    <br></br>
                    <label className="message-box">
                        Message:
                    <textarea />
                    </label>
                </form>
            </div>
            
        </div>
    )
}

export default contact
