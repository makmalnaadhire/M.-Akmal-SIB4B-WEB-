import Nav from "./_components/nav";

export default function NavigationBar() {
    return (
        <div className="h-screen bg-black flex-col justify-center">
            <div className="bg-white justify-center h-170 w-65 pt-5">
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
                <div>
                    
                </div>
            </div>
        </div>
    )
}