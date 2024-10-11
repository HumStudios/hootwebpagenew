import { link } from "fs";

export const words = [
  "Fantastic",
  "Superb",
  "Wonderful",
  "Marvelous",
  "Stellar",
  "Epic",
  "Groovy",
  "Phenomenal",
  "Badass",
  "Sweet",
  "Wicked",
  "Lit",
  "Dope",
  "Mind-blowing",
  "Thrilling",
  "Exquisite",
];
export const navItems = [
  { name: "Featured", link: "#featured" },
  { name: "Services", link: "#services" },
  { name: "Contact", link: "#contact" },
  { name: "About", link: "#about" },
  // { name: "Nest", link: "/services/nest" },
];

export const services = [
  {
    key: 4,
    image: "/game.jpg",
    link: "",
    title: "Game Development",
    description:
      "Hum Studios is dedicated to creating immersive gaming experiences. we are passionate about bringing unique stories to life through innovative game design and development.",
  },
  {
    key: 1,
    image: "/dev.jpeg",
    link: "/services/software",
    title: "Software Development",
    description:
      "Hum Studios helps businesses bring their ideas to life with custom software development. We specialize in building user-friendly and scalable solutions tailored to your specific needs.",
  },

  {
    key: 3,

    image: "/dg.jpeg",
    link: "/services/digital",
    title: "Digital Marketing ",
    description:
      "Hum Studios design team creates compelling graphics and digital marketing strategies, from logos and brochures to social media,and marketing campaigns,elevating your brand.",
  },
  {
    key: 2,
    image: "/mangrove.png",
    link: "/services/mangrove",
    title: "Mangrove",
    description:
      "Stay on top of finances with Mangrove. Our innovative billing software simplifies invoice creation, automates payments, and provides valuable business insights. Currently under development.",
  },
];
export const technology_description =
  "  At Hum Studios, we craft software solutions that empower your business. We leverage cutting-edge technologies across Android, iOS, web, and desktop platforms to deliver custom applications that meet your specific needs.  Our expertise extends beyond coding, encompassing the visual language of your brand. We offer integrated graphic design services, ensuring a seamless user experience across all touchpoints.";

export const tech = [
  { image: "./android.png", title: "Android", key: 1 },
  { image: "./apple.png", title: "Ios", key: 2 },
  { image: "./web.png", title: "Web", key: 3 },
  { image: "./desktop.png", title: "Desktop", key: 4 },
];

export const contact_us =
  "At Hum Studios, we provide innovative solutions for software challenges. Our expert team specializes in various areas of software development to deliver exceptional results. Whether you need custom software, consulting, or other services, we're here to help. Contact us today to discuss how we can assist you.";

export const contactDetails = [
  {
    key: 1,
    name: "Phone",
    data: "08075164393, 09061143644",
  },
  {
    key: 2,
    name: "Email",
    data: "humstudios.in@gmail.com",
  },
];

export const about =
  "At Hum Studio, we transform ideas into innovative software solutions. Our passionate team empowers businesses with cutting-edge technology, driving growth and efficiency. Join us on our journey to unlock new possibilities and make a difference, together.";
export const socialMedia = [
  {
    key: 1,

    link: "https://x.com/humstudios_in?t=NgMDik8rW3Fw3WF2rAPZCw&s=09",
    img: "/twitter.png",
  },
  {
    key: 2,
    link: "https://github.com/HumStudios",
    img: "/github.png",
  },
  {
    key: 3,
    link: "https://www.linkedin.com/in/siva-sankar-1b41091b8/",
    img: "/linkedin.png",
  },
  {
    key: 4,
    link: "https://www.instagram.com/humstudios.in/profilecard/?igsh=dDg0Ym82aHRwcG82 ",
    img: "/instagram.png",
  },
  {
    key: 5,
    link: "https://www.facebook.com/share/KsmG88ApCCpP6T5f/?mibextid=qi2Omg",
    img: "/facebook.png",
  },
  {
    key: 6,
    link: "https://youtube.com/@humstudios_in?si=cS99iPTFnb-J0msh",
    img: "/youtube.png",
  },
  {
    key: 7,
    link: "https://t.me/hoot_dev",
    img: "/telegram.png",
  },
];
export const courseForm =
  "https://docs.google.com/forms/d/e/1FAIpQLSc6KyCWPAkkr0GIHWc1ifNOKXzgZbsg8zHej-wVFPfLIjbTTQ/viewform";

export const nest = [
  {
    key: 1,
    name: "auth",
    link: "/nest/authentication",
  },
  {
    key: 2,
    name: "login",
    link: "/services/nest/authentication/login",
  },
  {
    key: 3,
    name: "register",
    link: "/services/nest/authentication/register",
  },
  {
    key: 4,
    name: "nest",
    link: "/services/nest/home",
  },
  {
    key: 5,
    name: "course",
    link: "/services/nest/course",
  },
  {
    key: 6,
    name: "payment",
    link: "/services/nest/payment",
  },
];
export const homeLink = "/";
export const cloudFront = "https://d2s7k4rchcbp2t.cloudfront.net/";
export const people = [
  {
    id: 0,
    name: "Siva Sankar",
    designation: "Hoot Developement",
    image: "/siva.jpg",
    link: "",
  },
  {
    id: 1,
    name: "SreeLakshmi",
    designation: "Hoot Developement",
    image: "/malu.png",
    link: "",
  },
  {
    id: 2,
    name: "Arun Nair",
    designation: "Hoot Digital Marketing",
    image: "/arun.jpg",
    link: "",
  },
  {
    id: 3,
    name: "Aromal R B",
    designation: "Hoot Digital Marketing",
    image: "/aromal_rb.jpg",
    link: "",
  },
  {
    id: 4,
    name: "Abhinav",
    designation: "Hoot Designing",
    image: "/abhinav.jpg",
    link: "",
  },
  {
    id: 5,
    name: "Rahul",
    designation: "Hoot Digital Marketing",
    image: "/rahul.jpg",
    link: "",
  },
  {
    id: 6,
    name: "Arjun",
    designation: "Hoot Digital Marketing",
    image: "/arjun.jpg",
    link: "",
  },
];

export const featured = [
  {
    key: 1,
    heading: "NEST",
    subHeading: "Coding Boot Camp",
    link: "/services/nest",
    image: "/course.jpeg",
  },
];

export const testimonials = [
  {
    id: 2,
    name: "Steve Jobs",
    title: "",
    quote: "Stay Hungry. <br /> Stay Foolish",
  },
  {
    id: 3,
    name: "Albert Einstein",
    title: "Physicist",
    quote: "Imagination is more important than knowledge.",
  },
  {
    id: 4,
    name: "Nelson Mandela",
    title: "Former President of South Africa",
    quote:
      "Education is the most powerful weapon which you can use to change the world.",
  },
  {
    id: 5,
    name: "Mahatma Gandhi",
    title: "Leader of Indian Independence Movement",
    quote: "Be the change you wish to see in the world.",
  },
  {
    id: 6,
    name: "Winston Churchill",
    title: "Former Prime Minister of the United Kingdom",
    quote: "Never give up, never surrender.",
  },
  {
    id: 7,
    name: "Mark Zuckerberg",
    title: "Co-founder and CEO of Meta Platforms",
    quote: "The most important thing is to hire good people.",
  },
  {
    id: 8,
    name: "Elon Musk",
    title: "CEO of Tesla, SpaceX, and X",
    quote: "We need to be bold and innovative to solve the world's problems.",
  },
  {
    id: 9,
    name: "Oprah Winfrey",
    title: "Talk Show Host and Businesswoman",
    quote: "You are what you believe you are.",
  },
  {
    id: 10,
    name: "J.K. Rowling",
    title: "Author of the Harry Potter series",
    quote:
      "It is our choices, Harry, that show what we truly are, far more than our abilities.",
  },
  {
    id: 11,
    name: "Walt Disney",
    title: "Co-founder of The Walt Disney Company",
    quote:
      "The greatest thing in the world is to do something that people say cannot be done.",
  },
  {
    id: 12,
    name: "Martin Luther King Jr.",
    title: "American Civil Rights Leader",
    quote:
      "I have a dream that one day my four little children will live in a nation where they will not be judged by the color of their skin but by the quote of their character.",
  },
  {
    id: 13,
    name: "Mother Teresa",
    title: "Roman Catholic nun and missionary",
    quote: "If you can't feed a hundred people, then feed one.",
  },
  {
    id: 14,
    name: "Abraham Lincoln",
    title: "16th President of the United States",
    quote: "The best way to predict the future is to create it.",
  },
  {
    id: 15,
    name: "Bill Gates",
    title: "Co-founder of Microsoft",
    quote:
      "Success is not about how much you make, but about the difference you make in people's lives.",
  },
  {
    id: 16,
    name: "Stephen Hawking",
    title: "Theoretical Physicist",
    quote:
      "Look up at the stars, and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.",
  },
  {
    id: 17,
    name: "Maya Angelou",
    title: "Poet, Author, and Civil Rights Activist",
    quote:
      "I've learned that people forget what you said, people forget what you did, but people will never forget how you made them feel.",
  },
  {
    id: 18,
    name: "Malala Yousafzai",
    title: "Pakistani Activist for Female Education",
    quote: "One book can change one life, a library can change one nation.",
  },
  {
    id: 19,
    name: "Dalai Lama",
    title: "Spiritual Leader of Tibet",
    quote: "Be kind whenever possible. It is always possible.",
  },
  {
    id: 20,
    name: "Leonardo da Vinci",
    title: "Artist, Scientist, and Inventor",
    quote: "The greatest danger is not in taking a risk, but in taking none.",
  },
  {
    id: 21,
    name: "Marie Curie",
    title: "Physicist and Chemist",
    quote:
      "Nothing in life is to be feared, it is to be understood. Now is the time to understand more, so that we may fear less.",
  },
];
