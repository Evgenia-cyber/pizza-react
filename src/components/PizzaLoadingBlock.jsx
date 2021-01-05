import React from 'react';
import ContentLoader from 'react-content-loader';

function PizzaLoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={420}
      viewBox="0 0 280 420"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="139" cy="120" r="120" />
      <rect x="0" y="300" rx="5" ry="5" width="280" height="60" />
      <rect x="0" y="374" rx="5" ry="5" width="80" height="30" />
      <rect x="130" y="370" rx="16" ry="16" width="150" height="35" />
      <rect x="0" y="259" rx="5" ry="5" width="280" height="24" />
    </ContentLoader>
  );
}

export default PizzaLoadingBlock;
