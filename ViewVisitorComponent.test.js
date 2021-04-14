import React from 'react';
import ViewVisitorComponent from '../Component/Visitors/ViewVisitorComponent'
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
 const tree = renderer
   .create(<ViewVisitorComponent/>)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});