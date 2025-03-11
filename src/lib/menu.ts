import {
  Calendar,
  CircleDollarSign,
  CircleHelp,
  Globe,
  History,
  Home,
  Inbox,
  LayoutDashboard,
  LogOut,
  Play,
  Search,
  Settings,
} from "lucide-react";
import { LuNotebookPen } from "react-icons/lu";

export const items = [
  {
    title: "Dashboard",
    url: "../dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Imyitozo ",
    url: "/client/dashboard/quiz",
    icon: LuNotebookPen,
  },
  {
    title: "Ibyakozwe",
    url: "/client/dashboard/history",
    icon: History,
  },
  {
    title: "Ubwishyu",
    url: "/client/dashboard/payment",
    icon: CircleDollarSign,
  },
];

export const itemsfooter = [
  {
    title: "Ikinyarwanda",
    url: "",
    icon: Globe,
  },
  {
    title: "FAQ ",
    url: "",
    icon: CircleHelp,
  },
  {
    title: "Gusohoka",
    url: "",
    icon: LogOut,
  },
];
