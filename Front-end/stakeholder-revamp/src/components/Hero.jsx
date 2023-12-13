import React, { useState } from 'react'
import { motion } from "framer-motion";
import { styles} from '../styles'
import FileUpload from './FileUpload.jsX';
import QuestionForm from './QuestionForm';
// import {FileUpload} from './FileUpload';

const Hero = () => {
  const [pdfId, setPdfId] = useState('');

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append('pdf_file', file);

    const response = await fetch('http://127.0.0.1:5000/api/upload-pdf', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setPdfId(data.pdf_id);
  };
  const handleQuestionSubmit = async (userQuestion) => {
    const response = await fetch('http://127.0.0.1:5000/api/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_question: userQuestion,
        pdf_id: pdfId,
      }),
    });

    const data = await response.json();
    console.log(data);
  };
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Scan Your <span className="text-[#915eff]">PDF</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Upload your PDF here<br className="sm:block hidden"/>PDF
          </p>
          
        </div>
        </div>
        <FileUpload onFileUpload={handleFileUpload}/>
        <QuestionForm onSubmitQuestion={handleQuestionSubmit}  />



        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y:[0,24,0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"/>
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero