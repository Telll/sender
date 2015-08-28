/* tests for Telll
 *
*/

QUnit.test( "classes", function( assert ) {
  saas = new tws();
  movie = new Movie();
  user = new User({'error':'error'});
  photolink = new Photolink();
  canvas = new Canvas();
  trackm = new Trackm();
  controls = new Controls();
  panel = new Panel();
  photolinksBar = new PhotolinksBar();
  tagCanvas = new TagCanvas();
  mockPlayer = new MockPlayer($('<div></div>'),{});
  myPlayer = new TelllPlayer();
  clickbox = new Clickbox();
  photolinksList = new PhotolinksList();
  assert.ok( 1 == "1", "Classes loaded!" );
});

// UI tests

// Can instantiate a mockPlayer
QUnit.test( "mock player", function( assert ) {
    // Create a div on document to hold the player
    $pl = $('<div id="mock-player"></div>');
    $pl.appendTo('body');
    // The player receives a jQuery element as frame. It needs to be a div
    player = new MockPlayer($pl,{});
    assert.ok(player.state == "STOPPED", "The player begins stopped");
    // Movie to load
    mov = new Movie(0); // id 0 is the test default
    player.load(mov);
    assert.ok(player.loaded ,"Movie loaded");
    player.play();
    assert.ok(player.state == "PLAYING", "Playing movie");
    player.pause();
    assert.ok(player.state == "PAUSED" ,"Movie paused");
    player.stop();
    assert.ok(player.state == "STOPPED" ,"Movie stopped");
    player.seek(20);
    assert.ok(player.actualSeconds() == 20 ,"Movie seeked");
    // Player events and behaviors
    player.on('tag' ,function(e){});
    player.on('track' ,function(e){});
    player.on('time'  ,function(e){});
    player.on('state' ,function(e){});
    player.on('mouseenter',function(e){});
    player.on('touchstart',function(e){});
    player.on('mouseleave',function(e){});
    player.on('touchend',function(e){});
});
