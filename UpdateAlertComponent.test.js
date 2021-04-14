import React from 'react';
import UpdateAlertComponent from '../Component/SecurityAlert/UpdateAlertComponent'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<UpdateAlertComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});