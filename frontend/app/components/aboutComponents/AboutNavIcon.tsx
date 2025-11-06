import Image from "next/image"

type AboutNavIconProps = {
    iconImage: string
    iconTitle: string
}

export default function aboutNavIcon({ iconImage, iconTitle }: AboutNavIconProps){
    return(
        <div className="">
            <Image 
                src={iconImage}
                width={100}
                height={100}
                alt={iconTitle} 
            />
        </div>
    )
}