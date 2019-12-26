import React from 'react';
import {shallow} from 'enzyme';
import Counter from './counter';

describe("Counter Component", () => {

    it("should increment count when clicking button",() => {
        const wrapper = shallow(<Counter />);
        const total1 = wrapper.find('h5').text();
        expect(total1).toBe('0');

        wrapper.find('button.btn-outline-success').props().onClick();
        wrapper.find('button.btn-outline-success').simulate('click');
        
        const total2 = wrapper.find('h5').text();
        expect(total2).toBe('2');
    })

    test("wrapper should contains text-center class", ()=> {
        const wrapper = shallow(<Counter />);
        expect(wrapper.find('div').hasClass('text-center')).toBe(true);
    })
})