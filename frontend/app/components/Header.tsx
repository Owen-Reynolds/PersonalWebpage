import Link from "next/link"

export default function Header(){
    return(
        <header className="flex justify-center w-full">
            <div className="flex items-center justify-between rounded-full mt-8 p-5 w-4/5 bg-[#db4739] text-white">
                <div className="">
                    <h2 className="">Owen Reynolds</h2>
                </div>
                <div className="flex gap-5">
                    <Link
                        href={"/professional"}>
                        Professional
                    </Link>
                    <Link
                        href={"/aboutme"}>
                        About Me
                    </Link>
                    <Link
                        href={"/gallery"}>
                        Gallery
                    </Link>
                </div>
            </div>
        </header>
    )
}