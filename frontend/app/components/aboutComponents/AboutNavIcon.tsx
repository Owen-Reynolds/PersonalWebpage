import Image from "next/image"

type AboutNavIconProps = {
    iconImage: any
    iconTitle: string
}

export default function aboutNavIcon({ iconImage, iconTitle }: AboutNavIconProps){
    return(
        <div className="flex flex-col justify-center items-center">
            <Image 
                src={iconImage}
                width={100}
                height={100}
                alt={iconTitle} 
            />
            <h3>{iconTitle}</h3>
        </div>
    )
}