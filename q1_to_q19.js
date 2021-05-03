//task 1
function countDown(a){
 
    timer = setInterval(function(){
    
    if(a>0){
    console.log(a)
    
    }
    else{
    clearInterval(timer)
    console.log('done')
    
    }
    a=a-1
    
    
    },1000)
    
    
    
    }
   
    //task2
    function isEven(n){
   
   if(n%2==0){
   
   return true
   
   }
   else{
   return false
   
   }
   
   
   
   }
   
   
   //task 3
   function isOdd(n){
   
   if(n%2 !== 0){
   
   return true
   
   }
   else{
   return false
   
   }
   
   
   
   }
   
   //task 4
   function isPrime(n){
   
   if(n>1){
       flag = true
       for(i=2;i<n;i++){
           if(n%i === 0){
               flag = false; 
               break   
               
           }
   
       }
   return flag 
   
   }
   else{
   
   return false
   }
   
   
   }
   
   
   //task 5
   
   function numberFact(n,f){
   
   return f(n)
   
   
   
   
   }
   
   
   
   //task 6
   function find(arr,fn){
   
   for(i=0;i<arr.length;i++){
       if(fn(arr[i])){return arr[i]}
   
   
   
   }
   
   
   
   
   }
   
   //TASK 7
   function findIndex(arr,fn){
   
   for(i=0;i<arr.length;i++){
       if(fn(arr[i])){return i}
   
   
   
   }
   
   
   
   
   }
   
   
   //task 8
   function specialMultiply(a,b){
   if(arguments.length ===1){
       return function(x,y){return x*y}
   }
   else{
   return a*b
   }
   
   
   
   
   
   }
   
   
   //task 9
   
   
   //tassk 10
   
   function printFirstandLast(arr){
   
   for(i=0;i<arr.length;i++){
       
       str =arr[i]
       op=""
       for(j=0;j<str.length;j++){
           if(j==0 || j == str.length-1){
           op=op+str[j]
           }
       }
       console.log(op)
       op=""
   }
   
   
   }
   
   
   
   
   //task 11
   
   
   function addKeyAndValue(obj,k,v){
       for(i=0;i<obj.length;i++){
           obj[i][k] = v;
       }
       
       
   
   
   
   
   
   }
   
   
   
   //task 12
   
   function valTimesIndex(arr){
       for(i=0;i<arr.length;i++){
       arr[i] = arr[i]*i
   
       }
   return arr
   
   
   
   }
   
   //task 13
   function extractKey(arr,k){
   arr1 = []
   
   
       for(i=0;i<arr.length;i++){
       arr1.push(arr[i][k])
       }
   
   return arr1;
   
   
   }
   
   //task 14
   function filterLetters(str){
       obj = {}
       arr = []
       for(i=0;i<str.length;i++){
           arr.push(str[i])
   
       }
   
       for(i=0;i<arr.length;i++){
           if(arr[i] == undefined ){continue}
           obj[arr[i]] = 1 
           for(j=i+1;j<arr.length;j++){
               if(arr[i] == arr[j]){
               obj[arr[j]]++
               arr[j] = undefined
               
               }
   
           }
           
   
       }
   
       
   
   
   return obj
   
   }
   //task 15
   
   function filterKey(arr,k){
       arr1 = []
       for(i=0;i<arr.length;i++){
           if(arr[i][k] == true){
               arr1.push(arr[i])}
       }
   
   
       return arr1
   }
   
   
   
   //task 16
   
   function addKeyAndValueArray(arr,k,v){
       for(i=0;i<arr.length;i++){
       arr[i][k] = v
       }
   
   
       return arr
   
   }
   
   
   //task 17
       //a
       function printEmails(){
   
       for(i=0;i<users.length;i++)
       {
       console.log(users[i]['email'])           
   
       }
   
   
       }
   
       //b
       function printHobbies(){
   
       for(i=0;i<users.length;i++)
       {
       console.log(users[i]['hobbies'])           
   
       }
   
   
       }
   
       //c
       function findHometownByState(st){
   
       for(i=0;i<users.length;i++)
           {
           if(users[i]['hometown']['state'] == st)    
               return users[i]          
   
           }
   
   
   
       }
   
       //d
       function allLanguages(){
       arr = []
       for(i=0;i<users.length;i++){
           for(j=0;j<users[i]['favoriteLanguages'].length;j++){
               flag =true
               for(k=0;k<arr.length;k++){
                   if(arr[k] == users[i]['favoriteLanguages'][j]){
                   
                   flag = false
                   }
               }
               if(flag){
               arr.push(users[i]['favoriteLanguages'][j])
               }
   
           }
   
   
   
   
   
   
       
       }
       return arr
       }
   
   
   
   
   
   
       //e
       function hasFavoriteEditor(fe){
           flag = false
           for(i=0;i<users.length;i++){
               if(users[i]['favoriteEditor'] == fe){
               flag =  true
               break    
               }
   
           }
           
   
   
       return flag
       }
   
   
       //f
   
       function findByUsername(un){
           for(i=0;i<users.length;i++){
               if(users[i]['username'] == un){
               return users[i]
               break      
               }    
           }
   
   
   
   
   
       }
   
   
   
   
   
   //task 18
   
   function vowelCount(str){
       obj = {}
       arr = []
       for(i=0;i<str.length;i++){
      if( (str[i] != "a")  && (str[i] != "e") && (str[i] != "i") && (str[i] !="o") &&( str[i] != "u")  ){continue}          
       arr.push(str[i]) 
        
   
       }
   console.log(arr)
   
       for(i=0;i<arr.length;i++){
           if( (arr[i] == undefined)  ){continue}
             
           
           obj[arr[i]] = 1 
           for(j=i+1;j<arr.length;j++){
               if(arr[i] == arr[j]){
               obj[arr[j]]++
               arr[j] = undefined
               
               }
   
           }
           
   
       }
   
   
   return obj
   }

   //task 19
   
   function removeVowels(str){
       obj = {}
       arr = []
       for(i=0;i<str.length;i++){
      if( (str[i] != "a")  && (str[i] != "e") && (str[i] != "i") && (str[i] !="o") &&( str[i] != "u")  ){arr.push(str[i])}           
        
   
       }
   console.log(arr)
   
   
   
   return arr
   
   }
   
   
   