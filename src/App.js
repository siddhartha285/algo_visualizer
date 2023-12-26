import React  from 'react';
import { useEffect } from 'react';

import {HashRouter as Router, Route,Routes} from 'react-router-dom';

import Home from "./homeComponents/home";
import Seive from "./primeComponents/seive";
import Sort from "./sortComponents/sort";


import BinarySearch from "./binarySearchComponent/binarySearch";
import RecursiveSort from "./recursiveSortComponents/recursiveSort";





const App = () => {
    useEffect(() => {
        // Code to execute on component mount
        // You can uncomment the following line for your window dimensions logging
        // console.log(window.innerHeight, " ", window.innerWidth);
    }, []);

    return (
        <Router basename='/'>
            <Routes>
                <Route path='/prime' element={<Seive />} />
                <Route path='/sort' element={<Sort />} />
                
               
                <Route path='/binarysearch' element={<BinarySearch />} />
                <Route path='/recursivesort' element={<RecursiveSort />} />
              
              
               
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;
