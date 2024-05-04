(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"fairy_lamp_atlas_1", frames: [[862,561,770,516],[862,0,834,559],[0,761,549,394],[1698,0,230,163],[0,0,860,759],[551,947,82,95],[551,761,304,184],[635,947,59,85],[1634,561,322,610],[551,1079,506,373],[0,1157,446,199]]}
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



(lib.CachedBmp_6146 = function() {
	this.initialize(ss["fairy_lamp_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6145 = function() {
	this.initialize(ss["fairy_lamp_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6144 = function() {
	this.initialize(ss["fairy_lamp_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6143 = function() {
	this.initialize(ss["fairy_lamp_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6142 = function() {
	this.initialize(ss["fairy_lamp_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6141 = function() {
	this.initialize(ss["fairy_lamp_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6140 = function() {
	this.initialize(ss["fairy_lamp_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6139 = function() {
	this.initialize(ss["fairy_lamp_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6138 = function() {
	this.initialize(ss["fairy_lamp_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6137 = function() {
	this.initialize(ss["fairy_lamp_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["fairy_lamp_atlas_1"]);
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
	this.instance = new lib.CachedBmp_6146();
	this.instance.setTransform(16.45,8.45,0.4841,0.4841);

	this.instance_1 = new lib.CachedBmp_6145();
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
	this.instance = new lib.CachedBmp_6144();
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
	this.instance = new lib.CachedBmp_6143();
	this.instance.setTransform(333.8,127.8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_6142();
	this.instance_1.setTransform(263.55,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legsfairy, new cjs.Rectangle(263.6,0,430,379.5), null);


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
	this.instance = new lib.CachedBmp_6141();
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
	this.instance = new lib.CachedBmp_6137();
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

	this.instance_1 = new lib.CachedBmp_6140();
	this.instance_1.setTransform(58.9,101.25,0.5,0.5);

	this.instance_2 = new lib.leftpupil("synched",0);
	this.instance_2.setTransform(154.85,106.2,0.8648,0.9725,0,0,0,3.2,0.3);

	this.instance_3 = new lib.lefteye("synched",0);
	this.instance_3.setTransform(154.5,100.65,0.7264,0.8573,0,0,180,-0.2,0.1);

	this.instance_4 = new lib.CachedBmp_6139();
	this.instance_4.setTransform(59.2,102.15,0.5,0.5);

	this.instance_5 = new lib.leftpupil("synched",0);
	this.instance_5.setTransform(119.9,106.2,0.8648,0.9725,0,0,0,3.3,0.3);

	this.instance_6 = new lib.lefteye("synched",0);
	this.instance_6.setTransform(114.85,101.3,0.7514,0.8573,0,0,0,0,0.1);

	this.instance_7 = new lib.CachedBmp_6138();
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
(lib.fairylamp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [287];
	// timeline functions:
	this.frame_287 = function() {
		var _this = this;
		
		const d = new Date();
		const minutes = d.getMinutes();
		const seconds = d.getSeconds();
		
		if (minutes % 5 === 2 && seconds === 10) {
			_this.gotoAndPlay('0');
		}
		else {
			_this.gotoAndPlay('275');
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(287).call(this.frame_287).wait(1));

	// fairy
	this.instance = new lib.fairy();
	this.instance.setTransform(1368.8,-77.5,0.7894,0.7894,-18.7326,0,0,304.3,416.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:304.4,regY:418.9,scaleX:0.7884,scaleY:0.7884,rotation:-18.4653,x:1355.45,y:-67.8},0).wait(1).to({scaleX:0.7873,scaleY:0.7873,rotation:-18.1974,x:1341.4,y:-59.9},0).wait(1).to({scaleX:0.7863,scaleY:0.7863,rotation:-17.9296,x:1327.4,y:-51.95},0).wait(1).to({scaleX:0.7853,scaleY:0.7853,rotation:-17.6617,x:1313.3,y:-43.95},0).wait(1).to({scaleX:0.7842,scaleY:0.7842,rotation:-17.3938,x:1299.3,y:-36},0).wait(1).to({scaleX:0.7832,scaleY:0.7832,rotation:-17.1259,x:1285.25,y:-28.05},0).wait(1).to({scaleX:0.7822,scaleY:0.7822,rotation:-16.8581,x:1271.2,y:-20.15},0).wait(1).to({scaleX:0.7811,scaleY:0.7811,rotation:-16.5902,x:1257.15,y:-12.2},0).wait(1).to({scaleX:0.7801,scaleY:0.7801,rotation:-16.3223,x:1243.2,y:-4.25},0).wait(1).to({scaleX:0.7791,scaleY:0.7791,rotation:-16.0544,x:1229.15,y:3.7},0).wait(1).to({scaleX:0.778,scaleY:0.778,rotation:-15.7866,x:1215.1,y:11.65},0).wait(1).to({scaleX:0.777,scaleY:0.777,rotation:-15.5187,x:1201.15,y:19.6},0).wait(1).to({scaleX:0.7759,scaleY:0.7759,rotation:-15.2508,x:1187.05,y:27.55},0).wait(1).to({scaleX:0.7749,scaleY:0.7749,rotation:-14.9829,x:1173,y:35.5},0).wait(1).to({scaleX:0.7739,scaleY:0.7739,rotation:-14.7151,x:1159.05,y:43.45},0).wait(1).to({scaleX:0.7728,scaleY:0.7728,rotation:-14.4472,x:1144.95,y:51.4},0).wait(1).to({scaleX:0.7718,scaleY:0.7718,rotation:-14.1793,x:1130.95,y:59.35},0).wait(1).to({scaleX:0.7707,scaleY:0.7707,rotation:-13.9114,x:1116.9,y:67.35},0).wait(1).to({scaleX:0.7697,scaleY:0.7697,rotation:-13.6436,x:1102.9,y:75.25},0).wait(1).to({scaleX:0.7687,scaleY:0.7687,rotation:-13.3757,x:1088.9,y:83.2},0).wait(1).to({scaleX:0.7676,scaleY:0.7676,rotation:-13.1078,x:1074.85,y:91.15},0).wait(1).to({scaleX:0.7666,scaleY:0.7666,rotation:-12.8399,x:1060.8,y:99.1},0).wait(1).to({scaleX:0.7656,scaleY:0.7656,rotation:-12.5721,x:1046.75,y:107.1},0).wait(1).to({scaleX:0.7645,scaleY:0.7645,rotation:-12.3042,x:1032.75,y:115},0).wait(1).to({scaleX:0.7635,scaleY:0.7635,rotation:-12.0363,x:1018.75,y:123},0).wait(1).to({scaleX:0.7624,scaleY:0.7624,rotation:-11.7684,x:1004.7,y:130.85},0).wait(1).to({scaleX:0.7614,scaleY:0.7614,rotation:-11.5006,x:990.65,y:138.85},0).wait(1).to({scaleX:0.7604,scaleY:0.7604,rotation:-11.2327,x:976.6,y:146.8},0).wait(1).to({scaleX:0.7593,scaleY:0.7593,rotation:-10.9648,x:962.6,y:154.75},0).wait(1).to({scaleX:0.7583,scaleY:0.7583,rotation:-10.6969,x:948.55,y:162.65},0).wait(1).to({scaleX:0.7573,scaleY:0.7573,rotation:-10.4291,x:934.5,y:170.65},0).wait(1).to({scaleX:0.7562,scaleY:0.7562,rotation:-10.1612,x:920.55,y:178.6},0).wait(1).to({scaleX:0.7552,scaleY:0.7552,rotation:-9.8933,x:906.5,y:186.55},0).wait(1).to({scaleX:0.7541,scaleY:0.7541,rotation:-9.6254,x:892.45,y:194.45},0).wait(1).to({scaleX:0.7531,scaleY:0.7531,rotation:-9.3576,x:878.45,y:202.45},0).wait(1).to({scaleX:0.7521,scaleY:0.7521,rotation:-9.0897,x:864.4,y:210.4},0).wait(1).to({scaleX:0.751,scaleY:0.751,rotation:-8.8218,x:850.35,y:218.35},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-8.5539,x:836.3,y:226.25},0).wait(1).to({scaleX:0.7489,scaleY:0.7489,rotation:-8.2861,x:822.3,y:234.25},0).wait(1).to({scaleX:0.7479,scaleY:0.7479,rotation:-8.0182,x:808.3,y:242.2},0).wait(1).to({scaleX:0.7469,scaleY:0.7469,rotation:-7.7503,x:794.25,y:250.15},0).wait(1).to({scaleX:0.7458,scaleY:0.7458,rotation:-7.4824,x:780.25,y:258.1},0).wait(1).to({scaleX:0.7448,scaleY:0.7448,rotation:-7.2146,x:766.2,y:266.05},0).wait(1).to({scaleX:0.7438,scaleY:0.7438,rotation:-6.9467,x:752.2,y:273.95},0).wait(1).to({scaleX:0.7427,scaleY:0.7427,rotation:-6.6788,x:738.15,y:281.9},0).wait(1).to({scaleX:0.7417,scaleY:0.7417,rotation:-6.4109,x:724.1,y:289.85},0).wait(1).to({scaleX:0.7406,scaleY:0.7406,rotation:-6.1431,x:710.05,y:297.8},0).wait(1).to({scaleX:0.7396,scaleY:0.7396,rotation:-5.8752,x:696.05,y:305.75},0).wait(1).to({scaleX:0.7386,scaleY:0.7386,rotation:-5.6073,x:682.05,y:313.7},0).wait(1).to({scaleX:0.7375,scaleY:0.7375,rotation:-5.3394,x:668,y:321.6},0).wait(1).to({scaleX:0.7365,scaleY:0.7365,rotation:-5.0716,x:653.95,y:329.6},0).wait(1).to({scaleX:0.7355,scaleY:0.7355,rotation:-4.8037,x:639.95,y:337.5},0).wait(1).to({scaleX:0.7344,scaleY:0.7344,rotation:-4.5358,x:625.95,y:345.45},0).wait(1).to({scaleX:0.7334,scaleY:0.7334,rotation:-4.2679,x:611.85,y:353.4},0).wait(1).to({scaleX:0.7323,scaleY:0.7323,rotation:-4.0001,x:597.85,y:361.4},0).wait(1).to({scaleX:0.7313,scaleY:0.7313,rotation:-3.7322,x:583.85,y:369.3},0).wait(1).to({regY:416.6,rotation:-3.7315,x:583.7,y:367.65},0).wait(144).to({regX:304.3,regY:416.5,rotation:-3.7304,x:583.65},0).wait(1).to({regX:304.4,regY:418.9,rotation:-3.5338,x:591.6,y:377.8},0).wait(1).to({rotation:-3.3363,x:599.45,y:386.2},0).wait(1).to({rotation:-3.1389,x:607.2,y:394.6},0).wait(1).to({rotation:-2.9414,x:615,y:403.05},0).wait(1).to({rotation:-2.7439,x:622.85,y:411.5},0).wait(1).to({rotation:-2.5464,x:630.65,y:419.9},0).wait(1).to({rotation:-2.3489,x:638.4,y:428.3},0).wait(1).to({rotation:-2.1514,x:646.25,y:436.7},0).wait(1).to({rotation:-1.9539,x:654.05,y:445.15},0).wait(1).to({rotation:-1.7564,x:661.85,y:453.6},0).wait(1).to({rotation:-1.559,x:669.65,y:461.95},0).wait(1).to({rotation:-1.3615,x:677.45,y:470.4},0).wait(1).to({rotation:-1.164,x:685.25,y:478.8},0).wait(1).to({rotation:-0.9665,x:693,y:487.25},0).wait(1).to({rotation:-0.769,x:700.85,y:495.65},0).wait(1).to({rotation:-0.5715,x:708.65,y:504.1},0).wait(1).to({rotation:-0.374,x:716.45,y:512.45},0).wait(1).to({rotation:-0.1765,x:724.3,y:520.9},0).wait(1).to({rotation:0.0209,x:732.1,y:529.35},0).wait(1).to({rotation:0.2184,x:739.9,y:537.75},0).wait(1).to({rotation:0.4159,x:747.7,y:546.15},0).wait(1).to({rotation:0.6134,x:755.45,y:554.6},0).wait(1).to({rotation:0.8109,x:763.3,y:563},0).wait(1).to({rotation:1.0084,x:771.05,y:571.4},0).wait(1).to({rotation:1.2059,x:778.9,y:579.85},0).wait(1).to({rotation:1.4034,x:786.7,y:588.25},0).wait(1).to({rotation:1.6009,x:794.5,y:596.65},0).wait(1).to({rotation:1.7983,x:802.3,y:605.15},0).wait(1).to({rotation:1.9958,x:810.1,y:613.5},0).wait(1).to({rotation:2.1933,x:817.95,y:621.9},0).wait(1).to({rotation:2.3908,x:825.65,y:630.35},0).wait(1).to({rotation:2.5883,x:833.45,y:638.75},0).wait(1).to({rotation:2.7858,x:841.3,y:647.15},0).wait(1).to({rotation:2.9833,x:849.1,y:655.6},0).wait(1).to({rotation:3.1808,x:856.9,y:664},0).wait(1).to({rotation:3.3782,x:864.7,y:672.45},0).wait(1).to({rotation:3.5757,x:872.5,y:680.9},0).wait(1).to({rotation:3.7732,x:880.3,y:689.25},0).wait(1).to({rotation:3.9707,x:888.1,y:697.7},0).wait(1).to({rotation:4.1682,x:895.9,y:706.1},0).wait(1).to({rotation:4.3657,x:903.75,y:714.55},0).wait(1).to({rotation:4.5632,x:911.55,y:722.95},0).wait(1).to({rotation:4.7607,x:919.35,y:731.35},0).wait(1).to({rotation:4.9581,x:927.1,y:739.85},0).wait(1).to({rotation:5.1556,x:934.95,y:748.2},0).wait(1).to({rotation:5.3531,x:942.75,y:756.6},0).wait(1).to({rotation:5.5506,x:950.5,y:765.1},0).wait(1).to({rotation:5.7481,x:958.4,y:773.5},0).wait(1).to({rotation:5.9456,x:966.1,y:781.9},0).wait(1).to({rotation:6.1431,x:973.9,y:790.25},0).wait(1).to({rotation:6.3406,x:981.75,y:798.75},0).wait(1).to({rotation:6.538,x:989.55,y:807.15},0).wait(1).to({rotation:6.7355,x:997.35,y:815.55},0).wait(1).to({rotation:6.933,x:1005.15,y:823.95},0).wait(1).to({rotation:7.1305,x:1013,y:832.4},0).wait(1).to({rotation:7.328,x:1020.8,y:840.85},0).wait(1).to({rotation:7.5255,x:1028.6,y:849.25},0).wait(1).to({rotation:7.723,x:1036.4,y:857.65},0).wait(1).to({rotation:7.9205,x:1044.15,y:866.05},0).wait(1).to({rotation:8.1179,x:1051.95,y:874.5},0).wait(1).to({rotation:8.3154,x:1059.75,y:882.9},0).wait(1).to({rotation:8.5129,x:1067.55,y:891.3},0).wait(1).to({rotation:8.7104,x:1075.4,y:899.75},0).wait(1).to({rotation:8.9079,x:1083.15,y:908.15},0).wait(1).to({rotation:9.1054,x:1090.95,y:916.6},0).wait(1).to({rotation:9.3029,x:1098.8,y:925},0).wait(1).to({rotation:9.5004,x:1106.6,y:933.45},0).wait(1).to({rotation:9.6978,x:1114.35,y:941.85},0).wait(1).to({rotation:9.8953,x:1122.2,y:950.25},0).wait(1).to({rotation:10.0928,x:1129.95,y:958.65},0).wait(1).to({rotation:10.2903,x:1137.8,y:967.05},0).wait(1).to({rotation:10.4878,x:1145.6,y:975.5},0).to({_off:true},1).wait(14));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,-29.4,1703.3,1346.6000000000001);
// library properties:
lib.properties = {
	id: '0ABA2D76BB15453BA4CDA5E91DE0FDE8',
	width: 1136,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"imagesfairyLAMP/fairy_lamp_atlas_1.png?1713910387775", id:"fairy_lamp_atlas_1"}
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