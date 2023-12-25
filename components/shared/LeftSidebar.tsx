import Link from "next/link";
import {sidebarLinks} from '/constants/index.js'

function LeftSidebar (){
    return <section className={'custom-scrollbar leftsidebar'}>
        <div className={'flex w-full flex-1 flex-col gap-6 px-6'}>
            {sidebarLinks.map(link=>(<div>link</div>))}
        </div>
    </section>
}
export default LeftSidebar;