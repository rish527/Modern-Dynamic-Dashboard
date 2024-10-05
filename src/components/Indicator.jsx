import './indicator.css';

export default function Indictor({icon,num}){
    return (
        <div className="indicator">
            <div className="icon">{icon}</div>
            <div className="num">{num}</div>
        </div>
    );
}