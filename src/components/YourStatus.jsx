import React from 'react';
import { Avatar, Typography, Tooltip } from "@material-tailwind/react";
import { GiftIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/solid';

const userData = [
    {
        "id": 1,
        "name": "Aldo Lata Soba",
        "avatar": "https://docs.material-tailwind.com/img/face-2.jpg",
        "status": "Today I don't feel really good"
    },
    {
        "id": 2,
        "name": "Aldo Lata Soba",
        "avatar": "https://docs.material-tailwind.com/img/face-2.jpg",
        "status": "Excited to start my new job next week!"
    },
    {
        "id": 3,
        "name": "Aldo Lata Soba",
        "avatar": "https://docs.material-tailwind.com/img/face-2.jpg",
        "status": "Had a great time at the beach today."
    },
    {
        "id": 4,
        "name": "Aldo Lata Soba",
        "avatar": "https://docs.material-tailwind.com/img/face-2.jpg",
        "status": "Just finished reading an amazing book!"
    },
];

const YourStatus = ({ onEnhanceClick }) => {
    return (
        <div className="flex flex-col gap-6">
            {userData.map(user => (
                <div key={user.id} className="flex items-center gap-4">
                    <Avatar src={user.avatar} alt={user.name} />
                    <div className="flex-grow">
                        <Typography variant="h6">{user.name}</Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            {user.status}
                        </Typography>
                    </div>
                    <div className="flex items-center gap-2">
                        <Tooltip content="Optimize Status by AI" placement="top">
                            <button
                                className="flex items-center text-gray-500 hover:text-blue-500"
                                onClick={onEnhanceClick}
                            >
                                <SparklesIcon className="h-6 w-6" />
                            </button>
                        </Tooltip>
                        <Tooltip content="Gift Analyzing" placement="top">
                            <button className="flex items-center text-gray-500 hover:text-green-500">
                                <GiftIcon className="h-6 w-6" />
                            </button>
                        </Tooltip>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default YourStatus;
