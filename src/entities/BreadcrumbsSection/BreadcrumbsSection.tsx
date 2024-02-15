import React, { memo } from 'react';
import { Breadcrumbs } from 'components/Breadcrumbs/Breadcrumbs';

interface BreadcrumbsSectionProps {
  slug: string;
  category: string;
  title: string;
  categoryTitle: string;
}

export const BreadcrumbsSection = memo((props: BreadcrumbsSectionProps) => {
  const { slug, category, title, categoryTitle } = props;

  const items = [
    { to: '/', value: 'Home' },
    { to: `/${category}`, value: categoryTitle },
    { value: title },
  ]

  return (
    <div className="section">
      <div className="container">
        <Breadcrumbs items={items} />
      </div>
    </div>
  );
});