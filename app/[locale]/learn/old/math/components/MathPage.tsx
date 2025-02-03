import React from 'react'
import MySidebar, { MySidebarProps } from '../../Sidebar/MySidebar';
import { Outlet } from 'react-router-dom';

const basePath = '/learn/math';
const sidebarProps = {
  brand: {
    to: `${basePath}`,
    title: 'Math',
  },
  items: [
    {
      type: 'menu',
      title: 'Grade 9',
      sections: [
        {
          to: `${basePath}/grade09/trigonometry`,
          title: "Trigonometry (Grade 9)",
        },
      ]
    },
  ],
} as MySidebarProps;

const MathPage = () => {
  return (
    <div className="w-100 h-100 d-flex">
      <div className="flex-grow-1 overflow-auto">
        <Outlet />
      </div>
      <MySidebar {...sidebarProps} />
    </div>
  );
}

export default MathPage