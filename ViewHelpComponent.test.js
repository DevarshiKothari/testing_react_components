import React from 'react';
import ViewHelpComponent from '../Component/DomestisHelp/ViewHelpComponent'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<ViewHelpComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});