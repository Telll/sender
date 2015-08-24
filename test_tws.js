/* tests for Telll tws
 *
*/

QUnit.test( "classes", function( assert ) {
  saas = new tws();
  movie = new Movie();
  user = new User();
  photolink = new Photolink();
  canvas = new Canvas();
  trackm = new Trackm();
  controls = new Controls();
  panel = new Panel();
  photolinksBar = new PhotolinksBar();
  tagCanvas = new TagCanvas();
  mockPlayer = new MockPlayer();
  myPlayer = new TelllPlayer();
  clickbox = new Clickbox();
  photolinksList = new PhotolinksList();
  assert.ok( 1 == "1", "Classes loaded!" );
});

// Create a new user
QUnit.asyncTest( "user", function( assert ) {
    saas = new tws();
    data = {
        username: "mock",
        email: "mock@telll.me",
        password: "blablabla"
    };
    user = new User(data);
    authData = saas.user(user);
    authData.onData = function(data) {
        phData = data;
        console.log(phData);
        jsData = JSON.parse(phData);
        assert.ok( jsData.authKey, "User authenticated.");
    };
    authData.connect();
});

// Must login to have an auth key and use tws
QUnit.asyncTest( "login", function( assert ) {
    saas = new tws();
    u = "mock";
    p = "blablabla";
    user = new User(u, p);
    authData = saas.login(user);
    authData.onData = function(data) {
        uData = data;
        console.log(uData);
        jsData = JSON.parse(uData);
        assert.ok( jsData.authKey, "User authenticated.");
    };
    authData.connect();
});

// Create a new movie
QUnit.asyncTest( "movie", function( assert ) {
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
