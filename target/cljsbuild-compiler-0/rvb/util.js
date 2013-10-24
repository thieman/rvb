goog.provide('rvb.util');
goog.require('cljs.core');
rvb.util.deg__GT_rad = (function deg__GT_rad(deg){return (deg * (Math.PI / 180));
});
rvb.util.rad__GT_deg = (function rad__GT_deg(rad){return cljs.core.mod.call(null,(rad * (180 / Math.PI)),360);
});
rvb.util.abs_angle_diff = (function abs_angle_diff(a1,a2){var x__3157__auto__ = (360 - Math.abs((a1 - a2)));var y__3158__auto__ = Math.abs((a1 - a2));return ((x__3157__auto__ < y__3158__auto__) ? x__3157__auto__ : y__3158__auto__);
});
rvb.util.angle_direction = (function angle_direction(a1,a2){if((rvb.util.abs_angle_diff.call(null,a1,a2) > rvb.util.abs_angle_diff.call(null,(a1 + 1),a2)))
{return new cljs.core.Keyword(null,"right","right",1122416014);
} else
{return new cljs.core.Keyword(null,"left","left",1017222009);
}
});
rvb.util.tanks_but_me_STAR_ = (function tanks_but_me_STAR_(tanks_atom,me){return cljs.core.remove.call(null,(function (p1__24046_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).call(null,me),new cljs.core.Keyword(null,"id","id",1013907597).call(null,p1__24046_SHARP_));
}),cljs.core.deref.call(null,tanks_atom));
});
rvb.util.replace_tank = (function replace_tank(curr_val,p__24048){var map__24050 = p__24048;var map__24050__$1 = ((cljs.core.seq_QMARK_.call(null,map__24050))?cljs.core.apply.call(null,cljs.core.hash_map,map__24050):map__24050);var this_tank = map__24050__$1;var id = cljs.core.get.call(null,map__24050__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.conj.call(null,cljs.core.remove.call(null,(function (p1__24047_SHARP_){return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",1013907597).call(null,p1__24047_SHARP_));
}),curr_val),this_tank);
});
rvb.util.update_tank = (function update_tank(curr_val,tank_id,m){var curr_tank = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__24051_SHARP_){return cljs.core._EQ_.call(null,tank_id,new cljs.core.Keyword(null,"id","id",1013907597).call(null,p1__24051_SHARP_));
}),curr_val));if(cljs.core.truth_(curr_tank))
{return rvb.util.replace_tank.call(null,curr_val,cljs.core.merge.call(null,curr_tank,m));
} else
{return curr_val;
}
});
rvb.util.remove_tank = (function remove_tank(curr_val,p__24053){var map__24055 = p__24053;var map__24055__$1 = ((cljs.core.seq_QMARK_.call(null,map__24055))?cljs.core.apply.call(null,cljs.core.hash_map,map__24055):map__24055);var this_tank = map__24055__$1;var id = cljs.core.get.call(null,map__24055__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.remove.call(null,(function (p1__24052_SHARP_){return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",1013907597).call(null,p1__24052_SHARP_));
}),curr_val);
});
rvb.util.get_tank_by_id_STAR_ = (function get_tank_by_id_STAR_(tanks_atom,tank_id){return cljs.core.some.call(null,(function (p1__24056_SHARP_){if(cljs.core._EQ_.call(null,tank_id,new cljs.core.Keyword(null,"id","id",1013907597).call(null,p1__24056_SHARP_)))
{return p1__24056_SHARP_;
} else
{return null;
}
}),cljs.core.deref.call(null,tanks_atom));
});
