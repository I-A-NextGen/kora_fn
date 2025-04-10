import {
  CircleDollarSign,
  CircleHelp,
  Globe,
  LayoutDashboard,
  LogOut,
} from "lucide-react";
import { LuNotebookPen } from "react-icons/lu";
import { TbTransactionDollar } from "react-icons/tb";
import { PiUsersThreeBold } from "react-icons/pi";

export const items = [
  {
    role: "*",
    label: "Dashboard",
    url: "",
    icon: LayoutDashboard,
  },
  {
    role: "*",
    label: "Ibizamini",
    url: "exams",
    icon: LuNotebookPen,
  },
  {
    role: "admin",
    label: "Abakiliya",
    url: "clients",
    icon: PiUsersThreeBold,
  },
  {
    role: "admin",
    label: "Transactions",
    url: "transactions",
    icon: TbTransactionDollar,
  },
  {
    role: "client",
    label: "Kwishyura",
    url: "payment",
    icon: CircleDollarSign,
  },
];

export const itemsfooter = [
  {
    label: "FAQ ",
    url: "#",
    icon: CircleHelp,
  },
];
