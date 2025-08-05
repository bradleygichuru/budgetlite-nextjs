
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LinkIcon, Brain, BarChart3 } from "lucide-react";

const ProductSection = () => {
	const steps = [
		{
			number: "1",
			icon: <LinkIcon className="w-8 h-8 text-budget-500" />,
			title: "Connect Your Accounts",
			description: "Securely link all your bank accounts and credit cards in minutes."
		},
		{
			number: "2",
			icon: <Brain className="w-8 h-8 text-purple-500" />,
			title: "Auto-Categorize & Organize",
			description: "BudgetLite's smart AI automatically assigns transactions to categories for you."
		},
		{
			number: "3",
			icon: <BarChart3 className="w-8 h-8 text-green-500" />,
			title: "Get Simple Insights",
			description: "View easy-to-understand reports and see your financial picture at a glance, anytime."
		}
	];

	return (
		<section className="py-20 px-4 bg-white">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Introducing{" "}
						<span className="text-budget-600">BudgetLite</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						The Zero-Friction Essential Budgeter. Simple, automated, and built for your busy life,
						so you can focus on what matters most.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 mb-16">
					{steps.map((step, index) => (
						<Card key={index} className="border-2 border-budget-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
							<CardContent className="p-8 text-center">
								<div className="w-16 h-16 bg-budget-100 rounded-full flex items-center justify-center mx-auto mb-6">
									<span className="text-2xl font-bold text-budget-600">{step.number}</span>
								</div>
								<div className="mb-4 flex justify-center">{step.icon}</div>
								<h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
								<p className="text-gray-700 leading-relaxed">{step.description}</p>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="text-center bg-gray-50 rounded-2xl p-12">
					<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						Ready for effortless budgeting?
					</h3>
					<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
						Stop dreading your finances and start living. Get BudgetLite for Free Today!
					</p>
					<Button
						size="lg"
						className="bg-[#0284c7] hover:bg-[#0369a1] text-white px-12 py-4 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
					>
						Get BudgetLite for Free Today!
					</Button>
				</div>
			</div>
		</section>
	);
};

export default ProductSection;
