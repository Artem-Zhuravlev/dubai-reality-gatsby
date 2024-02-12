import React, { memo } from 'react';
import { Breadcrumbs } from 'components/Breadcrumbs/Breadcrumbs';

interface BreadcrumbsSectionProps {
  className?: string
}

export const BreadcrumbsSection = memo((props: BreadcrumbsSectionProps) => {
  const items = [
    { to: '/', value: 'Home' },
    { to: '/category', value: 'Category' },
    { value: 'Apartments in Dubai' },
  ]

  return (
    <div className="section">
      <div className="container">
        <Breadcrumbs items={items} />
      </div>
    </div>
  );
});