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
  gpa?: string;
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
    title: "Data Scientist | Machine Learning, Deep Learning & Generative AI",
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
    tagline: "Machine Learning, Deep Learning & Applied Generative AI Systems.",
    shortBio: "Data Scientist and AI Researcher working across Machine Learning, Deep Learning, and Generative AI. Focused on statistical learning theory, neural representation architectures, retrieval-augmented generation (Graph RAG), and multi-agent systems.",
    aboutNarrative: [
      "My technical work and research interests are centered on Machine Learning, Deep Learning, and Applied Generative AI. I focus on statistical optimization for ensemble learning—such as simplex-constrained sparse calibration to replace uniform prior weights with sparse posteriors—as well as deep representation learning, time-series forecasting, and natural language understanding.",
      "In generative systems, I focus on Knowledge Graph augmented retrieval (Graph RAG) to address multi-hop reasoning deficiencies, and autonomous multi-agent coordination protocols (Agent2Agent) to decompose complex queries across specialized, task-driven agents under strict latency SLAs.",
      "My core philosophy prioritizes empirical rigor and reproducibility: grounding autonomous architectures in rigorous software engineering benchmarks, systematic evals, and mathematical guarantees."
    ],
    coreDomains: [
      "Machine Learning & Statistical Theory",
      "Deep Learning & Neural Architectures",
      "Generative AI & LLMOps",
      "Agentic AI & Multi-Agent Protocols",
      "Knowledge Graph RAG",
      "Distributed Computing & MLOps"
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
      abstract: "Hyperparameter optimization (HPO) in deep learning remains computationally prohibitive and heavily reliant on manual intervention. Optimindtune introduces an autonomous multi-agent orchestration architecture where specialized agents navigate model search spaces, schedule distributed evaluations, and dynamically adjust optimization strategies based on empirical convergence signals, significantly reducing human oversight and compute budgets.",
      tags: ["Multi-Agent Systems", "AutoML", "HPO", "Deep Learning"],
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
      tags: ["Multi-Agent Evals", "SLA Benchmarks", "Latency & Cost", "Systems AI"],
      bibtex: `@article{madiraju2026agentslabench,
  title={AgentSLABench: Evaluating and Benchmarking Agentic Systems Under Resource Constraints},
  author={Madiraju, M. B. and Madiraju, M. S. P.},
  journal={arXiv preprint arXiv:2608.00805},
  year={2026}
}`
    },
    {
      id: "sparse-bagging",
      title: "Simplex-Constrained Sparse Bagging Calibration for Robust Ensemble Classification",
      authors: ["M. S. P. Madiraju"],
      venue: "Preprint / In Preparation",
      year: 2026,
      arxivId: "2606.22680",
      arxivUrl: "https://arxiv.org/abs/2606.22680",
      githubUrl: "https://github.com/mehersaipreetam/simplex-constrained-sparse-bagging",
      keyFocus: "Mathematical optimization and sparse probability calibration for deep learning and tree ensembles.",
      abstract: "Standard bagging algorithms average predictions across base estimators with uniform 1/M weights, leading to redundant inference costs and suboptimal posterior calibration. By formulating ensemble aggregation as an L1-regularized simplex optimization problem, this work derives sparse estimator weights that preserve or enhance expected calibration error (ECE) while pruning up to 60% of base model inference requirements.",
      tags: ["Ensemble Calibration", "Simplex Optimization", "Machine Learning", "Probability Calibration"],
      bibtex: `@article{madiraju2026sparsebagging,
  title={Simplex-Constrained Sparse Bagging Calibration for Robust Ensemble Classification},
  author={Madiraju, M. S. P.},
  journal={arXiv preprint arXiv:2606.22680},
  year={2026}
}`
    }
  ] as Publication[],

  experiences: [
    {
      company: "ADM (Archer-Daniels-Midland)",
      role: "Data Scientist",
      tenure: "Jul 2026 – Present",
      location: "Bengaluru, India",
      summary: "Designing and deploying enterprise data science, machine learning, and AI solutions for global agribusiness intelligence and supply chain forecasting.",
      impacts: [
        "Architecting enterprise-scale predictive modeling and Generative AI workflows across global supply chain networks.",
        "Developing scalable automated machine learning pipelines to extract structured intelligence from unstructured market signals.",
        "Collaborating across cross-functional engineering and domain leadership teams to integrate AI models into high-reliability decision systems."
      ],
      tags: ["Enterprise AI", "Machine Learning", "Deep Learning", "Generative AI", "Cloud Architecture"],
      featured: true
    },
    {
      company: "Tiger Analytics",
      role: "Data Scientist",
      tenure: "Feb 2024 – Jun 2026",
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
      degree: "Master of Science in Computer Science",
      specialization: "Specialization in Machine Learning",
      tenure: "2025 – 2026 (Expected)",
    },
    {
      institution: "Manipal Institute of Technology",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      tenure: "2018 – 2022",
      gpa: "CGPA: 9.11 / 10.0",
    }
  ] as Education[],

  skills: [
    {
      title: "Machine Learning & Statistical Theory",
      icon: "Brain",
      skills: [
        "Statistical Learning Theory",
        "Sparse Bagging & Ensemble Calibration",
        "Gaussian Process Regression (GPR)",
        "LightGBM, XGBoost & CatBoost",
        "Probability Calibration & ECE",
        "Scikit-Learn & SciPy"
      ]
    },
    {
      title: "Deep Learning & Neural Architectures",
      icon: "Layers",
      skills: [
        "PyTorch & TensorFlow",
        "Transformer Architectures",
        "BERT & RoBERTa",
        "Representation Learning",
        "Time-Series Forecasting",
        "Hyperparameter Optimization"
      ]
    },
    {
      title: "Generative AI & Knowledge Systems",
      icon: "Sparkles",
      skills: [
        "Knowledge Graph RAG (Graph RAG)",
        "Vector Embeddings & Hybrid Search",
        "Large Language Models (LLMs)",
        "Prompt Engineering & Fine-Tuning",
        "Natural Language Processing (NLP)",
        "Semantic Search & Retrieval"
      ]
    },
    {
      title: "Agentic AI & Multi-Agent Protocols",
      icon: "Bot",
      skills: [
        "Agent-to-Agent (A2A) Protocol",
        "Google Agent Development Kit (ADK)",
        "Hierarchical Multi-Agent Systems",
        "Agent Routing & Coordination",
        "Evals & Benchmarking (RigorBench)",
        "Autonomous Workflow Decomposition"
      ]
    },
    {
      title: "MLOps, Infra & Distributed Computing",
      icon: "Cpu",
      skills: [
        "PySpark & Spark-NLP",
        "MLflow & Model Lifecycle",
        "Docker & Containerization",
        "Redis & Caching Infrastructure",
        "FastAPI & Asynchronous Services",
        "Linux & Bash Scripting"
      ]
    },
    {
      title: "Languages & Core Tools",
      icon: "Code",
      skills: [
        "Python (NumPy, Pandas, SciPy)",
        "SQL (PostgreSQL, BigQuery)",
        "TypeScript & JavaScript",
        "Git & GitHub Actions CI/CD",
        "Cloud Platforms (AWS, Azure)",
        "LaTeX & Scientific Writing"
      ]
    }
  ] as SkillCategory[],

  articles: [
    {
      id: "sparse-bagging-deep-dive",
      title: "Simplex-Constrained Sparse Bagging: Why Calibration Outweighs Complexity",
      excerpt: "An analysis of transitioning uniform 1/M ensemble weights into sparse posteriors through L1-regularized simplex optimization, reducing compute while improving ECE.",
      date: "Upcoming",
      readTime: "8 min read",
      tags: ["Ensemble Learning", "Optimization", "Calibration"],
      slug: "simplex-constrained-sparse-bagging",
      status: "coming-soon"
    },
    {
      id: "graph-rag-enterprise",
      title: "Knowledge Graph RAG vs. Vector Search in High-Risk Financial Workflows",
      excerpt: "Why pure vector search fails on multi-hop entity queries in delinquency modeling, and how hybrid knowledge graphs restore determinism.",
      date: "Upcoming",
      readTime: "10 min read",
      tags: ["Graph RAG", "Knowledge Graphs", "Enterprise AI"],
      slug: "graph-rag-vs-vector-search",
      status: "coming-soon"
    },
    {
      id: "agentic-protocols-a2a",
      title: "Architecting Agent-to-Agent (A2A) Communication in Enterprise Workflows",
      excerpt: "Design patterns for multi-agent registries, decoupled routing, and hierarchical delegation with strict latency SLA guarantees.",
      date: "Upcoming",
      readTime: "12 min read",
      tags: ["Agentic AI", "A2A Protocol", "System Architecture"],
      slug: "agent-to-agent-enterprise-protocols",
      status: "coming-soon"
    },
    {
      id: "benchmarking-coding-agents",
      title: "RigorBench: Evaluating Engineering Process Adherence in Coding LLMs",
      excerpt: "Functional correctness is not enough. How we benchmark test maintenance, regression safeguards, and boundary checking in autonomous coding agents.",
      date: "Upcoming",
      readTime: "9 min read",
      tags: ["LLM Benchmarking", "Evaluation", "Coding Agents"],
      slug: "rigorbench-evaluating-coding-agents",
      status: "coming-soon"
    }
  ] as BlogPost[],
  get blogs(): BlogPost[] {
    return this.articles;
  }
};
