[comment]: <> ({"s_msg":"this file was automatically generated","s_by":"generate_readme.js","s_ts_created":"Mon Jan 02 2023 01:33:44 GMT+0100 (Central European Standard Time)","n_ts_created":1672619624803})

 # what for?
 you can check if two objects are from the same class
 without have them instantiated in the same running proccess,
 so you can for example check if a json decoded object is of certain class/type
 # check if two one dimensional objects are different
 ## two same objects
```javascript
console.log("test both objects same")
var o_1 = {n_a:2, n_b:3, o_c: {}, a_d: [0,2], s_x:"D"};
var o_2 = {n_a:2, n_b:3, o_c: {}, a_d: [0,2], s_x:"D"};
var a_o_missing_prop = f_a_o_missing_prop(o_1, o_2);
console.log(a_o_missing_prop)
 ```

 ## object2 is different
```javascript
console.log("test object 2 is missing some props")
var o_1 = {n_a:2, n_b:3, o_c: {}, a_d: [0,2], s_x:"D"};
var o_2 = {n_a:2,                 a_d: [0,2], s_x:"D"};
var a_o_missing_prop = f_a_o_missing_prop(o_1, o_2);
console.log(a_o_missing_prop)
```

 ## object1 is different
```javascript
console.log("test object 1 is missing some props")
var o_1 = {       n_b:3, o_c: {},             s_x:"D"};
var o_2 = {n_a:2, n_b:3, o_c: {}, a_d: [0,2], s_x:"D"};
var a_o_missing_prop = f_a_o_missing_prop(o_1, o_2);
console.log(a_o_missing_prop)
```

 # multidimensional objects
 ## both objects same
```javascript
console.log("test recursive, both objects same")
var o_1  = {
o_sub: {n_a:1, n_b:255, n_c:1}
}
var o_2  = {
o_sub: {n_a:2, n_b:3, n_c:44}
}
var a_o_missing_prop = f_a_o_missing_prop__recursive_in_first_arg_object(o_1, o_2);
console.log(a_o_missing_prop)
```
 ## not same
```javascript
console.log("test recursive, o_1.o_sub.n_b is existing, o_2.o_sub.n_b is missing")
var o_1  = {
o_sub: {n_a:2, n_b:3}
}
var o_2  = {
o_sub: {n_a:2, n_b:3, n_c:44}
}
var a_o_missing_prop = f_a_o_missing_prop__recursive_in_first_arg_object(o_1, o_2);
console.log(a_o_missing_prop)
```