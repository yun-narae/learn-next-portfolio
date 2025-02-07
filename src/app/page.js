"use client";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Skill from "@/components/Skill";
import Site from "@/components/Site";
import Port from "@/components/Port";
import Contact from "@/components/Contact";
import Skip from "@/components/Skip";
import smooth from "@/utils/smooth";
import link from "@/utils/link";
import { email } from "@/utils/email";  // Named import of email function

export default function Home() {
    useEffect(() => {
        smooth();
        link();
        
        // 폼의 submit 이벤트 리스너를 추가하여 이메일 전송 함수 연결
        const form = document.getElementById("contact__form");
    
        if (form) {
            const handleSubmit = (e) => {
                e.preventDefault();
                email(e); // 이메일 전송 함수 호출
            };
            
            form.addEventListener("submit", handleSubmit);

            // 컴포넌트 언마운트 시 이벤트 리스너 제거
            return () => form.removeEventListener("submit", handleSubmit);
        }
    }, []);

    return (
        <>
            <Skip />
            <Header />
            <main id="main" role="main">
                <Intro />
                <Skill />
                <Site />
                <Port />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
