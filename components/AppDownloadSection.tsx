'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Apple, Smartphone, Play } from "lucide-react";

const AppDownloadSection = () => {
	return (
		<section className="py-16 px-4 bg-background">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl font-bold text-foreground mb-4">
					Download BudgetLite
				</h2>
				<p className="text-lg text-muted-foreground mb-12">
					Take your budgeting on the go with our mobile apps
				</p>

				<div className="grid md:grid-cols-3 gap-6">
					{/* Apple App Store */}
					<Card className="border-2 border-border">
						<CardContent className="p-6 text-center">
							<Apple className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
							<h3 className="text-xl font-semibold text-foreground mb-2">
								App Store
							</h3>
							<p className="text-muted-foreground mb-4">iOS devices</p>
							<Button
								disabled
								variant="outline"
								className="w-full"
							>
								Coming Soon
							</Button>
						</CardContent>
					</Card>

					{/* Android Download */}
					<Card className="border-2 border-primary">
						<CardContent className="p-6 text-center">
							<Smartphone className="w-16 h-16 text-primary mx-auto mb-4" />
							<h3 className="text-xl font-semibold text-foreground mb-2">
								Android APK
							</h3>
							<p className="text-muted-foreground mb-4">Direct download</p>
							<Button
								className="w-full"
								onClick={() => window.open('#', '_blank')}
							>
								Download APK
							</Button>
						</CardContent>
					</Card>

					{/* Google Play Store */}
					<Card className="border-2 border-border">
						<CardContent className="p-6 text-center">
							<Play className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
							<h3 className="text-xl font-semibold text-foreground mb-2">
								Play Store
							</h3>
							<p className="text-muted-foreground mb-4">Android devices</p>
							<Button
								disabled
								variant="outline"
								className="w-full"
							>
								Coming Soon
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default AppDownloadSection;
