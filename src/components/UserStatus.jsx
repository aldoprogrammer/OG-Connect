import React from 'react';
import { Avatar, Typography, Tooltip } from "@material-tailwind/react";
import { ChatBubbleLeftEllipsisIcon, GiftIcon } from '@heroicons/react/24/outline';

// Dummy JSON data
const userData = [
  {
    "id": 1,
    "name": "Tania Andrew",
    "avatar": "https://docs.material-tailwind.com/img/face-2.jpg",
    "status": "Today I don't feel really good"
  },
  {
    "id": 2,
    "name": "John Doe",
    "avatar": "https://docs.material-tailwind.com/img/face-3.jpg",
    "status": "Excited to start my new job next week!"
  },
  {
    "id": 3,
    "name": "Jane Smith",
    "avatar": "https://docs.material-tailwind.com/img/face-4.jpg",
    "status": "Had a great time at the beach today."
  },
  {
    "id": 4,
    "name": "Chris Johnson",
    "avatar": "https://docs.material-tailwind.com/img/face-5.jpg",
    "status": "Just finished reading an amazing book!"
  },
  {
    "id": 5,
    "name": "Patricia Brown",
    "avatar": "https://docs.material-tailwind.com/img/face-1.jpg",
    "status": "Looking forward to the weekend."
  },
  {
    "id": 6,
    "name": "Michael Davis",
    "avatar": "https://docs.material-tailwind.com/img/face-2.jpg",
    "status": "Feeling productive today!"
  },
  {
    "id": 7,
    "name": "Linda Martinez",
    "avatar": "https://docs.material-tailwind.com/img/face-3.jpg",
    "status": "Just finished a great workout session."
  },
  {
    "id": 8,
    "name": "Robert Wilson",
    "avatar": "https://docs.material-tailwind.com/img/face-4.jpg",
    "status": "Cooking a new recipe for dinner tonight."
  },
  {
    "id": 9,
    "name": "Maria Garcia",
    "avatar": "https://docs.material-tailwind.com/img/face-5.jpg",
    "status": "Enjoying a peaceful evening."
  },
  {
    "id": 10,
    "name": "David Martinez",
    "avatar": "https://docs.material-tailwind.com/img/face-1.jpg",
    "status": "Excited for the upcoming holidays."
  }
];

// UserStatus component
export function UserStatus() {
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
            <Tooltip content="Reply" placement="top">
              <button className="flex items-center text-gray-500 hover:text-blue-500">
                <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />
              </button>
            </Tooltip>
            <Tooltip content="Send Gift" placement="top">
              <button className="flex items-center text-gray-500 hover:text-green-500">
                <GiftIcon className="h-6 w-6" />
              </button>
            </Tooltip>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserStatus;
