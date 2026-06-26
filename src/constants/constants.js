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
  socialpulse,
  insurancePredictor,
  smartcart,
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
    name: "SocialPulse — Brand Intelligence Platform",
    statBadge: "94% SENTIMENT ACCURACY",
    description:
      "An end-to-end ML platform analyzing real customer sentiment across 10 major Indian startups, built entirely from live-scraped Google Play Store reviews — combining sentiment classification, brand clustering, and automated crisis detection in one dashboard.",
    features: [
      "Scraped and cleaned 500K+ live reviews down to 475,220 records across 10 brands (Zomato, Swiggy, Blinkit, CRED, Zepto, Meesho, PhonePe, Paytm, Ola, Uber).",
      "Sentiment classifier (Naive Bayes + TF-IDF) reaching 94% accuracy on held-out test data.",
      "K-Means brand clustering (k=3, Elbow Method) grouping brands into Top Performers, Middle Ground, and Struggling, visualized via PCA.",
      "Isolation Forest anomaly detection flags abnormal negative-sentiment spikes per brand in near real-time.",
    ],
    tags: [
      { name: "NLP", color: "blue-text-gradient" },
      { name: "Scikit-learn", color: "green-text-gradient" },
      { name: "Clustering", color: "pink-text-gradient" },
      { name: "Anomaly Detection", color: "orange-text-gradient" },
      { name: "Streamlit", color: "purple-text-gradient" },
    ],
    image: socialpulse,
    source_code_link: "https://github.com/Bhoomi-1401/socialpulse-brand-intelligence",
    live_link: "https://socialpulse-bhoomi.streamlit.app/",
  },
  {
    name: "CreditWise Loan System",
    statBadge: "LIVE DEMO",
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
    name: "SmartCart — Customer Segmentation",
    statBadge: "4 SEGMENTS · 2,240 CUSTOMERS",
    description:
      "Segmented 2,240 retail customers into 4 actionable behavioral groups using KMeans and Agglomerative Clustering, with PCA-based dimensionality reduction to surface high-value customer insights.",
    features: [
      "Unsupervised clustering of 2,240 customers into 4 behavioral segments (High Spenders, Frequent Bargain Shoppers, Occasional Buyers, Low Engagement).",
      "Compared KMeans and Agglomerative Clustering to validate segment stability.",
      "PCA dimensionality reduction for 2D cluster visualization.",
      "Segment profiles translated into actionable retail/marketing insights.",
    ],
    tags: [
      { name: "KMeans", color: "blue-text-gradient" },
      { name: "PCA", color: "green-text-gradient" },
      { name: "Scikit-learn", color: "pink-text-gradient" },
      { name: "Agglomerative", color: "orange-text-gradient" },
    ],
    image: smartcart,
    source_code_link: "https://github.com/Bhoomi-1401/Smart-cart-customer-clustering",
    live_link: "https://github.com/Bhoomi-1401/Smart-cart-customer-clustering",
  },
  {
    name: "Insurance Premium Predictor",
    statBadge: "91.04% BEST MODEL ACCURACY",
    description:
      "A classification system that predicts whether a customer's insurance premium category will be Low, Medium, or High based on health and lifestyle data, benchmarking 13 different ML algorithms.",
    features: [
      "Benchmarked 13 classification algorithms (SVM, Stacking, Gradient Boosting, XGBoost, and more) — SVM and Stacking led at 91.04% accuracy.",
      "Engineered a smoker_obese interaction feature combining smoking status and BMI > 30 to sharpen risk separation.",
      "EDA surfaced that smokers pay roughly 4x more on average than non-smokers.",
      "Deployed as an interactive Streamlit prediction app.",
    ],
    tags: [
      { name: "XGBoost", color: "blue-text-gradient" },
      { name: "Feature Engineering", color: "green-text-gradient" },
      { name: "Classification", color: "pink-text-gradient" },
      { name: "Streamlit", color: "orange-text-gradient" },
    ],
    image: insurancePredictor,
    source_code_link: "https://github.com/Bhoomi-1401/insurance-premium-predictor",
    live_link: "https://bhoomi-insurance-predictor.streamlit.app/",
  },
  {
    name: "IPL Business Intelligence Analysis",
    statBadge: "POWER BI DASHBOARD",
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