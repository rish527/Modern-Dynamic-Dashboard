import '../index.css'
import { RxBorderDotted } from "react-icons/rx";

export default function Tracker({connections}){
    return (
        <div className="connections flex items-center justify-between bg-gray-300 w-full rounded-3xl px-8 py-4">
            <div className="text">
                <h1 className='text-lg font-semibold'>Trackers Connected</h1>
                <p className=''>{connections.length} active connections</p>
            </div>
            <div className="logo-holder flex justify-center items-center gap-2">
                <div className="logos flex">{connections[0]} {connections[1]} {connections[2]}</div>
                <RxBorderDotted size={20} color='white'/>
            </div>
        </div>
    );
}