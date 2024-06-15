import { useState, useEffect } from 'react';
import { Topbar } from '../components/Topbar';
import { Sidebar } from '../components/Sidebar';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useAldoAlert } from 'aldo-alert';
import { UserStatus } from '../components/UserStatus';


const Dashboard = () => {




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
              <div className='border-2 border-gray-300 mb-7' />
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
