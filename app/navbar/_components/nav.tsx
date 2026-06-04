export default function Nav({
    imgSrc,
    title,
}: {
    imgSrc: string;
    title: string;
}) {
    return (
        <div className="flex gap-4 pl-4 justify h-8 text-black">
            <img src={imgSrc} className="h-5 w-5" />
            <p className="font-medium">{title}</p>
        </div>
    );  
}