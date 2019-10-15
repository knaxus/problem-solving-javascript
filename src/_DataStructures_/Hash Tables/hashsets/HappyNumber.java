//Happy Number means to check if the numbers are :) or :(  

//Prblem Statement:
    /* A happy number is a number defined by the following process: Starting with any positive integer, 
       replace the number by the sum of the squares of its digits, and repeat the process until the number 
       equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. 
       Those numbers for which this process ends in 1 are happy numbers.
     */

     import java.util.*;

     class HappyNumber{
         public boolean check(int n){
             
            HashSet<Integer> set = new HashSet<Integer>();

            //While if set does not contain any number
            while(!set.contains(n)){
                set.add(n);

                //Recursively update the value 
                n = number(n);

                //Check if n is equal to 1
                if(n == 1){
                    return true;
                }
            }
            return false;    
         }

         //Return the sum value from method number
         public int number(int n){
             int sum = 0;
             while(n > 0){
                 sum += (n%10) * (n%10);
                 n = n / 10;
             }
             return sum;
         }
     }