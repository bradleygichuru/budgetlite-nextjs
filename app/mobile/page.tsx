'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CheckCircle, LinkIcon, Brain, BarChart3, ArrowDown } from "lucide-react";
import { toast } from "sonner";

const Mobile = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (email) {
			toast("Thank you for subscribing!");
			setEmail("");
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-budget-50 via-white to-budget-100">
			{/* Hero Section */}
			<section className="px-4 py-12 text-center">
				<h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
					Honestly, manually tracking{" "}
					<span className="text-budget-600">every single receipt</span>{" "}
					is a bit too much for me.
				</h1>

				<p className="text-lg text-gray-600 mb-6">
					BudgetLite is the effortless budgeting solution for busy individuals and families.
				</p>

				<div className="space-y-3 mb-8">
					<div className="flex items-start space-x-3">
						<div className="w-2 h-2 bg-budget-500 rounded-full mt-2 flex-shrink-0"></div>
						<p className="text-gray-700 text-left">Automatic bank sync - no data entry</p>
					</div>
					<div className="flex items-start space-x-3">
						<div className="w-2 h-2 bg-budget-500 rounded-full mt-2 flex-shrink-0"></div>
						<p className="text-gray-700 text-left">Smart auto-categorization</p>
					</div>
					<div className="flex items-start space-x-3">
						<div className="w-2 h-2 bg-budget-500 rounded-full mt-2 flex-shrink-0"></div>
						<p className="text-gray-700 text-left">Simple reports, no spreadsheets</p>
					</div>
				</div>

				<Button
					size="lg"
					className="w-full bg-budget-600 hover:bg-budget-700 text-white py-4 text-lg font-semibold rounded-lg mb-6"
				>
					Start Budgeting Effortlessly - It's Free!
				</Button>

				<ArrowDown className="mx-auto text-budget-400 w-6 h-6 animate-float" />
			</section>

			{/* Pain Points */}
			<section className="px-4 py-8 bg-gray-50">
				<h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
					Feel like you don't have time to budget?
				</h2>
				<p className="text-center text-red-600 font-semibold mb-6">
					Or just hate the manual grind?
				</p>

				<div className="space-y-4 mb-6">
					<Card className="border-2 border-red-100">
						<CardContent className="p-4 text-center">
							<div className="text-2xl mb-2">⏰</div>
							<p className="text-gray-700 italic text-sm">
								"Compiling my spending took quite a while, if I have to do that constantly I might end up just not budgeting."
							</p>
						</CardContent>
					</Card>

					<Card className="border-2 border-red-100">
						<CardContent className="p-4 text-center">
							<div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
							<p className="text-gray-700 italic text-sm">
								"I've got a full time job and a family so figuring out categories is just something I don't have time to do."
							</p>
						</CardContent>
					</Card>
				</div>

				<div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
					<p className="text-sm text-gray-700">
						<strong className="text-red-600">You might believe</strong> budgeting has to be time-consuming.
						<strong className="text-gray-900"> It doesn't.</strong>
					</p>
				</div>
			</section>

			{/* Solution */}
			<section className="px-4 py-8 bg-gradient-to-br from-green-50 to-budget-50">
				<h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
					Imagine Budgeting That{" "}
					<span className="text-green-600">Just Works</span>
				</h2>

				<div className="space-y-4 mb-6">
					<Card className="border-2 border-green-100">
						<CardContent className="p-4 text-center">
							<CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
							<h3 className="font-bold text-gray-900 mb-2">Effortless Clarity</h3>
							<p className="text-gray-700 text-sm">All your spending, automatically synced and organized</p>
						</CardContent>
					</Card>

					<Card className="border-2 border-green-100">
						<CardContent className="p-4 text-center">
							<BarChart3 className="w-8 h-8 text-budget-500 mx-auto mb-2" />
							<h3 className="font-bold text-gray-900 mb-2">Instant Insights</h3>
							<p className="text-gray-700 text-sm">See exactly where your money goes at a glance</p>
						</CardContent>
					</Card>
				</div>

				<div className="bg-gradient-to-r from-green-500 to-budget-600 rounded-lg p-4 text-white text-center">
					<p className="text-sm">
						<strong>What if</strong> budgeting wasn't about manual input, but intelligent automation?
						Welcome to the new way.
					</p>
				</div>
			</section>

			{/* Product Steps */}
			<section className="px-4 py-8 bg-white">
				<h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
					Introducing <span className="text-budget-600">BudgetLite</span>
				</h2>
				<p className="text-center text-gray-600 mb-6 text-sm">
					The Zero-Friction Essential Budgeter
				</p>

				<div className="space-y-4 mb-8">
					<Card className="border-2 border-budget-100">
						<CardContent className="p-4">
							<div className="flex items-start space-x-3">
								<div className="w-8 h-8 bg-budget-100 rounded-full flex items-center justify-center flex-shrink-0">
									<span className="text-sm font-bold text-budget-600">1</span>
								</div>
								<div>
									<h3 className="font-bold text-gray-900 mb-1">Connect Your Accounts</h3>
									<p className="text-gray-700 text-sm">Securely link all your bank accounts in minutes</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="border-2 border-budget-100">
						<CardContent className="p-4">
							<div className="flex items-start space-x-3">
								<div className="w-8 h-8 bg-budget-100 rounded-full flex items-center justify-center flex-shrink-0">
									<span className="text-sm font-bold text-budget-600">2</span>
								</div>
								<div>
									<h3 className="font-bold text-gray-900 mb-1">Auto-Categorize</h3>
									<p className="text-gray-700 text-sm">Smart AI automatically assigns transactions</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="border-2 border-budget-100">
						<CardContent className="p-4">
							<div className="flex items-start space-x-3">
								<div className="w-8 h-8 bg-budget-100 rounded-full flex items-center justify-center flex-shrink-0">
									<span className="text-sm font-bold text-budget-600">3</span>
								</div>
								<div>
									<h3 className="font-bold text-gray-900 mb-1">Get Simple Insights</h3>
									<p className="text-gray-700 text-sm">View easy reports anytime, anywhere</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				<Button
					size="lg"
					className="w-full bg-budget-600 hover:bg-budget-700 text-white py-4 text-lg font-semibold rounded-lg"
				>
					Get BudgetLite for Free Today!
				</Button>
			</section>

			{/* Newsletter */}
			<section className="px-4 py-8 bg-gradient-to-br from-budget-600 to-budget-700">
				<div className="text-center text-white">
					<h2 className="text-xl font-bold mb-2">Stay Updated</h2>
					<p className="text-budget-100 mb-6 text-sm">
						Get tips and be first to know about new features
					</p>

					<form onSubmit={handleSubmit} className="space-y-3">
						<Input
							type="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full px-4 py-3 bg-white border-0"
							required
						/>
						<Button
							type="submit"
							className="w-full bg-white text-budget-600 hover:bg-budget-50 py-3 font-semibold"
						>
							Subscribe
						</Button>
					</form>

					<p className="text-budget-200 text-xs mt-3">
						No spam, ever. Unsubscribe at any time.
					</p>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-6 px-4">
				<div className="text-center">
					<h3 className="text-lg font-bold text-budget-400 mb-2">BudgetLite</h3>
					<p className="text-gray-400 text-sm mb-4">
						The Zero-Friction Essential Budgeter
					</p>
					<p className="text-gray-500 text-xs">
						© 2024 BudgetLite. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Mobile;
