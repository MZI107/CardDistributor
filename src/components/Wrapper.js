/** @format */

import React from 'react';
import '../assets/css/main.css';

export const CenterWrapper = ({ children, className = '' }) => (
    <div className={`d-flex align-items-center justify-content-center ${className}`}>{children}</div>
);

export const CardWrapper = ({ children, className = '' }) => (
    <div className={`card card-custom gutter-b m-0 ${className}`}>
        <div className="p-6">{children}</div>
    </div>
);

export const FormPanelWrapper = ({ children }) => (
    <div className={`card-custom gutter-b m-0 py-4 px-2`}>
        <div className="">{children}</div>
    </div>
);

export const FormWrapper = ({ children }) => <div className={``}>{children}</div>;