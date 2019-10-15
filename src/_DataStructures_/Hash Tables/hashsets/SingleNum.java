//Used these strategy in most of the test cases
import java.util.*;

class SingleNum{
    public int check(int[] nums){

        //Initializing the count as zero
        int count = 0;

        //Iterating over the nums array
        for(int i = 0; i < nums.length; i++){
            //Using XOR Operator
            count ^= nums[i];
        }
        return count;
    }
}