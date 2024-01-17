/** @format */

import React from 'react';
import { Button as DefaultButton } from 'react-bootstrap';

export const TransparentButton = props => {
    const { children, onClick } = props;
    return (
        <DefaultButton
            onClick={onClick}
            className="border-0 text-hover-primary bg-transparent bg-hover-light-primary p-3">
            {children}
        </DefaultButton>
    );
};

export const Button = props => {
    const { label, type, variant, loading, disabled, display = true, onClick, className = '' } = props;
    return display ? (
        <DefaultButton
            type={type || 'button'}
            variant={variant}
            onClick={onClick}
            disabled={loading || disabled}
            className={className}>
            <span>{label}</span>
            {loading && <span className="ml-3 mr-4 spinner spinner-white"></span>}
        </DefaultButton>
    ) : (
        ''
    );
};