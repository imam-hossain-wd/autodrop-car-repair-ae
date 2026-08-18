import { FAQ } from "@/components/view/FAQ/FAQ";
import { Hero } from "@/components/view/Hero/Hero";
import HowItWorks from "@/components/view/HowItWorks/HowItWorks";
import { ServiceMap } from "@/components/view/ServiceMap/ServiceMap";
import Extra from "@/components/view/WhoWeAre/Extra";
import { WhoWeAre } from "@/components/view/WhoWeAre/WhoWeAre";
import { WhyChooseUs } from "@/components/view/WhyChooseUs/WhyChooseUs";

export default function HomePage() {
    return (
        <div>
            <Hero />
            {/* <Extra /> */}
            <HowItWorks />
            <WhoWeAre />
            <WhyChooseUs />
            <ServiceMap />
            <FAQ />
        </div>
    )
}
