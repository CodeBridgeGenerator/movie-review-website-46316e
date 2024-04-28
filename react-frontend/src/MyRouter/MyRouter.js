import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import NoMatch from './NoMatch';

import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/LoginPage/SignUpPage';
import Account from '../components/Account/Account';
import Dashboard from '../components/Dashboard/Dashboard';
import WhatToDoPage from '../components/WhatTodo';

import UsersPage from "../components/UsersPage/UsersPage";
import SingleUsersPage from "../components/UsersPage/SingleUsersPage";
import MoviesPage from "../components/MoviesPage/MoviesPage";
import SingleMoviesPage from "../components/MoviesPage/SingleMoviesPage";
import RatingsPage from "../components/RatingsPage/RatingsPage";
import SingleRatingsPage from "../components/RatingsPage/SingleRatingsPage";
// ~cb-add-import~

const MyRouter = () => {
    return (
        <Routes>
            <Route path="" exact element={<Dashboard />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/signup" exact element={<SignUpPage />} />

            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
                <Route path="/account" exact element={<Account />} />
                    <Route path="/users" exact element={<UsersPage />} />
                    <Route path="/users/:singleUsersId" exact element={<SingleUsersPage />} />
                    <Route path="/movies" exact element={<MoviesPage />} />
                    <Route path="/movies/:singleMoviesId" exact element={<SingleMoviesPage />} />
                    <Route path="/ratings" exact element={<RatingsPage />} />
                    <Route path="/ratings/:singleRatingsId" exact element={<SingleRatingsPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
            {/* ~cb-add-route~ */}

            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

export default MyRouter;
