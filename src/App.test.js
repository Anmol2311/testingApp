import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import Footer from './components/footer';
import Counter from './components/counter';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/Counter App/i);
//   expect(linkElement).toBeInTheDocument();
// });

// describe("App Component", () => {

//   it("should render counter & footer component", () => {

//     const wrapper = shallow(<App />);

//     const footer = wrapper.find(Footer);
//     expect(footer.exists()).toBeTruthy();

//     const counter = wrapper.find(Counter);
//     expect(counter.exists()).toBe(true);
//   })

// })

describe("App Component", () => {

  test("should be contain counter component",() => {

    const wrapper = shallow(<App />);
    const counter = wrapper.find(Counter);

    expect(counter.exists()).toBe(true)

  })

  it("should be contain footer component",() => {

    const wrapper = shallow(<App />);
    const footer = wrapper.find(Footer);
    
    expect(footer.exists()).toBe(true)

  })

})
