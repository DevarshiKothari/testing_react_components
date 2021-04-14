import React from 'react';
import UpdateVehicleComponent from '../Component/Vehicle/UpdateVehicleComponent'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<UpdateVehicleComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});