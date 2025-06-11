import React from 'react';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  size = 'medium',
  text = 'Loading...',
  className = ""
}) => {
  return (
    <div className={`loading loading--${size} ${className}`}>
      <div className="loading-spinner"></div>
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
};

export default Loading;
