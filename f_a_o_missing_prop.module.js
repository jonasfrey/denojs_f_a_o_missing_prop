class O_missing_prop{
    constructor(
        o__missing_prop,
        o__owning_prop,
        s_prop_name
        ){
        this.o__missing_prop = o__missing_prop, 
        this.o__owning_prop = o__owning_prop, 
        this.s_prop_name = s_prop_name
    }
}
const f_a_o_missing_prop_in_first_arg_object = function(
    o_1, 
    o_2, 
    s_prop_name_prefix = ''
){
    try {
        var a_o_props__o_2 = Object.keys(o_2);
    } catch (error) {
        var a_o_props__o_2 = []
    }
    let a_o_missing_prop = []
    for(let s of a_o_props__o_2){
        try{
            var b_prop_existing = o_1.hasOwnProperty(s);
        }catch{
            var b_prop_existing = false;
        }

        if(!b_prop_existing){
            a_o_missing_prop.push(new O_missing_prop(o_1, o_2, s_prop_name_prefix+s));
        }
    }
    return a_o_missing_prop;

}
const f_a_o_missing_prop = function (
    o_1,
    o_2, 
    s_prop_name_prefix = ''
) {

    let a_o_missing_prop_in_first_arg_object__o_1 = f_a_o_missing_prop_in_first_arg_object(o_1, o_2, '');
    let a_o_missing_prop_in_first_arg_object__o_2 = f_a_o_missing_prop_in_first_arg_object(o_2, o_1, '');
    a_o_missing_prop = a_o_missing_prop_in_first_arg_object__o_1.concat(a_o_missing_prop_in_first_arg_object__o_2);

    return a_o_missing_prop;
}

const f_a_o_missing_prop__recursive_in_first_arg_object = function (
    o_1,
    o_2,
    o_1__root, 
    o_2__root, 
    s_prop_name_dot_joined = ''
) {
    if(!o_1__root){o_1__root = o_1};
    if(!o_2__root){o_2__root = o_2};
    // console.log("asdf")
    let a_o_props__o_2 = Object.keys(o_2);
    let a_o_missing_prop = f_a_o_missing_prop_in_first_arg_object(o_1, o_2, s_prop_name_dot_joined);
    // console.log(a_o_missing_prop)
    for(let s of a_o_props__o_2){
        // console.log(s)
        // console.log("o_1")
        // console.log(o_1)
        // console.log("o_2")
        // console.log(o_2)
        try {
            var v1 = o_1[s];
        } catch (error) {
            var v1 = null;
        }
        try {
            var v2 = o_2[s];
        } catch (error) {
            var v2 = null;
        }
        // var v1 = (o_1[s] ? o_1[s] : null);
        // var v2 = (o_2[s] ? o_2[s] : null);
        if(
            // (typeof v1 === typeof v2)
              typeof v2 == "object" && v2 !== null
            //   && (v1 !== null && v2 !== null) // typeof null is 'object' in js -.-
            ){

            let a_o_missing_prop__child = f_a_o_missing_prop__recursive_in_first_arg_object(
                o_1[s],
                o_2[s],
                o_1__root,
                o_2__root,
                s+"."//s_prop_name prefix
            )
            // console.log("a_o_missing_prop__child")
            // console.log(a_o_missing_prop__child)
            a_o_missing_prop = a_o_missing_prop.concat(
                a_o_missing_prop__child
            )
        }
    }
    let a_o_missing_prop__recursive_in_first_arg_object = []
    for(let o_missing_prop of a_o_missing_prop){
        a_o_missing_prop__recursive_in_first_arg_object.push(new O_missing_prop(o_1__root, o_2__root, o_missing_prop.s_prop_name))
    }
    return a_o_missing_prop__recursive_in_first_arg_object;
}
const f_a_o_missing_prop__recursive = function (
    o_1,
    o_2,
    s_prop_name_dot_joined = ''
) {
    let a_o_missing_prop__recursive_in_first_arg_object_o_1 = f_a_o_missing_prop__recursive_in_first_arg_object(o_1, o_2);
    let a_o_missing_prop__recursive_in_first_arg_object_o_2 = f_a_o_missing_prop__recursive_in_first_arg_object(o_2, o_1);
    let a_o_missing_prop__recursive = a_o_missing_prop__recursive_in_first_arg_object_o_1.concat(a_o_missing_prop__recursive_in_first_arg_object_o_2);
    return a_o_missing_prop__recursive
}

if('Deno' in globalThis){
    if(
        Deno.args[0]=='test'
        && 
        import.meta.main == true // if this is not checked, the test will run also when this script is imported by another script    
    ){
        // readme.md:startfile
        // readme.md: # what is it for?
        // readme.md: you can check if two objects are from the same class
        // readme.md: without have them instantiated in the same running proccess, 
        // readme.md: so you can for example check if a json decoded object is of certain class/type
        // readme.md: # check if two one dimensional objects are different
        // readme.md: ## two same objects
        // readme.md:```javascript
        console.log("test both objects same")
        var o_1 = {n_a:2, n_b:3, o_c: {}, a_d: [0,2], s_x:"D"};
        var o_2 = {n_a:2, n_b:3, o_c: {}, a_d: [0,2], s_x:"D"};
        var a_o_missing_prop = f_a_o_missing_prop(o_1, o_2);
        console.log(a_o_missing_prop)
        // readme.md: ```

        // readme.md: ## null is also an object in javascript -.-
        // readme.md:```javascript
        console.log("test both objects same")
        var o_1 = null;
        var o_2 = {n_a:2, n_b:3, o_c: {}, a_d: [0,2], s_x:"D"};
        var a_o_missing_prop = f_a_o_missing_prop(o_1, o_2);
        console.log(a_o_missing_prop)

        var o_1 = {n_a:2, n_b:3, o_c: {}, a_d: [0,2], s_x:"D"};
        var o_2 = null;
        var a_o_missing_prop = f_a_o_missing_prop(o_1, o_2);
        // console.log(a_o_missing_prop)
        // Deno.exit()
        // readme.md: ```



        // readme.md: ## object2 is different
        // readme.md:```javascript
        console.log("test object 2 is missing some props")
        var o_1 = {n_a:2, n_b:3, o_c: {}, a_d: [0,2], s_x:"D"};
        var o_2 = {n_a:2,                 a_d: [0,2], s_x:"D"};
        var a_o_missing_prop = f_a_o_missing_prop(o_1, o_2);
        console.log(a_o_missing_prop)
        // readme.md:```

        // readme.md: ## object1 is different
        // readme.md:```javascript
        console.log("test object 1 is missing some props")
        var o_1 = {       n_b:3, o_c: {},             s_x:"D"};
        var o_2 = {n_a:2, n_b:3, o_c: {}, a_d: [0,2], s_x:"D"};
        var a_o_missing_prop = f_a_o_missing_prop(o_1, o_2);
        console.log(a_o_missing_prop)
        // readme.md:```
    
        // readme.md: # multidimensional objects
        // readme.md: ## both objects same
        // readme.md:```javascript
        console.log("test recursive, both objects same")
        var o_1  = {
            o_sub: {n_a:1, n_b:255, n_c:1}
        }
        var o_2  = {
            o_sub: {n_a:2, n_b:3, n_c:44}
        }
        var a_o_missing_prop = f_a_o_missing_prop__recursive(o_1, o_2);
        console.log(a_o_missing_prop)
        // readme.md:```
        // readme.md: ## not same
        // readme.md:```javascript
        console.log("test recursive, o_1.o_sub.n_b is existing, o_2.o_sub.n_b is missing")
        var o_1  = {
            o_sub_existing_on_o1: 'yes i am here',
            o_sub: {n_a:2, n_b:3}
        }
        var o_2  = {
            o_sub_existing_on_only_o2: "i am only on o2",
            o_sub: {n_a:2, n_b:3, n_c:44, n_d: 23}
        }
        var a_o_missing_prop = f_a_o_missing_prop__recursive(o_1, o_2);
        console.log(a_o_missing_prop)
        var a_o_missing_prop = f_a_o_missing_prop__recursive(o_2, o_1);
        console.log(a_o_missing_prop)
        // readme.md:```

        // readme.md: ## not same
        // readme.md:```javascript
        console.log("test recursive")
        var o_1 = {
            o_sub: { 
                a: null
            }
        }
        var o_2 = {
            o_sub: { 
                a: {
                    b: 2 
                }
            }
        }
        var a_o_missing_prop = f_a_o_missing_prop__recursive(o_1, o_2);
        console.log(a_o_missing_prop)
        var a_o_missing_prop = f_a_o_missing_prop__recursive(o_2, o_1);
        console.log(a_o_missing_prop)

        console.log("test recursive")
        var o_1 = {
            o_sub: { 
                a: {
                    b: 2 
                }
            }
        }
        var o_2 = {
            o_sub: { 
                a: null
            }
        }
        var a_o_missing_prop = f_a_o_missing_prop__recursive(o_1, o_2);
        console.log(a_o_missing_prop)
        var a_o_missing_prop = f_a_o_missing_prop__recursive(o_2, o_1);
        console.log(a_o_missing_prop)



        console.log("test recursive")
        var o_1 = {
            o_sub: { 
                a: {
                    b: 2 
                }
            }
        }
        var o_2 = {
            o_sub: { 
                a: 1,
                b: 'test', 
                c: [], 
                d: {}
            }
        }
        var a_o_missing_prop = f_a_o_missing_prop__recursive(o_1, o_2);
        console.log(a_o_missing_prop)
        var a_o_missing_prop = f_a_o_missing_prop__recursive(o_2, o_1);
        console.log(a_o_missing_prop)
        // readme.md:```
        // readme.md:endfile
    }
}

export {
    f_a_o_missing_prop, 
    f_a_o_missing_prop_in_first_arg_object, 
    f_a_o_missing_prop__recursive_in_first_arg_object
}