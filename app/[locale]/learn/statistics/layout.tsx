import React from 'react';
import MySidebar, { MySidebarProps } from '../components/Sidebar/MySidebar';

const basePath = '/learn/statistics';
const sidebarProps = {
  brand: {
    to: basePath,
    title: 'Statistics',
  },
  items: [
    {
      type: 'menu',
      title: 'Bayesian (Year 1)',
      sections: [
        {
          to: `${basePath}/bayesian13/bayesian`,
          title: "Bayes' Theorem",
        },
      ]
    },
  ],
} as MySidebarProps;

const StatisticsLayout = (
  context: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
  }
) => {
  const { children } = context;
  return (
    <div className="w-100 h-100 d-flex">
      {/* <MySidebar {...sidebarProps} /> */}
      <div className="flex-grow-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}

export default StatisticsLayout;
