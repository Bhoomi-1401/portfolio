import {
  mobile,
  backend,
  web,
  git,
  initialLetterLogo,
  python,
  pandas,
  numpy,
  mysql,
  sklearn,
  tensorflow,
  vscode,
  kaggle,
  github2,
  powerbi,
  excel,
  creditwise,
  ipl,
} from "../assets";

const initialLetterIcon = initialLetterLogo;
const remainingLetters = "hoomi";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "skills", title: "Skills" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "AI Engineer", icon: web },
  { title: "Data Analyst", icon: mobile },
  { title: "ML Developer", icon: backend },
];

const technologies = [
  { name: "Python", icon: python },
  { name: "SQL", icon: mysql },
  { name: "Pandas", icon: pandas },
  { name: "NumPy", icon: numpy },
  { name: "Scikit-learn", icon: sklearn },
  { name: "TensorFlow", icon: tensorflow },
  { name: "Power BI", icon: powerbi },
  { name: "Excel", icon: excel },
  { name: "Kaggle", icon: kaggle },
  { name: "GitHub", icon: github2 },
  { name: "VS Code", icon: vscode },
  { name: "Git", icon: git },
];

const projects = [
  {
    name: "CreditWise Loan System",
    description:
      "A machine learning web app that predicts loan approvals using classification algorithms with data preprocessing and feature engineering.",
    features: [
      "Loan approval prediction using ML classification algorithms.",
      "Data preprocessing and feature engineering pipeline.",
      "Interactive UI to input applicant details and get predictions.",
      "Model evaluation with accuracy metrics and visualizations.",
    ],
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Scikit-learn", color: "green-text-gradient" },
      { name: "Machine Learning", color: "pink-text-gradient" },
      { name: "Pandas", color: "orange-text-gradient" },
      { name: "EDA", color: "purple-text-gradient" },
    ],
    image: creditwise,
    source_code_link: "https://github.com/Bhoomi-1401/creditwise-loan-system",
    live_link: "https://github.com/Bhoomi-1401/creditwise-loan-system",
  },
  {
    name: "IPL Business Intelligence Analysis",
    description:
      "End-to-end IPL Performance Analytics and Forecasting Dashboard using Python and SQL for data processing and Power BI for interactive visualizations.",
    features: [
      "IPL match data analysis using Python and SQL.",
      "Interactive Power BI dashboard with performance metrics.",
      "Player and team performance forecasting.",
      "Data cleaning and transformation pipeline.",
    ],
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "SQL", color: "green-text-gradient" },
      { name: "Power BI", color: "pink-text-gradient" },
      { name: "Data Analysis", color: "orange-text-gradient" },
      { name: "Visualization", color: "purple-text-gradient" },
    ],
    image: ipl,
    source_code_link: "https://github.com/Bhoomi-1401/IPL-Business-Intelligence-Analysis",
    live_link: "https://github.com/Bhoomi-1401/IPL-Business-Intelligence-Analysis",
  },
];

const experiences = [
  {
    title: "AI Engineering Student",
    company_name: "SAGE University, Indore",
    icon: web,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "Pursuing B.Tech in Artificial Intelligence Engineering (3rd Year).",
      "Built ML projects including loan approval prediction and IPL analytics dashboard.",
      "Skilled in Python, SQL, Power BI, EDA, and Machine Learning.",
      "Actively seeking internship opportunities in Data Science and AI.",
    ],
  },
];

const testimonials = [];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  initialLetterIcon,
  remainingLetters,
};