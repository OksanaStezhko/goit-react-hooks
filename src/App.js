import React from 'react';

import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import Layout from './components/Layout/Layout';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import items from './data/transactions.json';

const App = () => (
  <Layout>
    <Profile user={user} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={items} />
  </Layout>
);

export default App;
