import React from 'react';
import ViewDeliveryComponent from '../Component/Delivery/ViewDeliveryComponent'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<ViewDeliveryComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});