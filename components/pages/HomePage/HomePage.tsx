import { Hero } from "@/components/view/Hero/Hero";
import HowItWorks from "@/components/view/HowItWorks/HowItWorks";
import Extra from "@/components/view/WhoWeAre/Extra";
import { WhoWeAre } from "@/components/view/WhoWeAre/WhoWeAre";
import { WhyChooseUs } from "@/components/view/WhyChooseUs/WhyChooseUs";

export default function HomePage() {
    return (
        <div>
            <Hero />
            <Extra />
            <HowItWorks />
            <WhoWeAre />
            <WhyChooseUs />
        </div>
    )
}
