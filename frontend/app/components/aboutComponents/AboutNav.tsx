import AboutNavIcon from "./aboutNavIcon"

const icons = [
    {
        image: "",
        title: "Music Artist"
    },
    {
        image: "",
        title: "Song"
    },
    {
        image: "",
        title: "Movie"
    },
    {
        image: "",
        title: "Tv Show"
    },
    {
        image: "",
        title: "Sport"
    },
];

export default function aboutNav(){
    return(
        <div className="">
            {icons.map((point, index) => (
                <AboutNavIcon iconImage={point.image} iconTitle={point.title} key={index} />
            ))}
            
        </div>
    )
}