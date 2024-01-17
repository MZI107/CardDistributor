/** @format */

import React from 'react';

import { Modal as DefaultModal } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import { Button } from '.';

export const Modal = props => {
    const {
        size = 'lg',
        title,
        show,
        dialogClassName,
        onToggle,
        cancelButton = {
            label: 'Cancel',
            show: true,
            disabled: false,
            onClick: () => {},
        },
        okButton = { label: 'Ok', show: true, disabled: false, onClick: () => {} },
        children,
        noPadding,
        backdrop,
        keyboard,
        closeButton,
    } = props;

    const onClickProxy = cb => {
        onToggle && onToggle(false);
        cb && cb();
    };

    return (
        <DefaultModal
            backdrop={backdrop}
            keyboard={keyboard}
            size={size}
            dialogClassName={dialogClassName}
            show={show}
            onHide={onToggle}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <DefaultModal.Header closeButton={closeButton}>
                <DefaultModal.Title id="contained-modal-title-vcenter">{title}</DefaultModal.Title>
            </DefaultModal.Header>
            <DefaultModal.Body
                style={
                    noPadding
                        ? {
                              padding: 0,
                          }
                        : {}
                }>
                {children}
            </DefaultModal.Body>
            {(cancelButton.show || okButton.show) && (
                <DefaultModal.Footer>
                    {cancelButton.show && (
                        <Button
                            label={cancelButton.label || 'Cancel'}
                            variant="secondary"
                            onClick={() => onClickProxy(cancelButton.onClick)}
                            className="floating-button"
                            disabled={cancelButton.disabled}
                        />
                    )}
                    {okButton.show && (
                        <Button
                            label={okButton.label || 'Ok'}
                            className="floating-button"
                            onClick={() => onClickProxy(okButton.onClick)}
                            disabled={okButton.disabled}
                        />
                    )}
                </DefaultModal.Footer>
            )}
        </DefaultModal>
    );
};

export const ModalWithCloseButton = props => {
    const {
        size = 'lg',
        title,
        show,
        dialogClassName,
        onToggle,
        cancelButton = {
            label: 'Cancel',
            show: true,
            disabled: false,
            onClick: () => {},
        },
        okButton = { label: 'Ok', show: true, disabled: false, onClick: () => {} },
        children,
        noPadding,
        backdrop,
        keyboard,
        closeButton,
    } = props;

    const onClickProxy = cb => {
        onToggle && onToggle(false);
        cb && cb();
    };

    return (
        <DefaultModal
            backdrop={backdrop}
            keyboard={keyboard}
            size={size}
            dialogClassName={dialogClassName}
            show={show}
            onHide={onToggle}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <DefaultModal.Header closeButton={closeButton}>
                <DefaultModal.Title id="contained-modal-title-vcenter">{title}</DefaultModal.Title>
                <CloseButton onClick={() => onClickProxy(okButton.onClick)} />
            </DefaultModal.Header>
            <DefaultModal.Body
                style={
                    noPadding
                        ? {
                              padding: 0,
                          }
                        : {}
                }>
                {children}
            </DefaultModal.Body>
            {(cancelButton.show || okButton.show) && (
                <DefaultModal.Footer>
                    {cancelButton.show && (
                        <Button
                            label={cancelButton.label || 'Cancel'}
                            variant="secondary"
                            onClick={() => onClickProxy(cancelButton.onClick)}
                            className="floating-button"
                            disabled={cancelButton.disabled}
                        />
                    )}
                    {okButton.show && (
                        <Button
                            label={okButton.label || 'Ok'}
                            className="floating-button"
                            onClick={() => onClickProxy(okButton.onClick)}
                            disabled={okButton.disabled}
                        />
                    )}
                </DefaultModal.Footer>
            )}
        </DefaultModal>
    );
};

export const ModalFooter = DefaultModal.Footer;
