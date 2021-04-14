import React from 'react';
import ViewAlertComponent from '../Component/SecurityAlert/ViewAlertComponent'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<ViewAlertComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});