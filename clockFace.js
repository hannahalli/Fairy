(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.clock = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AGAKnQj+gWiEAAQiEAAjDARIiZAJQiDAAAAhIQAAhGCUAAIBeAGIBaAEQBrAAAYg3QAYg4AAjpIgKpJQgChogcgiQgegihVAAIhWAEIhZAGQh2gBAAhHQAAhGBwAAIByAFIB3AFICggEIBygGQBCAAARAZIAMBAIgDAxIgQGIIAADkIADCoIAGCoQADCMCIgBIBjgEIBlgGQCQAAABBHQAABHiFAAg");
	this.shape.setTransform(576,197.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AGBKnQj/gWiEAAQiEAAjDARIiZAJQiDAAAAhIQAAhGCUAAIBeAGIBaAEQBrAAAXg3QAZg4AAjpIgKpJQgChogcgiQgegihVAAIhXAEIhYAGQh2gBAAhHQAAhGBwAAIByAFIB4AFICfgEIBygGQBDAAAPAZIANBAIgEAxIgOGIIAADkIACCoIAHCoQACCMCIgBIBjgEIBkgGQCRAAAABHQABBHiFAAg");
	this.shape_1.setTransform(467.8,197.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("ApnISQjbi9AAlMQAAlRDljDQDjjDGMgBQF5ABDcC6QDcC8AAE/QAAFajkDHQjjDHmIAAQl/AAjci9gAo1gMIAAAdQAAEJCSCRQCRCREJAAQEPAACbieQCaieAAkVQAAkJiRiNQiRiPkOABQoqAAgWItg");
	this.shape_2.setTransform(371.275,428);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AGBKnQj+gWiEAAQiFAAjDARIiaAJQiBAAAAhIQAAhGCTAAIBfAHIBaADQBqAAAXg3QAag4AAjpIgKpJQgDhngdgjQgdgihUAAIhYAEIhYAGQh2AAAAhIQAAhGBwAAIByAFIB3AFICggEIBygGQBCAAAQAZIAMBAIgDAwIgPGJIAADkIAECoIAFCoQAECMCIgBIBigEIBkgGQCSABgBBGQAABHiFAAg");
	this.shape_3.setTransform(266.35,428);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("Ao3J7Qi6hWAAh7QAAg6A4goQA5goBRAAQBCABAxAdQAxAdAAAoQAAA7hYAdQBeBxEiAAQEbAACniXQCmiXAJkGQiqDOmvAAQk6AAjFiAQjEh8AAjLQAAjUDXiNQDZiMFKgBQF2ABDWCxQDXCxAAE2QAAFojvDPQjvDOmkAAQkKAAi6hUgAl+nfQiMBfAACWQAACVCFBWQCEBXDhAAQDrAACGhXQCHhWAAiWQAAiaiHhdQiIhejYAAQjjABiMBgg");
	this.shape_4.setTransform(295.125,759.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("ApIJYQjgh4AAjFQAAi9DUhsQBPgoCFghQimhAg8g5Qg8g5AAhbQgBiaDDhpQDDhnEbgBQEdABDCBnQDDBpAACaQAABbg+A5Qg+A5ikBAQB/AhBTAoQDTBqAAC/QAADBjcB6QjdB5llAAQlyAAjhh3gAmHBDQiTBOAACIQAACDCVBSQCWBSDxAAQDxAACXhSQCWhSAAiDQgBiEiQhQQiThPjtAAQkEAAiSBNgAkmoBQh1A9AABgQAABVBzA1QByA2C4AAQC4AAByg2QBxg1AAhYQAAhfh1g8Qh0g+iyAAQi1AAhzA/g");
	this.shape_5.setTransform(323.9,1070);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AkeIoQABkECRjDQB3idF+jSQCdhYAVg4QhnA7iegBQjCAAi5hdIh8g+QhEghhRAAQjDABAACmIAPBaIAXBpQABAjgjAYQgjAYgyAAQh5AAAAhXIANhoIANhuIgJh6IgJhxQAAhTBqAAQBYABAABGIgMA7IgFAWQBKhSA9gbQA8gcBnAAQCUgBDHBoQDfBzB5AAQB/AAAfg7IgZAAQgqAAgjgYQgigZAAgfQAAgmArgcQAsgbA9gBQDHABAAC0QAACGhjBlQg/A/hKAwIiFBRQjOB2hKBmQhuCQAADNIADAsIAGBYQAAB/iVABQifAAAAing");
	this.shape_6.setTransform(558.05,1317.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("ApPIkQjfitAAkpQAAluD1jXQD1jYGeAAQD+AACzBWQCxBUgBB6QAAA4g6ApQg6AphQAAQg/gBgugfQgvgfAAgsQAAg+BUgTQhahskOAAQkPAAiqCZQioCZgWEHQC+jdG2AAQFKAADRCBQDQCCAADKQAADYjfCMQjhCLleAAQmCABjeisgAlngJQiQBZABCaQAACeCRBeQCOBeDuAAQDoAACUhhQCShiAAiaQAAiViPhaQiRhbjrAAQj0AAiNBag");
	this.shape_7.setTransform(883.35,1375.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663300").s().p("ApCJXQjYhmAAiUQAAhJBFgxQBFgyBlAAQBPAAAyAeQAyAfAAAyQAAAjgkAZQghAZgyAAQglACABANQgBBCCgA2QCeA2DEAAQDxAACdhlQCbhkAAicQAAiViDhVQiEhWjmAAQkYAAinBtIhcA3QgcANgpAEIgOAAQh1AAABhYQAAgDADgFIAomIIAGhuQADhwAXgZQAUgZBaAAIA3AAICVAAICuAAIF0AAICFgCIB7gEQB6AAAAB3IgEAOQAAA1AZBHIAMAsQAABAhnAAQhgAAgGheQgGhxiPAAIp3AAQhLAAgJBIIglFEQDshtEcAAQFSAADFB4QDEB5AADPQAADjjqCNQjqCMl5AAQk3AAjZhmg");
	this.shape_8.setTransform(1207.4,1296.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AI9KxQhfgKiKAAIj+ALIj9ALQhzAAAAhDQAAhICMAAIBZAEIBXAEQCYAAAAioIAAh8IuoAAQiLAAAAhRQAAghAggfIMiqZQB+hqA9gfQA8gfBOAAQCkAAAACPIAAK6IFkAAQBkAAAABFQAABEhqAAIleAAIAAB8QAACoCIAAICkgIQB/AAAABFQAABGhtAAgApVCNIMPAAIAVqVg");
	this.shape_9.setTransform(1431.575,1044.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663300").s().p("ApLJPQjjhuAAimQAAhfBThCQBRhCB5AAQBOAAAzAfQAxAgAAAyQAABmiyAAIgiAAIAAAOQAABjClBJQCmBJDeAAQD7AACghhQCghgAAiVQAAkHnAAAQh1AAh+ATIg0AEQhJAAAAg1QAAgYAyghIJzmcIq8AAQh2AAgoAKQhLAQAAA/IAFA6IAHA6QAABqhqAAQhnAAABhXIAEhKIAFhKIAAhVIAAg+QAAg3AegNQAegNB5AAILiAAIDOgEICogCQCyAAAABIQAAAuhMAxIosFlIAwAAIAoAAQEAAACmBuQCkBtAACtQAADWjqCIQjqCHlwAAQlSAAjkhug");
	this.shape_10.setTransform(1472.4,761.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663300").s().p("AAiJcQjhhzioAAQiqAAgrBRIAlAAQBXAAAAA7QAABbiWAAQhlgBg9g5Qg+g6AAhhQAAliLZibIDYgvQFuhOAAi7QAAh9iEhJQiDhJjlAAQjLAAiEA2QiFA3gaBgQCkAIAABWQABA0g6AmQg6AmhUAAQhoAAg9gvQg/gwABhNQAAimDghvQDfhvFJgBQFBABDMBwQDLBwAACyQAAB6hhBdQhjBdivAtIlsBWQjbAyiFAuQhhAjhEA0QhEA1gOBLQCIhhDAAAQCzAADEBoQDaB1B1AAQBWAAA0gmQA0gmAAg6IgMgtQgxAhg6AAQiEAAAAhVQAAgvA0geQAzgfBUAAQBxAABEA1QBEA3AABZQgBB9h1BZQh1BaiqAAQihgBjghzg");
	this.shape_11.setTransform(1433.95,416.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#663300").s().p("AGAKnQj+gWiDAAQiFAAjDARIiaAJQiCAAABhIQAAhFCTAAIBeAFIBaAFQBrAAAXg4QAag4AAjpIgKpKQgEhmgcgjQgdgihVgBIhWAGIhZAEQh2AAAAhHQAAhGBwAAIByAFIB3AFICggEIBygGQBDAAAQAZIALBAIgCAxIgQGIIAADkIAECoIAFCoQAECMCIAAIBigGIBlgEQCRAAgBBGQABBHiGAAg");
	this.shape_12.setTransform(1218,209.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#663300").s().p("AAiJcQjhhzioAAQiqAAgrBRIAlAAQBXAAAAA6QAABciXgBQhjABg/g6Qg9g6AAhhQAAliLZibIDYguQFthQAAi6QAAh9iDhJQiDhJjlAAQjKAAiGA2QiFA4gYBfQCjAHAABXQAAA1g5AlQg6AmhUAAQhnAAg/gwQg9gvAAhNQgBimDhhvQDfhwFJAAQFBAADMBxQDMBwAACyQAAB6hiBdQhjBdivAtIlsBWQjaAyiGAvQhhAihEA0QhDA1gQBLQCJhhDBAAQCyAADEBoQDaB1B1gBQBWAAA0glQA0gmAAg6IgLgtQgyAhg6AAQiEAAAAhVQAAguA0gfQA0gfBUABQBwAABEA1QBEA2AABZQAAB+h3BYQh0BaiqgBQigAAjhhzg");
	this.shape_13.setTransform(950.9,131.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#663300").s().p("AGAKnQj+gWiEAAQiEAAjDARIiZAJQiDAAAAhIQAAhFCUgBIBeAGIBaAFQBrAAAYg4QAZg4AAjpIgLpKQgDhngcgiQgdgihVgBIhWAGIhZAEQh2AAAAhHQAAhGBwAAIByAFIB3AFICggEIBygGQBDAAAQAZIALBAIgCAxIgQGIIAADkIADCoIAGCoQADCMCJAAIBigFIBlgGQCQAAABBHQAABHiGAAg");
	this.shape_14.setTransform(797.5,131.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#33484F").ss(1,1,1).p("ACZAAIkxAA");
	this.shape_15.setTransform(848.15,748.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#663300").s().p("Ak2E3QhohngUiJQgGggAAgiIEyAAIkyAAIAAgFQAAi1CCiCQCBiBC1AAQC2AACCCBQCBCCAAC1QAAAkgGAjQgUCJhnBnQiCCCi2AAQi1AAiBiCgAm4AFg");
	this.shape_16.setTransform(876.925,747.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clock, new cjs.Rectangle(143.3,0,1390.1000000000001,1509.6), null);


// stage content:
(lib.Untitled3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// clock
	this.instance = new lib.clock();
	this.instance.setTransform(683.75,666.05,0.8824,0.8824,0,0,0,766.6,754.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(901.8,1024,458.60000000000014,308.0999999999999);
// library properties:
lib.properties = {
	id: '013C18823E96494DAD68883D76F5B2D6',
	width: 1536,
	height: 2048,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['013C18823E96494DAD68883D76F5B2D6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;