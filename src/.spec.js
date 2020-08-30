import React from 'react';
import {shallow} from 'enzyme';
import App from './app';
import Enz from './enz';


describe('App Component', () =>{

    it('renders <Enz /> component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Enz).length).toEqual(1);
    });   
    
    /* 
    it('Should emit callback on click event', () => {       
      const wrapper = shallow(<Enz />);
      const button = wrapper.find('#btn1');
      button.simulate('click');
      const callback = jest.fn().mock.calls.length;
      expect(callback).toEqual(1);      
     });
    */
    it('renders images', () => {
      const wrapper = shallow(<Enz />);      
      const invisible = wrapper.find('.invisible').length;
      expect(invisible).toEqual(3);
    }); 

    it('Should set the class on click event', () => {       
      const wrapper = shallow(<Enz />);
      const button = wrapper.find('#btn1');
      button.simulate('click');
      const invisible = wrapper.find('.invisible').length;
      expect(invisible).toEqual(2);
    });

})
