import React from 'react';
import {shallow} from 'enzyme';

import Footer from './footer';

describe("Footer Component", () => {

    it("Should contain valid author", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('h5').text()).toEqual('Created by : Anmol Chaware');
    })

})