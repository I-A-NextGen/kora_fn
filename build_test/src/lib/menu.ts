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
    label: "Exams",
    url: "exams",
    icon: LuNotebookPen,
  },
  {
    role: "admin",
    label: "Clients",
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
    label: "Payment",
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
