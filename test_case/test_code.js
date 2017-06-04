function temp(a,b) {

		var sum =0;	
		sum=a+b;

		return sum;
	//console.log("hello");
	 };
module.exports={
	add: temp,

	 add2: function (a, b) {
	 	return temp(temp(a, b), temp(a, b));
	 }

}