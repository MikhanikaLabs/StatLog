$.getJSON('http://ip-api.com/json?callback=?', function(data) {
// console.log(JSON.stringify(data, null, 2));
JSON.stringify(data, null, 2);
var eval_data = eval(data );
// console.log(eval_data);
var text=location.href +" ";
for (var key in eval_data) {
text+= key + ":" + eval_data[key] + "; " ; 
}
// console.log(text);
$.ajax({url: "./bin/log.php", type: "POST", data: {choise: text}, success: function(result){
	console.log("success");
}});
});
