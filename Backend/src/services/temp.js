// Backend/src/services/temp.js

 const resume = `
Ankur Sharma
Bhopal, India
ankur.sharma@email.com
+91 9876543210
LinkedIn: linkedin.com/in/ankursharma
GitHub: github.com/ankursharma

PROFESSIONAL SUMMARY
MERN Stack Developer with 3+ years of experience building scalable web applications.

TECHNICAL SKILLS
Languages: JavaScript, TypeScript
Frontend: React.js, Redux Toolkit, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
DevOps & Tools: Git, Docker (basic), Postman, Linux
Concepts: REST APIs, JWT Authentication, MVC Architecture

WORK EXPERIENCE
Backend Developer
TechNova Solutions | Jan 2022 - Present
- Developed and maintained 15+ RESTful APIs using Node.js and Express.
- Integrated JWT-based authentication increasing system security by 40%.
- Optimized MongoDB queries resulting in a 25% faster data retrieval rate.
`;

 const selfDescription = `
I am a passionate developer who loves solving complex algorithmic problems. 
Beyond my technical skills in the MERN stack, I have a strong interest in 
AI integration and have recently started building projects that utilize 
Large Language Models. I am looking for a role where I can bridge the gap 
between traditional full-stack development and modern AI capabilities.
`;

 const jobDescription = `
We are looking for a MERN Stack Developer who is proficient in React.js and Node.js. 
The ideal candidate should have experience with JWT authentication, 
state management using Redux, and designing RESTful APIs. 
Knowledge of AI-driven development or API integration with OpenAI/Gemini 
is a significant advantage. Knowledge of Docker and AWS is a plus.
`;

/**
 * PROMPT TEMPLATE
 * This is the "brain" of your request. It tells Gemini how to
 * weigh the three inputs to produce a structured result.
 */
// export const promptTemplate = (resumeContent, selfDescContent, jdContent) => {
//     return `
//     System: You are an elite Technical Recruiter and Career Consultant.

//     Task: Analyze the following three inputs to provide a comprehensive job-fit report.

//     1. USER RESUME:
//     ${resumeContent}

//     2. USER SELF-DESCRIPTION (Context/Goals):
//     ${selfDescContent}

//     3. TARGET JOB DESCRIPTION:
//     ${jdContent}

//     Output Format (STRICT JSON):
//     {
//         "matchPercentage": (number between 0-100),
//         "skillGaps": ["array of specific skills missing from the resume but present in the JD"],
//         "contextualFit": "Analysis of how the user's Self-Description aligns with the JD's company culture or specific requirements",
//         "strengths": ["array of top 3 highlights from the resume"],
//         "interviewTips": ["2-3 specific tips on how the user should explain their experience"],
//         "generatedQuestions": {
//             "technical": ["3 targeted coding/architecture questions"],
//             "behavioral": ["2 questions based on the self-description"]
//         }
//     }
//     `;
// };

module.exports = {
  resume,
  selfDescription,
  jobDescription,
};
