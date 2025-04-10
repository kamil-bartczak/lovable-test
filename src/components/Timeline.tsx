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
          longDescription: "The Business Model Canvas is a strategic management template used for developing new business models and documenting existing ones. It offers a visual chart with elements describing a firm's value proposition, infrastructure, customers, and finances, helping businesses align their activities by illustrating potential trade-offs.",
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
        { id: 1002, name: "Value Proposition Canvas", category: 101, description: "A tool to ensure a product or service is positioned around what the customer values and needs.", link: "#", tags: [{ id: 1, name: "Strategy", color: "bg-blue-100 text-blue-700" }] },
        { id: 1003, name: "Jobs To Be Done Framework", category: 102, description: "A framework for understanding why customers 'hire' products and services to solve problems.", link: "#", tags: [{ id: 2, name: "Research", color: "bg-indigo-100 text-indigo-700" }] },
        { id: 1004, name: "Lean Canvas", category: 101, description: "A 1-page business plan template that helps you deconstruct your idea into key assumptions.", link: "#", tags: [{ id: 1, name: "Strategy", color: "bg-blue-100 text-blue-700" }] },
        { id: 1005, name: "Market Sizing Calculator", category: 102, description: "A tool to estimate the potential size of your target market.", link: "#", tags: [{ id: 2, name: "Research", color: "bg-indigo-100 text-indigo-700" }] },
        { id: 1006, name: "Competitor Analysis Template", category: 102, description: "A structured way to analyze and compare your business against competitors.", link: "#", tags: [{ id: 2, name: "Research", color: "bg-indigo-100 text-indigo-700" }] },
        { id: 1007, name: "SWOT Analysis Tool", category: 103, description: "Identify Strengths, Weaknesses, Opportunities, and Threats for your business concept.", link: "#", tags: [{ id: 3, name: "Planning", color: "bg-violet-100 text-violet-700" }] },
        { id: 1008, name: "Customer Persona Creator", category: 102, description: "Build detailed profiles of your target customers to better understand their needs.", link: "#", tags: [{ id: 2, name: "Research", color: "bg-indigo-100 text-indigo-700" }] },
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
        { id: 2001, name: "Customer Interviews", category: 201, description: "Structured conversations with potential customers to gather insights and validate assumptions.", link: "#", tags: [{ id: 1, name: "Research", color: "bg-purple-100 text-purple-700" }] },
        { id: 2002, name: "Landing Page Tests", category: 202, description: "Simple web pages designed to test interest in a product before it's built.", link: "#", tags: [{ id: 2, name: "Testing", color: "bg-fuchsia-100 text-fuchsia-700" }] },
        { id: 2003, name: "Problem Validation Surveys", category: 201, description: "Questionnaires designed to confirm if your target market experiences the problem you're solving.", link: "#", tags: [{ id: 1, name: "Research", color: "bg-purple-100 text-purple-700" }] },
        { id: 2004, name: "Fake Door Testing", category: 202, description: "A method to measure interest in a product or feature before building it.", link: "#", tags: [{ id: 2, name: "Testing", color: "bg-fuchsia-100 text-fuchsia-700" }] },
        { id: 2005, name: "Empathy Mapping", category: 201, description: "A collaborative tool teams can use to gain insight into their customers.", link: "#", tags: [{ id: 1, name: "Research", color: "bg-purple-100 text-purple-700" }] },
        { id: 2006, name: "User Journey Mapping", category: 201, description: "A visual representation of the user's experience with your product from start to finish.", link: "#", tags: [{ id: 1, name: "Research", color: "bg-purple-100 text-purple-700" }] },
        { id: 2007, name: "Conversion Funnel Analysis", category: 203, description: "Track how visitors move through your landing page to identify optimization opportunities.", link: "#", tags: [{ id: 3, name: "Analytics", color: "bg-pink-100 text-pink-700" }] },
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
        { id: 3001, name: "Feature Prioritization Matrix", category: 303, description: "A tool to help decide which features to include in your MVP based on impact and effort.", link: "#", tags: [{ id: 3, name: "Planning", color: "bg-orange-100 text-orange-700" }] },
        { id: 3002, name: "User Stories Workshop", category: 301, description: "A method to capture product functionality from the end-user perspective.", link: "#", tags: [{ id: 1, name: "UX Design", color: "bg-amber-100 text-amber-700" }] },
        { id: 3003, name: "Wireframing Tools", category: 302, description: "Tools for creating low-fidelity mockups of your product interface.", link: "#", tags: [{ id: 2, name: "UI Design", color: "bg-yellow-100 text-yellow-700" }] },
        { id: 3004, name: "User Flow Diagrams", category: 301, description: "Visual representations of the user's journey through your product.", link: "#", tags: [{ id: 1, name: "UX Design", color: "bg-amber-100 text-amber-700" }] },
        { id: 3005, name: "Design Sprint Methodology", category: 303, description: "A time-constrained process to rapidly design and test a prototype.", link: "#", tags: [{ id: 3, name: "Planning", color: "bg-orange-100 text-orange-700" }] },
        { id: 3006, name: "Information Architecture Planning", category: 301, description: "Organize and structure content to create intuitive navigation and usability.", link: "#", tags: [{ id: 1, name: "UX Design", color: "bg-amber-100 text-amber-700" }] },
        { id: 3007, name: "UI Component Library", category: 302, description: "Pre-built interface elements to ensure consistency across your product.", link: "#", tags: [{ id: 2, name: "UI Design", color: "bg-yellow-100 text-yellow-700" }] },
      ]
    },
    {
      id: 4,
      title: "Core Implementation",
      description: "Build the essential features using AI acceleration. Focus on functionality over perfection.",
      icon: <Code size={36} />,
      color: "text-green-600",
      colorStart: "#16a34a",
      colorEnd: "#15803d",
      categories: [
        { id: 401, name: "Development", color: "bg-green-100 text-green-700", icon: <Code size={16} />, description: "Tools for building your product" },
        { id: 402, name: "AI Tools", color: "bg-emerald-100 text-emerald-700", icon: <BrainCircuit size={16} />, description: "AI-powered tools to accelerate development" },
        { id: 403, name: "Integration", color: "bg-teal-100 text-teal-700", icon: <Link2 size={16} />, description: "Tools for connecting with external services" }
      ],
      tools: [
        { id: 4001, name: "No-Code Tools", category: 401, description: "Platforms that allow you to build applications without writing code.", link: "#", tags: [{ id: 1, name: "Development", color: "bg-green-100 text-green-700" }] },
        { id: 4002, name: "AI Code Generation", category: 402, description: "Tools that use AI to generate code based on natural language descriptions.", link: "#", tags: [{ id: 2, name: "AI Tools", color: "bg-emerald-100 text-emerald-700" }] },
        { id: 4003, name: "UI Component Libraries", category: 401, description: "Pre-built interface components that can be quickly assembled into applications.", link: "#", tags: [{ id: 1, name: "Development", color: "bg-green-100 text-green-700" }] },
        { id: 4004, name: "API Integration Platforms", category: 403, description: "Tools that simplify connecting your application with third-party services.", link: "#", tags: [{ id: 3, name: "Integration", color: "bg-teal-100 text-teal-700" }] },
        { id: 4005, name: "Continuous Integration Tools", category: 401, description: "Systems that automatically merge code changes and run tests.", link: "#", tags: [{ id: 1, name: "Development", color: "bg-green-100 text-green-700" }] },
        { id: 4006, name: "Version Control Systems", category: 401, description: "Track and manage changes to your codebase efficiently.", link: "#", tags: [{ id: 1, name: "Development", color: "bg-green-100 text-green-700" }] },
        { id: 4007, name: "Development Environment Setup", category: 401, description: "Configure your workstation for efficient development.", link: "#", tags: [{ id: 1, name: "Development", color: "bg-green-100 text-green-700" }] },
      ]
    },
    {
      id: 5,
      title: "Feature Expansion",
      description: "Add secondary features based on validated priorities. Keep expanding within the 7-day timeframe.",
      icon: <Layers size={36} />,
      color: "text-cyan-600",
      colorStart: "#0891b2",
      colorEnd: "#0e7490",
      categories: [
        { id: 501, name: "Development", color: "bg-cyan-100 text-cyan-700", icon: <Code size={16} />, description: "Tools for extending your product" },
        { id: 502, name: "Testing", color: "bg-sky-100 text-sky-700", icon: <TestTube size={16} />, description: "Tools for testing your expanded features" },
        { id: 503, name: "Design", color: "bg-blue-100 text-blue-700", icon: <Lightbulb size={16} />, description: "Tools for designing additional features" }
      ],
      tools: [
        { id: 5001, name: "Agile User Story Mapping", category: 501, description: "A visual exercise that helps prioritize work and understand user experience.", link: "#", tags: [{ id: 1, name: "Development", color: "bg-cyan-100 text-cyan-700" }] },
        { id: 5002, name: "Feature Flag Systems", category: 501, description: "Tools that allow you to toggle features on/off without deploying new code.", link: "#", tags: [{ id: 1, name: "Development", color: "bg-cyan-100 text-cyan-700" }] },
        { id: 5003, name: "Rapid Prototyping Tools", category: 503, description: "Software that enables quick creation of interactive prototypes.", link: "#", tags: [{ id: 3, name: "Design", color: "bg-blue-100 text-blue-700" }] },
        { id: 5004, name: "Component-Based Design Systems", category: 503, description: "Reusable design elements that ensure consistency and speed up development.", link: "#", tags: [{ id: 3, name: "Design", color: "bg-blue-100 text-blue-700" }] },
        { id: 5005, name: "BDD Testing Frameworks", category: 502, description: "Tools that support Behavior-Driven Development for feature validation.", link: "#", tags: [{ id: 2, name: "Testing", color: "bg-sky-100 text-sky-700" }] },
        { id: 5006, name: "Continuous Deployment Pipelines", category: 501, description: "Automate the delivery of code changes to production environments.", link: "#", tags: [{ id: 1, name: "Development", color: "bg-cyan-100 text-cyan-700" }] },
        { id: 5007, name: "Technical Debt Tracker", category: 501, description: "Monitor and manage shortcuts taken during rapid development.", link: "#", tags: [{ id: 1, name: "Development", color: "bg-cyan-100 text-cyan-700" }] },
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
        { id: 601, name: "Usability", color: "bg-rose-100 text-rose-700", icon: <Users size={16} />, description: "Tools for testing usability with real users" },
        { id: 602, name: "Analytics", color: "bg-red-100 text-red-700", icon: <Database size={16} />, description: "Tools for measuring user behavior" },
        { id: 603, name: "Quality", color: "bg-pink-100 text-pink-700", icon: <Zap size={16} />, description: "Tools for ensuring high quality" }
      ],
      tools: [
        { id: 6001, name: "Usability Testing Templates", category: 601, description: "Structured formats for observing users interact with your product.", link: "#", tags: [{ id: 1, name: "Usability", color: "bg-rose-100 text-rose-700" }] },
        { id: 6002, name: "A/B Testing Platforms", category: 602, description: "Tools to compare two versions of a webpage or app to determine which performs better.", link: "#", tags: [{ id: 2, name: "Analytics", color: "bg-red-100 text-red-700" }] },
        { id: 6003, name: "Heatmap Analytics", category: 602, description: "Visual representations of where users click and spend time on your interface.", link: "#", tags: [{ id: 2, name: "Analytics", color: "bg-red-100 text-red-700" }] },
        { id: 6004, name: "User Feedback Collection Tools", category: 601, description: "Solutions for gathering and organizing user opinions and suggestions.", link: "#", tags: [{ id: 1, name: "Usability", color: "bg-rose-100 text-rose-700" }] },
        { id: 6005, name: "Bug Tracking Systems", category: 603, description: "Software for documenting, tracking, and prioritizing product issues.", link: "#", tags: [{ id: 3, name: "Quality", color: "bg-pink-100 text-pink-700" }] },
        { id: 6006, name: "Performance Monitoring Tools", category: 603, description: "Track and optimize the speed and reliability of your application.", link: "#", tags: [{ id: 3, name: "Quality", color: "bg-pink-100 text-pink-700" }] },
        { id: 6007, name: "Accessibility Auditing Tools", category: 603, description: "Ensure your product works well for users with disabilities.", link: "#", tags: [{ id: 3, name: "Quality", color: "bg-pink-100 text-pink-700" }] },
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
        { id: 703, name: "Planning", color: "bg-purple-100 text-purple-700", icon: <FileText size={16} />, description: "Tools for planning your next iteration" }
      ],
      tools: [
        { id: 7001, name: "Launch Checklist Template", category: 701, description: "A comprehensive list of tasks to complete before releasing your product.", link: "#", tags: [{ id: 1, name: "Launch", color: "bg-indigo-100 text-indigo-700" }] },
        { id: 7002, name: "Analytics Implementation Guide", category: 702, description: "Instructions for setting up proper tracking of user behavior in your product.", link: "#", tags: [{ id: 2, name: "Analytics", color: "bg-violet-100 text-violet-700" }] },
        { id: 7003, name: "Early Adopter Engagement Kit", category: 701, description: "Resources for attracting and retaining your first users.", link: "#", tags: [{ id: 1, name: "Launch", color: "bg-indigo-100 text-indigo-700" }] },
        { id: 7004, name: "Customer Feedback Loops", category: 702, description: "Systems for continuously collecting and implementing user suggestions.", link: "#", tags: [{ id: 2, name: "Analytics", color: "bg-violet-100 text-violet-700" }] },
        { id: 7005, name: "Iterative Development Planner", category: 703, description: "A framework for planning your next development cycle based on launch data.", link: "#", tags: [{ id: 3, name: "Planning", color: "bg-purple-100 text-purple-700" }] },
        { id: 7006, name: "Product Metrics Dashboard", category: 702, description: "Visualize key performance indicators for your product in one place.", link: "#", tags: [{ id: 2, name: "Analytics", color: "bg-violet-100 text-violet-700" }] },
        { id: 7007, name: "User Onboarding Toolkit", category: 701, description: "Design an effective first-time user experience to increase retention.", link: "#", tags: [{ id: 1, name: "Launch", color: "bg-indigo-100 text-indigo-700" }] },
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
                      
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex flex-col space-y-4">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-1 h-5 rounded-full"
                              style={{ background: `linear-gradient(to bottom, ${stage.colorStart}, ${stage.colorEnd})` }}
                            ></div>
                            <h4 className="font-medium text-slate-900">Timeline Position</h4>
                          </div>
                          <div className="w-full bg-gray-100 h-2 rounded-full relative mt-2">
                            <div 
                              className="absolute h-2 rounded-full transition-all duration-700"
                              style={{ 
                                width: `${(stage.id / 7) * 100}%`,
                                background: `linear-gradient(to right, ${stage.colorStart}, ${stage.colorEnd})` 
                              }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>Start</span>
                            <span>MVP Complete</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex flex-col space-y-3">
                          <h4 className="font-medium text-slate-900 mb-2">Available Categories</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {stage.categories.map(category => (
                              <button
                                key={category.id}
                                className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all text-sm justify-start 
                                ${activeCategory === category.id ? category.color : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                                onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                              >
                                {category.icon}
                                {category.name}
                              </button>
                            ))}
                          </div>
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
