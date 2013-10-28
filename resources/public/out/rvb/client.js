goog.provide('rvb.client');
goog.require('cljs.core');
goog.require('rvb.ai');
goog.require('rvb.util');
goog.require('cljs.core.async');
goog.require('rvb.model');
goog.require('cljs.core.async');
goog.require('rvb.ai');
goog.require('rvb.util');
goog.require('rvb.model');
rvb.client.canvas = rvb.model.construct.call(null,rvb.model.__GT_Canvas.call(null));
rvb.client._STAR_next_tank_id_STAR_ = cljs.core.atom.call(null,0);
rvb.client._STAR_tanks_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
rvb.client.speed = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"move","move",1017261891),30,new cljs.core.Keyword(null,"reverse","reverse",2113750612),20,new cljs.core.Keyword(null,"turn-left","turn-left",843250377),25,new cljs.core.Keyword(null,"turn-right","turn-right",4319230014),25,new cljs.core.Keyword(null,"fire","fire",1017047464),0.3,new cljs.core.Keyword(null,"bullet","bullet",3930937460),40], true);
rvb.client.tanks_but_me = cljs.core.partial.call(null,rvb.util.tanks_but_me_STAR_,rvb.client._STAR_tanks_STAR_);
rvb.client.get_tank_by_id = cljs.core.partial.call(null,rvb.util.get_tank_by_id_STAR_,rvb.client._STAR_tanks_STAR_);
rvb.client.get_collisions = (function get_collisions(obj,coll){var nearby_QMARK_ = (function (target){return ((40 >= Math.abs((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(obj) - new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(target))))) && ((40 >= Math.abs((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(obj) - new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(target)))));
});var nearby_coll = cljs.core.filter.call(null,nearby_QMARK_,coll);return cljs.core.filter.call(null,cljs.core.partial.call(null,rvb.model.collides_QMARK_,obj),nearby_coll);
});
rvb.client.new_tank_position = (function new_tank_position(canvas,team){while(true){
var seedX = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"red","red",1014017027),team))?200:700);var startX = (seedX + (cljs.core.rand_int.call(null,-2) * cljs.core.rand_int.call(null,100)));var startY = (20 + cljs.core.rand_int.call(null,750));var tank = rvb.model.construct.call(null,rvb.model.__GT_Tank.call(null,-1,null,null,null,canvas,startX,startY,20,3,team));if(cljs.core.truth_(cljs.core.first.call(null,rvb.client.get_collisions.call(null,tank,cljs.core.deref.call(null,rvb.client._STAR_tanks_STAR_)))))
{{
var G__11265 = canvas;
var G__11266 = team;
canvas = G__11265;
team = G__11266;
continue;
}
} else
{return cljs.core.PersistentVector.fromArray([startX,startY], true);
}
break;
}
});
rvb.client.add_bullet = (function add_bullet(team,coords,degree){var vec__11325 = coords;var x = cljs.core.nth.call(null,vec__11325,0,null);var y = cljs.core.nth.call(null,vec__11325,1,null);var bullet = rvb.model.construct.call(null,rvb.model.__GT_Bullet.call(null,rvb.client.canvas,x,y,team,degree));var c__5197__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5198__auto__ = (function (){var switch__5147__auto__ = (function (state_11364){var state_val_11365 = (state_11364[1]);if((state_val_11365 === 1))
{var inst_11326 = bullet;var state_11364__$1 = (function (){var statearr_11366 = state_11364;(statearr_11366[5] = inst_11326);
return statearr_11366;
})();var statearr_11367_11383 = state_11364__$1;(statearr_11367_11383[2] = null);
(statearr_11367_11383[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11365 === 2))
{var inst_11328 = (0 <= x);var inst_11329 = new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(rvb.client.canvas);var inst_11330 = (x <= inst_11329);var inst_11331 = (inst_11328) && (inst_11330);var inst_11332 = (0 <= y);var inst_11333 = new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(rvb.client.canvas);var inst_11334 = (y <= inst_11333);var inst_11335 = (inst_11332) && (inst_11334);var inst_11336 = (inst_11331) && (inst_11335);var state_11364__$1 = state_11364;if(cljs.core.truth_(inst_11336))
{var statearr_11368_11384 = state_11364__$1;(statearr_11368_11384[1] = 4);
} else
{var statearr_11369_11385 = state_11364__$1;(statearr_11369_11385[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11365 === 3))
{var inst_11362 = (state_11364[2]);var state_11364__$1 = state_11364;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11364__$1,inst_11362);
} else
{if((state_val_11365 === 4))
{var inst_11338 = (state_11364[6]);var inst_11341 = (state_11364[7]);var inst_11326 = (state_11364[5]);var inst_11338__$1 = rvb.model.move.call(null,inst_11326,3);var inst_11339 = cljs.core.deref.call(null,rvb.client._STAR_tanks_STAR_);var inst_11340 = rvb.client.get_collisions.call(null,inst_11338__$1,inst_11339);var inst_11341__$1 = cljs.core.first.call(null,inst_11340);var inst_11342 = rvb.model.erase_BANG_.call(null,inst_11326);var state_11364__$1 = (function (){var statearr_11370 = state_11364;(statearr_11370[8] = inst_11342);
(statearr_11370[6] = inst_11338__$1);
(statearr_11370[7] = inst_11341__$1);
return statearr_11370;
})();if(cljs.core.truth_(inst_11341__$1))
{var statearr_11371_11386 = state_11364__$1;(statearr_11371_11386[1] = 7);
} else
{var statearr_11372_11387 = state_11364__$1;(statearr_11372_11387[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11365 === 5))
{var state_11364__$1 = state_11364;var statearr_11373_11388 = state_11364__$1;(statearr_11373_11388[2] = null);
(statearr_11373_11388[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11365 === 6))
{var inst_11360 = (state_11364[2]);var state_11364__$1 = state_11364;var statearr_11374_11389 = state_11364__$1;(statearr_11374_11389[2] = inst_11360);
(statearr_11374_11389[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11365 === 7))
{var inst_11341 = (state_11364[7]);var inst_11344 = new cljs.core.Keyword(null,"events","events",4017542283).cljs$core$IFn$_invoke$arity$1(inst_11341);var inst_11345 = cljs.core.hash_map.call(null,new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"hit","hit",1014007557),new cljs.core.Keyword(null,"tank","tank",1017456732),inst_11341);var state_11364__$1 = state_11364;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11364__$1,10,inst_11344,inst_11345);
} else
{if((state_val_11365 === 8))
{var inst_11338 = (state_11364[6]);var inst_11349 = rvb.model.render_BANG_.call(null,inst_11338);var inst_11350 = cljs.core.get.call(null,rvb.client.speed,new cljs.core.Keyword(null,"bullet","bullet",3930937460));var inst_11351 = (1000 / inst_11350);var inst_11352 = cljs.core.async.timeout.call(null,inst_11351);var state_11364__$1 = (function (){var statearr_11375 = state_11364;(statearr_11375[9] = inst_11349);
return statearr_11375;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11364__$1,11,inst_11352);
} else
{if((state_val_11365 === 9))
{var inst_11357 = (state_11364[2]);var state_11364__$1 = state_11364;var statearr_11376_11390 = state_11364__$1;(statearr_11376_11390[2] = inst_11357);
(statearr_11376_11390[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11365 === 10))
{var inst_11347 = (state_11364[2]);var state_11364__$1 = state_11364;var statearr_11377_11391 = state_11364__$1;(statearr_11377_11391[2] = inst_11347);
(statearr_11377_11391[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11365 === 11))
{var inst_11338 = (state_11364[6]);var inst_11354 = (state_11364[2]);var inst_11326 = inst_11338;var state_11364__$1 = (function (){var statearr_11378 = state_11364;(statearr_11378[5] = inst_11326);
(statearr_11378[10] = inst_11354);
return statearr_11378;
})();var statearr_11379_11392 = state_11364__$1;(statearr_11379_11392[2] = null);
(statearr_11379_11392[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5147__auto__){
return (function() {
var state_machine__5148__auto__ = null;
var state_machine__5148__auto____0 = (function (){var statearr_11381 = (new Array(11));(statearr_11381[0] = state_machine__5148__auto__);
(statearr_11381[1] = 1);
return statearr_11381;
});
var state_machine__5148__auto____1 = (function (state_11364){while(true){
var result__5149__auto__ = switch__5147__auto__.call(null,state_11364);if(cljs.core.keyword_identical_QMARK_.call(null,result__5149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5149__auto__;
}
break;
}
});
state_machine__5148__auto__ = function(state_11364){
switch(arguments.length){
case 0:
return state_machine__5148__auto____0.call(this);
case 1:
return state_machine__5148__auto____1.call(this,state_11364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5148__auto____0;
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5148__auto____1;
return state_machine__5148__auto__;
})()
;})(switch__5147__auto__))
})();var state__5199__auto__ = (function (){var statearr_11382 = f__5198__auto__.call(null);(statearr_11382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5197__auto__);
return statearr_11382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5199__auto__);
}));
return c__5197__auto__;
});
rvb.client.animate_tank = (function animate_tank(old_tank,new_tank,step){rvb.model.erase_BANG_.call(null,old_tank);
if(cljs.core.truth_(rvb.client.get_tank_by_id.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new_tank))))
{cljs.core.swap_BANG_.call(null,rvb.client._STAR_tanks_STAR_,rvb.util.update_tank,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new_tank),cljs.core.select_keys.call(null,new_tank,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"corners","corners",1968950320),new cljs.core.Keyword(null,"straight-corners","straight-corners",889569373),new cljs.core.Keyword(null,"center","center",3944857543),new cljs.core.Keyword(null,"angle","angle",1106865221),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363)], true)));
rvb.model.render_BANG_.call(null,new_tank);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",1013907795).cljs$core$IFn$_invoke$arity$1(step),new cljs.core.Keyword(null,"fire","fire",1017047464)))
{return rvb.client.add_bullet.call(null,new cljs.core.Keyword(null,"team","team",1017460175).cljs$core$IFn$_invoke$arity$1(new_tank),rvb.model.turret_endpoint.call(null,new_tank),new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(new_tank));
} else
{return null;
}
} else
{return null;
}
});
rvb.client.process_animation_command = (function process_animation_command(op,old_tank){var pred__11396 = cljs.core._EQ_;var expr__11397 = op;if(pred__11396.call(null,new cljs.core.Keyword(null,"move","move",1017261891),expr__11397))
{return rvb.model.move.call(null,old_tank,1);
} else
{if(pred__11396.call(null,new cljs.core.Keyword(null,"reverse","reverse",2113750612),expr__11397))
{return rvb.model.move.call(null,old_tank,-1);
} else
{if(pred__11396.call(null,new cljs.core.Keyword(null,"turn-left","turn-left",843250377),expr__11397))
{return rvb.model.orient.call(null,old_tank,(new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(old_tank) - 1));
} else
{if(pred__11396.call(null,new cljs.core.Keyword(null,"turn-right","turn-right",4319230014),expr__11397))
{return rvb.model.orient.call(null,old_tank,(new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(old_tank) + 1));
} else
{if(pred__11396.call(null,new cljs.core.Keyword(null,"fire","fire",1017047464),expr__11397))
{return rvb.model.fire.call(null,old_tank);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11397)].join('')));
}
}
}
}
}
});
rvb.client.add_tank = (function add_tank(team){var vec__11686 = rvb.client.new_tank_position.call(null,rvb.client.canvas,team);var startX = cljs.core.nth.call(null,vec__11686,0,null);var startY = cljs.core.nth.call(null,vec__11686,1,null);var animation = cljs.core.async.chan.call(null,cljs.core.async.dropping_buffer.call(null,10));var control = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var events = cljs.core.async.chan.call(null,cljs.core.async.dropping_buffer.call(null,10));var t = rvb.model.construct.call(null,rvb.model.__GT_Tank.call(null,cljs.core.deref.call(null,rvb.client._STAR_next_tank_id_STAR_),rvb.client.canvas,control,animation,events,startX,startY,20,3,team));var tank_id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(t);cljs.core.swap_BANG_.call(null,rvb.client._STAR_next_tank_id_STAR_,cljs.core.inc);
cljs.core.swap_BANG_.call(null,rvb.client._STAR_tanks_STAR_,rvb.util.replace_tank,t);
var c__5197__auto___11972 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5198__auto__ = (function (){var switch__5147__auto__ = (function (state_11709){var state_val_11710 = (state_11709[1]);if((state_val_11710 === 1))
{var state_11709__$1 = state_11709;var statearr_11711_11973 = state_11709__$1;(statearr_11711_11973[2] = null);
(statearr_11711_11973[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11710 === 2))
{var state_11709__$1 = state_11709;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11709__$1,4,control);
} else
{if((state_val_11710 === 3))
{var inst_11707 = (state_11709[2]);var state_11709__$1 = state_11709;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11709__$1,inst_11707);
} else
{if((state_val_11710 === 4))
{var inst_11689 = (state_11709[5]);var inst_11689__$1 = (state_11709[2]);var state_11709__$1 = (function (){var statearr_11712 = state_11709;(statearr_11712[5] = inst_11689__$1);
return statearr_11712;
})();if(cljs.core.truth_(inst_11689__$1))
{var statearr_11713_11974 = state_11709__$1;(statearr_11713_11974[1] = 5);
} else
{var statearr_11714_11975 = state_11709__$1;(statearr_11714_11975[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11710 === 5))
{var inst_11691 = (state_11709[6]);var inst_11691__$1 = rvb.client.get_tank_by_id.call(null,tank_id);var state_11709__$1 = (function (){var statearr_11715 = state_11709;(statearr_11715[6] = inst_11691__$1);
return statearr_11715;
})();if(cljs.core.truth_(inst_11691__$1))
{var statearr_11716_11976 = state_11709__$1;(statearr_11716_11976[1] = 8);
} else
{var statearr_11717_11977 = state_11709__$1;(statearr_11717_11977[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11710 === 6))
{var state_11709__$1 = state_11709;var statearr_11718_11978 = state_11709__$1;(statearr_11718_11978[2] = null);
(statearr_11718_11978[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11710 === 7))
{var inst_11705 = (state_11709[2]);var state_11709__$1 = state_11709;var statearr_11719_11979 = state_11709__$1;(statearr_11719_11979[2] = inst_11705);
(statearr_11719_11979[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11710 === 8))
{var inst_11691 = (state_11709[6]);var inst_11689 = (state_11709[5]);var inst_11693 = (function (){var t__$1 = inst_11691;var control_args = inst_11689;var temp__4092__auto__ = inst_11691;return ((function (t__$1,control_args,temp__4092__auto__,inst_11691,inst_11689,state_val_11710){
return (function (p1__11399_SHARP_){return (new cljs.core.Keyword(null,"arg","arg",1014001096).cljs$core$IFn$_invoke$arity$1(p1__11399_SHARP_) === 0);
});
;})(t__$1,control_args,temp__4092__auto__,inst_11691,inst_11689,state_val_11710))
})();var inst_11694 = cljs.core.deref.call(null,rvb.client._STAR_tanks_STAR_);var inst_11695 = rvb.ai.make_decisions.call(null,inst_11691,inst_11694,rvb.client.speed,inst_11689);var inst_11696 = cljs.core.remove.call(null,inst_11693,inst_11695);var state_11709__$1 = state_11709;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11709__$1,11,animation,inst_11696);
} else
{if((state_val_11710 === 9))
{var state_11709__$1 = state_11709;var statearr_11720_11980 = state_11709__$1;(statearr_11720_11980[2] = null);
(statearr_11720_11980[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11710 === 10))
{var inst_11702 = (state_11709[2]);var state_11709__$1 = state_11709;var statearr_11721_11981 = state_11709__$1;(statearr_11721_11981[2] = inst_11702);
(statearr_11721_11981[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11710 === 11))
{var inst_11698 = (state_11709[2]);var state_11709__$1 = (function (){var statearr_11722 = state_11709;(statearr_11722[7] = inst_11698);
return statearr_11722;
})();var statearr_11723_11982 = state_11709__$1;(statearr_11723_11982[2] = null);
(statearr_11723_11982[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5147__auto__){
return (function() {
var state_machine__5148__auto__ = null;
var state_machine__5148__auto____0 = (function (){var statearr_11725 = (new Array(8));(statearr_11725[0] = state_machine__5148__auto__);
(statearr_11725[1] = 1);
return statearr_11725;
});
var state_machine__5148__auto____1 = (function (state_11709){while(true){
var result__5149__auto__ = switch__5147__auto__.call(null,state_11709);if(cljs.core.keyword_identical_QMARK_.call(null,result__5149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5149__auto__;
}
break;
}
});
state_machine__5148__auto__ = function(state_11709){
switch(arguments.length){
case 0:
return state_machine__5148__auto____0.call(this);
case 1:
return state_machine__5148__auto____1.call(this,state_11709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5148__auto____0;
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5148__auto____1;
return state_machine__5148__auto__;
})()
;})(switch__5147__auto__))
})();var state__5199__auto__ = (function (){var statearr_11726 = f__5198__auto__.call(null);(statearr_11726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5197__auto___11972);
return statearr_11726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5199__auto__);
}));
var c__5197__auto___11983 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5198__auto__ = (function (){var switch__5147__auto__ = (function (state_11793){var state_val_11794 = (state_11793[1]);if((state_val_11794 === 1))
{var state_11793__$1 = state_11793;var statearr_11795_11984 = state_11793__$1;(statearr_11795_11984[2] = null);
(statearr_11795_11984[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 2))
{var state_11793__$1 = state_11793;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11793__$1,4,events);
} else
{if((state_val_11794 === 3))
{var inst_11791 = (state_11793[2]);var state_11793__$1 = state_11793;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11793__$1,inst_11791);
} else
{if((state_val_11794 === 4))
{var inst_11729 = (state_11793[5]);var inst_11729__$1 = (state_11793[2]);var state_11793__$1 = (function (){var statearr_11796 = state_11793;(statearr_11796[5] = inst_11729__$1);
return statearr_11796;
})();if(cljs.core.truth_(inst_11729__$1))
{var statearr_11797_11985 = state_11793__$1;(statearr_11797_11985[1] = 5);
} else
{var statearr_11798_11986 = state_11793__$1;(statearr_11798_11986[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 5))
{var inst_11729 = (state_11793[5]);var inst_11732 = cljs.core.seq_QMARK_.call(null,inst_11729);var state_11793__$1 = state_11793;if(inst_11732)
{var statearr_11799_11987 = state_11793__$1;(statearr_11799_11987[1] = 8);
} else
{var statearr_11800_11988 = state_11793__$1;(statearr_11800_11988[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 6))
{var state_11793__$1 = state_11793;var statearr_11801_11989 = state_11793__$1;(statearr_11801_11989[2] = null);
(statearr_11801_11989[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 7))
{var inst_11789 = (state_11793[2]);var state_11793__$1 = state_11793;var statearr_11802_11990 = state_11793__$1;(statearr_11802_11990[2] = inst_11789);
(statearr_11802_11990[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 8))
{var inst_11729 = (state_11793[5]);var inst_11734 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11729);var state_11793__$1 = state_11793;var statearr_11803_11991 = state_11793__$1;(statearr_11803_11991[2] = inst_11734);
(statearr_11803_11991[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 9))
{var inst_11729 = (state_11793[5]);var state_11793__$1 = state_11793;var statearr_11804_11992 = state_11793__$1;(statearr_11804_11992[2] = inst_11729);
(statearr_11804_11992[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 10))
{var inst_11739 = (state_11793[6]);var inst_11737 = (state_11793[2]);var inst_11738 = cljs.core.get.call(null,inst_11737,new cljs.core.Keyword(null,"tank","tank",1017456732));var inst_11739__$1 = cljs.core.get.call(null,inst_11737,new cljs.core.Keyword(null,"op","op",1013907795));var inst_11743 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"start","start",1123661780),inst_11739__$1);var state_11793__$1 = (function (){var statearr_11805 = state_11793;(statearr_11805[7] = inst_11738);
(statearr_11805[6] = inst_11739__$1);
return statearr_11805;
})();if(inst_11743)
{var statearr_11806_11993 = state_11793__$1;(statearr_11806_11993[1] = 11);
} else
{var statearr_11807_11994 = state_11793__$1;(statearr_11807_11994[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 11))
{var inst_11745 = cljs.core.hash_map.call(null);var state_11793__$1 = state_11793;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11793__$1,14,control,inst_11745);
} else
{if((state_val_11794 === 12))
{var inst_11739 = (state_11793[6]);var inst_11749 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hit","hit",1014007557),inst_11739);var state_11793__$1 = state_11793;if(inst_11749)
{var statearr_11808_11995 = state_11793__$1;(statearr_11808_11995[1] = 15);
} else
{var statearr_11809_11996 = state_11793__$1;(statearr_11809_11996[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 13))
{var inst_11785 = (state_11793[2]);var state_11793__$1 = (function (){var statearr_11810 = state_11793;(statearr_11810[8] = inst_11785);
return statearr_11810;
})();var statearr_11811_11997 = state_11793__$1;(statearr_11811_11997[2] = null);
(statearr_11811_11997[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 14))
{var inst_11747 = (state_11793[2]);var state_11793__$1 = state_11793;var statearr_11812_11998 = state_11793__$1;(statearr_11812_11998[2] = inst_11747);
(statearr_11812_11998[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 15))
{var inst_11738 = (state_11793[7]);var inst_11751 = (state_11793[9]);var inst_11751__$1 = rvb.model.take_damage.call(null,inst_11738,1);var inst_11752 = new cljs.core.Keyword(null,"health","health",4087608782).cljs$core$IFn$_invoke$arity$1(inst_11751__$1);var inst_11753 = (inst_11752 > 0);var state_11793__$1 = (function (){var statearr_11813 = state_11793;(statearr_11813[9] = inst_11751__$1);
return statearr_11813;
})();if(cljs.core.truth_(inst_11753))
{var statearr_11814_11999 = state_11793__$1;(statearr_11814_11999[1] = 18);
} else
{var statearr_11815_12000 = state_11793__$1;(statearr_11815_12000[1] = 19);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 16))
{var inst_11739 = (state_11793[6]);var inst_11772 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"die","die",1014003698),inst_11739);var state_11793__$1 = state_11793;if(inst_11772)
{var statearr_11816_12001 = state_11793__$1;(statearr_11816_12001[1] = 25);
} else
{var statearr_11817_12002 = state_11793__$1;(statearr_11817_12002[1] = 26);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 17))
{var inst_11783 = (state_11793[2]);var state_11793__$1 = state_11793;var statearr_11818_12003 = state_11793__$1;(statearr_11818_12003[2] = inst_11783);
(statearr_11818_12003[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 18))
{var inst_11751 = (state_11793[9]);var inst_11755 = rvb.model.erase_BANG_.call(null,inst_11751);var inst_11756 = rvb.model.render_BANG_.call(null,inst_11751);var state_11793__$1 = (function (){var statearr_11819 = state_11793;(statearr_11819[10] = inst_11755);
return statearr_11819;
})();var statearr_11820_12004 = state_11793__$1;(statearr_11820_12004[2] = inst_11756);
(statearr_11820_12004[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 19))
{var state_11793__$1 = state_11793;var statearr_11821_12005 = state_11793__$1;(statearr_11821_12005[2] = null);
(statearr_11821_12005[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 20))
{var inst_11751 = (state_11793[9]);var inst_11759 = (state_11793[2]);var inst_11760 = cljs.core.swap_BANG_.call(null,rvb.client._STAR_tanks_STAR_,rvb.util.replace_tank,inst_11751);var inst_11761 = new cljs.core.Keyword(null,"health","health",4087608782).cljs$core$IFn$_invoke$arity$1(inst_11751);var inst_11762 = (inst_11761 === 0);var state_11793__$1 = (function (){var statearr_11822 = state_11793;(statearr_11822[11] = inst_11759);
(statearr_11822[12] = inst_11760);
return statearr_11822;
})();if(cljs.core.truth_(inst_11762))
{var statearr_11823_12006 = state_11793__$1;(statearr_11823_12006[1] = 21);
} else
{var statearr_11824_12007 = state_11793__$1;(statearr_11824_12007[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 21))
{var inst_11751 = (state_11793[9]);var inst_11764 = new cljs.core.Keyword(null,"events","events",4017542283).cljs$core$IFn$_invoke$arity$1(inst_11751);var inst_11765 = cljs.core.hash_map.call(null,new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"die","die",1014003698),new cljs.core.Keyword(null,"tank","tank",1017456732),inst_11751);var state_11793__$1 = state_11793;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11793__$1,24,inst_11764,inst_11765);
} else
{if((state_val_11794 === 22))
{var state_11793__$1 = state_11793;var statearr_11825_12008 = state_11793__$1;(statearr_11825_12008[2] = null);
(statearr_11825_12008[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 23))
{var inst_11770 = (state_11793[2]);var state_11793__$1 = state_11793;var statearr_11826_12009 = state_11793__$1;(statearr_11826_12009[2] = inst_11770);
(statearr_11826_12009[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 24))
{var inst_11767 = (state_11793[2]);var state_11793__$1 = state_11793;var statearr_11827_12010 = state_11793__$1;(statearr_11827_12010[2] = inst_11767);
(statearr_11827_12010[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 25))
{var inst_11738 = (state_11793[7]);var inst_11774 = cljs.core.swap_BANG_.call(null,rvb.client._STAR_tanks_STAR_,rvb.util.remove_tank,inst_11738);var inst_11775 = rvb.model.die_BANG_.call(null,inst_11738);var state_11793__$1 = (function (){var statearr_11828 = state_11793;(statearr_11828[13] = inst_11774);
return statearr_11828;
})();var statearr_11829_12011 = state_11793__$1;(statearr_11829_12011[2] = inst_11775);
(statearr_11829_12011[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 26))
{var inst_11739 = (state_11793[6]);var inst_11777 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_11739)].join('');var inst_11778 = (new Error(inst_11777));var inst_11779 = (function(){throw inst_11778})();var state_11793__$1 = state_11793;var statearr_11830_12012 = state_11793__$1;(statearr_11830_12012[2] = inst_11779);
(statearr_11830_12012[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11794 === 27))
{var inst_11781 = (state_11793[2]);var state_11793__$1 = state_11793;var statearr_11831_12013 = state_11793__$1;(statearr_11831_12013[2] = inst_11781);
(statearr_11831_12013[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
});return ((function (switch__5147__auto__){
return (function() {
var state_machine__5148__auto__ = null;
var state_machine__5148__auto____0 = (function (){var statearr_11833 = (new Array(14));(statearr_11833[0] = state_machine__5148__auto__);
(statearr_11833[1] = 1);
return statearr_11833;
});
var state_machine__5148__auto____1 = (function (state_11793){while(true){
var result__5149__auto__ = switch__5147__auto__.call(null,state_11793);if(cljs.core.keyword_identical_QMARK_.call(null,result__5149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5149__auto__;
}
break;
}
});
state_machine__5148__auto__ = function(state_11793){
switch(arguments.length){
case 0:
return state_machine__5148__auto____0.call(this);
case 1:
return state_machine__5148__auto____1.call(this,state_11793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5148__auto____0;
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5148__auto____1;
return state_machine__5148__auto__;
})()
;})(switch__5147__auto__))
})();var state__5199__auto__ = (function (){var statearr_11834 = f__5198__auto__.call(null);(statearr_11834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5197__auto___11983);
return statearr_11834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5199__auto__);
}));
var c__5197__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5198__auto__ = (function (){var switch__5147__auto__ = (function (state_11923){var state_val_11924 = (state_11923[1]);if((state_val_11924 === 1))
{var state_11923__$1 = state_11923;var statearr_11925_12014 = state_11923__$1;(statearr_11925_12014[2] = null);
(statearr_11925_12014[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 2))
{var state_11923__$1 = state_11923;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11923__$1,4,animation);
} else
{if((state_val_11924 === 3))
{var inst_11921 = (state_11923[2]);var state_11923__$1 = state_11923;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11923__$1,inst_11921);
} else
{if((state_val_11924 === 4))
{var inst_11837 = (state_11923[5]);var inst_11837__$1 = (state_11923[2]);var state_11923__$1 = (function (){var statearr_11926 = state_11923;(statearr_11926[5] = inst_11837__$1);
return statearr_11926;
})();if(cljs.core.truth_(inst_11837__$1))
{var statearr_11927_12015 = state_11923__$1;(statearr_11927_12015[1] = 5);
} else
{var statearr_11928_12016 = state_11923__$1;(statearr_11928_12016[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 5))
{var inst_11837 = (state_11923[5]);var inst_11843 = (state_11923[6]);var inst_11842 = cljs.core.rest.call(null,inst_11837);var inst_11843__$1 = cljs.core.first.call(null,inst_11837);var inst_11844 = cljs.core.seq_QMARK_.call(null,inst_11843__$1);var state_11923__$1 = (function (){var statearr_11929 = state_11923;(statearr_11929[7] = inst_11842);
(statearr_11929[6] = inst_11843__$1);
return statearr_11929;
})();if(inst_11844)
{var statearr_11930_12017 = state_11923__$1;(statearr_11930_12017[1] = 8);
} else
{var statearr_11931_12018 = state_11923__$1;(statearr_11931_12018[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 6))
{var state_11923__$1 = state_11923;var statearr_11932_12019 = state_11923__$1;(statearr_11932_12019[2] = null);
(statearr_11932_12019[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 7))
{var inst_11919 = (state_11923[2]);var state_11923__$1 = state_11923;var statearr_11933_12020 = state_11923__$1;(statearr_11933_12020[2] = inst_11919);
(statearr_11933_12020[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 8))
{var inst_11843 = (state_11923[6]);var inst_11846 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11843);var state_11923__$1 = state_11923;var statearr_11934_12021 = state_11923__$1;(statearr_11934_12021[2] = inst_11846);
(statearr_11934_12021[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 9))
{var inst_11843 = (state_11923[6]);var state_11923__$1 = state_11923;var statearr_11935_12022 = state_11923__$1;(statearr_11935_12022[2] = inst_11843);
(statearr_11935_12022[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 10))
{var inst_11842 = (state_11923[7]);var inst_11843 = (state_11923[6]);var inst_11849 = (state_11923[2]);var inst_11850 = cljs.core.get.call(null,inst_11849,new cljs.core.Keyword(null,"arg","arg",1014001096));var inst_11851 = cljs.core.get.call(null,inst_11849,new cljs.core.Keyword(null,"op","op",1013907795));var inst_11852 = cljs.core.get.call(null,inst_11849,new cljs.core.Keyword(null,"tank-id","tank-id",3766965328));var inst_11853 = inst_11842;var inst_11854 = inst_11843;var state_11923__$1 = (function (){var statearr_11936 = state_11923;(statearr_11936[8] = inst_11852);
(statearr_11936[9] = inst_11853);
(statearr_11936[10] = inst_11854);
(statearr_11936[11] = inst_11851);
(statearr_11936[12] = inst_11850);
return statearr_11936;
})();var statearr_11937_12023 = state_11923__$1;(statearr_11937_12023[2] = null);
(statearr_11937_12023[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 11))
{var inst_11854 = (state_11923[10]);var inst_11857 = cljs.core.seq_QMARK_.call(null,inst_11854);var state_11923__$1 = state_11923;if(inst_11857)
{var statearr_11938_12024 = state_11923__$1;(statearr_11938_12024[1] = 13);
} else
{var statearr_11939_12025 = state_11923__$1;(statearr_11939_12025[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 12))
{var inst_11915 = (state_11923[2]);var state_11923__$1 = (function (){var statearr_11940 = state_11923;(statearr_11940[13] = inst_11915);
return statearr_11940;
})();var statearr_11941_12026 = state_11923__$1;(statearr_11941_12026[2] = null);
(statearr_11941_12026[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 13))
{var inst_11854 = (state_11923[10]);var inst_11859 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11854);var state_11923__$1 = state_11923;var statearr_11942_12027 = state_11923__$1;(statearr_11942_12027[2] = inst_11859);
(statearr_11942_12027[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 14))
{var inst_11854 = (state_11923[10]);var state_11923__$1 = state_11923;var statearr_11943_12028 = state_11923__$1;(statearr_11943_12028[2] = inst_11854);
(statearr_11943_12028[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 15))
{var inst_11862 = (state_11923[14]);var inst_11866 = (state_11923[15]);var inst_11862__$1 = (state_11923[2]);var inst_11863 = cljs.core.get.call(null,inst_11862__$1,new cljs.core.Keyword(null,"arg","arg",1014001096));var inst_11864 = cljs.core.get.call(null,inst_11862__$1,new cljs.core.Keyword(null,"op","op",1013907795));var inst_11865 = cljs.core.get.call(null,inst_11862__$1,new cljs.core.Keyword(null,"tank-id","tank-id",3766965328));var inst_11866__$1 = rvb.client.get_tank_by_id.call(null,inst_11865);var state_11923__$1 = (function (){var statearr_11944 = state_11923;(statearr_11944[14] = inst_11862__$1);
(statearr_11944[16] = inst_11863);
(statearr_11944[17] = inst_11864);
(statearr_11944[15] = inst_11866__$1);
return statearr_11944;
})();if(cljs.core.truth_(inst_11866__$1))
{var statearr_11945_12029 = state_11923__$1;(statearr_11945_12029[1] = 16);
} else
{var statearr_11946_12030 = state_11923__$1;(statearr_11946_12030[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 16))
{var inst_11868 = (state_11923[18]);var inst_11864 = (state_11923[17]);var inst_11870 = (state_11923[19]);var inst_11866 = (state_11923[15]);var inst_11868__$1 = rvb.client.process_animation_command.call(null,inst_11864,inst_11866);var inst_11869 = rvb.client.tanks_but_me.call(null,inst_11868__$1);var inst_11870__$1 = rvb.client.get_collisions.call(null,inst_11868__$1,inst_11869);var inst_11871 = cljs.core.seq.call(null,inst_11870__$1);var state_11923__$1 = (function (){var statearr_11947 = state_11923;(statearr_11947[18] = inst_11868__$1);
(statearr_11947[19] = inst_11870__$1);
return statearr_11947;
})();if(inst_11871)
{var statearr_11948_12031 = state_11923__$1;(statearr_11948_12031[1] = 19);
} else
{var statearr_11949_12032 = state_11923__$1;(statearr_11949_12032[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 17))
{var state_11923__$1 = state_11923;var statearr_11950_12033 = state_11923__$1;(statearr_11950_12033[2] = null);
(statearr_11950_12033[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 18))
{var inst_11913 = (state_11923[2]);var state_11923__$1 = state_11923;var statearr_11951_12034 = state_11923__$1;(statearr_11951_12034[2] = inst_11913);
(statearr_11951_12034[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 19))
{var inst_11873 = cljs.core.async.timeout.call(null,500);var state_11923__$1 = state_11923;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11923__$1,22,inst_11873);
} else
{if((state_val_11924 === 20))
{var inst_11868 = (state_11923[18]);var inst_11862 = (state_11923[14]);var inst_11864 = (state_11923[17]);var inst_11866 = (state_11923[15]);var inst_11880 = rvb.client.animate_tank.call(null,inst_11866,inst_11868,inst_11862);var inst_11881 = cljs.core.get.call(null,rvb.client.speed,inst_11864);var inst_11882 = (1000 / inst_11881);var inst_11883 = cljs.core.async.timeout.call(null,inst_11882);var state_11923__$1 = (function (){var statearr_11952 = state_11923;(statearr_11952[20] = inst_11880);
return statearr_11952;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11923__$1,24,inst_11883);
} else
{if((state_val_11924 === 21))
{var inst_11910 = (state_11923[2]);var state_11923__$1 = state_11923;var statearr_11953_12035 = state_11923__$1;(statearr_11953_12035[2] = inst_11910);
(statearr_11953_12035[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 22))
{var inst_11870 = (state_11923[19]);var inst_11875 = (state_11923[2]);var inst_11876 = cljs.core.hash_map.call(null,new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Keyword(null,"collision","collision",2901555876),new cljs.core.Keyword(null,"info","info",1017141280),inst_11870);var state_11923__$1 = (function (){var statearr_11954 = state_11923;(statearr_11954[21] = inst_11875);
return statearr_11954;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11923__$1,23,control,inst_11876);
} else
{if((state_val_11924 === 23))
{var inst_11878 = (state_11923[2]);var state_11923__$1 = state_11923;var statearr_11956_12036 = state_11923__$1;(statearr_11956_12036[2] = inst_11878);
(statearr_11956_12036[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 24))
{var inst_11863 = (state_11923[16]);var inst_11885 = (state_11923[2]);var inst_11886 = (inst_11863 > 1);var state_11923__$1 = (function (){var statearr_11957 = state_11923;(statearr_11957[22] = inst_11885);
return statearr_11957;
})();if(cljs.core.truth_(inst_11886))
{var statearr_11958_12037 = state_11923__$1;(statearr_11958_12037[1] = 25);
} else
{var statearr_11959_12038 = state_11923__$1;(statearr_11959_12038[1] = 26);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 25))
{var inst_11868 = (state_11923[18]);var inst_11853 = (state_11923[9]);var inst_11863 = (state_11923[16]);var inst_11864 = (state_11923[17]);var inst_11888 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_11868);var inst_11889 = (inst_11863 - 1);var inst_11890 = cljs.core.hash_map.call(null,new cljs.core.Keyword(null,"tank-id","tank-id",3766965328),inst_11888,new cljs.core.Keyword(null,"op","op",1013907795),inst_11864,new cljs.core.Keyword(null,"arg","arg",1014001096),inst_11889);var tmp11955 = inst_11853;var inst_11853__$1 = tmp11955;var inst_11854 = inst_11890;var state_11923__$1 = (function (){var statearr_11960 = state_11923;(statearr_11960[9] = inst_11853__$1);
(statearr_11960[10] = inst_11854);
return statearr_11960;
})();var statearr_11961_12039 = state_11923__$1;(statearr_11961_12039[2] = null);
(statearr_11961_12039[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 26))
{var inst_11853 = (state_11923[9]);var inst_11893 = cljs.core.seq.call(null,inst_11853);var state_11923__$1 = state_11923;if(inst_11893)
{var statearr_11962_12040 = state_11923__$1;(statearr_11962_12040[1] = 28);
} else
{var statearr_11963_12041 = state_11923__$1;(statearr_11963_12041[1] = 29);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 27))
{var inst_11908 = (state_11923[2]);var state_11923__$1 = state_11923;var statearr_11964_12042 = state_11923__$1;(statearr_11964_12042[2] = inst_11908);
(statearr_11964_12042[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 28))
{var inst_11868 = (state_11923[18]);var inst_11853 = (state_11923[9]);var inst_11895 = cljs.core.rest.call(null,inst_11853);var inst_11896 = cljs.core.first.call(null,inst_11853);var inst_11897 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_11868);var inst_11898 = cljs.core.hash_map.call(null,new cljs.core.Keyword(null,"tank-id","tank-id",3766965328),inst_11897);var inst_11899 = cljs.core.merge.call(null,inst_11896,inst_11898);var inst_11853__$1 = inst_11895;var inst_11854 = inst_11899;var state_11923__$1 = (function (){var statearr_11965 = state_11923;(statearr_11965[9] = inst_11853__$1);
(statearr_11965[10] = inst_11854);
return statearr_11965;
})();var statearr_11966_12043 = state_11923__$1;(statearr_11966_12043[2] = null);
(statearr_11966_12043[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 29))
{var inst_11902 = cljs.core.hash_map.call(null);var state_11923__$1 = state_11923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11923__$1,31,control,inst_11902);
} else
{if((state_val_11924 === 30))
{var inst_11906 = (state_11923[2]);var state_11923__$1 = state_11923;var statearr_11967_12044 = state_11923__$1;(statearr_11967_12044[2] = inst_11906);
(statearr_11967_12044[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11924 === 31))
{var inst_11904 = (state_11923[2]);var state_11923__$1 = state_11923;var statearr_11968_12045 = state_11923__$1;(statearr_11968_12045[2] = inst_11904);
(statearr_11968_12045[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
}
}
});return ((function (switch__5147__auto__){
return (function() {
var state_machine__5148__auto__ = null;
var state_machine__5148__auto____0 = (function (){var statearr_11970 = (new Array(23));(statearr_11970[0] = state_machine__5148__auto__);
(statearr_11970[1] = 1);
return statearr_11970;
});
var state_machine__5148__auto____1 = (function (state_11923){while(true){
var result__5149__auto__ = switch__5147__auto__.call(null,state_11923);if(cljs.core.keyword_identical_QMARK_.call(null,result__5149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5149__auto__;
}
break;
}
});
state_machine__5148__auto__ = function(state_11923){
switch(arguments.length){
case 0:
return state_machine__5148__auto____0.call(this);
case 1:
return state_machine__5148__auto____1.call(this,state_11923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5148__auto____0;
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5148__auto____1;
return state_machine__5148__auto__;
})()
;})(switch__5147__auto__))
})();var state__5199__auto__ = (function (){var statearr_11971 = f__5198__auto__.call(null);(statearr_11971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5197__auto__);
return statearr_11971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5199__auto__);
}));
return c__5197__auto__;
});
var seq__12046_12050 = cljs.core.seq.call(null,cljs.core.repeat.call(null,25,new cljs.core.Keyword(null,"red","red",1014017027)));var chunk__12047_12051 = null;var count__12048_12052 = 0;var i__12049_12053 = 0;while(true){
if((i__12049_12053 < count__12048_12052))
{var team_12054 = cljs.core._nth.call(null,chunk__12047_12051,i__12049_12053);rvb.client.add_tank.call(null,team_12054);
{
var G__12055 = seq__12046_12050;
var G__12056 = chunk__12047_12051;
var G__12057 = count__12048_12052;
var G__12058 = (i__12049_12053 + 1);
seq__12046_12050 = G__12055;
chunk__12047_12051 = G__12056;
count__12048_12052 = G__12057;
i__12049_12053 = G__12058;
continue;
}
} else
{var temp__4092__auto___12059 = cljs.core.seq.call(null,seq__12046_12050);if(temp__4092__auto___12059)
{var seq__12046_12060__$1 = temp__4092__auto___12059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12046_12060__$1))
{var c__3664__auto___12061 = cljs.core.chunk_first.call(null,seq__12046_12060__$1);{
var G__12062 = cljs.core.chunk_rest.call(null,seq__12046_12060__$1);
var G__12063 = c__3664__auto___12061;
var G__12064 = cljs.core.count.call(null,c__3664__auto___12061);
var G__12065 = 0;
seq__12046_12050 = G__12062;
chunk__12047_12051 = G__12063;
count__12048_12052 = G__12064;
i__12049_12053 = G__12065;
continue;
}
} else
{var team_12066 = cljs.core.first.call(null,seq__12046_12060__$1);rvb.client.add_tank.call(null,team_12066);
{
var G__12067 = cljs.core.next.call(null,seq__12046_12060__$1);
var G__12068 = null;
var G__12069 = 0;
var G__12070 = 0;
seq__12046_12050 = G__12067;
chunk__12047_12051 = G__12068;
count__12048_12052 = G__12069;
i__12049_12053 = G__12070;
continue;
}
}
} else
{}
}
break;
}
var seq__12071_12075 = cljs.core.seq.call(null,cljs.core.repeat.call(null,25,new cljs.core.Keyword(null,"blue","blue",1016931276)));var chunk__12072_12076 = null;var count__12073_12077 = 0;var i__12074_12078 = 0;while(true){
if((i__12074_12078 < count__12073_12077))
{var team_12079 = cljs.core._nth.call(null,chunk__12072_12076,i__12074_12078);rvb.client.add_tank.call(null,team_12079);
{
var G__12080 = seq__12071_12075;
var G__12081 = chunk__12072_12076;
var G__12082 = count__12073_12077;
var G__12083 = (i__12074_12078 + 1);
seq__12071_12075 = G__12080;
chunk__12072_12076 = G__12081;
count__12073_12077 = G__12082;
i__12074_12078 = G__12083;
continue;
}
} else
{var temp__4092__auto___12084 = cljs.core.seq.call(null,seq__12071_12075);if(temp__4092__auto___12084)
{var seq__12071_12085__$1 = temp__4092__auto___12084;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12071_12085__$1))
{var c__3664__auto___12086 = cljs.core.chunk_first.call(null,seq__12071_12085__$1);{
var G__12087 = cljs.core.chunk_rest.call(null,seq__12071_12085__$1);
var G__12088 = c__3664__auto___12086;
var G__12089 = cljs.core.count.call(null,c__3664__auto___12086);
var G__12090 = 0;
seq__12071_12075 = G__12087;
chunk__12072_12076 = G__12088;
count__12073_12077 = G__12089;
i__12074_12078 = G__12090;
continue;
}
} else
{var team_12091 = cljs.core.first.call(null,seq__12071_12085__$1);rvb.client.add_tank.call(null,team_12091);
{
var G__12092 = cljs.core.next.call(null,seq__12071_12085__$1);
var G__12093 = null;
var G__12094 = 0;
var G__12095 = 0;
seq__12071_12075 = G__12092;
chunk__12072_12076 = G__12093;
count__12073_12077 = G__12094;
i__12074_12078 = G__12095;
continue;
}
}
} else
{}
}
break;
}
var c__5197__auto___12171 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5198__auto__ = (function (){var switch__5147__auto__ = (function (state_12144){var state_val_12145 = (state_12144[1]);if((state_val_12145 === 1))
{var inst_12100 = cljs.core.deref.call(null,rvb.client._STAR_tanks_STAR_);var inst_12101 = cljs.core.seq.call(null,inst_12100);var inst_12102 = inst_12101;var inst_12103 = null;var inst_12104 = 0;var inst_12105 = 0;var state_12144__$1 = (function (){var statearr_12146 = state_12144;(statearr_12146[5] = inst_12105);
(statearr_12146[6] = inst_12104);
(statearr_12146[7] = inst_12103);
(statearr_12146[8] = inst_12102);
return statearr_12146;
})();var statearr_12147_12172 = state_12144__$1;(statearr_12147_12172[2] = null);
(statearr_12147_12172[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12145 === 2))
{var inst_12105 = (state_12144[5]);var inst_12104 = (state_12144[6]);var inst_12107 = (inst_12105 < inst_12104);var inst_12108 = inst_12107;var state_12144__$1 = state_12144;if(cljs.core.truth_(inst_12108))
{var statearr_12148_12173 = state_12144__$1;(statearr_12148_12173[1] = 4);
} else
{var statearr_12149_12174 = state_12144__$1;(statearr_12149_12174[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12145 === 3))
{var inst_12142 = (state_12144[2]);var state_12144__$1 = state_12144;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12144__$1,inst_12142);
} else
{if((state_val_12145 === 4))
{var inst_12105 = (state_12144[5]);var inst_12103 = (state_12144[7]);var inst_12110 = cljs.core._nth.call(null,inst_12103,inst_12105);var inst_12111 = new cljs.core.Keyword(null,"events","events",4017542283).cljs$core$IFn$_invoke$arity$1(inst_12110);var inst_12112 = cljs.core.hash_map.call(null,new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"tank","tank",1017456732),inst_12110);var state_12144__$1 = state_12144;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12144__$1,7,inst_12111,inst_12112);
} else
{if((state_val_12145 === 5))
{var inst_12102 = (state_12144[8]);var inst_12118 = (state_12144[9]);var inst_12118__$1 = cljs.core.seq.call(null,inst_12102);var state_12144__$1 = (function (){var statearr_12153 = state_12144;(statearr_12153[9] = inst_12118__$1);
return statearr_12153;
})();if(inst_12118__$1)
{var statearr_12154_12175 = state_12144__$1;(statearr_12154_12175[1] = 8);
} else
{var statearr_12155_12176 = state_12144__$1;(statearr_12155_12176[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12145 === 6))
{var inst_12140 = (state_12144[2]);var state_12144__$1 = state_12144;var statearr_12156_12177 = state_12144__$1;(statearr_12156_12177[2] = inst_12140);
(statearr_12156_12177[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12145 === 7))
{var inst_12105 = (state_12144[5]);var inst_12104 = (state_12144[6]);var inst_12103 = (state_12144[7]);var inst_12102 = (state_12144[8]);var inst_12114 = (state_12144[2]);var inst_12115 = (inst_12105 + 1);var tmp12150 = inst_12104;var tmp12151 = inst_12103;var tmp12152 = inst_12102;var inst_12102__$1 = tmp12152;var inst_12103__$1 = tmp12151;var inst_12104__$1 = tmp12150;var inst_12105__$1 = inst_12115;var state_12144__$1 = (function (){var statearr_12157 = state_12144;(statearr_12157[5] = inst_12105__$1);
(statearr_12157[10] = inst_12114);
(statearr_12157[6] = inst_12104__$1);
(statearr_12157[7] = inst_12103__$1);
(statearr_12157[8] = inst_12102__$1);
return statearr_12157;
})();var statearr_12158_12178 = state_12144__$1;(statearr_12158_12178[2] = null);
(statearr_12158_12178[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12145 === 8))
{var inst_12118 = (state_12144[9]);var inst_12120 = cljs.core.chunked_seq_QMARK_.call(null,inst_12118);var state_12144__$1 = state_12144;if(inst_12120)
{var statearr_12159_12179 = state_12144__$1;(statearr_12159_12179[1] = 11);
} else
{var statearr_12160_12180 = state_12144__$1;(statearr_12160_12180[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12145 === 9))
{var state_12144__$1 = state_12144;var statearr_12161_12181 = state_12144__$1;(statearr_12161_12181[2] = null);
(statearr_12161_12181[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12145 === 10))
{var inst_12138 = (state_12144[2]);var state_12144__$1 = state_12144;var statearr_12162_12182 = state_12144__$1;(statearr_12162_12182[2] = inst_12138);
(statearr_12162_12182[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12145 === 11))
{var inst_12118 = (state_12144[9]);var inst_12122 = cljs.core.chunk_first.call(null,inst_12118);var inst_12123 = cljs.core.chunk_rest.call(null,inst_12118);var inst_12124 = cljs.core.count.call(null,inst_12122);var inst_12102 = inst_12123;var inst_12103 = inst_12122;var inst_12104 = inst_12124;var inst_12105 = 0;var state_12144__$1 = (function (){var statearr_12163 = state_12144;(statearr_12163[5] = inst_12105);
(statearr_12163[6] = inst_12104);
(statearr_12163[7] = inst_12103);
(statearr_12163[8] = inst_12102);
return statearr_12163;
})();var statearr_12164_12183 = state_12144__$1;(statearr_12164_12183[2] = null);
(statearr_12164_12183[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12145 === 12))
{var inst_12118 = (state_12144[9]);var inst_12127 = cljs.core.first.call(null,inst_12118);var inst_12128 = new cljs.core.Keyword(null,"events","events",4017542283).cljs$core$IFn$_invoke$arity$1(inst_12127);var inst_12129 = cljs.core.hash_map.call(null,new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"tank","tank",1017456732),inst_12127);var state_12144__$1 = state_12144;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12144__$1,14,inst_12128,inst_12129);
} else
{if((state_val_12145 === 13))
{var inst_12135 = (state_12144[2]);var state_12144__$1 = state_12144;var statearr_12165_12184 = state_12144__$1;(statearr_12165_12184[2] = inst_12135);
(statearr_12165_12184[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12145 === 14))
{var inst_12118 = (state_12144[9]);var inst_12131 = (state_12144[2]);var inst_12132 = cljs.core.next.call(null,inst_12118);var inst_12102 = inst_12132;var inst_12103 = null;var inst_12104 = 0;var inst_12105 = 0;var state_12144__$1 = (function (){var statearr_12166 = state_12144;(statearr_12166[5] = inst_12105);
(statearr_12166[6] = inst_12104);
(statearr_12166[7] = inst_12103);
(statearr_12166[8] = inst_12102);
(statearr_12166[11] = inst_12131);
return statearr_12166;
})();var statearr_12167_12185 = state_12144__$1;(statearr_12167_12185[2] = null);
(statearr_12167_12185[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
});return ((function (switch__5147__auto__){
return (function() {
var state_machine__5148__auto__ = null;
var state_machine__5148__auto____0 = (function (){var statearr_12169 = (new Array(12));(statearr_12169[0] = state_machine__5148__auto__);
(statearr_12169[1] = 1);
return statearr_12169;
});
var state_machine__5148__auto____1 = (function (state_12144){while(true){
var result__5149__auto__ = switch__5147__auto__.call(null,state_12144);if(cljs.core.keyword_identical_QMARK_.call(null,result__5149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5149__auto__;
}
break;
}
});
state_machine__5148__auto__ = function(state_12144){
switch(arguments.length){
case 0:
return state_machine__5148__auto____0.call(this);
case 1:
return state_machine__5148__auto____1.call(this,state_12144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5148__auto____0;
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5148__auto____1;
return state_machine__5148__auto__;
})()
;})(switch__5147__auto__))
})();var state__5199__auto__ = (function (){var statearr_12170 = f__5198__auto__.call(null);(statearr_12170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5197__auto___12171);
return statearr_12170;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5199__auto__);
}));

//@ sourceMappingURL=client.js.map