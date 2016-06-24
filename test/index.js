import 'babel-polyfill';
import LatestPrinted from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
chai.use(chaiEnzyme()).should();
describe('LatestPrinted', () => {

  it('renders a React element', () => {
    React.isValidElement(<LatestPrinted />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let latestPrinted = null;
    beforeEach(() => {
      rendered = mount(<LatestPrinted />);
      latestPrinted = rendered.find('.latest-printed');
    });

    it('renders a top level div.latest-printed', () => {
      latestPrinted.should.have.tagName('div');
      latestPrinted.should.have.className('latest-printed');
    });

    xit('renders <FILL THIS IN>', () => {
      latestPrinted.should.have.exactly(1).descendants('.the-descendent-class');
      latestPrinted.find('.the-descendent-class').should.have.tagName('TAG');
    });

  });

});
