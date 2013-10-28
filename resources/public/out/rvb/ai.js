goog.provide('rvb.ai');
goog.require('cljs.core');
goog.require('rvb.util');
goog.require('rvb.model');
goog.require('rvb.util');
goog.require('rvb.model');
rvb.ai.animate = (function animate(tank,op,arg){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tank-id","tank-id",3766965328),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(tank),new cljs.core.Keyword(null,"op","op",1013907795),op,new cljs.core.Keyword(null,"arg","arg",1014001096),arg], true);
});
rvb.ai.enemy_tanks = (function enemy_tanks(tank,tank_coll){return cljs.core.remove.call(null,(function (p1__11223_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"team","team",1017460175).cljs$core$IFn$_invoke$arity$1(tank),new cljs.core.Keyword(null,"team","team",1017460175).cljs$core$IFn$_invoke$arity$1(p1__11223_SHARP_));
}),tank_coll);
});
rvb.ai.red_ai = (function red_ai(tank,tank_coll,speed,p__11224){var map__11238 = p__11224;var map__11238__$1 = ((cljs.core.seq_QMARK_.call(null,map__11238))?cljs.core.apply.call(null,cljs.core.hash_map,map__11238):map__11238);var control_args = map__11238__$1;var info = cljs.core.get.call(null,map__11238__$1,new cljs.core.Keyword(null,"info","info",1017141280));var event = cljs.core.get.call(null,map__11238__$1,new cljs.core.Keyword(null,"event","event",1110795788));var closest = rvb.model.find_target.call(null,tank,tank_coll);var target_dist = rvb.model.dist.call(null,tank,closest);var angle_to_target = Math.ceil(rvb.model.target_angle.call(null,tank,closest));var angle_diff = rvb.util.abs_angle_diff.call(null,new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(tank),angle_to_target);var turn_type = rvb.util.angle_direction.call(null,new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(tank),angle_to_target);var turn_type__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",1017222009),turn_type))?new cljs.core.Keyword(null,"turn-left","turn-left",843250377):new cljs.core.Keyword(null,"turn-right","turn-right",4319230014));var action = ((cljs.core.not.call(null,cljs.core.seq.call(null,rvb.ai.enemy_tanks.call(null,tank,tank_coll))))?new cljs.core.Keyword(null,"victory","victory",1466211716):((cljs.core._EQ_.call(null,event,new cljs.core.Keyword(null,"collision","collision",2901555876)))?new cljs.core.Keyword(null,"after-collision","after-collision",4608065523):((((target_dist < 150)) && ((angle_diff < 2)))?new cljs.core.Keyword(null,"fire","fire",1017047464):new cljs.core.Keyword(null,"move","move",1017261891))));var pred__11239 = cljs.core._EQ_;var expr__11240 = action;if(pred__11239.call(null,new cljs.core.Keyword(null,"victory","victory",1466211716),expr__11240))
{return cljs.core.PersistentVector.fromArray([rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"turn-right","turn-right",4319230014),15),rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"turn-left","turn-left",843250377),15)], true);
} else
{if(pred__11239.call(null,new cljs.core.Keyword(null,"after-collision","after-collision",4608065523),expr__11240))
{var roll = cljs.core.rand.call(null);var pred__11242 = cljs.core._GT__EQ_;var expr__11243 = roll;if(pred__11242.call(null,0.8,expr__11243))
{var tank_hit = cljs.core.first.call(null,info);var angle_to_collision = rvb.model.target_angle.call(null,tank,tank_hit);var angle_diff__$1 = rvb.util.abs_angle_diff.call(null,new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(tank),angle_to_collision);var to_move = (((angle_diff__$1 <= 90))?new cljs.core.Keyword(null,"reverse","reverse",2113750612):new cljs.core.Keyword(null,"move","move",1017261891));var to_turn = (function (){var pred__11245 = cljs.core._EQ_;var expr__11246 = rvb.util.angle_direction.call(null,new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(tank),angle_to_collision);if(pred__11245.call(null,new cljs.core.Keyword(null,"right","right",1122416014),expr__11246))
{return new cljs.core.Keyword(null,"turn-left","turn-left",843250377);
} else
{if(pred__11245.call(null,new cljs.core.Keyword(null,"left","left",1017222009),expr__11246))
{return new cljs.core.Keyword(null,"turn-right","turn-right",4319230014);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11246)].join('')));
}
}
})();var pred__11248 = cljs.core._EQ_;var expr__11249 = to_move;if(pred__11248.call(null,new cljs.core.Keyword(null,"move","move",1017261891),expr__11249))
{return cljs.core.PersistentVector.fromArray([rvb.ai.animate.call(null,tank,to_move,5)], true);
} else
{if(pred__11248.call(null,new cljs.core.Keyword(null,"reverse","reverse",2113750612),expr__11249))
{return cljs.core.PersistentVector.fromArray([rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"reverse","reverse",2113750612),10),rvb.ai.animate.call(null,tank,to_turn,50),rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"move","move",1017261891),30)], true);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11249)].join('')));
}
}
} else
{if(pred__11242.call(null,0.9,expr__11243))
{return cljs.core.PersistentVector.fromArray([rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"move","move",1017261891),10)], true);
} else
{if(pred__11242.call(null,1.0,expr__11243))
{return cljs.core.PersistentVector.fromArray([rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"reverse","reverse",2113750612),10)], true);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11243)].join('')));
}
}
}
} else
{if(pred__11239.call(null,new cljs.core.Keyword(null,"fire","fire",1017047464),expr__11240))
{return cljs.core.PersistentVector.fromArray([rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"fire","fire",1017047464),1)], true);
} else
{if(pred__11239.call(null,new cljs.core.Keyword(null,"move","move",1017261891),expr__11240))
{var turns_required = (function (){var x__3267__auto__ = Math.floor(angle_diff);var y__3268__auto__ = cljs.core.get.call(null,speed,turn_type__$1);return ((x__3267__auto__ < y__3268__auto__) ? x__3267__auto__ : y__3268__auto__);
})();var turn_perc = (turns_required / cljs.core.get.call(null,speed,new cljs.core.Keyword(null,"turn-right","turn-right",4319230014)));var moves_allowed = Math.floor((cljs.core.get.call(null,speed,new cljs.core.Keyword(null,"move","move",1017261891)) * (1 - turn_perc)));return cljs.core.PersistentVector.fromArray([rvb.ai.animate.call(null,tank,turn_type__$1,turns_required),rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"move","move",1017261891),moves_allowed)], true);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11240)].join('')));
}
}
}
}
});
rvb.ai.blue_ai = (function blue_ai(tank,tank_coll,speed,p__11251){var map__11256 = p__11251;var map__11256__$1 = ((cljs.core.seq_QMARK_.call(null,map__11256))?cljs.core.apply.call(null,cljs.core.hash_map,map__11256):map__11256);var control_args = map__11256__$1;var info = cljs.core.get.call(null,map__11256__$1,new cljs.core.Keyword(null,"info","info",1017141280));var event = cljs.core.get.call(null,map__11256__$1,new cljs.core.Keyword(null,"event","event",1110795788));var closest = rvb.model.find_target.call(null,tank,tank_coll);var target_dist = rvb.model.dist.call(null,tank,closest);var angle_to_target = Math.ceil(rvb.model.target_angle.call(null,tank,closest));var angle_diff = rvb.util.abs_angle_diff.call(null,new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(tank),angle_to_target);var turn_type = rvb.util.angle_direction.call(null,new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(tank),angle_to_target);var turn_type__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",1017222009),turn_type))?new cljs.core.Keyword(null,"turn-left","turn-left",843250377):new cljs.core.Keyword(null,"turn-right","turn-right",4319230014));var action = ((cljs.core.not.call(null,cljs.core.seq.call(null,rvb.ai.enemy_tanks.call(null,tank,tank_coll))))?new cljs.core.Keyword(null,"victory","victory",1466211716):((cljs.core._EQ_.call(null,event,new cljs.core.Keyword(null,"collision","collision",2901555876)))?new cljs.core.Keyword(null,"after-collision","after-collision",4608065523):((((target_dist < 150)) && ((angle_diff < 2)))?new cljs.core.Keyword(null,"fire","fire",1017047464):new cljs.core.Keyword(null,"move","move",1017261891))));var pred__11257 = cljs.core._EQ_;var expr__11258 = action;if(pred__11257.call(null,new cljs.core.Keyword(null,"victory","victory",1466211716),expr__11258))
{return cljs.core.PersistentVector.fromArray([rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"turn-right","turn-right",4319230014),15),rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"turn-left","turn-left",843250377),15)], true);
} else
{if(pred__11257.call(null,new cljs.core.Keyword(null,"after-collision","after-collision",4608065523),expr__11258))
{return cljs.core.PersistentVector.fromArray([rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"move","move",1017261891),5)], true);
} else
{if(pred__11257.call(null,new cljs.core.Keyword(null,"fire","fire",1017047464),expr__11258))
{return cljs.core.PersistentVector.fromArray([rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"fire","fire",1017047464),1)], true);
} else
{if(pred__11257.call(null,new cljs.core.Keyword(null,"move","move",1017261891),expr__11258))
{var turns_required = (function (){var x__3267__auto__ = Math.floor(angle_diff);var y__3268__auto__ = cljs.core.get.call(null,speed,turn_type__$1);return ((x__3267__auto__ < y__3268__auto__) ? x__3267__auto__ : y__3268__auto__);
})();var turn_perc = (turns_required / cljs.core.get.call(null,speed,new cljs.core.Keyword(null,"turn-right","turn-right",4319230014)));var moves_allowed = Math.floor((cljs.core.get.call(null,speed,new cljs.core.Keyword(null,"move","move",1017261891)) * (1 - turn_perc)));return cljs.core.PersistentVector.fromArray([rvb.ai.animate.call(null,tank,turn_type__$1,turns_required),rvb.ai.animate.call(null,tank,new cljs.core.Keyword(null,"move","move",1017261891),moves_allowed)], true);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11258)].join('')));
}
}
}
}
});
/**
* @param {...*} var_args
*/
rvb.ai.dispatch_on_team = (function() { 
var dispatch_on_team__delegate = function (tank,more){return new cljs.core.Keyword(null,"team","team",1017460175).cljs$core$IFn$_invoke$arity$1(tank);
};
var dispatch_on_team = function (tank,var_args){
var more = null;if (arguments.length > 1) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dispatch_on_team__delegate.call(this,tank,more);};
dispatch_on_team.cljs$lang$maxFixedArity = 1;
dispatch_on_team.cljs$lang$applyTo = (function (arglist__11260){
var tank = cljs.core.first(arglist__11260);
var more = cljs.core.rest(arglist__11260);
return dispatch_on_team__delegate(tank,more);
});
dispatch_on_team.cljs$core$IFn$_invoke$arity$variadic = dispatch_on_team__delegate;
return dispatch_on_team;
})()
;
rvb.ai.make_decisions = (function (){var method_table__3721__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__3722__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__3723__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__3724__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__3725__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("make-decisions",rvb.ai.dispatch_on_team,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__3725__auto__,method_table__3721__auto__,prefer_table__3722__auto__,method_cache__3723__auto__,cached_hierarchy__3724__auto__));
})();
cljs.core._add_method.call(null,rvb.ai.make_decisions,new cljs.core.Keyword(null,"red","red",1014017027),(function() { 
var G__11261__delegate = function (tank,more){return cljs.core.apply.call(null,rvb.ai.red_ai,tank,more);
};
var G__11261 = function (tank,var_args){
var more = null;if (arguments.length > 1) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11261__delegate.call(this,tank,more);};
G__11261.cljs$lang$maxFixedArity = 1;
G__11261.cljs$lang$applyTo = (function (arglist__11262){
var tank = cljs.core.first(arglist__11262);
var more = cljs.core.rest(arglist__11262);
return G__11261__delegate(tank,more);
});
G__11261.cljs$core$IFn$_invoke$arity$variadic = G__11261__delegate;
return G__11261;
})()
);
cljs.core._add_method.call(null,rvb.ai.make_decisions,new cljs.core.Keyword(null,"blue","blue",1016931276),(function() { 
var G__11263__delegate = function (tank,more){return cljs.core.apply.call(null,rvb.ai.blue_ai,tank,more);
};
var G__11263 = function (tank,var_args){
var more = null;if (arguments.length > 1) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11263__delegate.call(this,tank,more);};
G__11263.cljs$lang$maxFixedArity = 1;
G__11263.cljs$lang$applyTo = (function (arglist__11264){
var tank = cljs.core.first(arglist__11264);
var more = cljs.core.rest(arglist__11264);
return G__11263__delegate(tank,more);
});
G__11263.cljs$core$IFn$_invoke$arity$variadic = G__11263__delegate;
return G__11263;
})()
);

//@ sourceMappingURL=ai.js.map