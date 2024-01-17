/** @format */

import React from 'react';

export const ErrorAlert = ({ error }) => (
    <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
        <div className="alert-text font-weight-bold">{error}</div>
    </div>
);

export const SuccessAlert = ({ success }) => (
    <div className="mb-10 alert alert-custom alert-light-success alert-dismissible">
        <div className="alert-text font-weight-bold">{success}</div>
    </div>
);

export const InfoAlert = ({ info }) => (
    <div className="mb-10 alert alert-custom alert-light-info alert-dismissible">
        <div className="alert-text font-weight-bold">{info}</div>
    </div>
);
