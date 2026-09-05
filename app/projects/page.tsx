import ProjectsPage from "@/components/pages/ProjectPage/ProjectPage";
import { siteMetadata } from "@/seo/metaData";
import { Metadata } from 'next';

export const metadata: Metadata = siteMetadata.projects;

export default function Projects() {
  return <ProjectsPage />
}
