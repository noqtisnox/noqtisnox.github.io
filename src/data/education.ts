import { type TimelineDotProps } from '@mui/lab';

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  details: string;
  color: TimelineDotProps['color']; 
}

export const eduData: EducationItem[] = [
  {
    school: "Lviv Polytechnic National University",
    degree: "Computer Science / Smart Systems",
    period: "2022 — Present",
    details: "Focusing on Data Mining, Smart Technologies, and advanced web architecture.",
    color: "primary"
  },
  {
    school: "Ukrainian Catholic University",
    degree: "Computer Science",
    period: "2022 — 2024",
    details: "Foundational work in Python, web-dev, and low-level ISA (RISC-V) projects.",
    color: "secondary"
  },
];