import React from 'react';
import { shallow } from 'enzyme';

import { MegaClippers } from './megaClippers';
import Button from '../../../../../library/Button/button';

describe('<MegaClippers/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MegaClippers megaClipperInitPrice={100} megaClipperPrice={100}/>);
    });

    it("should render one <Buttons/>", () => {
        // wrapper.setProps({})
       expect(wrapper.find(Button)).toHaveLength(1);
    })
});
