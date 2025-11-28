import { Project, SocialLink } from './types';

export const PROFILE = {
  name: "John Doe",
  title: "Senior Frontend Engineer",
  tagline: "building performant applications for the modern web.",
  shortBio: "A brief and engaging summary of my professional journey, highlighting key skills, significant experiences, and my current role. I focus on creating clean, efficient, and user-centric digital experiences, transforming complex problems into elegant, intuitive solutions.",
  interests: "Beyond the screen, I'm an avid hiker, always seeking new trails to conquer. This love for exploration mirrors my approach to technology—constantly seeking new knowledge. I also find creative release in landscape photography, capturing the beauty of the world around me.",
  philosophy: "I believe in the power of clean code and thoughtful design. My development philosophy is rooted in collaboration, continuous learning, and a commitment to quality. I strive to build not just functional products, but experiences that are a joy to use.",
  headshotHome: "https://lh3.googleusercontent.com/aida-public/AB6AXuC27y2I_GjMfygLAGvuGwlTO4EdBud0bDrOlXhb6e1IcaWeli-gXTLqRi7F6_7aYkdEunIdl2hD7VbhJrGY8YPRIfjPjWhDZl45gCxrBWQu7KbEcKUkdlJhg714UTw-SHDg9Ws2YWOzHNrVW2I_WhKrwHiHai9mqinqrvxqXPjMWyRs_PTpPxk-gsUJsX6wl9G77vi67v54NUBF6zGAFaCvX8c6gGDaAHHIPUSfD9LEmvj2gEwzJcVfwVCzV0hG0r1-rh8cZ0iq0vk5",
  headshotAbout: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKGByiu6MbQomnPCLih_-flNjXiOzz_r6kGJA9hjRUDHA7rt17zKcw7uHN1mehhSyIfeAVovNwlm0WFnHhaGM_2rOlwOtuDvXfUKE20rro3lCIOa7pWPNaz_MsZ6IC-Q3jSgkBnnpS4lOdMJ8lO2GCiMHECu80K0OuUIYY-W4YSzw-ewt8eFKgwot5Kods0IDGwM6cH35jXL4jeLqrK96V82poJ9EKJluaj_-R5X7b7WILCTAW8WsVVGMok64o5aByRSOwLracq0bW",
  email: "hello@developer.com",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "#", icon: "github" },
  { platform: "LinkedIn", url: "#", icon: "linkedin" },
  { platform: "Twitter", url: "#", icon: "twitter" },
];

export const PROJECTS: Project[] = [
  {
    id: "quantum-leap",
    title: "QuantumLeap",
    description: "A real-time data visualization platform for business intelligence and analytics.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrnu_Vb0LqbZTle-BkJ09z5gcK93VREqYpoWcFNKILFYvLx0RlhevRf7era4xBL9Z9vLK7_c98HbKp6bFnLw14iBsFFfhgPjfyltdcricqejpMw5BZSAGoajMqFMzQVSg2QhtfUHHTYex71OpWlIEEvpK1A7L5QyrvjavkjwYxFBXqcA33oHjlJczIgXNH7nPUhkKcblUmLHUwIVDRd0FIDNQU0QV5TM2bBHO6r8ic4vGLkTpsI4ZhjwnNygDPvLw9VWCfrsq9dBx6",
    tags: ["React", "Node.js", "D3.js", "PostgreSQL"],
    demoUrl: "#",
    codeUrl: "#",
    fullDescription: "An advanced platform for real-time data processing and visualization.",
    problemSolution: "In the rapidly evolving landscape of data science, businesses face a significant challenge: processing and analyzing vast amounts of data in real-time to derive actionable insights. Traditional analytics tools often fall short, struggling with latency, scalability, and the complexity of modern data streams.\n\nQuantumLeap addresses this by providing a high-performance, AI-driven platform that ingests, processes, and visualizes data with minimal delay. Our solution leverages machine learning models to identify trends, anomalies, and predictive insights, presenting them in an intuitive and customizable dashboard. This empowers organizations to make faster, more informed decisions, turning data from a complex problem into a strategic asset.",
    lessonsLearned: "Developing QuantumLeap was a journey of technical challenges and significant growth. A key lesson was the importance of building a scalable data-ingestion pipeline from day one. Initially, our architecture struggled under heavy loads, forcing a redesign centered around a message queue system like Apache Kafka. This taught us to anticipate future scale rather than just building for current needs.\n\nAnother major takeaway was the user experience of data visualization. We learned that simply presenting data isn't enough; it needs a narrative. Iterating on user feedback was crucial to refining our dashboards into a tool that didn't just show numbers but told a clear story, enabling users to understand complex insights at a glance."
  },
  {
    id: "social-connect",
    title: "SocialConnect App",
    description: "A mobile-first social networking app designed for creative communities.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9-5OtMB7mfCpFka9qBBIEudZrTWdaEXLVRl5Tw4ZCgH0qHmfDw56KdA5E053DYHr_QGWyPjg3ZO9ik9ZH-F_dYxTxElxbnEzvlkAZFTO-PxcqGMpE0Jkvlv4nDkK88Wfs-UN_w9r7pcjZkHK_NAPIgAW1aWpq5cMjbNOxrAddmT4EfZ2PrkgZT2i0ciHR8aq-k8_wljkOJEmuGPtWFwFzox_mUULNqtfgrefMu_JSA_TrZxyCZRu9FdoBwn1PrRsZEjy6B2cbuzAJ",
    tags: ["React Native", "Firebase", "GraphQL"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A full-featured online store with a custom CMS and payment gateway integration.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWDxwxGotHTWGtUJmDesrFDszrF6Mgfw95Jdq4DCMrX1lsSNHV02PxfyZZ4xBuhO3j1VjmBY64oa94ogHvYMdHBKBYPVWKR6PmZChYSmgYPW0li7D9Ec5ehERMxqSuhr8zxWtOnzLwMo8w_URP8q9DAzD1VtJSLF8HLJqXRBS9_O2SUtfQt7Rp7syNJgvi5TdS-xxu6ld-9Osp-bI8K3KdyN8o6Rkpd48oEDklZoOl-vryJ_km4FpOtW0wkld7bx5-a9juOcWxD3jk",
    tags: ["Next.js", "Stripe", "MongoDB"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: "taskflow-pro",
    title: "TaskFlow Pro",
    description: "A collaborative project management tool with drag-and-drop functionality.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFXZvJTsw_r2grP5BiDnwBvFYV5QW34_O5PK15wk3Q8b7iuK4Rc2kCk_AwHgbgasREJx7LB83edTUaPr6HtrAK_44ZCShk1eK1z3DHb5n3Sa4uHSI1aK-YZG-THlNCTPGxZWqGaQXzP419fKbtFTJhLmv-eNWblrlJiwuVqCYFPRocJ24meDyG8WEa180_V6z6nyLgqK7NetrCluj7dB-L5HrPNlQosJstWvnsunab6-Hb3MF0VS3swD9PloZ4XAUGbcByS3KLOo6G",
    tags: ["Vue.js", "Express.js", "WebSockets"],
    demoUrl: "#",
    codeUrl: "#",
  }
];

export const DETAIL_IMAGES = {
    quantumLeap: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQgcC7beSgTI6mnJTl1kzC82a-NkBI_CtplxsnY4qXLLGBrprrzshtkA1uAv143NeieCyA35Lt1TPvtiiS83uXwFxHC-vhalwA1Hs2Isfo-HJGlEyMDdh7wnlhDY9RPzgDDASXCsN0cx-a6oVEprU5LmNr7Pm7RrDiWo5csvRVHHbaP7Hm7e7g0GLqEkKO-Eo_8nXVPutyDEB63NT_1SN6pBsG2hd9OoIhIzVX0dvUeS7IGURkFFZeUwqaF_LqPixSYnc-_vu3BEwN"
}