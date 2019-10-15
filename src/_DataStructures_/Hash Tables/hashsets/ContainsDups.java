import java.util.*;

class ContainsDups{
    public boolean check(int [] nums){
        //Create a HashSet 
        HashSet<Integer> set = new HashSet<Integer>();

        //Iterating over the nums arrays
        for(int i = 0; i < nums.length; i++){
            //Check if the set contains the value
            if(set.contains(i)){
                return true;
            }else{
                //Otherwise add the value into the hashset
                set.add(i);
            }
        }
        return false;        
    }
}