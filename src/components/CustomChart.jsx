import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { backdropClasses } from '@mui/material';
import DropDown from './DropDown';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CustomChart = ({ data }) => {
  const options = {
    animationEnabled: true,
    backgroundColor: "transparent",
  
    toolTip: {
      shared: true,
    },
    data: data,
    height:300
  };

  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <div >
          <h1 className="text-2xl font-semibold">Focusing</h1>
          <p className='text-xm' >Productivity Analytics</p>
        </div>
        <div className="selector bg-white rounded-3xl p-3 font-medium py-2">
          Range: <DropDown />
        </div>
      </div>

      <div style={{ height: '300px' }}>
          <CanvasJSChart options={options} />
      </div>
    </div>
  );
};

export default CustomChart;
