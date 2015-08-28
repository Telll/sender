(function( $ ) {
//'use strict';

/**
 * All of the code for your public-facing JavaScript source
 */	

/**
  * class Panel
  * 
  */

Panel = function ()
{
  this._init ();
}


/**
 * _init sets all Panel attributes to their default value. Make sure to call this
 * method within your class constructor
 */
Panel.prototype._init = function ()
{
  /**
   * 
   */
  this.m_my_scroll_bar = "";
  /**
   * 
   */
  this.m_my_slider = "";
  /**
   * 
   */
  this.m_my_controls = "";

  /**Aggregations: */
            //assert.start();

  /**Compositions: */

}




/**
  * class Bar
  * 
  */

Bar = function ()
{
  this._init ();
}

Bar.prototype = new Panel ();

/**
 * _init sets all Bar attributes to their default value. Make sure to call this
 * method within your class constructor
 */
Bar.prototype._init = function ()
{

  /**Aggregations: */

  /**Compositions: */

}
/**
  * class Canvas
  * 
  */

Canvas = function ()
{
  this._init ();
}


/**
 * _init sets all Canvas attributes to their default value. Make sure to call this
 * method within your class constructor
 */
Canvas.prototype._init = function ()
{
  /**
   * 
   */
  this.m_my_media = "";
  /**
   * 
   */
  this.m_my_spot = "";

  /**Aggregations: */

  /**Compositions: */

}
/**
  * class ClickBox
  * 
  */

ClickBox = function ()
{
  this._init ();
}


/**
 * _init sets all ClickBox attributes to their default value. Make sure to call
 * this method within your class constructor
 */
ClickBox.prototype._init = function ()
{

  /**Aggregations: */

  /**Compositions: */

}



/**
  * class Controls
  * 
  */

Controls = function ()
{
  this._init ();
}

Controls.prototype = new Panel ();

/**
 * _init sets all Controls attributes to their default value. Make sure to call
 * this method within your class constructor
 */
Controls.prototype._init = function ()
{

  /**Aggregations: */

  /**Compositions: */

}



/**
  * class iData
  * 
  */

/******************************* Abstract Class ****************************
  iData does not have any pure virtual methods, but its author
  defined it as an abstract class, so you should not use it directly.
  Inherit from it instead and create only objects from the derived classes
*****************************************************************************/

iData = function ()
{
  this._init ();
}
iData.prototype._init = function (auth)
{
  
}




/**
  * class iPlayer
  * 
  */

iPlayer = function ()
{
  this._init ();
}

iPlayer.prototype._init = function ()
{
   this.state = "STOPPED"; 
}



/**
 * 
 * @param movie
    *      
 */
iPlayer.prototype.play = function (movie)
{
   this.state = "PLAYING"; 
}


/**
 * 
 */
iPlayer.prototype.stop = function ()
{
   this.state = "STOPPED"; 
}

/**
 * 
 */
iPlayer.prototype.pause = function ()
{
   this.state = "PAUSED"; 
}



/**
 * 
 * @param movie
    *      
 */
iPlayer.prototype.load = function (movie)
{
    this.movie = movie;
    this.loaded = true; 
}


/**
 * 
 * @param go_to_seconds
    *      
 */
iPlayer.prototype.seek = function (go_to_seconds)
{
 this._actualSeconds = go_to_seconds; 
}


/**
 * 
 */
iPlayer.prototype.actualSeconds = function ()
{
  return this._actualSeconds;
}


/**
 * 
 * @param new_volume
    *      
 */
iPlayer.prototype.volume = function (new_volume)
{
  
}

/**
 * 
 * @param event
 * @param callback
    *      
 */
iPlayer.prototype.on = function (evt, callback)
{
  this.me[0].addEventListener(evt, callback);
}





/**
  * class MockPlayer
  * 
  */

MockPlayer = function ($div, data)
{
  this._init ($div,data);
}

MockPlayer.prototype = new iPlayer ();

/**
 * _init sets all MockPlayer attributes to their default value. Make sure to call
 * this method within your class constructor
 */
MockPlayer.prototype._init = function ($div, data)
{
  this.me = $div; 
  //iPlayer.prototype._init.call(this, $div, data);
  $div.append("<h1>MockPlayer</h1>");
}

/**
 * 
 * @param event
 * @param callback
    *      
MockPlayer.prototype.on = function (evt, callback)
{
  this.me[0].addEventListener(evt, callback);
}
 */





/**
  * class PhotolinksBar
  * 
  */

PhotolinksBar = function ()
{
  this._init ();
}

//PhotolinksBar.prototype = new iUI ();

PhotolinksBar.prototype._init = function (){

}


/**
  * class Clickbox
  * 
  */

Clickbox = function ()
{
  this._init ();
}

//Clickbox.prototype = new iUI ();

Clickbox.prototype._init = function (){

}



/**
  * class PhotolinksList
  * 
  */

PhotolinksList = function ()
{
  this._init ();
}

//PhotolinksList.prototype = new iUI ();

PhotolinksList.prototype._init = function (){

}



/**
  * class Trackm
  * 
  */

Trackm = function ()
{
  this._init ();
}

Trackm.prototype = new iData ();

Trackm.prototype._init = function (){

}

/**
  * class Movie
  * 
  */

Movie = function ()
{
  this._init ();
}

Movie.prototype = new iData ();

/**
 * _init sets all Movie attributes to their default value. Make sure to call this
 * method within your class constructor
 */
Movie.prototype._init = function ()
{
  /**
   * 
   */
  this.m_id = "";
  /**
   * 
   */
  this.m_title = "";
  /**
   * 
   */
  this.m_author = "";
  /**
   * 
   */
  this.m_date = "";
  /**
   * 
   */
  this.m_url = "";
  /**
   * 
   */
  this.m_spot = [];
  /**
   * 
   */
  this.m_passwd = "";
  /**
   * 
   */
  this.m_length = "";
  /**
   * 
   */
  this.m_thumb = [];

  /**Aggregations: */

  /**Compositions: */

}

/**
 * 
 * @param new_id
    *      
 */
Movie.prototype.id = function (new_id)
{
  
}


/**
 * 
 * @param new_author
    *      
 */
Movie.prototype.author = function (new_author)
{
  
}


/**
 * 
 * @param new_date
    *      
 */
Movie.prototype.date = function (new_date)
{
  
}


/**
 * 
 * @param new_url
    *      
 */
Movie.prototype.url = function (new_url)
{
  
}


/**
 * 
 * @param new_title
    *      
 */
Movie.prototype.title = function (new_title)
{
  
}


/**
 * 
 * @param new_spot
    *      
 */
Movie.prototype.tracking = function (new_spot)
{
  
}


/**
 * 
 * @param new_passwd
    *      
 */
Movie.prototype.passwd = function (new_passwd)
{
  
}


/**
 * 
 * @param new_img
    *      
 */
Movie.prototype.thumb = function (new_img)
{
  
}


/**
  * class Photolink
  * 
  */

Photolink = function ()
{
  this._init ();
}

Photolink.prototype = new iData ();

/**
 * _init sets all Photolink attributes to their default value. Make sure to call
 * this method within your class constructor
 */
Photolink.prototype._init = function ()
{

  /**Aggregations: */

  /**Compositions: */

}



/**
  * class Slider
  * 
  */

Slider = function ()
{
  this._init ();
}

Slider.prototype = new Panel ();

/**
 * _init sets all Slider attributes to their default value. Make sure to call this
 * method within your class constructor
 */
Slider.prototype._init = function ()
{

  /**Aggregations: */

  /**Compositions: */

}



/**
  * class TagCanvas
  * 
  */

TagCanvas = function ()
{
  this._init ();
}

TagCanvas.prototype = new iData ();

/**
 * _init sets all TagCanvas attributes to their default value. Make sure to call
 * this method within your class constructor
 */
TagCanvas.prototype._init = function ()
{

  /**Aggregations: */

  /**Compositions: */

}

/**
  * class TelllPlayer
  * 
  */

TelllPlayer = function ()
{
  this._init ();
}

TelllPlayer.prototype = new iPlayer ();

/**
 * _init sets all TelllPlayer attributes to their default value. Make sure to call
 * this method within your class constructor
 */
TelllPlayer.prototype._init = function ()
{
  /**
   * 
   */
  this.m_my_canvas = "";
  /**
   * 
   */
  this.m_my_panel = "";
  /**
   * 
   */
  this.m_my_movie = "";

  /**Aggregations: */

  /**Compositions: */

}




/**
  * class tws
  * 
  */

tws = function (server)
{
  this._init (server);
}


/**
 * Init
 */
tws.prototype._init = function (server)
{

this.m_server = server;
this.method;
this.url;
this.delimiter;
this.headers = {"X-Api-Key": 123, "X-Auth-Key": "395fb7b657db2fb5656f34de3840e73c90b79c31"}; 
this.xhr;

}

/**
 * user 
 * 
 */
tws.prototype.user = function (data)
{
    console.log('Creating new user on tws');
    console.log(data);
    if (data.username && data.email && data.password){
        // call tws to create a new user

        var send = JSON.stringify(data);
        console.log(send);
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function(){
            console.log('Response');
            console.log(this.responseText);
        });
        xhr.open('POST', 'http://52.3.72.192:3000/app/user', true);
        for(var key in this.headers) {
                xhr.setRequestHeader(key, this.headers[key]);
        }
        xhr.send(send);
        return xhr;


    } else {
        console.log ("{error:'wrong user data'}");
        return "{error:'wrong user data'}";
    }
}


/**
 * login 
 * 
 */
tws.prototype.login = function (data)
{
var url = this.m_server+'/login';
var ptype = "POST";
var msg = "Login on tws ...";
    data.user_name = data.username;
    console.log(msg);
    console.log(data);
    if (data.username && data.password){
        // call tws to login
        var send = JSON.stringify(data);
        console.log(send);
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function(){
            console.log('Response');
            console.log(this.responseText);
        });
        xhr.open(ptype , url, true);
        for(var key in this.headers) {
                xhr.setRequestHeader(key, this.headers[key]);
        }
        xhr.send(send);
        return xhr;
    } else {
        console.log ("{error:'wrong user data'}");
        return "{error:'wrong user data'}";
    }
}

/**
 * 
 * 
 */
tws.prototype.getPhotolink = function ()
{
	this.url = this.m_server+'/app/photolink/lp';
        var lp = new LongPolling("GET", "http://52.3.72.192:3000/app/photolink/lp", "\n//----------//", this.headers);
        //var lp = new LongPolling("GET", "http://52.3.72.192:3000/app/photolink/lp", "\n//----------//", {"X-Api-Key": 1234, "X-Auth-Key": "4574eb62ff5337ce17f3d657f3b74cbcf3f9cc42"});
        lp.create();
	return lp;
}

/**
 * 
 * 
 */
tws.prototype.sendPhotolink = function (str)
{
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://52.3.72.192:3000/app/photolink/send/0/0', true);
        for(var key in this.headers) {
                xhr.setRequestHeader(key, this.headers[key]);
        }

        xhr.send(str);
}


/**
  * class User
  * 
  */

User = function (data)
{
  this._init (data);
}

User.prototype = new iData ();

/**
 * _init sets all User attributes to their default value. Make sure to call this
 * method within your class constructor
 */
User.prototype._init = function (data)
{
 
    if (data.username && data.email && data.password){
    this.username = data.username;
    this.email    = data.email;
    this.password = data.password;
    }
}

})( jQuery );

/** Class LongPolling
 *
 *
**/
function LongPolling(method, url, delimiter, headers) {
        this.method     = method;
        this.url        = url;
        this.delimiter  = delimiter || "\n//----------//";
        this.headers    = headers;
        //this.xhr        = this._createXHR();
        this.xhr        = null;
}

LongPolling.prototype = {
        _createXHR:     function() {
                var xhr = new XMLHttpRequest();
                xhr.open(this.method, this.url, true);
                for(var key in this.headers) {
                        xhr.setRequestHeader(key, this.headers[key]);
                }
                return xhr;
        },

        connect:        function() {
                var index = 0;

                this.xhr.onreadystatechange = function() {
                        if(this.xhr.readyState == 3) {
                                var i = this.xhr.responseText.lastIndexOf(this.delimiter);
                                if (i > index) {
                                        var newChunk = this.xhr.responseText.substr(index, (i - index));
                                        index = i + this.delimiter.length;
                                        if(newChunk != "alive?" && this.onData)
                                                setTimeout(this.onData.bind(this, newChunk), 0);

                                }
                        }
                }.bind(this);
                this.xhr.onabort = this.xhr.onerror = function() {
                        this.xhr = this._createXHR();
                        try {
                                this.connect();
                        } catch(err) {
                                setTimeout(this.connect.bind(this), 100);
                        }
                }.bind(this);
                this.xhr.send(null);
        },
        create: function() {
                this.xhr = this._createXHR();
        }
};



