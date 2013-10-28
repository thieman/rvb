goog.provide('rvb.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('rvb.util');
goog.require('cljs.core.async');
goog.require('rvb.util');
rvb.model.Constructable = {};
rvb.model.construct = (function construct(this$){if((function (){var and__2946__auto__ = this$;if(and__2946__auto__)
{return this$.rvb$model$Constructable$construct$arity$1;
} else
{return and__2946__auto__;
}
})())
{return this$.rvb$model$Constructable$construct$arity$1(this$);
} else
{var x__3550__auto__ = (((this$ == null))?null:this$);return (function (){var or__2955__auto__ = (rvb.model.construct[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (rvb.model.construct["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Constructable.construct",this$);
}
}
})().call(null,this$);
}
});
rvb.model.Renderable = {};
rvb.model.render_BANG_ = (function render_BANG_(this$){if((function (){var and__2946__auto__ = this$;if(and__2946__auto__)
{return this$.rvb$model$Renderable$render_BANG_$arity$1;
} else
{return and__2946__auto__;
}
})())
{return this$.rvb$model$Renderable$render_BANG_$arity$1(this$);
} else
{var x__3550__auto__ = (((this$ == null))?null:this$);return (function (){var or__2955__auto__ = (rvb.model.render_BANG_[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (rvb.model.render_BANG_["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.render!",this$);
}
}
})().call(null,this$);
}
});
rvb.model.erase_BANG_ = (function erase_BANG_(this$){if((function (){var and__2946__auto__ = this$;if(and__2946__auto__)
{return this$.rvb$model$Renderable$erase_BANG_$arity$1;
} else
{return and__2946__auto__;
}
})())
{return this$.rvb$model$Renderable$erase_BANG_$arity$1(this$);
} else
{var x__3550__auto__ = (((this$ == null))?null:this$);return (function (){var or__2955__auto__ = (rvb.model.erase_BANG_[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (rvb.model.erase_BANG_["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.erase!",this$);
}
}
})().call(null,this$);
}
});
rvb.model.Collideable = {};
rvb.model.bounds = (function bounds(this$){if((function (){var and__2946__auto__ = this$;if(and__2946__auto__)
{return this$.rvb$model$Collideable$bounds$arity$1;
} else
{return and__2946__auto__;
}
})())
{return this$.rvb$model$Collideable$bounds$arity$1(this$);
} else
{var x__3550__auto__ = (((this$ == null))?null:this$);return (function (){var or__2955__auto__ = (rvb.model.bounds[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (rvb.model.bounds["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Collideable.bounds",this$);
}
}
})().call(null,this$);
}
});
rvb.model.collides_QMARK_ = (function collides_QMARK_(this$,object){if((function (){var and__2946__auto__ = this$;if(and__2946__auto__)
{return this$.rvb$model$Collideable$collides_QMARK_$arity$2;
} else
{return and__2946__auto__;
}
})())
{return this$.rvb$model$Collideable$collides_QMARK_$arity$2(this$,object);
} else
{var x__3550__auto__ = (((this$ == null))?null:this$);return (function (){var or__2955__auto__ = (rvb.model.collides_QMARK_[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (rvb.model.collides_QMARK_["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Collideable.collides?",this$);
}
}
})().call(null,this$,object);
}
});
rvb.model.Movable = {};
rvb.model.move = (function move(this$,length){if((function (){var and__2946__auto__ = this$;if(and__2946__auto__)
{return this$.rvb$model$Movable$move$arity$2;
} else
{return and__2946__auto__;
}
})())
{return this$.rvb$model$Movable$move$arity$2(this$,length);
} else
{var x__3550__auto__ = (((this$ == null))?null:this$);return (function (){var or__2955__auto__ = (rvb.model.move[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (rvb.model.move["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Movable.move",this$);
}
}
})().call(null,this$,length);
}
});
rvb.model.DeathIncarnate = {};
rvb.model.orient = (function orient(this$,degree){if((function (){var and__2946__auto__ = this$;if(and__2946__auto__)
{return this$.rvb$model$DeathIncarnate$orient$arity$2;
} else
{return and__2946__auto__;
}
})())
{return this$.rvb$model$DeathIncarnate$orient$arity$2(this$,degree);
} else
{var x__3550__auto__ = (((this$ == null))?null:this$);return (function (){var or__2955__auto__ = (rvb.model.orient[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (rvb.model.orient["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DeathIncarnate.orient",this$);
}
}
})().call(null,this$,degree);
}
});
rvb.model.dist = (function dist(this$,target){if((function (){var and__2946__auto__ = this$;if(and__2946__auto__)
{return this$.rvb$model$DeathIncarnate$dist$arity$2;
} else
{return and__2946__auto__;
}
})())
{return this$.rvb$model$DeathIncarnate$dist$arity$2(this$,target);
} else
{var x__3550__auto__ = (((this$ == null))?null:this$);return (function (){var or__2955__auto__ = (rvb.model.dist[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (rvb.model.dist["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DeathIncarnate.dist",this$);
}
}
})().call(null,this$,target);
}
});
rvb.model.target_angle = (function target_angle(this$,target){if((function (){var and__2946__auto__ = this$;if(and__2946__auto__)
{return this$.rvb$model$DeathIncarnate$target_angle$arity$2;
} else
{return and__2946__auto__;
}
})())
{return this$.rvb$model$DeathIncarnate$target_angle$arity$2(this$,target);
} else
{var x__3550__auto__ = (((this$ == null))?null:this$);return (function (){var or__2955__auto__ = (rvb.model.target_angle[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (rvb.model.target_angle["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DeathIncarnate.target-angle",this$);
}
}
})().call(null,this$,target);
}
});
rvb.model.find_target = (function find_target(this$,objects){if((function (){var and__2946__auto__ = this$;if(and__2946__auto__)
{return this$.rvb$model$DeathIncarnate$find_target$arity$2;
} else
{return and__2946__auto__;
}
})())
{return this$.rvb$model$DeathIncarnate$find_target$arity$2(this$,objects);
} else
{var x__3550__auto__ = (((this$ == null))?null:this$);return (function (){var or__2955__auto__ = (rvb.model.find_target[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (rvb.model.find_target["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DeathIncarnate.find-target",this$);
}
}
})().call(null,this$,objects);
}
});
rvb.model.turret_endpoint = (function turret_endpoint(this$){if((function (){var and__2946__auto__ = this$;if(and__2946__auto__)
{return this$.rvb$model$DeathIncarnate$turret_endpoint$arity$1;
} else
{return and__2946__auto__;
}
})())
{return this$.rvb$model$DeathIncarnate$turret_endpoint$arity$1(this$);
} else
{var x__3550__auto__ = (((this$ == null))?null:this$);return (function (){var or__2955__auto__ = (rvb.model.turret_endpoint[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (rvb.model.turret_endpoint["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DeathIncarnate.turret-endpoint",this$);
}
}
})().call(null,this$);
}
});
rvb.model.fire = (function fire(this$){if((function (){var and__2946__auto__ = this$;if(and__2946__auto__)
{return this$.rvb$model$DeathIncarnate$fire$arity$1;
} else
{return and__2946__auto__;
}
})())
{return this$.rvb$model$DeathIncarnate$fire$arity$1(this$);
} else
{var x__3550__auto__ = (((this$ == null))?null:this$);return (function (){var or__2955__auto__ = (rvb.model.fire[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (rvb.model.fire["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DeathIncarnate.fire",this$);
}
}
})().call(null,this$);
}
});
rvb.model.take_damage = (function take_damage(this$,damage){if((function (){var and__2946__auto__ = this$;if(and__2946__auto__)
{return this$.rvb$model$DeathIncarnate$take_damage$arity$2;
} else
{return and__2946__auto__;
}
})())
{return this$.rvb$model$DeathIncarnate$take_damage$arity$2(this$,damage);
} else
{var x__3550__auto__ = (((this$ == null))?null:this$);return (function (){var or__2955__auto__ = (rvb.model.take_damage[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (rvb.model.take_damage["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DeathIncarnate.take-damage",this$);
}
}
})().call(null,this$,damage);
}
});
rvb.model.die_BANG_ = (function die_BANG_(this$){if((function (){var and__2946__auto__ = this$;if(and__2946__auto__)
{return this$.rvb$model$DeathIncarnate$die_BANG_$arity$1;
} else
{return and__2946__auto__;
}
})())
{return this$.rvb$model$DeathIncarnate$die_BANG_$arity$1(this$);
} else
{var x__3550__auto__ = (((this$ == null))?null:this$);return (function (){var or__2955__auto__ = (rvb.model.die_BANG_[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (rvb.model.die_BANG_["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
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
rvb.model.Canvas.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3504__auto__){var self__ = this;
var this__3504__auto____$1 = this;var h__3359__auto__ = self__.__hash;if(!((h__3359__auto__ == null)))
{return h__3359__auto__;
} else
{var h__3359__auto____$1 = cljs.core.hash_imap.call(null,this__3504__auto____$1);self__.__hash = h__3359__auto____$1;
return h__3359__auto____$1;
}
});
rvb.model.Canvas.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3509__auto__,k__3510__auto__){var self__ = this;
var this__3509__auto____$1 = this;return cljs.core._lookup.call(null,this__3509__auto____$1,k__3510__auto__,null);
});
rvb.model.Canvas.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3511__auto__,k12187,else__3512__auto__){var self__ = this;
var this__3511__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k12187,else__3512__auto__);
} else
{return null;
}
});
rvb.model.Canvas.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3516__auto__,k__3517__auto__,G__12186){var self__ = this;
var this__3516__auto____$1 = this;var pred__12189 = cljs.core.keyword_identical_QMARK_;var expr__12190 = k__3517__auto__;return (new rvb.model.Canvas(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3517__auto__,G__12186),null));
});
rvb.model.Canvas.prototype.rvb$model$Constructable$ = true;
rvb.model.Canvas.prototype.rvb$model$Constructable$construct$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var canvas_object = document.getElementById("game");return cljs.core.merge.call(null,this$__$1,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"canvas","canvas",3941165258),canvas_object,new cljs.core.Keyword(null,"width","width",1127031096),canvas_object.width,new cljs.core.Keyword(null,"height","height",4087841945),canvas_object.height,new cljs.core.Keyword(null,"bg-color","bg-color",2612345677),"#0C1415",new cljs.core.Keyword(null,"context","context",1965435169),canvas_object.getContext("2d")], true));
});
rvb.model.Canvas.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3523__auto__,writer__3524__auto__,opts__3525__auto__){var self__ = this;
var this__3523__auto____$1 = this;var pr_pair__3526__auto__ = (function (keyval__3527__auto__){return cljs.core.pr_sequential_writer.call(null,writer__3524__auto__,cljs.core.pr_writer,""," ","",opts__3525__auto__,keyval__3527__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__3524__auto__,pr_pair__3526__auto__,"#rvb.model.Canvas{",", ","}",opts__3525__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
rvb.model.Canvas.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3514__auto__,entry__3515__auto__){var self__ = this;
var this__3514__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3515__auto__))
{return cljs.core._assoc.call(null,this__3514__auto____$1,cljs.core._nth.call(null,entry__3515__auto__,0),cljs.core._nth.call(null,entry__3515__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3514__auto____$1,entry__3515__auto__);
}
});
rvb.model.Canvas.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3521__auto__){var self__ = this;
var this__3521__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
rvb.model.Canvas.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3513__auto__){var self__ = this;
var this__3513__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
rvb.model.Canvas.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3505__auto__,other__3506__auto__){var self__ = this;
var this__3505__auto____$1 = this;if(cljs.core.truth_((function (){var and__2946__auto__ = other__3506__auto__;if(cljs.core.truth_(and__2946__auto__))
{var and__2946__auto____$1 = (this__3505__auto____$1.constructor === other__3506__auto__.constructor);if(and__2946__auto____$1)
{return cljs.core.equiv_map.call(null,this__3505__auto____$1,other__3506__auto__);
} else
{return and__2946__auto____$1;
}
} else
{return and__2946__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rvb.model.Canvas.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3508__auto__,G__12186){var self__ = this;
var this__3508__auto____$1 = this;return (new rvb.model.Canvas(G__12186,self__.__extmap,self__.__hash));
});
rvb.model.Canvas.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3507__auto__){var self__ = this;
var this__3507__auto____$1 = this;return self__.__meta;
});
rvb.model.Canvas.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3518__auto__,k__3519__auto__){var self__ = this;
var this__3518__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__3519__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3518__auto____$1),self__.__meta),k__3519__auto__);
} else
{return (new rvb.model.Canvas(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3519__auto__)),null));
}
});
rvb.model.Canvas.cljs$lang$type = true;
rvb.model.Canvas.cljs$lang$ctorPrSeq = (function (this__3543__auto__){return cljs.core.list.call(null,"rvb.model/Canvas");
});
rvb.model.Canvas.cljs$lang$ctorPrWriter = (function (this__3543__auto__,writer__3544__auto__){return cljs.core._write.call(null,writer__3544__auto__,"rvb.model/Canvas");
});
rvb.model.__GT_Canvas = (function __GT_Canvas(){return (new rvb.model.Canvas());
});
rvb.model.map__GT_Canvas = (function map__GT_Canvas(G__12188){return (new rvb.model.Canvas(null,cljs.core.dissoc.call(null,G__12188)));
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
rvb.model.Tank.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3504__auto__){var self__ = this;
var this__3504__auto____$1 = this;var h__3359__auto__ = self__.__hash;if(!((h__3359__auto__ == null)))
{return h__3359__auto__;
} else
{var h__3359__auto____$1 = cljs.core.hash_imap.call(null,this__3504__auto____$1);self__.__hash = h__3359__auto____$1;
return h__3359__auto____$1;
}
});
rvb.model.Tank.prototype.rvb$model$Movable$ = true;
rvb.model.Tank.prototype.rvb$model$Movable$move$arity$2 = (function (p__12201,length){var self__ = this;
var map__12202 = p__12201;var map__12202__$1 = ((cljs.core.seq_QMARK_.call(null,map__12202))?cljs.core.apply.call(null,cljs.core.hash_map,map__12202):map__12202);var this$ = map__12202__$1;var angle = cljs.core.get.call(null,map__12202__$1,new cljs.core.Keyword(null,"angle","angle",1106865221));var straight_corners = cljs.core.get.call(null,map__12202__$1,new cljs.core.Keyword(null,"straight-corners","straight-corners",889569373));var corners = cljs.core.get.call(null,map__12202__$1,new cljs.core.Keyword(null,"corners","corners",1968950320));var center = cljs.core.get.call(null,map__12202__$1,new cljs.core.Keyword(null,"center","center",3944857543));var map__12203 = this;var map__12203__$1 = ((cljs.core.seq_QMARK_.call(null,map__12203))?cljs.core.apply.call(null,cljs.core.hash_map,map__12203):map__12203);var this$__$1 = map__12203__$1;var angle__$1 = cljs.core.get.call(null,map__12203__$1,new cljs.core.Keyword(null,"angle","angle",1106865221));var straight_corners__$1 = cljs.core.get.call(null,map__12203__$1,new cljs.core.Keyword(null,"straight-corners","straight-corners",889569373));var corners__$1 = cljs.core.get.call(null,map__12203__$1,new cljs.core.Keyword(null,"corners","corners",1968950320));var center__$1 = cljs.core.get.call(null,map__12203__$1,new cljs.core.Keyword(null,"center","center",3944857543));var rad = rvb.util.deg__GT_rad.call(null,angle__$1);var diffX = (length * Math.cos(rad));var diffY = (length * Math.sin(rad));var new_center = cljs.core.apply.call(null,cljs.core.mapv,cljs.core._PLUS_,cljs.core.PersistentVector.fromArray([center__$1,cljs.core.PersistentVector.fromArray([diffX,diffY], true)], true));return cljs.core.merge.call(null,this$__$1,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"corners","corners",1968950320),cljs.core.mapv.call(null,(function (p1__12192_SHARP_){return cljs.core.apply.call(null,cljs.core.mapv,cljs.core._PLUS_,cljs.core.PersistentVector.fromArray([p1__12192_SHARP_,cljs.core.PersistentVector.fromArray([diffX,diffY], true)], true));
}),corners__$1),new cljs.core.Keyword(null,"straight-corners","straight-corners",889569373),cljs.core.mapv.call(null,(function (p1__12193_SHARP_){return cljs.core.apply.call(null,cljs.core.mapv,cljs.core._PLUS_,cljs.core.PersistentVector.fromArray([p1__12193_SHARP_,cljs.core.PersistentVector.fromArray([diffX,diffY], true)], true));
}),straight_corners__$1),new cljs.core.Keyword(null,"center","center",3944857543),new_center,new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.first.call(null,new_center),new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.second.call(null,new_center)], true));
});
rvb.model.Tank.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3509__auto__,k__3510__auto__){var self__ = this;
var this__3509__auto____$1 = this;return cljs.core._lookup.call(null,this__3509__auto____$1,k__3510__auto__,null);
});
rvb.model.Tank.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3511__auto__,k12199,else__3512__auto__){var self__ = this;
var this__3511__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k12199,new cljs.core.Keyword(null,"id","id",1013907597)))
{return self__.id;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12199,new cljs.core.Keyword(null,"canvas","canvas",3941165258)))
{return self__.canvas;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12199,new cljs.core.Keyword(null,"control","control",1965447375)))
{return self__.control;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12199,new cljs.core.Keyword(null,"animation","animation",2132414198)))
{return self__.animation;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12199,new cljs.core.Keyword(null,"events","events",4017542283)))
{return self__.events;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12199,new cljs.core.Keyword(null,"x","x",1013904362)))
{return self__.x;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12199,new cljs.core.Keyword(null,"y","y",1013904363)))
{return self__.y;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12199,new cljs.core.Keyword(null,"size","size",1017434995)))
{return self__.size;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12199,new cljs.core.Keyword(null,"health","health",4087608782)))
{return self__.health;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12199,new cljs.core.Keyword(null,"team","team",1017460175)))
{return self__.team;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k12199,else__3512__auto__);
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
rvb.model.Tank.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3516__auto__,k__3517__auto__,G__12198){var self__ = this;
var this__3516__auto____$1 = this;var pred__12204 = cljs.core.keyword_identical_QMARK_;var expr__12205 = k__3517__auto__;if(pred__12204.call(null,new cljs.core.Keyword(null,"id","id",1013907597),expr__12205))
{return (new rvb.model.Tank(G__12198,self__.canvas,self__.control,self__.animation,self__.events,self__.x,self__.y,self__.size,self__.health,self__.team,self__.__meta,self__.__extmap,null));
} else
{if(pred__12204.call(null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),expr__12205))
{return (new rvb.model.Tank(self__.id,G__12198,self__.control,self__.animation,self__.events,self__.x,self__.y,self__.size,self__.health,self__.team,self__.__meta,self__.__extmap,null));
} else
{if(pred__12204.call(null,new cljs.core.Keyword(null,"control","control",1965447375),expr__12205))
{return (new rvb.model.Tank(self__.id,self__.canvas,G__12198,self__.animation,self__.events,self__.x,self__.y,self__.size,self__.health,self__.team,self__.__meta,self__.__extmap,null));
} else
{if(pred__12204.call(null,new cljs.core.Keyword(null,"animation","animation",2132414198),expr__12205))
{return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,G__12198,self__.events,self__.x,self__.y,self__.size,self__.health,self__.team,self__.__meta,self__.__extmap,null));
} else
{if(pred__12204.call(null,new cljs.core.Keyword(null,"events","events",4017542283),expr__12205))
{return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,self__.animation,G__12198,self__.x,self__.y,self__.size,self__.health,self__.team,self__.__meta,self__.__extmap,null));
} else
{if(pred__12204.call(null,new cljs.core.Keyword(null,"x","x",1013904362),expr__12205))
{return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,self__.animation,self__.events,G__12198,self__.y,self__.size,self__.health,self__.team,self__.__meta,self__.__extmap,null));
} else
{if(pred__12204.call(null,new cljs.core.Keyword(null,"y","y",1013904363),expr__12205))
{return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,self__.animation,self__.events,self__.x,G__12198,self__.size,self__.health,self__.team,self__.__meta,self__.__extmap,null));
} else
{if(pred__12204.call(null,new cljs.core.Keyword(null,"size","size",1017434995),expr__12205))
{return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,self__.animation,self__.events,self__.x,self__.y,G__12198,self__.health,self__.team,self__.__meta,self__.__extmap,null));
} else
{if(pred__12204.call(null,new cljs.core.Keyword(null,"health","health",4087608782),expr__12205))
{return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,self__.animation,self__.events,self__.x,self__.y,self__.size,G__12198,self__.team,self__.__meta,self__.__extmap,null));
} else
{if(pred__12204.call(null,new cljs.core.Keyword(null,"team","team",1017460175),expr__12205))
{return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,self__.animation,self__.events,self__.x,self__.y,self__.size,self__.health,G__12198,self__.__meta,self__.__extmap,null));
} else
{return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,self__.animation,self__.events,self__.x,self__.y,self__.size,self__.health,self__.team,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3517__auto__,G__12198),null));
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
rvb.model.Tank.prototype.rvb$model$DeathIncarnate$orient$arity$2 = (function (p__12207,degree){var self__ = this;
var map__12208 = p__12207;var map__12208__$1 = ((cljs.core.seq_QMARK_.call(null,map__12208))?cljs.core.apply.call(null,cljs.core.hash_map,map__12208):map__12208);var this$ = map__12208__$1;var center = cljs.core.get.call(null,map__12208__$1,new cljs.core.Keyword(null,"center","center",3944857543));var straight_corners = cljs.core.get.call(null,map__12208__$1,new cljs.core.Keyword(null,"straight-corners","straight-corners",889569373));var map__12209 = this;var map__12209__$1 = ((cljs.core.seq_QMARK_.call(null,map__12209))?cljs.core.apply.call(null,cljs.core.hash_map,map__12209):map__12209);var this$__$1 = map__12209__$1;var center__$1 = cljs.core.get.call(null,map__12209__$1,new cljs.core.Keyword(null,"center","center",3944857543));var straight_corners__$1 = cljs.core.get.call(null,map__12209__$1,new cljs.core.Keyword(null,"straight-corners","straight-corners",889569373));var rad = rvb.util.deg__GT_rad.call(null,degree);var rotate = ((function (rad){
return (function (p__12210,corner){var vec__12211 = p__12210;var x__$1 = cljs.core.nth.call(null,vec__12211,0,null);var y__$1 = cljs.core.nth.call(null,vec__12211,1,null);return cljs.core.PersistentVector.fromArray([((x__$1 * Math.cos(rad)) - (y__$1 * Math.sin(rad))),((y__$1 * Math.cos(rad)) + (x__$1 * Math.sin(rad)))], true);
});})(rad))
;var transposed = cljs.core.mapv.call(null,((function (rad,rotate){
return (function (p1__12194_SHARP_){return cljs.core.apply.call(null,cljs.core.mapv,cljs.core._,cljs.core.PersistentVector.fromArray([p1__12194_SHARP_,center__$1], true));
});})(rad,rotate))
,straight_corners__$1);var oriented = cljs.core.mapv.call(null,rotate,transposed);return cljs.core.merge.call(null,this$__$1,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"corners","corners",1968950320),cljs.core.mapv.call(null,(function (p1__12195_SHARP_){return cljs.core.apply.call(null,cljs.core.mapv,cljs.core._PLUS_,cljs.core.PersistentVector.fromArray([p1__12195_SHARP_,center__$1], true));
}),oriented),new cljs.core.Keyword(null,"straight-corners","straight-corners",889569373),cljs.core.mapv.call(null,(function (p1__12196_SHARP_){return cljs.core.apply.call(null,cljs.core.mapv,cljs.core._PLUS_,cljs.core.PersistentVector.fromArray([p1__12196_SHARP_,center__$1], true));
}),transposed),new cljs.core.Keyword(null,"angle","angle",1106865221),cljs.core.mod.call(null,degree,360)], true));
});
rvb.model.Tank.prototype.rvb$model$DeathIncarnate$dist$arity$2 = (function (p__12212,target){var self__ = this;
var map__12213 = p__12212;var map__12213__$1 = ((cljs.core.seq_QMARK_.call(null,map__12213))?cljs.core.apply.call(null,cljs.core.hash_map,map__12213):map__12213);var this$ = map__12213__$1;var center = cljs.core.get.call(null,map__12213__$1,new cljs.core.Keyword(null,"center","center",3944857543));var map__12214 = this;var map__12214__$1 = ((cljs.core.seq_QMARK_.call(null,map__12214))?cljs.core.apply.call(null,cljs.core.hash_map,map__12214):map__12214);var this$__$1 = map__12214__$1;var center__$1 = cljs.core.get.call(null,map__12214__$1,new cljs.core.Keyword(null,"center","center",3944857543));var vec__12215 = center__$1;var myX = cljs.core.nth.call(null,vec__12215,0,null);var myY = cljs.core.nth.call(null,vec__12215,1,null);var vec__12216 = new cljs.core.Keyword(null,"center","center",3944857543).cljs$core$IFn$_invoke$arity$1(target);var targetX = cljs.core.nth.call(null,vec__12216,0,null);var targetY = cljs.core.nth.call(null,vec__12216,1,null);return Math.sqrt.call(null,(Math.pow.call(null,(myX - targetX),2) + Math.pow.call(null,(myY - targetY),2)));
});
rvb.model.Tank.prototype.rvb$model$DeathIncarnate$target_angle$arity$2 = (function (p__12217,target){var self__ = this;
var map__12218 = p__12217;var map__12218__$1 = ((cljs.core.seq_QMARK_.call(null,map__12218))?cljs.core.apply.call(null,cljs.core.hash_map,map__12218):map__12218);var this$ = map__12218__$1;var center = cljs.core.get.call(null,map__12218__$1,new cljs.core.Keyword(null,"center","center",3944857543));var map__12219 = this;var map__12219__$1 = ((cljs.core.seq_QMARK_.call(null,map__12219))?cljs.core.apply.call(null,cljs.core.hash_map,map__12219):map__12219);var this$__$1 = map__12219__$1;var center__$1 = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword(null,"center","center",3944857543));var vec__12220 = center__$1;var myX = cljs.core.nth.call(null,vec__12220,0,null);var myY = cljs.core.nth.call(null,vec__12220,1,null);var vec__12221 = new cljs.core.Keyword(null,"center","center",3944857543).cljs$core$IFn$_invoke$arity$1(target);var targetX = cljs.core.nth.call(null,vec__12221,0,null);var targetY = cljs.core.nth.call(null,vec__12221,1,null);var atan = Math.atan2((targetY - myY),(targetX - myX));return rvb.util.rad__GT_deg.call(null,atan);
});
rvb.model.Tank.prototype.rvb$model$DeathIncarnate$find_target$arity$2 = (function (p__12222,objects){var self__ = this;
var map__12223 = p__12222;var map__12223__$1 = ((cljs.core.seq_QMARK_.call(null,map__12223))?cljs.core.apply.call(null,cljs.core.hash_map,map__12223):map__12223);var this$ = map__12223__$1;var team__$1 = cljs.core.get.call(null,map__12223__$1,new cljs.core.Keyword(null,"team","team",1017460175));var map__12224 = this;var map__12224__$1 = ((cljs.core.seq_QMARK_.call(null,map__12224))?cljs.core.apply.call(null,cljs.core.hash_map,map__12224):map__12224);var this$__$1 = map__12224__$1;var team__$2 = cljs.core.get.call(null,map__12224__$1,new cljs.core.Keyword(null,"team","team",1017460175));var targets = cljs.core.remove.call(null,(function (p1__12197_SHARP_){return cljs.core._EQ_.call(null,team__$2,new cljs.core.Keyword(null,"team","team",1017460175).cljs$core$IFn$_invoke$arity$1(p1__12197_SHARP_));
}),objects);return cljs.core.apply.call(null,cljs.core.min_key,cljs.core.partial.call(null,rvb.model.dist,this$__$1),targets);
});
rvb.model.Tank.prototype.rvb$model$DeathIncarnate$turret_endpoint$arity$1 = (function (p__12225){var self__ = this;
var map__12226 = p__12225;var map__12226__$1 = ((cljs.core.seq_QMARK_.call(null,map__12226))?cljs.core.apply.call(null,cljs.core.hash_map,map__12226):map__12226);var this$ = map__12226__$1;var center = cljs.core.get.call(null,map__12226__$1,new cljs.core.Keyword(null,"center","center",3944857543));var width = cljs.core.get.call(null,map__12226__$1,new cljs.core.Keyword(null,"width","width",1127031096));var angle = cljs.core.get.call(null,map__12226__$1,new cljs.core.Keyword(null,"angle","angle",1106865221));var map__12227 = this;var map__12227__$1 = ((cljs.core.seq_QMARK_.call(null,map__12227))?cljs.core.apply.call(null,cljs.core.hash_map,map__12227):map__12227);var this$__$1 = map__12227__$1;var center__$1 = cljs.core.get.call(null,map__12227__$1,new cljs.core.Keyword(null,"center","center",3944857543));var width__$1 = cljs.core.get.call(null,map__12227__$1,new cljs.core.Keyword(null,"width","width",1127031096));var angle__$1 = cljs.core.get.call(null,map__12227__$1,new cljs.core.Keyword(null,"angle","angle",1106865221));var rad = rvb.util.deg__GT_rad.call(null,angle__$1);var vec__12228 = center__$1;var centerX = cljs.core.nth.call(null,vec__12228,0,null);var centerY = cljs.core.nth.call(null,vec__12228,1,null);var turret_length = (width__$1 * 0.8);return cljs.core.PersistentVector.fromArray([(centerX + (turret_length * Math.cos(rad))),(centerY + (turret_length * Math.sin(rad)))], true);
});
rvb.model.Tank.prototype.rvb$model$DeathIncarnate$fire$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
rvb.model.Tank.prototype.rvb$model$DeathIncarnate$take_damage$arity$2 = (function (this$,damage){var self__ = this;
var this$__$1 = this;return cljs.core.merge.call(null,this$__$1,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"health","health",4087608782),(self__.health - 1)], true));
});
rvb.model.Tank.prototype.rvb$model$DeathIncarnate$die_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;cljs.core.async.close_BANG_.call(null,self__.control);
cljs.core.async.close_BANG_.call(null,self__.events);
cljs.core.async.close_BANG_.call(null,self__.animation);
return rvb.model.erase_BANG_.call(null,this$__$1);
});
rvb.model.Tank.prototype.rvb$model$Constructable$ = true;
rvb.model.Tank.prototype.rvb$model$Constructable$construct$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var width = self__.size;var height = (0.7 * self__.size);var straight_corners = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([self__.x,self__.y], true),cljs.core.PersistentVector.fromArray([(self__.x + width),self__.y], true),cljs.core.PersistentVector.fromArray([(self__.x + width),(self__.y + height)], true),cljs.core.PersistentVector.fromArray([self__.x,(self__.y + height)], true)], true);return cljs.core.merge.call(null,this$__$1,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"width","width",1127031096),width,new cljs.core.Keyword(null,"height","height",4087841945),height,new cljs.core.Keyword(null,"collide-type","collide-type",1434102491),new cljs.core.Keyword(null,"tank","tank",1017456732),new cljs.core.Keyword(null,"color","color",1108746965),((cljs.core._EQ_.call(null,self__.team,new cljs.core.Keyword(null,"red","red",1014017027)))?"#DF740C":"#6FC3DF"),new cljs.core.Keyword(null,"center","center",3944857543),cljs.core.PersistentVector.fromArray([(self__.x + (width / 2)),(self__.y + (height / 2))], true),new cljs.core.Keyword(null,"angle","angle",1106865221),((cljs.core._EQ_.call(null,self__.team,new cljs.core.Keyword(null,"red","red",1014017027)))?0:180),new cljs.core.Keyword(null,"straight-corners","straight-corners",889569373),straight_corners,new cljs.core.Keyword(null,"corners","corners",1968950320),straight_corners], true));
});
rvb.model.Tank.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3523__auto__,writer__3524__auto__,opts__3525__auto__){var self__ = this;
var this__3523__auto____$1 = this;var pr_pair__3526__auto__ = (function (keyval__3527__auto__){return cljs.core.pr_sequential_writer.call(null,writer__3524__auto__,cljs.core.pr_writer,""," ","",opts__3525__auto__,keyval__3527__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__3524__auto__,pr_pair__3526__auto__,"#rvb.model.Tank{",", ","}",opts__3525__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"id","id",1013907597),self__.id),cljs.core.vector.call(null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),self__.canvas),cljs.core.vector.call(null,new cljs.core.Keyword(null,"control","control",1965447375),self__.control),cljs.core.vector.call(null,new cljs.core.Keyword(null,"animation","animation",2132414198),self__.animation),cljs.core.vector.call(null,new cljs.core.Keyword(null,"events","events",4017542283),self__.events),cljs.core.vector.call(null,new cljs.core.Keyword(null,"x","x",1013904362),self__.x),cljs.core.vector.call(null,new cljs.core.Keyword(null,"y","y",1013904363),self__.y),cljs.core.vector.call(null,new cljs.core.Keyword(null,"size","size",1017434995),self__.size),cljs.core.vector.call(null,new cljs.core.Keyword(null,"health","health",4087608782),self__.health),cljs.core.vector.call(null,new cljs.core.Keyword(null,"team","team",1017460175),self__.team)], true),self__.__extmap));
});
rvb.model.Tank.prototype.rvb$model$Renderable$ = true;
rvb.model.Tank.prototype.rvb$model$Renderable$render_BANG_$arity$1 = (function (p__12229){var self__ = this;
var map__12230 = p__12229;var map__12230__$1 = ((cljs.core.seq_QMARK_.call(null,map__12230))?cljs.core.apply.call(null,cljs.core.hash_map,map__12230):map__12230);var this$ = map__12230__$1;var health__$1 = cljs.core.get.call(null,map__12230__$1,new cljs.core.Keyword(null,"health","health",4087608782));var width = cljs.core.get.call(null,map__12230__$1,new cljs.core.Keyword(null,"width","width",1127031096));var angle = cljs.core.get.call(null,map__12230__$1,new cljs.core.Keyword(null,"angle","angle",1106865221));var center = cljs.core.get.call(null,map__12230__$1,new cljs.core.Keyword(null,"center","center",3944857543));var corners = cljs.core.get.call(null,map__12230__$1,new cljs.core.Keyword(null,"corners","corners",1968950320));var color = cljs.core.get.call(null,map__12230__$1,new cljs.core.Keyword(null,"color","color",1108746965));var map__12231 = this;var map__12231__$1 = ((cljs.core.seq_QMARK_.call(null,map__12231))?cljs.core.apply.call(null,cljs.core.hash_map,map__12231):map__12231);var this$__$1 = map__12231__$1;var health__$2 = cljs.core.get.call(null,map__12231__$1,new cljs.core.Keyword(null,"health","health",4087608782));var width__$1 = cljs.core.get.call(null,map__12231__$1,new cljs.core.Keyword(null,"width","width",1127031096));var angle__$1 = cljs.core.get.call(null,map__12231__$1,new cljs.core.Keyword(null,"angle","angle",1106865221));var center__$1 = cljs.core.get.call(null,map__12231__$1,new cljs.core.Keyword(null,"center","center",3944857543));var corners__$1 = cljs.core.get.call(null,map__12231__$1,new cljs.core.Keyword(null,"corners","corners",1968950320));var color__$1 = cljs.core.get.call(null,map__12231__$1,new cljs.core.Keyword(null,"color","color",1108746965));var context = new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(self__.canvas);var rad = rvb.util.deg__GT_rad.call(null,angle__$1);var vec__12232 = cljs.core.first.call(null,corners__$1);var startX = cljs.core.nth.call(null,vec__12232,0,null);var startY = cljs.core.nth.call(null,vec__12232,1,null);var vec__12233 = center__$1;var centerX = cljs.core.nth.call(null,vec__12233,0,null);var centerY = cljs.core.nth.call(null,vec__12233,1,null);var vec__12234 = rvb.model.turret_endpoint.call(null,this$__$1);var turretX = cljs.core.nth.call(null,vec__12234,0,null);var turretY = cljs.core.nth.call(null,vec__12234,1,null);var dirX = Math.cos(rad);var dirY = Math.sin(rad);context.strokeStyle = color__$1;
if(cljs.core._EQ_.call(null,color__$1,new cljs.core.Keyword(null,"bg-color","bg-color",2612345677).cljs$core$IFn$_invoke$arity$1(self__.canvas)))
{context.lineWidth = 6;
} else
{context.lineWidth = health__$2;
}
context.beginPath();
context.moveTo(startX,startY);
var seq__12235_12246 = cljs.core.seq.call(null,cljs.core.rest.call(null,corners__$1));var chunk__12236_12247 = null;var count__12237_12248 = 0;var i__12238_12249 = 0;while(true){
if((i__12238_12249 < count__12237_12248))
{var vec__12239_12250 = cljs.core._nth.call(null,chunk__12236_12247,i__12238_12249);var x_12251__$1 = cljs.core.nth.call(null,vec__12239_12250,0,null);var y_12252__$1 = cljs.core.nth.call(null,vec__12239_12250,1,null);context.lineTo(x_12251__$1,y_12252__$1);
{
var G__12253 = seq__12235_12246;
var G__12254 = chunk__12236_12247;
var G__12255 = count__12237_12248;
var G__12256 = (i__12238_12249 + 1);
seq__12235_12246 = G__12253;
chunk__12236_12247 = G__12254;
count__12237_12248 = G__12255;
i__12238_12249 = G__12256;
continue;
}
} else
{var temp__4092__auto___12257 = cljs.core.seq.call(null,seq__12235_12246);if(temp__4092__auto___12257)
{var seq__12235_12258__$1 = temp__4092__auto___12257;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12235_12258__$1))
{var c__3664__auto___12259 = cljs.core.chunk_first.call(null,seq__12235_12258__$1);{
var G__12260 = cljs.core.chunk_rest.call(null,seq__12235_12258__$1);
var G__12261 = c__3664__auto___12259;
var G__12262 = cljs.core.count.call(null,c__3664__auto___12259);
var G__12263 = 0;
seq__12235_12246 = G__12260;
chunk__12236_12247 = G__12261;
count__12237_12248 = G__12262;
i__12238_12249 = G__12263;
continue;
}
} else
{var vec__12240_12264 = cljs.core.first.call(null,seq__12235_12258__$1);var x_12265__$1 = cljs.core.nth.call(null,vec__12240_12264,0,null);var y_12266__$1 = cljs.core.nth.call(null,vec__12240_12264,1,null);context.lineTo(x_12265__$1,y_12266__$1);
{
var G__12267 = cljs.core.next.call(null,seq__12235_12258__$1);
var G__12268 = null;
var G__12269 = 0;
var G__12270 = 0;
seq__12235_12246 = G__12267;
chunk__12236_12247 = G__12268;
count__12237_12248 = G__12269;
i__12238_12249 = G__12270;
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
if(cljs.core._EQ_.call(null,color__$1,new cljs.core.Keyword(null,"bg-color","bg-color",2612345677).cljs$core$IFn$_invoke$arity$1(self__.canvas)))
{context.lineWidth = 6;
} else
{context.lineWidth = 2;
}
context.beginPath();
if(cljs.core._EQ_.call(null,color__$1,new cljs.core.Keyword(null,"bg-color","bg-color",2612345677).cljs$core$IFn$_invoke$arity$1(self__.canvas)))
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
var this$__$1 = this;return rvb.model.render_BANG_.call(null,cljs.core.merge.call(null,this$__$1,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"color","color",1108746965),new cljs.core.Keyword(null,"bg-color","bg-color",2612345677).cljs$core$IFn$_invoke$arity$1(self__.canvas)], true)));
});
rvb.model.Tank.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3514__auto__,entry__3515__auto__){var self__ = this;
var this__3514__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3515__auto__))
{return cljs.core._assoc.call(null,this__3514__auto____$1,cljs.core._nth.call(null,entry__3515__auto__,0),cljs.core._nth.call(null,entry__3515__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3514__auto____$1,entry__3515__auto__);
}
});
rvb.model.Tank.prototype.rvb$model$Collideable$ = true;
rvb.model.Tank.prototype.rvb$model$Collideable$bounds$arity$1 = (function (p__12241){var self__ = this;
var map__12242 = p__12241;var map__12242__$1 = ((cljs.core.seq_QMARK_.call(null,map__12242))?cljs.core.apply.call(null,cljs.core.hash_map,map__12242):map__12242);var this$ = map__12242__$1;var corners = cljs.core.get.call(null,map__12242__$1,new cljs.core.Keyword(null,"corners","corners",1968950320));var map__12243 = this;var map__12243__$1 = ((cljs.core.seq_QMARK_.call(null,map__12243))?cljs.core.apply.call(null,cljs.core.hash_map,map__12243):map__12243);var this$__$1 = map__12243__$1;var corners__$1 = cljs.core.get.call(null,map__12243__$1,new cljs.core.Keyword(null,"corners","corners",1968950320));var buffer = 2;var minX = (cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,corners__$1)) - buffer);var maxX = (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,corners__$1)) + buffer);var minY = (cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.second,corners__$1)) - buffer);var maxY = (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,corners__$1)) + buffer);return cljs.core.PersistentVector.fromArray([minX,maxX,minY,maxY], true);
});
rvb.model.Tank.prototype.rvb$model$Collideable$collides_QMARK_$arity$2 = (function (this$,object){var self__ = this;
var this$__$1 = this;var vec__12244 = rvb.model.bounds.call(null,this$__$1);var my_min_x = cljs.core.nth.call(null,vec__12244,0,null);var my_max_x = cljs.core.nth.call(null,vec__12244,1,null);var my_min_y = cljs.core.nth.call(null,vec__12244,2,null);var my_max_y = cljs.core.nth.call(null,vec__12244,3,null);var vec__12245 = rvb.model.bounds.call(null,object);var obj_min_x = cljs.core.nth.call(null,vec__12245,0,null);var obj_max_x = cljs.core.nth.call(null,vec__12245,1,null);var obj_min_y = cljs.core.nth.call(null,vec__12245,2,null);var obj_max_y = cljs.core.nth.call(null,vec__12245,3,null);return !(((my_min_x > obj_max_x)) || ((my_min_y > obj_max_y)) || ((my_max_x < obj_min_x)) || ((my_max_y < obj_min_y)));
});
rvb.model.Tank.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3521__auto__){var self__ = this;
var this__3521__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"id","id",1013907597),self__.id),cljs.core.vector.call(null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),self__.canvas),cljs.core.vector.call(null,new cljs.core.Keyword(null,"control","control",1965447375),self__.control),cljs.core.vector.call(null,new cljs.core.Keyword(null,"animation","animation",2132414198),self__.animation),cljs.core.vector.call(null,new cljs.core.Keyword(null,"events","events",4017542283),self__.events),cljs.core.vector.call(null,new cljs.core.Keyword(null,"x","x",1013904362),self__.x),cljs.core.vector.call(null,new cljs.core.Keyword(null,"y","y",1013904363),self__.y),cljs.core.vector.call(null,new cljs.core.Keyword(null,"size","size",1017434995),self__.size),cljs.core.vector.call(null,new cljs.core.Keyword(null,"health","health",4087608782),self__.health),cljs.core.vector.call(null,new cljs.core.Keyword(null,"team","team",1017460175),self__.team)], true),self__.__extmap));
});
rvb.model.Tank.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3513__auto__){var self__ = this;
var this__3513__auto____$1 = this;return (10 + cljs.core.count.call(null,self__.__extmap));
});
rvb.model.Tank.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3505__auto__,other__3506__auto__){var self__ = this;
var this__3505__auto____$1 = this;if(cljs.core.truth_((function (){var and__2946__auto__ = other__3506__auto__;if(cljs.core.truth_(and__2946__auto__))
{var and__2946__auto____$1 = (this__3505__auto____$1.constructor === other__3506__auto__.constructor);if(and__2946__auto____$1)
{return cljs.core.equiv_map.call(null,this__3505__auto____$1,other__3506__auto__);
} else
{return and__2946__auto____$1;
}
} else
{return and__2946__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rvb.model.Tank.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3508__auto__,G__12198){var self__ = this;
var this__3508__auto____$1 = this;return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,self__.animation,self__.events,self__.x,self__.y,self__.size,self__.health,self__.team,G__12198,self__.__extmap,self__.__hash));
});
rvb.model.Tank.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3507__auto__){var self__ = this;
var this__3507__auto____$1 = this;return self__.__meta;
});
rvb.model.Tank.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3518__auto__,k__3519__auto__){var self__ = this;
var this__3518__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"health","health",4087608782),null,new cljs.core.Keyword(null,"control","control",1965447375),null,new cljs.core.Keyword(null,"team","team",1017460175),null,new cljs.core.Keyword(null,"y","y",1013904363),null,new cljs.core.Keyword(null,"x","x",1013904362),null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),null,new cljs.core.Keyword(null,"size","size",1017434995),null,new cljs.core.Keyword(null,"animation","animation",2132414198),null,new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"events","events",4017542283),null], true),k__3519__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3518__auto____$1),self__.__meta),k__3519__auto__);
} else
{return (new rvb.model.Tank(self__.id,self__.canvas,self__.control,self__.animation,self__.events,self__.x,self__.y,self__.size,self__.health,self__.team,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3519__auto__)),null));
}
});
rvb.model.Tank.cljs$lang$type = true;
rvb.model.Tank.cljs$lang$ctorPrSeq = (function (this__3543__auto__){return cljs.core.list.call(null,"rvb.model/Tank");
});
rvb.model.Tank.cljs$lang$ctorPrWriter = (function (this__3543__auto__,writer__3544__auto__){return cljs.core._write.call(null,writer__3544__auto__,"rvb.model/Tank");
});
rvb.model.__GT_Tank = (function __GT_Tank(id,canvas,control,animation,events,x,y,size,health,team){return (new rvb.model.Tank(id,canvas,control,animation,events,x,y,size,health,team));
});
rvb.model.map__GT_Tank = (function map__GT_Tank(G__12200){return (new rvb.model.Tank(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(G__12200),new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(G__12200),new cljs.core.Keyword(null,"control","control",1965447375).cljs$core$IFn$_invoke$arity$1(G__12200),new cljs.core.Keyword(null,"animation","animation",2132414198).cljs$core$IFn$_invoke$arity$1(G__12200),new cljs.core.Keyword(null,"events","events",4017542283).cljs$core$IFn$_invoke$arity$1(G__12200),new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(G__12200),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(G__12200),new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(G__12200),new cljs.core.Keyword(null,"health","health",4087608782).cljs$core$IFn$_invoke$arity$1(G__12200),new cljs.core.Keyword(null,"team","team",1017460175).cljs$core$IFn$_invoke$arity$1(G__12200),null,cljs.core.dissoc.call(null,G__12200,new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"control","control",1965447375),new cljs.core.Keyword(null,"animation","animation",2132414198),new cljs.core.Keyword(null,"events","events",4017542283),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"size","size",1017434995),new cljs.core.Keyword(null,"health","health",4087608782),new cljs.core.Keyword(null,"team","team",1017460175))));
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
rvb.model.Bullet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3504__auto__){var self__ = this;
var this__3504__auto____$1 = this;var h__3359__auto__ = self__.__hash;if(!((h__3359__auto__ == null)))
{return h__3359__auto__;
} else
{var h__3359__auto____$1 = cljs.core.hash_imap.call(null,this__3504__auto____$1);self__.__hash = h__3359__auto____$1;
return h__3359__auto____$1;
}
});
rvb.model.Bullet.prototype.rvb$model$Movable$ = true;
rvb.model.Bullet.prototype.rvb$model$Movable$move$arity$2 = (function (p__12274,length){var self__ = this;
var map__12275 = p__12274;var map__12275__$1 = ((cljs.core.seq_QMARK_.call(null,map__12275))?cljs.core.apply.call(null,cljs.core.hash_map,map__12275):map__12275);var this$ = map__12275__$1;var angle__$1 = cljs.core.get.call(null,map__12275__$1,new cljs.core.Keyword(null,"angle","angle",1106865221));var map__12276 = this;var map__12276__$1 = ((cljs.core.seq_QMARK_.call(null,map__12276))?cljs.core.apply.call(null,cljs.core.hash_map,map__12276):map__12276);var this$__$1 = map__12276__$1;var angle__$2 = cljs.core.get.call(null,map__12276__$1,new cljs.core.Keyword(null,"angle","angle",1106865221));var rad = rvb.util.deg__GT_rad.call(null,angle__$2);var diffX = (length * Math.cos(rad));var diffY = (length * Math.sin(rad));return cljs.core.merge.call(null,this$__$1,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"x","x",1013904362),(self__.x + diffX),new cljs.core.Keyword(null,"y","y",1013904363),(self__.y + diffY)], true));
});
rvb.model.Bullet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3509__auto__,k__3510__auto__){var self__ = this;
var this__3509__auto____$1 = this;return cljs.core._lookup.call(null,this__3509__auto____$1,k__3510__auto__,null);
});
rvb.model.Bullet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3511__auto__,k12272,else__3512__auto__){var self__ = this;
var this__3511__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k12272,new cljs.core.Keyword(null,"canvas","canvas",3941165258)))
{return self__.canvas;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12272,new cljs.core.Keyword(null,"x","x",1013904362)))
{return self__.x;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12272,new cljs.core.Keyword(null,"y","y",1013904363)))
{return self__.y;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12272,new cljs.core.Keyword(null,"team","team",1017460175)))
{return self__.team;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12272,new cljs.core.Keyword(null,"angle","angle",1106865221)))
{return self__.angle;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k12272,else__3512__auto__);
} else
{return null;
}
}
}
}
}
}
});
rvb.model.Bullet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3516__auto__,k__3517__auto__,G__12271){var self__ = this;
var this__3516__auto____$1 = this;var pred__12277 = cljs.core.keyword_identical_QMARK_;var expr__12278 = k__3517__auto__;if(pred__12277.call(null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),expr__12278))
{return (new rvb.model.Bullet(G__12271,self__.x,self__.y,self__.team,self__.angle,self__.__meta,self__.__extmap,null));
} else
{if(pred__12277.call(null,new cljs.core.Keyword(null,"x","x",1013904362),expr__12278))
{return (new rvb.model.Bullet(self__.canvas,G__12271,self__.y,self__.team,self__.angle,self__.__meta,self__.__extmap,null));
} else
{if(pred__12277.call(null,new cljs.core.Keyword(null,"y","y",1013904363),expr__12278))
{return (new rvb.model.Bullet(self__.canvas,self__.x,G__12271,self__.team,self__.angle,self__.__meta,self__.__extmap,null));
} else
{if(pred__12277.call(null,new cljs.core.Keyword(null,"team","team",1017460175),expr__12278))
{return (new rvb.model.Bullet(self__.canvas,self__.x,self__.y,G__12271,self__.angle,self__.__meta,self__.__extmap,null));
} else
{if(pred__12277.call(null,new cljs.core.Keyword(null,"angle","angle",1106865221),expr__12278))
{return (new rvb.model.Bullet(self__.canvas,self__.x,self__.y,self__.team,G__12271,self__.__meta,self__.__extmap,null));
} else
{return (new rvb.model.Bullet(self__.canvas,self__.x,self__.y,self__.team,self__.angle,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3517__auto__,G__12271),null));
}
}
}
}
}
});
rvb.model.Bullet.prototype.rvb$model$Constructable$ = true;
rvb.model.Bullet.prototype.rvb$model$Constructable$construct$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.merge.call(null,this$__$1,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"size","size",1017434995),5,new cljs.core.Keyword(null,"collide-type","collide-type",1434102491),new cljs.core.Keyword(null,"bullet","bullet",3930937460),new cljs.core.Keyword(null,"color","color",1108746965),((cljs.core._EQ_.call(null,self__.team,new cljs.core.Keyword(null,"red","red",1014017027)))?"#DF740C":"#6FC3DF")], true));
});
rvb.model.Bullet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3523__auto__,writer__3524__auto__,opts__3525__auto__){var self__ = this;
var this__3523__auto____$1 = this;var pr_pair__3526__auto__ = (function (keyval__3527__auto__){return cljs.core.pr_sequential_writer.call(null,writer__3524__auto__,cljs.core.pr_writer,""," ","",opts__3525__auto__,keyval__3527__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__3524__auto__,pr_pair__3526__auto__,"#rvb.model.Bullet{",", ","}",opts__3525__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),self__.canvas),cljs.core.vector.call(null,new cljs.core.Keyword(null,"x","x",1013904362),self__.x),cljs.core.vector.call(null,new cljs.core.Keyword(null,"y","y",1013904363),self__.y),cljs.core.vector.call(null,new cljs.core.Keyword(null,"team","team",1017460175),self__.team),cljs.core.vector.call(null,new cljs.core.Keyword(null,"angle","angle",1106865221),self__.angle)], true),self__.__extmap));
});
rvb.model.Bullet.prototype.rvb$model$Renderable$ = true;
rvb.model.Bullet.prototype.rvb$model$Renderable$render_BANG_$arity$1 = (function (p__12280){var self__ = this;
var map__12281 = p__12280;var map__12281__$1 = ((cljs.core.seq_QMARK_.call(null,map__12281))?cljs.core.apply.call(null,cljs.core.hash_map,map__12281):map__12281);var this$ = map__12281__$1;var color = cljs.core.get.call(null,map__12281__$1,new cljs.core.Keyword(null,"color","color",1108746965));var size = cljs.core.get.call(null,map__12281__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__12282 = this;var map__12282__$1 = ((cljs.core.seq_QMARK_.call(null,map__12282))?cljs.core.apply.call(null,cljs.core.hash_map,map__12282):map__12282);var this$__$1 = map__12282__$1;var color__$1 = cljs.core.get.call(null,map__12282__$1,new cljs.core.Keyword(null,"color","color",1108746965));var size__$1 = cljs.core.get.call(null,map__12282__$1,new cljs.core.Keyword(null,"size","size",1017434995));var context = new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(self__.canvas);var rad = rvb.util.deg__GT_rad.call(null,self__.angle);var backX = (-1 * Math.cos(rad));var backY = (-1 * Math.sin(rad));var diffX = (size__$1 * Math.cos(rad));var diffY = (size__$1 * Math.sin(rad));context.strokeStyle = color__$1;
if(cljs.core._EQ_.call(null,color__$1,new cljs.core.Keyword(null,"bg-color","bg-color",2612345677).cljs$core$IFn$_invoke$arity$1(self__.canvas)))
{context.lineWidth = 6;
} else
{context.lineWidth = 4;
}
context.beginPath();
if(cljs.core._EQ_.call(null,color__$1,new cljs.core.Keyword(null,"bg-color","bg-color",2612345677).cljs$core$IFn$_invoke$arity$1(self__.canvas)))
{context.moveTo((self__.x + backX),(self__.y + backY));
} else
{context.moveTo(self__.x,self__.y);
}
context.lineTo((self__.x + diffX),(self__.y + diffY));
context.closePath();
return context.stroke();
});
rvb.model.Bullet.prototype.rvb$model$Renderable$erase_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return rvb.model.render_BANG_.call(null,cljs.core.merge.call(null,this$__$1,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"color","color",1108746965),new cljs.core.Keyword(null,"bg-color","bg-color",2612345677).cljs$core$IFn$_invoke$arity$1(self__.canvas)], true)));
});
rvb.model.Bullet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3514__auto__,entry__3515__auto__){var self__ = this;
var this__3514__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3515__auto__))
{return cljs.core._assoc.call(null,this__3514__auto____$1,cljs.core._nth.call(null,entry__3515__auto__,0),cljs.core._nth.call(null,entry__3515__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3514__auto____$1,entry__3515__auto__);
}
});
rvb.model.Bullet.prototype.rvb$model$Collideable$ = true;
rvb.model.Bullet.prototype.rvb$model$Collideable$bounds$arity$1 = (function (p__12283){var self__ = this;
var map__12284 = p__12283;var map__12284__$1 = ((cljs.core.seq_QMARK_.call(null,map__12284))?cljs.core.apply.call(null,cljs.core.hash_map,map__12284):map__12284);var this$ = map__12284__$1;var size = cljs.core.get.call(null,map__12284__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__12285 = this;var map__12285__$1 = ((cljs.core.seq_QMARK_.call(null,map__12285))?cljs.core.apply.call(null,cljs.core.hash_map,map__12285):map__12285);var this$__$1 = map__12285__$1;var size__$1 = cljs.core.get.call(null,map__12285__$1,new cljs.core.Keyword(null,"size","size",1017434995));var rad = rvb.util.deg__GT_rad.call(null,self__.angle);var extX = (self__.x + (size__$1 * Math.cos(rad)));var extY = (self__.y + (size__$1 * Math.sin(rad)));var minX = (function (){var x__3267__auto__ = self__.x;var y__3268__auto__ = extX;return ((x__3267__auto__ < y__3268__auto__) ? x__3267__auto__ : y__3268__auto__);
})();var maxX = (function (){var x__3260__auto__ = self__.x;var y__3261__auto__ = extX;return ((x__3260__auto__ > y__3261__auto__) ? x__3260__auto__ : y__3261__auto__);
})();var minY = (function (){var x__3267__auto__ = self__.y;var y__3268__auto__ = extY;return ((x__3267__auto__ < y__3268__auto__) ? x__3267__auto__ : y__3268__auto__);
})();var maxY = (function (){var x__3260__auto__ = self__.y;var y__3261__auto__ = extY;return ((x__3260__auto__ > y__3261__auto__) ? x__3260__auto__ : y__3261__auto__);
})();return cljs.core.PersistentVector.fromArray([minX,maxX,minY,maxY], true);
});
rvb.model.Bullet.prototype.rvb$model$Collideable$collides_QMARK_$arity$2 = (function (this$,object){var self__ = this;
var this$__$1 = this;var vec__12286 = rvb.model.bounds.call(null,this$__$1);var my_min_x = cljs.core.nth.call(null,vec__12286,0,null);var my_max_x = cljs.core.nth.call(null,vec__12286,1,null);var my_min_y = cljs.core.nth.call(null,vec__12286,2,null);var my_max_y = cljs.core.nth.call(null,vec__12286,3,null);var vec__12287 = rvb.model.bounds.call(null,object);var obj_min_x = cljs.core.nth.call(null,vec__12287,0,null);var obj_max_x = cljs.core.nth.call(null,vec__12287,1,null);var obj_min_y = cljs.core.nth.call(null,vec__12287,2,null);var obj_max_y = cljs.core.nth.call(null,vec__12287,3,null);return !(((my_min_x > obj_max_x)) || ((my_min_y > obj_max_y)) || ((my_max_x < obj_min_x)) || ((my_max_y < obj_min_y)));
});
rvb.model.Bullet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3521__auto__){var self__ = this;
var this__3521__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),self__.canvas),cljs.core.vector.call(null,new cljs.core.Keyword(null,"x","x",1013904362),self__.x),cljs.core.vector.call(null,new cljs.core.Keyword(null,"y","y",1013904363),self__.y),cljs.core.vector.call(null,new cljs.core.Keyword(null,"team","team",1017460175),self__.team),cljs.core.vector.call(null,new cljs.core.Keyword(null,"angle","angle",1106865221),self__.angle)], true),self__.__extmap));
});
rvb.model.Bullet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3513__auto__){var self__ = this;
var this__3513__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
rvb.model.Bullet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3505__auto__,other__3506__auto__){var self__ = this;
var this__3505__auto____$1 = this;if(cljs.core.truth_((function (){var and__2946__auto__ = other__3506__auto__;if(cljs.core.truth_(and__2946__auto__))
{var and__2946__auto____$1 = (this__3505__auto____$1.constructor === other__3506__auto__.constructor);if(and__2946__auto____$1)
{return cljs.core.equiv_map.call(null,this__3505__auto____$1,other__3506__auto__);
} else
{return and__2946__auto____$1;
}
} else
{return and__2946__auto__;
}
})()))
{return true;
} else
{return false;
}
});
rvb.model.Bullet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3508__auto__,G__12271){var self__ = this;
var this__3508__auto____$1 = this;return (new rvb.model.Bullet(self__.canvas,self__.x,self__.y,self__.team,self__.angle,G__12271,self__.__extmap,self__.__hash));
});
rvb.model.Bullet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3507__auto__){var self__ = this;
var this__3507__auto____$1 = this;return self__.__meta;
});
rvb.model.Bullet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3518__auto__,k__3519__auto__){var self__ = this;
var this__3518__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"team","team",1017460175),null,new cljs.core.Keyword(null,"y","y",1013904363),null,new cljs.core.Keyword(null,"x","x",1013904362),null,new cljs.core.Keyword(null,"canvas","canvas",3941165258),null,new cljs.core.Keyword(null,"angle","angle",1106865221),null], true),k__3519__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3518__auto____$1),self__.__meta),k__3519__auto__);
} else
{return (new rvb.model.Bullet(self__.canvas,self__.x,self__.y,self__.team,self__.angle,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3519__auto__)),null));
}
});
rvb.model.Bullet.cljs$lang$type = true;
rvb.model.Bullet.cljs$lang$ctorPrSeq = (function (this__3543__auto__){return cljs.core.list.call(null,"rvb.model/Bullet");
});
rvb.model.Bullet.cljs$lang$ctorPrWriter = (function (this__3543__auto__,writer__3544__auto__){return cljs.core._write.call(null,writer__3544__auto__,"rvb.model/Bullet");
});
rvb.model.__GT_Bullet = (function __GT_Bullet(canvas,x,y,team,angle){return (new rvb.model.Bullet(canvas,x,y,team,angle));
});
rvb.model.map__GT_Bullet = (function map__GT_Bullet(G__12273){return (new rvb.model.Bullet(new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(G__12273),new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(G__12273),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(G__12273),new cljs.core.Keyword(null,"team","team",1017460175).cljs$core$IFn$_invoke$arity$1(G__12273),new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(G__12273),null,cljs.core.dissoc.call(null,G__12273,new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"team","team",1017460175),new cljs.core.Keyword(null,"angle","angle",1106865221))));
});

//@ sourceMappingURL=model.js.map