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

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <Banner />
      <CarouselSection />
      <InfoSection />
      <VideoSection />
      <ContentSection />
      <ContactUsSection />
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
