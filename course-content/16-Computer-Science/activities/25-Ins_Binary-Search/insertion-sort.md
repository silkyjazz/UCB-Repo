Step 1. Create a function that accepts a sorted array and the element we are searching for.

Step 2. Define two variable which represent the start index and the end index of the given array.

Step 3. While start index is less than or equal to end index we continue to loop (continue subdividing our range of values to search).

Step 4. Define a variable which represents the middle index of the given array.

Step 4. If given element is at the given array's middle index, return true.

Step 5. Else if the given array's middle index less than the given element, start index equals the middle index plus one.

Step 6. Else update the end index to the middle index minus one.

Step 7. After exiting the loop return false because given element was not found.

array and search value
[1,2,3,4,5,6,7,8] (3)

start=0, end=7, mid=3
[{1},2,3,(4),5,6,7,{8}] (3)

start=0, end=2 mid=1
[{1},(2),{3}],4,5,6,7,8 (3)

start=2, end=2 mid=2
1,2,[{{(3)}}],4,5,6,7,8 (3)
