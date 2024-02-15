import { IGatsbyImageData } from "gatsby-plugin-image";

export interface ICard {
  frontmatter: {
    title: string;
    slug: string;
    date?: string;
    banner?: IGatsbyImageData;
    category?: string;
    categoryTitle?: string;
    description?: string;
  }
}