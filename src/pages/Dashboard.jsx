import { useState, useEffect } from 'react';
import { Topbar } from '../components/Topbar';
import { Sidebar } from '../components/Sidebar';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import BuildingImage from '../assets/logo.png';
import MarkdownEditor from '../components/MarkdownEditor';
import { useAldoAlert } from 'aldo-alert';
import { ScaleLoader } from 'react-spinners';
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom';
import { UserStatus } from '../components/UserStatus';


const Dashboard = () => {

  const { showAldoAlert } = useAldoAlert();
  const [tab, setTab] = useState(() => {
    const savedTab = localStorage.getItem('tab');
    return savedTab !== null ? Number(savedTab) : 0;
  });
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [loading, setLoading] = useState(false); // State for controlling loading animation
  const [loadingUrl, setLoadingUrl] = useState(false); // State for controlling loading animation
  const [qrCodeValue, setQrCodeValue] = useState(''); // State for storing QR code value


  // Load data from localStorage when component mounts
  useEffect(() => {
    const storedProjectTitle = localStorage.getItem('projectTitle');
    const storedProjectDescription = localStorage.getItem('projectDescription');
    if (storedProjectTitle) setProjectTitle(storedProjectTitle);
    if (storedProjectDescription) setProjectDescription(storedProjectDescription);
  }, []);

  const submitUrlFunction = () => {
    setLoadingUrl(true); // Show loading animation

      // Simulate saving to smart contract and hiding loader
      setTimeout(() => {
        setLoadingUrl(false); // Hide loading animation after 3 seconds
        showAldoAlert('Project 3D URL connected!', 'warning');
        setTab(1);
        localStorage.setItem('tab', setTab); // Save QR data to localStorage
  
      }, 3000);

  };

    // Effect to sync tab state with localStorage
    useEffect(() => {
      localStorage.setItem('tab', tab);
    }, [tab]);
  

  const generateAI = (text, setText) => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust animation speed (milliseconds per character)
  };

  const generateAITitle = () => {
    generateAI('Virtual Cityscape Project', setProjectTitle);
  };




  return (
    <div>
      <Topbar />
      <div className='flex'>
        <Sidebar />
        <div className="flex flex-col items-center w-full p-5">
          <Card color="white" shadow={true} className="w-full h-auto p-5">
              <div className='flex flex-col'>
                <Typography variant="h4" color="blue-gray" className="mb-4">
                  Update Status TimeLine
                </Typography>
               <div className='border-2 border-gray-300 mb-7'/>
                <div className='flex flex-col gap-1 w-full'>
                   <UserStatus />
                  </div>
              </div>
            
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
