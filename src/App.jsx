import React from 'react';
import { Line } from 'react-chartjs-2';
import { FaGoogle, FaApple, FaSpotify } from 'react-icons/fa';
import 'chart.js/auto'; // Required for Chart.js
import { LuTimer } from "react-icons/lu";
import { CiClock1 } from "react-icons/ci";
import {SlCalender} from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";

import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import TaskCard from './components/TaskCard';
import Tracker from './components/Tracker';
import CustomChart from './components/CustomChart';
import Meeting from './components/Meeting';
import ProgressBar from './components/ProgressBar';

import './index.css'

const connectionsIcons=[<FaGoogle size={30} color='white'/>,<FaApple size={30} color='white'/>,<FaSpotify size={30} color='white'/>];

// Data for the focus chart
const lineChartData = {
  labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
  datasets: [
    {
      label: 'Maximum of Focus',
      data: [80, 65, 90, 85, 75, 90],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)', // Optional: background color under the curve
      fill: false, // Fill under the line
      tension: 0.4, // This creates the curve
    },
    {
      label: 'Minimum of Focus',
      data: [60, 45, 70, 55, 65, 70],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)', // Optional: background color under the curve
      fill: false, // Fill under the line
      tension: 0.4, // This creates the curve
    },
  ],
};

const data = [
  {
    type: "spline",
    name: "Maximum of Focus",
    showInLegend: true,
    dataPoints: [
      { y: 100, label: "Week1" },
      { y: 150, label: "Week2" },
      { y: 120, label: "Week3" },
      { y: 130, label: "Week4" },
    ]
  },
  {
    type: "spline",
    name: "Minimum of Focus",
    showInLegend: true,
    dataPoints: [
      { y: 150, label: "Week1" },
      { y: 100, label: "Week2" },
      { y: 70, label: "Week3" },
      { y: 120, label: "Week4" },
    ]
  }
];

var meetings = [
  {
    day: "Tue",
    date:"12 Aug",
    time: "10:00 AM",
    name: "Quick Daily Meeting",
    logo: "https://www.cdnlogo.com/logos/z/95/zoom.svg",
    platform: "Zoom",
    border:true,
  },
  {
    day: "Mon",
    date:"12 July",
    time: "2:00 PM",
    name: "Project Update",
    logo: "https://w7.pngwing.com/pngs/134/448/png-transparent-microsoft-teams-hd-logo-thumbnail.png",
    platform: "Microsoft Teams",
    border:true,
  },
  {
    day: "Wed",
    date:"15 Aug",
    time: "11:30 AM",
    name: "Client Discussion",
    logo: "https://w7.pngwing.com/pngs/134/448/png-transparent-microsoft-teams-hd-logo-thumbnail.png",
    platform: "Microsoft Teams",
    border:true,
  },
  {
    day: "Fri",
    date:"12 Aug",
    time: "4:00 PM",
    name: "Weekly Sync-up",
    logo: "https://www.cdnlogo.com/logos/z/95/zoom.svg",
    platform: "Zoom",
    border:true,
  },
  {
    day: "Thu",
    date:"12 Aug",
    time: "1:00 PM",
    name: "Design Review",
    logo: "https://w7.pngwing.com/pngs/134/448/png-transparent-microsoft-teams-hd-logo-thumbnail.png",
    platform: "Microsoft Teams",
    border:true,
  },
  {
    day: "Sat",
    time: "3:00 PM",
    name: "Sprint Planning",
    logo: "https://www.cdnlogo.com/logos/g/15/google-meet-icon-2020.svg",
    platform: "Microsoft Teams",
    border:true,
  }
];

var progress = [
  {
    name: "Sports Skills",
    val: 40,
  },
  {
    name: "Blogging",
    val: 70,
  },
  {
    name: "Leadership",
    val: 60,
  },
  {
    name: "Meditation",
    val: 50,
  },
  {
    name: "Time Management",
    val: 80,
  },
  {
    name: "Team Collaboration",
    val: 90,
  },
];



const App = () => {
  return (
    <div className="dashboard-container h-full">
      {/* Left Panel */}
      <div className="left-panel ">
        {/* navbar */}
        <Navbar name="Rishav" />

        {/* main Section */}
        <div className="main-section flex justify-between my-8">
          {/* Profile Card */}
          <ProfileCard name="Jisoo" position="Programmer"/>
          {/* Task Section */}
          <div className="tasksection flex flex-col items-center justify-between w-auto">
            {/* task-cards */}
            <div className="taskcards flex justify-center gap-6">
              {/* task card 1 */}
              <TaskCard name="Prioritized Tasks" num={56} icon={<LuTimer size={20} />} />
              {/* task card 2 */}
              <TaskCard name="Additional Tasks" num={29} icon={<CiClock1 size={20}/>} />

            </div>

            {/* tracker connection */}
            <Tracker connections={connectionsIcons}/>
          </div>
        </div>
     

        {/* Focus Chart Section */}
        <CustomChart data={data} />
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        {/* Meetings Section */}
        <div className="meetings-section">
          <div className="head flex justify-between items-center">
            <h1 className='text-2xl font-semibold'>My Meetings</h1>
            <div className="holder rounded-full p-2 bg-white">
              <SlCalender size={20}/>
            </div>
          </div>
          <div className="meetings flex flex-col ">
              {
                meetings.slice(0,4).map((meetings,index)=>(
                  <Meeting key={index} {...meetings} border={(index===3?false:true)} />
                ))
              }
              <div className="more flex justify-center items-end gap-1 mt-4">
                <p className='flex items-center font-semibold'>See All Messages</p>
                <button><IoIosArrowForward size={20} /></button> 
              </div>
          </div>
        </div>

        {/* Developed Areas Section */}
        <div className="developed-areas-section">
          <h1 className='text-2xl font-semibold'>Developed Areas</h1>
          <p className='text-sm text-gray-600'>Most common areas of interest</p>
          
          <div className="bars my-3 flex flex-col">
            {
              progress.slice(0,6).map((item,index)=>{
                return <ProgressBar key={index} {...item} />
              })
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
