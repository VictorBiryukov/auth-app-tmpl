import React, { FC, useState } from 'react';

import { Tabs } from 'antd';
import { MeasureList } from './MeasureList';

const { TabPane } = Tabs

export const AppTabs: FC = () => {
    return (
        <Tabs>
            <TabPane key="measures" tab="Measures">
                <MeasureList />
            </TabPane>
        </Tabs>
    )
}