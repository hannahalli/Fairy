(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"fairy_lamp_2_atlas_1", frames: [[862,561,770,516],[862,0,834,559],[0,761,549,394],[1698,0,230,163],[0,0,860,759],[551,947,82,95],[551,761,304,184],[635,947,59,85],[1634,561,322,610],[551,1079,506,373],[0,1157,446,199]]}
];


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



(lib.CachedBmp_10 = function() {
	this.initialize(ss["fairy_lamp_2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["fairy_lamp_2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["fairy_lamp_2_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["fairy_lamp_2_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["fairy_lamp_2_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["fairy_lamp_2_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["fairy_lamp_2_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["fairy_lamp_2_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["fairy_lamp_2_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["fairy_lamp_2_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["fairy_lamp_2_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
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


(lib.wingsfairy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wings
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(16.45,8.45,0.4841,0.4841);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(0,0,0.4841,0.4841);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wingsfairy, new cjs.Rectangle(0,0,403.7,270.6), null);


(lib.topfairy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// top
	this.instance = new lib.Bitmap1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.topfairy, new cjs.Rectangle(0,0,446,199), null);


(lib.skirt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// skirt
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.skirt, new cjs.Rectangle(0,0,274.5,197), null);


(lib.legsfairy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// LEGS
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(333.8,127.75,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_6();
	this.instance_1.setTransform(263.5,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legsfairy, new cjs.Rectangle(263.5,0,430,379.5), null);


(lib.leftpupil = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0AD9C").s().p("AgSAYQgDgEgBgFIAAgBIABgEQACgEAFgCQAEgBAFADQAEACABAEIAAADIAAABIAAADQgCAEgCABIgFACIgDABQgDAAgDgDgAAJAQQgCgCgBgEIAAgDQACgGAGAAIAAAAQAIABABAIIAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCAEgEAAIgBAAQgDAAgCgCgAgJgFQgFgDgBgFIAAgDQABgDACgDQADgEAFAAQAEAAACADQADADABAEIAAACQgBAEgDADQgDADgDAAIgFgBg");
	this.shape.setTransform(1.375,-6.1692);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66401B").s().p("AAACGQgggDgYgXQgPgPgHgUQgHgQgEgkQgDgeAAgTQABgcAKgTQAIgOATgWQAOgOAIgFQAOgGASAGQAIAEAVAMQAPAJAGAGQAFAFAKARQAVAmAEAWQACANAAAQIAAAfQABATgCALQgCAQgHAKQgHALgQAJQgaAPgbAAIgGAAgAABg1QgEACgCAEIgBAGIAAABQABAGADADQAEAFAEgCIAFgDQACgBACgDIABgEIAAAAIgBgFQgBgFgEgCQgDgCgDAAIgDAAgAAeg4QgGAAgCAHIAAACIAAACQABAEACACQADAEADgBQAEgBACgDQABgBAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAIAAgBIAAgCQgBgIgIgBgAADhRQgDAEAAAFIAAABIAAACQABAGAFADQAGADAGgFQADgEABgEIAAgFQgBgEgDgDQgDgDgEAAQgFAAgDAEg");
	this.shape_1.setTransform(-0.2469,-0.6267);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-14,18.5,26.8);


(lib.lefteye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_8_copy_copy
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-20.5,-23.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-23.7,41,47.5);


(lib.face1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MergedLayer_6
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.face1, new cjs.Rectangle(0,0,253,186.5), null);


(lib.skirtfairy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// skirt
	this.instance = new lib.skirt();
	this.instance.setTransform(130.15,98.5,0.9488,1,0,0,0,137.2,98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.skirtfairy, new cjs.Rectangle(0,0,260.5,197), null);


(lib.facefairy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACvCGQgggDgYgXQgPgOgIgVQgGgQgEgkQgEgeABgTQABgcAKgTQAHgPAUgVQANgPAIgEQAOgHATAHQAIADAVANQAPAJAGAGQAFAFALARQAVAmADAWQACANAAAQIABAfQAAATgBAKQgCARgHAKQgHALgQAJQgbAPgaAAIgHAAgAivCGQgggDgYgXQgPgPgIgUQgGgQgEgkQgEgeABgTQABgcAKgTQAHgOAUgWQANgOAIgFQAOgGATAGQAIAEAVAMQAPAJAGAGQAFAFALARQAVAmADAWQACANAAAQIABAfQAAATgBALQgCAQgHAKQgHALgQAJQgbAPgaAAIgHAAgAikgxQADACABAFIABADIgBgFQgBgFgDgCQgGgDgDABQgFACgCAEIgBAGIABgEQACgEAFgBIADgBQACAAAEACgAiIgtIAAgCQgBgIgHgBIgBAAQgFAAgDAHIAAACQADgGAFAAIABgBQAHABABAIgAirhRQgEAEABAFIAAADQgBgFAEgEQADgDAEAAQAEAAADADQAEADAAAEIABABIgBgFQAAgEgEgDQgDgDgEAAQgEAAgDAEg");
	this.shape.setTransform(134.7031,105.6108);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjzCHQgVgIgJgKQgGgIgGgSQgNgmABgUQABgQAIgUIAIgRIACgaQACgbAHgQQALgZAYgMQARgIAOAEIAIADQAFgBAFABQAFgOAOgDQAPgBAJALIAJAKIAIAEQAHADAIAMQAKAOACAIIABATQABAKAJAWIAQAnQAJAUAAAMQAAAJgGANIACAVQAAAQgDAHQgCAHgHAHQgHAIgIADIgJAGQgIAEgOADQgXAFgWAAQglAAglgNgACLCPQgdgFgKgGQgIgEgLgJQgFgGgDgEQgDgFgEgMQgFgOAAgIQABgGADgGIgBgDQgDgeABgOQABgaAPgyQAFgVAHgLQAJgPATgMQAMgIAXgKQARgIAKADIALAGIAOAGQAoARAZAlQAaAmABArQACAmgTAuQgGASgJAIQgKAKgZAIQgVAHgJACQgRAEgOAAIgDAAQgGADgKAAIgLgBg");
	this.shape_1.setTransform(134.7018,105.354);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggA0QgZgEgVgNQgSgKgMgQIgIAGQgFACgHAAIgHgBIgHgCIgDgEIgCgEIAAgJIADgJQAEgIAHgHIAHgGIAEgEQADgEAHgDQAHgFAGgBQAIgCAFAFQADACACAEIAEAIQACAGgEAKIgDAEIgDAEQAbAPATADQAQAEAggBQAXgCAKgCQAUgGAXgWIgDgDQgEgEgCgJIABgIQABgDAEgCQAEgDAKAAQAJACAHADQAFABAIAIIADADIABABIAKALIACADIAGAMIABAEIABANIgCAEQgDAEgCABIgGABIgEABIgGgBQgKgEgCgCIgDgEIgBAAIgCgBIgDADIAAABIgKAKQgJAJgWAIQgsAOghAAIgTgBg");
	this.shape_2.setTransform(134.2417,146.7806);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// face
	this.instance = new lib.face1();
	this.instance.setTransform(120,93.2,0.9488,1,0,0,0,126.5,93.2);

	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(58.9,101.2,0.5,0.5);

	this.instance_2 = new lib.leftpupil("synched",0);
	this.instance_2.setTransform(154.85,106.2,0.8648,0.9725,0,0,0,3.2,0.3);

	this.instance_3 = new lib.lefteye("synched",0);
	this.instance_3.setTransform(154.5,100.65,0.7264,0.8573,0,0,180,-0.2,0.1);

	this.instance_4 = new lib.CachedBmp_3();
	this.instance_4.setTransform(59.15,102.15,0.5,0.5);

	this.instance_5 = new lib.leftpupil("synched",0);
	this.instance_5.setTransform(119.9,106.2,0.8648,0.9725,0,0,0,3.3,0.3);

	this.instance_6 = new lib.lefteye("synched",0);
	this.instance_6.setTransform(114.85,101.3,0.7514,0.8573,0,0,0,0,0.1);

	this.instance_7 = new lib.CachedBmp_2();
	this.instance_7.setTransform(54.2,45.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.facefairy, new cjs.Rectangle(0,0,240.1,350.3), null);


(lib.fairy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// FAIRY
	this.instance = new lib.skirtfairy();
	this.instance.setTransform(230.8,457.2,1,1,0,0,0,130.1,98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:454.2},0).wait(3).to({y:452.2},0).wait(1).to({y:449.7},0).wait(2).to({y:447.2},0).wait(1).to({y:442.7},0).wait(1).to({y:438.2},0).wait(1).to({y:433.7},0).wait(1).to({y:429.2},0).wait(1).to({y:425.5},0).wait(1).to({y:416.7},0).wait(1).to({y:412.2},0).wait(1).to({y:409.7},0).wait(1).to({y:407.7},0).wait(1).to({y:405.2},0).wait(1).to({y:403.2},0).wait(1).to({y:401.2},0).wait(2).to({y:399.2},0).wait(1).to({y:397.7},0).wait(3).to({x:230.3,y:398.2},0).wait(5).to({x:230.8,y:397.7},0).wait(3).to({y:399.2},0).wait(1).to({y:401.2},0).wait(2).to({y:403.2},0).wait(1).to({y:405.2},0).wait(1).to({y:407.7},0).wait(1).to({y:409.7},0).wait(1).to({y:412.2},0).wait(1).to({y:416.7},0).wait(1).to({y:425.5},0).wait(1).to({y:429.2},0).wait(1).to({y:433.7},0).wait(1).to({y:438.2},0).wait(1).to({y:442.7},0).wait(1).to({y:447.2},0).wait(1).to({y:449.7},0).wait(2).to({y:452.2},0).wait(1).to({y:454.2},0).wait(5));

	// top_fairy
	this.instance_1 = new lib.topfairy();
	this.instance_1.setTransform(223.7,318.6,1,1,0,0,0,223.2,99.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({y:315.6},0).wait(3).to({y:313.6},0).wait(1).to({y:311.1},0).wait(2).to({y:308.6},0).wait(1).to({y:304.1},0).wait(1).to({y:299.6},0).wait(1).to({y:295.1},0).wait(1).to({y:290.6},0).wait(1).to({y:286.9},0).wait(1).to({y:278.1},0).wait(1).to({y:273.6},0).wait(1).to({y:271.1},0).wait(1).to({y:269.1},0).wait(1).to({y:266.6},0).wait(1).to({y:264.6},0).wait(1).to({y:262.6},0).wait(2).to({y:260.6},0).wait(1).to({y:259.1},0).wait(3).to({x:223.2,y:259.6},0).wait(5).to({x:223.7,y:259.1},0).wait(3).to({y:260.6},0).wait(1).to({y:262.6},0).wait(2).to({y:264.6},0).wait(1).to({y:266.6},0).wait(1).to({y:269.1},0).wait(1).to({y:271.1},0).wait(1).to({y:273.6},0).wait(1).to({y:278.1},0).wait(1).to({y:286.9},0).wait(1).to({y:290.6},0).wait(1).to({y:295.1},0).wait(1).to({y:299.6},0).wait(1).to({y:304.1},0).wait(1).to({y:308.6},0).wait(1).to({y:311.1},0).wait(2).to({y:313.6},0).wait(1).to({y:315.6},0).wait(5));

	// face_fairy
	this.instance_2 = new lib.facefairy();
	this.instance_2.setTransform(203.95,234.7,1,1,0,0,0,120,175.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({y:231.7},0).wait(3).to({y:229.7},0).wait(1).to({y:227.2},0).wait(2).to({y:224.7},0).wait(1).to({y:220.2},0).wait(1).to({y:215.7},0).wait(1).to({y:211.2},0).wait(1).to({y:206.7},0).wait(1).to({y:203},0).wait(1).to({y:194.2},0).wait(1).to({y:189.7},0).wait(1).to({y:187.2},0).wait(1).to({y:185.2},0).wait(1).to({y:182.7},0).wait(1).to({y:180.7},0).wait(1).to({y:178.7},0).wait(2).to({y:176.7},0).wait(1).to({y:175.2},0).wait(3).to({x:203.45,y:175.7},0).wait(5).to({x:203.95,y:175.2},0).wait(3).to({y:176.7},0).wait(1).to({y:178.7},0).wait(2).to({y:180.7},0).wait(1).to({y:182.7},0).wait(1).to({y:185.2},0).wait(1).to({y:187.2},0).wait(1).to({y:189.7},0).wait(1).to({y:194.2},0).wait(1).to({y:203},0).wait(1).to({y:206.7},0).wait(1).to({y:211.2},0).wait(1).to({y:215.7},0).wait(1).to({y:220.2},0).wait(1).to({y:224.7},0).wait(1).to({y:227.2},0).wait(2).to({y:229.7},0).wait(1).to({y:231.7},0).wait(5));

	// legs_fairy
	this.instance_3 = new lib.legsfairy();
	this.instance_3.setTransform(281.05,648.35,1,1,0,0,0,365.7,190.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({y:645.35},0).wait(3).to({y:643.35},0).wait(1).to({y:640.85},0).wait(2).to({y:638.35},0).wait(1).to({y:633.85},0).wait(1).to({y:629.35},0).wait(1).to({y:624.85},0).wait(1).to({y:620.35},0).wait(1).to({y:616.65},0).wait(1).to({y:607.85},0).wait(1).to({y:603.35},0).wait(1).to({y:600.85},0).wait(1).to({y:598.85},0).wait(1).to({y:596.35},0).wait(1).to({y:594.35},0).wait(1).to({y:592.35},0).wait(2).to({y:590.35},0).wait(1).to({y:588.85},0).wait(3).to({x:280.55,y:589.35},0).wait(5).to({x:281.05,y:588.85},0).wait(3).to({y:590.35},0).wait(1).to({y:592.35},0).wait(2).to({y:594.35},0).wait(1).to({y:596.35},0).wait(1).to({y:598.85},0).wait(1).to({y:600.85},0).wait(1).to({y:603.35},0).wait(1).to({y:607.85},0).wait(1).to({y:616.65},0).wait(1).to({y:620.35},0).wait(1).to({y:624.85},0).wait(1).to({y:629.35},0).wait(1).to({y:633.85},0).wait(1).to({y:638.35},0).wait(1).to({y:640.85},0).wait(2).to({y:643.35},0).wait(1).to({y:645.35},0).wait(5));

	// wings_fairy
	this.instance_4 = new lib.wingsfairy();
	this.instance_4.setTransform(226.4,280.45,1,1,0,0,0,201.8,135.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:202,regY:135.4,scaleX:0.9829,x:226.6,y:280.65},0).wait(1).to({regY:135.3,scaleX:0.8935,x:226.55,y:283.55},0).wait(1).to({regX:201.9,regY:135.2,scaleX:0.8143,x:226.5,y:277.45},0).wait(1).to({regY:135.3,scaleX:0.7027,y:280.55},0).wait(1).to({regX:202,scaleX:0.5864,y:277.55},0).wait(1).to({regY:135.2,scaleX:0.4773,y:275.45},0).wait(1).to({regY:135.3,scaleX:0.5864,y:273.05},0).wait(1).to({regX:201.9,scaleX:0.7027},0).wait(1).to({regY:135.2,scaleX:0.8143,y:270.45},0).wait(1).to({regX:202,regY:135.3,scaleX:0.8935,x:226.55,y:266.05},0).wait(1).to({scaleX:0.9829,x:226.6,y:261.55},0).wait(1).to({y:257.05},0).wait(1).to({regX:201.8,regY:135.2,scaleX:1,x:226.4,y:252.45},0).wait(1).to({y:248.75},0).wait(1).to({y:239.95},0).wait(1).to({regX:201.9,regY:135.3,scaleX:0.9502,x:226.5,y:235.55},0).wait(1).to({regX:202,scaleX:0.8935,x:226.55,y:233.05},0).wait(1).to({regX:201.9,regY:135.2,scaleX:0.8143,x:226.5,y:230.95},0).wait(1).to({regY:135.3,scaleX:0.7027,y:228.55},0).wait(1).to({regX:202,scaleX:0.5864,y:226.55},0).wait(1).to({regY:135.2,scaleX:0.4773,y:224.45},0).wait(1).to({regY:135.3,scaleX:0.5864,y:224.55},0).wait(1).to({regX:201.9,scaleX:0.7027,y:222.55},0).wait(1).to({regY:135.2,scaleX:0.8143,y:220.95},0).wait(1).to({regX:202,regY:135.3,scaleX:0.8935,x:226.55,y:221.05},0).wait(1).to({regX:201.9,scaleX:0.9502,x:226.5},0).wait(1).to({regX:201.8,regY:135.2,scaleX:1,x:225.9,y:221.45},0).wait(5).to({x:226.4,y:220.95},0).wait(1).to({regX:202,scaleX:0.9837,x:226.6},0).wait(1).to({regX:202.1,regY:135.3,scaleX:0.9693,x:226.7,y:221.05},0).wait(1).to({regX:201.9,scaleX:0.9502,x:226.5,y:222.55},0).wait(1).to({regX:202,scaleX:0.9309,x:226.6,y:224.55},0).wait(1).to({regX:202.1,scaleX:0.9128,x:226.65},0).wait(1).to({scaleX:0.8732,y:226.55},0).wait(1).to({scaleX:0.8469,y:228.55},0).wait(1).to({regX:201.9,scaleX:0.8143,scaleY:0.9845,x:226.5,y:231.1},0).wait(1).to({regX:201.8,scaleX:0.7515,scaleY:1.0329,x:226.4,y:233.1},0).wait(1).to({regX:201.9,scaleX:0.7027,scaleY:1,x:226.5,y:235.55},0).wait(1).to({regX:202.2,regY:135.4,scaleX:0.6501,scaleY:1.0306,x:226.65,y:240.2},0).wait(1).to({regX:202,regY:135.3,scaleX:0.5864,scaleY:1,x:226.5,y:248.85},0).wait(1).to({regY:135.2,scaleX:0.5323,scaleY:1.0122,x:226.55,y:252.45},0).wait(1).to({scaleX:0.4773,scaleY:1,x:226.5,y:256.95},0).wait(1).to({regX:202.1,regY:135.3,scaleX:0.5286,y:261.55},0).wait(1).to({regX:202,scaleX:0.5864,y:266.05},0).wait(1).to({scaleX:0.6488,x:226.55,y:270.55},0).wait(1).to({regX:201.9,scaleX:0.7027,x:226.5,y:273.05},0).wait(1).to({regY:135.2,scaleX:0.7812,y:272.95},0).wait(1).to({scaleX:0.8421,x:226.45,y:275.45},0).wait(1).to({regX:202,regY:135.3,scaleX:0.8935,x:226.55,y:277.55},0).wait(1).to({regX:202.1,scaleX:0.9425,x:226.6},0).wait(1).to({regX:202.2,regY:135.4,scaleX:0.9648,x:226.8,y:277.65},0).wait(1).to({regX:201.8,regY:135.2,scaleX:1,x:226.4,y:277.45},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,608.9,837.8);


// stage content:
(lib.RECOVER_fairylamp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,287];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		setInterval(() => {
		        const d = new Date();
		        const minutes = d.getMinutes();
		        const seconds = d.getSeconds();
		
		        if (minutes % 5 === 1 && seconds === 30) {
		            _this.gotoAndPlay('1');
		        }
		    }, 999);
	}
	this.frame_287 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		setInterval(() => {
		        const d = new Date();
		        const minutes = d.getMinutes();
		        const seconds = d.getSeconds();
		
		        if (minutes % 5 === 2 && seconds === 30) {
		            _this.gotoAndPlay('1');
		        }
		    }, 999);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(287).call(this.frame_287).wait(1));

	// fairy
	this.instance = new lib.fairy();
	this.instance.setTransform(996.7,0.6,1,1,-18.7327,0,0,304.1,417.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:304.4,regY:418.9,rotation:-18.5189,x:988.7,y:8.15},0).wait(1).to({rotation:-18.3046,x:979.95,y:14.55},0).wait(1).to({rotation:-18.0903,x:971.2,y:20.95},0).wait(1).to({rotation:-17.876,x:962.5,y:27.3},0).wait(1).to({rotation:-17.6617,x:953.75,y:33.65},0).wait(1).to({rotation:-17.4474,x:945.05,y:40},0).wait(1).to({rotation:-17.2331,x:936.3,y:46.35},0).wait(1).to({rotation:-17.0188,x:927.55,y:52.7},0).wait(1).to({rotation:-16.8045,x:918.8,y:59.05},0).wait(1).to({rotation:-16.5902,x:910.05,y:65.45},0).wait(1).to({rotation:-16.3759,x:901.35,y:71.8},0).wait(1).to({rotation:-16.1616,x:892.6,y:78.15},0).wait(1).to({rotation:-15.9473,x:883.9,y:84.5},0).wait(1).to({rotation:-15.733,x:875.15,y:90.85},0).wait(1).to({rotation:-15.5187,x:866.45,y:97.2},0).wait(1).to({rotation:-15.3044,x:857.65,y:103.6},0).wait(1).to({rotation:-15.0901,x:848.95,y:109.95},0).wait(1).to({rotation:-14.8758,x:840.2,y:116.3},0).wait(1).to({rotation:-14.6615,x:831.45,y:122.65},0).wait(1).to({rotation:-14.4472,x:822.7,y:129.05},0).wait(1).to({rotation:-14.2329,x:814,y:135.4},0).wait(1).to({rotation:-14.0186,x:805.25,y:141.75},0).wait(1).to({rotation:-13.8043,x:796.5,y:148.1},0).wait(1).to({rotation:-13.59,x:787.85,y:154.5},0).wait(1).to({rotation:-13.3757,x:779.05,y:160.9},0).wait(1).to({rotation:-13.1614,x:770.35,y:167.25},0).wait(1).to({rotation:-12.9471,x:761.55,y:173.55},0).wait(1).to({rotation:-12.7328,x:752.8,y:179.95},0).wait(1).to({rotation:-12.5185,x:744.1,y:186.3},0).wait(1).to({rotation:-12.3042,x:735.35,y:192.65},0).wait(1).to({rotation:-12.0899,x:726.65,y:199},0).wait(1).to({rotation:-11.8756,x:717.95,y:205.4},0).wait(1).to({rotation:-11.6613,x:709.15,y:211.75},0).wait(1).to({rotation:-11.447,x:700.45,y:218.1},0).wait(1).to({rotation:-11.2327,x:691.7,y:224.45},0).wait(1).to({rotation:-11.0184,x:683,y:230.75},0).wait(1).to({rotation:-10.8041,x:674.2,y:237.15},0).wait(1).to({rotation:-10.5898,x:665.5,y:243.5},0).wait(1).to({rotation:-10.3755,x:656.75,y:249.9},0).wait(1).to({rotation:-10.1612,x:648.05,y:256.3},0).wait(1).to({rotation:-9.9469,x:639.25,y:262.6},0).wait(1).to({rotation:-9.7326,x:630.55,y:268.95},0).wait(1).to({rotation:-9.5183,x:621.8,y:275.35},0).wait(1).to({rotation:-9.304,x:613.1,y:281.75},0).wait(1).to({rotation:-9.0897,x:604.4,y:288.05},0).wait(1).to({rotation:-8.8754,x:595.65,y:294.45},0).wait(1).to({rotation:-8.6611,x:586.95,y:300.75},0).wait(1).to({rotation:-8.4468,x:578.2,y:307.15},0).wait(1).to({rotation:-8.2325,x:569.45,y:313.5},0).wait(1).to({rotation:-8.0182,x:560.7,y:319.85},0).wait(1).to({rotation:-7.8039,x:552,y:326.2},0).wait(1).to({rotation:-7.5896,x:543.2,y:332.55},0).wait(1).to({rotation:-7.3753,x:534.5,y:339},0).wait(1).to({rotation:-7.161,x:525.7,y:345.3},0).wait(1).to({rotation:-6.9467,x:517,y:351.65},0).wait(1).to({rotation:-6.7324,x:508.25,y:358},0).wait(1).to({rotation:-6.5181,x:499.55,y:364.4},0).wait(1).to({rotation:-6.3038,x:490.8,y:370.75},0).wait(1).to({rotation:-6.0895,x:482.1,y:377.1},0).wait(1).to({rotation:-5.8752,x:473.35,y:383.5},0).wait(1).to({rotation:-5.6609,x:464.55,y:389.8},0).wait(1).to({rotation:-5.4466,x:455.9,y:396.15},0).wait(1).to({rotation:-5.2323,x:447.15,y:402.5},0).wait(1).to({rotation:-5.018,x:438.4,y:408.9},0).wait(1).to({rotation:-4.8037,x:429.7,y:415.2},0).wait(1).to({rotation:-4.5894,x:420.9,y:421.6},0).wait(1).to({rotation:-4.3751,x:412.15,y:428},0).wait(1).to({rotation:-4.1608,x:403.45,y:434.3},0).wait(1).to({rotation:-3.9465,x:394.75,y:440.65},0).wait(1).to({rotation:-3.7322,x:385.95,y:447},0).wait(1).to({regX:304.2,regY:417.8,rotation:-3.7314,x:385.6,y:445.65},0).wait(144).to({rotation:-3.7305},0).wait(1).to({regX:304.4,regY:418.9,rotation:-3.3881,x:393.4,y:451.25},0).wait(1).to({rotation:-3.0449,x:401.05,y:455.8},0).wait(1).to({rotation:-2.7017,x:408.65,y:460.35},0).wait(1).to({rotation:-2.3585,x:416.3,y:464.9},0).wait(1).to({rotation:-2.0153,x:423.9,y:469.45},0).wait(1).to({rotation:-1.6721,x:431.45,y:473.9},0).wait(1).to({rotation:-1.3289,x:439.05,y:478.5},0).wait(1).to({rotation:-0.9857,x:446.7,y:483},0).wait(1).to({rotation:-0.6425,x:454.35,y:487.55},0).wait(1).to({rotation:-0.2993,x:461.95,y:492.1},0).wait(1).to({rotation:0.0439,x:469.55,y:496.65},0).wait(1).to({rotation:0.3872,x:477.1,y:501.15},0).wait(1).to({rotation:0.7304,x:484.7,y:505.7},0).wait(1).to({rotation:1.0736,x:492.35,y:510.2},0).wait(1).to({rotation:1.4168,x:499.95,y:514.7},0).wait(1).to({rotation:1.76,x:507.6,y:519.3},0).wait(1).to({rotation:2.1032,x:515.2,y:523.8},0).wait(1).to({rotation:2.4464,x:522.75,y:528.35},0).wait(1).to({rotation:2.7896,x:530.4,y:532.9},0).wait(1).to({rotation:3.1328,x:538,y:537.45},0).wait(1).to({rotation:3.476,x:545.6,y:542},0).wait(1).to({rotation:3.8192,x:553.2,y:546.5},0).wait(1).to({rotation:4.1624,x:560.85,y:551.05},0).wait(1).to({rotation:4.5056,x:568.45,y:555.55},0).wait(1).to({rotation:4.8488,x:576.05,y:560.15},0).wait(1).to({rotation:5.192,x:583.65,y:564.7},0).wait(1).to({rotation:5.5352,x:591.3,y:569.2},0).wait(1).to({rotation:5.8784,x:598.85,y:573.75},0).wait(1).to({rotation:6.2216,x:606.45,y:578.3},0).wait(1).to({rotation:6.5649,x:614.05,y:582.8},0).wait(1).to({rotation:6.9081,x:621.7,y:587.3},0).wait(1).to({rotation:7.2513,x:629.3,y:591.85},0).wait(1).to({rotation:7.5945,x:636.95,y:596.4},0).wait(1).to({rotation:7.9377,x:644.55,y:600.95},0).wait(1).to({rotation:8.2809,x:652.1,y:605.5},0).wait(1).to({rotation:8.6241,x:659.75,y:610},0).wait(1).to({rotation:8.9673,x:667.3,y:614.5},0).wait(1).to({rotation:9.3105,x:675,y:619.1},0).wait(1).to({rotation:9.6537,x:682.55,y:623.6},0).wait(1).to({rotation:9.9969,x:690.15,y:628.15},0).wait(1).to({rotation:10.3401,x:697.75,y:632.7},0).wait(1).to({rotation:10.6833,x:705.35,y:637.25},0).wait(1).to({rotation:11.0265,x:713.05,y:641.7},0).wait(1).to({rotation:11.3697,x:720.55,y:646.25},0).wait(1).to({rotation:11.7129,x:728.2,y:650.85},0).wait(1).to({rotation:12.0561,x:735.85,y:655.35},0).wait(1).to({rotation:12.3994,x:743.4,y:659.9},0).wait(1).to({rotation:12.7426,x:751.05,y:664.45},0).wait(1).to({rotation:13.0858,x:758.65,y:668.9},0).wait(1).to({rotation:13.429,x:766.25,y:673.5},0).wait(1).to({rotation:13.7722,x:773.9,y:678},0).wait(1).to({rotation:14.1154,x:781.45,y:682.6},0).wait(1).to({rotation:14.4586,x:789.05,y:687.1},0).wait(1).to({rotation:14.8018,x:796.7,y:691.6},0).wait(1).to({rotation:15.145,x:804.25,y:696.2},0).wait(1).to({rotation:15.4882,x:811.9,y:700.75},0).wait(1).to({rotation:15.8314,x:819.55,y:705.25},0).wait(1).to({rotation:16.1746,x:827.1,y:709.75},0).wait(1).to({rotation:16.5178,x:834.75,y:714.3},0).wait(1).to({rotation:16.861,x:842.3,y:718.85},0).wait(1).to({rotation:17.2042,x:849.95,y:723.4},0).wait(1).to({rotation:17.5474,x:857.55,y:727.85},0).wait(1).to({rotation:17.8906,x:865.15,y:732.45},0).wait(1).to({rotation:18.2339,x:872.75,y:736.95},0).wait(1).to({rotation:18.5771,x:880.4,y:741.45},0).wait(1).to({rotation:18.9203,x:887.95,y:746},0).wait(1).to({rotation:19.2635,x:895.6,y:750.55},0).wait(1).to({rotation:19.6067,x:903.2,y:755.1},0).wait(1).to({rotation:19.9499,x:910.85,y:759.6},0).wait(1).to({rotation:20.2931,x:918.4,y:764.15},0).wait(1).to({rotation:20.6363,x:926,y:768.7},0).wait(1).to({rotation:20.9795,x:933.6,y:773.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(389.6,223.2,1030.6999999999998,1050.1);
// library properties:
lib.properties = {
	id: '0ABA2D76BB15453BA4CDA5E91DE0FDE8',
	width: 640,
	height: 1136,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"imagesfairyLAMP/fairy_lamp_2_atlas_1.png?1714131642893", id:"fairy_lamp_2_atlas_1"}
	],
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
an.compositions['0ABA2D76BB15453BA4CDA5E91DE0FDE8'] = {
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