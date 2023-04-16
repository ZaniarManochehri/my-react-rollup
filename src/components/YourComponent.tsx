import React, { FC } from 'react';

export type YourComponentProps = {
    text: string;
}

export const YourComponent: FC<YourComponentProps> = ({ text }) => {
    return <div>{text}</div>;
};