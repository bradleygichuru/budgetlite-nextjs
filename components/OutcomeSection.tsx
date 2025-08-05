
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Shield } from "lucide-react";

const OutcomeSection = () => {
	const outcomes = [
		{
			icon: <CheckCircle className="w-12 h-12 text-green-500" />,
			title: "Effortless Clarity",
			quote: "Automatically receive transactions from your bank account... something that would be great!",
			description: "All your spending, effortlessly synced and neatly organized, without manual input."
		},
		{
			icon: <TrendingUp className="w-12 h-12 text-budget-500" />,
			title: "Instant Insights",
			quote: "Something that automatically assigns transactions to categories would be a bonus.",
			description: "See exactly where your money goes at a glance, so you can make smarter decisions without lifting a finger."
		},
		{
			icon: <Shield className="w-12 h-12 text-purple-500" />,
			title: "Peace of Mind",
			quote: "",
			description: "Finally stick to a budget without the stress, knowing exactly what's available and when, freeing up your time for what truly matters."
		}
	];

	return (
		<section className="py-20 px-4 bg-gradient-to-br from-green-50 to-[#f0f9ff]">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Imagine Budgeting That{" "}
						<span className="text-green-600">Just Works For You.</span>
					</h2>
				</div>

				<div className="grid md:grid-cols-3 gap-8 mb-12">
					{outcomes.map((outcome, index) => (
						<Card key={index} className="border-2 border-green-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
							<CardContent className="p-8 text-center">
								<div className="mb-6 flex justify-center">{outcome.icon}</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">{outcome.title}</h3>
								{outcome.quote && (
									<blockquote className="text-budget-600 italic text-lg mb-4 font-medium">
										"{outcome.quote}"
									</blockquote>
								)}
								<p className="text-gray-700 leading-relaxed">{outcome.description}</p>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="bg-gradient-to-r from-green-500 to-[#0284c7] rounded-2xl p-8 shadow-xl text-white max-w-4xl mx-auto text-center">
					<h3 className="text-2xl font-bold mb-4">The New Paradigm</h3>
					<p className="text-xl leading-relaxed">
						What if achieving financial clarity wasn't about endless manual input and confusing spreadsheets,
						but about <strong>intelligent automation and effortless insights?</strong> Welcome to the new way to budget.
					</p>
				</div>
			</div>
		</section>
	);
};

export default OutcomeSection;
