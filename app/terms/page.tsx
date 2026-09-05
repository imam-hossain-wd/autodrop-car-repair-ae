import TermsPage from '@/components/pages/TermsPage/TermsPage'
import { siteMetadata } from '@/seo/metaData'
import { Metadata } from 'next';


export const metadata: Metadata = siteMetadata.terms;
export default function page() {
  return <TermsPage />
}
