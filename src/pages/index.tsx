import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/main.scss';
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { Banner } from "../entities/Banner/Banner";
import { CarouselSection } from "../entities/CarouselSection/CarouselSection";
import { InfoSection } from "../entities/InfoSection/InfoSection";
import { VideoSection } from "../entities/VideoSection/VideoSection";
import { ContentSection } from "../entities/ContentSection/ContentSection";
import { Input } from "../components/Input/Input";
import { Form } from "react-final-form";
import { Button } from "../components/Button/Button";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <Banner />
      <CarouselSection />
      <InfoSection />
      <VideoSection />
      <ContentSection />
      <div className="container">
        <Form
          onSubmit={() => { console.log('submit') }}
          render={({ handleSubmit }) => (
            <form
              onSubmit={handleSubmit}
            >
              <Input
                type="email"
                name="email"
                placeholder="Enter your mail"
              />
              <Button
                buttonType="submit"
                size="large"
              >
                Submit
              </Button>
            </form>
          )}
        />
      </div>
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
