// __________________________________________
	// link:http://www.techweb.com.cn/network/system/2016-02-23/2282565.shtml
	// what will console about the code?
	(function(a){
		console.log(a);
		var a = 10;
		function a(){}
	}(100));

// __________________________________________
	// link:http://www.tuicool.com/articles/vyU3imb
	function fun(n,o) {
	  console.log(o)
	  return {
	    fun:function(m){
	      return fun(m,n);
	    }
	  };
	}
	var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);//undefined,?,?,?
	var b = fun(0).fun(1).fun(2).fun(3);//undefined,?,?,?
	var c = fun(0).fun(1);  c.fun(2);  c.fun(3);//undefined,?,?,?
// __________________________________________
	//link:https://github.com/h5bp/Front-end-Developer-Interview-Questions/tree/master/Translations/Chinese
	// ask:foo===?
	var foo = 10 + '20';
// __________________________________________
	// write two function do things like this
	add(2, 5); // 7
	add(2)(5); // 7

	// answer:
	function add(a,b){
		return a+b;
	}

	function add(a){
		return function(b){
			return a + b;
		}
	}
// __________________________________________
	// ask:aa===?
	var aa ="i'm a lasagna hog".split("").reverse().join("");
// __________________________________________
	// ask:window.foo===?
	( window.foo || ( window.foo = "bar" ) );
// __________________________________________
	// ask:alert what?
	var foo = "Hello";
	(function() {
	  var bar = " World";
	  alert(foo + bar);
	})();
	alert(foo + bar);
// __________________________________________
	// ask:foo.length===?
	var foo = [];
	foo.push(1);
	foo.push(2);
// __________________________________________
	// ask:foo.x===?
	var foo = {n: 1};
	var bar = foo;
	foo.x = foo = {n: 2};
// __________________________________________
	// ask:what will console?
	console.log('one');
	setTimeout(function() {
	  console.log('two');
	}, 0);
	console.log('three');
// __________________________________________
// __________________________________________
// __________________________________________
// __________________________________________
// __________________________________________
// __________________________________________
// __________________________________________
// __________________________________________

