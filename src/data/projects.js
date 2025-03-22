import project4Img from '../images/projects/4.png';
import project1Img from '../images/projects/1.png';
import project2Img from '../images/projects/2.png';
import project5Img from '../images/projects/5.png';

const projects = [
    {
        id: 1,
        name: "AI Application Management Portal",
        description: "A web-based platform for AI application management, enabling real-time monitoring, system tracking, and parameter adjustments. Built with Django, FastAPI, Bootstrap, and FontAwesome, it leverages MSSQL and Django ORM for database management and ensures reliable performance with Nginx and Waitress. Authorized users can view logs, modify settings, and oversee AI operations through a user-friendly interface.",
        image: project1Img,
    },
    {
        id: 2,
        name: "No-Code Object Detection Trainer",
        description: "Developed a user-friendly platform that allows individuals to train their own object detection models without requiring any coding knowledge. Users can upload their image datasets, crop and label images, and train custom AI models directly within the platform. The system is built using Django, Django ORM, and Tailwind for the frontend, while YOLOv8 is utilized for AI model training. The platform operates seamlessly on Google Cloud, ensuring scalability and performance. It also integrates SQLite for database management and utilizes Nginx with Gunicorn for efficient deployment.",
        image: project2Img,
    },
    {
        id: 3,
        name: "AI-Powered Image Processing System",
        description: "Developed an AI-driven image processing application for industrial automation. It can communicate with production line automation systems via gRPC or directly interface with PLCs. Primarily used for quality control, it can also be deployed for safety applications. Built with Flask, the system supports API-based data transfer to a management portal and is compatible with AI models developed using PyTorch and TensorFlow, ensuring high-performance analysis and adaptability.",
    },
    {
        id: 4,
        name: "Web-Based Ergonomic Analysis Platform",
        description: "Developed a web-based platform for ergonomic analysis, allowing users to upload videos for automated assessment. The system calculates the REBA score and provides detailed analysis in both video overlay and PDF formats. Certain parameters, such as object weight, are assigned fixed values for standardized evaluations. Built using Flask, SQLAlchemy, Flask-Migrate, and Tailwind, the platform offers a seamless and user-friendly experience for ergonomic risk assessment. It utilizes SQLite for database management and is deployed using Nginx and Waitress for optimal performance.",
        image: project4Img,
        // websiteUrl: "https://ai.ocalis.com.tr"
    },
    {
        id: 5,
        name: "Personal Portfolio Website",
        description: "Developed a personal portfolio website to showcase projects, experience, and contact information. Built with React, Tailwind, and Django, the site utilizes Django ORM for database management. It features sections such as About, Projects, and Contact, with plans to integrate a blog page in the future. The application is fully open-source and available on GitHub, promoting transparency and collaboration.",
        image: project5Img,
        githubUrl: "https://github.com/oktaykaanmemis/my_portfolio_public"
    }
];

export default projects;