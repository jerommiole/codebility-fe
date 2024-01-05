import React from 'react';

type TextAlign = 'left' | 'center' | 'right';

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    CardColor?: string;
    Align?: TextAlign;
    link?: string;
    icon?: string;
    centerText?: string;
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    imageUrl,
    link,
    CardColor = 'black',
    Align = 'left',
    icon,
    centerText,
}) => {
    const cardStyle: React.CSSProperties = {
        backgroundColor:CardColor,
        textAlign: Align,
    };

    const imageClassName = `h-[25px]  mt-10 mb-4 rounded-md ${Align === 'center' ? 'mx-auto' : ''}`;

    return (
        <div className="p-6 xl:h-[240px] xl:w-[200px]   shadow-md" style={cardStyle}>
            <img src={imageUrl} alt={title} className={imageClassName} style={cardStyle} />
            <h2 className={`mb-2 text-sm font-semibold ${centerText ? 'text-center' : ''}`} style={cardStyle}>
                {title}
            </h2>
            <p className={`text-xs text-secondaryColor ${centerText ? 'text-center' : ''}`}>{description}</p>

            <button className='flex items-center justify-center gap-2 mt-5 text-xs duration-300 hover:translate-x-2 hover:font-semibold' style={{ color: '#31AFC4' }}>
                {link} <img src={icon} alt="" className='h-[8px]' />
            </button>
        </div>
    );
};

export default Card;
