import ServiceDetailPage from "@/components/pages/ServicePage/ServiceDetailPage";
import { services } from "@/data/services/services";
import { notFound } from "next/navigation";


export default async function ServiceDetail({
    params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services.find((s) => s?.slug === slug);
    if (!service) return notFound();


    return (
        <>
            {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      /> */}
            <ServiceDetailPage service={service} />
        </>
    );
}