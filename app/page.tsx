import AppDownloadSection from "@/components/AppDownloadSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NewsletterSection from "@/components/NewsletterSection";
import OutcomeSection from "@/components/OutcomeSection";
import PainSection from "@/components/PainSection";
import ProductSection from "@/components/ProductSection";
import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen">
			<HeroSection />
			<PainSection />
			<OutcomeSection />
			<ProductSection />
			<AppDownloadSection />
			{/* <NewsletterSection /> */}
			<Footer />
		</div>);
}
