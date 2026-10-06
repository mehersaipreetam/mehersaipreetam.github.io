export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  arxivId: string;
  arxivUrl: string;
  githubUrl?: string;
  abstract: string;
  keyFocus: string;
  bibtex: string;
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  tenure: string;
  location: string;
  summary?: string;
  impacts: string[];
  tags: string[];
  featured?: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  specialization?: string;
  tenure: string;
  location?: string;
  gpa?: string;
  details?: string[];
  verificationNote?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  status: 'published' | 'coming-soon';
}

export const portfolioData = {
  profile: {
    fullName: "Meher Sai Preetam Madiraju",
    preferredName: "Preetam",
    title: "Data Scientist | Agentic AI & Generative AI Specialist",
    currentOrganization: "ADM (Archer-Daniels-Midland)",
    location: "Bengaluru, Karnataka, India",
    email: "mehersaipreetam@gmail.com",
    academicEmail: "gatech.edu",
    github: "https://github.com/mehersaipreetam",
    linkedin: "https://www.linkedin.com/in/mehersaipreetam/",
    scholar: "https://scholar.google.com/citations?user=2Hoa1gsAAAAJ",
    scholarId: "2Hoa1gsAAAAJ",
    academicAffiliation: "Georgia Institute of Technology",
    institutionalVerification: "Verified email at gatech.edu",
    avatarUrl: "https://avatars.githubusercontent.com/u/51680175?v=4",
  },

  summary: {
    tagline: "Architecting Scalable Multi-Agent Systems, Autonomous Workflows, and Applied Generative AI.",
    shortBio: "Meher Sai Preetam Madiraju is a Data Scientist and AI Researcher specializing in Agentic AI, Generative AI, LLMOps, and Machine Learning. He focuses on building production-grade multi-agent architectures, enterprise Knowledge Graph RAG systems, and evaluating autonomous agent workflows.",
    longBio: "With over 4 years of hands-on data science experience across enterprise and research environments, I bridge the gap between academic AI breakthroughs and production-grade software. My research focuses on autonomous agent communication protocols (Agent2Agent), engineering rigor benchmarks for LLM coding agents, and statistical optimization for ensemble learning. Currently, I deploy enterprise data science solutions at ADM while pursuing advanced machine learning graduate research at Georgia Tech.",
    coreDomains: [
      "Agentic AI & Multi-Agent Systems",
      "Generative AI & LLMOps",
      "Knowledge Graph RAG",
      "Deep Learning & NLP",
      "Statistical Ensemble Calibration",
      "Big Data Analytics & MLOps"
    ],
    stats: [
      { label: "Total Citations", value: "7+" },
      { label: "h-index", value: "1" },
      { label: "Research Papers", value: "4" },
      { label: "GitHub Repos", value: "35+" },
    ]
  },

  publications: [
    {
      id: "optimindtune",
      title: "Optimindtune: A Multi-Agent Framework for Intelligent Hyperparameter Optimization",
      authors: ["M. B. Madiraju", "M. S. P. Madiraju"],
      venue: "arXiv preprint",
      year: 2025,
      arxivId: "2505.19205",
      arxivUrl: "https://arxiv.org/abs/2505.19205",
      githubUrl: "https://github.com/mehersaipreetam/OptiMindTune",
      keyFocus: "Multi-agent systems orchestrating autonomous and distributed hyperparameter optimization.",
      abstract: "Hyperparameter optimization (HPO) in deep learning remains computationally prohibitive and heavily reliant on manual intervention. Optimindtune introduces an autonomous multi-agent orchestration architecture where specialized agents autonomously navigate model search spaces, schedule distributed evaluations, and dynamically adjust optimization strategies based on empirical convergence signals, significantly reducing human oversight and compute budgets.",
      tags: ["Multi-Agent Systems", "AutoML", "HPO", "Distributed Systems"],
      bibtex: `@article{madiraju2025optimindtune,
  title={Optimindtune: A Multi-Agent Framework for Intelligent Hyperparameter Optimization},
  author={Madiraju, M. B. and Madiraju, M. S. P.},
  journal={arXiv preprint arXiv:2505.19205},
  year={2025}
}`
    },
    {
      id: "rigorbench",
      title: "RigorBench: Benchmarking Engineering Process Discipline in Autonomous AI Coding Agents",
      authors: ["M. B. Madiraju", "M. S. P. Madiraju"],
      venue: "arXiv preprint",
      year: 2026,
      arxivId: "2606.22678",
      arxivUrl: "https://arxiv.org/abs/2606.22678",
      keyFocus: "Systematic benchmarking of software engineering process adherence and rigor in autonomous coding LLM agents.",
      abstract: "Existing benchmarks for coding LLMs evaluate functional correctness while neglecting software engineering discipline—such as regression verification, test coverage maintenance, boundary validation, and rollback mechanics. RigorBench introduces a rigorous evaluation suite that assesses whether autonomous coding agents adhere to foundational software lifecycle constraints and production development standards during complex multi-step refactoring tasks.",
      tags: ["Agent Benchmarking", "Coding Agents", "LLM Evaluation", "Software Engineering"],
      bibtex: `@article{madiraju2026rigorbench,
  title={RigorBench: Benchmarking Engineering Process Discipline in Autonomous AI Coding Agents},
  author={Madiraju, M. B. and Madiraju, M. S. P.},
  journal={arXiv preprint arXiv:2606.22678},
  year={2026}
}`
    },
    {
      id: "agentslabench",
      title: "AgentSLABench: Evaluating and Benchmarking Agentic Systems Under Resource Constraints",
      authors: ["M. B. Madiraju", "M. S. P. Madiraju"],
      venue: "arXiv preprint",
      year: 2026,
      arxivId: "2608.00805",
      arxivUrl: "https://arxiv.org/abs/2608.00805",
      keyFocus: "Performance, latency, SLA adherence, and resource usage trade-offs in multi-agent workflows.",
      abstract: "While multi-agent systems demonstrate impressive qualitative problem-solving, real-world deployment is bottlenecked by latency, token budgets, and strict SLA deadlines. AgentSLABench quantifies the multi-dimensional trade-offs between agent coordination topologies, prompt caching, token budgets, and time-to-first-token in high-throughput enterprise environments.",
      tags: ["Agentic Systems", "SLA Benchmarking", "LLMOps", "System Performance"],
      bibtex: `@article{madiraju2026agentslabench,
  title={AgentSLABench: Evaluating and Benchmarking Agentic Systems Under Resource Constraints},
  author={Madiraju, M. B. and Madiraju, M. S. P.},
  journal={arXiv preprint arXiv:2608.00805},
  year={2026}
}`
    },
    {
      id: "sparse-bagging",
      title: "Simplex-Constrained Sparse Bagging: Transitioning from Uniform Priors to Sparse Posteriors in Ensemble Learning",
      authors: ["M. S. P. Madiraju", "M. B. Madiraju"],
      venue: "arXiv preprint",
      year: 2026,
      arxivId: "2606.13589",
      arxivUrl: "https://arxiv.org/abs/2606.13589",
      githubUrl: "https://github.com/mehersaipreetam/simplex-constrained-sparse-bagging",
      keyFocus: "Statistical machine learning and ensemble learning moving from uniform bagging priors to constrained sparse posterior weighting.",
      abstract: "Standard bootstrap aggregation assigns equal weight (uniform prior) to all estimators in an ensemble, incurring redundant latency and suboptimal calibration. This work proves that post-training sparse posterior optimization over the probability simplex yields statistically calibrated ensembles with strict sparsity guarantees, shrinking inference compute by up to 60% while matching or outperforming unconstrained ensemble generalization.",
      tags: ["Statistical ML", "Ensemble Methods", "Model Calibration", "Optimization"],
      bibtex: `@article{madiraju2026sparsebagging,
  title={Simplex-Constrained Sparse Bagging: Transitioning from Uniform Priors to Sparse Posteriors in Ensemble Learning},
  author={Madiraju, M. S. P. and Madiraju, M. B.},
  journal={arXiv preprint arXiv:2606.13589},
  year={2026}
}`
    }
  ] as Publication[],

  experiences: [
    {
      company: "ADM (Archer-Daniels-Midland)",
      role: "Data Scientist",
      tenure: "2026 – Present",
      location: "Bengaluru, India",
      summary: "Designing and deploying enterprise data science, machine learning, and AI solutions for global agribusiness intelligence and supply chain forecasting.",
      impacts: [
        "Architecting enterprise-scale predictive modeling and Generative AI workflows across global supply chain networks.",
        "Developing scalable automated machine learning pipelines to extract structured intelligence from unstructured market signals.",
        "Collaborating across cross-functional engineering and domain leadership teams to integrate AI models into high-reliability decision systems."
      ],
      tags: ["Enterprise AI", "Machine Learning", "Generative AI", "Python", "Cloud Architecture"],
      featured: true
    },
    {
      company: "Tiger Analytics",
      role: "Data Scientist",
      tenure: "Feb 2024 – 2026",
      location: "Bengaluru, India",
      summary: "Specialized in Agentic AI architecture, Agent2Agent protocols, and Knowledge Graph RAG systems for tier-1 financial and credit institutions.",
      impacts: [
        "Built credit and delinquency agentic workflows for a leading credit bureau, leveraging the Agent2Agent (A2A) protocol with an agent registry, routing, and ADK-based agents to deliver scalable intelligent automation and actionable insights.",
        "Designed and developed a custom agentic framework with scalable, modular integrations (Redis, LLMOps, AI gateway), enabling LLM-driven hierarchical agents to operate seamlessly across fixed and autonomous workflows with real-time monitoring and optimized performance.",
        "Developed an agentic system consisting of a manager agent and multiple LLM-driven sub-agents, each specialized in specific downstream tasks to decompose complex business queries into executable sub-tasks.",
        "Designed and implemented an advanced Retrieval-Augmented Generation (RAG) pipeline leveraging knowledge graphs to enhance retrieval accuracy and insight generation quality."
      ],
      tags: ["Agent2Agent (A2A)", "Google ADK", "Graph RAG", "Hierarchical Agents", "Redis", "LLMOps"],
      featured: true
    },
    {
      company: "Merkle Inc",
      role: "Analyst | Data Science",
      tenure: "Jun 2022 – Feb 2024",
      location: "Bengaluru, India",
      summary: "Built scalable ML workbenches and NLP intelligence pipelines for automated customer insights and survey classification.",
      impacts: [
        "Designed and developed a scalable machine learning workbench tailored for classification tasks, enabling end-to-end data processing, model development, and interpretation.",
        "Leveraged BERT-based topic modeling and vector search algorithms to automatically generate topic suggestions for open-ended survey responses, incorporating fuzzy matching to boost efficiency by 87%.",
        "Architected and streamlined ETL pipelines, driving an 85% increase in data processing efficiency across customer data repositories.",
        "Built a modular NLP pipeline encompassing text preprocessing, state-of-the-art sentiment analysis, and theme classification to deliver actionable customer insights."
      ],
      tags: ["BERT", "Vector Search", "Classification Workbench", "ETL Pipelines", "NLP", "Python"],
      featured: true
    },
    {
      company: "MITACS / INRS",
      role: "Research Intern",
      tenure: "Jun 2021 – Sep 2021",
      location: "Varennes, Quebec, Canada",
      summary: "International research fellowship investigating non-parametric regression and gradient boosting for financial forecasting.",
      impacts: [
        "Conducted research on machine learning models for financial time series forecasting, focusing on Gaussian Process Regression (GPR) and LightGBM.",
        "Assessed and quantified macroeconomic and financial market variables using statistical modeling and data visualization to isolate sector drivers."
      ],
      tags: ["Gaussian Process Regression", "LightGBM", "Financial Forecasting", "Statistical Modeling"],
      featured: false
    },
    {
      company: "Ugam Solutions",
      role: "Summer Intern",
      tenure: "Jun 2021 – Aug 2021",
      location: "Bengaluru, India",
      summary: "Distributed large-scale text mining and customer review sentiment analytics using Spark infrastructure.",
      impacts: [
        "Generated customer insights from product reviews for a Fortune 500 Home Improvement retailer using NLTK, PySpark, Spark-NLP, and Spark-ML.",
        "Achieved a ~56% reduction in compute cost and a ~45% reduction in execution time through distributed pipeline optimizations."
      ],
      tags: ["PySpark", "Spark-NLP", "Spark-ML", "Big Data", "Distributed Computing"],
      featured: false
    }
  ] as Experience[],

  education: [
    {
      institution: "Georgia Institute of Technology",
      degree: "Master of Science in Computer Science (MSCS)",
      specialization: "Specialization in Machine Learning",
      tenure: "2025 – 2026 (Expected)",
      location: "Atlanta, GA (Online/Hybrid)",
      verificationNote: "Verified academic affiliation at gatech.edu",
      details: [
        "Focus on Deep Learning, Reinforcement Learning, Autonomous Agent Architectures, and Large-Scale Machine Learning Theory.",
        "Engaged in advanced research on evaluation benchmarks and multi-agent coordination frameworks."
      ]
    },
    {
      institution: "Manipal Institute of Technology",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      tenure: "2018 – 2022",
      location: "Manipal, Karnataka, India",
      gpa: "CGPA: 9.11 / 10.0",
      details: [
        "Graduated with distinction with top academic honors.",
        "Coursework in Data Structures & Algorithms, Operating Systems, Database Management Systems, Theory of Computation, and Probability & Statistics."
      ]
    }
  ] as Education[],

  skills: [
    {
      title: "Agentic AI & Multi-Agent Protocols",
      icon: "Bot",
      skills: [
        "Agent-to-Agent (A2A) Protocol",
        "Google Agent Development Kit (ADK)",
        "LangGraph & LangChain",
        "Hierarchical Multi-Agent Systems",
        "Agent Registry & Intelligent Routing",
        "Autonomous Workflow Execution"
      ]
    },
    {
      title: "Generative AI & Knowledge Systems",
      icon: "Sparkles",
      skills: [
        "Knowledge Graph RAG (Graph RAG)",
        "Vector Embeddings & Search",
        "Large Language Models (LLMs)",
        "Fine-Tuning & Prompt Engineering",
        "Natural Language Processing (NLP)",
        "BERT & Transformer Architectures"
      ]
    },
    {
      title: "Machine Learning & Deep Learning",
      icon: "Brain",
      skills: [
        "PyTorch & TensorFlow",
        "Scikit-learn & LightGBM",
        "Gaussian Process Regression (GPR)",
        "Statistical Ensemble Learning",
        "Time Series Forecasting",
        "SHAP & LIME Interpretability"
      ]
    },
    {
      title: "Languages, Distributed Data & APIs",
      icon: "Code",
      skills: [
        "Python (Expert)",
        "SQL (Advanced)",
        "FastAPI & Flask",
        "PySpark & Dask",
        "Pandas, NumPy, SciPy",
        "TypeScript & Node.js"
      ]
    },
    {
      title: "Cloud, MLOps & Infrastructure",
      icon: "Server",
      skills: [
        "Google Cloud Platform (GCP)",
        "Vertex AI",
        "MLflow",
        "Docker & Containerization",
        "Kubernetes",
        "Redis Caching",
        "CI/CD & Model Monitoring"
      ]
    },
    {
      title: "Engineering Leadership & Methodologies",
      icon: "Users",
      skills: [
        "Autonomous Agent Benchmarking",
        "Cross-Functional Collaboration",
        "Technical Mentorship",
        "Enterprise Architecture Planning",
        "Agile & Scrum Delivery",
        "Research to Production Handoff"
      ]
    }
  ] as SkillCategory[],

  blogs: [
    {
      id: "a2a-protocol-architecture",
      title: "Architecting Enterprise Agentic Systems with the Agent2Agent (A2A) Protocol",
      excerpt: "A deep dive into decomposing complex business workflows into collaborative multi-agent ecosystems with dynamic registries, routing, and ADK integration.",
      date: "October 2026",
      readTime: "8 min read",
      tags: ["Agentic AI", "A2A", "Google ADK", "Architecture"],
      slug: "architecting-enterprise-agentic-systems",
      status: "coming-soon"
    },
    {
      id: "graph-rag-vs-vector-rag",
      title: "Graph RAG: Bridging Knowledge Graphs and Vector Search for Enterprise Grounding",
      excerpt: "Why naive vector search falls short on multi-hop enterprise reasoning, and how knowledge graph traversal fundamentally elevates retrieval accuracy.",
      date: "September 2026",
      readTime: "10 min read",
      tags: ["Graph RAG", "Knowledge Graphs", "LLMs", "RAG"],
      slug: "graph-rag-vs-vector-rag",
      status: "coming-soon"
    },
    {
      id: "sparse-bagging-theory",
      title: "Simplex-Constrained Sparse Bagging: Cutting Ensemble Compute by 60%",
      excerpt: "Transitioning from traditional uniform bagging priors to sparse posteriors over the probability simplex for calibrated inference acceleration.",
      date: "August 2026",
      readTime: "12 min read",
      tags: ["Ensemble Learning", "Machine Learning", "Optimization"],
      slug: "sparse-bagging-theory",
      status: "coming-soon"
    },
    {
      id: "benchmarking-coding-agents",
      title: "RigorBench: What Real-World Coding Benchmarks Miss About Agent Discipline",
      excerpt: "Evaluating whether autonomous coding agents adhere to regression testing, rollback protocols, and software engineering rigor under pressure.",
      date: "July 2026",
      readTime: "7 min read",
      tags: ["Coding Agents", "Benchmarking", "LLMOps"],
      slug: "benchmarking-coding-agents",
      status: "coming-soon"
    }
  ] as BlogPost[],

  featuredProjects: [
    {
      title: "OptiMindTune",
      badge: "AutoML & Multi-Agent",
      description: "An autonomous multi-agent framework that intelligently navigates hyperparameter optimization search spaces and automates distributed model creation.",
      tech: ["Python", "Multi-Agent", "AutoML", "scikit-learn", "PyTorch"],
      github: "https://github.com/mehersaipreetam/OptiMindTune",
      paper: "https://arxiv.org/abs/2505.19205"
    },
    {
      title: "VoxBook",
      badge: "Local-First AI & Audio",
      description: "A local-first, free AI-powered smart audiobook generator and player compiling standard PDF books into structured audiobooks with segment transcripts.",
      tech: ["Python", "Speech Synthesis", "NLP", "Local AI", "PDF Parsing"],
      github: "https://github.com/mehersaipreetam/VoxBook"
    },
    {
      title: "Simplex-Constrained Sparse Bagging",
      badge: "Statistical ML Research",
      description: "Model-agnostic post-training compression and calibration for bagging ensembles using simplex-constrained sparse optimization.",
      tech: ["Python", "Optimization", "Simplex", "Ensemble Methods", "Calibration"],
      github: "https://github.com/mehersaipreetam/simplex-constrained-sparse-bagging",
      paper: "https://arxiv.org/abs/2606.13589"
    },
    {
      title: "Google ADK Agent-to-Agent Lab",
      badge: "Multi-Agent Protocols",
      description: "Hands-on learning lab implementing multi-agent orchestration, communication protocols, and delegation patterns with Google's Agent Development Kit.",
      tech: ["Python", "Google ADK", "Agent2Agent (A2A)", "Agent Protocols"],
      github: "https://github.com/mehersaipreetam/adk-a2a-lab"
    }
  ]
};
