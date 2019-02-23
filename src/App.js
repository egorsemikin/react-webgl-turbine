import React, { Component } from 'react';
import { Icon, InputNumber, Layout, Menu } from 'antd';

import 'antd/dist/antd.css';
import './App.css';

const { Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  state = {
    tankDiameter: 300,
    tankHeight: 300,
    shaftRadius: 300 * 2 / 75,
    diskRadius: 300 / 8,
    diskHeight: 300 / 75,
    hubRadius: 300 * 4 / 75,
    hubHeight: 300 / 15,
    impellerCount: 6,
    impellerInnerRadius: 300 / 12,
    impellerOuterRadius: 300 / 6,
    impellerWidth: 300 / 75,
    impellerHeight: 300 / 15,
    baffleCount: 4,
    baffleInnerRadius: 300 * 2 / 5,
    baffleOuterRadius: 300 / 2,
    baffleWidth: 300 / 75
  }

  handleChange(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div className="App">
        <Layout style={{ height: '100%' }}>
          <Sider width={250} style={{ overflowY: 'auto' }}>
            <div className="logo"></div>
            <Menu theme="dark" mode="inline">
              <SubMenu key="1" title={<span><Icon type="mail" /><span>Tank</span></span>}>
                <Menu.Item key="1">
                  <span>Diameter</span>
                  <InputNumber min={100} defaultValue={this.state.tankDiameter} onChange={(value) => this.handleChange('tankDiameter', value)} />
                </Menu.Item>
                <Menu.Item key="2">
                  <span>Height</span>
                  <InputNumber min={100} defaultValue={this.state.tankHeight} onChange={(value) => this.handleChange('tankHeight', value)} />
                </Menu.Item>
              </SubMenu>
              <SubMenu key="2" title={<span><Icon type="mail" /><span>Shaft</span></span>}>
                <Menu.Item key="1">
                  <span>Radius</span>
                  <InputNumber min={1} defaultValue={this.state.shaftRadius} onChange={(value) => this.handleChange('shaftRadius', value)} />
                </Menu.Item>
              </SubMenu>
              <SubMenu key="3" title={<span><Icon type="mail" /><span>Disk</span></span>}>
                <Menu.Item key="1">
                  <span>Radius</span>
                  <InputNumber min={1} defaultValue={this.state.diskRadius} onChange={(value) => this.handleChange('diskRadius', value)} />
                </Menu.Item>
                <Menu.Item key="2">
                  <span>Height</span>
                  <InputNumber min={1} defaultValue={this.state.diskHeight} onChange={(value) => this.handleChange('diskHeight', value)} />
                </Menu.Item>
              </SubMenu>
              <SubMenu key="4" title={<span><Icon type="mail" /><span>Hub</span></span>}>
                <Menu.Item key="1">
                  <span>Radius</span>
                  <InputNumber min={1} defaultValue={this.state.hubRadius} onChange={(value) => this.handleChange('hubRadius', value)} />
                </Menu.Item>
                <Menu.Item key="2">
                  <span>Height</span>
                  <InputNumber min={1} defaultValue={this.state.hubHeight} onChange={(value) => this.handleChange('hubHeight', value)} />
                </Menu.Item>
              </SubMenu>
              <SubMenu key="5" title={<span><Icon type="mail" /><span>Impeller</span></span>}>
                <Menu.Item key="1">
                  <span>Count</span>
                  <InputNumber min={1} defaultValue={this.state.impellerCount} onChange={(value) => this.handleChange('impellerCount', value)} />
                </Menu.Item>
                <Menu.Item key="2">
                  <span>Inner Radius</span>
                  <InputNumber min={1} defaultValue={this.state.impellerInnerRadius} onChange={(value) => this.handleChange('impellerInnerRadius', value)} />
                </Menu.Item>
                <Menu.Item key="3">
                  <span>Outer Radius</span>
                  <InputNumber min={1} defaultValue={this.state.impellerOuterRadius} onChange={(value) => this.handleChange('impellerOuterRadius', value)} />
                </Menu.Item>
                <Menu.Item key="4">
                  <span>Width</span>
                  <InputNumber min={1} defaultValue={this.state.impellerWidth} onChange={(value) => this.handleChange('impellerWidth', value)} />
                </Menu.Item>
                <Menu.Item key="5">
                  <span>Height</span>
                  <InputNumber min={1} defaultValue={this.state.impellerHeight} onChange={(value) => this.handleChange('impellerHeight', value)} />
                </Menu.Item>
              </SubMenu>
              <SubMenu key="6" title={<span><Icon type="mail" /><span>Baffle</span></span>}>
                <Menu.Item key="1">
                  <span>Count</span>
                  <InputNumber min={1} defaultValue={this.state.baffleCount} onChange={(value) => this.handleChange('baffleCount', value)} />
                </Menu.Item>
                <Menu.Item key="2">
                  <span>Inner Radius</span>
                  <InputNumber min={1} defaultValue={this.state.baffleInnerRadius} onChange={(value) => this.handleChange('baffleInnerRadius', value)} />
                </Menu.Item>
                <Menu.Item key="3">
                  <span>Outer Radius</span>
                  <InputNumber min={1} defaultValue={this.state.baffleOuterRadius} onChange={(value) => this.handleChange('baffleOuterRadius', value)} />
                </Menu.Item>
                <Menu.Item key="4">
                  <span>Width</span>
                  <InputNumber min={1} defaultValue={this.state.baffleWidth} onChange={(value) => this.handleChange('baffleWidth', value)} />
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content>Content</Content>
        </Layout>
      </div>
    );
  }
}

export default App;
