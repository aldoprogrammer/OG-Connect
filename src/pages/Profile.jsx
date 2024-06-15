import { useState, useEffect } from 'react';
import { Topbar } from '../components/Topbar';
import { Sidebar } from '../components/Sidebar';
import {
  Card,
  Button,
  Typography,
  Input
} from "@material-tailwind/react";
import { useAldoAlert } from 'aldo-alert';
import { ScaleLoader } from 'react-spinners';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

const Profile = () => {
  const { showAldoAlert } = useAldoAlert();
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [qrCodeData, setQrCodeData] = useState(null);
  const [value, setValue] = useState("");

  // Load data from localStorage when component mounts
  useEffect(() => {
    const storedProjectTitle = localStorage.getItem('projectTitle');
    const storedProjectDescription = localStorage.getItem('projectDescription');
    if (storedProjectTitle) setProjectTitle(storedProjectTitle);
    if (storedProjectDescription) setProjectDescription(storedProjectDescription);
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateAITitle = () => {
    generateAI('Virtual Cityscape Project', setProjectTitle);
  };


  const saveToSmartContract = () => {
    setLoading(true);

    localStorage.setItem('projectTitle', projectTitle);
    localStorage.setItem('projectDescription', projectDescription);
    const documentation = localStorage.getItem('generatedDocumentation');

    const qrData = {
      title: projectTitle,
      description: projectDescription,
      documents: documentation
    };

    setTimeout(() => {
      setLoading(false);
      showAldoAlert('QR code scanned successfully!', 'warning');
      localStorage.setItem('qrCodeData', JSON.stringify(qrData));
      setQrCodeData(qrData);
    }, 3000);
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
                User Profile
              </Typography>
              <div className='flex flow-row gap-4'>
              <div className='flex flex-col gap-1 w-full'>
                    <Typography variant="h4" color="blue-gray" className="mb-4">
                      What's on your mind?
                    </Typography>
                    <div className="mb-6">
                      <div className=' flex gap-2 items-center'>
                      <Button onClick={generateAITitle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
                        Generate AI for Status
                      </Button>
                      <Button onClick={generateAITitle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
                        Fix grammar
                      </Button>
                      </div>
                      <Input
                        size="lg"
                        placeholder="Your Status"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                    <Button onClick={saveToSmartContract} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                      {loading ? <ScaleLoader color='#ffffff' loading={loading} height={16} width={6} radius={2} margin={3} />
                        : "Post"}
                    </Button>
                  </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
