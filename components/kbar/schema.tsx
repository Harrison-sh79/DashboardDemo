import { Action } from "kbar";
// import { useRouter } from "next/navigation";
import {
  FaHome,
  FaGithub,
  FaPhoneAlt,
  FaTwitter,
  FaBook,
  FaSearch,
} from "react-icons/fa";
import { PiLinkLight } from "react-icons/pi";
import colors from "tailwindcss/colors";

// redirect the user
// const router = useRouter();

// define the Action of KBar
export const actions: Action[] = [
  {
    id: "homeAction",
    name: "Home",
    shortcut: ["h"],
    keywords: "back",
    section: "Links",
    //   perform: () => router.push("/"),
    perform: () => (window.location.pathname = ""),
    icon: <PiLinkLight className="w-4 h-4 mx-3" color={colors.violet[800]}/>,
    subtitle: "Go back to Home Page",
  },
  {
    id: "dashboardAction",
    name: "Dashboard",
    shortcut: ["d"],
    keywords: "dashboard",
    section: "Links",
    icon: <PiLinkLight className="w-4 h-4 mx-3" color={colors.violet[800]} />,
    perform: () => (window.location.pathname = "dashboard"),
    subtitle: "Go to Dashboard Page",
  },
  {
    id: "product",
    name: "Campaigns",
    shortcut: ["c", "p"],
    keywords: "serach products",
    section: "Links",
    icon: <PiLinkLight className="w-4 h-4 mx-3" color={colors.violet[800]} />,
    perform: () => (window.location.pathname = "campaigns"),
    subtitle: "Go to Campaigns Page",
  },
  {
    id: "contactAction",
    name: "Contact",
    shortcut: ["s"],
    keywords: "email hello vmax",
    section: "Customer Services",
    icon: <PiLinkLight className="w-4 h-4 mx-3" color={colors.violet[800]} />,
    perform: () => window.open("harrison.sh@v-max.ca", "_blank"),
    subtitle: "Customer Service by V-max",
  },
  {
    id: "youtubeAction",
    name: "Youtube",
    shortcut: ["y", "t"],
    keywords: "social contact dm",
    section: "Channels",
    icon: <PiLinkLight className="w-4 h-4 mx-3" color={colors.violet[800]} />,
    perform: () => window.open("https://twitter.com/v-max", "_blank"),
    subtitle: "Subscribe to our channel",
  },
  {
    id: "githubAction",
    name: "Github",
    shortcut: ["g"],
    keywords: "sourcecode",
    section: "Channels",
    icon: <PiLinkLight className="w-4 h-4 mx-3" color={colors.violet[800]}/>,
    perform: () => window.open("https://github.com/v-max", "_blank"),
    subtitle: "API interface globally",
  },
];
