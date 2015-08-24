/* tests for Telll
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

// UI tests

// Can instantiate a mockPlayer


