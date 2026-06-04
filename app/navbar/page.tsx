import Nav from "./_components/nav";

export default function NavigationBar() {
    return (
        <div className="h-screen flex-col flex justify-center">
            <div className="bg-white justify-center w-65">
                <Nav imgSrc="/dashboard.svg" title="Dasboard"/>
                <Nav imgSrc="/message.svg" title="Messages"/>
                <Nav imgSrc="/checklist.svg" title="Tasks"/>
                <Nav imgSrc="/notes.svg" title="Notes"/>
                <Nav imgSrc="/mail.svg" title="Emails"/>
                <Nav imgSrc="/report.svg" title="Reports"/>
                <Nav imgSrc="/automation.svg" title="Automations"/>
                <Nav imgSrc="/usb.svg" title="Workflows"/>
            </div>
            <div className="flex text-black font-medium">
                <img src="/chevron.svg"/>
                <p className="Favorites"></p>
            </div>
        </div>
    )
}