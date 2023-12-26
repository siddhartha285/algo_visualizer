
import primes from "./images/primes.jpg";
import sort from "./sort.png";

import binSearch from "./images/binaryTree.png";

export function getDetails(){
   return [
     
       {
           id:1,
           title:"Sorting Algorithm",
           description:"Compare different sorting algorithms",
           route:"/sort",
           img:sort
       },
       {
           id:2,
           title:"Recursive Sorting",
           description:"Compare different recursive sorting algorithms",
           route:"/recursivesort",
           img:sort
       },
   
  
       {
           id:3,
           title:"Prime Numbers",
           description:"Visualize how Seive is better than brute force",
           route:"/prime",
           img:primes
       },
   
       {
           id:4,
           title:"Binary Search",
           description:"Binary search is an efficient algorithm for finding an item from a sorted list of item",
           route:"/binarysearch",
           img:binSearch
       }
    

   ]
}