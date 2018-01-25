import React from 'react';
import Wt3dList from './Wt3dList';
import Wt3dListFilters from './Wt3dListFilters';
import Wt3dsSummary from './Wt3dsSummary';

const Wt3dDashboardPage = () => (
  <div>
    <Wt3dsSummary />
    <Wt3dListFilters />
    <Wt3dList />
  </div>
);

export default Wt3dDashboardPage;
