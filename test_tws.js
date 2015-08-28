/* tests for Telll tws
 *
*/

QUnit.test( "classes", function( assert ) {
  saas = new tws('http://52.3.72.192:3000');
  movie = new Movie();
  user = new User({'error':'error'});
  photolink = new Photolink();
  trackm = new Trackm();
  clickbox = new Clickbox();
  photolinksList = new PhotolinksList();
  assert.ok( 1 == "1", "Classes loaded!" );
});

// Create a new user
QUnit.test( "user", function( assert ) {
    var done = assert.async();
    saas = new tws('http://52.3.72.192:3000');
    data = {
        'username': "mock_01",
        'email': "mock_01@telll.me",
        'password': "blablabla"
    };
    user = new User(data);
    xhr = saas.user(user);
    xhr.addEventListener('load', function(){
        console.log(this.responseText);
        jsData = JSON.parse(this.responseText);
        assert.ok( jsData.sent, "Loaded.");
        done();
    });
});

// Must login to have an auth key and use tws
QUnit.test( "login", function( assert ) {
    var done = assert.async();
    saas = new tws('http://52.3.72.192:3000');
    data = {
        'username': "mock_01",
        'email': "mock_01@telll.me",
        'password': "blablabla"
    };
    user = new User(data);
    xhr = saas.login(user);
    xhr.addEventListener('load', function(){
        console.log(this.responseText);
        jsData = JSON.parse(this.responseText);
        console.log(jsData);
        if (jsData.error) alert(jsData.error);
        assert.ok( jsData.auth_key, "User authenticated: "+jsData.auth_key);
        done();
    });
});

// Create a new movie
QUnit.asyncTest( "movie", function( assert ) {
	assert.expect( 1 );
    saas = new tws();
    data = {
        title: "Test Movie",
        description: "Testing TWS",
        url: "http://www.telll.me/mov/test.mp4",
        player: "telllplayer"
    };
    user = new Movie(data);
    movData = saas.movie(user);
    movData.onData = function(data) {
        mData = data;
        console.log(mData);
        jsData = JSON.parse(mData);
        assert.ok( jsData.url, "User authenticated.");
    };
    movData.connect();
});



// Can send and receive a photolink
QUnit.asyncTest( "getPhotolink", function( assert ) {
	assert.expect( 1 );
	saas = new tws('http://52.3.72.192:3000');
	var phData = "{'error':'unknown'}";
	lp = saas.getPhotolink();
	//console.log('Getting photolink from '+ saas.url);
	lp.onData = function(data) {
	    phData = data;
	    //console.log(phData);
            jsData = JSON.parse(phData);
	    assert.ok( jsData.extradata == 'blablabla', "Received a photolink: "+ jsData.extradata);
	};
	lp.connect();
	//console.log(lp);
        setTimeout(function(){
	spl = saas.sendPhotolink('{"extradata":"blablabla"}');
        }, 2000);
});
