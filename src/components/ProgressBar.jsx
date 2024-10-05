import '../index.css';
import { CircularProgress, LinearProgress } from '@mui/material';

export default function ProgressBar({ name, val }) {
    const progressValue = Math.min(Math.max(val, 0), 100);

    return (
        <div className="bar flex items-center justify-between w-full my-6">
            <div className="main font-medium h-4 border-e-2 flex justify-between w-full items-center space-x-2 pe-2 me-2">
                <p className="name font-medium w-[100px]">{name}</p>
                <div className="bar w-[170px] rounded-lg ">
                    <LinearProgress variant="determinate"  value={progressValue} sx={{
                            borderRadius: '10px', // Adjust the radius as needed
                            height:"10px"
                        }} />
                </div>
                <p>{progressValue}%</p>
            </div>
            <div className={`dot w-4 h-4 rounded-full ${val>50? "bg-red-500":"bg-blue-700"}`}></div>
        </div>
    );
}
