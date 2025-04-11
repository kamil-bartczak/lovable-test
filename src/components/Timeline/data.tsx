import { 
  Building, Users, Lightbulb, Code, Layers, TestTube, Rocket, 
  Tag, FileText, Link2, BookOpen, BrainCircuit, Zap, Database,
  BarChart, FileSearch, CheckCircle, AlertCircle, Clock, Calendar,
  Edit, Camera, Compass, Flag, Eye, PenTool, UserCheck, Search,
  MessageSquare, Target, LayoutDashboard, Globe, LineChart, PieChart,
  Workflow, Repeat, CreditCard, Mail, ArrowRightLeft, Settings,
  GitMerge, User, UserPlus, Heart, Share2, Activity,
  BarChart2, List, Send, Server, ShieldCheck, Smartphone, Store,
  Video, ClipboardList, MousePointer, CheckSquare, GitBranch
} from "lucide-react";
import { Category, Tool, Stage, Resource } from "./types";

export const stages: Stage[] = [
  {
    id: 1,
    title: "Business Exploration",
    description: "Define business goals, target audience, and core value proposition. Create a clear vision for the MVP.",
    icon: <Building size={36} />,
    color: "text-blue-600",
    colorStart: "#3b82f6",
    colorEnd: "#2563eb",
    duration: "1 day",
    keyOutcome: "Validated business hypothesis and clear MVP vision",
    categories: [
      { id: 101, name: "Strategy", color: "bg-blue-100 text-blue-700", icon: <BrainCircuit size={16} />, description: "Tools for developing business and product strategy" },
      { id: 102, name: "Market Research", color: "bg-indigo-100 text-indigo-700", icon: <Users size={16} />, description: "Tools for understanding your market and customers" },
      { id: 103, name: "Planning", color: "bg-violet-100 text-violet-700", icon: <FileText size={16} />, description: "Tools for planning your business and MVP approach" }
    ],tools: [
      { 
        id: 1001, 
        name: "Business Model Canvas", 
        category: 103,
        description: "A strategic management template for developing new or documenting existing business models.", 
        link: "#", 
        icon: <FileText size={20} />,
        longDescription: "The Business Model Canvas is a strategic management template used for developing new business models and documenting existing ones. It helps visualize the key components of your business on a single page, making it easier to identify and validate your business hypothesis.",
        benefits: [
          "Provides a holistic view of your entire business on one page",
          "Helps identify connections between different business components",
          "Facilitates team discussions and alignment on business strategy",
          "Allows for quick iteration and testing of business hypotheses"
        ],
        howTo: [
          "Start by defining your customer segments in detail",
          "Articulate your unique value proposition for each segment",
          "Map out key resources, activities, and partnerships needed",
          "Define your revenue streams and cost structure"
        ],
        resources: [
          { title: "Strategyzer - Business Model Canvas Explained", url: "#", type: "article" },
          { title: "Business Model Canvas Template (PDF)", url: "#", type: "template" },
          { title: "Video Tutorial: Filling Out Your Canvas", url: "#", type: "video" }
        ],
        duration: "30-60 min",
        difficulty: "beginner",
        type: "template",
        isFeatured: false
      },
      { 
        id: 1002, 
        name: "Value Proposition Canvas", 
        category: 103,
        description: "A tool to ensure a product or service is positioned around what the customer values and needs.", 
        link: "#", 
        icon: <Target size={20} />,
        longDescription: "The Value Proposition Canvas helps you design products and services that customers actually want by focusing on their jobs, pains, and gains. It's a perfect complement to the Business Model Canvas and ensures your value proposition matches customer needs.",
        benefits: [
          "Focus product development on real customer needs",
          "Identify and address specific customer pain points",
          "Create clear alignment between your offering and market demand",
          "Increase chances of product-market fit"
        ],
        howTo: [
          "Identify customer jobs (tasks they're trying to complete)",
          "List pains (negative experiences, risks, obstacles)",
          "Define gains (positive outcomes customers want)",
          "Create pain relievers and gain creators in your offering"
        ],
        resources: [
          { title: "Strategyzer - Value Proposition Canvas Guide", url: "#", type: "article" },
          { title: "Value Proposition Template (PDF)", url: "#", type: "template" }
        ],
        duration: "30-45 min",
        difficulty: "beginner",
        type: "template",
        isFeatured: false
      },
      { 
        id: 1003, 
        name: "Shame Index Calculator", 
        category: 101, 
        description: "Determine product features that deliver core value while maintaining a manageable 6-7/10 on the shame scale.", 
        link: "#", 
        icon: <BarChart2 size={20} />,
        longDescription: "The Shame Index Calculator is a Rabbit MVP exclusive tool that helps you find the sweet spot for your MVP features – delivering enough value while accepting some imperfection. It quantifies your comfort with launching features that aren't fully polished, targeting a 6-7/10 'shame score' that balances speed with quality.",
        benefits: [
          "Overcome perfectionism and launch faster",
          "Focus on features that deliver real value",
          "Quantify the acceptable level of 'incompleteness'",
          "Create psychological safety for launching imperfect features"
        ],
        howTo: [
          "List all potential features for your MVP",
          "Rate each feature on value delivery (1-10)",
          "Rate your discomfort with launching each feature in its minimal state (1-10)",
          "Prioritize features with high value and 6-7 shame score"
        ],
        resources: [
          { title: "Rabbit MVP Shame Index Guide", url: "#", type: "article" },
          { title: "Shame Index Calculator Template", url: "#", type: "template" }
        ],
        duration: "20-30 min",
        difficulty: "intermediate",
        type: "framework",
        isFeatured: true
      },
      { 
        id: 1004, 
        name: "Market Analysis with AI", 
        category: 102, 
        description: "Use AI tools to analyze market trends, competition, and identify potential opportunities.", 
        link: "#", 
        icon: <Search size={20} />,
        longDescription: "This tool leverages AI to quickly analyze market conditions, competitive landscape, and industry trends. It helps you identify underserved needs and potential opportunities, providing data-driven insights to inform your MVP strategy.",
        benefits: [
          "Save time on market research with AI-powered analysis",
          "Identify patterns and trends that might be missed manually",
          "Get data-driven insights to validate your business hypothesis",
          "Compare your idea against existing competitors"
        ],
        howTo: [
          "Define clear research questions about your market",
          "Use AI prompts to gather and analyze market data",
          "Focus on identifying unique gaps and opportunities",
          "Synthesize findings into actionable insights"
        ],
        resources: [
          { title: "Market Analysis AI Prompt Templates", url: "#", type: "template" },
          { title: "Competitive Analysis Framework", url: "#", type: "template" }
        ],
        duration: "1-2 hours",
        difficulty: "beginner",
        type: "ai",
        isFeatured: false
      },
      { 
        id: 1005, 
        name: "Customer Segment Generator", 
        category: 102, 
        description: "Identify and define your target customer segments with specific characteristics and needs.", 
        link: "#", 
        icon: <Users size={20} />,
        longDescription: "This tool helps you identify specific customer segments for your MVP, complete with detailed personas and characteristics. It ensures your product development is focused on real user needs and helps you prioritize which segments to target first.",
        benefits: [
          "Focus your MVP on specific user needs",
          "Create more targeted value propositions",
          "Optimize resource allocation for highest impact segments",
          "Develop more effective marketing strategies"
        ],
        howTo: [
          "Define the broad market your product serves",
          "Use the segmentation matrix to identify sub-groups",
          "Create detailed personas for key segments",
          "Prioritize segments based on size, accessibility, and fit"
        ],
        resources: [
          { title: "Customer Segmentation Templates", url: "#", type: "template" },
          { title: "Persona Creation Guide", url: "#", type: "article" }
        ],
        duration: "45-60 min",
        difficulty: "intermediate",
        type: "template",
        isFeatured: false
      },
      { 
        id: 1006, 
        name: "8 Variant Sequence", 
        category: 101, 
        description: "Generate 8 small variations of your EXISTING idea, then reduce to the 3 best candidates for testing.", 
        link: "#", 
        icon: <Workflow size={20} />,
        longDescription: "The 8 Variant Sequence is a Rabbit MVP exclusive tool for exploring different approaches to solving the same problem. It helps you generate variations of your existing idea, then systematically evaluate and reduce them to the 3 strongest candidates for testing.",
        benefits: [
          "Explore diverse solutions to the same problem",
          "Avoid fixation on a single approach",
          "Discover unexpected innovative angles",
          "Increase chances of finding optimal solution"
        ],
        howTo: [
          "Start with your existing product idea",
          "Generate 8 distinct variations (different features, business models, etc.)",
          "Evaluate each against key criteria (feasibility, desirability, viability)",
          "Select top 3 variants for validation and testing"
        ],
        resources: [
          { title: "8 Variant Sequence Worksheet", url: "#", type: "template" },
          { title: "Variant Evaluation Matrix", url: "#", type: "template" }
        ],
        duration: "60-90 min",
        difficulty: "intermediate",
        type: "framework",
        isFeatured: true
      },
      { 
        id: 1007, 
        name: "RICE Prioritization Framework", 
        category: 103, 
        description: "Prioritize features and initiatives based on Reach, Impact, Confidence, and Effort metrics.", 
        link: "#", 
        icon: <BarChart size={20} />,
        longDescription: "The RICE framework helps you objectively prioritize features and initiatives by scoring them on four factors: Reach (how many users will this affect), Impact (how much will it affect them), Confidence (how sure are you about these estimates), and Effort (how much work is required).",
        benefits: [
          "Make objective, data-driven prioritization decisions",
          "Balance impact with resource constraints",
          "Account for uncertainty in estimates",
          "Create alignment on priorities within teams"
        ],
        howTo: [
          "List all features or initiatives under consideration",
          "Score each on Reach (1-10), Impact (0.25-3), Confidence (0-100%), and Effort (person-weeks)",
          "Calculate RICE score: (Reach × Impact × Confidence) ÷ Effort",
          "Prioritize based on highest RICE scores"
        ],
        resources: [
          { title: "RICE Calculator Template", url: "#", type: "template" },
          { title: "Intercom's Guide to RICE Scoring", url: "#", type: "article" }
        ],
        duration: "30-45 min",
        difficulty: "intermediate",
        type: "framework",
        isFeatured: false
      },
      { 
        id: 1008, 
        name: "Business Hypothesis Generator", 
        category: 103, 
        description: "Create and prioritize 5-10 key business hypotheses that need validation.", 
        link: "#", 
        icon: <ClipboardList size={20} />,
        longDescription: "This tool helps you formulate clear, testable business hypotheses for your MVP. It guides you through creating structured hypotheses about customer problems, solutions, revenue models, and other key aspects of your business model.",
        benefits: [
          "Focus validation efforts on the most critical assumptions",
          "Build a structured approach to testing business viability",
          "Reduce risk by identifying and addressing key uncertainties",
          "Create a clear roadmap for validation activities"
        ],
        howTo: [
          "Identify key assumptions in your business model",
          "Format each as a testable hypothesis",
          "Rate hypotheses on importance and uncertainty",
          "Prioritize those with high importance and uncertainty for testing"
        ],
        resources: [
          { title: "Hypothesis Framework Template", url: "#", type: "template" },
          { title: "Example Hypothesis Library", url: "#", type: "documentation" }
        ],
        duration: "45-60 min",
        difficulty: "intermediate",
        type: "framework",
        isFeatured: false
      }
    ],
    guide: {
      overview: "Business Exploration is the foundation of the Rabbit MVP process, where you define and validate your business hypothesis. This crucial stage sets the direction for your entire MVP journey by establishing a clear vision and understanding of the problem you're solving and for whom.",
      
      keyObjectives: [
        "Define the core business problem you're addressing",
        "Identify your target customer segments",
        "Validate your business hypothesis",
        "Create a clear MVP vision",
        "Establish key metrics for success"
      ],
      
      process: [
        {
          name: "Problem Definition",
          duration: "60-90 minutes",
          description: "Begin by clearly articulating the problem you're solving. Identify specific pain points, current solutions, and why existing approaches are inadequate. Create a concise problem statement that captures the essence of what you're addressing. Utilize strategy tools from your toolset to structure this process."
        },
        {
          name: "Target Customer Analysis",
          duration: "60 minutes",
          description: "Define who will benefit most from your solution. Use market research tools to create specific customer personas, prioritize segments based on pain level and willingness to pay, and identify your 'day one' customer. Map out their current journey in dealing with the problem."
        },
        {
          name: "Market Analysis",
          duration: "60 minutes",
          description: "Understand the competitive landscape and market opportunity. Employ planning tools to identify competitors, analyze their positioning, estimate market size, and identify key trends affecting your market. Focus on finding underserved needs or gaps in existing solutions."
        },
        {
          name: "Value Proposition Crafting",
          duration: "45 minutes",
          description: "Define what makes your solution unique and valuable. Articulate your core value proposition in one clear sentence. Use frameworks from your strategy toolset to identify your unique advantage and connect your solution directly to customer pain points."
        },
        {
          name: "Business Model Definition",
          duration: "60 minutes",
          description: "Determine how your MVP will create and capture value. Apply business modeling tools to select appropriate revenue models, define pricing strategy, identify key resources needed, and calculate basic unit economics. Consider sustainability and scalability of your approach."
        },
        {
          name: "Rapid Hypothesis Formulation",
          duration: "30 minutes",
          description: "Create testable hypotheses about your business idea. Form 3-5 key hypotheses about customer problems and your solution. Format these as clear, testable statements using planning tools from your methodology toolset. Create a simple testing plan for each hypothesis."
        },
        {
          name: "Quality Threshold Setting",
          duration: "20 minutes",
          description: "Apply appropriate frameworks to set quality thresholds. Identify the minimum viable features needed to solve the core problem. Rate your comfort level with launching features at 60-70% completion and identify areas where perfectionism might slow you down."
        },
        {
          name: "MVP Scope Definition",
          duration: "45 minutes",
          description: "Define what's in and out of your MVP. Use prioritization tools to create a clear list of MVP features based on your core value proposition. Ruthlessly eliminate nice-to-have features and define clear success criteria for the MVP."
        }
      ],
      
      stageOutput: [
        "A clearly defined problem statement",
        "Detailed target customer personas",
        "Competitive analysis and market insights",
        "Refined value proposition",
        "Basic business model framework",
        "3-5 prioritized business hypotheses to test",
        "Clearly defined MVP scope with feature set",
        "Quality thresholds for implementation"
      ],
      
      commonPitfalls: [
        "Analysis paralysis: Setting a timer for each section will help you move forward",
        "Perfectionism: Remember, the goal is to define a testable business hypothesis, not a perfect business plan",
        "Scope creep: Be ruthless about cutting features that aren't essential to testing your core hypothesis",
        "Confirmation bias: Look for evidence that might disprove your assumptions, not just confirm them",
        "Ignoring competition: Study competitors not to copy them but to differentiate effectively"
      ],
      
      keyExpertise: [
        "Basic market research skills",
        "Customer segmentation knowledge",
        "Business model understanding",
        "Hypothesis formulation ability",
        "Prioritization capability"
      ],
      
      transitionToNext: "Once you've clearly defined your business hypothesis and MVP scope, you're ready to move to Customer Validation, where you'll test these assumptions with real potential customers.",
      
      resources: [
        {
          title: "Lean Canvas Guide",
          url: "https://leanstack.com/lean-canvas",
          type: "article"
        },
        {
          title: "Value Proposition Design",
          url: "https://www.strategyzer.com/books/value-proposition-design",
          type: "article"
        },
        {
          title: "Market Sizing Techniques",
          url: "https://www.forbes.com/sites/alejandrocremades/2018/09/30/how-to-size-the-market-opportunity-for-your-startup/",
          type: "article"
        },
        {
          title: "Business Model Generation",
          url: "https://www.strategyzer.com/books/business-model-generation",
          type: "article"
        }
      ]
    }
  },
  {
    id: 2,
    title: "Customer Validation",
    description: "Validate your assumptions with real customers. Test your value proposition before building anything.",
    icon: <Users size={36} />,
    color: "text-purple-600",
    colorStart: "#9333ea",
    colorEnd: "#7e22ce",
    duration: "1 day",
    keyOutcome: "Validated problem and solution with real potential customers",
    categories: [
      { id: 201, name: "User Research", color: "bg-purple-100 text-purple-700", icon: <Users size={16} />, description: "Tools for gathering insights directly from users" },
      { id: 202, name: "Testing", color: "bg-fuchsia-100 text-fuchsia-700", icon: <TestTube size={16} />, description: "Tools for testing ideas and assumptions" },
      { id: 203, name: "Analytics", color: "bg-pink-100 text-pink-700", icon: <Database size={16} />, description: "Tools for measuring and analyzing user behavior" }
    ],
    tools: [
      { 
        id: 2001, 
        name: "Remote Micro-Validation", 
        category: 201, 
        description: "Conduct 5 remote validations (15-20 minutes each) to measure the Validation Velocity Index.", 
        link: "#", 
        icon: <Video size={20} />,
        longDescription: "Remote Micro-Validation is a Rabbit MVP exclusive technique for conducting short, focused validation sessions with potential customers. The approach emphasizes speed and quantity of feedback over lengthy, in-depth interviews, enabling rapid validation of core hypotheses.",
        benefits: [
          "Get rapid feedback from 5+ real potential customers",
          "Validate core hypotheses in less than 2 hours total",
          "Measure Validation Velocity Index to track validation speed",
          "Avoid over-investment in unvalidated ideas"
        ],
        howTo: [
          "Identify 5-10 potential customers matching your target segment",
          "Create a focused script with 5-7 key questions (15 min)",
          "Schedule and conduct 5 remote micro-interviews (15-20 min each)",
          "Score and measure validation strength using the VVI metric"
        ],
        resources: [
          { title: "Micro-Validation Script Template", url: "#", type: "template" },
          { title: "Validation Velocity Index Calculator", url: "#", type: "tool" },
          { title: "Customer Sourcing Guide", url: "#", type: "article" }
        ],
        duration: "2-3 hours",
        difficulty: "intermediate",
        type: "framework",
        isFeatured: true
      },
      { 
        id: 2002, 
        name: "Early Warning System", 
        category: 202, 
        description: "5 key questions checking the reality of the problem and solution value.", 
        link: "#", 
        icon: <AlertCircle size={20} />,
        longDescription: "The Early Warning System is a Rabbit MVP exclusive tool consisting of 5 critical validation questions that help identify flawed assumptions early. It acts as a reality check for your MVP concept before you invest significant time in development.",
        benefits: [
          "Quickly identify fundamental flaws in your concept",
          "Avoid wasting time on ideas with poor validation",
          "Focus on high-probability opportunities",
          "Make objective go/no-go decisions"
        ],
        howTo: [
          "Answer the 5 Early Warning System questions honestly",
          "Score each response on a scale of 1-5",
          "Calculate your overall risk score",
          "Proceed only if score exceeds minimum threshold, otherwise pivot"
        ],
        resources: [
          { title: "Early Warning System Checklist", url: "#", type: "template" },
          { title: "Risk Assessment Guide", url: "#", type: "article" }
        ],
        duration: "20-30 min",
        difficulty: "beginner",
        type: "framework",
        isFeatured: true
      },
      { 
        id: 2003, 
        name: "Mom Test Interview Script", 
        category: 201, 
        description: "Create interview questions that prevent biased responses and get honest feedback.", 
        link: "#", 
        icon: <MessageSquare size={20} />,
        longDescription: "Based on Rob Fitzpatrick's 'The Mom Test' methodology, this script builder helps you craft interview questions that prevent bias and extract honest feedback from potential customers, even when they might be inclined to be nice or tell you what you want to hear.",
        benefits: [
          "Get honest feedback instead of false positives",
          "Focus on facts and past behaviors, not hypothetical opinions",
          "Prevent leading questions that bias responses",
          "Extract actionable insights from customer conversations"
        ],
        howTo: [
          "Create questions about the problem, not your solution",
          "Ask about past behaviors, not future intentions",
          "Focus on specifics, not generalizations",
          "Listen for emotional signals and pain points"
        ],
        resources: [
          { title: "Mom Test Interview Script Template", url: "#", type: "template" },
          { title: "The Mom Test Book Summary", url: "#", type: "article" }
        ],
        duration: "30-45 min",
        difficulty: "intermediate",
        type: "template",
        isFeatured: false
      },
      { 
        id: 2004, 
        name: "AI Interview Script Generator", 
        category: 201, 
        description: "Create effective customer interview scripts with AI to validate your business hypotheses.", 
        link: "#", 
        icon: <MessageSquare size={20} />,
        longDescription: "This AI-powered tool helps you generate effective customer interview scripts specifically designed to validate your business hypotheses. It ensures you ask the right questions that will uncover genuine insights about your target customers' problems and needs.",
        benefits: [
          "Ask the right questions to validate assumptions",
          "Eliminate bias in your interview approach",
          "Structure interviews for maximum insight",
          "Save time on interview preparation"
        ],
        howTo: [
          "Define the key hypotheses you need to validate",
          "Use AI to generate question frameworks",
          "Customize questions for your specific context",
          "Include both open-ended and specific questions"
        ],
        resources: [
          { title: "AI Script Generator Guide", url: "#", type: "documentation" },
          { title: "Example Interview Scripts", url: "#", type: "template" }
        ],
        duration: "15-30 min",
        difficulty: "beginner",
        type: "ai",
        isFeatured: false
      },
      { 
        id: 2005, 
        name: "5-Question Survey Builder", 
        category: 202, 
        description: "Create concise, effective surveys with maximum 5 questions to validate key hypotheses.", 
        link: "#", 
        icon: <ClipboardList size={20} />,
        longDescription: "This tool helps you create ultra-focused surveys with just 5 questions that maximize completion rates while validating your core business hypotheses. It ensures every question serves a specific purpose in your validation process.",
        benefits: [
          "Higher completion rates with focused questions",
          "Direct validation of specific assumptions",
          "Quantitative data to complement interviews",
          "Easy distribution and data collection"
        ],
        howTo: [
          "Identify 3-5 key hypotheses to validate",
          "Create one strategic question per hypothesis",
          "Format questions for clear, unbiased responses",
          "Add demographic questions only if essential"
        ],
        resources: [
          { title: "5-Question Survey Template", url: "#", type: "template" },
          { title: "Question Formulation Guide", url: "#", type: "article" }
        ],
        duration: "20-30 min",
        difficulty: "beginner",
        type: "template",
        isFeatured: false
      },
      { 
        id: 2006, 
        name: "Smoke Test Landing Page", 
        category: 202, 
        description: "Create a minimal landing page to test market interest through sign-ups and interactions.", 
        link: "#", 
        icon: <Globe size={20} />,
        longDescription: "A Smoke Test Landing Page helps you validate market interest without building your actual product. It presents your value proposition and measures interest through email sign-ups, pre-orders, or other conversion metrics, giving you quantitative validation data.",
        benefits: [
          "Test market interest with minimal investment",
          "Collect email addresses of interested prospects",
          "Get quantitative data on conversion rates",
          "Begin building an audience before product development"
        ],
        howTo: [
          "Create a single-page website with your value proposition",
          "Include a clear call-to-action (signup, waitlist, etc.)",
          "Drive targeted traffic through ads or social media",
          "Measure and analyze conversion metrics"
        ],
        resources: [
          { title: "Smoke Test Landing Page Templates", url: "#", type: "template" },
          { title: "Traffic Generation Guide", url: "#", type: "article" }
        ],
        duration: "2-4 hours",
        difficulty: "intermediate",
        type: "template",
        isFeatured: false
      },
      { 
        id: 2007, 
        name: "AI Feedback Analyzer", 
        category: 203, 
        description: "Use AI to analyze customer feedback and identify patterns and insights.", 
        link: "#", 
        icon: <BarChart size={20} />,
        longDescription: "This AI-powered tool helps you analyze qualitative feedback from customer interviews, surveys, and other sources. It identifies patterns, sentiment, and key insights that might be missed through manual analysis, helping you make data-driven decisions about your MVP.",
        benefits: [
          "Identify patterns across different feedback sources",
          "Uncover hidden insights in qualitative data",
          "Prioritize feature requests objectively",
          "Make data-driven decisions for your MVP"
        ],
        howTo: [
          "Compile customer feedback from all sources",
          "Use AI to analyze sentiment and extract key themes",
          "Identify frequency and importance of mentioned issues",
          "Generate actionable insights for product development"
        ],
        resources: [
          { title: "Feedback Analysis Prompts", url: "#", type: "template" },
          { title: "Insight Extraction Guide", url: "#", type: "documentation" }
        ],
        duration: "30-60 min",
        difficulty: "beginner",
        type: "ai",
        isFeatured: false
      },
      { 
        id: 2008, 
        name: "Minimum Viable Features (MVF) Builder", 
        category: 202, 
        description: "Define the minimum set of features required to solve the core customer problem.", 
        link: "#", 
        icon: <Layers size={20} />,
        longDescription: "The MVF Builder helps you identify and prioritize the absolute minimum set of features needed to solve your customers' core problem. It forces extreme prioritization to ensure your MVP stays focused and can be built quickly.",
        benefits: [
          "Focus development on what matters most",
          "Avoid feature bloat in your MVP",
          "Create clear scope for implementation",
          "Align features with validated customer needs"
        ],
        howTo: [
          "List all potential features for your product",
          "Map each to specific customer problems/needs",
          "Rank features by problem criticality and implementation effort",
          "Select only the 3-5 features that address the core problem"
        ],
        resources: [
          { title: "MVF Builder Worksheet", url: "#", type: "template" },
          { title: "Feature Prioritization Guide", url: "#", type: "article" }
        ],
        duration: "45-60 min",
        difficulty: "intermediate",
        type: "framework",
        isFeatured: false
      }
    ],
    guide: {
      overview: "Customer Validation is where you test your business hypotheses with real potential customers before building anything. This critical stage prevents wasting resources on building something nobody wants by gathering direct feedback from your target audience.",
      
      keyObjectives: [
        "Validate the existence and importance of the problem you're solving",
        "Confirm your target audience's willingness to use and pay for your solution",
        "Gather insights on user expectations and requirements",
        "Refine your value proposition based on real feedback",
        "Determine if you should proceed, pivot, or abandon your current approach"
      ],
      
      process: [
        {
          name: "Validation Planning",
          duration: "45 minutes",
          description: "Prepare for efficient customer interactions. Select appropriate user research tools to define key hypotheses to validate, create targeted questions, and prepare interview scripts. Focus on structuring conversations that will reveal genuine customer needs rather than confirming your own assumptions."
        },
        {
          name: "Customer Recruitment",
          duration: "60 minutes",
          description: "Find the right people to talk to. Use research tools to identify and reach out to potential customers who fit your target persona. Create a simple screening process to ensure they match your criteria. Aim to recruit 5-10 participants for validation activities."
        },
        {
          name: "Remote Validation Sessions",
          duration: "3-4 hours",
          description: "Conduct efficient validation interviews. Apply micro-validation techniques to run short, focused sessions that respect participants' time while extracting maximum value. Document key insights immediately after each conversation to capture nuances and patterns."
        },
        {
          name: "Validation Assessment",
          duration: "30 minutes",
          description: "Apply critical validation frameworks to evaluate your findings. Use testing tools to assess if the problem is real and important, if customers actively want a solution, and if they'll pay for your proposed approach. Calculate risk levels based on validation results."
        },
        {
          name: "Market Interest Testing",
          duration: "60 minutes",
          description: "Create a minimal test of market interest. Use appropriate testing tools to design a simple landing page or other validation artifact. Include clear calls-to-action and measure conversion rates to gauge initial interest in your solution."
        },
        {
          name: "Feedback Synthesis",
          duration: "60 minutes",
          description: "Organize and analyze the feedback collected. Apply analytic frameworks to identify patterns across customer conversations, note differences between segments, and compare feedback against your initial hypotheses. Document surprising or unexpected insights."
        },
        {
          name: "Minimum Viable Features Definition",
          duration: "45 minutes",
          description: "Define the essential features based on validation. Select appropriate planning tools to map potential features to specific validated customer needs, prioritize those addressing critical problems, and create a clear MVP feature set based on validation insights."
        },
        {
          name: "Go/No-Go Decision",
          duration: "30 minutes",
          description: "Make a data-driven decision about proceeding. Use decision frameworks to evaluate all validation data against your success criteria and decide whether to proceed, pivot, or abandon your current approach. Document your rationale thoroughly."
        }
      ],
      
      stageOutput: [
        "Feedback from 5+ potential customers",
        "Clear validation (or invalidation) of key hypotheses",
        "Initial market interest metrics from testing",
        "Refined value proposition based on customer insights",
        "Clearly defined Minimum Viable Features list",
        "Documented customer pain points and desires",
        "Go/No-Go decision with supporting rationale",
        "Risk assessment based on validation results"
      ],
      
      commonPitfalls: [
        "Confirmation bias: Avoid asking leading questions that just confirm what you want to hear",
        "Selection bias: Make sure you're talking to real potential customers, not just friends and family",
        "Overvaluing positive feedback: People tend to be nice; look for evidence of strong enthusiasm, not just politeness",
        "Ignoring negative signals: Pay special attention to hesitation, concerns, and objections",
        "Validating solutions, not problems: Focus first on validating that the problem exists and matters"
      ],
      
      keyExpertise: [
        "Interview techniques (particularly avoiding leading questions)",
        "Basic landing page creation skills",
        "Feedback synthesis ability",
        "Decision-making framework understanding",
        "Critical listening skills"
      ],
      
      transitionToNext: "Once you've validated your core business hypotheses with real customers and have a clear understanding of what needs to be built, you're ready to move to Solution Design.",
      
      resources: [
        {
          title: "The Mom Test",
          url: "http://momtestbook.com/",
          type: "article"
        },
        {
          title: "How to Structure Customer Development Interviews",
          url: "https://www.startupgrind.com/blog/the-ultimate-guide-to-customer-development-interviews-part-1/",
          type: "article"
        },
        {
          title: "Pretotyping Techniques",
          url: "https://www.pretotyping.org/",
          type: "article"
        },
        {
          title: "Customer Discovery Handbook",
          url: "https://www.startups.com/library/expert-advice/customer-discovery-handbook",
          type: "article"
        }
      ]
    }
  },
  {
    id: 3,
    title: "Solution Design",
    description: "Design the minimum solution that delivers value. Focus on core features that solve the main problem.",
    icon: <Lightbulb size={36} />,
    color: "text-amber-600",
    colorStart: "#d97706",
    colorEnd: "#b45309", 
    duration: "1 day",
    keyOutcome: "Clear design and architecture for your minimum viable solution",
    categories: [
      { id: 301, name: "UX Design", color: "bg-amber-100 text-amber-700", icon: <Lightbulb size={16} />, description: "Tools for designing the user experience" },
      { id: 302, name: "UI Design", color: "bg-yellow-100 text-yellow-700", icon: <Layers size={16} />, description: "Tools for creating the user interface" },
      { id: 303, name: "Planning", color: "bg-orange-100 text-orange-700", icon: <FileText size={16} />, description: "Tools for planning and organizing your solution" }
    ],
    tools: [
      { 
        id: 3001, 
        name: "Three Hat Architecture", 
        category: 303, 
        description: "Three 15-minute sessions from the perspectives of visionary, engineer, and entrepreneur.", 
        link: "#", 
        icon: <Users size={20} />,
        longDescription: "Three Hat Architecture is a Rabbit MVP exclusive approach for rapid solution design. It involves three sequential 15-minute sessions where you adopt different mindsets: the visionary (what's ideal?), the engineer (what's feasible?), and the entrepreneur (what's viable?). This structured approach ensures a balanced solution design.",
        benefits: [
          "Balance innovation, feasibility, and business viability",
          "Overcome individual thinking biases",
          "Create a more holistic solution design",
          "Rapidly converge on an optimal approach"
        ],
        howTo: [
          "Set a timer for each 15-minute session",
          "Session 1: As the Visionary, sketch the ideal solution without constraints",
          "Session 2: As the Engineer, identify technical constraints and feasible approaches",
          "Session 3: As the Entrepreneur, determine what's viable given resources and market"
        ],
        resources: [
          { title: "Three Hat Architecture Worksheet", url: "#", type: "template" },
          { title: "Role Perspective Guide", url: "#", type: "documentation" }
        ],
        duration: "45-60 min",
        difficulty: "intermediate",
        type: "framework",
        isFeatured: true
      },
      { 
        id: 3002, 
        name: "Inverted Competition", 
        category: 301, 
        description: "Adapt solutions from unrelated industries to your project for innovative approaches.", 
        link: "#", 
        icon: <Repeat size={20} />,
        longDescription: "Inverted Competition is a Rabbit MVP exclusive technique that draws inspiration from unrelated industries to solve your specific challenges. By examining how completely different businesses solve similar functional problems, you can discover innovative approaches that haven't been applied in your industry yet.",
        benefits: [
          "Discover unique approaches not used by direct competitors",
          "Break out of industry-standard thinking patterns",
          "Create differentiating features and experiences",
          "Solve problems with proven solutions from other domains"
        ],
        howTo: [
          "Identify the core functional challenges in your product",
          "Select 3-5 completely unrelated industries or domains",
          "Research how they solve similar functional challenges",
          "Adapt and apply these approaches to your context"
        ],
        resources: [
          { title: "Inverted Competition Worksheet", url: "#", type: "template" },
          { title: "Cross-Industry Inspiration Guide", url: "#", type: "article" }
        ],
        duration: "60-90 min",
        difficulty: "advanced",
        type: "framework",
        isFeatured: true
      },
      { 
        id: 3003, 
        name: "Solo Crazy 8's", 
        category: 301, 
        description: "Rapidly sketch 8 solution variations in 8 minutes when working alone.", 
        link: "#", 
        icon: <PenTool size={20} />,
        longDescription: "Solo Crazy 8's adapts the popular group design exercise for individuals. It challenges you to rapidly sketch 8 different solution approaches in just 8 minutes, forcing creative thinking and preventing fixation on a single solution path.",
        benefits: [
          "Generate multiple solution approaches quickly",
          "Overcome design fixation",
          "Explore the solution space broadly before committing",
          "Identify innovative approaches through quantity"
        ],
        howTo: [
          "Fold a paper into 8 sections or prepare 8 digital frames",
          "Set a timer for 8 minutes (1 minute per sketch)",
          "Quickly sketch a different solution approach in each section",
          "Focus on concepts rather than details or aesthetics"
        ],
        resources: [
          { title: "Solo Crazy 8's Template", url: "#", type: "template" },
          { title: "Rapid Sketching Techniques", url: "#", type: "article" }
        ],
        duration: "15-20 min",
        difficulty: "beginner",
        type: "template",
        isFeatured: false
      },
      { 
        id: 3004, 
        name: "AI User Journey Mapper", 
        category: 301, 
        description: "Use AI to map user journeys through your product, identifying key interactions and potential issues.", 
        link: "#", 
        icon: <GitMerge size={20} />,
        longDescription: "This AI-powered tool helps you quickly map out the complete user journey through your product, from initial discovery to core value delivery. It identifies key interaction points, potential friction, and opportunities for improvement, ensuring a cohesive user experience.",
        benefits: [
          "Visualize the complete user experience",
          "Identify potential pain points before building",
          "Ensure a coherent flow through the product",
          "Focus on key user interactions for MVP"
        ],
        howTo: [
          "Define your primary user persona and their goals",
          "Use AI to generate a comprehensive journey map",
          "Identify key touchpoints and critical interactions",
          "Refine the journey to minimize friction points"
        ],
        resources: [
          { title: "Journey Mapping Prompts", url: "#", type: "template" },
          { title: "User Flow Optimization Guide", url: "#", type: "article" }
        ],
        duration: "30-45 min",
        difficulty: "beginner",
        type: "ai",
        isFeatured: false
      },
      { 
        id: 3005, 
        name: "AI-Assisted UI Wireframing", 
        category: 302, 
        description: "Generate low-fidelity wireframes using AI based on your requirements and user flows.", 
        link: "#", 
        icon: <Layers size={20} />,
        longDescription: "This tool uses AI to rapidly generate UI wireframes based on your product requirements and user flows. It creates low-fidelity designs that can be quickly iterated on, saving significant time in the initial design phase.",
        benefits: [
          "Generate wireframes without design skills",
          "Explore multiple interface options quickly",
          "Create a visual foundation for your MVP",
          "Accelerate the design phase significantly"
        ],
        howTo: [
          "Define key screens and their primary functions",
          "Use AI to generate wireframe options for each screen",
          "Select and refine the most promising layouts",
          "Create a cohesive flow between screens"
        ],
        resources: [
          { title: "Wireframing Prompts Library", url: "#", type: "template" },
          { title: "Wireframe Refinement Guide", url: "#", type: "article" }
        ],
        duration: "45-90 min",
        difficulty: "beginner",
        type: "ai",
        isFeatured: false
      },
      { 
        id: 3006, 
        name: "Technology Stack Selector", 
        category: 303, 
        description: "Choose the optimal technology stack for your MVP based on requirements, skills, and constraints.", 
        link: "#", 
        icon: <Layers size={20} />,
        longDescription: "This tool helps you select the ideal technology stack for your MVP based on your specific requirements, existing skills, and project constraints. It guides you through evaluating options and making informed decisions about frameworks, languages, and tools.",
        benefits: [
          "Make informed technology choices for your MVP",
          "Balance development speed with scalability needs",
          "Leverage existing skills and resources",
          "Avoid technical debt from poor stack decisions"
        ],
        howTo: [
          "Define your MVP's key technical requirements",
          "Assess team skills and learning capacity",
          "Evaluate stack options against criteria matrix",
          "Select technologies for frontend, backend, and infrastructure"
        ],
        resources: [
          { title: "Stack Selection Matrix", url: "#", type: "template" },
          { title: "Technology Evaluation Guide", url: "#", type: "article" }
        ],
        duration: "60-90 min",
        difficulty: "intermediate",
        type: "framework",
        isFeatured: false
      },
      { 
        id: 3007, 
        name: "MoSCoW Method", 
        category: 303, 
        description: "Classify features as Must have, Should have, Could have, Won't have for clear prioritization.", 
        link: "#", 
        icon: <FileText size={20} />,
        longDescription: "The MoSCoW Method helps you prioritize features for your MVP by categorizing them into four groups: Must have (essential), Should have (important), Could have (desired), and Won't have (not for this version). This creates clarity on what to build first and what to defer.",
        benefits: [
          "Create clear feature prioritization",
          "Achieve stakeholder alignment on scope",
          "Focus development on essential features",
          "Define clear boundaries for the MVP"
        ],
        howTo: [
          "List all potential features for your product",
          "Categorize each feature into one of the four groups",
          "Ensure 'Must haves' only include true essentials",
          "Document rationale for each categorization"
        ],
        resources: [
          { title: "MoSCoW Prioritization Template", url: "#", type: "template" },
          { title: "Feature Classification Guide", url: "#", type: "article" }
        ],
        duration: "30-45 min",
        difficulty: "beginner",
        type: "framework",
        isFeatured: false
      },
      { 
        id: 3008, 
        name: "Technical Feasibility Matrix", 
        category: 303, 
        description: "Evaluate technical feasibility of ideas in relation to available time and resources.", 
        link: "#", 
        icon: <CheckCircle size={20} />,
        longDescription: "The Technical Feasibility Matrix helps you objectively assess how realistic it is to implement various features within your MVP timeframe and resource constraints. It prevents scope creep and ensures your technical plan is achievable.",
        benefits: [
          "Identify technically challenging features early",
          "Make realistic implementation plans",
          "Balance ambition with feasibility",
          "Reduce risk of project delays"
        ],
        howTo: [
          "List all planned features or components",
          "Rate each on technical complexity (1-5)",
          "Estimate implementation time for each",
          "Map against available resources and skills",
          "Identify high-risk elements requiring simplification or deferral"
        ],
        resources: [
          { title: "Feasibility Assessment Template", url: "#", type: "template" },
          { title: "Technical Risk Mitigation Guide", url: "#", type: "article" }
        ],
        duration: "45-60 min",
        difficulty: "intermediate",
        type: "framework",
        isFeatured: false
      }
    ],
    guide: {
      overview: "Solution Design transforms validated customer needs into a concrete plan for your MVP. During this stage, you'll create the blueprint for your product, focusing on a design that delivers value in the simplest possible way while providing a good user experience.",
      
      keyObjectives: [
        "Transform customer insights into a functional product design",
        "Create user journeys that address validated pain points",
        "Design an intuitive user experience for your MVP",
        "Select appropriate technologies and architecture",
        "Prepare detailed specifications for the implementation phase"
      ],
      
      process: [
        {
          name: "Multi-Perspective Design",
          duration: "60 minutes",
          description: "Approach your design from multiple perspectives. Apply architectural frameworks to sketch the ideal solution, identify technical constraints, and determine what's viable given your resources and market. Integrate these viewpoints into a balanced approach that considers visionary, technical, and business aspects."
        },
        {
          name: "User Journey Mapping",
          duration: "60 minutes",
          description: "Map out the user's experience with your product. Use UX design tools to define key user goals, create step-by-step workflows, identify potential friction points, and focus on the critical path that delivers core value. Base these on validated customer needs from the previous stage."
        },
        {
          name: "Innovative Solution Analysis",
          duration: "45 minutes",
          description: "Look for innovative solutions that differentiate your product. Apply cross-industry frameworks to identify approaches from unrelated domains that could be applied to your challenges. Incorporate uniquely innovative elements that will make your solution stand out."
        },
        {
          name: "Interface Design",
          duration: "90 minutes",
          description: "Create visual representations of your interface. Use appropriate UI design tools to generate interface ideas, create wireframes for key screens, focus on information architecture and user flow, and validate these against your user stories and tasks."
        },
        {
          name: "Technology Selection",
          duration: "60 minutes",
          description: "Choose the right tools for building your MVP. Employ planning frameworks to define technical requirements, evaluate potential technologies based on development speed and team familiarity, and make explicit choices for your tech stack."
        },
        {
          name: "Technical Feasibility Assessment",
          duration: "45 minutes",
          description: "Ensure your design is technically viable. Use assessment tools to break down the solution into components, rate implementation complexity, identify potential risks, and create mitigation strategies for the most challenging aspects."
        },
        {
          name: "Feature Prioritization",
          duration: "45 minutes",
          description: "Create a clear implementation roadmap. Apply prioritization frameworks to categorize features based on importance and effort, ensure you're focusing only on what's truly essential, and create a clear implementation sequence for core functionality."
        },
        {
          name: "Design Documentation",
          duration: "60 minutes",
          description: "Create comprehensive documentation for implementation. Use planning tools to document user flows, finalize wireframes, create technical specifications, and establish standards for the implementation phase."
        }
      ],
      
      stageOutput: [
        "Balanced product design incorporating multiple perspectives",
        "Detailed user journey maps for key workflows",
        "Low-fidelity wireframes for all key screens",
        "Selected technology stack with rationale",
        "Technical feasibility assessment",
        "Prioritized feature list with implementation order",
        "Implementation roadmap with sequence",
        "Comprehensive design documentation"
      ],
      
      commonPitfalls: [
        "Feature creep: Stay focused on only what's needed to deliver core value",
        "Over-designing: Keep interfaces simple and focused on core functionality",
        "Analysis paralysis: Set time limits for each design decision",
        "Premature optimization: Focus on 'good enough' solutions that can be refined later",
        "Technology bias: Choose technologies based on project needs, not personal preferences"
      ],
      
      keyExpertise: [
        "Basic user experience design knowledge",
        "Wireframing skills (can be very low-fidelity)",
        "Technical architecture understanding",
        "Prioritization framework familiarity",
        "Documentation ability"
      ],
      
      transitionToNext: "With a clear design plan in place, you're ready to move to Core Implementation, where you'll build the foundational elements of your MVP.",
      
      resources: [
        {
          title: "User Journey Mapping Guide",
          url: "https://www.nngroup.com/articles/journey-mapping-101/",
          type: "article"
        },
        {
          title: "Wireframing Best Practices",
          url: "https://www.smashingmagazine.com/2018/03/guide-wireframing-prototyping/",
          type: "article"
        },
        {
          title: "Choosing the Right Tech Stack for Your MVP",
          url: "https://www.ycombinator.com/library/6f-how-to-choose-the-right-tech-stack-for-your-startup",
          type: "article"
        },
        {
          title: "Feature Prioritization Techniques",
          url: "https://www.productplan.com/learn/feature-prioritization-techniques/",
          type: "article"
        }
      ]
    }
  },
  {
    id: 4,
    title: "Core Implementation",
    description: "Build the essential features using low-code/no-code solutions. Focus on functionality over perfection.",
    icon: <Code size={36} />,
    color: "text-green-600",
    colorStart: "#16a34a",
    colorEnd: "#15803d",
    duration: "1-2 days",
    keyOutcome: "Working foundation of your product with essential functionality",
    categories: [
      { id: 401, name: "Development", color: "bg-green-100 text-green-700", icon: <Code size={16} />, description: "Tools for building your product" },
      { id: 402, name: "No-Code", color: "bg-emerald-100 text-emerald-700", icon: <BrainCircuit size={16} />, description: "No-code tools to accelerate development" },
      { id: 403, name: "Data", color: "bg-teal-100 text-teal-700", icon: <Database size={16} />, description: "Tools for managing your data" }
    ],
    tools: [
      { 
        id: 4001, 
        name: "One Deliberate Insanity", 
        category: 401, 
        description: "Implement one extreme feature that breaks conventions and creates a unique value proposition.", 
        link: "#", 
        icon: <Zap size={20} />,
        longDescription: "One Deliberate Insanity is a Rabbit MVP exclusive approach that encourages you to implement one extreme, unconventional feature in your MVP that differentiates it dramatically from competitors. This 'insane' feature becomes your unique selling proposition and creates memorable product experiences.",
        benefits: [
          "Create a genuine differentiator for your product",
          "Stand out in a crowded market",
          "Generate buzz and word-of-mouth",
          "Make your product memorable and remarkable"
        ],
        howTo: [
          "Identify conventions and norms in your product category",
          "Brainstorm ways to deliberately break these conventions",
          "Select one 'insane' feature that delivers unique value",
          "Implement this feature even if it seems extreme"
        ],
        resources: [
          { title: "Deliberate Insanity Worksheet", url: "#", type: "template" },
          { title: "Unconventional Feature Examples", url: "#", type: "article" }
        ],
        duration: "90-120 min",
        difficulty: "advanced",
        type: "framework",
        isFeatured: true
      },
      { 
        id: 4002, 
        name: "Meta-Rabbit Framework", 
        category: 401, 
        description: "Leverage AI components and prompts from previous projects to accelerate development.", 
        link: "#", 
        icon: <Repeat size={20} />,
        longDescription: "The Meta-Rabbit Framework is a proprietary system for reusing and adapting AI components, code snippets, and prompts from previous Rabbit MVP projects. It creates a compounding efficiency gain, where each new project benefits from all previous ones.",
        benefits: [
          "Accelerate development with pre-built components",
          "Leverage proven AI prompts from past projects",
          "Avoid solving the same problems repeatedly",
          "Increase efficiency with each new project"
        ],
        howTo: [
          "Review your library of previous Rabbit MVP components",
          "Identify reusable elements relevant to current project",
          "Adapt and integrate these components into your MVP",
          "Document new components for future projects"
        ],
        resources: [
          { title: "Meta-Rabbit Component Library", url: "#", type: "documentation" },
          { title: "AI Prompt Collection", url: "#", type: "template" }
        ],
        duration: "Ongoing",
        difficulty: "intermediate",
        type: "framework",
        isFeatured: true
      },
      { 
        id: 4003, 
        name: "No-Code Platform Selector", 
        category: 402, 
        description: "Choose the right no-code/low-code platform for your specific MVP needs.", 
        link: "#", 
        icon: <LayoutDashboard size={20} />,
        longDescription: "This tool helps you evaluate and select the most appropriate no-code or low-code platform for your specific MVP requirements. It compares platforms based on capabilities, learning curve, integration options, and scalability to find your optimal match.",
        benefits: [
          "Find the optimal platform for your use case",
          "Compare features of top no-code solutions",
          "Evaluate trade-offs between platforms",
          "Select based on your specific MVP requirements"
        ],
        howTo: [
          "Define your MVP's key requirements and constraints",
          "Rate importance of factors like visual design, data complexity, etc.",
          "Compare top platforms against your weighted criteria",
          "Select the platform with the best fit score"
        ],
        resources: [
          { title: "No-Code Platform Comparison Matrix", url: "#", type: "template" },
          { title: "Platform Selection Guide", url: "#", type: "article" }
        ],
        duration: "30-60 min",
        difficulty: "beginner",
        type: "framework",
        isFeatured: false
      },
      { 
        id: 4004, 
        name: "AI Code Generation", 
        category: 401, 
        description: "Use AI to generate code for specific components and features of your MVP.", 
        link: "#", 
        icon: <Code size={20} />,
        longDescription: "This tool leverages AI to generate functional code for various components of your MVP. It can create everything from UI components to backend functionality, significantly accelerating development speed even for technical founders.",
        benefits: [
          "Generate working code without extensive programming",
          "Accelerate development of common features",
          "Implement complex functionality more easily",
          "Reduce technical barriers to MVP creation"
        ],
        howTo: [
          "Define clear requirements for the component needed",
          "Provide context about your tech stack and constraints",
          "Use structured prompts to generate initial code",
          "Test and refine the generated code"
        ],
        resources: [
          { title: "Code Generation Prompt Library", url: "#", type: "template" },
          { title: "Code Refinement Best Practices", url: "#", type: "article" }
        ],
        duration: "Varies by component",
        difficulty: "intermediate",
        type: "ai",
        isFeatured: false
      },
      { 
        id: 4005, 
        name: "UI Component Library", 
        category: 401, 
        description: "Pre-built interface components that can be quickly assembled into applications.", 
        link: "#", 
        icon: <Layers size={20} />,
        longDescription: "This curated library of UI components provides ready-to-use interface elements that can be quickly assembled into a cohesive application. It includes everything from basic inputs to complex interactive elements, all designed for rapid implementation.",
        benefits: [
          "Accelerate UI development with pre-built components",
          "Ensure consistency across your application",
          "Implement professional-looking interfaces without design skills",
          "Focus on product functionality rather than UI details"
        ],
        howTo: [
          "Review available components for your framework/platform",
          "Select components that match your functional needs",
          "Customize colors and styling to match your brand",
          "Assemble components into coherent screens and flows"
        ],
        resources: [
          { title: "Component Libraries Directory", url: "#", type: "documentation" },
          { title: "UI Customization Guide", url: "#", type: "article" }
        ],
        duration: "Ongoing",
        difficulty: "beginner",
        type: "template",
        isFeatured: false
      },
      { 
        id: 4006, 
        name: "API Integration Platform", 
        category: 403, 
        description: "Tools that simplify connecting your application with third-party services.", 
        link: "#", 
        icon: <Link2 size={20} />,
        longDescription: "This tool helps you quickly integrate third-party APIs and services into your MVP without extensive custom code. It provides connectors, documentation, and implementation guides for common services like payments, authentication, maps, and more.",
        benefits: [
          "Add powerful functionality through existing services",
          "Reduce custom development requirements",
          "Accelerate implementation of complex features",
          "Leverage production-ready, tested solutions"
        ],
        howTo: [
          "Identify third-party services needed in your MVP",
          "Select appropriate API connectors or integration tools",
          "Configure authentication and basic settings",
          "Implement specific API calls needed for your features"
        ],
        resources: [
          { title: "API Integration Directory", url: "#", type: "documentation" },
          { title: "Quick Integration Guides", url: "#", type: "template" }
        ],
        duration: "Varies by integration",
        difficulty: "intermediate",
        type: "software",
        isFeatured: false
      },
      { 
        id: 4007, 
        name: "Development Sprint", 
        category: 401, 
        description: "4-hour block of intensive work on a specific feature or component.", 
        link: "#", 
        icon: <Clock size={20} />,
        longDescription: "Development Sprints are focused 4-hour blocks dedicated to implementing a specific feature or component of your MVP. The time constraint creates urgency and focus, helping you make significant progress in a short period.",
        benefits: [
          "Create intense focus on a specific implementation goal",
          "Break development into manageable chunks",
          "Maintain momentum with concrete achievements",
          "Overcome procrastination and perfectionism"
        ],
        howTo: [
          "Define a clear, specific goal for the 4-hour sprint",
          "Eliminate distractions and prepare all necessary resources",
          "Work intensely for the full 4 hours (with short breaks)",
          "Conclude with testing and documentation of progress"
        ],
        resources: [
          { title: "Sprint Planning Template", url: "#", type: "template" },
          { title: "Focused Development Techniques", url: "#", type: "article" }
        ],
        duration: "4 hours",
        difficulty: "intermediate",
        type: "framework",
        isFeatured: false
      },
      { 
        id: 4008, 
        name: "Database Schema Designer", 
        category: 403, 
        description: "Quickly design and implement a minimal database schema for your MVP.", 
        link: "#", 
        icon: <Database size={20} />,
        longDescription: "This tool helps you design a streamlined database schema that meets your MVP's data requirements without unnecessary complexity. It focuses on the minimum viable data structure while ensuring good practices for future scalability.",
        benefits: [
          "Create an appropriate data structure for your MVP",
          "Avoid common database design pitfalls",
          "Balance current needs with future scalability",
          "Implement quickly with generated scripts"
        ],
        howTo: [
          "Identify key entities and their relationships",
          "Define essential attributes for each entity",
          "Design minimal schema focused on core functionality",
          "Generate implementation scripts for your chosen database"
        ],
        resources: [
          { title: "Schema Design Worksheet", url: "#", type: "template" },
          { title: "Database Implementation Guide", url: "#", type: "article" }
        ],
        duration: "45-90 min",
        difficulty: "intermediate",
        type: "template",
        isFeatured: false
      }
    ],
    guide: {
      overview: "Core Implementation is where your MVP begins to take tangible form. In this stage, you'll focus on building the fundamental elements of your product using low-code/no-code approaches wherever possible to maximize speed and efficiency.",
      
      keyObjectives: [
        "Build the essential infrastructure and foundation of your product",
        "Implement core functionality that delivers your primary value proposition",
        "Create a working product skeleton that can be expanded upon",
        "Validate technical assumptions and approach",
        "Establish the development workflow for feature expansion"
      ],
      
      process: [
        {
          name: "Development Environment Setup",
          duration: "45 minutes",
          description: "Prepare your technical foundation. Utilize appropriate development tools to set up version control, configure environments, establish code standards, and install essential dependencies. This creates the technical infrastructure for your implementation."
        },
        {
          name: "No-Code/Low-Code Platform Selection",
          duration: "60 minutes",
          description: "Identify optimal tools for rapid development. Apply selection frameworks to evaluate platforms based on your requirements, choosing appropriate solutions for frontend, backend, authentication, and integrations. Focus on tools that accelerate development without sacrificing essential functionality."
        },
        {
          name: "Data Foundation Implementation",
          duration: "90 minutes",
          description: "Create your data foundation. Use database tools to design a minimal schema, create necessary tables and relationships, define API structure, and implement basic security. Focus on only the essential data elements needed for core functionality."
        },
        {
          name: "Differentiating Feature Implementation",
          duration: "90 minutes",
          description: "Create your standout feature. Apply innovation frameworks to implement one feature that breaks conventional approaches, making your product memorable and unique. This should be the feature that embodies your core value proposition most distinctly."
        },
        {
          name: "Core Functionality Development",
          duration: "4 hours",
          description: "Build your product foundation. Use rapid development techniques to implement the absolute core functionality, create a minimal viable user interface, and implement essential user flows. Utilize templates and components wherever possible to accelerate development."
        },
        {
          name: "User Authentication Implementation",
          duration: "60 minutes",
          description: "Create essential user management features. Apply authentication frameworks to implement sign-up and login functionality, create basic user profiles if needed, and set up essential permissions. Focus on security fundamentals without overcomplicating."
        },
        {
          name: "Component Reuse and Adaptation",
          duration: "60 minutes",
          description: "Leverage reusable elements. Apply appropriate frameworks to identify components from previous projects that can be reused, adapt existing patterns to current challenges, and document new components created for future use."
        },
        {
          name: "Initial Technical Testing",
          duration: "60 minutes",
          description: "Verify your implementation works. Use testing frameworks to check core functionality across different environments, identify and fix critical issues, verify data handling, and ensure basic security and performance meet minimum requirements."
        }
      ],
      
      stageOutput: [
        "Configured development environments",
        "Selected and set up no-code/low-code platforms",
        "Implemented database and API structure",
        "Created one standout differentiating feature",
        "Built core product functionality",
        "Implemented basic user authentication",
        "Applied reusable components where possible",
        "Completed initial technical testing",
        "A working foundation for your product"
      ],
      
      commonPitfalls: [
        "Perfectionism: Focus on functional over beautiful - aim for the right quality threshold",
        "Custom coding everything: Use existing libraries, templates, and components wherever possible",
        "Premature optimization: Avoid optimizing for scale or edge cases in the MVP",
        "Scope expansion: Stick rigorously to implementing only the core features",
        "Technology churn: Avoid switching technologies once implementation has begun"
      ],
      
      keyExpertise: [
        "Basic programming or no-code platform experience",
        "Database design fundamentals",
        "API implementation knowledge",
        "Testing methodologies",
        "Component-based development understanding"
      ],
      
      transitionToNext: "With the core functionality of your MVP implemented, you're ready to move to Feature Expansion, where you'll build out the secondary features that enhance the product.",
      
      resources: [
        {
          title: "No-Code Development Platforms Comparison",
          url: "https://www.nocode.tech/tools",
          type: "article"
        },
        {
          title: "Database Schema Design Best Practices",
          url: "https://www.dbdesigner.net/blog/database-schema-design-best-practices/",
          type: "article"
        },
        {
          title: "API Design Guidelines",
          url: "https://github.com/microsoft/api-guidelines/blob/vNext/Guidelines.md",
          type: "documentation"
        },
        {
          title: "MVP Technical Testing Checklist",
          url: "https://blog.codinghorror.com/the-last-responsible-moment/",
          type: "article"
        }
      ]
    }
  },
  {
    id: 6,
    title: "Testing & Refinement",
    description: "Test with real users, gather feedback, and make quick refinements to improve the experience.",
    icon: <TestTube size={36} />,
    color: "text-rose-600",
    colorStart: "#e11d48",
    colorEnd: "#be123c",
    duration: "1 day",
    keyOutcome: "Refined product based on real user feedback and testing results",
    categories: [
      { id: 601, name: "User Testing", color: "bg-rose-100 text-rose-700", icon: <Users size={16} />, description: "Tools for testing with real users" },
      { id: 602, name: "Feedback", color: "bg-red-100 text-red-700", icon: <Lightbulb size={16} />, description: "Tools for collecting and analyzing feedback" },
      { id: 603, name: "Optimization", color: "bg-pink-100 text-pink-700", icon: <Zap size={16} />, description: "Tools for improving your product" }
    ],
    tools: [
      { 
        id: 6001, 
        name: "Remote Micro-Tests", 
        category: 601, 
        description: "Short, targeted remote testing sessions focused on specific aspects of your product.", 
        link: "#", 
        icon: <Video size={20} />,
        longDescription: "Remote Micro-Tests are short, focused testing sessions designed to quickly evaluate specific features or aspects of your product. They emphasize brevity and specificity, allowing you to gather actionable feedback without lengthy test sessions.",
        benefits: [
          "Get targeted feedback on specific features",
          "Run multiple tests in the time a traditional test would take",
          "Focus each test on solving a specific question",
          "Iterate quickly based on immediate insights"
        ],
        howTo: [
          "Identify specific aspects of your product to test",
          "Create a focused 10-15 minute test script for each aspect",
          "Recruit 3-5 participants matching your target users",
          "Conduct short remote sessions and document findings"
        ],
        resources: [
          { title: "Micro-Test Script Templates", url: "#", type: "template" },
          { title: "Remote Testing Tools Guide", url: "#", type: "article" }
        ],
        duration: "30-90 min per test series",
        difficulty: "intermediate",
        type: "framework",
        isFeatured: true
      },
      { 
        id: 6002, 
        name: "Shame Index Revisit", 
        category: 602, 
        description: "Compare your current shame index (4-7/10 is optimal) with initial assumptions.", 
        link: "#", 
        icon: <Repeat size={20} />,
        longDescription: "The Shame Index Revisit is a Rabbit MVP exclusive tool for reassessing your product's level of 'readiness' using the Shame Index scale. It helps you determine if your MVP has reached the optimal 4-7/10 shame level: good enough to deliver value while still leaving room for improvement based on feedback.",
        benefits: [
          "Objectively assess your MVP's current state",
          "Verify you've reached the optimal 'good enough' balance",
          "Identify areas that need more attention before launch",
          "Create permission to launch with imperfection"
        ],
        howTo: [
          "Review each feature implementation in your current MVP",
          "Rate your comfort level with each (1-10 shame scale)",
          "Calculate your overall Shame Index score",
          "Verify it falls in the optimal 4-7 range for launching"
        ],
        resources: [
          { title: "Shame Index Reassessment Template", url: "#", type: "template" },
          { title: "Launch Readiness Guide", url: "#", type: "article" }
        ],
        duration: "20-30 min",
        difficulty: "beginner",
        type: "framework",
        isFeatured: true
      },
      { 
        id: 6003, 
        name: "First Click Testing", 
        category: 601, 
        description: "Evaluate interface intuitiveness by analyzing users' first clicks on tasks.", 
        link: "#", 
        icon: <MousePointer size={20} />,
        longDescription: "First Click Testing evaluates how intuitive your interface is by tracking where users first click when trying to complete specific tasks. Research shows that users who get the first click right have an 87% chance of completing the task successfully, making this a powerful usability metric.",
        benefits: [
          "Identify unintuitive interface elements quickly",
          "Predict task completion success rates",
          "Focus improvements on high-impact navigation issues",
          "Get quick usability data with minimal setup"
        ],
        howTo: [
          "Identify 3-5 key tasks users need to accomplish",
          "Create a simple test presenting one task at a time",
          "Ask users where they would click first to accomplish each task",
          "Analyze click patterns to identify confusion points"
        ],
        resources: [
          { title: "First Click Test Setup Guide", url: "#", type: "article" },
          { title: "Click Pattern Analysis Template", url: "#", type: "template" }
        ],
        duration: "45-60 min",
        difficulty: "beginner",
        type: "framework",
        isFeatured: false
      },
      { 
        id: 6004, 
        name: "5-Second Test", 
        category: 601, 
        description: "Test first impressions by showing interfaces for just 5 seconds.", 
        link: "#", 
        icon: <Clock size={20} />,
        longDescription: "The 5-Second Test evaluates users' first impressions of your product by showing them the interface for just 5 seconds, then asking specific questions. It helps you understand what stands out, what's memorable, and what impression your product creates immediately.",
        benefits: [
          "Assess immediate clarity and impact of your interface",
          "Identify what features/elements stand out most",
          "Test whether your value proposition is immediately clear",
          "Get quick feedback with minimal participant time"
        ],
        howTo: [
          "Prepare screens from your product for testing",
          "Show each screen to participants for exactly 5 seconds",
          "Ask what they remember and what they think the product does",
          "Analyze patterns in responses to identify clarity issues"
        ],
        resources: [
          { title: "5-Second Test Script", url: "#", type: "template" },
          { title: "First Impression Analysis Guide", url: "#", type: "article" }
        ],
        duration: "30-45 min",
        difficulty: "beginner",
        type: "framework",
        isFeatured: false
      },
      { 
        id: 6005, 
        name: "Unmoderated User Testing", 
        category: 601, 
        description: "Get automated testing with video recording of users completing tasks.", 
        link: "#", 
        icon: <Video size={20} />,
        longDescription: "Unmoderated User Testing platforms allow you to set up usability tests that participants complete on their own time. The platform records their screen, voice, and sometimes facial expressions as they complete tasks, giving you rich usability data without requiring your presence.",
        benefits: [
          "Collect usability data asynchronously",
          "Scale testing to multiple participants simultaneously",
          "Get natural usage behavior in users' own environments",
          "Receive organized results with minimal management"
        ],
        howTo: [
          "Create a test plan with specific tasks and questions",
          "Set up the test on an unmoderated testing platform",
          "Recruit appropriate participants (or use platform services)",
          "Review recordings and analyze results"
        ],
        resources: [
          { title: "Unmoderated Test Setup Guide", url: "#", type: "article" },
          { title: "Task Design Best Practices", url: "#", type: "documentation" }
        ],
        duration: "Setup: 60-90 min, Results: 24-48 hours",
        difficulty: "intermediate",
        type: "software",
        isFeatured: false
      },
      { 
        id: 6006, 
        name: "Heuristic Evaluation", 
        category: 603, 
        description: "Systematically assess your interface against established usability principles.", 
        link: "#", 
        icon: <CheckCircle size={20} />,
        longDescription: "Heuristic Evaluation is a usability assessment method where you evaluate your interface against established usability principles or 'heuristics'. It helps you identify common usability issues systematically without requiring external users.",
        benefits: [
          "Identify common usability issues quickly",
          "Apply expert usability knowledge without expertise",
          "Evaluate without recruiting external participants",
          "Discover issues that might be missed in user testing"
        ],
        howTo: [
          "Select appropriate usability heuristics (e.g., Nielsen's 10)",
          "Examine each element of your interface against each heuristic",
          "Document violations and rate their severity",
          "Prioritize fixes based on severity and frequency"
        ],
        resources: [
          { title: "Heuristic Evaluation Checklist", url: "#", type: "template" },
          { title: "Common Usability Principles Guide", url: "#", type: "article" }
        ],
        duration: "60-120 min",
        difficulty: "intermediate",
        type: "framework",
        isFeatured: false
      },
      { 
        id: 6007, 
        name: "Guerrilla Testing", 
        category: 601, 
        description: "Quick, informal tests with easily accessible users.", 
        link: "#", 
        icon: <Users size={20} />,
        longDescription: "Guerrilla Testing is a low-cost, informal approach to user testing that involves recruiting impromptu participants from accessible locations (cafes, coworking spaces, friends, etc.) for quick feedback sessions. It sacrifices some methodological rigor for speed and convenience.",
        benefits: [
          "Get quick feedback with minimal planning",
          "Test with real people at virtually no cost",
          "Iterate rapidly based on immediate insights",
          "Overcome recruitment barriers to testing"
        ],
        howTo: [
          "Prepare 2-3 simple tasks for testing",
          "Find accessible locations with potential participants",
          "Approach people politely, offering incentives if possible",
          "Run brief 5-10 minute tests and document key observations"
        ],
        resources: [
          { title: "Guerrilla Testing Kit", url: "#", type: "template" },
          { title: "Quick Feedback Documentation Guide", url: "#", type: "article" }
        ],
        duration: "2-3 hours",
        difficulty: "beginner",
        type: "framework",
        isFeatured: false
      },
      { 
        id: 6008, 
        name: "Error Tracking", 
        category: 603, 
        description: "Implement tools to monitor and report errors in real-time.", 
        link: "#", 
        icon: <AlertCircle size={20} />,
        longDescription: "Error Tracking tools automatically capture, report, and help diagnose errors and exceptions in your MVP. They provide real-time alerts, detailed context, and debugging information, allowing you to quickly identify and fix issues as they occur.",
        benefits: [
          "Detect and fix errors before most users encounter them",
          "Receive detailed context for faster debugging",
          "Prioritize fixes based on frequency and impact",
          "Improve stability without manual monitoring"
        ],
        howTo: [
          "Select an appropriate error tracking tool",
          "Integrate the tracking code into your application",
          "Configure alerts and notification settings",
          "Set up error categorization and prioritization"
        ],
        resources: [
          { title: "Error Tracking Tool Comparison", url: "#", type: "article" },
          { title: "Implementation Guide", url: "#", type: "documentation" }
        ],
        duration: "30-60 min",
        difficulty: "intermediate",
        type: "software",
        isFeatured: false
      }
    ],
    guide: {
      overview: "Testing & Refinement puts your MVP in front of real users to gather feedback and make critical improvements before launch. This stage focuses on identifying and fixing usability issues, validating that the product delivers value, and making final adjustments to enhance the user experience.",
      
      keyObjectives: [
        "Test your MVP with representative users",
        "Identify critical usability issues and pain points",
        "Validate that the product delivers the expected value",
        "Make targeted improvements based on feedback",
        "Prepare the product for public launch"
      ],
      
      process: [
        {
          name: "Test Planning",
          duration: "45 minutes",
          description: "Prepare for effective user testing. Use testing frameworks to define specific objectives, create task scenarios, determine success metrics, and prepare the test environment. This ensures you'll gather actionable data from user interactions."
        },
        {
          name: "User Testing Execution",
          duration: "3 hours",
          description: "Conduct efficient user testing. Apply testing tools to recruit participants, run focused remote sessions, observe user behavior, and document insights. Focus on identifying usability issues and validating value delivery."
        },
        {
          name: "Intuitiveness Assessment",
          duration: "45 minutes",
          description: "Evaluate interface intuitiveness. Apply appropriate testing frameworks to analyze users' navigation patterns, identify confusion points, and assess task completion success. This highlights where users struggle to understand your interface."
        },
        {
          name: "First Impression Evaluation",
          duration: "30 minutes",
          description: "Test immediate clarity and impressions. Use testing tools to evaluate what users understand about your product in the first few seconds, what stands out, and whether your value proposition is immediately clear. This reveals how your product is initially perceived."
        },
        {
          name: "Quality Assessment",
          duration: "30 minutes",
          description: "Reassess your product's completion level. Apply quality frameworks to review each feature on your quality scale, ensure your product meets minimum thresholds, and identify areas needing urgent attention. This confirms you're ready to launch at the current quality level."
        },
        {
          name: "Critical Issue Resolution",
          duration: "2 hours",
          description: "Fix the most important problems. Apply appropriate development tools to prioritize and resolve critical usability issues, address showstopper bugs, and improve unclear workflows. Focus only on high-impact improvements."
        },
        {
          name: "Usability Evaluation",
          duration: "60 minutes",
          description: "Systematically assess against usability principles. Use evaluation frameworks to check your interface against established standards, identify violations, and rate their severity. This provides a structured approach to identifying improvement opportunities."
        },
        {
          name: "Monitoring Implementation",
          duration: "45 minutes",
          description: "Set up systems to track post-launch issues. Apply monitoring tools to implement error tracking, configure alerts, and set up performance monitoring. This ensures you'll have visibility into how your product performs after launch."
        }
      ],
      
      stageOutput: [
        "Completed user testing with representative participants",
        "Identified and documented usability issues",
        "Fixed critical problems and showstoppers",
        "Improved unclear or confusing aspects of the product",
        "Verified appropriate quality level",
        "Implemented error tracking and monitoring",
        "Completed systematic usability evaluation",
        "A refined MVP ready for launch"
      ],
      
      commonPitfalls: [
        "Defensive reactions: View criticism as valuable feedback, not personal attacks",
        "Overreacting to single user opinions: Look for patterns across multiple users",
        "Attempting to fix everything: Focus only on critical issues before launch",
        "Testing with the wrong users: Ensure test participants match your target audience",
        "Leading questions: Avoid influencing user behavior during testing"
      ],
      
      keyExpertise: [
        "User testing facilitation skills",
        "Usability principles knowledge",
        "Prioritization ability",
        "Basic debugging skills",
        "User feedback interpretation"
      ],
      
      transitionToNext: "With a tested and refined MVP ready to go, you're prepared to move to Launch & Learn, where you'll release your product to early adopters and begin collecting real-world data.",
      
      resources: [
        {
          title: "Remote User Testing Guide",
          url: "https://www.nngroup.com/articles/remote-usability-tests/",
          type: "article"
        },
        {
          title: "Usability Heuristics",
          url: "https://www.nngroup.com/articles/ten-usability-heuristics/",
          type: "article"
        },
        {
          title: "Prioritizing Usability Issues",
          url: "https://www.uxmatters.com/mt/archives/2009/06/prioritizing-usability-problems.php",
          type: "article"
        },
        {
          title: "Error Monitoring Tools Comparison",
          url: "https://stackshare.io/error-monitoring",
          type: "article"
        }
      ]
    }
  },
  {
    id: 7,
    title: "Launch & Learn",
    description: "Release your MVP to early adopters and start collecting real-world data for the next iteration.",
    icon: <Rocket size={36} />,
    color: "text-indigo-600",
    colorStart: "#4f46e5",
    colorEnd: "#4338ca",
    duration: "1 day",
    keyOutcome: "Launched product with data collection systems for learning and iteration",
    categories: [
      { id: 701, name: "Launch", color: "bg-indigo-100 text-indigo-700", icon: <Rocket size={16} />, description: "Tools for launching your product" },
      { id: 702, name: "Analytics", color: "bg-violet-100 text-violet-700", icon: <Database size={16} />, description: "Tools for analyzing performance" },
      { id: 703, name: "Strategy", color: "bg-purple-100 text-purple-700", icon: <BrainCircuit size={16} />, description: "Tools for planning your next steps" }
    ],
    tools: [
      { 
        id: 7001, 
        name: "Early Warning System - Post-Launch", 
        category: 702, 
        description: "5 verification questions in the context of collected data.", 
        link: "#", 
        icon: <AlertCircle size={20} />,
        longDescription: "The Post-Launch Early Warning System is a Rabbit MVP exclusive tool that helps you evaluate early signals from your launched MVP. It consists of 5 critical questions that, when evaluated against initial usage data, help you quickly determine if your product is on the right track or needs significant adjustment.",
        benefits: [
          "Quickly interpret early usage signals",
          "Identify critical issues or opportunities early",
          "Make data-informed decisions about next steps",
          "Avoid misinterpreting early adoption metrics"
        ],
        howTo: [
          "Collect initial usage data (first 7-14 days)",
          "Answer the 5 Early Warning System questions based on this data",
          "Calculate your post-launch risk score",
          "Determine appropriate action (continue, iterate, or pivot)"
        ],
        resources: [
          { title: "Post-Launch Assessment Template", url: "#", type: "template" },
          { title: "Early Signal Interpretation Guide", url: "#", type: "article" }
        ],
        duration: "30-45 min",
        difficulty: "intermediate",
        type: "framework",
        isFeatured: true
      },
      { 
        id: 7002, 
        name: "Meta-Rabbit Expansion", 
        category: 703, 
        description: "Systematically extract lessons and tools from your project for future use.", 
        link: "#", 
        icon: <BookOpen size={20} />,
        longDescription: "Meta-Rabbit Expansion is a Rabbit MVP exclusive process for systematically documenting and extracting reusable elements from your project. It helps you build a growing library of code, components, prompts, and insights that accelerate each subsequent MVP, creating compounding efficiency gains.",
        benefits: [
          "Create reusable assets for future projects",
          "Document key learnings while they're fresh",
          "Build a personal library of proven approaches",
          "Achieve compounding efficiency across projects"
        ],
        howTo: [
          "Identify successful components, code, and approaches from your MVP",
          "Document them in a standardized, reusable format",
          "Add learnings to your personal Meta-Rabbit library",
          "Create systems for easily accessing these assets in future projects"
        ],
        resources: [
          { title: "Meta-Rabbit Documentation Template", url: "#", type: "template" },
          { title: "Knowledge Management System", url: "#", type: "documentation" }
        ],
        duration: "60-90 min",
        difficulty: "intermediate",
        type: "framework",
        isFeatured: true
      },
      { 
        id: 7003, 
        name: "Pirate Metrics (AARRR)", 
        category: 702, 
        description: "Framework for tracking Acquisition, Activation, Retention, Referral, and Revenue.", 
        link: "#", 
        icon: <LineChart size={20} />,
        longDescription: "Pirate Metrics (AARRR) is a framework for tracking the five key metrics that matter for early-stage products: Acquisition (how users find you), Activation (first value experience), Retention (ongoing usage), Referral (user recommendations), and Revenue (monetization). It provides a complete view of your product's performance.",
        benefits: [
          "Focus on the metrics that truly matter for growth",
          "Track the complete user journey from discovery to revenue",
          "Identify specific funnel stages needing improvement",
          "Make data-driven decisions about product development"
        ],
        howTo: [
          "Define specific metrics for each AARRR category",
          "Implement appropriate tracking for each metric",
          "Create a dashboard to monitor performance",
          "Analyze trends and optimize weakest funnel areas"
        ],
        resources: [
          { title: "Pirate Metrics Implementation Guide", url: "#", type: "article" },
          { title: "AARRR Dashboard Template", url: "#", type: "template" }
        ],
        duration: "Initial setup: 60-90 min, Ongoing monitoring",
        difficulty: "intermediate",
        type: "framework",
        isFeatured: false
      },
      { 
        id: 7004, 
        name: "Net Promoter Score (NPS)", 
        category: 702, 
        description: "Measure customer loyalty and satisfaction with a single question survey.", 
        link: "#", 
        icon: <BarChart size={20} />,
        longDescription: "Net Promoter Score (NPS) is a simple yet powerful metric that measures customer loyalty and satisfaction by asking a single question: 'How likely are you to recommend our product to others?' It provides a standardized way to gauge user sentiment and predict growth potential.",
        benefits: [
          "Measure user satisfaction with minimal friction",
          "Get a standardized metric to track over time",
          "Identify promoters who can help spread your product",
          "Collect qualitative feedback along with the score"
        ],
        howTo: [
          "Implement a simple NPS survey in your product",
          "Ask users to rate likelihood to recommend (0-10)",
          "Include an optional follow-up question for context",
          "Calculate your NPS by subtracting % detractors from % promoters"
        ],
        resources: [
          { title: "NPS Implementation Guide", url: "#", type: "article" },
          { title: "Survey Design Best Practices", url: "#", type: "documentation" }
        ],
        duration: "Setup: 30-45 min, Ongoing monitoring",
        difficulty: "beginner",
        type: "framework",
        isFeatured: false
      },
      { 
        id: 7005, 
        name: "Launch Checklist", 
        category: 701, 
        description: "Comprehensive checklist to ensure you've covered all aspects before launch.", 
        link: "#", 
        icon: <CheckSquare size={20} />,
        longDescription: "The Launch Checklist is a comprehensive verification tool that ensures you've covered all critical aspects before releasing your MVP. It includes technical, marketing, legal, and operational items that are easy to overlook but important for a successful launch.",
        benefits: [
          "Ensure no critical launch items are overlooked",
          "Reduce launch anxiety with systematic verification",
          "Cover technical, marketing, and operational aspects",
          "Prevent common launch mistakes and oversights"
        ],
        howTo: [
          "Review the complete launch checklist item by item",
          "Mark items as complete or requiring attention",
          "Address any outstanding critical items",
          "Final review of high-priority items before launch"
        ],
        resources: [
          { title: "Complete Launch Checklist", url: "#", type: "template" },
          { title: "Last-Minute Launch Guide", url: "#", type: "article" }
        ],
        duration: "60-90 min",
        difficulty: "beginner",
        type: "template",
        isFeatured: false
      },
      { 
        id: 7006, 
        name: "Cohort Analysis", 
        category: 702, 
        description: "Analyze behavior of user groups from the same time period.", 
        link: "#", 
        icon: <PieChart size={20} />,
        longDescription: "Cohort Analysis tracks how groups of users who joined at the same time (cohorts) behave over time. It helps you differentiate between overall trends and the actual improvements in your product experience by comparing how different user cohorts engage with your product.",
        benefits: [
          "Distinguish between overall trends and actual product improvements",
          "Understand how user behavior evolves over time",
          "Identify retention patterns and drop-off points",
          "Measure the impact of product changes on specific cohorts"
        ],
        howTo: [
          "Define meaningful cohorts (usually by join date)",
          "Select key metrics to track for each cohort",
          "Create a cohort analysis table or visualization",
          "Analyze how metrics change across cohorts over time"
        ],
        resources: [
          { title: "Cohort Analysis Setup Guide", url: "#", type: "article" },
          { title: "Cohort Tracking Template", url: "#", type: "template" }
        ],
        duration: "Setup: 45-60 min, Ongoing analysis",
        difficulty: "advanced",
        type: "framework",
        isFeatured: false
      },
      { 
        id: 7007, 
        name: "Burn Rate Calculator", 
        category: 703, 
        description: "Tool to calculate your spending rate and predict runway.", 
        link: "#", 
        icon: <CreditCard size={20} />,
        longDescription: "The Burn Rate Calculator helps you track your spending rate (burn rate) and calculate how long your current resources will last (runway). It's essential for making informed decisions about resource allocation, pricing, and fundraising timing.",
        benefits: [
          "Track financial sustainability of your project",
          "Make informed decisions about pricing and monetization",
          "Plan timing for fundraising or profitability milestones",
          "Optimize spending based on concrete runway data"
        ],
        howTo: [
          "Document all current and upcoming expenses",
          "Calculate monthly burn rate based on expenses",
          "Determine current available resources/capital",
          "Calculate runway and set critical review points"
        ],
        resources: [
          { title: "Burn Rate Calculator Template", url: "#", type: "template" },
          { title: "Financial Planning for MVPs", url: "#", type: "article" }
        ],
        duration: "Initial setup: 30-45 min, Monthly updates",
        difficulty: "intermediate",
        type: "template",
        isFeatured: false
      },
      { 
        id: 7008, 
        name: "Pivot vs. Persevere Framework", 
        category: 703, 
        description: "Structured decision process for deciding the future of your project.", 
        link: "#", 
        icon: <GitBranch size={20} />,
        longDescription: "The Pivot vs. Persevere Framework helps you make structured, data-informed decisions about whether to continue your current approach, make adjustments, or pivot to a different direction. It prevents both premature abandonment and stubborn persistence when changes are needed.",
        benefits: [
          "Make objective decisions about your product direction",
          "Balance persistence with adaptability",
          "Use data to guide strategic choices",
          "Identify specific pivot options when needed"
        ],
        howTo: [
          "Evaluate performance against key success metrics",
          "Assess market feedback and validation signals",
          "Consider resource constraints and opportunities",
          "Apply decision criteria to determine: persevere, optimize, or pivot"
        ],
        resources: [
          { title: "Decision Framework Worksheet", url: "#", type: "template" },
          { title: "Types of Pivots Guide", url: "#", type: "article" }
        ],
        duration: "60-90 min",
        difficulty: "advanced",
        type: "framework",
        isFeatured: false
      }
    ],
    guide: {
      overview: "Launch & Learn is the culmination of your Rabbit MVP process, where you release your product to early adopters and begin collecting real-world usage data. This stage focuses on a controlled launch, establishing learning systems, and making the critical decision about your product's future direction.",
      
      keyObjectives: [
        "Successfully launch your MVP to early adopters",
        "Implement systems for collecting user feedback and analytics",
        "Monitor initial user behavior and engagement",
        "Extract key learnings from the entire MVP process",
        "Make a data-driven decision about next steps (continue, pivot, or abandon)"
      ],
      
      process: [
        {
          name: "Launch Preparation",
          duration: "90 minutes",
          description: "Complete pre-launch tasks. Apply launch frameworks to run through comprehensive checklists, finalize messaging, verify systems, prepare support channels, and set up backup mechanisms. This ensures a smooth release process."
        },
        {
          name: "Analytics Implementation",
          duration: "60 minutes",
          description: "Ensure you can measure what matters. Use analytics tools to implement appropriate tracking, set up key metrics based on your business goals, configure conversion funnels, and create initial dashboards. This provides visibility into how users interact with your product."
        },
        {
          name: "Controlled Launch",
          duration: "60 minutes",
          description: "Release to your initial audience. Apply launch tools to deploy to a limited group of early adopters, send personalized invitations, and monitor initial activity. Focus on creating a positive first experience while watching for critical issues."
        },
        {
          name: "Early Signal Assessment",
          duration: "45 minutes",
          description: "Evaluate initial feedback signals. Use appropriate validation frameworks to apply verification questions to early data, calculate risk scores, and identify potential red flags or positive signals. This gives you an early read on product-market fit indicators."
        },
        {
          name: "Feedback System Implementation",
          duration: "60 minutes",
          description: "Create channels for ongoing insights. Apply feedback tools to implement in-product mechanisms, set up satisfaction surveys, create processes for user interviews, and establish systems for feature requests. This establishes continuous learning loops."
        },
        {
          name: "Knowledge Capture",
          duration: "60 minutes",
          description: "Document reusable elements and learnings. Use knowledge frameworks to extract successful components, document key insights, add new elements to your tool library, and create templates from successful processes. This creates compounding value for future projects."
        },
        {
          name: "User Analysis Framework",
          duration: "45 minutes",
          description: "Prepare for systematic user analysis. Apply analytics frameworks to define meaningful user cohorts, set up tracking for their behavior over time, create baseline metrics, and implement retention analysis. This enables data-driven improvement decisions."
        },
        {
          name: "Strategic Direction Decision",
          duration: "90 minutes",
          description: "Make a data-driven next step decision. Use decision frameworks to review all data collected, evaluate performance against key metrics, consider resource constraints, and make a clear decision: persevere, pivot, or abandon. Document your rationale and create an appropriate action plan."
        }
      ],
      
      stageOutput: [
        "Launched MVP to early adopters",
        "Implemented comprehensive analytics",
        "Collected initial user feedback",
        "Completed early signal assessment",
        "Established ongoing feedback mechanisms",
        "Documented learnings and reusable components",
        "Set up user cohort analysis framework",
        "Made a clear strategic direction decision with action plan"
      ],
      
      commonPitfalls: [
        "Premature scaling: Focus on learning before growth",
        "Vanity metrics: Measure what matters for your business, not just what looks good",
        "Selective data interpretation: Consider all signals, not just positive ones",
        "Decision avoidance: Make a clear choice about next steps",
        "Failure to document learnings: Capture insights while they're fresh"
      ],
      
      keyExpertise: [
        "Basic analytics implementation knowledge",
        "Data interpretation skills",
        "Strategic decision-making ability",
        "Product launch experience",
        "Feedback collection and analysis"
      ],
      
      transitionToNext: "Based on your pivot/persevere decision, you'll either begin planning for refinement and growth, define specific pivot changes and begin a new validation cycle, or document learnings and move to your next opportunity.",
      
      resources: [
        {
          title: "Product Analytics Implementation Guide",
          url: "https://amplitude.com/blog/product-analytics-guide",
          type: "article"
        },
        {
          title: "User Feedback Collection Methods",
          url: "https://www.hotjar.com/blog/user-feedback/",
          type: "article"
        },
        {
          title: "Cohort Analysis for Startups",
          url: "https://www.geckoboard.com/best-practice/kpi-examples/cohort-analysis/",
          type: "article"
        },
        {
          title: "The Pivot or Persevere Decision",
          url: "https://www.startuplessonslearned.com/2010/06/pivot-dont-jump-to-new-vision.html",
          type: "article"
        }
      ]
    }
  }
];

// Helper function to find a stage by ID
export const findStageById = (id: number): Stage | undefined => {
  return stages.find(stage => stage.id === id);
};

// Helper function to find a tool by ID across all stages
export const findToolById = (id: number): Tool | undefined => {
  for (const stage of stages) {
    const tool = stage.tools.find(tool => tool.id === id);
    if (tool) return tool;
  }
  return undefined;
};

// Helper function to get all Rabbit Exclusive tools
export const getRabbitExclusiveTools = (): Tool[] => {
  return stages.flatMap(stage => stage.tools.filter(tool => tool.isFeatured));
};

// Helper function to get all AI-Powered tools
export const getAIPoweredTools = (): Tool[] => {
  return stages.flatMap(stage => stage.tools.filter(tool => tool.type === 'ai'));
};