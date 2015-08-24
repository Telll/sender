QUnit.test( "classes", function( assert ) {
  saas = new tws();
  movie = new Movie();
  user = new User();
  photolink = new Photolink();
  tagCanvas = new TagCanvas();
  mockPlayer = new MockPlayer();
  assert.ok( 1 == "1", "Classes loaded!" );
});

/*
QUnit.asyncTest( "getPhotolinkJQ", function( assert ) {
	assert.expect( 1 );
	saas = new tws('http://52.3.72.192:3000');
	ajax = saas.getPhotolinkJQ();
        console.log(ajax);
        ajax.always(function(m) {
            console.log(ajax.statusText);
            assert.ok(ajax.statusText != 'error',"Received some response");
        });
});
*/

QUnit.asyncTest( "getPhotolink", function( assert ) {
	assert.expect( 1 );
	saas = new tws('http://52.3.72.192:3000');
	var phData = "{'error':'unknown'}";
	lp = saas.getPhotolink();
	console.log('Getting photolink from '+ saas.url);
	lp.onData = function(data) {
	    phData = data;
	    console.log(phData);
            jsData = JSON.parse(phData);
	    assert.ok( jsData.extradata == 'blablabla', "Received a photolink: "+ jsData.extradata);
	};
	lp.connect();
	console.log(lp);
        setTimeout(function(){

	spl = saas.sendPhotolink('{"extradata":"blablabla"}');

/*
$.ajaxSetup({
  headers : {
    'X-API-Key':'1234',
    'X-Auth-Key': '4574eb62ff5337ce17f3d657f3b74cbcf3f9cc42', 
  },
  type: "POST",
  url: "http://52.3.72.192:3000/app/photolink/send/0/0",
});
$.ajax({ data:'{"extradata": "blablabla"}' });
*/
/////////////////////////////////////////////////////////////

        }, 2000);
});
