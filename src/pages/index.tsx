import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/main.scss';
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { Banner } from "../entities/Banner/Banner";
import { CarouselSection } from "../entities/CarouselSection/CarouselSection";
import { InfoSection } from "../entities/InfoSection/InfoSection";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <Banner />
      <CarouselSection />
      <InfoSection />
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
