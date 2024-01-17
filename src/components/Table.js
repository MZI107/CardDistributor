/** @format */
import React, { useEffect, useState } from 'react';

import DataTable from 'react-data-table-component';
import {
    ErrorAlert,
    CardWrapper,
} from '.';

export const Table = props => {
    const {
        className,
        keyField = 'id',
        columns = [],
        data = [],
        defaultSizePerPage = 10,
        searchExtension,
        searchExtensionClassName,
        onSearch,
        card,
        hideWrapper,
        rowSelect,
        setRowSelect,
        showCheckbox = false,
        cellEdit,
        setDisableAssignBtn,
    } = props;

    const totalSize = data ? data.length : 0;
    const [tableData, setTableData] = useState(null);
    const [page, setPage] = useState(1);
    const [sizePerPage, setSizePerPage] = useState(defaultSizePerPage);

    useEffect(() => {
        setPage(1);
        setSizePerPage(defaultSizePerPage);
        setTableData(data);
    }, [data]);

    const onSizePerPageChange = e => {
        const { value } = e.target;
        setPage(1);
        setSizePerPage(value);
    };

    const selectRow = {
        mode: 'checkbox',
        clickToSelect: false,
        classes: 'selection-row',
        onSelect: (row, isSelect, rowIndex, e) => {
            setRowSelect([...rowSelect, row]);

            if (!isSelect) {
                setDisableAssignBtn(true);
                setRowSelect(rowSelect.filter(item => item._id !== row._id));
            } else {
                setDisableAssignBtn(false);
            }
        },
        onSelectAll: (isSelect, rows, e) => {
            setRowSelect(rows);

            if (!isSelect) {
                setDisableAssignBtn(true);
                setRowSelect([]);
            } else {
                setDisableAssignBtn(false);
            }
        },
    };

    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            // console.log({ row, rowIndex });
        },
    };

    return (
        <TableWrapper hideWrapper={hideWrapper}>
            <div
                className="d-flex flex-wrap align-items-center"
                style={{
                    paddingTop: 5,
                }}>
                {/* <div className="mr-4">{onSearch && <SearchBar onSearch={onSearch} />}</div> */}
                <div className={`flex-fill ` + searchExtensionClassName}>{searchExtension}</div>
            </div>

            <div>
                {tableData && tableData.length > 0 ? (
                    <>
                        {/* {card && (
                            <Row>
                                {tableData.map((e, i) => (
                                    <Col key={i} xs={12} xl={3} md={4} sm={6}>
                                        <EntityRecordCardWrapper entity={e} onClick={() => {}} />
                                    </Col>
                                ))}
                            </Row>
                        )} */}
                        {!card && (
                            <DataTable
                                classes={
                                    className ||
                                    'table-slim table-head-custom table-vertical-center overflow-hidden table-row-custom'
                                }
                                columns={columns}
                                data={tableData}
                            />
                        )}
                    </>
                ) : (
                    <div className="mb-4">
                        <ErrorAlert error={'No record found'} />
                    </div>
                )}
            </div>
        </TableWrapper>
    );
};

const TableWrapper = props => {
    const { hideWrapper, children } = props;

    if (hideWrapper) return <div>{children}</div>;

    return <CardWrapper>{children}</CardWrapper>;
};