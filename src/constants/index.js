import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  ongraph,
  carrent,
  jobit,
  tripguide,
  java,
  cloudService,
  website,
  api,
  dashboard,
  database,
  aiml,
  googleCloud,
  springBoot,
  mysql,
  postgres,
  azure,
  angular,
  k8s,
  aws,
  material,
  estuate,
  lendux,
  bnym,
  clickatell,
  delaplex,
  layup,
  ciphercru,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Product Engineering",
    icon: aiml,
    description: "Spring, Spring Boot, Spring MicroServices with Java 1.8+",
  },

  {
    title: "Java/J2EE Development",
    icon: java,
    description: "Spring, Spring Boot, Spring MicroServices with Java 1.8+",
  },
  {
    title: "Modern JS Development",
    icon: nodejs,
    description:
      "Angular/React based frontend, unleashing power of Express.js server",
  },
  {
    title: "Cloud Services/Engineering",
    icon: cloudService,
    description: "Google Cloud, Azure, AWS Service",
  },
  {
    title: "Web Designing",
    icon: website,
    description: "HTML/CSS, jQuery, BootStrap, Google Material",
  },
  {
    title: "API/System Integration",
    icon: api,
    description:
      "REST APIs, Spring Integration, Apache Camel Integration Framework",
  },
  {
    title: "Data Analytics/Visualization",
    icon: dashboard,
    description: "Google DataFusion, PowerBI, Tableau",
  },
  {
    title: "Database Management",
    icon: database,
    description:
      "SQL/NoSql proficiency in MySQL, MongoDb, Postgre, MS SQL Server",
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring / Spring Boot",
    icon: springBoot,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Google Material",
    icon: material,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "MySQL",
    icon: mysql,
  },

  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "Google Cloud Platform",
    icon: googleCloud,
  },
  {
    name: "Amazon Web Services",
    icon: aws,
  },
  {
    name: "Microsoft Azure",
    icon: azure,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: k8s,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
];

const experiences = [
  {
    title: "Director & Chief Technical Evangelist",
    company_name: "CipherCru Innovation Private Limited",
    icon: ciphercru,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Responsible for developing the company's overall technology strategy and ensuring that it aligns with the business strategy.",
      "Responsible for recruiting and retaining top talent, building a strong team of engineers and developers.",
      "Responsible for identifying new technologies that will benefit the company and integrating them into the existing technology infrastructure.",
      "Leading the process of developing new products and features based on customer needs and market trends.",
      "Responsible for managing the technology budget, ensuring that expenditures are aligned with the company's strategic goals.",
      "Ensuring the company's data and systems are secure and protected against cyber threats.",
      "Fosters a culture of innovation within the company and encourages experimentation.",
      "Maintaining a deep understanding of customer needs and develops technology solutions that meet those needs.",
    ],
  },
  {
    title: "Engineering Lead - Payment Integration",
    company_name: "Layup Technologies",
    icon: layup,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Providing technical direction and guidance to ensure that the engineering team is working efficiently and optimizing for quality, scalability, and maintainability. They must stay up-to-date with the latest technologies and industry practices to set technical direction.",
      "Responsible for managing the team's projects from conception to completion, and must ensure that they are completed within the allotted time and budget.",
      "Managing the performance of team members, identifying areas for growth and development, holding team members accountable for their performance, and motivating the team to perform to the best of their abilities.",
      "Communicate frequently with other stakeholders, and while ensuring that team members understand what they need to do and when they need to do it",
      "Facing and overcoming roadblocks and issues that arise during the course of the project",
      "Responsible for finding, recruiting, and training new members of the engineering team",
    ],
  },
  {
    title: "Principal Lead Engineer",
    company_name: "Delaplex",
    icon: delaplex,
    iconBg: "#383E56",
    date: "October 2022 - Present",
    points: [
      "Developing and maintaining web applications using Angular and Java and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Lead Engineer",
    company_name: "Clickatell Incorporation",
    icon: clickatell,
    iconBg: "#383E56",
    date: "October 2022 - December 2022",
    points: [
      "Developing and maintaining chatbot training set and IVR flows via multiple communication channels using Java and node on the backend with React on the front UI",
      "Maintaining and building scalable and distributed microservices to be deployed on Kubernetes cluster",
      "Performing automation and building automation CI/CD scripts to ease up the deployment and delivery process.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Principal Engineer",
    company_name: "Bank of New York - Mellon Inc.",
    icon: bnym,
    iconBg: "#383E56",
    date: "May 2022 - October 2022",
    points: [
      "Mentoring Team of 8 developers",
      "Desinging and Implementing an internal product, envisioned to perform financial reconciliation and comparision on financial statements and statical data.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Product Engineer - Contractor",
    company_name: "Reliant Fintech",
    icon: lendux,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - May 2022",
    points: [
      "Developing and maintaining web applications using Java, Angular and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Managing Cloud Infrastructure for the product and actively monitoring the production system for any threats and fatal errors.",
    ],
  },
  {
    title: "Senior Backend Engineer - Contractor",
    company_name: "Estuate Softwares (Contracted to EIS Group)",
    icon: estuate,
    iconBg: "#383E56",
    date: "December 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using Java and EIS framework designed by IBM group",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate Delivery Manager - Java Frameworks",
    company_name: "Ongraph Technologies Private Limited.",
    icon: ongraph,
    iconBg: "#E6DEDD",
    date: "February 2014 - December 2021",
    points: [
      "Developing and maintaining web applications using Java Frameworks and other related technologies.",
      "Collaborating with Client side stakeholders to understand and crave out the product road-map and infrastructure.",
      "Ensuring Quality delivery in timely manner",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
