import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const initialNotifications = [
  {
    id: 1,
    user: "don aime",
    action: "two credits remain",
    timestamp: "15 minutes ago",
    unread: true,
  },
]

export const quizhistory = [
  {
    id: "1",
    date: "25, Gashy, 2025",
    marks: "17/20",
    time: "18",
    status: "Watsinze",
  },
  {
    id: "2",
    date: "25, Gashy, 2025",
    marks: "17/20",
    time: "18",
    status: "Watsinze",
  },
  {
    id: "3",
    date: "25, Gashy, 2025",
    marks: "17/20",
    time: "18",
    status: "Watsinze",
  },
  {
    id: "4",
    date: "25, Gashy, 2025",
    marks: "17/20",
    time: "18",
    status: "Watsinze",
  },
  {
    id: "5",
    date: "25, Gashy, 2025",
    marks: "17/20",
    time: "18",
    status: "Watsinze",
  },
];

interface Question {
  question: string | { image: string };
  options: { text: string; image?: string }[];
  answer: string;
  text?: string;
};

const question = {
  text: "Ni iki ugomba gukora iyo ugeze kuri iki cyapa ? ",
  question: { image: "/no-entry.png" },
  options: [
    { text: "Ntugomba kwinjira" },
    { text: "Ugomba guhagarara" },
    { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dignissimos excepturi possimus ratione totam nam modi, corrupti voluptatum dolor? Rerum quod iusto unde neque." },
    { text: "Uburyo bumwe bwo kugenda" },
  ],
  answer: "Ntugomba kwinjira",
}

export const questions: Question[] = [
  question,
  question,
  question,
  question,
  question,
  question,
  question,
  question,
  question,
  question,
  question,
  question,
  question,
  question,
  question,
  question,
  question,
  question,
  question,
];