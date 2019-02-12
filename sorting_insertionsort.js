/*
  Insertion sort. The basic idea is as we loop through each of the item; it compares the current item with previous items(which are sorted at this point). And if the current item is less then any of the items, it does a swap. So the new item will be in the right place.
*/

console.log('INSERTION SORT...');
function insertionSort(arr){
    let len=arr.length;
    for(let i=1; i<len; i++){   //5, 6, 1, 2, 4 //5,1,6,2,4  //1,5,6,2,4
        //This will let us loop through the array
        let currentItem=arr[i]; //CURRENT ITEM IS 1 
        let j=i-1; //1
        while(j>=0 && currentItem<arr[j]){ // J is 1 and J's bottom boundary is always 0
            //loop back in the sorted part of the array and shuffle/swap items only if the current item is less. Otherwise no operation is necessary.
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            j--;
        }
    }
    return arr;
}

//The following adds a swap flag
function insertionSort_SwapFlag(arr){
    let len=arr.length;
    let swapped=false;
    for(let i=1; i<len; i++){
        //This will let us loop through the array
        let currentItem=arr[i];
        let j=i-1;
        while(j>=0 && currentItem<arr[j]){
            //loop back in the sorted part of the array and swap position only if current item is less than any of the item
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            j--;
            swapped=true;
        }
        if(swapped==false){
            return arr;
        }
    }
    return arr;
}

function insertionSort_Joe(arr) {
    for (let i = 0; i < arr.length; i++) {
      let currentItem = arr[i];
      for (var j = i - 1; j > -1 && arr[j] > currentItem; j--){   
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = currentItem;
    }
  return arr;
}


myTestArr=[];
for(let i=1000; i>=0; i--){
   let random=Math.floor(Math.random()*i);
   myTestArr.push(random);
   //myTestArr.push(i);
}


//console.log(myTestArr[200]);

let t1=performance.now();
console.log(insertionSort(myTestArr));
let t2=performance.now();
console.log('Insertion Sort:',t2-t1);

myTestArr=[];
for(let i=1000; i>=0; i--){
    let random=Math.floor(Math.random()*i);
    myTestArr.push(random);
    //myTestArr.push(i);
}

//console.log(myTestArr[100]);

t1=performance.now();
console.log(insertionSort_SwapFlag(myTestArr));
t2=performance.now();
console.log('Insertion Sort Swap flag:',t2-t1);

//console.log(myTestArr);

myTestArr=[];
for(let i=1000; i>=0; i--){
   let random=Math.floor(Math.random()*i);
   myTestArr.push(random);
   //myTestArr.push(i);
}
t1=performance.now();
console.log(insertionSort_Joe(myTestArr));
t2=performance.now();
console.log('JOE INSERTION SORT:',t2-t1);

myTestArr=[];
for(let i=1000; i>=0; i--){
    let random=Math.floor(Math.random()*i);
    myTestArr.push(random);
    //myTestArr.push(i);
 }

t1=performance.now();
myTestArr.sort(
    function(a,b){
        return b-a;
    }
);
t2=performance.now();
console.log('JSSSSS SORT:',t2-t1);



