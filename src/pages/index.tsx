import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/main.scss';
import { Button } from "../components/Button/Button";
import { MainLayout } from "../layouts/MainLayout/MainLayout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <Button>
        Click
      </Button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sed voluptas veritatis sint vero unde dolor nesciunt, repellendus obcaecati repudiandae hic aut, pariatur repellat facere dicta saepe. Illum, aperiam consectetur.</p>
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
