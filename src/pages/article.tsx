import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/main.scss';
import { MainLayout } from "layouts/MainLayout/MainLayout";
import { ArticlesBanner } from "entities/ArticlesBanner/ArticlesBanner";
import { Content } from "components/Content/Content";
import { ContactUsSection } from "entities/Contact/ContactUsSection/ContactUsSection";
import { ArticlesPreviewSection } from "entities/ArticlesPreviewSection/ArticlesPreviewSection";
import { BreadcrumbsSection } from "entities/BreadcrumbsSection/BreadcrumbsSection";

const BlogPage: React.FC<PageProps> = () => {
  

  return (
    <MainLayout>
      <ArticlesBanner />
      <BreadcrumbsSection />
      <Content
        content="<p>This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism, because it is part of the threat-protection system. In other words, what keeps us safe can go too far, and keep us too safe. In fact it can trigger self-censoring.</p><p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all:</p><p>This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism, because it is part of the threat-protection system. In other words, Wwhat keeps us safe can go too far, and keep us too safe. In fact it can trigger self-censoring.</p><p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all:</p><img src='https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='dubai'><h4>Methods for Everyone</h4><p>Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.</p><p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.</p><blockquote><p>Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. emotional sensation of stress from our firs</p><em>John doe</em></blockquote><img src='https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='dubai-2'><dl><dt>20</dt><dd>YEARS<br/>WORKING</dd><dt>7</dt><dd>TALANTED<br/>MANAGERS</dd><dt>100</dt><dd>COMPLITLY<br/>PROJECTS</dd></dl><h4>Challenge</h4><p>To and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.</p><h5>Everything along the way</h5><p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.</p><hr /><ul><li>Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken.</li><li>Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.</li><li>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule.</li><li>We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.</li></ul>"
      />
      <ContactUsSection />
      <ArticlesPreviewSection />
    </MainLayout>
  )
}

export default BlogPage

export const Head: HeadFC = () => <title>Article</title>