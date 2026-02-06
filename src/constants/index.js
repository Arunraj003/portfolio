import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am an enthusiastic beginner in web development with a passion for creating engaging web applications. I have foundational knowledge in front-end technologies like React.js, HTML, CSS, and JavaScript, along with design frameworks such as Tailwind CSS. I also have experience using GitHub for version control and collaboration.

My goal is to continuously learn and grow in this field, leveraging my skills to develop user-friendly applications that provide great experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. As a recent BCA graduate from Karan Arts and Science College (2023), where I achieved an 86% academic record, I have gained a solid foundation in web development technologies.

I have hands-on experience with frameworks like React and Next.js, which I have used in various academic projects to build interactive and dynamic user interfaces. My journey into web development began with a deep curiosity about technology, and I am eager to learn and adapt to new challenges.

I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects.

`;

export const EXPERIENCES = [
  {
    year: "2023",
    role: "Frontend Developer",
    company: "Personal Projects",
    description: `Developed web applications using JavaScript, React.js, and Next.js as personal projects. Created user-friendly interfaces and implemented responsive designs to enhance user experience.`,
    technologies: ["Html", "Css", "JavaScript", "React.js"],
  },
  {
    year: "2023",
    role: "Academic Project",
    company: "Karan Arts and Science College",
    description: `Led a team project to build a website Fresh Hunters with Login using Firebase.`,
    technologies: ["HTML", "CSS", "JavaScript", "firebase"],
  },
  {
    year: "2023",
    role: "Self-Learning",
    company: "Independent",
    description: `Engaged in self-study to master frontend technologies, focusing on HTML, CSS, and JavaScript. Built several small projects to apply learning and develop coding skills.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "React CRUD App",
    image: project1,
    description:
      "A comprehensive CRUD application built with React and Redux, allowing users to create, read, update, and delete data seamlessly. The app features responsive design with Bootstrap, ensuring a user-friendly interface.",
    technologies: ["HTML", "Bootstrap", "React", "Redux"],
    liveDemo: "https://reactproject-crud.vercel.app/",
  },
  {
    title: "Fresh Hunters",
    image: project2,
    description:
      "A website that connects users for fresh produce delivery. Built using HTML, CSS, and JavaScript with Firebase, this project showcases modern web development practices.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    liveDemo: "https://fresh-hunters-bca.netlify.app/",
  },
  {
    title: "Recipe Finder",
    image: project4,
    description:
      "A delightful application that helps users discover new recipes based on their preferences. Utilizing React and Tailwind CSS, this project features a sleek design and responsive layout, enabling users to easily navigate through various recipe options.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    liveDemo: "https://react-project-recipe-finder.vercel.app/",
  },
  {
    title: "Weather App",
    image: project3,
    description:
      "A dynamic weather application that provides real-time weather data based on user location or search queries. Built with React and integrated with Weather API, this app uses Axios for API calls, offering a smooth user experience.",
    technologies: ["HTML", "CSS", "Weather API", "Axios", "React"],
    liveDemo: "https://weather-react-xi-bice.vercel.app/",
  },
  {
    title: "University Website",
    image: project4,
    description:
      "A professional multi-page institutional website developed to provide a comprehensive digital presence for a university. It includes structured sections for courses, faculty, and campus news, focusing on clean typography, accessibility, and intuitive user interface design.",
    technologies: ["HTML","CSS","JavaScript","Web Design Principles"],
    liveDemo: "https://pizza-fiesta03.netlify.app/",
  },
  {
    title: "Pizza Fiesta",
    image: project5,
    description:
      "A fully responsive restaurant website designed for a seamless food-ordering experience. Built using core web technologies, it features an interactive menu, elegant UI components, and smooth navigation, optimized for all device sizes to enhance user engagement.",
    technologies: ["HTML", "CSS", "Responsive Design"],
    liveDemo: "https://pizzafiesta.netlify.app/",
  },
];



export const CONTACT = {
  // address: "12/5, Jonakara Paarai Street, Tiruvannamalai, Tamil Nadu, India ",
  address: "145/448, Aadhishesan Nagar,Tiruvannamalai,Tamil Nadu,India",
  phoneNo: "+91 9361995841 ",
  email: "arunr6506@gmail.com",
};
