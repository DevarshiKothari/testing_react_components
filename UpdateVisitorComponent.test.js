import React from 'react';
import UpdateVisitorComponent from '../Component/Visitors/UpdateVisitorComponent'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<UpdateVisitorComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});