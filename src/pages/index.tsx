import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/main.scss';
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { Banner } from "../entities/Banner/Banner";
import { CarouselSection } from "../entities/CarouselSection/CarouselSection";
import { InfoSection } from "../entities/InfoSection/InfoSection";
import { VideoSection } from "../entities/VideoSection/VideoSection";
import { Blockquote } from "../components/Blockquote/Blockquote";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <Banner />
      <CarouselSection />
      <InfoSection />
      <VideoSection />
      <div className="container">
        <Blockquote
          cite="“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.”"
          author="Mary Kay Ash"
        />
      </div>
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
