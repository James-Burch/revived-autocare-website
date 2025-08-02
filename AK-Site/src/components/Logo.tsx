// import React from 'react';

// interface LogoProps {
//   variant?: 'full' | 'compact' | 'icon' | 'white';
//   size?: 'sm' | 'md' | 'lg' | 'xl';
//   className?: string;
//   onClick?: () => void;
// }

// const Logo: React.FC<LogoProps> = ({ 
//   variant = 'full', 
//   size = 'md', 
//   className = '',
//   onClick 
// }) => {
//   const sizeClasses = {
//     sm: 'logo--sm',
//     md: 'logo--md', 
//     lg: 'logo--lg',
//     xl: 'logo--xl'
//   };

//   const variantClasses = {
//     full: 'logo--full',
//     compact: 'logo--compact',
//     icon: 'logo--icon',
//     white: 'logo--white'
//   };

//   const logoClass = `logo ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim();

//   // SVG Logo with professional mortgage theme
//   const renderSVGLogo = () => {
//     const isWhite = variant === 'white';
//     const primaryColor = isWhite ? '#FFFFFF' : '#0ABAB5';
//     const accentColor = isWhite ? '#E0F7F6' : '#006B66';
//     const textColor = isWhite ? '#FFFFFF' : '#18181B';

//     return (
//       <svg 
//         viewBox="0 0 200 60" 
//         className="logo-svg"
//         role="img"
//         aria-labelledby="logo-title"
//       >
//         <title id="logo-title">Noble Mortgages - Expert Mortgage Advisory</title>

//         {/* House Icon */}
//         <g className="logo-icon">
//           {/* House base */}
//           <path 
//             d="M8 32 L28 16 L48 32 L48 50 L8 50 Z" 
//             fill={primaryColor}
//             className="logo-house-base"
//           />
//           {/* House roof */}
//           <path 
//             d="M4 32 L28 12 L52 32 L48 36 L28 20 L8 36 Z" 
//             fill={accentColor}
//             className="logo-house-roof"
//           />
//           {/* Door */}
//           <rect 
//             x="22" y="38" width="12" height="12" 
//             fill={isWhite ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.9)'}
//             className="logo-door"
//           />
//           {/* Windows */}
//           <rect 
//             x="14" y="28" width="6" height="6" 
//             fill={isWhite ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.9)'}
//             className="logo-window"
//           />
//           <rect 
//             x="36" y="28" width="6" height="6" 
//             fill={isWhite ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.9)'}
//             className="logo-window"
//           />
//         </g>

//         {/* Company Name - Full variant */}
//         {(variant === 'full' || variant === 'white') && (
//           <g className="logo-text">
//             <text 
//               x="64" 
//               y="28" 
//               fill={textColor}
//               fontSize="18" 
//               fontWeight="700" 
//               fontFamily="Inter, sans-serif"
//               className="logo-company-name"
//             >
//               NOBLE
//             </text>
//             <text 
//               x="64" 
//               y="44" 
//               fill={textColor}
//               fontSize="14" 
//               fontWeight="500" 
//               fontFamily="Inter, sans-serif"
//               className="logo-company-subtitle"
//             >
//               MORTGAGES
//             </text>
//             {/* Tagline for larger sizes */}
//             <text 
//               x="64" 
//               y="54" 
//               fill={isWhite ? 'rgba(255,255,255,0.8)' : '#3F3F46'}
//               fontSize="8" 
//               fontWeight="400" 
//               fontFamily="Inter, sans-serif"
//               className="logo-tagline"
//             >
//               Expert Advisory Services
//             </text>
//           </g>
//         )}

//         {/* Company Name - Compact variant */}
//         {variant === 'compact' && (
//           <g className="logo-text">
//             <text 
//               x="64" 
//               y="32" 
//               fill={textColor}
//               fontSize="16" 
//               fontWeight="700" 
//               fontFamily="Inter, sans-serif"
//               className="logo-company-name"
//             >
//               NOBLE MORTGAGES
//             </text>
//             <text 
//               x="64" 
//               y="44" 
//               fill={isWhite ? 'rgba(255,255,255,0.8)' : '#3F3F46'}
//               fontSize="10" 
//               fontWeight="400" 
//               fontFamily="Inter, sans-serif"
//               className="logo-tagline"
//             >
//               Expert Advisory Services
//             </text>
//           </g>
//         )}
//       </svg>
//     );
//   };

//   const handleClick = () => {
//     if (onClick) {
//       onClick();
//     }
//   };

//   const logoElement = (
//     <div 
//       className={logoClass}
//       onClick={handleClick}
//       role={onClick ? 'button' : undefined}
//       tabIndex={onClick ? 0 : undefined}
//       onKeyDown={onClick ? (e) => {
//         if (e.key === 'Enter' || e.key === ' ') {
//           e.preventDefault();
//           handleClick();
//         }
//       } : undefined}
//     >
//       {renderSVGLogo()}
//     </div>
//   );

//   return logoElement;
// };

// export default Logo;

import React from 'react';

interface LogoProps {
    variant?: 'full' | 'compact' | 'icon' | 'white';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({
    variant = 'full',
    size = 'md',
    className = '',
    onClick
}) => {
    const sizeClasses = {
        sm: 'logo--sm',
        md: 'logo--md',
        lg: 'logo--lg',
        xl: 'logo--xl'
    };

    const variantClasses = {
        full: 'logo--full',
        compact: 'logo--compact',
        icon: 'logo--icon',
        white: 'logo--white'
    };

    const logoClass = `logo ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim();

    // SVG Logo with professional mortgage theme
    const renderSVGLogo = () => {
        const isWhite = variant === 'white';
        const primaryColor = isWhite ? '#FFFFFF' : '#0ABAB5';
        const accentColor = isWhite ? '#E0F7F6' : '#006B66';
        const textColor = isWhite ? '#FFFFFF' : '#18181B';

        return (
            <svg
                viewBox="0 0 220 70"
                className="logo-svg"
                role="img"
                aria-labelledby="logo-title"
            >
                <title id="logo-title">Noble Mortgages - Expert Mortgage Advisory</title>

                {/* House Icon - Slightly larger for better mobile visibility */}
                <g className="logo-icon">
                    {/* House base */}
                    <path
                        d="M8 35 L30 16 L52 35 L52 55 L8 55 Z"
                        fill={primaryColor}
                        className="logo-house-base"
                    />
                    {/* House roof */}
                    <path
                        d="M4 35 L30 10 L56 35 L52 39 L30 18 L8 39 Z"
                        fill={accentColor}
                        className="logo-house-roof"
                    />
                    {/* Door */}
                    <rect
                        x="24" y="42" width="12" height="13"
                        fill={isWhite ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.9)'}
                        className="logo-door"
                    />
                    {/* Windows */}
                    <rect
                        x="15" y="30" width="7" height="7"
                        fill={isWhite ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.9)'}
                        className="logo-window"
                    />
                    <rect
                        x="38" y="30" width="7" height="7"
                        fill={isWhite ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.9)'}
                        className="logo-window"
                    />
                </g>

                {/* Company Name - Full variant */}
                {(variant === 'full' || variant === 'white') && (
                    <g className="logo-text">
                        <text
                            x="68"
                            y="32"
                            fill={textColor}
                            fontSize="22"
                            fontWeight="700"
                            fontFamily="Inter, sans-serif"
                            className="logo-company-name"
                        >
                            NOBLE
                        </text>
                        <text
                            x="68"
                            y="50"
                            fill={textColor}
                            fontSize="16"
                            fontWeight="500"
                            fontFamily="Inter, sans-serif"
                            className="logo-company-subtitle"
                        >
                            MORTGAGES
                        </text>
                        {/* Tagline for larger sizes */}
                        <text
                            x="68"
                            y="62"
                            fill={isWhite ? 'rgba(255,255,255,0.8)' : '#3F3F46'}
                            fontSize="10"
                            fontWeight="400"
                            fontFamily="Inter, sans-serif"
                            className="logo-tagline"
                        >
                            Expert Advisory Services
                        </text>
                    </g>
                )}

                {/* Company Name - Compact variant */}
                {variant === 'compact' && (
                    <g className="logo-text">
                        <text
                            x="68"
                            y="36"
                            fill={textColor}
                            fontSize="18"
                            fontWeight="700"
                            fontFamily="Inter, sans-serif"
                            className="logo-company-name"
                        >
                            NOBLE MORTGAGES
                        </text>
                        <text
                            x="68"
                            y="50"
                            fill={isWhite ? 'rgba(255,255,255,0.8)' : '#3F3F46'}
                            fontSize="12"
                            fontWeight="400"
                            fontFamily="Inter, sans-serif"
                            className="logo-tagline"
                        >
                            Expert Advisory Services
                        </text>
                    </g>
                )}
            </svg>
        );
    };

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            handleClick();
        }
    };

    const logoElement = (
        <div
            className={logoClass}
            onClick={handleClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={onClick ? handleKeyDown : undefined}
            style={{
                cursor: onClick ? 'pointer' : 'default',
                userSelect: 'none'
            }}
        >
            {renderSVGLogo()}
        </div>
    );

    return logoElement;
};

export default Logo;