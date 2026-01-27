
import React from 'react';
import { FocusArea } from '../types';

interface GridListProps {
  items: FocusArea[];
}

const GridList: React.FC<GridListProps> = ({ items }) => {
  return (
    <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
      {items.map((item, index) => (
        <div key={index} className="group">
          <div className="mb-4 text-neutral-300 text-sm font-mono">
            {String(index + 1).padStart(2, '0')}
          </div>
          <h3 className="text-2xl font-bold mb-4 group-hover:underline transition-all">
            {item.title}
          </h3>
          <p className="text-neutral-600 leading-relaxed text-sm">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GridList;
