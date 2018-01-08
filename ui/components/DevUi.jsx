import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Scripts from './Scripts';
import Dependencies from './Dependencies';
import PackageSelect from './PackageSelect';
import Terminal from './Terminal';
class DevUi extends Component {
  render() {
    return (
      <div>
        <PackageSelect />
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
        <Terminal />
      </div>
    );
  }
}

export default DevUi;
