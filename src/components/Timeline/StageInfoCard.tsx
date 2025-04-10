import React from "react";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stage } from "./types";
import styles from "@/styles/timeline.module.css";

interface StageInfoCardProps {
  stage: Stage;
}

const StageInfoCard: React.FC<StageInfoCardProps> = ({ stage }) => {
  // Get the current stage's CSS variables
  const stageColorVars = {
    '--stage-color-1': stage.colorStart || '#64748b',
    '--stage-color-2': stage.colorEnd || '#475569',
  } as React.CSSProperties;

  const renderStageActivities = (stageId: number) => {
    switch (stageId) {
      case 1:
        return (
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
        );
      case 2:
        return (
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
        );
      case 3:
        return (
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
        );
      case 4:
        return (
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
        );
      case 5:
        return (
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
        );
      case 6:
        return (
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
        );
      case 7:
        return (
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
        );
      default:
        return null;
    }
  };

  const getStageResult = (stageId: number) => {
    switch (stageId) {
      case 1: return "Defined business hypothesis and validation plan.";
      case 2: return "Validated hypotheses and defined MVP functional scope.";
      case 3: return "Complete MVP design ready for implementation.";
      case 4: return "Working product foundation with core functionality.";
      case 5: return "Complete no-code/low-code MVP ready for user testing.";
      case 6: return "Validated and refined MVP ready for launch.";
      case 7: return "Live product, initial data, and next steps decision.";
      default: return "";
    }
  };

  const getStageGoal = (stageId: number) => {
    switch (stageId) {
      case 1: return "Define and validate your business hypothesis.";
      case 2: return "Validate business hypotheses with potential customers.";
      case 3: return "Design your solution and MVP architecture.";
      case 4: return "Implement core functionality using no-code/low-code solutions.";
      case 5: return "Expand features with minimal coding and prepare for testing.";
      case 6: return "Test with real users and make rapid improvements.";
      case 7: return "Launch your MVP and collect data for the next iteration.";
      default: return "";
    }
  };

  return (
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
              {getStageGoal(stage.id)}
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
              {renderStageActivities(stage.id)}
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
              {getStageResult(stage.id)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StageInfoCard; 