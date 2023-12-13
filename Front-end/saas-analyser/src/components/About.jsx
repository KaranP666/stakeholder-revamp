import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// const ServicesCard = ({ index,title, icon}) =>{
//   return (
//     <Tilt className="xs:w-[250px] w-full">
//       <motion.div
//         variants={fadeIn("right","spring",0.5 * index,0.75)}
//         className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
//           <div
//             options={{
//               max:45,
//               scale:1,
//               speed:450
//             }}
//             className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
//               <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
//               <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

//           </div>
        
//       </motion.div>
//     </Tilt>
//   )
// }

const About = () => {
  // const [pdfId, setPdfId] = useState('');
  // const handleQuestionSubmit = async (userQuestion) => {
  //   const response = await fetch('http://127.0.0.1:5000/api/process', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       user_question: userQuestion,
  //       pdf_id: pdfId,
  //     }),
  //   });

  //   const data = await response.json();
  //   console.log(data);
  // };
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
       An innovative question and answering system designed to revolutionize stakeholder interaction with annual public reports, particularly within the intricate landscape of the Indian stock market. This state-of-the-art system adeptly navigates the complexities of financial intricacies and sustainability metrics through advanced natural language processing. It accelerates the retrieval of critical information by generating real-time FAQs, providing investors and analysts with swift access to key metrics and explanations. Beyond efficiency, the system offers customizable insights, enabling users to tailor their inquiries, and incorporates a comparative analysis feature for a comprehensive understanding. Additionally, the integration of intuitive data visualization simplifies complex information, enhancing overall user experience. This user-friendly system serves as a vital tool, not only transforming the annual reporting landscape but also catering to the specific needs of stakeholders within the dynamic context of the Indian stock market. Its capacity to streamline inquiries and deliver timely and accurate information positions it as an invaluable asset in navigating the multifaceted terrain of corporate disclosures.
    </motion.p>

    {/* <QuestionForm onSubmitQuestion={handleQuestionSubmit} /> */}

    {/* <div className="mt-20 flex flex-wrap gap-10">
      {services.map((services,index)=>(
        <ServicesCard key={services.title} index={index} {...services} />
      ))}

    </div> */}
    </>
  )
}

export default SectionWrapper( About , "about" )
