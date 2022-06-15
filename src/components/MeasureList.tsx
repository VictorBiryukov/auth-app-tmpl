import React, { FC, useState } from 'react';

import { Spin, Table } from 'antd';

import { useSearchMeasureQuery } from '../__generate/graphql-frontend'



export const MeasureList: FC = () => {

    const columns = [
        {
            title: "Name",
            key: 'name',
            dataIndex: 'name',
        }
    ]

    const { data, loading, error } = useSearchMeasureQuery()
    const measureList = data?.searchMeasure?.elems

    const mapToView = (list: typeof measureList) => {
        return (
            list?.map(elem => {
                return {
                    key: elem.id ?? "",
                    name: elem.name,
                }
            })
        )
    }

    if (loading) return (<Spin tip="Loading..." />);
    if (error) return <p>`Error! ${error.message}`</p>;

    return (
        <Table
            columns={columns}
            dataSource={mapToView(measureList)}
        />
    )
}