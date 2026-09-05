import PrivacyPolicyPage from '@/components/pages/PrivacyPage/PrivacyPage'
import { siteMetadata } from '@/seo/metaData';
import { Metadata } from 'next';



export const metadata: Metadata = siteMetadata.privacy;
export default function page() {
  return <PrivacyPolicyPage />
}
