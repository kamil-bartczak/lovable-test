import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tool } from "./types";
import { stages, findStageById } from "./data";
import styles from "@/styles/timeline.module.css";

// Import sub-components
import StageNavigation from "./StageNavigation";
import StageInfoCard from "./StageInfoCard";
import ToolGrid from "./ToolGrid";
import ToolDetail from "./ToolDetail";

const Timeline = () => {
  const [activeTool, setActiveTool] = useState<Tool | null>(null);
  const [activeStageId, setActiveStageId] = useState<string>("1");
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [expandedDescription, setExpandedDescription] = useState<boolean>(false);

  useEffect(() => {
    setActiveCategory(null);
  }, [activeStageId]);

  const currentStage = findStageById(activeStageId);

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
        <StageNavigation 
          stages={stages} 
          activeStageId={activeStageId} 
          setActiveStageId={setActiveStageId} 
        />
        
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
                  
                  {/* Stage Info Card */}
                  <StageInfoCard stage={stage} />
                  
                  {/* Tools Section */}
                  {currentStage && (
                    <ToolGrid 
                      stage={stage}
                      activeCategory={activeCategory}
                      setActiveCategory={setActiveCategory}
                      setActiveTool={setActiveTool}
                    />
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      
      {/* Tool Detail Drawer */}
      {activeTool && currentStage && (
        <ToolDetail
          tool={activeTool}
          currentStage={currentStage}
          expandedDescription={expandedDescription}
          setExpandedDescription={setExpandedDescription}
          onClose={() => setActiveTool(null)}
        />
      )}
    </section>
  );
};

export default Timeline; 