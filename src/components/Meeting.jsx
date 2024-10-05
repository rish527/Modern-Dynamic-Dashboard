import "../index.css"
import { MdArrowOutward } from "react-icons/md";

export default function Meeting({day,date,time,name,platform,logo,border}){
    return(
        <div className={`meeting flex justify-between max-gap-5 py-4 pb-2" ${border===true?"border-b-2":""}`}>
            <div className="flex flex-col ">
                <div className="text-gray-600">{day}, {date}</div>
                <div className="font-medium">{time}</div>
            </div>
            <div className="flex flex-col ">
                <div className="font-medium">{name}</div>
                <div className="flex gap-1 items-center "><img className="size-4" src={logo} alt="" /> {platform}</div>
            </div>
            <div className="right py-1">
                <MdArrowOutward size={20} />
            </div>
        </div>
    )

}