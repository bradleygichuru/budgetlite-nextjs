'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const NewsletterSection = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (email) {
			toast("Thank you for subscribing to our newsletter!");
			setEmail("");
		}
	};

	return (
		<section className="py-16 px-4 bg-gradient-to-br from-budget-600 to-budget-700">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
					Stay Updated with BudgetLite
				</h2>
				<p className="text-xl text-budget-100 mb-8 max-w-2xl mx-auto">
					Get tips, insights, and be the first to know about new features that make budgeting even easier.
				</p>

				<form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
					<Input
						type="email"
						placeholder="Enter your email address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="flex-1 px-4 py-3 text-lg bg-white border-0 focus:ring-2 focus:ring-budget-300"
						required
					/>
					<Button
						type="submit"
						className="bg-white text-budget-600 hover:bg-budget-50 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
					>
						Subscribe
					</Button>
				</form>

				<p className="text-budget-200 text-sm mt-4">
					No spam, ever. Unsubscribe at any time.
				</p>
			</div>
		</section>
	);
};

export default NewsletterSection;
