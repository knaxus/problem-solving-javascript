//Intersection of two arrays
import java.util.*;

class Intersection{
    public int[] check(int[] nums1, int[] nums2) {
        //Create two hashsets
        HashSet<Integer> set1 = new HashSet<Integer>();
        for(Integer i : nums1){
            set1.add(i);
        }
        
        HashSet<Integer> set2 = new HashSet<Integer>();
        for(Integer i : nums2){
            set2.add(i);
        }
        
        //Used the built-in method for intersection of two arrays
        set1.retainAll(set2);

        //Created a dummy array for output for getting the result of interesection 
        //between two arrays
        int[] output = new int[set1.size()];
        int index = 0;
        for(Integer o : set1){
            output[index++] = o;
        }
        return output;
    }
}