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
rvb.client.speed = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"move","move",1017261891),20,new cljs.core.Keyword(null,"turn-left","turn-left",843250377),15,new cljs.core.Keyword(null,"turn-right","turn-right",4319230014),15,new cljs.core.Keyword(null,"fire","fire",1017047464),0.3,new cljs.core.Keyword(null,"bullet","bullet",3930937460),40], true);
rvb.client.tanks_but_me = cljs.core.partial.call(null,rvb.util.tanks_but_me_STAR_,rvb.client._STAR_tanks_STAR_);
rvb.client.get_tank_by_id = cljs.core.partial.call(null,rvb.util.get_tank_by_id_STAR_,rvb.client._STAR_tanks_STAR_);
rvb.client.get_collisions = (function get_collisions(obj,coll){var nearby_QMARK_ = (function (target){var and__3941__auto__ = (40 >= Math.abs((new cljs.core.Keyword(null,"x","x",1013904362).call(null,obj) - new cljs.core.Keyword(null,"x","x",1013904362).call(null,target))));if(and__3941__auto__)
{return (40 >= Math.abs((new cljs.core.Keyword(null,"y","y",1013904363).call(null,obj) - new cljs.core.Keyword(null,"y","y",1013904363).call(null,target))));
} else
{return and__3941__auto__;
}
});var nearby_coll = cljs.core.filter.call(null,nearby_QMARK_,coll);return cljs.core.filter.call(null,cljs.core.partial.call(null,rvb.model.collides_QMARK_,obj),nearby_coll);
});
rvb.client.new_tank_position = (function new_tank_position(canvas,team){while(true){
var seedX = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"red","red",1014017027),team))?200:700);var startX = (seedX + (cljs.core.rand_int.call(null,-2) * cljs.core.rand_int.call(null,100)));var startY = (20 + cljs.core.rand_int.call(null,750));var tank = rvb.model.construct.call(null,rvb.model.__GT_Tank.call(null,-1,null,null,null,canvas,startX,startY,20,3,team));if(cljs.core.truth_(cljs.core.first.call(null,rvb.client.get_collisions.call(null,tank,cljs.core.deref.call(null,rvb.client._STAR_tanks_STAR_)))))
{{
var G__9055 = canvas;
var G__9056 = team;
canvas = G__9055;
team = G__9056;
continue;
}
} else
{return cljs.core.PersistentVector.fromArray([startX,startY], true);
}
break;
}
});
rvb.client.add_bullet = (function add_bullet(team,coords,degree){var vec__9139 = coords;var x = cljs.core.nth.call(null,vec__9139,0,null);var y = cljs.core.nth.call(null,vec__9139,1,null);var bullet = rvb.model.construct.call(null,rvb.model.__GT_Bullet.call(null,rvb.client.canvas,x,y,team,degree));var c__5084__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5085__auto__ = (function (){var switch__5034__auto__ = (function (state_9187){var state_val_9188 = (state_9187[1]);if((state_val_9188 === 1))
{var inst_9140 = bullet;var state_9187__$1 = (function (){var statearr_9189 = state_9187;(statearr_9189[5] = inst_9140);
return statearr_9189;
})();var statearr_9190_9221 = state_9187__$1;(statearr_9190_9221[2] = null);
(statearr_9190_9221[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9188 === 2))
{var inst_9142 = (state_9187[6]);var inst_9142__$1 = (0 <= x);var state_9187__$1 = (function (){var statearr_9191 = state_9187;(statearr_9191[6] = inst_9142__$1);
return statearr_9191;
})();if(cljs.core.truth_(inst_9142__$1))
{var statearr_9192_9222 = state_9187__$1;(statearr_9192_9222[1] = 4);
} else
{var statearr_9193_9223 = state_9187__$1;(statearr_9193_9223[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9188 === 3))
{var inst_9185 = (state_9187[2]);var state_9187__$1 = state_9187;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9187__$1,inst_9185);
} else
{if((state_val_9188 === 4))
{var inst_9144 = new cljs.core.Keyword(null,"width","width",1127031096).call(null,rvb.client.canvas);var inst_9145 = (x <= inst_9144);var state_9187__$1 = state_9187;var statearr_9194_9224 = state_9187__$1;(statearr_9194_9224[2] = inst_9145);
(statearr_9194_9224[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9188 === 5))
{var inst_9142 = (state_9187[6]);var state_9187__$1 = state_9187;var statearr_9195_9225 = state_9187__$1;(statearr_9195_9225[2] = inst_9142);
(statearr_9195_9225[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9188 === 6))
{var inst_9148 = (state_9187[7]);var inst_9148__$1 = (state_9187[2]);var state_9187__$1 = (function (){var statearr_9196 = state_9187;(statearr_9196[7] = inst_9148__$1);
return statearr_9196;
})();if(cljs.core.truth_(inst_9148__$1))
{var statearr_9197_9226 = state_9187__$1;(statearr_9197_9226[1] = 7);
} else
{var statearr_9198_9227 = state_9187__$1;(statearr_9198_9227[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9188 === 7))
{var inst_9150 = (state_9187[8]);var inst_9150__$1 = (0 <= y);var state_9187__$1 = (function (){var statearr_9199 = state_9187;(statearr_9199[8] = inst_9150__$1);
return statearr_9199;
})();if(cljs.core.truth_(inst_9150__$1))
{var statearr_9200_9228 = state_9187__$1;(statearr_9200_9228[1] = 10);
} else
{var statearr_9201_9229 = state_9187__$1;(statearr_9201_9229[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9188 === 8))
{var inst_9148 = (state_9187[7]);var state_9187__$1 = state_9187;var statearr_9202_9230 = state_9187__$1;(statearr_9202_9230[2] = inst_9148);
(statearr_9202_9230[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9188 === 9))
{var inst_9159 = (state_9187[2]);var state_9187__$1 = state_9187;if(cljs.core.truth_(inst_9159))
{var statearr_9203_9231 = state_9187__$1;(statearr_9203_9231[1] = 13);
} else
{var statearr_9204_9232 = state_9187__$1;(statearr_9204_9232[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9188 === 10))
{var inst_9152 = new cljs.core.Keyword(null,"height","height",4087841945).call(null,rvb.client.canvas);var inst_9153 = (y <= inst_9152);var state_9187__$1 = state_9187;var statearr_9205_9233 = state_9187__$1;(statearr_9205_9233[2] = inst_9153);
(statearr_9205_9233[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9188 === 11))
{var inst_9150 = (state_9187[8]);var state_9187__$1 = state_9187;var statearr_9206_9234 = state_9187__$1;(statearr_9206_9234[2] = inst_9150);
(statearr_9206_9234[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9188 === 12))
{var inst_9156 = (state_9187[2]);var state_9187__$1 = state_9187;var statearr_9207_9235 = state_9187__$1;(statearr_9207_9235[2] = inst_9156);
(statearr_9207_9235[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9188 === 13))
{var inst_9161 = (state_9187[9]);var inst_9164 = (state_9187[10]);var inst_9140 = (state_9187[5]);var inst_9161__$1 = rvb.model.move.call(null,inst_9140,3);var inst_9162 = cljs.core.deref.call(null,rvb.client._STAR_tanks_STAR_);var inst_9163 = rvb.client.get_collisions.call(null,inst_9161__$1,inst_9162);var inst_9164__$1 = cljs.core.first.call(null,inst_9163);var inst_9165 = rvb.model.erase_BANG_.call(null,inst_9140);var state_9187__$1 = (function (){var statearr_9208 = state_9187;(statearr_9208[9] = inst_9161__$1);
(statearr_9208[10] = inst_9164__$1);
(statearr_9208[11] = inst_9165);
return statearr_9208;
})();if(cljs.core.truth_(inst_9164__$1))
{var statearr_9209_9236 = state_9187__$1;(statearr_9209_9236[1] = 16);
} else
{var statearr_9210_9237 = state_9187__$1;(statearr_9210_9237[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9188 === 14))
{var state_9187__$1 = state_9187;var statearr_9211_9238 = state_9187__$1;(statearr_9211_9238[2] = null);
(statearr_9211_9238[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9188 === 15))
{var inst_9183 = (state_9187[2]);var state_9187__$1 = state_9187;var statearr_9212_9239 = state_9187__$1;(statearr_9212_9239[2] = inst_9183);
(statearr_9212_9239[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9188 === 16))
{var inst_9164 = (state_9187[10]);var inst_9167 = new cljs.core.Keyword(null,"events","events",4017542283).call(null,inst_9164);var inst_9168 = cljs.core.hash_map.call(null,new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"hit","hit",1014007557),new cljs.core.Keyword(null,"tank","tank",1017456732),inst_9164);var state_9187__$1 = state_9187;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9187__$1,19,inst_9167,inst_9168);
} else
{if((state_val_9188 === 17))
{var inst_9161 = (state_9187[9]);var inst_9172 = rvb.model.render_BANG_.call(null,inst_9161);var inst_9173 = cljs.core.get.call(null,rvb.client.speed,new cljs.core.Keyword(null,"bullet","bullet",3930937460));var inst_9174 = (1000 / inst_9173);var inst_9175 = cljs.core.async.timeout.call(null,inst_9174);var state_9187__$1 = (function (){var statearr_9213 = state_9187;(statearr_9213[12] = inst_9172);
return statearr_9213;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9187__$1,20,inst_9175);
} else
{if((state_val_9188 === 18))
{var inst_9180 = (state_9187[2]);var state_9187__$1 = state_9187;var statearr_9214_9240 = state_9187__$1;(statearr_9214_9240[2] = inst_9180);
(statearr_9214_9240[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9188 === 19))
{var inst_9170 = (state_9187[2]);var state_9187__$1 = state_9187;var statearr_9215_9241 = state_9187__$1;(statearr_9215_9241[2] = inst_9170);
(statearr_9215_9241[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9188 === 20))
{var inst_9161 = (state_9187[9]);var inst_9177 = (state_9187[2]);var inst_9140 = inst_9161;var state_9187__$1 = (function (){var statearr_9216 = state_9187;(statearr_9216[5] = inst_9140);
(statearr_9216[13] = inst_9177);
return statearr_9216;
})();var statearr_9217_9242 = state_9187__$1;(statearr_9217_9242[2] = null);
(statearr_9217_9242[1] = 2);
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
});return ((function (switch__5034__auto__){
return (function() {
var state_machine__5035__auto__ = null;
var state_machine__5035__auto____0 = (function (){var statearr_9219 = (new Array(14));(statearr_9219[0] = state_machine__5035__auto__);
(statearr_9219[1] = 1);
return statearr_9219;
});
var state_machine__5035__auto____1 = (function (state_9187){while(true){
var result__5036__auto__ = switch__5034__auto__.call(null,state_9187);if(cljs.core.keyword_identical_QMARK_.call(null,result__5036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5036__auto__;
}
break;
}
});
state_machine__5035__auto__ = function(state_9187){
switch(arguments.length){
case 0:
return state_machine__5035__auto____0.call(this);
case 1:
return state_machine__5035__auto____1.call(this,state_9187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5035__auto____0;
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5035__auto____1;
return state_machine__5035__auto__;
})()
;})(switch__5034__auto__))
})();var state__5086__auto__ = (function (){var statearr_9220 = f__5085__auto__.call(null);(statearr_9220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5084__auto__);
return statearr_9220;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5086__auto__);
}));
return c__5084__auto__;
});
rvb.client.animate_tank = (function animate_tank(old_tank,new_tank,step){rvb.model.erase_BANG_.call(null,old_tank);
if(cljs.core.truth_(rvb.client.get_tank_by_id.call(null,new cljs.core.Keyword(null,"id","id",1013907597).call(null,new_tank))))
{cljs.core.swap_BANG_.call(null,rvb.client._STAR_tanks_STAR_,rvb.util.update_tank,new cljs.core.Keyword(null,"id","id",1013907597).call(null,new_tank),cljs.core.select_keys.call(null,new_tank,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"corners","corners",1968950320),new cljs.core.Keyword(null,"straight-corners","straight-corners",889569373),new cljs.core.Keyword(null,"center","center",3944857543),new cljs.core.Keyword(null,"angle","angle",1106865221),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363)], true)));
rvb.model.render_BANG_.call(null,new_tank);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",1013907795).call(null,step),new cljs.core.Keyword(null,"fire","fire",1017047464)))
{return rvb.client.add_bullet.call(null,new cljs.core.Keyword(null,"team","team",1017460175).call(null,new_tank),rvb.model.turret_endpoint.call(null,new_tank),new cljs.core.Keyword(null,"angle","angle",1106865221).call(null,new_tank));
} else
{return null;
}
} else
{return null;
}
});
rvb.client.process_animation_command = (function process_animation_command(op,old_tank){var pred__9246 = cljs.core._EQ_;var expr__9247 = op;if(pred__9246.call(null,new cljs.core.Keyword(null,"move","move",1017261891),expr__9247))
{return rvb.model.move.call(null,old_tank,1);
} else
{if(pred__9246.call(null,new cljs.core.Keyword(null,"turn-left","turn-left",843250377),expr__9247))
{return rvb.model.orient.call(null,old_tank,(new cljs.core.Keyword(null,"angle","angle",1106865221).call(null,old_tank) - 1));
} else
{if(pred__9246.call(null,new cljs.core.Keyword(null,"turn-right","turn-right",4319230014),expr__9247))
{return rvb.model.orient.call(null,old_tank,(new cljs.core.Keyword(null,"angle","angle",1106865221).call(null,old_tank) + 1));
} else
{if(pred__9246.call(null,new cljs.core.Keyword(null,"fire","fire",1017047464),expr__9247))
{return rvb.model.fire.call(null,old_tank);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__9247)].join('')));
}
}
}
}
});
rvb.client.add_tank = (function add_tank(team){var vec__9536 = rvb.client.new_tank_position.call(null,rvb.client.canvas,team);var startX = cljs.core.nth.call(null,vec__9536,0,null);var startY = cljs.core.nth.call(null,vec__9536,1,null);var animation = cljs.core.async.chan.call(null,cljs.core.async.dropping_buffer.call(null,10));var control = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var events = cljs.core.async.chan.call(null,cljs.core.async.dropping_buffer.call(null,10));var t = rvb.model.construct.call(null,rvb.model.__GT_Tank.call(null,cljs.core.deref.call(null,rvb.client._STAR_next_tank_id_STAR_),rvb.client.canvas,control,animation,events,startX,startY,20,3,team));var tank_id = new cljs.core.Keyword(null,"id","id",1013907597).call(null,t);cljs.core.swap_BANG_.call(null,rvb.client._STAR_next_tank_id_STAR_,cljs.core.inc);
cljs.core.swap_BANG_.call(null,rvb.client._STAR_tanks_STAR_,rvb.util.replace_tank,t);
var c__5084__auto___9822 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5085__auto__ = (function (){var switch__5034__auto__ = (function (state_9559){var state_val_9560 = (state_9559[1]);if((state_val_9560 === 1))
{var state_9559__$1 = state_9559;var statearr_9561_9823 = state_9559__$1;(statearr_9561_9823[2] = null);
(statearr_9561_9823[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9560 === 2))
{var state_9559__$1 = state_9559;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9559__$1,4,control);
} else
{if((state_val_9560 === 3))
{var inst_9557 = (state_9559[2]);var state_9559__$1 = state_9559;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9559__$1,inst_9557);
} else
{if((state_val_9560 === 4))
{var inst_9539 = (state_9559[5]);var inst_9539__$1 = (state_9559[2]);var state_9559__$1 = (function (){var statearr_9562 = state_9559;(statearr_9562[5] = inst_9539__$1);
return statearr_9562;
})();if(cljs.core.truth_(inst_9539__$1))
{var statearr_9563_9824 = state_9559__$1;(statearr_9563_9824[1] = 5);
} else
{var statearr_9564_9825 = state_9559__$1;(statearr_9564_9825[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9560 === 5))
{var inst_9541 = (state_9559[6]);var inst_9541__$1 = rvb.client.get_tank_by_id.call(null,tank_id);var state_9559__$1 = (function (){var statearr_9565 = state_9559;(statearr_9565[6] = inst_9541__$1);
return statearr_9565;
})();if(cljs.core.truth_(inst_9541__$1))
{var statearr_9566_9826 = state_9559__$1;(statearr_9566_9826[1] = 8);
} else
{var statearr_9567_9827 = state_9559__$1;(statearr_9567_9827[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9560 === 6))
{var state_9559__$1 = state_9559;var statearr_9568_9828 = state_9559__$1;(statearr_9568_9828[2] = null);
(statearr_9568_9828[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9560 === 7))
{var inst_9555 = (state_9559[2]);var state_9559__$1 = state_9559;var statearr_9569_9829 = state_9559__$1;(statearr_9569_9829[2] = inst_9555);
(statearr_9569_9829[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9560 === 8))
{var inst_9541 = (state_9559[6]);var inst_9539 = (state_9559[5]);var inst_9543 = (function (){var t__$1 = inst_9541;var control_args = inst_9539;var temp__4092__auto__ = inst_9541;return ((function (t__$1,control_args,temp__4092__auto__,inst_9541,inst_9539,state_val_9560){
return (function (p1__9249_SHARP_){return (new cljs.core.Keyword(null,"arg","arg",1014001096).call(null,p1__9249_SHARP_) === 0);
});
;})(t__$1,control_args,temp__4092__auto__,inst_9541,inst_9539,state_val_9560))
})();var inst_9544 = cljs.core.deref.call(null,rvb.client._STAR_tanks_STAR_);var inst_9545 = rvb.ai.make_decisions.call(null,inst_9541,inst_9544,rvb.client.speed,inst_9539);var inst_9546 = cljs.core.remove.call(null,inst_9543,inst_9545);var state_9559__$1 = state_9559;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9559__$1,11,animation,inst_9546);
} else
{if((state_val_9560 === 9))
{var state_9559__$1 = state_9559;var statearr_9570_9830 = state_9559__$1;(statearr_9570_9830[2] = null);
(statearr_9570_9830[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9560 === 10))
{var inst_9552 = (state_9559[2]);var state_9559__$1 = state_9559;var statearr_9571_9831 = state_9559__$1;(statearr_9571_9831[2] = inst_9552);
(statearr_9571_9831[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9560 === 11))
{var inst_9548 = (state_9559[2]);var state_9559__$1 = (function (){var statearr_9572 = state_9559;(statearr_9572[7] = inst_9548);
return statearr_9572;
})();var statearr_9573_9832 = state_9559__$1;(statearr_9573_9832[2] = null);
(statearr_9573_9832[1] = 2);
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
});return ((function (switch__5034__auto__){
return (function() {
var state_machine__5035__auto__ = null;
var state_machine__5035__auto____0 = (function (){var statearr_9575 = (new Array(8));(statearr_9575[0] = state_machine__5035__auto__);
(statearr_9575[1] = 1);
return statearr_9575;
});
var state_machine__5035__auto____1 = (function (state_9559){while(true){
var result__5036__auto__ = switch__5034__auto__.call(null,state_9559);if(cljs.core.keyword_identical_QMARK_.call(null,result__5036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5036__auto__;
}
break;
}
});
state_machine__5035__auto__ = function(state_9559){
switch(arguments.length){
case 0:
return state_machine__5035__auto____0.call(this);
case 1:
return state_machine__5035__auto____1.call(this,state_9559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5035__auto____0;
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5035__auto____1;
return state_machine__5035__auto__;
})()
;})(switch__5034__auto__))
})();var state__5086__auto__ = (function (){var statearr_9576 = f__5085__auto__.call(null);(statearr_9576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5084__auto___9822);
return statearr_9576;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5086__auto__);
}));
var c__5084__auto___9833 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5085__auto__ = (function (){var switch__5034__auto__ = (function (state_9643){var state_val_9644 = (state_9643[1]);if((state_val_9644 === 1))
{var state_9643__$1 = state_9643;var statearr_9645_9834 = state_9643__$1;(statearr_9645_9834[2] = null);
(statearr_9645_9834[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 2))
{var state_9643__$1 = state_9643;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9643__$1,4,events);
} else
{if((state_val_9644 === 3))
{var inst_9641 = (state_9643[2]);var state_9643__$1 = state_9643;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9643__$1,inst_9641);
} else
{if((state_val_9644 === 4))
{var inst_9579 = (state_9643[5]);var inst_9579__$1 = (state_9643[2]);var state_9643__$1 = (function (){var statearr_9646 = state_9643;(statearr_9646[5] = inst_9579__$1);
return statearr_9646;
})();if(cljs.core.truth_(inst_9579__$1))
{var statearr_9647_9835 = state_9643__$1;(statearr_9647_9835[1] = 5);
} else
{var statearr_9648_9836 = state_9643__$1;(statearr_9648_9836[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 5))
{var inst_9579 = (state_9643[5]);var inst_9582 = cljs.core.seq_QMARK_.call(null,inst_9579);var state_9643__$1 = state_9643;if(inst_9582)
{var statearr_9649_9837 = state_9643__$1;(statearr_9649_9837[1] = 8);
} else
{var statearr_9650_9838 = state_9643__$1;(statearr_9650_9838[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 6))
{var state_9643__$1 = state_9643;var statearr_9651_9839 = state_9643__$1;(statearr_9651_9839[2] = null);
(statearr_9651_9839[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 7))
{var inst_9639 = (state_9643[2]);var state_9643__$1 = state_9643;var statearr_9652_9840 = state_9643__$1;(statearr_9652_9840[2] = inst_9639);
(statearr_9652_9840[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 8))
{var inst_9579 = (state_9643[5]);var inst_9584 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9579);var state_9643__$1 = state_9643;var statearr_9653_9841 = state_9643__$1;(statearr_9653_9841[2] = inst_9584);
(statearr_9653_9841[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 9))
{var inst_9579 = (state_9643[5]);var state_9643__$1 = state_9643;var statearr_9654_9842 = state_9643__$1;(statearr_9654_9842[2] = inst_9579);
(statearr_9654_9842[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 10))
{var inst_9589 = (state_9643[6]);var inst_9587 = (state_9643[2]);var inst_9588 = cljs.core.get.call(null,inst_9587,new cljs.core.Keyword(null,"tank","tank",1017456732));var inst_9589__$1 = cljs.core.get.call(null,inst_9587,new cljs.core.Keyword(null,"op","op",1013907795));var inst_9593 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"start","start",1123661780),inst_9589__$1);var state_9643__$1 = (function (){var statearr_9655 = state_9643;(statearr_9655[6] = inst_9589__$1);
(statearr_9655[7] = inst_9588);
return statearr_9655;
})();if(inst_9593)
{var statearr_9656_9843 = state_9643__$1;(statearr_9656_9843[1] = 11);
} else
{var statearr_9657_9844 = state_9643__$1;(statearr_9657_9844[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 11))
{var inst_9595 = cljs.core.hash_map.call(null);var state_9643__$1 = state_9643;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9643__$1,14,control,inst_9595);
} else
{if((state_val_9644 === 12))
{var inst_9589 = (state_9643[6]);var inst_9599 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hit","hit",1014007557),inst_9589);var state_9643__$1 = state_9643;if(inst_9599)
{var statearr_9658_9845 = state_9643__$1;(statearr_9658_9845[1] = 15);
} else
{var statearr_9659_9846 = state_9643__$1;(statearr_9659_9846[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 13))
{var inst_9635 = (state_9643[2]);var state_9643__$1 = (function (){var statearr_9660 = state_9643;(statearr_9660[8] = inst_9635);
return statearr_9660;
})();var statearr_9661_9847 = state_9643__$1;(statearr_9661_9847[2] = null);
(statearr_9661_9847[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 14))
{var inst_9597 = (state_9643[2]);var state_9643__$1 = state_9643;var statearr_9662_9848 = state_9643__$1;(statearr_9662_9848[2] = inst_9597);
(statearr_9662_9848[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 15))
{var inst_9588 = (state_9643[7]);var inst_9601 = (state_9643[9]);var inst_9601__$1 = rvb.model.take_damage.call(null,inst_9588,1);var inst_9602 = new cljs.core.Keyword(null,"health","health",4087608782).call(null,inst_9601__$1);var inst_9603 = (inst_9602 > 0);var state_9643__$1 = (function (){var statearr_9663 = state_9643;(statearr_9663[9] = inst_9601__$1);
return statearr_9663;
})();if(cljs.core.truth_(inst_9603))
{var statearr_9664_9849 = state_9643__$1;(statearr_9664_9849[1] = 18);
} else
{var statearr_9665_9850 = state_9643__$1;(statearr_9665_9850[1] = 19);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 16))
{var inst_9589 = (state_9643[6]);var inst_9622 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"die","die",1014003698),inst_9589);var state_9643__$1 = state_9643;if(inst_9622)
{var statearr_9666_9851 = state_9643__$1;(statearr_9666_9851[1] = 25);
} else
{var statearr_9667_9852 = state_9643__$1;(statearr_9667_9852[1] = 26);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 17))
{var inst_9633 = (state_9643[2]);var state_9643__$1 = state_9643;var statearr_9668_9853 = state_9643__$1;(statearr_9668_9853[2] = inst_9633);
(statearr_9668_9853[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 18))
{var inst_9601 = (state_9643[9]);var inst_9605 = rvb.model.erase_BANG_.call(null,inst_9601);var inst_9606 = rvb.model.render_BANG_.call(null,inst_9601);var state_9643__$1 = (function (){var statearr_9669 = state_9643;(statearr_9669[10] = inst_9605);
return statearr_9669;
})();var statearr_9670_9854 = state_9643__$1;(statearr_9670_9854[2] = inst_9606);
(statearr_9670_9854[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 19))
{var state_9643__$1 = state_9643;var statearr_9671_9855 = state_9643__$1;(statearr_9671_9855[2] = null);
(statearr_9671_9855[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 20))
{var inst_9601 = (state_9643[9]);var inst_9609 = (state_9643[2]);var inst_9610 = cljs.core.swap_BANG_.call(null,rvb.client._STAR_tanks_STAR_,rvb.util.replace_tank,inst_9601);var inst_9611 = new cljs.core.Keyword(null,"health","health",4087608782).call(null,inst_9601);var inst_9612 = (inst_9611 === 0);var state_9643__$1 = (function (){var statearr_9672 = state_9643;(statearr_9672[11] = inst_9609);
(statearr_9672[12] = inst_9610);
return statearr_9672;
})();if(cljs.core.truth_(inst_9612))
{var statearr_9673_9856 = state_9643__$1;(statearr_9673_9856[1] = 21);
} else
{var statearr_9674_9857 = state_9643__$1;(statearr_9674_9857[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 21))
{var inst_9601 = (state_9643[9]);var inst_9614 = new cljs.core.Keyword(null,"events","events",4017542283).call(null,inst_9601);var inst_9615 = cljs.core.hash_map.call(null,new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"die","die",1014003698),new cljs.core.Keyword(null,"tank","tank",1017456732),inst_9601);var state_9643__$1 = state_9643;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9643__$1,24,inst_9614,inst_9615);
} else
{if((state_val_9644 === 22))
{var state_9643__$1 = state_9643;var statearr_9675_9858 = state_9643__$1;(statearr_9675_9858[2] = null);
(statearr_9675_9858[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 23))
{var inst_9620 = (state_9643[2]);var state_9643__$1 = state_9643;var statearr_9676_9859 = state_9643__$1;(statearr_9676_9859[2] = inst_9620);
(statearr_9676_9859[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 24))
{var inst_9617 = (state_9643[2]);var state_9643__$1 = state_9643;var statearr_9677_9860 = state_9643__$1;(statearr_9677_9860[2] = inst_9617);
(statearr_9677_9860[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 25))
{var inst_9588 = (state_9643[7]);var inst_9624 = cljs.core.swap_BANG_.call(null,rvb.client._STAR_tanks_STAR_,rvb.util.remove_tank,inst_9588);var inst_9625 = rvb.model.die_BANG_.call(null,inst_9588);var state_9643__$1 = (function (){var statearr_9678 = state_9643;(statearr_9678[13] = inst_9624);
return statearr_9678;
})();var statearr_9679_9861 = state_9643__$1;(statearr_9679_9861[2] = inst_9625);
(statearr_9679_9861[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 26))
{var inst_9589 = (state_9643[6]);var inst_9627 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_9589)].join('');var inst_9628 = (new Error(inst_9627));var inst_9629 = (function(){throw inst_9628})();var state_9643__$1 = state_9643;var statearr_9680_9862 = state_9643__$1;(statearr_9680_9862[2] = inst_9629);
(statearr_9680_9862[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9644 === 27))
{var inst_9631 = (state_9643[2]);var state_9643__$1 = state_9643;var statearr_9681_9863 = state_9643__$1;(statearr_9681_9863[2] = inst_9631);
(statearr_9681_9863[1] = 17);
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
});return ((function (switch__5034__auto__){
return (function() {
var state_machine__5035__auto__ = null;
var state_machine__5035__auto____0 = (function (){var statearr_9683 = (new Array(14));(statearr_9683[0] = state_machine__5035__auto__);
(statearr_9683[1] = 1);
return statearr_9683;
});
var state_machine__5035__auto____1 = (function (state_9643){while(true){
var result__5036__auto__ = switch__5034__auto__.call(null,state_9643);if(cljs.core.keyword_identical_QMARK_.call(null,result__5036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5036__auto__;
}
break;
}
});
state_machine__5035__auto__ = function(state_9643){
switch(arguments.length){
case 0:
return state_machine__5035__auto____0.call(this);
case 1:
return state_machine__5035__auto____1.call(this,state_9643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5035__auto____0;
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5035__auto____1;
return state_machine__5035__auto__;
})()
;})(switch__5034__auto__))
})();var state__5086__auto__ = (function (){var statearr_9684 = f__5085__auto__.call(null);(statearr_9684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5084__auto___9833);
return statearr_9684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5086__auto__);
}));
var c__5084__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5085__auto__ = (function (){var switch__5034__auto__ = (function (state_9773){var state_val_9774 = (state_9773[1]);if((state_val_9774 === 1))
{var state_9773__$1 = state_9773;var statearr_9775_9864 = state_9773__$1;(statearr_9775_9864[2] = null);
(statearr_9775_9864[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 2))
{var state_9773__$1 = state_9773;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9773__$1,4,animation);
} else
{if((state_val_9774 === 3))
{var inst_9771 = (state_9773[2]);var state_9773__$1 = state_9773;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9773__$1,inst_9771);
} else
{if((state_val_9774 === 4))
{var inst_9687 = (state_9773[5]);var inst_9687__$1 = (state_9773[2]);var state_9773__$1 = (function (){var statearr_9776 = state_9773;(statearr_9776[5] = inst_9687__$1);
return statearr_9776;
})();if(cljs.core.truth_(inst_9687__$1))
{var statearr_9777_9865 = state_9773__$1;(statearr_9777_9865[1] = 5);
} else
{var statearr_9778_9866 = state_9773__$1;(statearr_9778_9866[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 5))
{var inst_9687 = (state_9773[5]);var inst_9693 = (state_9773[6]);var inst_9692 = cljs.core.rest.call(null,inst_9687);var inst_9693__$1 = cljs.core.first.call(null,inst_9687);var inst_9694 = cljs.core.seq_QMARK_.call(null,inst_9693__$1);var state_9773__$1 = (function (){var statearr_9779 = state_9773;(statearr_9779[7] = inst_9692);
(statearr_9779[6] = inst_9693__$1);
return statearr_9779;
})();if(inst_9694)
{var statearr_9780_9867 = state_9773__$1;(statearr_9780_9867[1] = 8);
} else
{var statearr_9781_9868 = state_9773__$1;(statearr_9781_9868[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 6))
{var state_9773__$1 = state_9773;var statearr_9782_9869 = state_9773__$1;(statearr_9782_9869[2] = null);
(statearr_9782_9869[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 7))
{var inst_9769 = (state_9773[2]);var state_9773__$1 = state_9773;var statearr_9783_9870 = state_9773__$1;(statearr_9783_9870[2] = inst_9769);
(statearr_9783_9870[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 8))
{var inst_9693 = (state_9773[6]);var inst_9696 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9693);var state_9773__$1 = state_9773;var statearr_9784_9871 = state_9773__$1;(statearr_9784_9871[2] = inst_9696);
(statearr_9784_9871[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 9))
{var inst_9693 = (state_9773[6]);var state_9773__$1 = state_9773;var statearr_9785_9872 = state_9773__$1;(statearr_9785_9872[2] = inst_9693);
(statearr_9785_9872[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 10))
{var inst_9692 = (state_9773[7]);var inst_9693 = (state_9773[6]);var inst_9699 = (state_9773[2]);var inst_9700 = cljs.core.get.call(null,inst_9699,new cljs.core.Keyword(null,"arg","arg",1014001096));var inst_9701 = cljs.core.get.call(null,inst_9699,new cljs.core.Keyword(null,"op","op",1013907795));var inst_9702 = cljs.core.get.call(null,inst_9699,new cljs.core.Keyword(null,"tank-id","tank-id",3766965328));var inst_9703 = inst_9692;var inst_9704 = inst_9693;var state_9773__$1 = (function (){var statearr_9786 = state_9773;(statearr_9786[8] = inst_9700);
(statearr_9786[9] = inst_9704);
(statearr_9786[10] = inst_9703);
(statearr_9786[11] = inst_9702);
(statearr_9786[12] = inst_9701);
return statearr_9786;
})();var statearr_9787_9873 = state_9773__$1;(statearr_9787_9873[2] = null);
(statearr_9787_9873[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 11))
{var inst_9704 = (state_9773[9]);var inst_9707 = cljs.core.seq_QMARK_.call(null,inst_9704);var state_9773__$1 = state_9773;if(inst_9707)
{var statearr_9788_9874 = state_9773__$1;(statearr_9788_9874[1] = 13);
} else
{var statearr_9789_9875 = state_9773__$1;(statearr_9789_9875[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 12))
{var inst_9765 = (state_9773[2]);var state_9773__$1 = (function (){var statearr_9790 = state_9773;(statearr_9790[13] = inst_9765);
return statearr_9790;
})();var statearr_9791_9876 = state_9773__$1;(statearr_9791_9876[2] = null);
(statearr_9791_9876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 13))
{var inst_9704 = (state_9773[9]);var inst_9709 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9704);var state_9773__$1 = state_9773;var statearr_9792_9877 = state_9773__$1;(statearr_9792_9877[2] = inst_9709);
(statearr_9792_9877[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 14))
{var inst_9704 = (state_9773[9]);var state_9773__$1 = state_9773;var statearr_9793_9878 = state_9773__$1;(statearr_9793_9878[2] = inst_9704);
(statearr_9793_9878[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 15))
{var inst_9712 = (state_9773[14]);var inst_9716 = (state_9773[15]);var inst_9712__$1 = (state_9773[2]);var inst_9713 = cljs.core.get.call(null,inst_9712__$1,new cljs.core.Keyword(null,"arg","arg",1014001096));var inst_9714 = cljs.core.get.call(null,inst_9712__$1,new cljs.core.Keyword(null,"op","op",1013907795));var inst_9715 = cljs.core.get.call(null,inst_9712__$1,new cljs.core.Keyword(null,"tank-id","tank-id",3766965328));var inst_9716__$1 = rvb.client.get_tank_by_id.call(null,inst_9715);var state_9773__$1 = (function (){var statearr_9794 = state_9773;(statearr_9794[16] = inst_9714);
(statearr_9794[17] = inst_9713);
(statearr_9794[14] = inst_9712__$1);
(statearr_9794[15] = inst_9716__$1);
return statearr_9794;
})();if(cljs.core.truth_(inst_9716__$1))
{var statearr_9795_9879 = state_9773__$1;(statearr_9795_9879[1] = 16);
} else
{var statearr_9796_9880 = state_9773__$1;(statearr_9796_9880[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 16))
{var inst_9714 = (state_9773[16]);var inst_9720 = (state_9773[18]);var inst_9716 = (state_9773[15]);var inst_9718 = (state_9773[19]);var inst_9718__$1 = rvb.client.process_animation_command.call(null,inst_9714,inst_9716);var inst_9719 = rvb.client.tanks_but_me.call(null,inst_9718__$1);var inst_9720__$1 = rvb.client.get_collisions.call(null,inst_9718__$1,inst_9719);var inst_9721 = cljs.core.seq.call(null,inst_9720__$1);var state_9773__$1 = (function (){var statearr_9797 = state_9773;(statearr_9797[18] = inst_9720__$1);
(statearr_9797[19] = inst_9718__$1);
return statearr_9797;
})();if(inst_9721)
{var statearr_9798_9881 = state_9773__$1;(statearr_9798_9881[1] = 19);
} else
{var statearr_9799_9882 = state_9773__$1;(statearr_9799_9882[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 17))
{var state_9773__$1 = state_9773;var statearr_9800_9883 = state_9773__$1;(statearr_9800_9883[2] = null);
(statearr_9800_9883[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 18))
{var inst_9763 = (state_9773[2]);var state_9773__$1 = state_9773;var statearr_9801_9884 = state_9773__$1;(statearr_9801_9884[2] = inst_9763);
(statearr_9801_9884[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 19))
{var inst_9723 = cljs.core.async.timeout.call(null,500);var state_9773__$1 = state_9773;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9773__$1,22,inst_9723);
} else
{if((state_val_9774 === 20))
{var inst_9714 = (state_9773[16]);var inst_9712 = (state_9773[14]);var inst_9716 = (state_9773[15]);var inst_9718 = (state_9773[19]);var inst_9730 = rvb.client.animate_tank.call(null,inst_9716,inst_9718,inst_9712);var inst_9731 = cljs.core.get.call(null,rvb.client.speed,inst_9714);var inst_9732 = (1000 / inst_9731);var inst_9733 = cljs.core.async.timeout.call(null,inst_9732);var state_9773__$1 = (function (){var statearr_9802 = state_9773;(statearr_9802[20] = inst_9730);
return statearr_9802;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9773__$1,24,inst_9733);
} else
{if((state_val_9774 === 21))
{var inst_9760 = (state_9773[2]);var state_9773__$1 = state_9773;var statearr_9803_9885 = state_9773__$1;(statearr_9803_9885[2] = inst_9760);
(statearr_9803_9885[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 22))
{var inst_9720 = (state_9773[18]);var inst_9725 = (state_9773[2]);var inst_9726 = cljs.core.hash_map.call(null,new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Keyword(null,"collision","collision",2901555876),new cljs.core.Keyword(null,"info","info",1017141280),inst_9720);var state_9773__$1 = (function (){var statearr_9804 = state_9773;(statearr_9804[21] = inst_9725);
return statearr_9804;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9773__$1,23,control,inst_9726);
} else
{if((state_val_9774 === 23))
{var inst_9728 = (state_9773[2]);var state_9773__$1 = state_9773;var statearr_9806_9886 = state_9773__$1;(statearr_9806_9886[2] = inst_9728);
(statearr_9806_9886[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 24))
{var inst_9713 = (state_9773[17]);var inst_9735 = (state_9773[2]);var inst_9736 = (inst_9713 > 1);var state_9773__$1 = (function (){var statearr_9807 = state_9773;(statearr_9807[22] = inst_9735);
return statearr_9807;
})();if(cljs.core.truth_(inst_9736))
{var statearr_9808_9887 = state_9773__$1;(statearr_9808_9887[1] = 25);
} else
{var statearr_9809_9888 = state_9773__$1;(statearr_9809_9888[1] = 26);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 25))
{var inst_9714 = (state_9773[16]);var inst_9713 = (state_9773[17]);var inst_9703 = (state_9773[10]);var inst_9718 = (state_9773[19]);var inst_9738 = new cljs.core.Keyword(null,"id","id",1013907597).call(null,inst_9718);var inst_9739 = (inst_9713 - 1);var inst_9740 = cljs.core.hash_map.call(null,new cljs.core.Keyword(null,"tank-id","tank-id",3766965328),inst_9738,new cljs.core.Keyword(null,"op","op",1013907795),inst_9714,new cljs.core.Keyword(null,"arg","arg",1014001096),inst_9739);var tmp9805 = inst_9703;var inst_9703__$1 = tmp9805;var inst_9704 = inst_9740;var state_9773__$1 = (function (){var statearr_9810 = state_9773;(statearr_9810[9] = inst_9704);
(statearr_9810[10] = inst_9703__$1);
return statearr_9810;
})();var statearr_9811_9889 = state_9773__$1;(statearr_9811_9889[2] = null);
(statearr_9811_9889[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 26))
{var inst_9703 = (state_9773[10]);var inst_9743 = cljs.core.seq.call(null,inst_9703);var state_9773__$1 = state_9773;if(inst_9743)
{var statearr_9812_9890 = state_9773__$1;(statearr_9812_9890[1] = 28);
} else
{var statearr_9813_9891 = state_9773__$1;(statearr_9813_9891[1] = 29);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 27))
{var inst_9758 = (state_9773[2]);var state_9773__$1 = state_9773;var statearr_9814_9892 = state_9773__$1;(statearr_9814_9892[2] = inst_9758);
(statearr_9814_9892[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 28))
{var inst_9703 = (state_9773[10]);var inst_9718 = (state_9773[19]);var inst_9745 = cljs.core.rest.call(null,inst_9703);var inst_9746 = cljs.core.first.call(null,inst_9703);var inst_9747 = new cljs.core.Keyword(null,"id","id",1013907597).call(null,inst_9718);var inst_9748 = cljs.core.hash_map.call(null,new cljs.core.Keyword(null,"tank-id","tank-id",3766965328),inst_9747);var inst_9749 = cljs.core.merge.call(null,inst_9746,inst_9748);var inst_9703__$1 = inst_9745;var inst_9704 = inst_9749;var state_9773__$1 = (function (){var statearr_9815 = state_9773;(statearr_9815[9] = inst_9704);
(statearr_9815[10] = inst_9703__$1);
return statearr_9815;
})();var statearr_9816_9893 = state_9773__$1;(statearr_9816_9893[2] = null);
(statearr_9816_9893[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 29))
{var inst_9752 = cljs.core.hash_map.call(null);var state_9773__$1 = state_9773;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9773__$1,31,control,inst_9752);
} else
{if((state_val_9774 === 30))
{var inst_9756 = (state_9773[2]);var state_9773__$1 = state_9773;var statearr_9817_9894 = state_9773__$1;(statearr_9817_9894[2] = inst_9756);
(statearr_9817_9894[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9774 === 31))
{var inst_9754 = (state_9773[2]);var state_9773__$1 = state_9773;var statearr_9818_9895 = state_9773__$1;(statearr_9818_9895[2] = inst_9754);
(statearr_9818_9895[1] = 30);
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
});return ((function (switch__5034__auto__){
return (function() {
var state_machine__5035__auto__ = null;
var state_machine__5035__auto____0 = (function (){var statearr_9820 = (new Array(23));(statearr_9820[0] = state_machine__5035__auto__);
(statearr_9820[1] = 1);
return statearr_9820;
});
var state_machine__5035__auto____1 = (function (state_9773){while(true){
var result__5036__auto__ = switch__5034__auto__.call(null,state_9773);if(cljs.core.keyword_identical_QMARK_.call(null,result__5036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5036__auto__;
}
break;
}
});
state_machine__5035__auto__ = function(state_9773){
switch(arguments.length){
case 0:
return state_machine__5035__auto____0.call(this);
case 1:
return state_machine__5035__auto____1.call(this,state_9773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5035__auto____0;
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5035__auto____1;
return state_machine__5035__auto__;
})()
;})(switch__5034__auto__))
})();var state__5086__auto__ = (function (){var statearr_9821 = f__5085__auto__.call(null);(statearr_9821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5084__auto__);
return statearr_9821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5086__auto__);
}));
return c__5084__auto__;
});
var seq__9896_9900 = cljs.core.seq.call(null,cljs.core.repeat.call(null,25,new cljs.core.Keyword(null,"red","red",1014017027)));var chunk__9897_9901 = null;var count__9898_9902 = 0;var i__9899_9903 = 0;while(true){
if((i__9899_9903 < count__9898_9902))
{var team_9904 = cljs.core._nth.call(null,chunk__9897_9901,i__9899_9903);rvb.client.add_tank.call(null,team_9904);
{
var G__9905 = seq__9896_9900;
var G__9906 = chunk__9897_9901;
var G__9907 = count__9898_9902;
var G__9908 = (i__9899_9903 + 1);
seq__9896_9900 = G__9905;
chunk__9897_9901 = G__9906;
count__9898_9902 = G__9907;
i__9899_9903 = G__9908;
continue;
}
} else
{var temp__4092__auto___9909 = cljs.core.seq.call(null,seq__9896_9900);if(temp__4092__auto___9909)
{var seq__9896_9910__$1 = temp__4092__auto___9909;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9896_9910__$1))
{var c__3559__auto___9911 = cljs.core.chunk_first.call(null,seq__9896_9910__$1);{
var G__9912 = cljs.core.chunk_rest.call(null,seq__9896_9910__$1);
var G__9913 = c__3559__auto___9911;
var G__9914 = cljs.core.count.call(null,c__3559__auto___9911);
var G__9915 = 0;
seq__9896_9900 = G__9912;
chunk__9897_9901 = G__9913;
count__9898_9902 = G__9914;
i__9899_9903 = G__9915;
continue;
}
} else
{var team_9916 = cljs.core.first.call(null,seq__9896_9910__$1);rvb.client.add_tank.call(null,team_9916);
{
var G__9917 = cljs.core.next.call(null,seq__9896_9910__$1);
var G__9918 = null;
var G__9919 = 0;
var G__9920 = 0;
seq__9896_9900 = G__9917;
chunk__9897_9901 = G__9918;
count__9898_9902 = G__9919;
i__9899_9903 = G__9920;
continue;
}
}
} else
{}
}
break;
}
var seq__9921_9925 = cljs.core.seq.call(null,cljs.core.repeat.call(null,25,new cljs.core.Keyword(null,"blue","blue",1016931276)));var chunk__9922_9926 = null;var count__9923_9927 = 0;var i__9924_9928 = 0;while(true){
if((i__9924_9928 < count__9923_9927))
{var team_9929 = cljs.core._nth.call(null,chunk__9922_9926,i__9924_9928);rvb.client.add_tank.call(null,team_9929);
{
var G__9930 = seq__9921_9925;
var G__9931 = chunk__9922_9926;
var G__9932 = count__9923_9927;
var G__9933 = (i__9924_9928 + 1);
seq__9921_9925 = G__9930;
chunk__9922_9926 = G__9931;
count__9923_9927 = G__9932;
i__9924_9928 = G__9933;
continue;
}
} else
{var temp__4092__auto___9934 = cljs.core.seq.call(null,seq__9921_9925);if(temp__4092__auto___9934)
{var seq__9921_9935__$1 = temp__4092__auto___9934;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9921_9935__$1))
{var c__3559__auto___9936 = cljs.core.chunk_first.call(null,seq__9921_9935__$1);{
var G__9937 = cljs.core.chunk_rest.call(null,seq__9921_9935__$1);
var G__9938 = c__3559__auto___9936;
var G__9939 = cljs.core.count.call(null,c__3559__auto___9936);
var G__9940 = 0;
seq__9921_9925 = G__9937;
chunk__9922_9926 = G__9938;
count__9923_9927 = G__9939;
i__9924_9928 = G__9940;
continue;
}
} else
{var team_9941 = cljs.core.first.call(null,seq__9921_9935__$1);rvb.client.add_tank.call(null,team_9941);
{
var G__9942 = cljs.core.next.call(null,seq__9921_9935__$1);
var G__9943 = null;
var G__9944 = 0;
var G__9945 = 0;
seq__9921_9925 = G__9942;
chunk__9922_9926 = G__9943;
count__9923_9927 = G__9944;
i__9924_9928 = G__9945;
continue;
}
}
} else
{}
}
break;
}
var c__5084__auto___10021 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5085__auto__ = (function (){var switch__5034__auto__ = (function (state_9994){var state_val_9995 = (state_9994[1]);if((state_val_9995 === 1))
{var inst_9950 = cljs.core.deref.call(null,rvb.client._STAR_tanks_STAR_);var inst_9951 = cljs.core.seq.call(null,inst_9950);var inst_9952 = inst_9951;var inst_9953 = null;var inst_9954 = 0;var inst_9955 = 0;var state_9994__$1 = (function (){var statearr_9996 = state_9994;(statearr_9996[5] = inst_9955);
(statearr_9996[6] = inst_9954);
(statearr_9996[7] = inst_9952);
(statearr_9996[8] = inst_9953);
return statearr_9996;
})();var statearr_9997_10022 = state_9994__$1;(statearr_9997_10022[2] = null);
(statearr_9997_10022[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9995 === 2))
{var inst_9955 = (state_9994[5]);var inst_9954 = (state_9994[6]);var inst_9957 = (inst_9955 < inst_9954);var inst_9958 = inst_9957;var state_9994__$1 = state_9994;if(cljs.core.truth_(inst_9958))
{var statearr_9998_10023 = state_9994__$1;(statearr_9998_10023[1] = 4);
} else
{var statearr_9999_10024 = state_9994__$1;(statearr_9999_10024[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9995 === 3))
{var inst_9992 = (state_9994[2]);var state_9994__$1 = state_9994;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9994__$1,inst_9992);
} else
{if((state_val_9995 === 4))
{var inst_9955 = (state_9994[5]);var inst_9953 = (state_9994[8]);var inst_9960 = cljs.core._nth.call(null,inst_9953,inst_9955);var inst_9961 = new cljs.core.Keyword(null,"events","events",4017542283).call(null,inst_9960);var inst_9962 = cljs.core.hash_map.call(null,new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"tank","tank",1017456732),inst_9960);var state_9994__$1 = state_9994;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9994__$1,7,inst_9961,inst_9962);
} else
{if((state_val_9995 === 5))
{var inst_9952 = (state_9994[7]);var inst_9968 = (state_9994[9]);var inst_9968__$1 = cljs.core.seq.call(null,inst_9952);var state_9994__$1 = (function (){var statearr_10003 = state_9994;(statearr_10003[9] = inst_9968__$1);
return statearr_10003;
})();if(inst_9968__$1)
{var statearr_10004_10025 = state_9994__$1;(statearr_10004_10025[1] = 8);
} else
{var statearr_10005_10026 = state_9994__$1;(statearr_10005_10026[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9995 === 6))
{var inst_9990 = (state_9994[2]);var state_9994__$1 = state_9994;var statearr_10006_10027 = state_9994__$1;(statearr_10006_10027[2] = inst_9990);
(statearr_10006_10027[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9995 === 7))
{var inst_9955 = (state_9994[5]);var inst_9954 = (state_9994[6]);var inst_9952 = (state_9994[7]);var inst_9953 = (state_9994[8]);var inst_9964 = (state_9994[2]);var inst_9965 = (inst_9955 + 1);var tmp10000 = inst_9954;var tmp10001 = inst_9952;var tmp10002 = inst_9953;var inst_9952__$1 = tmp10001;var inst_9953__$1 = tmp10002;var inst_9954__$1 = tmp10000;var inst_9955__$1 = inst_9965;var state_9994__$1 = (function (){var statearr_10007 = state_9994;(statearr_10007[5] = inst_9955__$1);
(statearr_10007[6] = inst_9954__$1);
(statearr_10007[7] = inst_9952__$1);
(statearr_10007[8] = inst_9953__$1);
(statearr_10007[10] = inst_9964);
return statearr_10007;
})();var statearr_10008_10028 = state_9994__$1;(statearr_10008_10028[2] = null);
(statearr_10008_10028[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9995 === 8))
{var inst_9968 = (state_9994[9]);var inst_9970 = cljs.core.chunked_seq_QMARK_.call(null,inst_9968);var state_9994__$1 = state_9994;if(inst_9970)
{var statearr_10009_10029 = state_9994__$1;(statearr_10009_10029[1] = 11);
} else
{var statearr_10010_10030 = state_9994__$1;(statearr_10010_10030[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9995 === 9))
{var state_9994__$1 = state_9994;var statearr_10011_10031 = state_9994__$1;(statearr_10011_10031[2] = null);
(statearr_10011_10031[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9995 === 10))
{var inst_9988 = (state_9994[2]);var state_9994__$1 = state_9994;var statearr_10012_10032 = state_9994__$1;(statearr_10012_10032[2] = inst_9988);
(statearr_10012_10032[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9995 === 11))
{var inst_9968 = (state_9994[9]);var inst_9972 = cljs.core.chunk_first.call(null,inst_9968);var inst_9973 = cljs.core.chunk_rest.call(null,inst_9968);var inst_9974 = cljs.core.count.call(null,inst_9972);var inst_9952 = inst_9973;var inst_9953 = inst_9972;var inst_9954 = inst_9974;var inst_9955 = 0;var state_9994__$1 = (function (){var statearr_10013 = state_9994;(statearr_10013[5] = inst_9955);
(statearr_10013[6] = inst_9954);
(statearr_10013[7] = inst_9952);
(statearr_10013[8] = inst_9953);
return statearr_10013;
})();var statearr_10014_10033 = state_9994__$1;(statearr_10014_10033[2] = null);
(statearr_10014_10033[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9995 === 12))
{var inst_9968 = (state_9994[9]);var inst_9977 = cljs.core.first.call(null,inst_9968);var inst_9978 = new cljs.core.Keyword(null,"events","events",4017542283).call(null,inst_9977);var inst_9979 = cljs.core.hash_map.call(null,new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"tank","tank",1017456732),inst_9977);var state_9994__$1 = state_9994;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9994__$1,14,inst_9978,inst_9979);
} else
{if((state_val_9995 === 13))
{var inst_9985 = (state_9994[2]);var state_9994__$1 = state_9994;var statearr_10015_10034 = state_9994__$1;(statearr_10015_10034[2] = inst_9985);
(statearr_10015_10034[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9995 === 14))
{var inst_9968 = (state_9994[9]);var inst_9981 = (state_9994[2]);var inst_9982 = cljs.core.next.call(null,inst_9968);var inst_9952 = inst_9982;var inst_9953 = null;var inst_9954 = 0;var inst_9955 = 0;var state_9994__$1 = (function (){var statearr_10016 = state_9994;(statearr_10016[5] = inst_9955);
(statearr_10016[6] = inst_9954);
(statearr_10016[11] = inst_9981);
(statearr_10016[7] = inst_9952);
(statearr_10016[8] = inst_9953);
return statearr_10016;
})();var statearr_10017_10035 = state_9994__$1;(statearr_10017_10035[2] = null);
(statearr_10017_10035[1] = 2);
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
});return ((function (switch__5034__auto__){
return (function() {
var state_machine__5035__auto__ = null;
var state_machine__5035__auto____0 = (function (){var statearr_10019 = (new Array(12));(statearr_10019[0] = state_machine__5035__auto__);
(statearr_10019[1] = 1);
return statearr_10019;
});
var state_machine__5035__auto____1 = (function (state_9994){while(true){
var result__5036__auto__ = switch__5034__auto__.call(null,state_9994);if(cljs.core.keyword_identical_QMARK_.call(null,result__5036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5036__auto__;
}
break;
}
});
state_machine__5035__auto__ = function(state_9994){
switch(arguments.length){
case 0:
return state_machine__5035__auto____0.call(this);
case 1:
return state_machine__5035__auto____1.call(this,state_9994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5035__auto____0;
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5035__auto____1;
return state_machine__5035__auto__;
})()
;})(switch__5034__auto__))
})();var state__5086__auto__ = (function (){var statearr_10020 = f__5085__auto__.call(null);(statearr_10020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5084__auto___10021);
return statearr_10020;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5086__auto__);
}));
