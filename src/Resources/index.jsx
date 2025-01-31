/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav3 from './Nav3';
import Banner5 from './Banner5';
import Feature1 from './Feature1';
import Content3 from './Content3';
import Teams2 from './Teams2';
import Content12 from './Content12';
import Footer1 from './Footer1';
import ProgresTimeline from './ProgresTimeline';

import {
  Nav30DataSource,
  TimelineDataSource,
  Footer10DataSource
} from './data.source';
import {
  Nav30DataSource as NavData
} from '../Home/data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port,
    };
  }

  componentDidMount() {

    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });

    if (location.port) {
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }



  render() {
    const children = [
      <Nav3
        id="Nav3_0"
        key="Nav3_0"
        dataSource={NavData}
        isMobile={this.state.isMobile}
      />,
      <ProgresTimeline
        id="Teams2_0"
        key="Teams2_0"
        dataSource={TimelineDataSource}
        isMobile={this.state.isMobile}
      />,
 
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {this.state.show && children}
      </div>
    );
  }
}
