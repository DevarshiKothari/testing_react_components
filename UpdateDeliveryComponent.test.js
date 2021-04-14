import React from 'react';
import UpdateDeliveryComponent from '../Component/Delivery/UpdateDeliveryComponent'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<UpdateDeliveryComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});