"use client"

import Link from "next/link"
import { useCallback } from "react";

export default function Header(){

    const handleResumeClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        if (e.ctrlKey || e.metaKey) return; // Let default behavior (new tab)

        e.preventDefault();
        
        // Open preview
        window.open("/resume.pdf", "_blank");

        // Trigger download instantly
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Owen_Reynolds_Resume_2025.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, []);
    return( 
        <header className="flex justify-center w-full">
            <div className="flex items-center justify-between rounded-full mt-8 p-5 w-4/5 redhat-font bg-[#db4739] text-white">
                <div className="">
                    <Link
                        href={"/"}
                        className="">
                        Owen Reynolds
                    </Link>
                </div>
                <div className="flex gap-10">
                    <Link
                        href={"/projects"}>
                        Projects
                    </Link>
                    <Link
                        href={"/about"}>
                        About
                    </Link>
                    <Link
                        href={"/gallery"}>
                        Gallery
                    </Link>
                </div>
                <div className="">
                    <a
                        href="/resume.pdf"
                        onClick={handleResumeClick} 
                        download="Owen_Reynolds_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hoverable px-5 py-2 rounded-full bg-white/10 backdrop-blur-md
                            border border-white/20 text-white text-sm font-medium
                            hover:bg-white/20 hover:border-white/40 transition-all duration-300
                            flex items-center gap-2 `}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Resume
                        </a>
                </div>
            </div>
        </header>
    )
}