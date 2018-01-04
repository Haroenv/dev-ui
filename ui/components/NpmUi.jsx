import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class NpmUi extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Scripts</Tab>
          <Tab>Dependencies</Tab>
        </TabList>

        <TabPanel>scripts</TabPanel>
        <TabPanel>dependencies</TabPanel>
      </Tabs>
    );
  }
}

export default NpmUi;
