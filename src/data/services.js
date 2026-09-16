import {
  HiOutlineGlobeAlt,
  HiOutlineCamera,
  HiOutlineBolt,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional websites that explain your business, showcase your services and make it easy for customers to contact you.",
    tagLabel: "Tailored for",
    tags: ["Company websites", "Service businesses", "Consultants", "Agencies"],
    icon: HiOutlineGlobeAlt,
    accent: "#19B5C5",
  },
  {
    number: "02",
    title: "Portfolio Websites",
    description:
      "Professional online portfolios that showcase your work, projects and experience in a way that helps potential clients trust your work.",
    tagLabel: "Tailored for",
    tags: ["Photographers", "Designers", "Architects", "Freelancers"],
    icon: HiOutlineCamera,
    accent: "#4FAF7B",
  },
  {
    number: "03",
    title: "Landing Pages",
    description:
      "Focused pages designed for campaigns, advertising, lead generation, enquiries or direct bookings.",
    tagLabel: "Key features",
    tags: ["Conversion-optimized", "Sub-second load times", "Crisp messaging hierarchy"],
    icon: HiOutlineBolt,
    accent: "#F59E0B",
  },
  {
    number: "04",
    title: "Website Updates & Refresh",
    description:
      "Improve an existing website with a cleaner design, better mobile experience, faster performance and clearer content.",
    tagLabel: "Key features",
    tags: ["Speed optimization", "Responsive fixes", "Visual modernisation"],
    icon: HiOutlineWrenchScrewdriver,
    accent: "#8B5CF6",
  },
];

export default services;
