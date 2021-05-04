import React from 'react';
import { NavLink } from 'react-router-dom';
// import routes from './routes';

import Statistics from '../components/homework1/Statistics/Statistics';
import FriendList from '../components/homework1/FriendList/FriendList';
import Profile from '../components/homework1/Profile/Profile';
import Layout from '../components/homework1/Layout/Layout';
import TransactionHistory from '../components/homework1/TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import statisticalData from '../data/statistical-data.json';
import friends from '../data/friends.json';
import items from '../data/transactions.json';

const HomeWork1 = () => (
  <Layout>
    <NavLink to="/">Вернуться к списку ДЗ</NavLink>
    <Profile user={user} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={items} />
  </Layout>
);
export default HomeWork1;
