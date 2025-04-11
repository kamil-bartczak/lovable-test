import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tool } from "./types";
import { stages, findStageById } from "./data";
import styles from "@/styles/timeline.module.css";
import { Wrench } from "lucide-react";

// Import sub-components
import StageNavigation from "./StageNavigation";
import StageInfoCard from "./StageInfoCard";
import ToolGrid from "./ToolGrid";
import ToolDetail from "./ToolDetail";

const ToolkitTimeline = () => {
  const [activeTool, setActiveTool] = useState<Tool | null>(null);
  const [activeStageId, setActiveStageId] = useState<string>("1");
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [expandedDescription, setExpandedDescription] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    setActiveCategory(null);
    setSearchQuery("");
  }, [activeStageId]);

  const currentStage = findStageById(parseInt(activeStageId));

  return (
    <section id="stages" className={`py-24 relative overflow-hidden ${styles['highlight-bg']}`}>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-chakra font-bold mb-6 text-gray-900">Rabbit MVP Methodology</h2>
          <p className="text-xl text-gray-600">
            A structured approach to building and validating your product through seven key stages.
          </p>
        </div>
        
        {/* Interactive Timeline */}
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
                  
                  {/* Stage Detail View */}
                  <StageInfoCard 
                    stage={stage} 
                  />
                  
                  {/* Tools View without Filtering */}
                  {currentStage && (
                    <div className="col-span-1 lg:col-span-2 space-y-6">
                      <div className="flex items-center gap-2">
                        <Wrench 
                          size={18} 
                          className="text-white p-1 rounded-full"
                          style={{ background: `linear-gradient(90deg, ${stage.colorStart}, ${stage.colorEnd})` }}  
                        />
                        <h3 className="text-xl font-medium text-gray-900">Featured Tools</h3>
                      </div>
                      
                      <ToolGrid 
                        stage={stage}
                        activeCategory={null}
                        setActiveCategory={setActiveCategory}
                        setActiveTool={setActiveTool}
                        searchQuery=""
                      />
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      
      {/* Tool Detail Modal */}
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

export default ToolkitTimeline; 