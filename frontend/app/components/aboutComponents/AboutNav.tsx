import AboutNavIcon from "./AboutNavIcon"

import musicArtistIcon from "@/public/icons/microphone.png"
import songIcon from "@/public/icons/musical-note.png"
import movieIcon from "@/public/icons/video-camera.png"
import tvIcon from "@/public/icons/tv.png"
import sportIcon from "@/public/icons/running.png"

const icons = [
    {
        image: musicArtistIcon,
        title: "Music Artist"
    },
    {
        image: songIcon,
        title: "Song"
    },
    {
        image: movieIcon,
        title: "Movie"
    },
    {
        image: tvIcon,
        title: "Tv Show"
    },
    {
        image: sportIcon,
        title: "Sport"
    },
];

export default function aboutNav(){
    return(
        <div className="flex flex-col bg-white">
            {icons.map((point, index) => (
                <AboutNavIcon iconImage={point.image} iconTitle={point.title} key={index} />
            ))}
        </div>
    )
}