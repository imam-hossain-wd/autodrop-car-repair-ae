import ServiceAreaPage from '@/components/pages/ServiceAreaPage/ServiceAreaPage'
import { Metadata } from 'next';
import { siteMetadata } from '@/seo/metaData';

export const metadata: Metadata = siteMetadata.areaWeServe
export default function ServiceArea() {
    return <ServiceAreaPage />
}
