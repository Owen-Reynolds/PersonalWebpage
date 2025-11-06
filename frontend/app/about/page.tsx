"use client"


import PageBackground from '@/app/components/PageBackground';

import AboutCard from "../components/aboutComponents/AboutCard"
import AboutNav from "../components/aboutComponents/AboutNav"

export default function About(){
    return(
        <>
            <PageBackground color="#131466"/>
            <div className="">
                <AboutNav />
                <AboutCard />
            </div>
        </>
    )
}