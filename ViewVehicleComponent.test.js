import React from 'react';
import ViewVehicleComponent from '../Component/Vehicle/ViewVehicleComponent'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<ViewVehicleComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});