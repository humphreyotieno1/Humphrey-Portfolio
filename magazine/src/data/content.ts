export const site = {
  name: 'Humphrey Otieno',
  role: 'Full Stack Software Engineer',
  location: 'Nairobi, Kenya',
  tagline:
    'I build thoughtful digital products — from travel platforms and e-commerce stores to legal tech and creator marketplaces.',
  intro:
    "Hello, my name is Humphrey. I'm a software engineer who cares about clarity, craft, and the people on the other side of the screen. Since 2022 I've been turning ideas into fast, accessible web experiences for clients across Kenya and beyond.",
  story:
    'My work blends engineering expertise with a strong sense of narrative. No matter the project or industry, I strive to create digital experiences that are thoughtful, user-friendly, and instill confidence.',
  email: 'humphreyotieno04@gmail.com',
  resume: '/resume.pdf',
  logo: '/favicon.ico',
  portrait: '/hum2.png',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://humphrey.techbiteventures.com',
  social: [
    { label: 'GitHub', href: 'https://github.com/humphreyotieno1' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/humphrey-otieno' },
    { label: 'Twitter', href: 'https://x.com/_Banta__' },
    { label: 'Blog', href: 'https://dev.to/banta' },
  ],
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'Story', href: '#story' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ],
}

export const languages = [
  { label: 'Next.js', proficiency: 85 },
  { label: 'Golang', proficiency: 60 },
  { label: 'HTML5', proficiency: 95 },
  { label: 'CSS3', proficiency: 90 },
  { label: 'JavaScript', proficiency: 80 },
  { label: 'TypeScript', proficiency: 75 },
  { label: 'Node.js', proficiency: 80 },
  { label: 'React', proficiency: 80 },
  { label: 'Python', proficiency: 85 },
  { label: 'Flask', proficiency: 85 },
  { label: 'Databases', proficiency: 85 },
  { label: 'MySQL', proficiency: 85 },
  { label: 'PostgreSQL', proficiency: 85 },
  { label: 'Tailwind CSS', proficiency: 90 },
  { label: 'Django', proficiency: 85 },
  { label: 'FastAPI', proficiency: 85 },
  { label: 'Docker', proficiency: 85 },
  { label: 'Git', proficiency: 85 },
]

export const additionalSkillAreas = [
  {
    title: 'Frontend Development',
    description: 'Responsive design, modern CSS, component architecture, state management',
  },
  {
    title: 'Backend Development',
    description: 'API design, server-side logic, database optimization, authentication',
  },
  {
    title: 'DevOps & Tools',
    description: 'Git, Docker, CI/CD, cloud deployment, performance monitoring',
  },
]

export const projectCategories = ['All', 'E-Commerce', 'Healthcare', 'Services', 'Construction', 'Other'] as const

export const experiences = [
  {
    company: 'Eros Africa DMC Limited',
    role: 'Software Developer',
    period: 'July 2025 — Present',
    location: 'Nairobi, Kenya',
    summary:
      "Building high-performance web applications and APIs while shaping the brand's digital presence across Africa.",
    link: 'https://www.erosafrica.com/',
  },
  {
    company: 'LegalizeMe',
    role: 'Front End Web Developer',
    period: 'September 2024 — February 2025',
    location: 'Eldoret, Kenya',
    summary:
      'Delivered responsive interfaces and seamless experiences for a legal resources platform serving everyday users.',
    link: 'https://www.legalizeme.co.ke/',
  },
]

export const services = [
  {
    title: 'Full Stack Web Development',
    price: 'Custom quote',
    image: '/fullstack.jpg',
    description:
      'Dynamic, interactive web applications that provide seamless digital experiences — frontend, backend, APIs, and deployment built to scale.',
    features: ['Frontend & Backend', 'API Integration', 'Database Design', 'Performance Optimization'],
  },
  {
    title: 'Database and API Design',
    price: 'Custom quote',
    image: '/database.jpg',
    description:
      'Robust, scalable databases and RESTful APIs tailored to your product — from data modeling through security and long-term maintainability.',
    features: ['Database Architecture', 'RESTful APIs', 'Data Modeling', 'Security Implementation'],
  },
  {
    title: 'Web Design',
    price: 'Custom quote',
    image: '/webdesign.jpg',
    description:
      'Visually appealing, user-friendly interfaces with strong typography, responsive layouts, and flows that feel effortless.',
    features: ['UI/UX Design', 'Responsive Layouts', 'Visual Branding', 'User Experience'],
  },
]

export const projects = [
  {
    title: 'Hecta Consulting',
    category: 'Healthcare',
    description:
      'Hecta Consulting is a multidisciplinary healthcare consultancy firm dedicated to strengthening health and community systems across Africa, offering technical expertise and evidence-based insights to design sustainable solutions.',
    image: '/hecta.png',
    live: 'https://www.hectaconsulting.com/',
    technologies: ["Next.js","TypeScript","Tailwind CSS","PostgreSQL"],
  },
  {
    title: 'Eros Africa Limited',
    category: 'Services',
    description:
      'A premier DMC bridging global demand and destination excellence — B2B, MICE, FIT, and international school groups, powered by a real-time booking portal across the globe.',
    image: '/erosafrica.png',
    live: 'https://www.erosafrica.com/',
    technologies: ["Next.js","TypeScript","Tailwind CSS","PostgreSQL"],
  },
  {
    title: 'Denmar Tours and Travels',
    category: 'Services',
    description:
      'A tour and travel agency website built with Next.js and TypeScript. It provides a seamless experience for users to book tours and travels.',
    image: '/denmar.png',
    live: 'https://www.denmartravel.co.ke/',
    technologies: ["Next.js","TypeScript","Tailwind CSS","PostgreSQL","OpenAI"],
  },
  {
    title: 'Chapchap Spares',
    category: 'E-Commerce',
    description:
      "Chapchap Spares is Kenya's leading destination for premium motorcycle parts and accessories. We're on a mission to keep your ride smooth and your engine powerful.",
    image: '/chapchap.png',
    live: 'https://www.chapchapspares.co.ke/',
    technologies: ["Next.js","TypeScript","Tailwind CSS","Payment Gateway"],
  },
  {
    title: 'Everyday Resilience Counselling Kenya',
    category: 'Healthcare',
    description:
      'A counselling agency website built with Next.js and TypeScript. It provides a seamless experience for users to book counselling sessions.',
    image: '/everyday.png',
    live: 'https://www.everydayresilience.co.ke/',
    technologies: ["Next.js","TypeScript","Tailwind CSS"],
  },
  {
    title: 'Afrex Adventures',
    category: 'Services',
    description:
      'An authentic African travel experience platform connecting global explorers with the wild through story-driven journeys and conservation-focused tourism.',
    image: '/afrex.jpeg',
    live: 'https://www.afrexadventures.co.ke/',
    technologies: ["Next.js","TypeScript","Tailwind CSS"],
  },
  {
    title: 'NaInfluence',
    category: 'Services',
    description:
      'NaInfluence pairs growing brands with verified nano and micro creators — with escrow-protected payments, AI-written briefs, and results you can actually see.',
    image: '/nainfluence.png',
    live: 'https://www.nainfluence.com/',
    technologies: ["Next.js","TypeScript","Tailwind CSS","OpenAI"],
  },
  {
    title: 'NETSOFT Solutions',
    category: 'Services',
    description:
      'Bridging the gap between high-performance software engineering and robust physical infrastructure. Managed IT solutions designed for the modern enterprise—from the fiber optics in your walls to the applications on your screens.',
    image: '/netsoft.png',
    live: 'https://www.netsoftsolutions.co.ke/',
    technologies: ["Next.js","TypeScript","Tailwind CSS"],
  },
  {
    title: 'AIERGT Africa',
    category: 'Services',
    description:
      'African Institute for Environmental Research and Geospatial Technology (AIERGT) is a consultancy and training organisation dedicated to providing environmental research, geospatial-technology solutions and capacity-building across Africa.',
    image: '/aiergt.png',
    live: 'https://aiergt.africa/',
    technologies: ["Next.js","TypeScript","Tailwind CSS","PostgreSQL","OpenAI"],
  },
  {
    title: 'LegalizeMe',
    category: 'Services',
    description:
      'A legal AI platform build with Next.js and TypeScript. It provides legal resources to users through a user-friendly website. It also has a chatbot that can answer legal questions.',
    image: '/legalize.jpeg',
    live: 'https://www.legalizeme.co.ke/',
    technologies: ["Next.js","TypeScript","Tailwind CSS","Django","PostgreSQL","OpenAI"],
  },
  {
    title: 'Maxon Computers',
    category: 'E-Commerce',
    description:
      'Premium technology retailer showcasing the latest computers, laptops, and accessories with a seamless shopping experience.',
    image: '/maxon.png',
    live: 'https://www.maxoncomputers.co.ke/',
    technologies: ["Next.js","Payment Gateway","Node.js","Tailwind CSS","FastAPI"],
  },
  {
    title: 'Artemis Health Networks',
    category: 'Healthcare',
    description:
      'Artemis Health Network is a premier consulting firm dedicated to strengthening health systems across Africa through data-driven policies and sustainable financing.',
    image: '/arthealth.png',
    live: 'https://www.artemishealthnetworks.org/',
    technologies: ["Next.js","Node.js","Tailwind CSS"],
  },
  {
    title: 'Uphome Funeral Home',
    category: 'Services',
    description:
      'Dedicated funeral service provider rooted in empathy and care, committed to upholding the highest standards of funeral support with dignity and compassion.',
    image: '/uphomes.jpeg',
    live: 'https://www.uphomesfuneral.co.ke/',
    technologies: ["Next.js","Node.js","Tailwind CSS"],
  },
  {
    title: 'Ume Funeral Home',
    category: 'Services',
    description:
      'Ume Funeral Home is a family-owned business that has been providing funeral services to the community for over 20 years. We are committed to providing dignified and compassionate funeral services to families in their time of need.',
    image: '/umehome.png',
    live: 'https://www.umefuneralhome.co.ke/',
    technologies: ["Next.js","Node.js","Tailwind CSS"],
  },
  {
    title: 'Artemis Outsourcing Limited',
    category: 'Services',
    description:
      'Artemis Outsourcing Limited is a regional-focused multi-disciplinary Consulting firm providing technical assistance in Human resource management, Talent acquisition, Training and staff development, capacity building, Fund management, Project management and Research.',
    image: '/artoutsourcing.png',
    live: 'https://www.artemisltd.co.ke/',
    technologies: ["Next.js","Node.js","Tailwind CSS"],
  },
  {
    title: 'Menengai Farmers Limited',
    category: 'Services',
    description:
      'Menengai Farmers Limited is a Kenyan agricultural company that specializes in the production and sale of high-quality agricultural products. We are committed to providing our customers with the best possible products and services.',
    image: '/menengai.png',
    live: 'https://menengaifarmersltd.co.ke/',
    technologies: ["Next.js","Node.js","Tailwind CSS"],
  },
  {
    title: 'Techbite Ventures',
    category: 'Services',
    description:
      'Techbite Ventures is a software development agency based in Nairobi, Kenya. We build digital products that drive growth, combining technical excellence with business insight to create solutions that deliver real results.',
    image: '/techbite.jpeg',
    live: 'https://www.techbiteventures.com/',
    technologies: ["Next.js","TypeScript","Tailwind CSS"],
  },
  {
    title: 'Grahad Ventures Limited',
    category: 'Construction',
    description:
      'A construction and hardware supplies company website built with Next.js and TypeScript. It provides a seamless experience for users to buy construction and hardware supplies.',
    image: '/grahad.png',
    live: 'https://www.grahadventures.co.ke/',
    technologies: ["Next.js","Golang","PostgreSQL","Tailwind CSS"],
  },
  {
    title: 'House of Banta',
    category: 'E-Commerce',
    description:
      'House of Banta is a contemporary fashion and lifestyle brand specializing in apparel, bags, and everyday essentials designed for modern, style-conscious individuals.',
    image: '/banta.png',
    live: 'https://houseofbanta.vercel.app/',
    technologies: ["Next.js","TypeScript","Tailwind CSS"],
  },
  {
    title: "Elsie's Crochet Studio",
    category: 'E-Commerce',
    description:
      'Handcrafted crochet pieces brought to life through a warm, story-driven online experience — from cozy blankets to elegant home décor, each stitch crafted with care.',
    image: '/elsies.png',
    live: 'https://www.elsiescrochet.com/',
    technologies: ["Next.js","TypeScript","Tailwind CSS"],
  },
  {
    title: 'Biteplay',
    category: 'Other',
    description:
      'Biteplay is a movie streaming platform that offers a wide range of movies and TV shows, with a user-friendly interface for searching, watching, and sharing content.',
    image: '/biteplay.png',
    live: 'https://bite-play.vercel.app/',
    technologies: ["React","TypeScript","Tailwind CSS","Framer Motion","PostgreSQL"],
  },
  {
    title: "Chrispin Oguna's Portfolio",
    category: 'Other',
    description:
      'A portfolio website for an ICT instructor, showcasing his skills, projects, and experiences in the tech industry. The platform aims to provide a comprehensive overview of his work and expertise to potential clients and employers.',
    image: '/chris.png',
    live: 'https://chrispinoguna.vercel.app/',
    technologies: ["Next.js","TypeScript","Tailwind CSS","Framer Motion"],
  },
  {
    title: "Mary M'Mukindia's Portfolio",
    category: 'Other',
    description:
      "Mary M'Mukindia is a catalyst for leadership transformation. She believes in the power of clarity, conviction, and bold leadership to create lasting impact in business and society.",
    image: '/mary.png',
    live: 'https://mary-mmukindia-coaching.vercel.app/',
    technologies: ["Next.js","TypeScript","Tailwind CSS","Framer Motion"],
  },
]

export const pullQuote =
  'Good software reads like a well-edited page — every element earns its place, and nothing shouts for attention.';

export const certifications = [
  {
    id: 'alx-backend',
    image: '/alx.png',
    title: 'ALX Software Engineering Back-End',
    description:
      'Completed a 12-month intensive software engineering program at ALX Africa, focusing on 9 months of foundational learning and 3 months of specialization. Graduated on 26th July 2024.',
    date: 'July 2024',
    category: 'Software Engineering',
  },
  {
    id: 'moringa',
    image: '/moringa.jpg',
    title: 'Moringa Full-Stack Software Engineering',
    description:
      'Graduated from a rigorous 6-month Full Stack software engineering program at Moringa School, gaining comprehensive skills in both front-end and back-end development. Graduated on 2nd August 2024.',
    date: 'August 2024',
    category: 'Full-Stack Development',
  },
  {
    id: 'ai-essentials',
    image: '/aiessentials.png',
    title: 'AI Career Essentials',
    description:
      'Completed the AI Career Essentials course by deeplearning.ai, gaining foundational knowledge in AI, machine learning, deep learning, and natural language processing. Completed 5th November 2024.',
    date: 'November 2024',
    category: 'Artificial Intelligence',
  },
  {
    id: 'alx-professional',
    image: '/alxprofessional.png',
    title: 'ALX Professional Foundations',
    description:
      'Completed the ALX Professional Foundations program, equipping learners with the skills and knowledge necessary to thrive in the tech industry. Completed 15th April 2025.',
    date: 'April 2025',
    category: 'Professional Development',
  },
  {
    id: 'gig-startup',
    image: '/gig.png',
    title: 'ALX Gig-at-a-Startup',
    description:
      'Participated in the ALX Gig-at-a-Startup program, working on a real-world project for a startup in the legal industry. Completed 20th November 2024.',
    date: 'November 2024',
    category: 'Real-World Project',
  },
  {
    id: 'huawei-competition',
    image: '/bronze.jpg',
    title: 'Huawei World Skills Competition',
    description:
      'Participated in the Huawei World Skills Competition under IT Software Solutions for Business, winning a bronze medal for Multimedia University of Kenya. Held in Nairobi, September 2024.',
    date: 'September 2024',
    category: 'Competition Winner',
  },
  {
    id: 'portfolio-hackathon',
    image: '/plphackathon.jpg',
    title: 'Personal Portfolio Hackathon',
    description:
      'Participated in the August Cohort Hackathon on September 9th, 2024, building dynamic personal portfolio websites to showcase web development skills, projects, and passions.',
    date: 'September 2024',
    category: 'Hackathon',
  },
  {
    id: 'mozilla',
    image: '/mozilla.png',
    title: 'Mozilla Web Literacy Foundational Course',
    description:
      'Participated in a foundational web literacy workshop conducted by Mozilla at Moringa School, enhancing skills in web technologies and digital literacy.',
    date: 'September 2024',
    category: 'Upskilling',
  },
]

export const certificationStats = [
  { value: '8', label: 'Certifications and still learning' },
  { value: '12', label: 'Months training + continuous improvement' },
  { value: '3+', label: 'Institutions' },
  { value: '1', label: 'Competition medal' },
]
