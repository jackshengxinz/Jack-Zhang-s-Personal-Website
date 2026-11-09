// All homepage content lives here. Edit this file to update the site.
// Source: Shengxin_Zhang_CV_v2.pdf (November 2026).

export const profile = {
  name: "Shengxin (Jack) Zhang",
  shortName: "Jack Zhang",
  bio: "M.S. student in ECE at the University of Illinois Urbana-Champaign",
  location: "Urbana-Champaign, IL",
  email: "sz68@illinois.edu",
  personalEmail: "jackshengxinz@gmail.com",
  github: "https://github.com/jackshengxinz",
  linkedin: "https://www.linkedin.com/in/shengxin-zhang-b707bb280a",
  advisor: { name: "Varun Chandrasekaran", url: "https://ece.illinois.edu/about/faculty/varunc" },
};

export const interests = [
  "LLM safety",
  "LLM agent evaluation",
  "Multi-agent collaboration",
  "Simulation for embodied AI",
];

// Newest first. Dates are shown as written.
export const news = [
  {
    date: "Fall 2026",
    html: `Started my M.S. in Electrical and Computer Engineering at UIUC, advised by Prof. Varun Chandrasekaran.`,
  },
  {
    date: "2026",
    html: `Our paper <a href="https://aclanthology.org/2026.findings-emnlp.1035/"><em>Do AI Reviewers Converge?</em></a> was accepted to <strong>Findings of EMNLP 2026</strong>.`,
  },
  {
    date: "Summer 2026",
    html: `Joined <strong>Shanghai AI Laboratory</strong> to build Isaac Sim scenes and 3D assets for chemistry experiments with dual-arm robots.`,
  },
  {
    date: "2026",
    html: `Graduated from UIUC with a B.S. in Computer Engineering and a minor in Statistics.`,
  },
];

export const publications = [
  {
    title:
      "Do AI Reviewers Converge? Diversity Collapse in Model-Generated Peer Review",
    authors: [
      "Xuzhe Hou",
      "Shengxin Zhang",
      "Riley Stacy",
      "Emily Black",
      "Varun Chandrasekaran",
    ],
    me: "Shengxin Zhang",
    venue: "Findings of EMNLP 2026",
    badge: "EMNLP 2026 Findings",
    image: "review-monoculture-cover.webp",
    links: [
      { label: "ACL Anthology", url: "https://aclanthology.org/2026.findings-emnlp.1035/" },
      { label: "OpenReview", url: "https://openreview.net/forum?id=NdDKcU9HlU" },
      { label: "Code", url: "https://github.com/jackshengxinz/Review_Monoculture" },
      { label: "Video", url: "videos/Do_AI_Reviewers_Converge_promo.mp4", local: true },
    ],
    points: [
      "Built an asynchronous evaluation pipeline for five LLMs, comparing 10,172 model-generated reviews with 1,943 human reviews across 509 ICLR papers.",
      "Measured praise-to-critique balance and semantic similarity. Specialized review agents reduced review convergence, though some effects persisted.",
    ],
  },
];

export const research = [
  {
    org: "Shanghai AI Laboratory",
    date: "Summer 2026",
    title: "Scientific simulation and 3D asset generation",
    points: [
      "Developed Isaac Sim scenes and 3D scientific assets for chemical experiments, including boiling, precipitation and dissolution, in dual-arm robot simulations.",
    ],
  },
  {
    org: "University of Illinois Urbana-Champaign",
    date: "Ongoing",
    title: "LLM training data provenance",
    points: [
      "Designing controlled experiments to test whether black-box audits can detect the use of marked training examples after paraphrasing, with model utility evaluated separately.",
    ],
  },
  {
    org: "Westlake University",
    date: "2025",
    title: "Multimodal biometric representation",
    with: "Prof. Yandong Wen",
    points: [
      "Built a voice-to-face pipeline for uncertainty-aware 3D facial estimation.",
    ],
  },
  {
    org: "Carnegie Mellon University",
    date: "Summer 2023",
    title: "Fairness under distribution shift",
    with: "Prof. Pradeep Ravikumar",
    points: [
      "Tested a fairness-aware PyTorch model under demographic and other distribution shifts.",
    ],
  },
];

export const projects = [
  {
    title: "Autonomous parallel parking",
    where: "University of Illinois Urbana-Champaign",
    date: "Spring 2026",
    description:
      "Used LiDAR and odometry to detect parking spaces and implemented a finite-state controller for parallel parking in ROS 2, tested in Gazebo and on a Polaris GEM vehicle.",
    tags: ["ROS 2", "Gazebo", "LiDAR"],
  },
  {
    title: "Two-player FPGA game",
    where: "FPGA hardware project",
    description:
      "A real-time two-player game in SystemVerilog with keyboard controls, missiles, shields and live health bars, deployed with Vitis.",
    tags: ["SystemVerilog", "FPGA"],
  },
  {
    title: "E-commerce sales and inventory optimization",
    where: "CS 411 course project",
    date: "Spring 2025",
    description:
      "Order tracking, sales forecasting and inventory analytics with a React frontend, a Flask backend and SQL transaction logic.",
    tags: ["React", "Flask", "SQL"],
    url: "https://github.com/cs411-alawini/sp25-cs411-team003-zhyzszxz",
  },
];

export const education = [
  {
    school: "University of Illinois Urbana-Champaign",
    degree: "M.S. in Electrical and Computer Engineering",
    detail: "Advisor: Prof. Varun Chandrasekaran",
    date: "In progress",
  },
  {
    school: "University of Illinois Urbana-Champaign",
    degree: "B.S. in Computer Engineering, Minor in Statistics",
    detail: "GPA 3.85 / 4.00",
    date: "2026",
  },
];

export const teaching = [
  "Graduate Teaching Assistant, ECE 385 (Digital Systems Laboratory)",
  "Course Assistant, CS 124, ECE 110 and STAT 400",
];

export const skills =
  "Python, C/C++, PyTorch, scikit-learn, Isaac Sim, ROS 2, Gazebo, Git, SystemVerilog";
