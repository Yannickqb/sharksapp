import React, { useState } from 'react';

const NewsItem = ({ imageUrl, title, subtitle, summary, date }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="collapse bg-base-200 p-5 m-5">
      <input type="checkbox" className="peer" checked={isOpen} onChange={toggleCollapse} /> 
      <div className="collapse-title text-xl font-bold text-primary-content peer-checked:text-secondary-content flex justify-between items-center">
        <div>
          <h2 className="text-2xl">{title}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <span className="text-sm font-medium text-gray-500">{date}</span>
      </div>
      <div className="collapse-content text-primary-content peer-checked:text-secondary-content"> 
        <div className="hero-content flex-col lg:flex-row">
          <img src={imageUrl} className="max-w-sm rounded-lg shadow-2xl" alt="News" />
          <div>
            <p className="py-6">{summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
