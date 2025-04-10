import { useState, useRef, useEffect } from "react";
import { 
  Building, Users, Lightbulb, Code, Layers, TestTube, Rocket, Wrench, 
  X, Check, ExternalLink, Plus, Tag, Filter, 
  Download, FileText, Link2, BookOpen, BrainCircuit, Zap, Database
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import styles from "@/styles/timeline.module.css";

interface ToolCategory {
  id: number;
  name: string;
  color: string;
  icon: React.ReactNode;
  description: string;
}

interface ToolTag {
  id: number;
  name: string;
  color: string;
}

interface Tool {
  id: number;
  name: string;
  description: string;
  link: string;
  category: number; // Reference to category id
  tags?: ToolTag[];
  longDescription?: string;
  benefits?: string[];
  howTo?: string[];
  resources?: { title: string; url: string }[];
}

interface Stage {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  colorStart: string;
  colorEnd: string;
  categories: ToolCategory[];
  tools: Tool[];
}

const Timeline = () => {
  const [activeTool, setActiveTool] = useState<Tool | null>(null);
  const [activeStageId, setActiveStageId] = useState<string>("1");
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const stagesContainerRef = useRef<HTMLDivElement>(null);
  const [expandedDescription, setExpandedDescription] = useState<boolean>(false);

  const scrollStages = (direction: 'left' | 'right', e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (stagesContainerRef.current) {
      const container = stagesContainerRef.current;
      const scrollAmount = container.clientWidth / 2;
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (stagesContainerRef.current) {
      const activeIndex = parseInt(activeStageId) - 1;
      const stageElements = stagesContainerRef.current.querySelectorAll('.stage-item');
      if (stageElements[activeIndex]) {
        const stageElement = stageElements[activeIndex] as HTMLElement;
        const containerWidth = stagesContainerRef.current.offsetWidth;
        const stageLeft = stageElement.offsetLeft;
        const stageWidth = stageElement.offsetWidth;
        
        stagesContainerRef.current.scrollTo({
          left: stageLeft - (containerWidth / 2) + (stageWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [activeStageId]);

  useEffect(() => {
    setActiveCategory(null);
  }, [activeStageId]);

  const toolTags: ToolTag[] = [
    { id: 1, name: "Planning", color: "bg-slate-100 text-slate-700" },
    { id: 2, name: "Research", color: "bg-zinc-100 text-zinc-700" },
    { id: 3, name: "Design", color: "bg-stone-100 text-stone-700" },
    { id: 4, name: "Development", color: "bg-gray-100 text-gray-700" },
    { id: 5, name: "Testing", color: "bg-neutral-100 text-neutral-700" },
    { id: 6, name: "Launch", color: "bg-slate-100 text-slate-700" },
    { id: 7, name: "Analytics", color: "bg-zinc-100 text-zinc-700" },
  ];

  const stages: Stage[] = [
    {
      id: 1,
      title: "Business Exploration",
      description: "Define business goals, target audience, and core value proposition. Create a clear vision for the MVP.",
      icon: <Building size={36} />,
      color: "text-blue-600",
      colorStart: "#3b82f6",
      colorEnd: "#2563eb",
      categories: [
        { id: 101, name: "Strategy", color: "bg-blue-100 text-blue-700", icon: <BrainCircuit size={16} />, description: "Tools for developing business and product strategy" },
        { id: 102, name: "Market Research", color: "bg-indigo-100 text-indigo-700", icon: <Users size={16} />, description: "Tools for understanding your market and customers" },
        { id: 103, name: "Planning", color: "bg-violet-100 text-violet-700", icon: <FileText size={16} />, description: "Tools for planning your business and MVP approach" }
      ],
      tools: [
        { 
          id: 1001, 
          name: "Business Model Canvas", 
          category: 101,
          description: "A strategic management template for developing new or documenting existing business models.", 
          link: "#", 
          tags: [{ id: 1, name: "Strategy", color: "bg-blue-100 text-blue-700" }],
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
            { title: "Strategyzer - Business Model Canvas Explained", url: "#" },
            { title: "Business Model Canvas Template (PDF)", url: "#" },
            { title: "Video Tutorial: Filling Out Your Canvas", url: "#" }
          ]
        },
        { 
          id: 1002, 
          name: "Market Analysis with AI", 
          category: 102, 
          description: "Use AI tools to analyze market trends, competition, and identify potential opportunities.", 
          link: "#", 
          tags: [{ id: 2, name: "Research", color: "bg-indigo-100 text-indigo-700" }],
          benefits: [
            "Save time on market research with AI-powered analysis",
            "Identify patterns and trends that might be missed manually",
            "Get data-driven insights to validate your business hypothesis",
            "Compare your idea against existing competitors"
          ],
          howTo: [
            "Define clear research questions about your market",
            "Use AI tools to gather and analyze market data",
            "Focus on identifying unique gaps and opportunities",
            "Synthesize findings into actionable insights"
          ]
        },
        { 
          id: 1003, 
          name: "Customer Segmentation", 
          category: 102, 
          description: "Identify and define your target customer segments with specific characteristics and needs.", 
          link: "#", 
          tags: [{ id: 2, name: "Research", color: "bg-indigo-100 text-indigo-700" }],
          benefits: [
            "Focus your MVP on specific user needs",
            "Create more targeted value propositions",
            "Optimize resource allocation for highest impact segments",
            "Develop more effective marketing strategies"
          ]
        },
        { 
          id: 1004, 
          name: "AI-Assisted SWOT Analysis", 
          category: 103, 
          description: "Use AI to help identify your business's Strengths, Weaknesses, Opportunities, and Threats.", 
          link: "#", 
          tags: [{ id: 1, name: "Strategy", color: "bg-blue-100 text-blue-700" }],
          benefits: [
            "Get objective insights about your business positioning",
            "Identify hidden strengths and opportunities using AI analysis",
            "Anticipate potential challenges early in development",
            "Create strategies to mitigate risks and leverage advantages"
          ]
        },
        { 
          id: 1005, 
          name: "Business Hypothesis Generator", 
          category: 101, 
          description: "Create and prioritize 5-10 key business hypotheses that need validation.", 
          link: "#", 
          tags: [{ id: 1, name: "Strategy", color: "bg-blue-100 text-blue-700" }],
          benefits: [
            "Focus validation efforts on the most critical assumptions",
            "Build a structured approach to testing business viability",
            "Reduce risk by identifying and addressing key uncertainties",
            "Create a clear roadmap for validation activities"
          ]
        },
        { 
          id: 1006, 
          name: "Validation Plan Builder", 
          category: 103, 
          description: "Create a structured plan to validate your key business hypotheses efficiently.", 
          link: "#", 
          tags: [{ id: 3, name: "Planning", color: "bg-violet-100 text-violet-700" }],
          benefits: [
            "Organize validation activities in a systematic way",
            "Define clear success criteria for each hypothesis",
            "Optimize resource allocation for validation",
            "Track progress and learn from validation results"
          ]
        },
        { 
          id: 1007, 
          name: "Success Metrics Dashboard", 
          category: 103, 
          description: "Identify and track the key metrics that will determine the success of your MVP.", 
          link: "#", 
          tags: [{ id: 3, name: "Planning", color: "bg-violet-100 text-violet-700" }],
          benefits: [
            "Focus on measurable outcomes rather than just features",
            "Create alignment on what success looks like",
            "Enable data-driven decision making",
            "Set benchmarks for evaluating progress"
          ]
        },
      ]
    },
    {
      id: 2,
      title: "Customer Validation",
      description: "Validate your assumptions with real customers. Test your value proposition before building anything.",
      icon: <Users size={36} />,
      color: "text-purple-600",
      colorStart: "#9333ea",
      colorEnd: "#7e22ce",
      categories: [
        { id: 201, name: "User Research", color: "bg-purple-100 text-purple-700", icon: <Users size={16} />, description: "Tools for gathering insights directly from users" },
        { id: 202, name: "Testing", color: "bg-fuchsia-100 text-fuchsia-700", icon: <TestTube size={16} />, description: "Tools for testing ideas and assumptions" },
        { id: 203, name: "Analytics", color: "bg-pink-100 text-pink-700", icon: <Database size={16} />, description: "Tools for measuring and analyzing user behavior" }
      ],
      tools: [
        { 
          id: 2001, 
          name: "AI Interview Script Generator", 
          category: 201, 
          description: "Create effective customer interview scripts with AI to validate your business hypotheses.", 
          link: "#", 
          tags: [{ id: 1, name: "Research", color: "bg-purple-100 text-purple-700" }],
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
          ]
        },
        { 
          id: 2002, 
          name: "Customer Finder AI", 
          category: 201, 
          description: "Identify 5-10 potential customers for interviews using AI-powered targeting.", 
          link: "#", 
          tags: [{ id: 1, name: "Research", color: "bg-purple-100 text-purple-700" }],
          benefits: [
            "Find qualified interview candidates quickly",
            "Target people who match your customer segments",
            "Reduce time spent on recruitment",
            "Access diverse perspectives for validation"
          ]
        },
        { 
          id: 2003, 
          name: "5-Question Survey Builder", 
          category: 202, 
          description: "Create concise, effective surveys with maximum 5 questions to validate key hypotheses.", 
          link: "#", 
          tags: [{ id: 2, name: "Testing", color: "bg-fuchsia-100 text-fuchsia-700" }],
          benefits: [
            "Higher completion rates with focused questions",
            "Direct validation of specific assumptions",
            "Quantitative data to complement interviews",
            "Easy distribution and data collection"
          ]
        },
        { 
          id: 2004, 
          name: "Remote Interview Platform", 
          category: 201, 
          description: "Tools for conducting and recording 3-5 remote customer interviews efficiently.", 
          link: "#", 
          tags: [{ id: 1, name: "Research", color: "bg-purple-100 text-purple-700" }],
          benefits: [
            "Schedule and conduct interviews from anywhere",
            "Record sessions for detailed analysis",
            "Share interviews with team members",
            "Streamline the interview process"
          ]
        },
        { 
          id: 2005, 
          name: "Online Survey Publisher", 
          category: 202, 
          description: "Publish and distribute your validation survey to gather at least 10 responses.", 
          link: "#", 
          tags: [{ id: 2, name: "Testing", color: "bg-fuchsia-100 text-fuchsia-700" }],
          benefits: [
            "Reach a broader audience for validation",
            "Automate response collection",
            "Generate basic analytics on responses",
            "Easily share and promote your survey"
          ]
        },
        { 
          id: 2006, 
          name: "Community Interest Analyzer", 
          category: 203, 
          description: "Analyze interest and feedback from relevant online forums and communities.", 
          link: "#", 
          tags: [{ id: 3, name: "Analytics", color: "bg-pink-100 text-pink-700" }],
          benefits: [
            "Tap into existing communities for feedback",
            "Gauge interest without building anything",
            "Identify common pain points and desires",
            "Find early adopters and champions"
          ]
        },
        { 
          id: 2007, 
          name: "AI Feedback Analyzer", 
          category: 203, 
          description: "Use AI to analyze customer feedback and identify patterns and insights.", 
          link: "#", 
          tags: [{ id: 3, name: "Analytics", color: "bg-pink-100 text-pink-700" }],
          benefits: [
            "Identify patterns across different feedback sources",
            "Uncover hidden insights in qualitative data",
            "Prioritize feature requests objectively",
            "Make data-driven decisions for your MVP"
          ]
        },
        { 
          id: 2008, 
          name: "Minimum Viable Features (MVF) Builder", 
          category: 202, 
          description: "Define the minimum set of features required to solve the core customer problem.", 
          link: "#", 
          tags: [{ id: 2, name: "Testing", color: "bg-fuchsia-100 text-fuchsia-700" }],
          benefits: [
            "Focus development on what matters most",
            "Avoid feature bloat in your MVP",
            "Create clear scope for implementation",
            "Align features with validated customer needs"
          ]
        },
      ]
    },
    {
      id: 3,
      title: "Solution Design",
      description: "Design the minimum solution that delivers value. Focus on core features that solve the main problem.",
      icon: <Lightbulb size={36} />,
      color: "text-amber-600",
      colorStart: "#d97706",
      colorEnd: "#b45309", 
      categories: [
        { id: 301, name: "UX Design", color: "bg-amber-100 text-amber-700", icon: <Lightbulb size={16} />, description: "Tools for designing the user experience" },
        { id: 302, name: "UI Design", color: "bg-yellow-100 text-yellow-700", icon: <Layers size={16} />, description: "Tools for creating the user interface" },
        { id: 303, name: "Planning", color: "bg-orange-100 text-orange-700", icon: <FileText size={16} />, description: "Tools for planning and organizing your solution" }
      ],
      tools: [
        { 
          id: 3001, 
          name: "AI User Journey Mapper", 
          category: 301, 
          description: "Use AI to map out the user's journey through your product from start to finish.", 
          link: "#", 
          tags: [{ id: 1, name: "UX Design", color: "bg-amber-100 text-amber-700" }],
          benefits: [
            "Visualize the complete user experience",
            "Identify potential pain points before building",
            "Ensure a coherent flow through the product",
            "Focus on key user interactions for MVP"
          ]
        },
        { 
          id: 3002, 
          name: "Solution Architecture Designer", 
          category: 303, 
          description: "Design the technical architecture of your MVP solution.", 
          link: "#", 
          tags: [{ id: 3, name: "Planning", color: "bg-orange-100 text-orange-700" }],
          benefits: [
            "Create a solid foundation for development",
            "Visualize technical components and connections",
            "Plan for scalability from the beginning",
            "Make informed technology choices"
          ]
        },
        { 
          id: 3003, 
          name: "Tech Stack Selector", 
          category: 303, 
          description: "Choose the optimal combination of technologies and tools for your MVP.", 
          link: "#", 
          tags: [{ id: 3, name: "Planning", color: "bg-orange-100 text-orange-700" }],
          benefits: [
            "Select technologies based on project requirements",
            "Balance speed of development and scalability",
            "Identify pre-built components and libraries",
            "Avoid technology compatibility issues"
          ]
        },
        { 
          id: 3004, 
          name: "AI UI/UX Generator", 
          category: 302, 
          description: "Generate user interface designs and UX flows with AI assistance.", 
          link: "#", 
          tags: [{ id: 2, name: "UI Design", color: "bg-yellow-100 text-yellow-700" }],
          benefits: [
            "Create professional designs without a designer",
            "Generate multiple design options quickly",
            "Ensure UI consistency across the application",
            "Implement design best practices automatically"
          ]
        },
        { 
          id: 3005, 
          name: "Wireframe Creator", 
          category: 302, 
          description: "Create low-fidelity mockups of your key screens and user flows.", 
          link: "#", 
          tags: [{ id: 2, name: "UI Design", color: "bg-yellow-100 text-yellow-700" }],
          benefits: [
            "Visualize interface concepts quickly",
            "Iterate on designs before coding",
            "Focus on layout and functionality without details",
            "Create a blueprint for development"
          ]
        },
        { 
          id: 3006, 
          name: "AI Logo & Visual Identity Generator", 
          category: 302, 
          description: "Create a basic logo and visual identity for your MVP with AI.", 
          link: "#", 
          tags: [{ id: 2, name: "UI Design", color: "bg-yellow-100 text-yellow-700" }],
          benefits: [
            "Establish a professional brand identity quickly",
            "Generate multiple design options",
            "Create consistent visual elements",
            "Build customer recognition from the start"
          ]
        },
        { 
          id: 3007, 
          name: "Task Decomposer", 
          category: 303, 
          description: "Break down your design into concrete, actionable development tasks.", 
          link: "#", 
          tags: [{ id: 3, name: "Planning", color: "bg-orange-100 text-orange-700" }],
          benefits: [
            "Convert designs into specific implementation tasks",
            "Create realistic work estimates",
            "Identify dependencies between components",
            "Facilitate efficient task allocation"
          ]
        },
        { 
          id: 3008, 
          name: "AI Prompt Engineer", 
          category: 301, 
          description: "Prepare effective AI prompts to assist with coding and implementation.", 
          link: "#", 
          tags: [{ id: 1, name: "UX Design", color: "bg-amber-100 text-amber-700" }],
          benefits: [
            "Maximize AI assistance during development",
            "Create consistent code generation patterns",
            "Speed up implementation of common features",
            "Reduce manual coding time"
          ]
        },
        { 
          id: 3009, 
          name: "Dev Environment Configurator", 
          category: 303, 
          description: "Set up and configure your development environment for efficient implementation.", 
          link: "#", 
          tags: [{ id: 3, name: "Planning", color: "bg-orange-100 text-orange-700" }],
          benefits: [
            "Start development with the right tools in place",
            "Standardize environment across team members",
            "Avoid setup-related delays and issues",
            "Include testing and deployment workflows"
          ]
        },
      ]
    },
    {
      id: 4,
      title: "Core Implementation",
      description: "Build the essential features using low-code/no-code solutions. Focus on functionality over perfection.",
      icon: <Code size={36} />,
      color: "text-green-600",
      colorStart: "#16a34a",
      colorEnd: "#15803d",
      categories: [
        { id: 401, name: "Development", color: "bg-green-100 text-green-700", icon: <Code size={16} />, description: "Tools for building your product" },
        { id: 402, name: "No-Code", color: "bg-emerald-100 text-emerald-700", icon: <BrainCircuit size={16} />, description: "No-code tools to accelerate development" },
        { id: 403, name: "Data", color: "bg-teal-100 text-teal-700", icon: <Database size={16} />, description: "Tools for managing your data" }
      ],
      tools: [
        { 
          id: 4001, 
          name: "No-Code Platform Selector", 
          category: 402, 
          description: "Choose the right no-code/low-code platform for your specific MVP needs.", 
          link: "#", 
          tags: [{ id: 2, name: "No-Code", color: "bg-emerald-100 text-emerald-700" }],
          benefits: [
            "Find the optimal platform for your use case",
            "Compare features of top no-code solutions",
            "Evaluate trade-offs between platforms",
            "Select based on your specific MVP requirements"
          ]
        },
        { 
          id: 4002, 
          name: "No-Code App Builder", 
          category: 402, 
          description: "Configure the basic structure of your application using drag-and-drop tools.", 
          link: "#", 
          tags: [{ id: 2, name: "No-Code", color: "bg-emerald-100 text-emerald-700" }],
          benefits: [
            "Build functional apps without coding",
            "Create custom workflows visually",
            "Iterate rapidly on different solutions",
            "Generate a working product in days, not weeks"
          ]
        },
        { 
          id: 4003, 
          name: "Template Marketplace", 
          category: 401, 
          description: "Access pre-built templates and components instead of building from scratch.", 
          link: "#", 
          tags: [{ id: 1, name: "Development", color: "bg-green-100 text-green-700" }],
          benefits: [
            "Save time with ready-made solutions",
            "Implement best practices automatically",
            "Customize templates to your specific needs",
            "Access professionally designed components"
          ]
        },
        { 
          id: 4004, 
          name: "No-Code Database Builder", 
          category: 403, 
          description: "Configure your database structure without writing complex queries.", 
          link: "#", 
          tags: [{ id: 3, name: "Data", color: "bg-teal-100 text-teal-700" }],
          benefits: [
            "Create relational data structures visually",
            "Define custom fields and relationships",
            "Import existing data easily",
            "Automate database maintenance"
          ]
        },
        { 
          id: 4005, 
          name: "AI Content Generator", 
          category: 401, 
          description: "Generate text content and visual elements for your app with AI.", 
          link: "#", 
          tags: [{ id: 1, name: "Development", color: "bg-green-100 text-green-700" }],
          benefits: [
            "Create professional content quickly",
            "Maintain consistent tone and style",
            "Generate placeholder content for testing",
            "Customize content for your target audience"
          ]
        },
        { 
          id: 4006, 
          name: "Visual Interface Builder", 
          category: 402, 
          description: "Create your application interface using drag-and-drop tools.", 
          link: "#", 
          tags: [{ id: 2, name: "No-Code", color: "bg-emerald-100 text-emerald-700" }],
          benefits: [
            "Design interfaces without coding",
            "Ensure responsive design across devices",
            "Implement consistent styling automatically",
            "Preview changes in real-time"
          ]
        },
        { 
          id: 4007, 
          name: "Workflow Automator", 
          category: 401, 
          description: "Create automated processes and workflows for your application.", 
          link: "#", 
          tags: [{ id: 1, name: "Development", color: "bg-green-100 text-green-700" }],
          benefits: [
            "Automate repetitive tasks and processes",
            "Create trigger-based actions visually",
            "Connect different parts of your application",
            "Implement complex business logic without code"
          ]
        },
        { 
          id: 4008, 
          name: "Quick Fix Toolkit", 
          category: 401, 
          description: "Identify and fix the most critical issues in your implementation.", 
          link: "#", 
          tags: [{ id: 1, name: "Development", color: "bg-green-100 text-green-700" }],
          benefits: [
            "Diagnose common no-code implementation problems",
            "Apply proven solutions to typical issues",
            "Optimize application performance",
            "Improve user experience quickly"
          ]
        },
      ]
    },
    {
      id: 5,
      title: "Feature Expansion",
      description: "Expand functionality with minimal coding, using plugins and integrations. Prepare for user testing.",
      icon: <Layers size={36} />,
      color: "text-cyan-600",
      colorStart: "#0891b2",
      colorEnd: "#0e7490",
      categories: [
        { id: 501, name: "Extensions", color: "bg-cyan-100 text-cyan-700", icon: <Code size={16} />, description: "Tools for extending your product" },
        { id: 502, name: "Integration", color: "bg-sky-100 text-sky-700", icon: <Link2 size={16} />, description: "Tools for connecting with external services" },
        { id: 503, name: "Deployment", color: "bg-blue-100 text-blue-700", icon: <Rocket size={16} />, description: "Tools for deploying your application" }
      ],
      tools: [
        { 
          id: 5001, 
          name: "No-Code Feature Expander", 
          category: 501, 
          description: "Add additional functionality to your app within your no-code platform.", 
          link: "#", 
          tags: [{ id: 1, name: "Extensions", color: "bg-cyan-100 text-cyan-700" }],
          benefits: [
            "Add complex features without coding",
            "Scale your application functionality",
            "Maintain consistent user experience",
            "Implement feedback-driven improvements"
          ]
        },
        { 
          id: 5002, 
          name: "Plugin Marketplace", 
          category: 501, 
          description: "Browse and install ready-made plugins to add functionality to your application.", 
          link: "#", 
          tags: [{ id: 1, name: "Extensions", color: "bg-cyan-100 text-cyan-700" }],
          benefits: [
            "Extend functionality without custom code",
            "Access specialized features instantly",
            "Find solutions for common requirements",
            "Integrate pre-built components seamlessly"
          ]
        },
        { 
          id: 5003, 
          name: "API Connector", 
          category: 502, 
          description: "Connect your application to external services through ready-made connectors.", 
          link: "#", 
          tags: [{ id: 2, name: "Integration", color: "bg-sky-100 text-sky-700" }],
          benefits: [
            "Integrate with popular services without coding",
            "Exchange data between applications",
            "Extend functionality through external APIs",
            "Create seamless user experiences across platforms"
          ]
        },
        { 
          id: 5004, 
          name: "Automation Platform", 
          category: 502, 
          description: "Create automated workflows between your app and other services.", 
          link: "#", 
          tags: [{ id: 2, name: "Integration", color: "bg-sky-100 text-sky-700" }],
          benefits: [
            "Connect different tools and services visually",
            "Automate data transfers between systems",
            "Create complex business processes",
            "Reduce manual work with triggers and actions"
          ]
        },
        { 
          id: 5005, 
          name: "UX Template Library", 
          category: 501, 
          description: "Implement user experience best practices using pre-built templates.", 
          link: "#", 
          tags: [{ id: 1, name: "Extensions", color: "bg-cyan-100 text-cyan-700" }],
          benefits: [
            "Create professional user experiences quickly",
            "Implement UX patterns proven to work",
            "Maintain design consistency",
            "Focus on functionality over design details"
          ]
        },
        { 
          id: 5006, 
          name: "Functional Testing Tool", 
          category: 501, 
          description: "Test your application's functionality to identify and fix issues.", 
          link: "#", 
          tags: [{ id: 1, name: "Extensions", color: "bg-cyan-100 text-cyan-700" }],
          benefits: [
            "Ensure features work as expected",
            "Document and track bugs systematically",
            "Verify critical user workflows",
            "Identify edge cases and potential problems"
          ]
        },
        { 
          id: 5007, 
          name: "One-Click Deployment", 
          category: 503, 
          description: "Publish your MVP with minimal technical configuration.", 
          link: "#", 
          tags: [{ id: 3, name: "Deployment", color: "bg-blue-100 text-blue-700" }],
          benefits: [
            "Deploy your application with minimal effort",
            "Make updates quickly and easily",
            "Avoid complex server configurations",
            "Focus on building rather than infrastructure"
          ]
        },
        { 
          id: 5008, 
          name: "Domain Setup Wizard", 
          category: 503, 
          description: "Configure a custom domain for your application easily.", 
          link: "#", 
          tags: [{ id: 3, name: "Deployment", color: "bg-blue-100 text-blue-700" }],
          benefits: [
            "Create a professional web presence",
            "Setup DNS records automatically",
            "Configure SSL certificates",
            "Establish branding with custom URLs"
          ]
        },
        { 
          id: 5009, 
          name: "User Testing Prep Kit", 
          category: 503, 
          description: "Prepare your application for user testing sessions.", 
          link: "#", 
          tags: [{ id: 3, name: "Deployment", color: "bg-blue-100 text-blue-700" }],
          benefits: [
            "Create test accounts and scenarios",
            "Setup analytics to track user behavior",
            "Prepare feedback collection mechanisms",
            "Ensure stable environment for testing"
          ]
        },
      ]
    },
    {
      id: 6,
      title: "Testing & Refinement",
      description: "Test with real users, gather feedback, and make quick refinements to improve the experience.",
      icon: <TestTube size={36} />,
      color: "text-rose-600",
      colorStart: "#e11d48",
      colorEnd: "#be123c",
      categories: [
        { id: 601, name: "User Testing", color: "bg-rose-100 text-rose-700", icon: <Users size={16} />, description: "Tools for testing with real users" },
        { id: 602, name: "Feedback", color: "bg-red-100 text-red-700", icon: <Lightbulb size={16} />, description: "Tools for collecting and analyzing feedback" },
        { id: 603, name: "Optimization", color: "bg-pink-100 text-pink-700", icon: <Zap size={16} />, description: "Tools for improving your product" }
      ],
      tools: [
        { 
          id: 6001, 
          name: "User Testing Coordinator", 
          category: 601, 
          description: "Organize and conduct test sessions with 3-5 potential users.", 
          link: "#", 
          tags: [{ id: 1, name: "User Testing", color: "bg-rose-100 text-rose-700" }],
          benefits: [
            "Get real user feedback before launch",
            "Identify usability issues early",
            "Validate your core value proposition",
            "Build relationships with potential customers"
          ]
        },
        { 
          id: 6002, 
          name: "Structured Feedback Collector", 
          category: 602, 
          description: "Gather and organize user feedback in a structured format.", 
          link: "#", 
          tags: [{ id: 2, name: "Feedback", color: "bg-red-100 text-red-700" }],
          benefits: [
            "Organize feedback methodically",
            "Identify patterns and priorities",
            "Capture both quantitative and qualitative data",
            "Create actionable insights from user input"
          ]
        },
        { 
          id: 6003, 
          name: "Critical Issue Identifier", 
          category: 601, 
          description: "Identify and prioritize the most critical problems that need fixing.", 
          link: "#", 
          tags: [{ id: 1, name: "User Testing", color: "bg-rose-100 text-rose-700" }],
          benefits: [
            "Focus on highest-impact improvements",
            "Classify issues by severity and scope",
            "Identify show-stopping problems",
            "Create a prioritized fix roadmap"
          ]
        },
        { 
          id: 6004, 
          name: "Quick-Fix Implementer", 
          category: 603, 
          description: "Make rapid improvements based on user testing feedback.", 
          link: "#", 
          tags: [{ id: 3, name: "Optimization", color: "bg-pink-100 text-pink-700" }],
          benefits: [
            "Address feedback quickly",
            "Implement improvements without coding",
            "Iterate on user experience",
            "Show responsiveness to user input"
          ]
        },
        { 
          id: 6005, 
          name: "User Path Optimizer", 
          category: 603, 
          description: "Streamline and optimize critical user journeys through your product.", 
          link: "#", 
          tags: [{ id: 3, name: "Optimization", color: "bg-pink-100 text-pink-700" }],
          benefits: [
            "Improve conversion on key workflows",
            "Reduce friction in critical tasks",
            "Create intuitive navigation paths",
            "Enhance overall user experience"
          ]
        },
        { 
          id: 6006, 
          name: "Content Refiner", 
          category: 603, 
          description: "Polish and improve product messaging and content.", 
          link: "#", 
          tags: [{ id: 3, name: "Optimization", color: "bg-pink-100 text-pink-700" }],
          benefits: [
            "Clarify value proposition",
            "Improve readability and comprehension",
            "Create consistent voice and tone",
            "Enhance user guidance and instruction"
          ]
        },
        { 
          id: 6007, 
          name: "Launch Preparation Checklist", 
          category: 602, 
          description: "Prepare all necessary elements for a successful public launch.", 
          link: "#", 
          tags: [{ id: 2, name: "Feedback", color: "bg-red-100 text-red-700" }],
          benefits: [
            "Ensure all launch components are ready",
            "Reduce risk of launch issues",
            "Prepare for user onboarding",
            "Coordinate technical and marketing elements"
          ]
        },
        { 
          id: 6008, 
          name: "AI Marketing Content Generator", 
          category: 602, 
          description: "Create promotional materials and content with AI assistance.", 
          link: "#", 
          tags: [{ id: 2, name: "Feedback", color: "bg-red-100 text-red-700" }],
          benefits: [
            "Generate professional marketing assets",
            "Create consistent messaging across channels",
            "Save time on content creation",
            "Prepare for launch promotion"
          ]
        },
        { 
          id: 6009, 
          name: "Analytics Configuration Tool", 
          category: 601, 
          description: "Set up the tools to track key metrics once your product is live.", 
          link: "#", 
          tags: [{ id: 1, name: "User Testing", color: "bg-rose-100 text-rose-700" }],
          benefits: [
            "Prepare to measure user behavior",
            "Track conversion on key actions",
            "Set up custom event tracking",
            "Create dashboards for key metrics"
          ]
        },
      ]
    },
    {
      id: 7,
      title: "Launch & Learn",
      description: "Release your MVP to early adopters and start collecting real-world data for the next iteration.",
      icon: <Rocket size={36} />,
      color: "text-indigo-600",
      colorStart: "#4f46e5",
      colorEnd: "#4338ca",
      categories: [
        { id: 701, name: "Launch", color: "bg-indigo-100 text-indigo-700", icon: <Rocket size={16} />, description: "Tools for launching your product" },
        { id: 702, name: "Analytics", color: "bg-violet-100 text-violet-700", icon: <Database size={16} />, description: "Tools for analyzing performance" },
        { id: 703, name: "Strategy", color: "bg-purple-100 text-purple-700", icon: <BrainCircuit size={16} />, description: "Tools for planning your next steps" }
      ],
      tools: [
        { 
          id: 7001, 
          name: "Final Technical Review", 
          category: 701, 
          description: "Complete final technical checks and optimizations before launch.", 
          link: "#", 
          tags: [{ id: 1, name: "Launch", color: "bg-indigo-100 text-indigo-700" }],
          benefits: [
            "Ensure all functionality works correctly",
            "Fix last-minute technical issues",
            "Optimize performance for first users",
            "Reduce risk of launch problems"
          ]
        },
        { 
          id: 7002, 
          name: "MVP Deployment Manager", 
          category: 701, 
          description: "Deploy the final version of your MVP to production.", 
          link: "#", 
          tags: [{ id: 1, name: "Launch", color: "bg-indigo-100 text-indigo-700" }],
          benefits: [
            "Streamline the final deployment process",
            "Ensure all components are correctly published",
            "Manage domain and hosting configuration",
            "Create a stable production environment"
          ]
        },
        { 
          id: 7003, 
          name: "Error Monitoring Setup", 
          category: 701, 
          description: "Configure tools to track and alert on application errors.", 
          link: "#", 
          tags: [{ id: 1, name: "Launch", color: "bg-indigo-100 text-indigo-700" }],
          benefits: [
            "Identify problems as they occur",
            "Receive alerts for critical issues",
            "Track error frequency and patterns",
            "Prioritize fixes based on impact"
          ]
        },
        { 
          id: 7004, 
          name: "Launch Announcer", 
          category: 701, 
          description: "Announce and promote your MVP in selected channels.", 
          link: "#", 
          tags: [{ id: 1, name: "Launch", color: "bg-indigo-100 text-indigo-700" }],
          benefits: [
            "Create targeted launch announcements",
            "Reach your initial user audience",
            "Generate excitement about your product",
            "Drive first users to your application"
          ]
        },
        { 
          id: 7005, 
          name: "User Interaction Monitor", 
          category: 702, 
          description: "Actively monitor how users interact with your newly launched product.", 
          link: "#", 
          tags: [{ id: 2, name: "Analytics", color: "bg-violet-100 text-violet-700" }],
          benefits: [
            "Observe real user behavior",
            "Identify unexpected usage patterns",
            "Track completion of key actions",
            "Find usability issues in production"
          ]
        },
        { 
          id: 7006, 
          name: "Feedback Collector", 
          category: 702, 
          description: "Gather and organize feedback from your first real users.", 
          link: "#", 
          tags: [{ id: 2, name: "Analytics", color: "bg-violet-100 text-violet-700" }],
          benefits: [
            "Capture user reactions and suggestions",
            "Identify most-requested improvements",
            "Understand user pain points",
            "Collect testimonials and positive feedback"
          ]
        },
        { 
          id: 7007, 
          name: "AI Data Analyst", 
          category: 702, 
          description: "Use AI to analyze user behavior data and identify patterns.", 
          link: "#", 
          tags: [{ id: 2, name: "Analytics", color: "bg-violet-100 text-violet-700" }],
          benefits: [
            "Extract insights from usage data",
            "Identify behavior patterns and trends",
            "Detect potential issues from data",
            "Make data-driven improvement decisions"
          ]
        },
        { 
          id: 7008, 
          name: "MVP Process Analyzer", 
          category: 703, 
          description: "Analyze the entire Rabbit MVP process and capture learnings.", 
          link: "#", 
          tags: [{ id: 3, name: "Strategy", color: "bg-purple-100 text-purple-700" }],
          benefits: [
            "Document what worked and what didn't",
            "Improve future development processes",
            "Identify efficiency opportunities",
            "Create a playbook for future projects"
          ]
        },
        { 
          id: 7009, 
          name: "Strategic Decision Framework", 
          category: 703, 
          description: "Make informed decisions about next steps: pivot, persevere, or abandon.", 
          link: "#", 
          tags: [{ id: 3, name: "Strategy", color: "bg-purple-100 text-purple-700" }],
          benefits: [
            "Evaluate product viability objectively",
            "Make data-backed strategic decisions",
            "Plan pivot options if needed",
            "Create a roadmap for continued development"
          ]
        },
        { 
          id: 7010, 
          name: "Next Cycle Planner", 
          category: 703, 
          description: "Plan the next development cycle based on launch data and learnings.", 
          link: "#", 
          tags: [{ id: 3, name: "Strategy", color: "bg-purple-100 text-purple-700" }],
          benefits: [
            "Prioritize features for the next iteration",
            "Apply lessons from the MVP process",
            "Set realistic timelines and goals",
            "Focus on highest-impact improvements"
          ]
        },
      ]
    }
  ];

  const findStageById = (id: string): Stage | undefined => {
    return stages.find(stage => stage.id === parseInt(id));
  };

  const currentStage = findStageById(activeStageId);
  
  // Filter tools based on active category only
  const filteredTools = currentStage ? currentStage.tools.filter(tool => {
    if (activeCategory) {
      return tool.category === activeCategory;
    }
    return true;
  }) : [];

  // Get the current stage's CSS variables
  const stageColorVars = {
    '--stage-color-1': currentStage?.colorStart || '#64748b',
    '--stage-color-2': currentStage?.colorEnd || '#475569',
  } as React.CSSProperties;

  return (
    <section id="stages" className={`py-24 relative overflow-hidden ${styles['highlight-bg']}`}>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-chakra font-bold mb-6 text-gray-900">7 Steps to MVP</h2>
          <p className="text-xl text-gray-600">
            A structured approach to building and validating your product in seven days.
          </p>
        </div>
        
        {/* Scrollable Stage Navigation */}
        <div className="relative max-w-6xl mx-auto mb-20">
          <div className="hidden md:block absolute left-0 right-0 top-10 h-0.5 bg-gray-200 z-0"></div>
          
          {/* Timeline Steps */}
          <div 
            ref={stagesContainerRef}
            className={`flex items-start justify-center gap-8 relative z-10 overflow-x-auto pt-0 pb-8 ${styles['hide-scrollbar']}`}
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {stages.map((stage) => (
              <div 
                key={stage.id}
                className={`stage-item flex-shrink-0 scroll-snap-align-center ${styles['stage-item']}`}
                style={{ scrollSnapAlign: 'center' }}
              >
                <div 
                  className={`flex flex-col items-center cursor-pointer transform transition-all duration-300 hover:scale-105`}
                  onClick={() => setActiveStageId(stage.id.toString())}
                >
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center 
                    ${activeStageId === stage.id.toString() 
                      ? 'bg-white shadow-lg' 
                      : 'bg-gray-100 border border-gray-200'}
                    transition-all duration-300 relative`}
                  >
                    {activeStageId === stage.id.toString() && (
                      <div className="absolute inset-0 rounded-full border-4 border-transparent" 
                        style={{
                          background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd}) border-box`,
                          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'destination-out',
                          maskComposite: 'exclude',
                          animation: 'border-pulse 2s infinite'
                        }}
                      />
                    )}
                    <div className={`${stage.color} ${activeStageId === stage.id.toString() ? 'opacity-100 scale-110 transform transition-all duration-300' : 'opacity-60'}`}>
                    {stage.icon}
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col items-center">
                    <span className={`text-sm font-semibold ${activeStageId === stage.id.toString() ? 'text-slate-900' : 'text-slate-500'}`}>
                      Step {stage.id}
                    </span>
                    <span className={`text-xs mt-1 max-w-[120px] text-center truncate ${activeStageId === stage.id.toString() ? stage.color : 'text-slate-400'}`}>
                      {stage.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stage Details and Tools */}
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeStageId} onValueChange={setActiveStageId} className="w-full">
            <TabsList className="hidden">
              {stages.map((stage) => (
                <TabsTrigger key={stage.id} value={stage.id.toString()}>
                  {stage.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {stages.map((stage) => (
              <TabsContent key={stage.id} value={stage.id.toString()} className={`mt-0 ${styles['animate-fadeIn']}`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Stage Info Card with animated border */}
                  <Card 
                    className={`col-span-1 shadow-md transition-all duration-300 ${styles['stage-card']}`}
                    style={stageColorVars}
                  >
                    <CardHeader className="pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${stage.color.replace('text', 'bg')} bg-opacity-10`}>
                          <div className={`${stage.color} animate-pulse`}>
                            {stage.icon}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span 
                              className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded-full"
                              style={{ 
                                background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})`,
                                color: 'white'
                              }}
                            >
                              Step {stage.id} of 7
                            </span>
                          </div>
                          <CardTitle className="text-2xl font-chakra text-gray-900">{stage.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-6">
                      <p className="text-gray-700 leading-relaxed">{stage.description}</p>
                      
                      {/* Stage Goal Section */}
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex flex-col space-y-4">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-1 h-5 rounded-full"
                              style={{ background: `linear-gradient(to bottom, ${stage.colorStart}, ${stage.colorEnd})` }}
                            ></div>
                            <h4 className="font-medium text-slate-900">Stage Goal</h4>
                          </div>
                          <p className="text-gray-700">
                            {stage.id === 1 && "Define and validate your business hypothesis."}
                            {stage.id === 2 && "Validate business hypotheses with potential customers."}
                            {stage.id === 3 && "Design your solution and MVP architecture."}
                            {stage.id === 4 && "Implement core functionality using no-code/low-code solutions."}
                            {stage.id === 5 && "Expand features with minimal coding and prepare for testing."}
                            {stage.id === 6 && "Test with real users and make rapid improvements."}
                            {stage.id === 7 && "Launch your MVP and collect data for the next iteration."}
                          </p>
                        </div>
                      </div>

                      {/* Key Activities Section */}
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex flex-col space-y-3">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-1 h-5 rounded-full"
                              style={{ background: `linear-gradient(to bottom, ${stage.colorStart}, ${stage.colorEnd})` }}
                            ></div>
                            <h4 className="font-medium text-slate-900">Key Activities</h4>
                          </div>
                          <ul className="space-y-2">
                            {stage.id === 1 && (
                              <>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-500 mt-1"><Check size={14} /></span>
                                  <span>Market and competition analysis with AI</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-500 mt-1"><Check size={14} /></span>
                                  <span>Problem and customer segment identification</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-500 mt-1"><Check size={14} /></span>
                                  <span>AI-assisted Business Model Canvas creation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-500 mt-1"><Check size={14} /></span>
                                  <span>AI-powered SWOT analysis</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-500 mt-1"><Check size={14} /></span>
                                  <span>5-10 key business hypotheses preparation</span>
                                </li>
                              </>
                            )}
                            {stage.id === 2 && (
                              <>
                                <li className="flex items-start gap-2">
                                  <span className="text-purple-500 mt-1"><Check size={14} /></span>
                                  <span>AI-assisted interview script preparation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-purple-500 mt-1"><Check size={14} /></span>
                                  <span>Identifying 5-10 potential customers</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-purple-500 mt-1"><Check size={14} /></span>
                                  <span>Creating a concise validation survey (max 5 questions)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-purple-500 mt-1"><Check size={14} /></span>
                                  <span>Conducting 3-5 remote customer interviews</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-purple-500 mt-1"><Check size={14} /></span>
                                  <span>AI-assisted analysis of feedback</span>
                                </li>
                              </>
                            )}
                            {stage.id === 3 && (
                              <>
                                <li className="flex items-start gap-2">
                                  <span className="text-amber-500 mt-1"><Check size={14} /></span>
                                  <span>AI-assisted user journey mapping</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-amber-500 mt-1"><Check size={14} /></span>
                                  <span>Solution architecture design</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-amber-500 mt-1"><Check size={14} /></span>
                                  <span>Technology stack selection</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-amber-500 mt-1"><Check size={14} /></span>
                                  <span>AI-generated UI/UX design</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-amber-500 mt-1"><Check size={14} /></span>
                                  <span>Key screen wireframing</span>
                                </li>
                              </>
                            )}
                            {stage.id === 4 && (
                              <>
                                <li className="flex items-start gap-2">
                                  <span className="text-green-500 mt-1"><Check size={14} /></span>
                                  <span>No-code/low-code platform selection</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-green-500 mt-1"><Check size={14} /></span>
                                  <span>Basic app configuration in no-code tools</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-green-500 mt-1"><Check size={14} /></span>
                                  <span>Using templates instead of building from scratch</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-green-500 mt-1"><Check size={14} /></span>
                                  <span>No-code database configuration</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-green-500 mt-1"><Check size={14} /></span>
                                  <span>AI-generated content and visuals</span>
                                </li>
                              </>
                            )}
                            {stage.id === 5 && (
                              <>
                                <li className="flex items-start gap-2">
                                  <span className="text-cyan-500 mt-1"><Check size={14} /></span>
                                  <span>No-code functionality extension</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-cyan-500 mt-1"><Check size={14} /></span>
                                  <span>Using plugins and integrations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-cyan-500 mt-1"><Check size={14} /></span>
                                  <span>External service connection via connectors</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-cyan-500 mt-1"><Check size={14} /></span>
                                  <span>Process automation configuration</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-cyan-500 mt-1"><Check size={14} /></span>
                                  <span>Internal functional testing</span>
                                </li>
                              </>
                            )}
                            {stage.id === 6 && (
                              <>
                                <li className="flex items-start gap-2">
                                  <span className="text-rose-500 mt-1"><Check size={14} /></span>
                                  <span>Testing with 3-5 potential users</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-rose-500 mt-1"><Check size={14} /></span>
                                  <span>Structured feedback collection</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-rose-500 mt-1"><Check size={14} /></span>
                                  <span>Critical issue identification</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-rose-500 mt-1"><Check size={14} /></span>
                                  <span>Implementing feedback-based improvements</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-rose-500 mt-1"><Check size={14} /></span>
                                  <span>AI-assisted marketing material creation</span>
                                </li>
                              </>
                            )}
                            {stage.id === 7 && (
                              <>
                                <li className="flex items-start gap-2">
                                  <span className="text-indigo-500 mt-1"><Check size={14} /></span>
                                  <span>Final technical adjustments</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-indigo-500 mt-1"><Check size={14} /></span>
                                  <span>MVP deployment to production</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-indigo-500 mt-1"><Check size={14} /></span>
                                  <span>Error monitoring configuration</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-indigo-500 mt-1"><Check size={14} /></span>
                                  <span>Analyzing user behavior and feedback</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-indigo-500 mt-1"><Check size={14} /></span>
                                  <span>Deciding on next steps: pivot, persevere, or abandon</span>
                                </li>
                              </>
                            )}
                          </ul>
                        </div>
                      </div>

                      {/* Stage Result Section */}
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex flex-col space-y-3">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-1 h-5 rounded-full"
                              style={{ background: `linear-gradient(to bottom, ${stage.colorStart}, ${stage.colorEnd})` }}
                            ></div>
                            <h4 className="font-medium text-slate-900">Stage Result</h4>
                          </div>
                          <p className="text-gray-700">
                            {stage.id === 1 && "Defined business hypothesis and validation plan."}
                            {stage.id === 2 && "Validated hypotheses and defined MVP functional scope."}
                            {stage.id === 3 && "Complete MVP design ready for implementation."}
                            {stage.id === 4 && "Working product foundation with core functionality."}
                            {stage.id === 5 && "Complete no-code/low-code MVP ready for user testing."}
                            {stage.id === 6 && "Validated and refined MVP ready for launch."}
                            {stage.id === 7 && "Live product, initial data, and next steps decision."}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Tools Section */}
                  <div className="col-span-1 lg:col-span-2 space-y-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Wrench 
                            size={18} 
                            className="text-white p-1 rounded-full"
                            style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}  
                          />
                          <h3 className="text-xl font-medium text-gray-900">Available Tools</h3>
                          <span className="text-sm text-gray-500 ml-2">({stage.tools.length} total)</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <button 
                            className="text-sm flex items-center gap-1 px-3 py-1 rounded-full transition-colors border"
                            style={{
                              borderColor: activeCategory ? 'transparent' : '#e5e7eb',
                              color: activeCategory ? 'white' : '#4b5563',
                              background: activeCategory ? 
                                `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` : 
                                'transparent'
                            }}
                            onClick={() => setActiveCategory(null)}
                          >
                            <Filter size={14} />
                            <span>All Tools</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tools Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
                      {filteredTools.map((tool) => {
                        const category = stage.categories.find(c => c.id === tool.category);
                        
                        return (
                          <Card 
                            key={tool.id}
                            className={`border-none shadow-sm hover:shadow transition-all duration-300 cursor-pointer relative overflow-hidden ${styles['tool-card']}`}
                            onClick={() => setActiveTool(tool)}
                          >
                            {/* Category indicator */}
                            <div 
                              className={`absolute top-0 left-0 w-1 h-full`}
                              style={{ 
                                backgroundColor: category ? category.color.split(' ')[0].replace('bg', 'rgb') : 'transparent',
                                opacity: 0.7
                              }}
                            ></div>
                            
                            <CardHeader className="pb-2 pl-5">
                              <CardTitle className="text-base font-medium flex justify-between items-start">
                                <span>{tool.name}</span>
                              </CardTitle>
                              <div className="flex items-center gap-1 mt-1">
                                {category && (
                                  <span 
                                    className={`${category.color} inline-flex items-center text-[10px] px-1.5 py-0.5 rounded`}
                                  >
                                    {category.icon}
                                    <span className="ml-1">{category.name}</span>
                                  </span>
                                )}
                              </div>
                            </CardHeader>
                            <CardContent className="py-1">
                              <p className="text-gray-600 text-sm line-clamp-2">{tool.description}</p>
                            </CardContent>
                            <CardFooter className="pt-0 flex justify-end">
                              <div className="flex items-center gap-1 text-sm font-medium" 
                                style={{ color: stage.color.replace('text', 'bg').includes('slate') 
                                  ? '#475569' : stage.colorEnd }}
                              >
                                <span>View details</span>
                              </div>
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </TabsContent>
          ))}
          </Tabs>
        </div>
      </div>
      
      {/* Tool Detail Drawer - Enhanced with more comprehensive information */}
      {activeTool && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end transition-all">
          <div 
            className="bg-white w-full max-w-md shadow-xl p-6 animate-slide-in-right overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6 pb-4 border-b">
              <h3 className="text-xl font-medium text-gray-900 flex items-center">
                {activeTool.name}
              </h3>
              <button 
                className="rounded-full p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                onClick={() => setActiveTool(null)}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="prose max-w-none">
              {/* Tool Category and Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {currentStage?.categories
                  .filter(category => category.id === activeTool.category)
                  .map(category => (
                    <span 
                      key={category.id} 
                      className={`${category.color} inline-flex items-center text-xs px-3 py-1.5 rounded-full`}
                    >
                      {category.icon}
                      <span className="ml-1 font-medium">{category.name}</span>
                    </span>
                  ))
                }
                
                {activeTool.tags?.map(tag => (
                  <span 
                    key={tag.id} 
                    className={`${tag.color} inline-flex items-center text-xs px-2 py-1 rounded-full`}
                  >
                    <Tag size={12} className="mr-1" />
                    {tag.name}
                  </span>
                ))}
              </div>
              
              {/* Description with expandable details */}
              <div>
                <p className="text-gray-700 mb-4">
                  {activeTool.longDescription || activeTool.description}
                </p>
                
                <button 
                  className={`text-sm flex items-center gap-1 mb-6 ${currentStage?.color || 'text-slate-600'}`}
                  onClick={() => setExpandedDescription(!expandedDescription)}
                >
                  {expandedDescription ? 
                    <span className="flex items-center">Show less</span> : 
                    <span className="flex items-center">Show more details</span>
                  }
                </button>
              </div>
              
              {/* Detailed Content - conditionally visible */}
              <div className={expandedDescription ? 'block' : 'hidden'}>
                {/* Benefits Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-3 flex items-center gap-2 text-gray-900">
                    <Check size={18} 
                      className="text-white p-1 rounded-full"
                      style={{ background: `linear-gradient(90deg, ${currentStage?.colorStart || '#64748b'}, ${currentStage?.colorEnd || '#475569'})` }}
                    /> 
                    Key Benefits
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {activeTool.benefits?.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1"><Check size={14} /></span>
                        <span>{benefit}</span>
                      </li>
                    )) || (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1"><Check size={14} /></span>
                          <span>Streamlines the development process</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1"><Check size={14} /></span>
                          <span>Reduces time to validate assumptions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1"><Check size={14} /></span>
                          <span>Improves cross-team collaboration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1"><Check size={14} /></span>
                          <span>Prevents common MVP pitfalls</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
                
                {/* How To Use Section */}
                {activeTool.howTo && activeTool.howTo.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-3 flex items-center gap-2 text-gray-900">
                      <Zap size={18} 
                        className="text-white p-1 rounded-full"
                        style={{ background: `linear-gradient(90deg, ${currentStage?.colorStart || '#64748b'}, ${currentStage?.colorEnd || '#475569'})` }}
                      /> 
                      How To Use
                    </h4>
                    <ol className="space-y-2 text-gray-700 list-decimal pl-5">
                      {activeTool.howTo.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                )}
                
                {/* Resources Section */}
                {activeTool.resources && activeTool.resources.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-3 flex items-center gap-2 text-gray-900">
                      <BookOpen size={18} 
                        className="text-white p-1 rounded-full"
                        style={{ background: `linear-gradient(90deg, ${currentStage?.colorStart || '#64748b'}, ${currentStage?.colorEnd || '#475569'})` }}
                      /> 
                      Resources
                    </h4>
                    <ul className="space-y-3">
                      {activeTool.resources.map((resource, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Link2 size={14} className="text-gray-400" />
                          <a 
                            href={resource.url}
                            className={`text-sm inline-flex items-center gap-1 font-medium transition-colors ${currentStage?.color || 'text-slate-600'} hover:opacity-80`}
                            rel="noopener noreferrer"
                          >
                            {resource.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="flex gap-3 mt-8">
                <a 
                  href={activeTool.link}
                  className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-lg shadow transition-colors flex-1 justify-center"
                  style={{ 
                    background: `linear-gradient(90deg, ${currentStage?.colorStart || '#64748b'}, ${currentStage?.colorEnd || '#475569'})` 
                  }}
                >
                  <span>View Documentation</span>
                  <ExternalLink size={16} />
                </a>
              
              <a 
                href={activeTool.link}
                  className="inline-flex items-center gap-2 border border-gray-200 bg-white px-5 py-2.5 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
              >
                  <Download size={16} className="text-gray-500" />
              </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Timeline;
