
import { Card, CardContent } from "@/components/ui/card";

const PainSection = () => {
  const painPoints = [
    {
      quote: "I'm just thinking that compiling my spending... took quite a while, if I have to do that constantly I might end up just not budgeting.",
      icon: "⏰"
    },
    {
      quote: "I've got a full time job and a family so sitting down and figuring out how much of each receipt is what category is just something I don't feel I've got time to do.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      quote: "Are you tired of complicated apps that make you work harder, not smarter, leaving you feeling frustrated and behind?",
      icon: "😤"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Feel like you don't have time to budget...{" "}
            <span className="text-red-600">or just hate the manual grind?</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {painPoints.map((pain, index) => (
            <Card key={index} className="border-2 border-red-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{pain.icon}</div>
                <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                  "{pain.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500 max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed">
            <strong className="text-red-600">You might believe</strong> budgeting has to be a time-consuming chore, 
            or that truly effective tools are always expensive and out of reach.{" "}
            <strong className="text-gray-900">It doesn't, and they're not.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
