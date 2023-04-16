import React, { FC } from 'react';

export interface YourComponentProps {
    text: string;
}

export const YourComponent: FC<YourComponentProps> = ({ text }) => {
    return <div>{text}</div>;
};