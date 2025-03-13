import { Calendar, Globe, History, Home, Inbox, LayoutDashboard, LogOut, Play, Search, Settings } from "lucide-react";

export const items = [
    {
      title: "Dashboard",
      url: "../dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Imyitozo ",
      url: "/client/dashboard/quiz",
      icon: Settings,
    },
    {
      title: "Ibyakozwe",
      url: "/client/dashboard/history",
      icon: History,
    },
    {
      title: "Ubwishyu",
      url: "/client/dashboard/payment",
      icon: Play,
    },
  ]

  export const itemsfooter = [
    {
      title: "Ikinyarwanda",
      url: "",
      icon: Globe,
    },
    {
      title: "FAQ ",
      url: "",
      icon: Settings,
    },
    {
      title: "Gusohoka",
      url: "",
      icon: LogOut,
    }
  ]