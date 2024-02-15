import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import 'styles/main.scss';
import { MainLayout } from '../layouts/MainLayout/MainLayout';
import { ArticlesBanner } from '../entities/Articles';
import { CategoriesSection } from '../entities/CategoriesSection/CategoriesSection';
import { ContactUsSection } from '../entities/Contact';
import { Content } from '../components/Content/Content';


const ContactPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <ArticlesBanner
        title="Apartments in Dubai"
      />
      <CategoriesSection title="Best Offers" />
      <ContactUsSection />
      <Content content={"<h2 class='h1'>Apartments</h2><p>To and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.</p><h4>Everything along the way</h4><p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.</p>"} />
    </MainLayout>
  )
}

export default ContactPage

export const Head: HeadFC = () => <title>Contacts</title>
