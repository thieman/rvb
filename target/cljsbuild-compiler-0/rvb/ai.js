goog.provide('rvb.ai');
goog.require('cljs.core');
goog.require('rvb.util');
goog.require('rvb.model');
goog.require('rvb.util');
goog.require('rvb.model');
rvb.ai.animate = (function animate(tank,op,arg){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tank-id","tank-id",3766965328),new cljs.core.Keyword(null,"id","id",1013907597).call(null,tank),new cljs.core.Keyword(null,"op","op",1013907795),op,new cljs.core.Keyword(null,"arg","arg",1014001096),arg], true);
});
rvb.ai.enemy_tanks = (function enemy_tanks(tank,tank_coll){return cljs.core.remove.call(null,(function (p1__8886_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"team","team",1017460175).call(null,tank),new cljs.core.Keyword(null,"team","team",1017460175).call(null,p1__8886_SHARP_));
}),tank_coll);
});
rvb.ai.make_decisions_STAR_ = (function make_decisions_STAR_(tank,tank_coll,speed,p__8887){var map__8895 = p__8887;var map__8895__$1 = ((cljs.core.seq_QMARK_.call(null,map__8895))?cljs.core.apply.call(null,cljs.core.hash_map,map__8895):map__8895);var control_args = map__8895__$1;var info = cljs.core.get.call(null,map__8895__$1,new cljs.core.Keyword(null,"info","info",1017141280));var event = cljs.core.get.call(null,map__8895__$1,new cljs.core.Keyword(null,"event","event",1110795788));var closest = rvb.model.find_target.call(null,tank,tank_coll);var target_dist = rvb.model.dist.call(null,tank,closest);var angle_to_target = Math.ceil(rvb.model.target_angle.call(null,tank,closest));var angle_diff = rvb.util.abs_angle_diff.call(null,new cljs.core.Keyword(null,"angle","angle",1106865221).call(null,tank),angle_to_target);var turn_type = rvb.util.angle_direction.call(null,new cljs.core.Keyword(null,"angle","angle",1106865221).call(null,tank),angle_to_target);var turn_type__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",1017222009),turn_type))?new cljs.core.Keyword(null,"turn-left","turn-left",843250377):new cljs.core.Keyword(null,"turn-right","turn-right",4319230014));var action = ((cljs.core.not.call(null,cljs.core.seq.call(null,rvb.ai.enemy_tanks.call(null,tank,tank_coll))))?new cljs.core.Keyword(null,"victory","victory",1466211716):((cljs.core._EQ_.call(null,event,new cljs.core.Keyword(null,"collision","collision",2901555876)))?new cljs.core.Keyword(null,"flail","flail",1111417392):(((function (){var and__3941__auto__ = (target_dist < 150);if(and__3941__auto__)
{return (angle_diff < 2);
} else
{return and__3941__auto__;
}
})())?new cljs.core.Keyword(null,"fire","fire",1017047464):new cljs.core.Keyword(null,"move","move",1017261891))));var pred__8896 = cljs.core._EQ_;var expr__8897 = action;if(pred__8896.call(null,new cljs.core.Keyword(null,"victory","victory",1466211716),expr__8897))
{return cljs.core.PersistentVector.fromArray([rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"turn-right","turn-right",4319230014),10),rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"turn-left","turn-left",843250377),10)], true);
} else
{if(pred__8896.call(null,new cljs.core.Keyword(null,"flail","flail",1111417392),expr__8897))
{var roll = cljs.core.rand.call(null);var pred__8899 = cljs.core._GT__EQ_;var expr__8900 = roll;if(pred__8899.call(null,0.4,expr__8900))
{return cljs.core.PersistentVector.fromArray([rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"move","move",1017261891),-5)], true);
} else
{if(pred__8899.call(null,0.8,expr__8900))
{return cljs.core.PersistentVector.fromArray([rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"move","move",1017261891),5)], true);
} else
{if(pred__8899.call(null,0.9,expr__8900))
{return cljs.core.PersistentVector.fromArray([rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"turn-right","turn-right",4319230014),10)], true);
} else
{return cljs.core.PersistentVector.fromArray([rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"turn-left","turn-left",843250377),10)], true);
}
}
}
} else
{if(pred__8896.call(null,new cljs.core.Keyword(null,"fire","fire",1017047464),expr__8897))
{return cljs.core.PersistentVector.fromArray([rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"fire","fire",1017047464),1)], true);
} else
{if(pred__8896.call(null,new cljs.core.Keyword(null,"move","move",1017261891),expr__8897))
{var turns_required = (function (){var x__3157__auto__ = Math.floor(angle_diff);var y__3158__auto__ = cljs.core.get.call(null,speed,turn_type__$1);return ((x__3157__auto__ < y__3158__auto__) ? x__3157__auto__ : y__3158__auto__);
})();var turn_perc = (turns_required / cljs.core.get.call(null,speed,new cljs.core.Keyword(null,"turn-right","turn-right",4319230014)));var moves_allowed = Math.floor((cljs.core.get.call(null,speed,new cljs.core.Keyword(null,"move","move",1017261891)) * (1 - turn_perc)));return cljs.core.PersistentVector.fromArray([rvb.ai.animate.call(null,tank,turn_type__$1,turns_required),rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"move","move",1017261891),moves_allowed)], true);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__8897)].join('')));
}
}
}
}
});
/**
* @param {...*} var_args
*/
rvb.ai.dispatch_on_team = (function() { 
var dispatch_on_team__delegate = function (tank,more){return new cljs.core.Keyword(null,"team","team",1017460175).call(null,tank);
};
var dispatch_on_team = function (tank,var_args){
var more = null;if (arguments.length > 1) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dispatch_on_team__delegate.call(this,tank,more);};
dispatch_on_team.cljs$lang$maxFixedArity = 1;
dispatch_on_team.cljs$lang$applyTo = (function (arglist__8902){
var tank = cljs.core.first(arglist__8902);
var more = cljs.core.rest(arglist__8902);
return dispatch_on_team__delegate(tank,more);
});
dispatch_on_team.cljs$core$IFn$_invoke$arity$variadic = dispatch_on_team__delegate;
return dispatch_on_team;
})()
;
rvb.ai.make_decisions = (function (){var method_table__3616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__3617__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__3618__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__3619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__3620__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("make-decisions",rvb.ai.dispatch_on_team,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__3620__auto__,method_table__3616__auto__,prefer_table__3617__auto__,method_cache__3618__auto__,cached_hierarchy__3619__auto__));
})();
cljs.core._add_method.call(null,rvb.ai.make_decisions,new cljs.core.Keyword(null,"red","red",1014017027),(function() { 
var G__8903__delegate = function (tank,more){return cljs.core.apply.call(null,rvb.ai.make_decisions_STAR_,tank,more);
};
var G__8903 = function (tank,var_args){
var more = null;if (arguments.length > 1) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__8903__delegate.call(this,tank,more);};
G__8903.cljs$lang$maxFixedArity = 1;
G__8903.cljs$lang$applyTo = (function (arglist__8904){
var tank = cljs.core.first(arglist__8904);
var more = cljs.core.rest(arglist__8904);
return G__8903__delegate(tank,more);
});
G__8903.cljs$core$IFn$_invoke$arity$variadic = G__8903__delegate;
return G__8903;
})()
);
cljs.core._add_method.call(null,rvb.ai.make_decisions,new cljs.core.Keyword(null,"blue","blue",1016931276),(function() { 
var G__8905__delegate = function (tank,more){return cljs.core.apply.call(null,rvb.ai.make_decisions_STAR_,tank,more);
};
var G__8905 = function (tank,var_args){
var more = null;if (arguments.length > 1) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__8905__delegate.call(this,tank,more);};
G__8905.cljs$lang$maxFixedArity = 1;
G__8905.cljs$lang$applyTo = (function (arglist__8906){
var tank = cljs.core.first(arglist__8906);
var more = cljs.core.rest(arglist__8906);
return G__8905__delegate(tank,more);
});
G__8905.cljs$core$IFn$_invoke$arity$variadic = G__8905__delegate;
return G__8905;
})()
);
