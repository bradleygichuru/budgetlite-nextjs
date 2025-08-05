
const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-12 px-4">
			<div className="max-w-6xl mx-auto">
				<div className="text-center">
					<h3 className="text-2xl font-bold text-budget-400 mb-4">BudgetLite</h3>
					<p className="text-gray-400 mb-6">
						The Zero-Friction Essential Budgeter
					</p>

					<div className="border-t border-gray-700 pt-6">
						<p className="text-gray-500 text-sm">
							© {new Date().getFullYear()} BudgetLite. All rights reserved. | Privacy Policy | Terms of Service
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
