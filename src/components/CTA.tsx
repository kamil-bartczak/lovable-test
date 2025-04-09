
import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const CTA = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real application, you would send this to your backend
    console.log("Subscribing email:", email);
    
    toast({
      title: "Thanks for subscribing!",
      description: "You'll be the first to know about Rabbit MVP updates.",
    });
    
    setEmail("");
  };

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="minimal-card max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-2 text-gray-900 subtle-accent">
                Ready to build your MVP in 7 days?
              </h2>
              <div className="mb-6"></div>
              <p className="text-xl text-gray-700 mb-6">
                Start using Rabbit MVP methodology today and transform your ideas 
                into functional products at unprecedented speed.
              </p>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white font-normal text-lg px-8 py-6">
                Get Started <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-medium mb-4">Stay updated with Rabbit MVP</h3>
              <p className="text-gray-600 mb-4">
                Subscribe to our newsletter for methodology updates, success stories, 
                and exclusive resources.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white">
                  Subscribe <Send className="ml-2" size={16} />
                </Button>
              </form>
              
              <p className="text-gray-500 text-sm mt-3">
                Join our community of innovators and product builders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
