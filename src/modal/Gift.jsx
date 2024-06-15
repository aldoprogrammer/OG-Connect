import React, { useState } from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button, Typography, Avatar } from "@material-tailwind/react";
import { ScaleLoader } from 'react-spinners';
import { useAldoAlert } from 'aldo-alert';

const gifts = [
  {
    id: 1,
    name: "Teddy Bear",
    image: "https://via.placeholder.com/150/FFB6C1/000000?text=Teddy+Bear"
  },
  {
    id: 2,
    name: "Chocolate Box",
    image: "https://via.placeholder.com/150/D2691E/000000?text=Chocolate+Box"
  },
  {
    id: 3,
    name: "Flower Bouquet",
    image: "https://via.placeholder.com/150/FF69B4/000000?text=Flower+Bouquet"
  },
  {
    id: 4,
    name: "Perfume",
    image: "https://via.placeholder.com/150/FFD700/000000?text=Perfume"
  },
  {
    id: 5,
    name: "Gift Card",
    image: "https://via.placeholder.com/150/8A2BE2/000000?text=Gift+Card"
  }
];

const Gift = ({ open, handleClose }) => {
  const { showAldoAlert } = useAldoAlert();
  const [loading, setLoading] = useState(null);

  const handleBlockchain = (giftId) => {
    setLoading(giftId);

    setTimeout(() => {
      setLoading(null);
      showAldoAlert('Gift sent successfully!', 'warning');
      handleClose(); // Close the modal

    }, 3000);
  }

  return (
    <Dialog open={open} handler={handleClose}>
      <DialogHeader>Send a Gift</DialogHeader>
      <DialogBody divider className="flex flex-col gap-4">
        {gifts.map(gift => (
          <div key={gift.id} className="flex items-center gap-4">
            <Avatar src={gift.image} alt={gift.name} size="lg" />
            <div className="flex-grow">
              <Typography variant="h6">{gift.name}</Typography>
            </div>
            <Button
              variant="gradient"
              color="green"
              onClick={() => handleBlockchain(gift.id)}
              disabled={loading === gift.id} // Disable button while loading
            >
              {loading === gift.id ? (
                <ScaleLoader
                  color='#ffffff'
                  loading={loading === gift.id}
                  height={16}
                  width={6}
                  radius={2}
                  margin={3}
                />
              ) : (
                "Send this gift"
              )}
            </Button>
          </div>
        ))}
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={handleClose}>
          Cancel
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default Gift;
