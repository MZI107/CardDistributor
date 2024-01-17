/** @format */

import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Modal, Spinner, ErrorAlert, SuccessAlert } from '.';

export const Boundary = props => {
    const { modal, error, success, onClose, loading, children, onClick } = props;
    const [open, setOpen] = useState(false);

    // modal
    useEffect(() => {
        if (!modal) return;
        if (error || success) setOpen(true);
    }, [error, success, modal]);

    // auto close alert
    useEffect(() => {
        if (!onClose) return;
        const interval = setTimeout(() => {
            setOpen(false)
            onClose();
        }, 2000);
        return () => clearTimeout(interval);
    }, [error, success, onClose]);

    if (loading) return <Spinner />;
    return (
        <>
            {modal ? (
                <Modal
                    title={error ? 'Error' : success ? 'Success' : ''}
                    show={open}
                    onToggle={() => {
                        onClose();
                        setOpen(!open);
                    }}
                    cancelButton={{ show: false }}
                    okButton={{
                        show: false,
                        label: 'Ok',
                        onClick: onClick,
                    }}>
                    {error || success}
                </Modal>
            ) : (
                <div className="text-center">
                    {error && <ErrorAlert error={error || 'Error'} />}
                    {success && <SuccessAlert success={success || 'Success'} />}
                </div>
            )}
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => {
                    // reset the state of your app so the error doesn't happen again
                    window.location.reload();
                }}>
                {children}
            </ErrorBoundary>
        </>
    );
};

const ErrorFallback = props => {
    // return <NoResult message="Something went wrong, Please try again." />;
    return <div>'Something went wrong, Please try again.'</div>;
};
