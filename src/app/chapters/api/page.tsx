"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Api() {
    const NASA_API_KEY = '8YynInIn6BOaDJ4ip2dWXJJEyeHF9ZSk2GwbMTOh';
    const [apodSrc, setApodSrc] = useState("");

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
            .then((res) => {
                console.log(res.data);
                setApodSrc(res.data.url);
            });
    }, []);
    return (
        <div className="max-w-[1200px] w-full mx-auto">
            <div className="w-full grid grid-cols-4 grid-rows-4 h-[700px] gap-4">
                <div className="row-span-4 col-span-2 bg-[#232820] rounded-3xl flex flex-col">
                    <Image
                        src={apodSrc}
                        alt="Astronomy picture of the day"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="row-span-2 col-span-2 bg-[#232820] rounded-3xl"></div>
                <div className="row-start-3 col-start-3  bg-[#232820] rounded-3xl"></div>
                <div className="row-start-4 col-start-3 bg-[#232820] rounded-3xl"></div>
                <div className="row-start-3 row-span-2 col-start-4 bg-[#232820] rounded-3xl"></div>
            </div>
        </div>
    );
}
