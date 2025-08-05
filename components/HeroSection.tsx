
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import logo from '../public/piggy-bank 3.svg'
const HeroSection = () => {
	return (
		<section className="min-h-screen bg-gradient-to-br from-budget-50 via-white to-budget-100 flex items-center justify-center px-4 py-20">
			<div className="max-w-6xl mx-auto text-center">
				<div className="animate-fade-in">
					<Image className="w-24 h-24 mx-auto mb-8" src={logo} alt="Budgetlite" />
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
						Honestly, manually tracking{" "}
						<span className="text-budget-600">every single receipt</span>{" "}
						is a bit too much for me.
					</h1>

					<p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
						BudgetLite is the effortless budgeting solution for busy individuals and families,
						making financial tracking simple and automatic.
					</p>

					<div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
						<div className="flex items-start space-x-3 text-left">
							<div className="w-2 h-2 bg-budget-500 rounded-full mt-3 flex-shrink-0"></div>
							<p className="text-gray-700">Say goodbye to tedious data entry with automatic bank sync.</p>
						</div>
						<div className="flex items-start space-x-3 text-left">
							<div className="w-2 h-2 bg-budget-500 rounded-full mt-3 flex-shrink-0"></div>
							<p className="text-gray-700">Understand exactly where your money goes with smart auto-categorization.</p>
						</div>
						<div className="flex items-start space-x-3 text-left">
							<div className="w-2 h-2 bg-budget-500 rounded-full mt-3 flex-shrink-0"></div>
							<p className="text-gray-700">See clear, simple reports without the spreadsheet headaches.</p>
						</div>
					</div>

					<Button
						size="lg"
						className="bg-[#0284c7] hover:bg-[#0369a1] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
					>
						Start Budgeting Effortlessly - It's Free!
					</Button>
				</div>

				<div className="mt-16 animate-float">
					<ArrowDown className="mx-auto text-budget-400 w-8 h-8" />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
