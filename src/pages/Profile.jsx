import { useState, useEffect } from 'react';
import { Topbar } from '../components/Topbar';
import { Sidebar } from '../components/Sidebar';
import {
  Card,
  Button,
  Typography,
  Textarea
} from "@material-tailwind/react";
import { useAldoAlert } from 'aldo-alert';
import { ScaleLoader } from 'react-spinners';
import YourStatus from '../components/YourStatus';

const Profile = () => {
  const { showAldoAlert } = useAldoAlert();
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [loadingPost, setLoadingPost] = useState(false);
  const [loadingRewrite, setLoadingRewrite] = useState(false);
  const [loadingGrammar, setLoadingGrammar] = useState(false);
  const [value, setValue] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  useEffect(() => {
    const storedProjectTitle = localStorage.getItem('projectTitle');
    const storedProjectDescription = localStorage.getItem('projectDescription');
    if (storedProjectTitle) setProjectTitle(storedProjectTitle);
    if (storedProjectDescription) setProjectDescription(storedProjectDescription);
  }, []);

  const rewriteWithAI = () => {
    setLoadingRewrite(true);

    // Simulating an async operation (replace with actual AI logic)
    simulateTextGeneration("I'm feeling great today to doing my task");
  };

  const fixGrammar = () => {
    setLoadingGrammar(true);

    // Simulating an async operation (replace with actual grammar fix logic)
    simulateTextGeneration("I am feeling great today to doing my task");
  };

  const simulateTextGeneration = (text) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setGeneratedText(text.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
        setLoadingRewrite(false);
        setLoadingGrammar(false);
      }
    }, 100); // Adjust the interval as needed
  };

  const saveToSmartContract = () => {
    setLoadingPost(true);

    localStorage.setItem('projectTitle', projectTitle);
    localStorage.setItem('projectDescription', projectDescription);

    // Simulating an async operation (replace with actual logic)
    setTimeout(() => {
      setLoadingPost(false);
      showAldoAlert('Updated status successfully!', 'warning');
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
                    <div className='flex gap-2 items-center'>
                      <Button onClick={rewriteWithAI} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
                        {loadingRewrite ? (
                          <ScaleLoader color='#fff' loading={loadingRewrite} height={16} width={6} radius={2} margin={3} />
                        ) : (
                          "Rewrite with AI"
                        )}
                      </Button>
                      <Button onClick={fixGrammar} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
                        {loadingGrammar ? (
                          <ScaleLoader color='#fff' loading={loadingGrammar} height={16} width={6} radius={2} margin={3} />
                        ) : (
                          "Fix Grammar"
                        )}
                      </Button>
                    </div>
                    <Textarea
                      size="lg"
                      placeholder="Your Status"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      inputProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <Button onClick={saveToSmartContract} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                    {loadingPost ? (
                      <ScaleLoader color='#fff' loading={loadingPost} height={16} width={6} radius={2} margin={3} />
                    ) : (
                      "Post"
                    )}
                  </Button>
                </div>
              </div>
              <div className='flex flex-col gap-1 w-full mt-5'>
                <Typography variant="h4" color="blue-gray" className="mb-4">
                  Your Status
                </Typography>
                <div className='flex flex-col gap-1 w-full'>
                  <YourStatus generatedText={generatedText} />
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
