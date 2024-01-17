/** @format */

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import clsx from 'clsx';
import 'draft-js/dist/Draft.css';
import '../assets/css/autoSuggest.css';

export const FormField = props => {
    const {
        name,
        label,
        mandatory,
        description,
        error,
        children,
        noTopPadding,
        bottomMargin,
        inline = false,
        ...rest
    } = props;

    return (
        <Form.Group
            {...rest}
            style={{
                marginBottom: bottomMargin || '1.75rem',
            }}
            className={`${props.className} row`}>
            {label ? (
                <>
                    <Form.Label
                        className={clsx('col-xl-3 col-lg-3 col-form-label d-block d-lg-none', {
                            pt0: noTopPadding,
                            'font-weight-bolder': mandatory,
                        })}>
                        {label}
                        {mandatory && (
                            <span variant="danger" className="text-danger mh-2">
                                *
                            </span>
                        )}
                    </Form.Label>
                    <Form.Label
                        className={clsx('col-xl-3 col-lg-3 col-form-label d-none d-lg-block textalign-right', {
                            pt0: noTopPadding,
                            'font-weight-bolder': mandatory,
                        })}>
                        {label}
                        {mandatory && (
                            <span variant="danger" className="text-danger mh-2">
                                *
                            </span>
                        )}
                    </Form.Label>
                    <div className="col-lg-9 col-xl-9">
                        {children}
                        {error && <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>}
                        {description && <div className="mt-2 text text-muted">{description}</div>}
                    </div>
                </>
            ) : (
                <>
                    {children}
                    {error && <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>}
                    {description && <div className="mt-2 text text-muted">{description}</div>}
                </>
            )}
        </Form.Group>
    );
};

const InputField = props => {
    const { password, error, className = '' } = props;

    return (
        <Form.Control
            disabled={props.disabled}
            type={password ? 'password' : 'text'}
            isInvalid={error}
            className={clsx(className, {
                'form-control form-control-solid form-control-lg h-auto': true,
            })}
            {...props}
        />
    );
};

const InputFieldTextArea = props => {
    const { password, error, rows, className = '' } = props;

    return (
        <Form.Control
            as="textarea"
            rows={rows || 3}
            isInvalid={error}
            className={clsx(className, {
                'form-control form-control-solid h-auto': true,
            })}
            {...props}
        />
    );
};

const InputFieldWrapper = props => {
    const { width, children } = props;

    if (!width) return <>{children}</>;
    return <div style={{ maxWidth: width }}>{children}</div>;
};

export const Input = props => {
    const { password, error, width, className = '' } = props;

    return (
        <FormField {...props}>
            <InputFieldWrapper width={width}>
                <InputField {...props} />
            </InputFieldWrapper>
        </FormField>
    );
};

export { Form };