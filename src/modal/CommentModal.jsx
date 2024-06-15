import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { ScaleLoader } from 'react-spinners';

const CommentModal = ({ open, handleClose, userName }) => {
  const [comment, setComment] = useState("");
  const [loadingRewrite, setLoadingRewrite] = useState(false); // Loading state for rewrite action
  const [loadingGrammar, setLoadingGrammar] = useState(false); // Loading state for grammar fix action

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const rewriteWithAI = () => {
    setLoadingRewrite(true);
    simulateTyping(`Thhe best decision or anything that you want to for you ${userName}: ${comment}`);
  };

  const fixGrammar = () => {
    setLoadingGrammar(true);
    simulateTyping(`Yoou seems kind of tired ${userName}: ${comment}`);
  };

  const simulateTyping = (text) => {
    setComment(""); // Clear previous comment
    let fullText = `${text}`;
    let index = 0;
    const interval = setInterval(() => {
      setComment((prevText) => prevText + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setLoadingRewrite(false); // Reset loading state for rewrite action
        setLoadingGrammar(false); // Reset loading state for grammar fix action
      }
    }, 50); // Adjust typing speed as per your preference
  };

  const handleSubmitComment = () => {
    // Logic to handle comment submission (you can implement this)
    console.log(`Comment submitted for ${userName}: ${comment}`);
    setComment(""); // Clear the comment field after submission
    handleClose(); // Close the modal after submission
  };

  return (
    <Dialog open={open} size="xs" handler={handleClose}>
      <div className="flex items-center justify-between">
        <DialogHeader className="flex flex-col items-start">
          <Typography className="mb-1 text-xl font-bold">
            Comment on {userName}'s post
          </Typography>
        </DialogHeader>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-5 w-5 cursor-pointer"
          onClick={handleClose}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <DialogBody>
        <div className="flex items-center gap-4 mb-4">
          <Button
            variant="outlined"
            color="blue"
            onClick={rewriteWithAI}
            disabled={loadingRewrite || loadingGrammar}
          >
            {loadingRewrite ? <ScaleLoader color='#000' loading={loadingRewrite} height={16} width={6} radius={2} margin={3} /> : "Rewrite with AI"}
          </Button>
          <Button
            variant="outlined"
            color="blue"
            onClick={fixGrammar}
            disabled={loadingGrammar || loadingRewrite}
          >
            {loadingGrammar ? <ScaleLoader color='#000' loading={loadingGrammar} height={16} width={6} radius={2} margin={3} /> : "Fix Grammar"}
          </Button>
        </div>
        <div className="grid gap-6">
          <Typography className="text-sm font-medium text-blue-gray-600">
            Your comment
          </Typography>
          <Textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your comment here..."
            rows={4}
          />
        </div>
      </DialogBody>
      <DialogFooter className="space-x-2">
        <Button variant="text" color="gray" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="gradient" color="blue" onClick={handleSubmitComment}>
          Submit comment
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default CommentModal;
