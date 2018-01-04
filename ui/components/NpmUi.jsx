import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Scripts from './Scripts';
import Dependencies from './Dependencies';

class NpmUi extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Scripts</Tab>
          <Tab>Dependencies</Tab>
        </TabList>

        <TabPanel>
          <Scripts />
        </TabPanel>
        <TabPanel>
          <Dependencies />
        </TabPanel>
      </Tabs>
    );
  }
}

export default NpmUi;
