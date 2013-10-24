goog.provide('rvb.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('rvb.util');
goog.require('cljs.core.async');
goog.require('rvb.util');
rvb.model.Constructable = {};
rvb.model.construct = (function construct(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.rvb$model$Constructable$construct$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.rvb$model$Constructable$construct$arity$1(this$);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (rvb.model.construct[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (rvb.model.construct["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Constructable.construct",this$);
}
}
})().call(null,this$);
}
});
rvb.model.Renderable = {};
rvb.model.render_BANG_ = (function render_BANG_(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.rvb$model$Renderable$render_BANG_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.rvb$model$Renderable$render_BANG_$arity$1(this$);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (rvb.model.render_BANG_[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (rvb.model.render_BANG_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.render!",this$);
}
}
})().call(null,this$);
}
});
rvb.model.erase_BANG_ = (function erase_BANG_(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.rvb$model$Renderable$erase_BANG_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.rvb$model$Renderable$erase_BANG_$arity$1(this$);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (rvb.model.erase_BANG_[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (rvb.model.erase_BANG_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.erase!",this$);
}
}
})().call(null,this$);
}
});
rvb.model.Collideable = {};
rvb.model.bounds = (function bounds(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.rvb$model$Collideable$bounds$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.rvb$model$Collideable$bounds$arity$1(this$);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (rvb.model.bounds[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (rvb.model.bounds["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Collideable.bounds",this$);
}
}
})().call(null,this$);
}
});
rvb.model.collides_QMARK_ = (function collides_QMARK_(this$,object){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.rvb$model$Collideable$collides_QMARK_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.rvb$model$Collideable$collides_QMARK_$arity$2(this$,object);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (rvb.model.collides_QMARK_[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (rvb.model.collides_QMARK_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Collideable.collides?",this$);
}
}
})().call(null,this$,object);
}
});
rvb.model.Movable = {};
rvb.model.move = (function move(this$,length){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.rvb$model$Movable$move$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.rvb$model$Movable$move$arity$2(this$,length);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (rvb.model.move[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (rvb.model.move["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Movable.move",this$);
}
}
})().call(null,this$,length);
}
});
rvb.model.DeathIncarnate = {};
rvb.model.orient = (function orient(this$,degree){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.rvb$model$DeathIncarnate$orient$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.rvb$model$DeathIncarnate$orient$arity$2(this$,degree);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (rvb.model.orient[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (rvb.model.orient["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DeathIncarnate.orient",this$);
}
}
})().call(null,this$,degree);
}
});
rvb.model.dist = (function dist(this$,target){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.rvb$model$DeathIncarnate$dist$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.rvb$model$DeathIncarnate$dist$arity$2(this$,target);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (rvb.model.dist[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (rvb.model.dist["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DeathIncarnate.dist",this$);
}
}
})().call(null,this$,target);
}
});
rvb.model.target_angle = (function target_angle(this$,target){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.rvb$model$DeathIncarnate$target_angle$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.rvb$model$DeathIncarnate$target_angle$arity$2(this$,target);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (rvb.model.target_angle[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (rvb.model.target_angle["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DeathIncarnate.target-angle",this$);
}
}
})().call(null,this$,target);
}
});
rvb.model.find_target = (function find_target(this$,objects){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.rvb$model$DeathIncarnate$find_target$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.rvb$model$DeathIncarnate$find_target$arity$2(this$,objects);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (rvb.model.find_target[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (rvb.model.find_target["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DeathIncarnate.find-target",this$);
}
}
})().call(null,this$,objects);
}
});
rvb.model.turret_endpoint = (function turret_endpoint(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.rvb$model$DeathIncarnate$turret_endpoint$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.rvb$model$DeathIncarnate$turret_endpoint$arity$1(this$);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (rvb.model.turret_endpoint[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (rvb.model.turret_endpoint["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DeathIncarnate.turret-endpoint",this$);
}
}
})().call(null,this$);
}
});
rvb.model.fire = (function fire(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.rvb$model$DeathIncarnate$fire$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.rvb$model$DeathIncarnate$fire$arity$1(this$);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (rvb.model.fire[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (rvb.model.fire["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DeathIncarnate.fire",this$);
}
}
})().call(null,this$);
}
});
rvb.model.take_damage = (function take_damage(this$,damage){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.rvb$model$DeathIncarnate$take_damage$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.rvb$model$DeathIncarnate$take_damage$arity$2(this$,damage);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (rvb.model.take_damage[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (rvb.model.take_damage["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DeathIncarnate.take-damage",this$);
}
}
})().call(null,this$,damage);
}
});
rvb.model.die_BANG_ = (function die_BANG_(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.rvb$model$DeathIncarnate$die_BANG_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.rvb$model$DeathIncarnate$die_BANG_$arity$1(this$);
} else
{var x__3428__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (rvb.model.die_BANG_[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (rvb.model.die_BANG_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DeathIncarnate.die!",this$);
}
}
})().call(null,this$);
}
});
goog.provide('rvb.model.Canvas');

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
rvb.model.Canvas = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
rvb.model.Canvas.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3382__auto__){var self__ = this;
var h__3249__auto__ = self__.__hash;if(!((h__3249__auto__ == null)))
{return h__3249__auto__;
} else
{var h__3249__auto____$1 = cljs.core.hash_imap.call(null,this__3382__auto__);self__.__hash = h__3249__auto____$1;
return h__3249__auto____$1;
}
});
rvb.model.Canvas.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3387__auto__,k__3388__auto__){var self__ = this;
return this__3387__auto__.cljs$core$ILookup$_lookup$arity$3(this__3387__auto__,k__3388__auto__,null);
});
rvb.model.Canvas.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3389__auto__,k98919,else__3390__auto__){var self__ = this;
if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k98919,else__3390__auto__);
} else
{return null;
}
});
rvb.model.Canvas.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3394__auto__,k__3395__auto__,G__98918){var self__ = this;
var pred__98921 = cljs.core.keyword_identical_QMARK_;var expr__98922 = k__3395__auto__;return (new rvb.model.Canvas(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3395__auto__,G__98918),null));
});
rvb.model.Canvas.prototype.rvb$model$Constructable$ = true;
rvb.model.Canvas.prototype.rvb$model$Constructable$construct$arity$1 = (function (this$){var self__ = this;
var canvas_object = document.getElementById("game");return cljs.core.merge.call(null,this$,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"canvas","canvas",3941165258),canvas_object,new cljs.core.Keyword(null,"width","width",1127031096),canvas_object.width,new cljs.core.Keyword(null,"height","height",4087841945),canvas_object.height,new cljs.core.Keyword(null,"bg-color","bg-color",2612345677),"white",new cljs.core.Keyword(null,"context","context",1965435169),canvas_object.getContext("2d")], true));
});
rvb.model.Canvas.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3401__auto__,writer__3402__auto__,opts__3403__auto__){var self__ = this;
var pr_pair__3404__auto__ = (function (keyval__3405__auto__){return cljs.core.pr_sequential_writer.call(null,writer__3402__auto__,cljs.core.pr_writer,""," ","",opts__3403__auto__,keyval__3405__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__3402__auto__,pr_pair__3404__auto__,"#rvb.model.Canvas{",", ","}",opts__3403__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
rvb.model.Canvas.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3392__auto__,entry__3393__auto__){var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__3393__auto__))
{return this__3392__auto__.cljs$core$IAssociative$_assoc$arity$3(this__3392__auto__,cljs.core._nth.call(null,entry__3393__auto__,0),cljs.core._nth.call(null,entry__3393__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3392__auto__,entry__3393__auto__);
}
});
rvb.model.Canvas.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3399__auto__){var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
rvb.model.Canvas.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3391__auto__){var self__ = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});
rvb.model.Canvas.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3383__auto__,other__3384__auto__){var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__3384__auto__;if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__3383__auto__.constructor === other__3384__auto__.constructor);if(and__3941__auto____$1)
{return cljs.core.equiv_map.call(null,this__3383__auto__,other__3384__auto__);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rvb.model.Canvas.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3386__auto__,G__98918){var self__ = this;
return (new rvb.model.Canvas(G__98918,self__.__extmap,self__.__hash));
});
rvb.model.Canvas.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3385__auto__){var self__ = this;
return self__.__meta;
});
rvb.model.Canvas.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3396__auto__,k__3397__auto__){var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__3397__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3396__auto__),self__.__meta),k__3397__auto__);
} else
{return (new rvb.model.Canvas(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3397__auto__)),null));
}
});
rvb.model.Canvas.cljs$lang$type = true;
rvb.model.Canvas.cljs$lang$ctorPrSeq = (function (this__3421__auto__){return cljs.core.list.call(null,"rvb.model/Canvas");
});
rvb.model.Canvas.cljs$lang$ctorPrWriter = (function (this__3421__auto__,writer__3422__auto__){return cljs.core._write.call(null,writer__3422__auto__,"rvb.model/Canvas");
});
rvb.model.__GT_Canvas = (function __GT_Canvas(){return (new rvb.model.Canvas());
});
rvb.model.map__GT_Canvas = (function map__GT_Canvas(G__98920){return (new rvb.model.Canvas(null,cljs.core.dissoc.call(null,G__98920)));
});
goog.provide('rvb.model.Tank');

/**
* @constructor
* @param {*} id
* @param {*} canvas
* @param {*} control
* @param {*} animation
* @param {*} events
* @param {*} x
* @param {*} y
* @param {*} size
* @param {*} health
* @param {*} team
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
rvb.model.Tank = (function (id,canvas,control,animation,events,x,y,size,health,team,__meta,__extmap){
this.id = id;
this.canvas = canvas;
this.control = control;
this.animation = animation;
this.events = events;
this.x = x;
this.y = y;
this.size = size;
this.health = health;
this.team = team;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>10){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
rvb.model.Tank.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3382__auto__){var self__ = this;
var h__3249__auto__ = self__.__hash;if(!((h__3249__auto__ == null)))
{return h__3249__auto__;
} else
{var h__3249__auto____$1 = cljs.core.hash_imap.call(null,this__3382__auto__);self__.__hash = h__3249__auto____$1;
return h__3249__auto____$1;
}
});
rvb.model.Tank.prototype.rvb$model$Movable$ = true;
rvb.model.Tank.prototype.rvb$model$Movable$move$arity$2 = (function (p__98933,length){var self__ = this;
var map__98934 = p__98933;var map__98934__$1 = ((cljs.core.seq_QMARK_.call(null,map__98934))?cljs.core.apply.call(null,cljs.core.hash_map,map__98934):map__98934);var this$ = map__98934__$1;var angle = cljs.core.get.call(null,map__98934__$1,new cljs.core.Keyword(null,"angle","angle",1106865221));var straight_corners = cljs.core.get.call(null,map__98934__$1,new cljs.core.Keyword(null,"straight-corners","straight-corners",889569373));var corners = cljs.core.get.call(null,map__98934__$1,new cljs.core.Keyword(null,"corners","corners",1968950320));var center = cljs.core.get.call(null,map__98934__$1,new cljs.core.Keyword(null,"center","center",3944857543));var rad = rvb.util.deg__GT_rad.call(null,angle);var diffX = (length * Math.cos(rad));var diffY = (length * Math.sin(rad));var new_center = cljs.core.apply.call(null,cljs.core.mapv,cljs.core._PLUS_,cljs.core.PersistentVector.fromArray([center,cljs.core.PersistentVector.fromArray([diffX,diffY], true)], true));return cljs.core.merge.call(null,this$,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"corners","corners",1968950320),cljs.core.mapv.call(null,(function (p1__98924_SHARP_){return cljs.core.apply.call(null,cljs.core.mapv,cljs.core._PLUS_,cljs.core.PersistentVector.fromArray([p1__98924_SHARP_,cljs.core.PersistentVector.fromArray([diffX,diffY], true)], true));
}),corners),new cljs.core.Keyword(null,"straight-corners","straight-corners",889569373),cljs.core.mapv.call(null,(function (p1__98925_SHARP_){return cljs.core.apply.call(null,cljs.core.mapv,cljs.core._PLUS_,cljs.core.PersistentVector.fromArray([p1__98925_SHARP_,cljs.core.PersistentVector.fromArray([diffX,diffY], true)], true));
}),straight_corners),new cljs.core.Keyword(null,"center","center",3944857543),new_center,new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.first.call(null,new_center),new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.second.call(null,new_center)], true));
});
rvb.model.Tank.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3387__auto__,k__3388__auto__){var self__ = this;
return this__3387__auto__.cljs$core$ILookup$_lookup$arity$3(this__3387__auto__,k__3388__auto__,null);
});
rvb.model.Tank.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3389__auto__,k98931,else__3390__auto__){var self__ = this;
if(cljs.core.keyword_identical_QMARK_.call(null,k98931,new cljs.core.Keyword(null,"id","id",1013907597)))
{return self__.id;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k98931,new cljs.core.Keyword(null,"canvas","canvas",3941165258)))
{return self__.canvas;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k98931,new cljs.core.Keyword(null,"control","control",1965447375)))
{return self__.control;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k98931,new cljs.core.Keyword(null,"animation","animation",2132414198)))
{return self__.animation;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k98931,new cljs.core.Keyword(null,"events","events",4017542283)))
{return self__.events;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k98931,new cljs.core.Keyword(null,"x","x",1013904362)))
{return self__.x;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k98931,new cljs.core.Keyword(null,"y","y",1013904363)))
{return self__.y;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k98931,new cljs.core.Keyword(null,"size","size",1017434995)))
{return self__.size;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k98931,new cljs.core.Keyword(null,"health","health",4087608782)))
{return self__.health;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k98931,new cljs.core.Keyword(null,"team","team",1017460175)))
{return self__.team;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k98931,else__3390__auto__);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});
rvb.model.Tank.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3394__auto__,k__3395__auto__,G__98930){var self__ = this;
var pred__98935 = cljs.core.keyword_identical_QMARK_;var expr__98936 = k__3395__auto__;if(pred__98935.call(null,new cljs.core.Keyword(null,"id","id",1013907597),expr__98936))
{return (new rvb.model.Tank(G__98930,self__.canvas,self__.control,self__.animation,self__.events,self__.x,self__.y,self__.size,self__.health,self__.team,self__.__meta,self__.__extmap,null));
} else
{if(pred__98935.call(null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),expr__98936))
{return (new rvb.model.Tank(self__.id,G__98930,self__.control,self__.animation,self__.events,self__.x,self__.y,self__.size,self__.health,self__.team,self__.__meta,self__.__extmap,null));
} else
{if(pred__98935.call(null,new cljs.core.Keyword(null,"control","control",1965447375),expr__98936))
{return (new rvb.model.Tank(self__.id,self__.canvas,G__98930,self__.animation,self__.events,self__.x,self__.y,self__.size,self__.health,self__.team,self__.__meta,self__.__extmap,null));
} else
{if(pred__98935.call(null,new cljs.core.Keyword(null,"animation","animation",2132414198),expr__98936))
{return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,G__98930,self__.events,self__.x,self__.y,self__.size,self__.health,self__.team,self__.__meta,self__.__extmap,null));
} else
{if(pred__98935.call(null,new cljs.core.Keyword(null,"events","events",4017542283),expr__98936))
{return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,self__.animation,G__98930,self__.x,self__.y,self__.size,self__.health,self__.team,self__.__meta,self__.__extmap,null));
} else
{if(pred__98935.call(null,new cljs.core.Keyword(null,"x","x",1013904362),expr__98936))
{return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,self__.animation,self__.events,G__98930,self__.y,self__.size,self__.health,self__.team,self__.__meta,self__.__extmap,null));
} else
{if(pred__98935.call(null,new cljs.core.Keyword(null,"y","y",1013904363),expr__98936))
{return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,self__.animation,self__.events,self__.x,G__98930,self__.size,self__.health,self__.team,self__.__meta,self__.__extmap,null));
} else
{if(pred__98935.call(null,new cljs.core.Keyword(null,"size","size",1017434995),expr__98936))
{return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,self__.animation,self__.events,self__.x,self__.y,G__98930,self__.health,self__.team,self__.__meta,self__.__extmap,null));
} else
{if(pred__98935.call(null,new cljs.core.Keyword(null,"health","health",4087608782),expr__98936))
{return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,self__.animation,self__.events,self__.x,self__.y,self__.size,G__98930,self__.team,self__.__meta,self__.__extmap,null));
} else
{if(pred__98935.call(null,new cljs.core.Keyword(null,"team","team",1017460175),expr__98936))
{return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,self__.animation,self__.events,self__.x,self__.y,self__.size,self__.health,G__98930,self__.__meta,self__.__extmap,null));
} else
{return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,self__.animation,self__.events,self__.x,self__.y,self__.size,self__.health,self__.team,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3395__auto__,G__98930),null));
}
}
}
}
}
}
}
}
}
}
});
rvb.model.Tank.prototype.rvb$model$DeathIncarnate$ = true;
rvb.model.Tank.prototype.rvb$model$DeathIncarnate$orient$arity$2 = (function (p__98938,degree){var self__ = this;
var map__98939 = p__98938;var map__98939__$1 = ((cljs.core.seq_QMARK_.call(null,map__98939))?cljs.core.apply.call(null,cljs.core.hash_map,map__98939):map__98939);var this$ = map__98939__$1;var center = cljs.core.get.call(null,map__98939__$1,new cljs.core.Keyword(null,"center","center",3944857543));var straight_corners = cljs.core.get.call(null,map__98939__$1,new cljs.core.Keyword(null,"straight-corners","straight-corners",889569373));var rad = rvb.util.deg__GT_rad.call(null,degree);var rotate = ((function (rad){
return (function (p__98940,corner){var vec__98941 = p__98940;var x__$1 = cljs.core.nth.call(null,vec__98941,0,null);var y__$1 = cljs.core.nth.call(null,vec__98941,1,null);return cljs.core.PersistentVector.fromArray([((x__$1 * Math.cos(rad)) - (y__$1 * Math.sin(rad))),((y__$1 * Math.cos(rad)) + (x__$1 * Math.sin(rad)))], true);
});})(rad))
;var transposed = cljs.core.mapv.call(null,((function (rad,rotate){
return (function (p1__98926_SHARP_){return cljs.core.apply.call(null,cljs.core.mapv,cljs.core._,cljs.core.PersistentVector.fromArray([p1__98926_SHARP_,center], true));
});})(rad,rotate))
,straight_corners);var oriented = cljs.core.mapv.call(null,rotate,transposed);return cljs.core.merge.call(null,this$,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"corners","corners",1968950320),cljs.core.mapv.call(null,(function (p1__98927_SHARP_){return cljs.core.apply.call(null,cljs.core.mapv,cljs.core._PLUS_,cljs.core.PersistentVector.fromArray([p1__98927_SHARP_,center], true));
}),oriented),new cljs.core.Keyword(null,"straight-corners","straight-corners",889569373),cljs.core.mapv.call(null,(function (p1__98928_SHARP_){return cljs.core.apply.call(null,cljs.core.mapv,cljs.core._PLUS_,cljs.core.PersistentVector.fromArray([p1__98928_SHARP_,center], true));
}),transposed),new cljs.core.Keyword(null,"angle","angle",1106865221),cljs.core.mod.call(null,degree,360)], true));
});
rvb.model.Tank.prototype.rvb$model$DeathIncarnate$dist$arity$2 = (function (p__98942,target){var self__ = this;
var map__98943 = p__98942;var map__98943__$1 = ((cljs.core.seq_QMARK_.call(null,map__98943))?cljs.core.apply.call(null,cljs.core.hash_map,map__98943):map__98943);var this$ = map__98943__$1;var center = cljs.core.get.call(null,map__98943__$1,new cljs.core.Keyword(null,"center","center",3944857543));var vec__98944 = center;var myX = cljs.core.nth.call(null,vec__98944,0,null);var myY = cljs.core.nth.call(null,vec__98944,1,null);var vec__98945 = new cljs.core.Keyword(null,"center","center",3944857543).call(null,target);var targetX = cljs.core.nth.call(null,vec__98945,0,null);var targetY = cljs.core.nth.call(null,vec__98945,1,null);return Math.sqrt.call(null,(Math.pow.call(null,(myX - targetX),2) + Math.pow.call(null,(myY - targetY),2)));
});
rvb.model.Tank.prototype.rvb$model$DeathIncarnate$target_angle$arity$2 = (function (p__98946,target){var self__ = this;
var map__98947 = p__98946;var map__98947__$1 = ((cljs.core.seq_QMARK_.call(null,map__98947))?cljs.core.apply.call(null,cljs.core.hash_map,map__98947):map__98947);var this$ = map__98947__$1;var center = cljs.core.get.call(null,map__98947__$1,new cljs.core.Keyword(null,"center","center",3944857543));var vec__98948 = center;var myX = cljs.core.nth.call(null,vec__98948,0,null);var myY = cljs.core.nth.call(null,vec__98948,1,null);var vec__98949 = new cljs.core.Keyword(null,"center","center",3944857543).call(null,target);var targetX = cljs.core.nth.call(null,vec__98949,0,null);var targetY = cljs.core.nth.call(null,vec__98949,1,null);var atan = Math.atan2((targetY - myY),(targetX - myX));return rvb.util.rad__GT_deg.call(null,atan);
});
rvb.model.Tank.prototype.rvb$model$DeathIncarnate$find_target$arity$2 = (function (p__98950,objects){var self__ = this;
var map__98951 = p__98950;var map__98951__$1 = ((cljs.core.seq_QMARK_.call(null,map__98951))?cljs.core.apply.call(null,cljs.core.hash_map,map__98951):map__98951);var this$ = map__98951__$1;var team__$1 = cljs.core.get.call(null,map__98951__$1,new cljs.core.Keyword(null,"team","team",1017460175));var targets = cljs.core.remove.call(null,(function (p1__98929_SHARP_){return cljs.core._EQ_.call(null,team__$1,new cljs.core.Keyword(null,"team","team",1017460175).call(null,p1__98929_SHARP_));
}),objects);return cljs.core.apply.call(null,cljs.core.min_key,cljs.core.partial.call(null,rvb.model.dist,this$),targets);
});
rvb.model.Tank.prototype.rvb$model$DeathIncarnate$turret_endpoint$arity$1 = (function (p__98952){var self__ = this;
var map__98953 = p__98952;var map__98953__$1 = ((cljs.core.seq_QMARK_.call(null,map__98953))?cljs.core.apply.call(null,cljs.core.hash_map,map__98953):map__98953);var this$ = map__98953__$1;var center = cljs.core.get.call(null,map__98953__$1,new cljs.core.Keyword(null,"center","center",3944857543));var width = cljs.core.get.call(null,map__98953__$1,new cljs.core.Keyword(null,"width","width",1127031096));var angle = cljs.core.get.call(null,map__98953__$1,new cljs.core.Keyword(null,"angle","angle",1106865221));var rad = rvb.util.deg__GT_rad.call(null,angle);var vec__98954 = center;var centerX = cljs.core.nth.call(null,vec__98954,0,null);var centerY = cljs.core.nth.call(null,vec__98954,1,null);var turret_length = (width * 0.8);return cljs.core.PersistentVector.fromArray([(centerX + (turret_length * Math.cos(rad))),(centerY + (turret_length * Math.sin(rad)))], true);
});
rvb.model.Tank.prototype.rvb$model$DeathIncarnate$fire$arity$1 = (function (this$){var self__ = this;
return this$;
});
rvb.model.Tank.prototype.rvb$model$DeathIncarnate$take_damage$arity$2 = (function (this$,damage){var self__ = this;
return cljs.core.merge.call(null,this$,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"health","health",4087608782),(self__.health - 1)], true));
});
rvb.model.Tank.prototype.rvb$model$DeathIncarnate$die_BANG_$arity$1 = (function (this$){var self__ = this;
cljs.core.async.close_BANG_.call(null,self__.control);
cljs.core.async.close_BANG_.call(null,self__.events);
cljs.core.async.close_BANG_.call(null,self__.animation);
return this$.rvb$model$Renderable$erase_BANG_$arity$1(this$);
});
rvb.model.Tank.prototype.rvb$model$Constructable$ = true;
rvb.model.Tank.prototype.rvb$model$Constructable$construct$arity$1 = (function (this$){var self__ = this;
var width = self__.size;var height = (0.7 * self__.size);var straight_corners = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([self__.x,self__.y], true),cljs.core.PersistentVector.fromArray([(self__.x + width),self__.y], true),cljs.core.PersistentVector.fromArray([(self__.x + width),(self__.y + height)], true),cljs.core.PersistentVector.fromArray([self__.x,(self__.y + height)], true)], true);return cljs.core.merge.call(null,this$,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"width","width",1127031096),width,new cljs.core.Keyword(null,"height","height",4087841945),height,new cljs.core.Keyword(null,"collide-type","collide-type",1434102491),new cljs.core.Keyword(null,"tank","tank",1017456732),new cljs.core.Keyword(null,"color","color",1108746965),((cljs.core._EQ_.call(null,self__.team,new cljs.core.Keyword(null,"red","red",1014017027)))?"red":"blue"),new cljs.core.Keyword(null,"center","center",3944857543),cljs.core.PersistentVector.fromArray([(self__.x + (width / 2)),(self__.y + (height / 2))], true),new cljs.core.Keyword(null,"angle","angle",1106865221),((cljs.core._EQ_.call(null,self__.team,new cljs.core.Keyword(null,"red","red",1014017027)))?0:180),new cljs.core.Keyword(null,"straight-corners","straight-corners",889569373),straight_corners,new cljs.core.Keyword(null,"corners","corners",1968950320),straight_corners], true));
});
rvb.model.Tank.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3401__auto__,writer__3402__auto__,opts__3403__auto__){var self__ = this;
var pr_pair__3404__auto__ = (function (keyval__3405__auto__){return cljs.core.pr_sequential_writer.call(null,writer__3402__auto__,cljs.core.pr_writer,""," ","",opts__3403__auto__,keyval__3405__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__3402__auto__,pr_pair__3404__auto__,"#rvb.model.Tank{",", ","}",opts__3403__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"id","id",1013907597),self__.id),cljs.core.vector.call(null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),self__.canvas),cljs.core.vector.call(null,new cljs.core.Keyword(null,"control","control",1965447375),self__.control),cljs.core.vector.call(null,new cljs.core.Keyword(null,"animation","animation",2132414198),self__.animation),cljs.core.vector.call(null,new cljs.core.Keyword(null,"events","events",4017542283),self__.events),cljs.core.vector.call(null,new cljs.core.Keyword(null,"x","x",1013904362),self__.x),cljs.core.vector.call(null,new cljs.core.Keyword(null,"y","y",1013904363),self__.y),cljs.core.vector.call(null,new cljs.core.Keyword(null,"size","size",1017434995),self__.size),cljs.core.vector.call(null,new cljs.core.Keyword(null,"health","health",4087608782),self__.health),cljs.core.vector.call(null,new cljs.core.Keyword(null,"team","team",1017460175),self__.team)], true),self__.__extmap));
});
rvb.model.Tank.prototype.rvb$model$Renderable$ = true;
rvb.model.Tank.prototype.rvb$model$Renderable$render_BANG_$arity$1 = (function (p__98955){var self__ = this;
var map__98956 = p__98955;var map__98956__$1 = ((cljs.core.seq_QMARK_.call(null,map__98956))?cljs.core.apply.call(null,cljs.core.hash_map,map__98956):map__98956);var this$ = map__98956__$1;var health__$1 = cljs.core.get.call(null,map__98956__$1,new cljs.core.Keyword(null,"health","health",4087608782));var width = cljs.core.get.call(null,map__98956__$1,new cljs.core.Keyword(null,"width","width",1127031096));var angle = cljs.core.get.call(null,map__98956__$1,new cljs.core.Keyword(null,"angle","angle",1106865221));var center = cljs.core.get.call(null,map__98956__$1,new cljs.core.Keyword(null,"center","center",3944857543));var corners = cljs.core.get.call(null,map__98956__$1,new cljs.core.Keyword(null,"corners","corners",1968950320));var color = cljs.core.get.call(null,map__98956__$1,new cljs.core.Keyword(null,"color","color",1108746965));var context = new cljs.core.Keyword(null,"context","context",1965435169).call(null,self__.canvas);var rad = rvb.util.deg__GT_rad.call(null,angle);var vec__98957 = cljs.core.first.call(null,corners);var startX = cljs.core.nth.call(null,vec__98957,0,null);var startY = cljs.core.nth.call(null,vec__98957,1,null);var vec__98958 = center;var centerX = cljs.core.nth.call(null,vec__98958,0,null);var centerY = cljs.core.nth.call(null,vec__98958,1,null);var vec__98959 = rvb.model.turret_endpoint.call(null,this$);var turretX = cljs.core.nth.call(null,vec__98959,0,null);var turretY = cljs.core.nth.call(null,vec__98959,1,null);var dirX = Math.cos(rad);var dirY = Math.sin(rad);context.strokeStyle = color;
if(cljs.core._EQ_.call(null,color,new cljs.core.Keyword(null,"bg-color","bg-color",2612345677).call(null,self__.canvas)))
{context.lineWidth = 6;
} else
{context.lineWidth = health__$1;
}
context.beginPath();
context.moveTo(startX,startY);
var seq__98960_98970 = cljs.core.seq.call(null,cljs.core.rest.call(null,corners));var chunk__98961_98971 = null;var count__98962_98972 = 0;var i__98963_98973 = 0;while(true){
if((i__98963_98973 < count__98962_98972))
{var vec__98964_98974 = cljs.core._nth.call(null,chunk__98961_98971,i__98963_98973);var x_98975__$1 = cljs.core.nth.call(null,vec__98964_98974,0,null);var y_98976__$1 = cljs.core.nth.call(null,vec__98964_98974,1,null);context.lineTo(x_98975__$1,y_98976__$1);
{
var G__98977 = seq__98960_98970;
var G__98978 = chunk__98961_98971;
var G__98979 = count__98962_98972;
var G__98980 = (i__98963_98973 + 1);
seq__98960_98970 = G__98977;
chunk__98961_98971 = G__98978;
count__98962_98972 = G__98979;
i__98963_98973 = G__98980;
continue;
}
} else
{var temp__4092__auto___98981 = cljs.core.seq.call(null,seq__98960_98970);if(temp__4092__auto___98981)
{var seq__98960_98982__$1 = temp__4092__auto___98981;if(cljs.core.chunked_seq_QMARK_.call(null,seq__98960_98982__$1))
{var c__3559__auto___98983 = cljs.core.chunk_first.call(null,seq__98960_98982__$1);{
var G__98984 = cljs.core.chunk_rest.call(null,seq__98960_98982__$1);
var G__98985 = c__3559__auto___98983;
var G__98986 = cljs.core.count.call(null,c__3559__auto___98983);
var G__98987 = 0;
seq__98960_98970 = G__98984;
chunk__98961_98971 = G__98985;
count__98962_98972 = G__98986;
i__98963_98973 = G__98987;
continue;
}
} else
{var vec__98965_98988 = cljs.core.first.call(null,seq__98960_98982__$1);var x_98989__$1 = cljs.core.nth.call(null,vec__98965_98988,0,null);var y_98990__$1 = cljs.core.nth.call(null,vec__98965_98988,1,null);context.lineTo(x_98989__$1,y_98990__$1);
{
var G__98991 = cljs.core.next.call(null,seq__98960_98982__$1);
var G__98992 = null;
var G__98993 = 0;
var G__98994 = 0;
seq__98960_98970 = G__98991;
chunk__98961_98971 = G__98992;
count__98962_98972 = G__98993;
i__98963_98973 = G__98994;
continue;
}
}
} else
{}
}
break;
}
context.closePath();
context.stroke();
if(cljs.core._EQ_.call(null,color,new cljs.core.Keyword(null,"bg-color","bg-color",2612345677).call(null,self__.canvas)))
{context.lineWidth = 6;
} else
{context.lineWidth = 2;
}
context.beginPath();
if(cljs.core._EQ_.call(null,color,new cljs.core.Keyword(null,"bg-color","bg-color",2612345677).call(null,self__.canvas)))
{context.moveTo((centerX - dirX),(centerY - dirY));
context.lineTo((turretX + dirX),(turretY + dirY));
} else
{context.moveTo(centerX,centerY);
context.lineTo(turretX,turretY);
}
context.closePath();
return context.stroke();
});
rvb.model.Tank.prototype.rvb$model$Renderable$erase_BANG_$arity$1 = (function (this$){var self__ = this;
return rvb.model.render_BANG_.call(null,cljs.core.merge.call(null,this$,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"color","color",1108746965),new cljs.core.Keyword(null,"bg-color","bg-color",2612345677).call(null,self__.canvas)], true)));
});
rvb.model.Tank.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3392__auto__,entry__3393__auto__){var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__3393__auto__))
{return this__3392__auto__.cljs$core$IAssociative$_assoc$arity$3(this__3392__auto__,cljs.core._nth.call(null,entry__3393__auto__,0),cljs.core._nth.call(null,entry__3393__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3392__auto__,entry__3393__auto__);
}
});
rvb.model.Tank.prototype.rvb$model$Collideable$ = true;
rvb.model.Tank.prototype.rvb$model$Collideable$bounds$arity$1 = (function (p__98966){var self__ = this;
var map__98967 = p__98966;var map__98967__$1 = ((cljs.core.seq_QMARK_.call(null,map__98967))?cljs.core.apply.call(null,cljs.core.hash_map,map__98967):map__98967);var this$ = map__98967__$1;var corners = cljs.core.get.call(null,map__98967__$1,new cljs.core.Keyword(null,"corners","corners",1968950320));var buffer = 2;var minX = (cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,corners)) - buffer);var maxX = (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,corners)) + buffer);var minY = (cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.second,corners)) - buffer);var maxY = (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,corners)) + buffer);return cljs.core.PersistentVector.fromArray([minX,maxX,minY,maxY], true);
});
rvb.model.Tank.prototype.rvb$model$Collideable$collides_QMARK_$arity$2 = (function (this$,object){var self__ = this;
var vec__98968 = this$.rvb$model$Collideable$bounds$arity$1(this$);var my_min_x = cljs.core.nth.call(null,vec__98968,0,null);var my_max_x = cljs.core.nth.call(null,vec__98968,1,null);var my_min_y = cljs.core.nth.call(null,vec__98968,2,null);var my_max_y = cljs.core.nth.call(null,vec__98968,3,null);var vec__98969 = rvb.model.bounds.call(null,object);var obj_min_x = cljs.core.nth.call(null,vec__98969,0,null);var obj_max_x = cljs.core.nth.call(null,vec__98969,1,null);var obj_min_y = cljs.core.nth.call(null,vec__98969,2,null);var obj_max_y = cljs.core.nth.call(null,vec__98969,3,null);return !((function (){var or__3943__auto__ = (my_min_x > obj_max_x);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (my_min_y > obj_max_y);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = (my_max_x < obj_min_x);if(or__3943__auto____$2)
{return or__3943__auto____$2;
} else
{return (my_max_y < obj_min_y);
}
}
}
})());
});
rvb.model.Tank.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3399__auto__){var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"id","id",1013907597),self__.id),cljs.core.vector.call(null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),self__.canvas),cljs.core.vector.call(null,new cljs.core.Keyword(null,"control","control",1965447375),self__.control),cljs.core.vector.call(null,new cljs.core.Keyword(null,"animation","animation",2132414198),self__.animation),cljs.core.vector.call(null,new cljs.core.Keyword(null,"events","events",4017542283),self__.events),cljs.core.vector.call(null,new cljs.core.Keyword(null,"x","x",1013904362),self__.x),cljs.core.vector.call(null,new cljs.core.Keyword(null,"y","y",1013904363),self__.y),cljs.core.vector.call(null,new cljs.core.Keyword(null,"size","size",1017434995),self__.size),cljs.core.vector.call(null,new cljs.core.Keyword(null,"health","health",4087608782),self__.health),cljs.core.vector.call(null,new cljs.core.Keyword(null,"team","team",1017460175),self__.team)], true),self__.__extmap));
});
rvb.model.Tank.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3391__auto__){var self__ = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});
rvb.model.Tank.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3383__auto__,other__3384__auto__){var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__3384__auto__;if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__3383__auto__.constructor === other__3384__auto__.constructor);if(and__3941__auto____$1)
{return cljs.core.equiv_map.call(null,this__3383__auto__,other__3384__auto__);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rvb.model.Tank.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3386__auto__,G__98930){var self__ = this;
return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,self__.animation,self__.events,self__.x,self__.y,self__.size,self__.health,self__.team,G__98930,self__.__extmap,self__.__hash));
});
rvb.model.Tank.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3385__auto__){var self__ = this;
return self__.__meta;
});
rvb.model.Tank.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3396__auto__,k__3397__auto__){var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"health","health",4087608782),null,new cljs.core.Keyword(null,"control","control",1965447375),null,new cljs.core.Keyword(null,"team","team",1017460175),null,new cljs.core.Keyword(null,"y","y",1013904363),null,new cljs.core.Keyword(null,"x","x",1013904362),null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),null,new cljs.core.Keyword(null,"size","size",1017434995),null,new cljs.core.Keyword(null,"animation","animation",2132414198),null,new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"events","events",4017542283),null], true),k__3397__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3396__auto__),self__.__meta),k__3397__auto__);
} else
{return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,self__.animation,self__.events,self__.x,self__.y,self__.size,self__.health,self__.team,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3397__auto__)),null));
}
});
rvb.model.Tank.cljs$lang$type = true;
rvb.model.Tank.cljs$lang$ctorPrSeq = (function (this__3421__auto__){return cljs.core.list.call(null,"rvb.model/Tank");
});
rvb.model.Tank.cljs$lang$ctorPrWriter = (function (this__3421__auto__,writer__3422__auto__){return cljs.core._write.call(null,writer__3422__auto__,"rvb.model/Tank");
});
rvb.model.__GT_Tank = (function __GT_Tank(id,canvas,control,animation,events,x,y,size,health,team){return (new rvb.model.Tank(id,canvas,control,animation,events,x,y,size,health,team));
});
rvb.model.map__GT_Tank = (function map__GT_Tank(G__98932){return (new rvb.model.Tank(new cljs.core.Keyword(null,"id","id",1013907597).call(null,G__98932),new cljs.core.Keyword(null,"canvas","canvas",3941165258).call(null,G__98932),new cljs.core.Keyword(null,"control","control",1965447375).call(null,G__98932),new cljs.core.Keyword(null,"animation","animation",2132414198).call(null,G__98932),new cljs.core.Keyword(null,"events","events",4017542283).call(null,G__98932),new cljs.core.Keyword(null,"x","x",1013904362).call(null,G__98932),new cljs.core.Keyword(null,"y","y",1013904363).call(null,G__98932),new cljs.core.Keyword(null,"size","size",1017434995).call(null,G__98932),new cljs.core.Keyword(null,"health","health",4087608782).call(null,G__98932),new cljs.core.Keyword(null,"team","team",1017460175).call(null,G__98932),null,cljs.core.dissoc.call(null,G__98932,new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"control","control",1965447375),new cljs.core.Keyword(null,"animation","animation",2132414198),new cljs.core.Keyword(null,"events","events",4017542283),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"size","size",1017434995),new cljs.core.Keyword(null,"health","health",4087608782),new cljs.core.Keyword(null,"team","team",1017460175))));
});
goog.provide('rvb.model.Bullet');

/**
* @constructor
* @param {*} canvas
* @param {*} x
* @param {*} y
* @param {*} team
* @param {*} angle
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
rvb.model.Bullet = (function (canvas,x,y,team,angle,__meta,__extmap){
this.canvas = canvas;
this.x = x;
this.y = y;
this.team = team;
this.angle = angle;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
rvb.model.Bullet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3382__auto__){var self__ = this;
var h__3249__auto__ = self__.__hash;if(!((h__3249__auto__ == null)))
{return h__3249__auto__;
} else
{var h__3249__auto____$1 = cljs.core.hash_imap.call(null,this__3382__auto__);self__.__hash = h__3249__auto____$1;
return h__3249__auto____$1;
}
});
rvb.model.Bullet.prototype.rvb$model$Movable$ = true;
rvb.model.Bullet.prototype.rvb$model$Movable$move$arity$2 = (function (p__98998,length){var self__ = this;
var map__98999 = p__98998;var map__98999__$1 = ((cljs.core.seq_QMARK_.call(null,map__98999))?cljs.core.apply.call(null,cljs.core.hash_map,map__98999):map__98999);var this$ = map__98999__$1;var angle__$1 = cljs.core.get.call(null,map__98999__$1,new cljs.core.Keyword(null,"angle","angle",1106865221));var rad = rvb.util.deg__GT_rad.call(null,angle__$1);var diffX = (length * Math.cos(rad));var diffY = (length * Math.sin(rad));return cljs.core.merge.call(null,this$,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"x","x",1013904362),(self__.x + diffX),new cljs.core.Keyword(null,"y","y",1013904363),(self__.y + diffY)], true));
});
rvb.model.Bullet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3387__auto__,k__3388__auto__){var self__ = this;
return this__3387__auto__.cljs$core$ILookup$_lookup$arity$3(this__3387__auto__,k__3388__auto__,null);
});
rvb.model.Bullet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3389__auto__,k98996,else__3390__auto__){var self__ = this;
if(cljs.core.keyword_identical_QMARK_.call(null,k98996,new cljs.core.Keyword(null,"canvas","canvas",3941165258)))
{return self__.canvas;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k98996,new cljs.core.Keyword(null,"x","x",1013904362)))
{return self__.x;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k98996,new cljs.core.Keyword(null,"y","y",1013904363)))
{return self__.y;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k98996,new cljs.core.Keyword(null,"team","team",1017460175)))
{return self__.team;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k98996,new cljs.core.Keyword(null,"angle","angle",1106865221)))
{return self__.angle;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k98996,else__3390__auto__);
} else
{return null;
}
}
}
}
}
}
});
rvb.model.Bullet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3394__auto__,k__3395__auto__,G__98995){var self__ = this;
var pred__99000 = cljs.core.keyword_identical_QMARK_;var expr__99001 = k__3395__auto__;if(pred__99000.call(null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),expr__99001))
{return (new rvb.model.Bullet(G__98995,self__.x,self__.y,self__.team,self__.angle,self__.__meta,self__.__extmap,null));
} else
{if(pred__99000.call(null,new cljs.core.Keyword(null,"x","x",1013904362),expr__99001))
{return (new rvb.model.Bullet(self__.canvas,G__98995,self__.y,self__.team,self__.angle,self__.__meta,self__.__extmap,null));
} else
{if(pred__99000.call(null,new cljs.core.Keyword(null,"y","y",1013904363),expr__99001))
{return (new rvb.model.Bullet(self__.canvas,self__.x,G__98995,self__.team,self__.angle,self__.__meta,self__.__extmap,null));
} else
{if(pred__99000.call(null,new cljs.core.Keyword(null,"team","team",1017460175),expr__99001))
{return (new rvb.model.Bullet(self__.canvas,self__.x,self__.y,G__98995,self__.angle,self__.__meta,self__.__extmap,null));
} else
{if(pred__99000.call(null,new cljs.core.Keyword(null,"angle","angle",1106865221),expr__99001))
{return (new rvb.model.Bullet(self__.canvas,self__.x,self__.y,self__.team,G__98995,self__.__meta,self__.__extmap,null));
} else
{return (new rvb.model.Bullet(self__.canvas,self__.x,self__.y,self__.team,self__.angle,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3395__auto__,G__98995),null));
}
}
}
}
}
});
rvb.model.Bullet.prototype.rvb$model$Constructable$ = true;
rvb.model.Bullet.prototype.rvb$model$Constructable$construct$arity$1 = (function (this$){var self__ = this;
return cljs.core.merge.call(null,this$,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"size","size",1017434995),5,new cljs.core.Keyword(null,"collide-type","collide-type",1434102491),new cljs.core.Keyword(null,"bullet","bullet",3930937460),new cljs.core.Keyword(null,"color","color",1108746965),((cljs.core._EQ_.call(null,self__.team,new cljs.core.Keyword(null,"red","red",1014017027)))?"red":"blue")], true));
});
rvb.model.Bullet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3401__auto__,writer__3402__auto__,opts__3403__auto__){var self__ = this;
var pr_pair__3404__auto__ = (function (keyval__3405__auto__){return cljs.core.pr_sequential_writer.call(null,writer__3402__auto__,cljs.core.pr_writer,""," ","",opts__3403__auto__,keyval__3405__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__3402__auto__,pr_pair__3404__auto__,"#rvb.model.Bullet{",", ","}",opts__3403__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),self__.canvas),cljs.core.vector.call(null,new cljs.core.Keyword(null,"x","x",1013904362),self__.x),cljs.core.vector.call(null,new cljs.core.Keyword(null,"y","y",1013904363),self__.y),cljs.core.vector.call(null,new cljs.core.Keyword(null,"team","team",1017460175),self__.team),cljs.core.vector.call(null,new cljs.core.Keyword(null,"angle","angle",1106865221),self__.angle)], true),self__.__extmap));
});
rvb.model.Bullet.prototype.rvb$model$Renderable$ = true;
rvb.model.Bullet.prototype.rvb$model$Renderable$render_BANG_$arity$1 = (function (p__99003){var self__ = this;
var map__99004 = p__99003;var map__99004__$1 = ((cljs.core.seq_QMARK_.call(null,map__99004))?cljs.core.apply.call(null,cljs.core.hash_map,map__99004):map__99004);var this$ = map__99004__$1;var color = cljs.core.get.call(null,map__99004__$1,new cljs.core.Keyword(null,"color","color",1108746965));var size = cljs.core.get.call(null,map__99004__$1,new cljs.core.Keyword(null,"size","size",1017434995));var context = new cljs.core.Keyword(null,"context","context",1965435169).call(null,self__.canvas);var rad = rvb.util.deg__GT_rad.call(null,self__.angle);var backX = (-1 * Math.cos(rad));var backY = (-1 * Math.sin(rad));var diffX = (size * Math.cos(rad));var diffY = (size * Math.sin(rad));context.strokeStyle = color;
if(cljs.core._EQ_.call(null,color,new cljs.core.Keyword(null,"bg-color","bg-color",2612345677).call(null,self__.canvas)))
{context.lineWidth = 6;
} else
{context.lineWidth = 4;
}
context.beginPath();
if(cljs.core._EQ_.call(null,color,new cljs.core.Keyword(null,"bg-color","bg-color",2612345677).call(null,self__.canvas)))
{context.moveTo((self__.x + backX),(self__.y + backY));
} else
{context.moveTo(self__.x,self__.y);
}
context.lineTo((self__.x + diffX),(self__.y + diffY));
context.closePath();
return context.stroke();
});
rvb.model.Bullet.prototype.rvb$model$Renderable$erase_BANG_$arity$1 = (function (this$){var self__ = this;
return rvb.model.render_BANG_.call(null,cljs.core.merge.call(null,this$,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"color","color",1108746965),new cljs.core.Keyword(null,"bg-color","bg-color",2612345677).call(null,self__.canvas)], true)));
});
rvb.model.Bullet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3392__auto__,entry__3393__auto__){var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__3393__auto__))
{return this__3392__auto__.cljs$core$IAssociative$_assoc$arity$3(this__3392__auto__,cljs.core._nth.call(null,entry__3393__auto__,0),cljs.core._nth.call(null,entry__3393__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3392__auto__,entry__3393__auto__);
}
});
rvb.model.Bullet.prototype.rvb$model$Collideable$ = true;
rvb.model.Bullet.prototype.rvb$model$Collideable$bounds$arity$1 = (function (p__99005){var self__ = this;
var map__99006 = p__99005;var map__99006__$1 = ((cljs.core.seq_QMARK_.call(null,map__99006))?cljs.core.apply.call(null,cljs.core.hash_map,map__99006):map__99006);var this$ = map__99006__$1;var size = cljs.core.get.call(null,map__99006__$1,new cljs.core.Keyword(null,"size","size",1017434995));var rad = rvb.util.deg__GT_rad.call(null,self__.angle);var extX = (self__.x + (size * Math.cos(rad)));var extY = (self__.y + (size * Math.sin(rad)));var minX = (function (){var x__3157__auto__ = self__.x;var y__3158__auto__ = extX;return ((x__3157__auto__ < y__3158__auto__) ? x__3157__auto__ : y__3158__auto__);
})();var maxX = (function (){var x__3150__auto__ = self__.x;var y__3151__auto__ = extX;return ((x__3150__auto__ > y__3151__auto__) ? x__3150__auto__ : y__3151__auto__);
})();var minY = (function (){var x__3157__auto__ = self__.y;var y__3158__auto__ = extY;return ((x__3157__auto__ < y__3158__auto__) ? x__3157__auto__ : y__3158__auto__);
})();var maxY = (function (){var x__3150__auto__ = self__.y;var y__3151__auto__ = extY;return ((x__3150__auto__ > y__3151__auto__) ? x__3150__auto__ : y__3151__auto__);
})();return cljs.core.PersistentVector.fromArray([minX,maxX,minY,maxY], true);
});
rvb.model.Bullet.prototype.rvb$model$Collideable$collides_QMARK_$arity$2 = (function (this$,object){var self__ = this;
var vec__99007 = this$.rvb$model$Collideable$bounds$arity$1(this$);var my_min_x = cljs.core.nth.call(null,vec__99007,0,null);var my_max_x = cljs.core.nth.call(null,vec__99007,1,null);var my_min_y = cljs.core.nth.call(null,vec__99007,2,null);var my_max_y = cljs.core.nth.call(null,vec__99007,3,null);var vec__99008 = rvb.model.bounds.call(null,object);var obj_min_x = cljs.core.nth.call(null,vec__99008,0,null);var obj_max_x = cljs.core.nth.call(null,vec__99008,1,null);var obj_min_y = cljs.core.nth.call(null,vec__99008,2,null);var obj_max_y = cljs.core.nth.call(null,vec__99008,3,null);return !((function (){var or__3943__auto__ = (my_min_x > obj_max_x);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (my_min_y > obj_max_y);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = (my_max_x < obj_min_x);if(or__3943__auto____$2)
{return or__3943__auto____$2;
} else
{return (my_max_y < obj_min_y);
}
}
}
})());
});
rvb.model.Bullet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3399__auto__){var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),self__.canvas),cljs.core.vector.call(null,new cljs.core.Keyword(null,"x","x",1013904362),self__.x),cljs.core.vector.call(null,new cljs.core.Keyword(null,"y","y",1013904363),self__.y),cljs.core.vector.call(null,new cljs.core.Keyword(null,"team","team",1017460175),self__.team),cljs.core.vector.call(null,new cljs.core.Keyword(null,"angle","angle",1106865221),self__.angle)], true),self__.__extmap));
});
rvb.model.Bullet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3391__auto__){var self__ = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});
rvb.model.Bullet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3383__auto__,other__3384__auto__){var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__3384__auto__;if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__3383__auto__.constructor === other__3384__auto__.constructor);if(and__3941__auto____$1)
{return cljs.core.equiv_map.call(null,this__3383__auto__,other__3384__auto__);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rvb.model.Bullet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3386__auto__,G__98995){var self__ = this;
return (new rvb.model.Bullet(self__.canvas,self__.x,self__.y,self__.team,self__.angle,G__98995,self__.__extmap,self__.__hash));
});
rvb.model.Bullet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3385__auto__){var self__ = this;
return self__.__meta;
});
rvb.model.Bullet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3396__auto__,k__3397__auto__){var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"team","team",1017460175),null,new cljs.core.Keyword(null,"y","y",1013904363),null,new cljs.core.Keyword(null,"x","x",1013904362),null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),null,new cljs.core.Keyword(null,"angle","angle",1106865221),null], true),k__3397__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3396__auto__),self__.__meta),k__3397__auto__);
} else
{return (new rvb.model.Bullet(self__.canvas,self__.x,self__.y,self__.team,self__.angle,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3397__auto__)),null));
}
});
rvb.model.Bullet.cljs$lang$type = true;
rvb.model.Bullet.cljs$lang$ctorPrSeq = (function (this__3421__auto__){return cljs.core.list.call(null,"rvb.model/Bullet");
});
rvb.model.Bullet.cljs$lang$ctorPrWriter = (function (this__3421__auto__,writer__3422__auto__){return cljs.core._write.call(null,writer__3422__auto__,"rvb.model/Bullet");
});
rvb.model.__GT_Bullet = (function __GT_Bullet(canvas,x,y,team,angle){return (new rvb.model.Bullet(canvas,x,y,team,angle));
});
rvb.model.map__GT_Bullet = (function map__GT_Bullet(G__98997){return (new rvb.model.Bullet(new cljs.core.Keyword(null,"canvas","canvas",3941165258).call(null,G__98997),new cljs.core.Keyword(null,"x","x",1013904362).call(null,G__98997),new cljs.core.Keyword(null,"y","y",1013904363).call(null,G__98997),new cljs.core.Keyword(null,"team","team",1017460175).call(null,G__98997),new cljs.core.Keyword(null,"angle","angle",1106865221).call(null,G__98997),null,cljs.core.dissoc.call(null,G__98997,new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"team","team",1017460175),new cljs.core.Keyword(null,"angle","angle",1106865221))));
});
