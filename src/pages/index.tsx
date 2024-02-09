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
import { ArticlesPreviewSection } from "../entities/ArticlesPreviewSection/ArticlesPreviewSection";
import { FeedbackSection } from "../entities/FeedbackSection/FeedbackSection";
import { FaqSection } from "../entities/FaqSection/FaqSection";

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
      <FeedbackSection />
      <FaqSection />
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
