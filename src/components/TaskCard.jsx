import '../index.css';


export default function TaskCard({name,num,icon}){
    return(
        <div className="card w-60 h-64 gradiant-card p-6 rounded-2xl mt-0 flex flex-col justify-between gap-4">
            <div className="top">
                <h2 className='font-semibold w-20'>{name}</h2>
                <div className="holder p-3 rounded-xl bg-white bg-opacity-40">{icon}</div>
            </div>
            <div className="down">
                <h1 className='text-6xl'>{num}%</h1>
                <p>Avg. Completed</p>
            </div>
        </div>
    );
}