import React from 'react';
import { shallow } from 'enzyme';

import { AutoClippers } from './autoClippers';
import Button from '../../../../../library/Button/button';

describe('<AutoClippers/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AutoClippers autoClipperInitPrice={100} autoClipperPrice={100}/>);
    });

    it("should render one <Buttons/>", () => {
        // wrapper.setProps({})
       expect(wrapper.find(Button)).toHaveLength(1);
    })
});
