import React from "react";
import { X, Clock, Check, ArrowRight, Lightbulb, List } from "lucide-react";
import { Stage } from "./types";
import styles from "@/styles/timeline.module.css";

interface StageGuideModalProps {
  stage: Stage;
  onClose: () => void;
}

const StageGuideModal: React.FC<StageGuideModalProps> = ({ stage, onClose }) => {
  // Function to get content based on stage ID
  const getStageContent = (stageId: number) => {
    switch (stageId) {
      case 1:
        return {
          description: "The Business Exploration stage is all about understanding your market, defining your business goals, and creating a clear vision for your MVP. This is where you validate your initial business hypotheses and ensure you're building something people actually want.",
          keyPoints: [
            "Define your target audience with precision",
            "Analyze market trends and competition",
            "Create a compelling value proposition",
            "Develop your business model",
            "Define success metrics for your MVP"
          ],
          activities: [
            "Market and competition analysis with AI",
            "Problem and customer segment identification",
            "AI-assisted Business Model Canvas creation",
            "AI-powered SWOT analysis",
            "5-10 key business hypotheses preparation"
          ]
        };
      case 2:
        return {
          description: "The Customer Validation stage focuses on testing your business hypotheses with real potential customers. Through interviews and surveys, you'll gather valuable feedback that will shape your MVP and ensure it addresses real customer pain points.",
          keyPoints: [
            "Prepare effective interview questions",
            "Identify and reach out to potential customers",
            "Gather and analyze customer feedback",
            "Refine your value proposition based on insights",
            "Validate or pivot your core business assumptions"
          ],
          activities: [
            "AI-assisted interview script preparation",
            "Identifying 5-10 potential customers",
            "Creating a concise validation survey (max 5 questions)",
            "Conducting 3-5 remote customer interviews",
            "AI-assisted analysis of feedback"
          ]
        };
      case 3:
        return {
          description: "In the Solution Design stage, you'll map out the user journey, select your technology stack, and design the MVP architecture and interface. The goal is to create a clear blueprint for what you'll build in the following stages.",
          keyPoints: [
            "Map out the complete user journey",
            "Choose the right technology stack",
            "Create a simple but effective UI/UX design",
            "Define the core features for your MVP",
            "Plan your development approach"
          ],
          activities: [
            "AI-assisted user journey mapping",
            "Solution architecture design",
            "Technology stack selection",
            "AI-generated UI/UX design",
            "Key screen wireframing"
          ]
        };
      case 4:
        return {
          description: "The Core Implementation stage is where you'll build the foundation of your MVP using no-code/low-code tools. The focus is on speed and creating a working foundation that delivers your core value proposition.",
          keyPoints: [
            "Select appropriate no-code/low-code platforms",
            "Configure basic application components",
            "Set up essential databases and data structures",
            "Implement core user flows",
            "Focus on delivering the minimum viable experience"
          ],
          activities: [
            "No-code/low-code platform selection",
            "Basic app configuration in no-code tools",
            "Using templates instead of building from scratch",
            "No-code database configuration",
            "AI-generated content and visuals"
          ]
        };
      case 5:
        return {
          description: "The Feature Extension stage involves enhancing your core MVP with additional functionality, integrations, and automations to create a more complete user experience while still maintaining focus on your value proposition.",
          keyPoints: [
            "Add secondary features that enhance the core experience",
            "Integrate with external services",
            "Implement basic automations for efficiency",
            "Conduct internal testing of all functionality",
            "Maintain focus on your core value proposition"
          ],
          activities: [
            "No-code functionality extension",
            "Using plugins and integrations",
            "External service connection via connectors",
            "Process automation configuration",
            "Internal functional testing"
          ]
        };
      case 6:
        return {
          description: "The User Testing stage is where you'll put your MVP in front of real users, collect structured feedback, identify critical issues, and make rapid improvements to prepare for launch.",
          keyPoints: [
            "Recruit appropriate test users",
            "Design effective test scenarios",
            "Collect and analyze user feedback",
            "Prioritize and implement critical improvements",
            "Prepare marketing materials for launch"
          ],
          activities: [
            "Testing with 3-5 potential users",
            "Structured feedback collection",
            "Critical issue identification",
            "Implementing feedback-based improvements",
            "AI-assisted marketing material creation"
          ]
        };
      case 7:
        return {
          description: "The Launch & Learn stage is the culmination of your MVP journey, where you'll deploy your product, set up monitoring, collect user data, and make the crucial decision about your next steps based on real-world usage.",
          keyPoints: [
            "Perform final technical adjustments",
            "Deploy your MVP to production",
            "Set up analytics and monitoring",
            "Collect and analyze initial user data",
            "Decide whether to pivot, persevere, or abandon"
          ],
          activities: [
            "Final technical adjustments",
            "MVP deployment to production",
            "Error monitoring configuration",
            "Analyzing user behavior and feedback",
            "Deciding on next steps: pivot, persevere, or abandon"
          ]
        };
      default:
        return {
          description: "Stage information coming soon.",
          keyPoints: [],
          activities: []
        };
    }
  };

  const stageContent = getStageContent(stage.id);
  
  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center transition-all backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        className={`bg-white w-full max-w-4xl mx-4 rounded-xl shadow-xl overflow-hidden ${styles['animate-slide-up']}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          className="relative p-6"
          style={{ 
            background: `linear-gradient(135deg, ${stage.colorStart}20, ${stage.colorEnd}40)`,
          }}
        >
          <button 
            className="absolute top-4 right-4 rounded-full p-1.5 bg-white/80 text-gray-600 hover:text-gray-900 hover:bg-white/90 transition-colors"
            onClick={onClose}
          >
            <X size={18} />
          </button>
          
          <div className="flex items-start gap-5">
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: `linear-gradient(135deg, ${stage.colorStart}, ${stage.colorEnd})`,
                boxShadow: `0 10px 15px -3px ${stage.colorStart}30`
              }}
            >
              <div className="text-white">
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
                  Stage {stage.id} of 7
                </span>
                {stage.duration && (
                  <span className="text-xs flex items-center gap-1 text-gray-500">
                    <Clock size={12} />
                    {stage.duration}
                  </span>
                )}
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900">
                {stage.title}
              </h2>
              
              <p className="text-gray-600 mt-2">
                {stage.description}
              </p>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="p-6 max-h-[calc(80vh-120px)] overflow-y-auto">
          <div className="prose max-w-none">
            {/* Detailed Description */}
            <div className="mb-8">
              <p className="text-gray-700 text-lg">
                {stageContent.description}
              </p>
            </div>
            
            {/* Key Points */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div 
                  className="p-1 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}
                >
                  <Lightbulb size={16} className="text-white" />
                </div>
                Key Points for Success
              </h3>
              
              <ul className="space-y-3">
                {stageContent.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div 
                      className="p-1 rounded-full mt-1"
                      style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}
                    >
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Key Activities */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div 
                  className="p-1 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}
                >
                  <List size={16} className="text-white" />
                </div>
                Key Activities
              </h3>
              
              <ul className="space-y-3">
                {stageContent.activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-3 bg-gray-50 p-3 rounded-md">
                    <div 
                      className="w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium text-white shrink-0 mt-0.5"
                      style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}
                    >
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Key Outcome */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div 
                  className="p-1 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}
                >
                  <ArrowRight size={16} className="text-white" />
                </div>
                Key Outcome
              </h3>
              
              <div 
                className="p-4 rounded-md flex items-start gap-3"
                style={{ 
                  background: `linear-gradient(90deg, ${stage.colorStart}10, ${stage.colorEnd}20)`,
                  border: `1px solid ${stage.colorStart}30`
                }}
              >
                <div 
                  className="p-1 rounded-full mt-0.5"
                  style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}
                >
                  <Check size={14} className="text-white" />
                </div>
                <p 
                  className="font-medium"
                  style={{ color: stage.colorStart }}
                >
                  {stage.keyOutcome}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-6 border-t border-gray-200">
          <button
            className="w-full py-3 px-6 rounded-lg text-white font-medium"
            style={{ 
              background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` 
            }}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default StageGuideModal; 