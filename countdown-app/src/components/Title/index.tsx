import React from "react";
import './Title.css';

interface TitleProps {
    title: string;
}

const Title = ({ title }: TitleProps) => {
    return <h1 className="title">{title}</h1>
}

export { Title };