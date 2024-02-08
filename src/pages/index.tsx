import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/main.scss';
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { Banner } from "../entities/Banner/Banner";
import { CarouselSection } from "../entities/CarouselSection/CarouselSection";
import { InfoSection } from "../entities/InfoSection/InfoSection";
import { VideoSection } from "../entities/VideoSection/VideoSection";
import { ContentSection } from "../entities/ContentSection/ContentSection";
import { ContactUsSection } from "../entities/ContactUsSection/ContactUsSection";
import { HiddenInfoCard } from "../components/HiddenInfoCard/HiddenInfoCard";
import { ArticlesPreviewSection } from "../entities/ArticlesPreviewSection/ArticlesPreviewSection";
import { FeedbackCard } from "../components/FeedbackCard/FeedbackCard";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <Banner />
      <CarouselSection />
      <InfoSection />
      <VideoSection />
      <ContentSection />
      <ContactUsSection />
      <ArticlesPreviewSection />
      <div className="container">
        <FeedbackCard
          title="Paul"
          subtitle="Owner in Paul.com"
          description="Projects for many large domestic and foreign corporations, enterprises in many elds such as nance, banking, F&B, education, communication."
        />
      </div>
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
