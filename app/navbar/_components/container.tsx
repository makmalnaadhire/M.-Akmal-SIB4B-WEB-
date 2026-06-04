export default function Container({
    title,
}: {
    title: string;
}) {
    return (
        <div className="flex-col justify h-8 text-black">
            <p className="font-medium">{title}</p>
        </div>
    );  
}