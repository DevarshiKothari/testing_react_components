import React from 'react';
import UpdateHelpComponent from '../Component/DomestisHelp/UpdateHelpComponent'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<UpdateHelpComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});