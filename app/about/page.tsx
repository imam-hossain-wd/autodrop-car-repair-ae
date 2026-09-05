import AboutPage from '@/components/pages/AboutPage/AboutPage'
import { siteMetadata } from '@/seo/metaData';
import { Metadata } from 'next';


export const metadata: Metadata = siteMetadata.about;
export default function About() {
  return <AboutPage />
}
