describe("DOM Tests", function () {
    var li1 = document.createElement('li');
	var t1  = document.createTextNode('list-1');
	var li2 = document.createElement('li');
	var t2  = document.createTextNode('list-2');
	li1.appendChild(t1);
 	document.getElementById('main-ul').appendChild(li1);
 	li2.appendChild(t2);
 	document.getElementById('main-ul').appendChild(li2);
 
    var myEl = document.getElementById('main-ul');
    it("is in the DOM", function () {
        expect(myEl).to.not.equal(null);
    });
 
    // it("is a child of the body", function () {
    //     expect(myEl.parentElement).to.equal(document.body);
    // });
 
    // it("has the right text", function () {
    //     expect(myEl.innerHTML).to.equal("Hi there!");
    // });
 
    // it("has the right background", function () {
    //     expect(myEl.style.background).to.equal("rgb(204, 204, 204)");
    // });
});