it("should define CODE", function() {
	CODE.should.be.eql(3);
	(typeof CODE).should.be.eql("number");
	if(CODE !== 3) require("fail");
	if(typeof CODE !== "number") require("fail");
});
it("should define FUNCTION", function() {
	FUNCTION(5).should.be.eql(6);
	(typeof FUNCTION).should.be.eql("function");
	if(typeof FUNCTION !== "function") require("fail");
});
it("should define UNDEFINED", function() {
	(typeof UNDEFINED).should.be.eql("undefined");
	if(typeof UNDEFINED !== "undefined") require("fail");
});
it("should define REGEXP", function() {
	REGEXP.toString().should.be.eql("/abc/i");
	(typeof REGEXP).should.be.eql("object");
	if(typeof REGEXP !== "object") require("fail");
});
it("should define OBJECT", function() {
	var o = OBJECT;
	o.SUB.FUNCTION(10).should.be.eql(11);
});
it("should define OBJECT.SUB.CODE", function() {
	(typeof OBJECT.SUB.CODE).should.be.eql("number");
	OBJECT.SUB.CODE.should.be.eql(3);
	if(OBJECT.SUB.CODE !== 3) require("fail");
	if(typeof OBJECT.SUB.CODE !== "number") require("fail");

	(function(sub) {
		// should not crash
		sub.CODE.should.be.eql(3);
	}(OBJECT.SUB));
});
it("should define process.env.DEFINED_NESTED_KEY", function() {
	process.env.DEFINED_NESTED_KEY.should.be.eql(5);
	(typeof process.env.DEFINED_NESTED_KEY).should.be.eql("number");
	if(process.env.DEFINED_NESTED_KEY !== 5) require("fail");
	if(typeof process.env.DEFINED_NESTED_KEY !== "number") require("fail");

	var x = process.env.DEFINED_NESTED_KEY;
	x.should.be.eql(5);

	var indirect = process.env;
	(indirect.DEFINED_NESTED_KEY).should.be.eql(5);

	(function(env) {
		env.DEFINED_NESTED_KEY.should.be.eql(5);
		(typeof env.DEFINED_NESTED_KEY).should.be.eql("number");
		if(env.DEFINED_NESTED_KEY !== 5) require("fail");
		if(typeof env.DEFINED_NESTED_KEY !== "number") require("fail");

		var x = env.DEFINED_NESTED_KEY;
		x.should.be.eql(5);
	}(process.env));
});