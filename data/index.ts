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
  "Exquisite"
  ];
export const navItems = [
  { name: "Featured", link: "#featured" },
  { name: "Services", link: "#services" },
 
  { name: "Contact", link: "#contact" },
  { name: "About", link: "#about" },
  { name: "Nest", link: "/services/nest" },

];

export const services = [
  {
   key:1,
    image:"/dev.jpeg",
    link: "/services/software",
    title: "Software Development",
    description:
      "Hoot helps businesses bring their ideas to life with custom software development. We specialize in building user-friendly and scalable solutions tailored to your specific needs.",
  },
  {
    key:4,
      image:"/pc.jpeg",
      link: "/services/nest",
      title: "Nest",
      description:
        "Hoot offers programs to master in-demand programming languages. For beginners or advanced learners, our courses empower you to achieve coding goals and expand your skillset.",
    },
  
  {key:3,
 
    image:"/dg.jpeg",
    link: "/services/digital",
    title: "Digital Marketing ",
    description:
      "Hoot's design team creates compelling graphics and digital marketing strategies, from logos and brochures to social media,and marketing campaigns,elevating your brand.",
  },
  {
    key:2,
     image:"/mangrove.png",
     link: "/services/mangrove",
     title: "Mangrove",
     description:"Stay on top of finances with Mangrove. Our innovative billing software simplifies invoice creation, automates payments, and provides valuable business insights. Currently under development."
     
   },
];
export const technology_description =
  "  At Hoot, we craft software solutions that empower your business. We leverage cutting-edge technologies across Android, iOS, web, and desktop platforms to deliver custom applications that meet your specific needs.  Our expertise extends beyond coding, encompassing the visual language of your brand. We offer integrated graphic design services, ensuring a seamless user experience across all touchpoints.";

export const tech = [
  { image: "./android.png", title: "Android" ,key:1},
  { image: "./apple.png", title: "Ios",key:2 },
  { image: "./web.png", title: "Web",key:3 },
  { image: "./desktop.png", title: "Desktop",key:4 },
];

export const contact_us = "At Hoot, we provide innovative solutions for software challenges. Our expert team specializes in various areas of software development to deliver exceptional results. Whether you need custom software, consulting, or other services, we're here to help. Contact us today to discuss how we can assist you.";

export const contactDetails =[
    {  
        key:1,
        name:"Phone",
        data:"08075164393, 09061143644",
    },
    {
        key:2,
        name:"Email",
        data:"hoot.io.dev@gmail.com"
    }
];

export const about ="At Hoot, we transform ideas into innovative software solutions. Our passionate team empowers businesses with cutting-edge technology, driving growth and efficiency. Join us on our journey to unlock new possibilities and make a difference, together.";
export const socialMedia = [
  {
    key:1,
  
    link:"https://x.com/hoot_dev?s=09",
    img: "/twitter.png",
  },
  {
    
    key: 2,
    link:"https://github.com/Hoot-io-dev",
    img: "/github.png",
  },
  {
    key: 3,
    link:"https://www.linkedin.com/in/siva-sankar-1b41091b8/",
    img: "/linkedin.png",
  },
  {
    
    key: 4,
    link:"https://www.instagram.com/hoot_dev?utm_source=qr&igsh=dDg0Ym82aHRwcG82",
    img: "/instagram.png",
  },
  {
    
    key: 5,
    link:"https://www.facebook.com/profile.php?id=61561787891193&mibextid=qi2Omg&rdid=rZGiaelrvYGjrThc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FVwMHn5JbUsynt5aR%2F%3Fmibextid%3Dqi2Omg",
    img: "/facebook.png",
  },
  {
    
    key: 6,
    link:"https://www.youtube.com/@Hoot_dev",
    img: "/youtube.png",
  },
  {
    
    key: 7,
    link:"https://t.me/hoot_dev",
    img: "/telegram.png",
  },
];
export const courseForm ="https://docs.google.com/forms/d/e/1FAIpQLSc6KyCWPAkkr0GIHWc1ifNOKXzgZbsg8zHej-wVFPfLIjbTTQ/viewform";


export const nest = [
  {
    key:1,
    name:"auth",
    link:"/nest/authentication",
   
  },
  {
    key:2,
    name :"login",
    link:"/services/nest/authentication/login"
  },
  {
    key:3,
    name :"register",
    link:"/services/nest/authentication/register"
  },
  {
    key:3,
    name:"nest",
    link:"/services/nest/home"
  }
];
export const people = [
  {
    id: 1,
    name: "Siva Sankar",
    designation: "Hoot Developement",
    image:
      "/siva.jpg",
  },
  {
    id: 2,
    name: "Arun Nair",
    designation: "Hoot Digital Marketing",
    image:
      "/arun.jpg",
  },
  {
    id: 3,
    name: "Aromal R B",
    designation: "Hoot Digital Marketing",
    image:
      "/aromal_rb.jpg",
  },
  {
    id: 4,
    name: "Abhinav",
    designation: "Hoot Designing",
    image:
      "/abhinav.jpg",
  },
  {
    id: 5,
    name: "Rahul",
    designation: "Hoot Digital Marketing",
    image:
      "/rahul.jpg",
  },
  {
    id: 6,
    name: "Arjun",
    designation: "Hoot Digital Marketing",
    image:
      "/arjun.jpg",
  },
];

export const featured =[
  {
    key:1,
    heading:"NEST",
    subHeading:"Coding Boot Camp",
    link:"/services/nest",
    image:"/course.jpeg"
  }
];
 