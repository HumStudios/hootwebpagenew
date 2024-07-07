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
  { name: "Services", link: "#services" },
  { name: "Technologies", link: "#technologies" },
  { name: "Contact", link: "#contact" },
  { name: "About", link: "#about" },
  { name: "Hoot", link: "#home" },
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
   key:2,
    image:"/mangrove.png",
    link: "/services/mangrove",
    title: "Mangrove",
    description:"Stay on top of finances with Mangrove. Our innovative billing software simplifies invoice creation, automates payments, and provides valuable business insights. Currently under development."
    
  },
  {key:3,
 
    image:"/dg.jpeg",
    link: "/services/digital",
    title: "Digital Marketing ",
    description:
      "Hoot's design team creates compelling graphics and digital marketing strategies, from logos and brochures to social media,and marketing campaigns,elevating your brand.",
  },
  {
  key:4,
    image:"/pc.jpeg",
    link: "/services/courses",
    title: "Coding Bootcamp",
    description:
      "Hoot offers programs to master in-demand programming languages. For beginners or advanced learners, our courses empower you to achieve coding goals and expand your skillset.",
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
    
    id: 1,
    link:"https://x.com/hoot_dev?s=09",
    img: "/twitter.png",
  },
  {
    
    id: 2,
    link:"https://github.com/Hoot-io-dev",
    img: "/github.png",
  },
  {
    id: 3,
    link:"https://www.linkedin.com/in/siva-sankar-1b41091b8/",
    img: "/linkedin.png",
  },
  {
    
    id: 4,
    link:"https://www.instagram.com/hoot_dev?utm_source=qr&igsh=dDg0Ym82aHRwcG82",
    img: "/instagram.png",
  },
  {
    
    id: 5,
    link:"https://www.facebook.com/profile.php?id=61561787891193&mibextid=qi2Omg&rdid=rZGiaelrvYGjrThc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FVwMHn5JbUsynt5aR%2F%3Fmibextid%3Dqi2Omg",
    img: "/facebook.png",
  },
  {
    
    id: 5,
    link:"https://www.youtube.com/@Hoot_dev",
    img: "/youtube.png",
  },
  {
    
    id: 6,
    link:"https://t.me/hoot_dev",
    img: "/telegram.png",
  },
];
export const courseForm ="https://docs.google.com/forms/d/e/1FAIpQLSc6KyCWPAkkr0GIHWc1ifNOKXzgZbsg8zHej-wVFPfLIjbTTQ/viewform";