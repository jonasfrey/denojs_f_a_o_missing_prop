
var f_s_file_autogenerated_comment = function(
    s_path_file__generated_by,
){
    var o_date = new Date();
    var o_file_autogenerated = {
        s_msg: `this file was automatically generated`, 
        s_by: s_path_file__generated_by, 
        s_ts_created: o_date.toString(),
        n_ts_created: o_date.getTime()
    }
    return JSON.stringify(o_file_autogenerated);
}



export {f_s_file_autogenerated_comment}