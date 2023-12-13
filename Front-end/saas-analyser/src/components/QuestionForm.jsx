import React, { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";

const QuestionForm = ({ onSubmitQuestion }) => {
  const [userQuestion, setUserQuestion] = useState("");

  const handleQuestionSubmit = () => {
    onSubmitQuestion(userQuestion);
  };

  return (
    <>
      <div className="pt-[10px] pl-[200px] ">
        <div className="relative w-[32rem]">
          <label className="flex flex-col">
            <textarea
              rows="6"
              value={userQuestion}
              onChange={(e) => setUserQuestion(e.target.value)}
              placeholder="Your Question"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <div className="flex w-full justify-between py-1.5">
            <IconButton variant="text" color="blue-gray" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </IconButton>
            <div className="flex gap-2">
              <Button size="sm" color="red" variant="text" className="rounded-md">
                Cancel
              </Button>
              <Button size="sm" className="rounded-md" onClick={handleQuestionSubmit}>
                Submit Question
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionForm;
