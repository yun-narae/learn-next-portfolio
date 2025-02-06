import React from "react";
import { introText } from "../constants"
import Image from 'next/image';

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <h1 className="intro__title">{introText.title}<br/><span>scroll down ⬇️</span></h1>
                
                <div className="intro__text">
                    <div className="text">
                        {introText.desc.map((text, key) => (
                            <div key={key}>{text}</div>
                        ))}
                    </div>
                    <div className="img">
                        <Image 
                          src={introText.aboutme}
                          alt="어바웃미"
                          priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;