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

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <Banner />
      <CarouselSection />
      <InfoSection />
      <VideoSection />
      <ContentSection />
      <ContactUsSection />
      <div className="container">
        <HiddenInfoCard
          to="route"
          title="Dubai"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit."
          linkName="See project"
          small
          date="Jule 03, 2022"
          dark
        />
      </div>
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
