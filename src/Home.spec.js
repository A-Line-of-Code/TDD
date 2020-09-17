import React from 'react';
import {shallow} from 'enzyme';
import {Home} from "./Home"

describe('Home Component', () =>{

  it('renders input[type="checkbox"]', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('input[type="checkbox"]').length).toEqual(1);
  }); 

  it('renders input[type="range"]', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('input[type="range"]').length).toEqual(1);
  }); 

  it('renders input[type="number"]', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('input[type="number"]').length).toEqual(1);
  }); 

  it('renders input[type="radio"]', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('input[type="radio"]').length).toEqual(3);
  }); 

  it('By default, radio buttons aren\'t seen', () => {
    const wrapper = shallow(<Home />);        
    const visible = wrapper.find('.visible').length;
    expect(visible).toEqual(0);
  });

  it('When the checkbox is checked, radio buttons are seen', () => {
    const wrapper = shallow(<Home />);      
    wrapper.find('input[type="checkbox"]')
          .simulate('change',{ target: { checked: true } });    
    const visible = wrapper.find('.visible').length;
    expect(visible).toEqual(1);
  });

});