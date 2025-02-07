import React from "react";
import { contactText } from "../constants";

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact__inner">
                <h2 className="contact__title">contact</h2>
                <div className="contact__wrap">
                    <div className="contact__text">
                        <div className="text">
                            <div>
                                <a href="https://open.kakao.com/o/gM7YLzwf" target="_blank">KAKAO : Webstroyboy</a>
                            </div>
                            <div>
                                <a href="mailto:webstoryboy@naver.com" target="_blank">mail : WEBSTORYBOY@NAVER.COM</a>
                            </div>
                        </div>
                    </div>
                    <form id="contact__form" className="contact__form" action="#">
                        <fieldset>
                            <div className="form__group name">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your name" required />
                            </div>
                    
                            <div className="form__group email">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Your email" required />
                            </div>
                    
                            <div className="form__group message">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" placeholder="Your message" required></textarea>
                            </div>
                        </fieldset>
                    
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>            
        </section>
    );
};

export default Contact;