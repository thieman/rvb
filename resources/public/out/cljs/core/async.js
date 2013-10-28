goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13453 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13453');

/**
* @constructor
*/
cljs.core.async.t13453 = (function (f,fn_handler,meta13454){
this.f = f;
this.fn_handler = fn_handler;
this.meta13454 = meta13454;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13453.cljs$lang$type = true;
cljs.core.async.t13453.cljs$lang$ctorStr = "cljs.core.async/t13453";
cljs.core.async.t13453.cljs$lang$ctorPrWriter = (function (this__3491__auto__,writer__3492__auto__,opt__3493__auto__){return cljs.core._write.call(null,writer__3492__auto__,"cljs.core.async/t13453");
});
cljs.core.async.t13453.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13453.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13453.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13455){var self__ = this;
var _13455__$1 = this;return self__.meta13454;
});
cljs.core.async.t13453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13455,meta13454__$1){var self__ = this;
var _13455__$1 = this;return (new cljs.core.async.t13453(self__.f,self__.fn_handler,meta13454__$1));
});
cljs.core.async.__GT_t13453 = (function __GT_t13453(f__$1,fn_handler__$1,meta13454){return (new cljs.core.async.t13453(f__$1,fn_handler__$1,meta13454));
});
}
return (new cljs.core.async.t13453(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_13456 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13456);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13456);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__2946__auto__ = ret;if(cljs.core.truth_(and__2946__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__2946__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__3711__auto___13457 = n;var x_13458 = 0;while(true){
if((x_13458 < n__3711__auto___13457))
{(a[x_13458] = 0);
{
var G__13459 = (x_13458 + 1);
x_13458 = G__13459;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__13460 = (i + 1);
i = G__13460;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13464 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13464');

/**
* @constructor
*/
cljs.core.async.t13464 = (function (flag,alt_flag,meta13465){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13465 = meta13465;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13464.cljs$lang$type = true;
cljs.core.async.t13464.cljs$lang$ctorStr = "cljs.core.async/t13464";
cljs.core.async.t13464.cljs$lang$ctorPrWriter = (function (this__3491__auto__,writer__3492__auto__,opt__3493__auto__){return cljs.core._write.call(null,writer__3492__auto__,"cljs.core.async/t13464");
});
cljs.core.async.t13464.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13464.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13464.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13466){var self__ = this;
var _13466__$1 = this;return self__.meta13465;
});
cljs.core.async.t13464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13466,meta13465__$1){var self__ = this;
var _13466__$1 = this;return (new cljs.core.async.t13464(self__.flag,self__.alt_flag,meta13465__$1));
});
cljs.core.async.__GT_t13464 = (function __GT_t13464(flag__$1,alt_flag__$1,meta13465){return (new cljs.core.async.t13464(flag__$1,alt_flag__$1,meta13465));
});
}
return (new cljs.core.async.t13464(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13470 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13470');

/**
* @constructor
*/
cljs.core.async.t13470 = (function (cb,flag,alt_handler,meta13471){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13471 = meta13471;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13470.cljs$lang$type = true;
cljs.core.async.t13470.cljs$lang$ctorStr = "cljs.core.async/t13470";
cljs.core.async.t13470.cljs$lang$ctorPrWriter = (function (this__3491__auto__,writer__3492__auto__,opt__3493__auto__){return cljs.core._write.call(null,writer__3492__auto__,"cljs.core.async/t13470");
});
cljs.core.async.t13470.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13470.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13470.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13472){var self__ = this;
var _13472__$1 = this;return self__.meta13471;
});
cljs.core.async.t13470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13472,meta13471__$1){var self__ = this;
var _13472__$1 = this;return (new cljs.core.async.t13470(self__.cb,self__.flag,self__.alt_handler,meta13471__$1));
});
cljs.core.async.__GT_t13470 = (function __GT_t13470(cb__$1,flag__$1,alt_handler__$1,meta13471){return (new cljs.core.async.t13470(cb__$1,flag__$1,alt_handler__$1,meta13471));
});
}
return (new cljs.core.async.t13470(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,cljs.core.PersistentVector.fromArray([null,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13473_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__13473_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__2955__auto__ = wport;if(cljs.core.truth_(or__2955__auto__))
{return or__2955__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__13474 = (i + 1);
i = G__13474;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__2955__auto__ = ret;if(cljs.core.truth_(or__2955__auto__))
{return or__2955__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__2946__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__2946__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__2946__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], true));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__13475){var map__13477 = p__13475;var map__13477__$1 = ((cljs.core.seq_QMARK_.call(null,map__13477))?cljs.core.apply.call(null,cljs.core.hash_map,map__13477):map__13477);var opts = map__13477__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13475 = null;if (arguments.length > 1) {
  p__13475 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13475);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13478){
var ports = cljs.core.first(arglist__13478);
var p__13475 = cljs.core.rest(arglist__13478);
return alts_BANG___delegate(ports,p__13475);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13486 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13486');

/**
* @constructor
*/
cljs.core.async.t13486 = (function (ch,f,map_LT_,meta13487){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13487 = meta13487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13486.cljs$lang$type = true;
cljs.core.async.t13486.cljs$lang$ctorStr = "cljs.core.async/t13486";
cljs.core.async.t13486.cljs$lang$ctorPrWriter = (function (this__3491__auto__,writer__3492__auto__,opt__3493__auto__){return cljs.core._write.call(null,writer__3492__auto__,"cljs.core.async/t13486");
});
cljs.core.async.t13486.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13486.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13486.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13486.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13489 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13489');

/**
* @constructor
*/
cljs.core.async.t13489 = (function (fn1,_,meta13487,ch,f,map_LT_,meta13490){
this.fn1 = fn1;
this._ = _;
this.meta13487 = meta13487;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13490 = meta13490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13489.cljs$lang$type = true;
cljs.core.async.t13489.cljs$lang$ctorStr = "cljs.core.async/t13489";
cljs.core.async.t13489.cljs$lang$ctorPrWriter = (function (this__3491__auto__,writer__3492__auto__,opt__3493__auto__){return cljs.core._write.call(null,writer__3492__auto__,"cljs.core.async/t13489");
});
cljs.core.async.t13489.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13489.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13489.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13489.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13479_SHARP_){return f1.call(null,(((p1__13479_SHARP_ == null))?null:self__.f.call(null,p1__13479_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13491){var self__ = this;
var _13491__$1 = this;return self__.meta13490;
});
cljs.core.async.t13489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13491,meta13490__$1){var self__ = this;
var _13491__$1 = this;return (new cljs.core.async.t13489(self__.fn1,self__._,self__.meta13487,self__.ch,self__.f,self__.map_LT_,meta13490__$1));
});
cljs.core.async.__GT_t13489 = (function __GT_t13489(fn1__$1,___$2,meta13487__$1,ch__$2,f__$2,map_LT___$2,meta13490){return (new cljs.core.async.t13489(fn1__$1,___$2,meta13487__$1,ch__$2,f__$2,map_LT___$2,meta13490));
});
}
return (new cljs.core.async.t13489(fn1,___$1,self__.meta13487,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__2946__auto__ = ret;if(cljs.core.truth_(and__2946__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__2946__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13486.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13486.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13488){var self__ = this;
var _13488__$1 = this;return self__.meta13487;
});
cljs.core.async.t13486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13488,meta13487__$1){var self__ = this;
var _13488__$1 = this;return (new cljs.core.async.t13486(self__.ch,self__.f,self__.map_LT_,meta13487__$1));
});
cljs.core.async.__GT_t13486 = (function __GT_t13486(ch__$1,f__$1,map_LT___$1,meta13487){return (new cljs.core.async.t13486(ch__$1,f__$1,map_LT___$1,meta13487));
});
}
return (new cljs.core.async.t13486(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13495 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13495');

/**
* @constructor
*/
cljs.core.async.t13495 = (function (ch,f,map_GT_,meta13496){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13496 = meta13496;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13495.cljs$lang$type = true;
cljs.core.async.t13495.cljs$lang$ctorStr = "cljs.core.async/t13495";
cljs.core.async.t13495.cljs$lang$ctorPrWriter = (function (this__3491__auto__,writer__3492__auto__,opt__3493__auto__){return cljs.core._write.call(null,writer__3492__auto__,"cljs.core.async/t13495");
});
cljs.core.async.t13495.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13495.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13495.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13495.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13495.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13495.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13497){var self__ = this;
var _13497__$1 = this;return self__.meta13496;
});
cljs.core.async.t13495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13497,meta13496__$1){var self__ = this;
var _13497__$1 = this;return (new cljs.core.async.t13495(self__.ch,self__.f,self__.map_GT_,meta13496__$1));
});
cljs.core.async.__GT_t13495 = (function __GT_t13495(ch__$1,f__$1,map_GT___$1,meta13496){return (new cljs.core.async.t13495(ch__$1,f__$1,map_GT___$1,meta13496));
});
}
return (new cljs.core.async.t13495(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13501 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13501');

/**
* @constructor
*/
cljs.core.async.t13501 = (function (ch,p,filter_GT_,meta13502){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13502 = meta13502;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13501.cljs$lang$type = true;
cljs.core.async.t13501.cljs$lang$ctorStr = "cljs.core.async/t13501";
cljs.core.async.t13501.cljs$lang$ctorPrWriter = (function (this__3491__auto__,writer__3492__auto__,opt__3493__auto__){return cljs.core._write.call(null,writer__3492__auto__,"cljs.core.async/t13501");
});
cljs.core.async.t13501.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13501.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13501.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13501.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13501.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13501.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13503){var self__ = this;
var _13503__$1 = this;return self__.meta13502;
});
cljs.core.async.t13501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13503,meta13502__$1){var self__ = this;
var _13503__$1 = this;return (new cljs.core.async.t13501(self__.ch,self__.p,self__.filter_GT_,meta13502__$1));
});
cljs.core.async.__GT_t13501 = (function __GT_t13501(ch__$1,p__$1,filter_GT___$1,meta13502){return (new cljs.core.async.t13501(ch__$1,p__$1,filter_GT___$1,meta13502));
});
}
return (new cljs.core.async.t13501(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5197__auto___13578 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5198__auto__ = (function (){var switch__5147__auto__ = (function (state_13561){var state_val_13562 = (state_13561[1]);if((state_val_13562 === 1))
{var state_13561__$1 = state_13561;var statearr_13563_13579 = state_13561__$1;(statearr_13563_13579[2] = null);
(statearr_13563_13579[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13562 === 2))
{var state_13561__$1 = state_13561;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13561__$1,4,ch);
} else
{if((state_val_13562 === 3))
{var inst_13559 = (state_13561[2]);var state_13561__$1 = state_13561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13561__$1,inst_13559);
} else
{if((state_val_13562 === 4))
{var inst_13543 = (state_13561[5]);var inst_13543__$1 = (state_13561[2]);var inst_13544 = (inst_13543__$1 == null);var state_13561__$1 = (function (){var statearr_13564 = state_13561;(statearr_13564[5] = inst_13543__$1);
return statearr_13564;
})();if(cljs.core.truth_(inst_13544))
{var statearr_13565_13580 = state_13561__$1;(statearr_13565_13580[1] = 5);
} else
{var statearr_13566_13581 = state_13561__$1;(statearr_13566_13581[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13562 === 5))
{var inst_13546 = cljs.core.async.close_BANG_.call(null,out);var state_13561__$1 = state_13561;var statearr_13567_13582 = state_13561__$1;(statearr_13567_13582[2] = inst_13546);
(statearr_13567_13582[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13562 === 6))
{var inst_13543 = (state_13561[5]);var inst_13548 = p.call(null,inst_13543);var state_13561__$1 = state_13561;if(cljs.core.truth_(inst_13548))
{var statearr_13568_13583 = state_13561__$1;(statearr_13568_13583[1] = 8);
} else
{var statearr_13569_13584 = state_13561__$1;(statearr_13569_13584[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13562 === 7))
{var inst_13557 = (state_13561[2]);var state_13561__$1 = state_13561;var statearr_13570_13585 = state_13561__$1;(statearr_13570_13585[2] = inst_13557);
(statearr_13570_13585[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13562 === 8))
{var inst_13543 = (state_13561[5]);var state_13561__$1 = state_13561;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13561__$1,11,out,inst_13543);
} else
{if((state_val_13562 === 9))
{var state_13561__$1 = state_13561;var statearr_13571_13586 = state_13561__$1;(statearr_13571_13586[2] = null);
(statearr_13571_13586[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13562 === 10))
{var inst_13554 = (state_13561[2]);var state_13561__$1 = (function (){var statearr_13572 = state_13561;(statearr_13572[6] = inst_13554);
return statearr_13572;
})();var statearr_13573_13587 = state_13561__$1;(statearr_13573_13587[2] = null);
(statearr_13573_13587[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13562 === 11))
{var inst_13551 = (state_13561[2]);var state_13561__$1 = state_13561;var statearr_13574_13588 = state_13561__$1;(statearr_13574_13588[2] = inst_13551);
(statearr_13574_13588[1] = 10);
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
var state_machine__5148__auto____0 = (function (){var statearr_13576 = (new Array(7));(statearr_13576[0] = state_machine__5148__auto__);
(statearr_13576[1] = 1);
return statearr_13576;
});
var state_machine__5148__auto____1 = (function (state_13561){while(true){
var result__5149__auto__ = switch__5147__auto__.call(null,state_13561);if(cljs.core.keyword_identical_QMARK_.call(null,result__5149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5149__auto__;
}
break;
}
});
state_machine__5148__auto__ = function(state_13561){
switch(arguments.length){
case 0:
return state_machine__5148__auto____0.call(this);
case 1:
return state_machine__5148__auto____1.call(this,state_13561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5148__auto____0;
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5148__auto____1;
return state_machine__5148__auto__;
})()
;})(switch__5147__auto__))
})();var state__5199__auto__ = (function (){var statearr_13577 = f__5198__auto__.call(null);(statearr_13577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5197__auto___13578);
return statearr_13577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5199__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5197__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5198__auto__ = (function (){var switch__5147__auto__ = (function (state_13736){var state_val_13737 = (state_13736[1]);if((state_val_13737 === 1))
{var state_13736__$1 = state_13736;var statearr_13738_13771 = state_13736__$1;(statearr_13738_13771[2] = null);
(statearr_13738_13771[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 2))
{var state_13736__$1 = state_13736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13736__$1,4,in$);
} else
{if((state_val_13737 === 3))
{var inst_13734 = (state_13736[2]);var state_13736__$1 = state_13736;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13736__$1,inst_13734);
} else
{if((state_val_13737 === 4))
{var inst_13682 = (state_13736[5]);var inst_13682__$1 = (state_13736[2]);var inst_13683 = (inst_13682__$1 == null);var state_13736__$1 = (function (){var statearr_13739 = state_13736;(statearr_13739[5] = inst_13682__$1);
return statearr_13739;
})();if(cljs.core.truth_(inst_13683))
{var statearr_13740_13772 = state_13736__$1;(statearr_13740_13772[1] = 5);
} else
{var statearr_13741_13773 = state_13736__$1;(statearr_13741_13773[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 5))
{var inst_13685 = cljs.core.async.close_BANG_.call(null,out);var state_13736__$1 = state_13736;var statearr_13742_13774 = state_13736__$1;(statearr_13742_13774[2] = inst_13685);
(statearr_13742_13774[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 6))
{var inst_13682 = (state_13736[5]);var inst_13687 = f.call(null,inst_13682);var inst_13692 = cljs.core.seq.call(null,inst_13687);var inst_13693 = inst_13692;var inst_13694 = null;var inst_13695 = 0;var inst_13696 = 0;var state_13736__$1 = (function (){var statearr_13743 = state_13736;(statearr_13743[6] = inst_13694);
(statearr_13743[7] = inst_13695);
(statearr_13743[8] = inst_13693);
(statearr_13743[9] = inst_13696);
return statearr_13743;
})();var statearr_13744_13775 = state_13736__$1;(statearr_13744_13775[2] = null);
(statearr_13744_13775[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 7))
{var inst_13732 = (state_13736[2]);var state_13736__$1 = state_13736;var statearr_13745_13776 = state_13736__$1;(statearr_13745_13776[2] = inst_13732);
(statearr_13745_13776[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 8))
{var inst_13695 = (state_13736[7]);var inst_13696 = (state_13736[9]);var inst_13698 = (inst_13696 < inst_13695);var inst_13699 = inst_13698;var state_13736__$1 = state_13736;if(cljs.core.truth_(inst_13699))
{var statearr_13746_13777 = state_13736__$1;(statearr_13746_13777[1] = 10);
} else
{var statearr_13747_13778 = state_13736__$1;(statearr_13747_13778[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 9))
{var inst_13729 = (state_13736[2]);var state_13736__$1 = (function (){var statearr_13748 = state_13736;(statearr_13748[10] = inst_13729);
return statearr_13748;
})();var statearr_13749_13779 = state_13736__$1;(statearr_13749_13779[2] = null);
(statearr_13749_13779[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 10))
{var inst_13694 = (state_13736[6]);var inst_13696 = (state_13736[9]);var inst_13701 = cljs.core._nth.call(null,inst_13694,inst_13696);var state_13736__$1 = state_13736;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13736__$1,13,out,inst_13701);
} else
{if((state_val_13737 === 11))
{var inst_13707 = (state_13736[11]);var inst_13693 = (state_13736[8]);var inst_13707__$1 = cljs.core.seq.call(null,inst_13693);var state_13736__$1 = (function (){var statearr_13753 = state_13736;(statearr_13753[11] = inst_13707__$1);
return statearr_13753;
})();if(inst_13707__$1)
{var statearr_13754_13780 = state_13736__$1;(statearr_13754_13780[1] = 14);
} else
{var statearr_13755_13781 = state_13736__$1;(statearr_13755_13781[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 12))
{var inst_13727 = (state_13736[2]);var state_13736__$1 = state_13736;var statearr_13756_13782 = state_13736__$1;(statearr_13756_13782[2] = inst_13727);
(statearr_13756_13782[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 13))
{var inst_13694 = (state_13736[6]);var inst_13695 = (state_13736[7]);var inst_13693 = (state_13736[8]);var inst_13696 = (state_13736[9]);var inst_13703 = (state_13736[2]);var inst_13704 = (inst_13696 + 1);var tmp13750 = inst_13694;var tmp13751 = inst_13695;var tmp13752 = inst_13693;var inst_13693__$1 = tmp13752;var inst_13694__$1 = tmp13750;var inst_13695__$1 = tmp13751;var inst_13696__$1 = inst_13704;var state_13736__$1 = (function (){var statearr_13757 = state_13736;(statearr_13757[12] = inst_13703);
(statearr_13757[6] = inst_13694__$1);
(statearr_13757[7] = inst_13695__$1);
(statearr_13757[8] = inst_13693__$1);
(statearr_13757[9] = inst_13696__$1);
return statearr_13757;
})();var statearr_13758_13783 = state_13736__$1;(statearr_13758_13783[2] = null);
(statearr_13758_13783[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 14))
{var inst_13707 = (state_13736[11]);var inst_13709 = cljs.core.chunked_seq_QMARK_.call(null,inst_13707);var state_13736__$1 = state_13736;if(inst_13709)
{var statearr_13759_13784 = state_13736__$1;(statearr_13759_13784[1] = 17);
} else
{var statearr_13760_13785 = state_13736__$1;(statearr_13760_13785[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 15))
{var state_13736__$1 = state_13736;var statearr_13761_13786 = state_13736__$1;(statearr_13761_13786[2] = null);
(statearr_13761_13786[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 16))
{var inst_13725 = (state_13736[2]);var state_13736__$1 = state_13736;var statearr_13762_13787 = state_13736__$1;(statearr_13762_13787[2] = inst_13725);
(statearr_13762_13787[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 17))
{var inst_13707 = (state_13736[11]);var inst_13711 = cljs.core.chunk_first.call(null,inst_13707);var inst_13712 = cljs.core.chunk_rest.call(null,inst_13707);var inst_13713 = cljs.core.count.call(null,inst_13711);var inst_13693 = inst_13712;var inst_13694 = inst_13711;var inst_13695 = inst_13713;var inst_13696 = 0;var state_13736__$1 = (function (){var statearr_13763 = state_13736;(statearr_13763[6] = inst_13694);
(statearr_13763[7] = inst_13695);
(statearr_13763[8] = inst_13693);
(statearr_13763[9] = inst_13696);
return statearr_13763;
})();var statearr_13764_13788 = state_13736__$1;(statearr_13764_13788[2] = null);
(statearr_13764_13788[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 18))
{var inst_13707 = (state_13736[11]);var inst_13716 = cljs.core.first.call(null,inst_13707);var state_13736__$1 = state_13736;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13736__$1,20,out,inst_13716);
} else
{if((state_val_13737 === 19))
{var inst_13722 = (state_13736[2]);var state_13736__$1 = state_13736;var statearr_13765_13789 = state_13736__$1;(statearr_13765_13789[2] = inst_13722);
(statearr_13765_13789[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 20))
{var inst_13707 = (state_13736[11]);var inst_13718 = (state_13736[2]);var inst_13719 = cljs.core.next.call(null,inst_13707);var inst_13693 = inst_13719;var inst_13694 = null;var inst_13695 = 0;var inst_13696 = 0;var state_13736__$1 = (function (){var statearr_13766 = state_13736;(statearr_13766[6] = inst_13694);
(statearr_13766[7] = inst_13695);
(statearr_13766[8] = inst_13693);
(statearr_13766[13] = inst_13718);
(statearr_13766[9] = inst_13696);
return statearr_13766;
})();var statearr_13767_13790 = state_13736__$1;(statearr_13767_13790[2] = null);
(statearr_13767_13790[1] = 8);
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
});return ((function (switch__5147__auto__){
return (function() {
var state_machine__5148__auto__ = null;
var state_machine__5148__auto____0 = (function (){var statearr_13769 = (new Array(14));(statearr_13769[0] = state_machine__5148__auto__);
(statearr_13769[1] = 1);
return statearr_13769;
});
var state_machine__5148__auto____1 = (function (state_13736){while(true){
var result__5149__auto__ = switch__5147__auto__.call(null,state_13736);if(cljs.core.keyword_identical_QMARK_.call(null,result__5149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5149__auto__;
}
break;
}
});
state_machine__5148__auto__ = function(state_13736){
switch(arguments.length){
case 0:
return state_machine__5148__auto____0.call(this);
case 1:
return state_machine__5148__auto____1.call(this,state_13736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5148__auto____0;
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5148__auto____1;
return state_machine__5148__auto__;
})()
;})(switch__5147__auto__))
})();var state__5199__auto__ = (function (){var statearr_13770 = f__5198__auto__.call(null);(statearr_13770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5197__auto__);
return statearr_13770;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5199__auto__);
}));
return c__5197__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5197__auto___13863 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5198__auto__ = (function (){var switch__5147__auto__ = (function (state_13846){var state_val_13847 = (state_13846[1]);if((state_val_13847 === 1))
{var state_13846__$1 = state_13846;var statearr_13848_13864 = state_13846__$1;(statearr_13848_13864[2] = null);
(statearr_13848_13864[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13847 === 2))
{var state_13846__$1 = state_13846;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13846__$1,4,from);
} else
{if((state_val_13847 === 3))
{var inst_13844 = (state_13846[2]);var state_13846__$1 = state_13846;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13846__$1,inst_13844);
} else
{if((state_val_13847 === 4))
{var inst_13829 = (state_13846[5]);var inst_13829__$1 = (state_13846[2]);var inst_13830 = (inst_13829__$1 == null);var state_13846__$1 = (function (){var statearr_13849 = state_13846;(statearr_13849[5] = inst_13829__$1);
return statearr_13849;
})();if(cljs.core.truth_(inst_13830))
{var statearr_13850_13865 = state_13846__$1;(statearr_13850_13865[1] = 5);
} else
{var statearr_13851_13866 = state_13846__$1;(statearr_13851_13866[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13847 === 5))
{var state_13846__$1 = state_13846;if(cljs.core.truth_(close_QMARK_))
{var statearr_13852_13867 = state_13846__$1;(statearr_13852_13867[1] = 8);
} else
{var statearr_13853_13868 = state_13846__$1;(statearr_13853_13868[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13847 === 6))
{var inst_13829 = (state_13846[5]);var state_13846__$1 = state_13846;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13846__$1,11,to,inst_13829);
} else
{if((state_val_13847 === 7))
{var inst_13842 = (state_13846[2]);var state_13846__$1 = state_13846;var statearr_13854_13869 = state_13846__$1;(statearr_13854_13869[2] = inst_13842);
(statearr_13854_13869[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13847 === 8))
{var inst_13833 = cljs.core.async.close_BANG_.call(null,to);var state_13846__$1 = state_13846;var statearr_13855_13870 = state_13846__$1;(statearr_13855_13870[2] = inst_13833);
(statearr_13855_13870[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13847 === 9))
{var state_13846__$1 = state_13846;var statearr_13856_13871 = state_13846__$1;(statearr_13856_13871[2] = null);
(statearr_13856_13871[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13847 === 10))
{var inst_13836 = (state_13846[2]);var state_13846__$1 = state_13846;var statearr_13857_13872 = state_13846__$1;(statearr_13857_13872[2] = inst_13836);
(statearr_13857_13872[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13847 === 11))
{var inst_13839 = (state_13846[2]);var state_13846__$1 = (function (){var statearr_13858 = state_13846;(statearr_13858[6] = inst_13839);
return statearr_13858;
})();var statearr_13859_13873 = state_13846__$1;(statearr_13859_13873[2] = null);
(statearr_13859_13873[1] = 2);
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
var state_machine__5148__auto____0 = (function (){var statearr_13861 = (new Array(7));(statearr_13861[0] = state_machine__5148__auto__);
(statearr_13861[1] = 1);
return statearr_13861;
});
var state_machine__5148__auto____1 = (function (state_13846){while(true){
var result__5149__auto__ = switch__5147__auto__.call(null,state_13846);if(cljs.core.keyword_identical_QMARK_.call(null,result__5149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5149__auto__;
}
break;
}
});
state_machine__5148__auto__ = function(state_13846){
switch(arguments.length){
case 0:
return state_machine__5148__auto____0.call(this);
case 1:
return state_machine__5148__auto____1.call(this,state_13846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5148__auto____0;
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5148__auto____1;
return state_machine__5148__auto__;
})()
;})(switch__5147__auto__))
})();var state__5199__auto__ = (function (){var statearr_13862 = f__5198__auto__.call(null);(statearr_13862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5197__auto___13863);
return statearr_13862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5199__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5197__auto___13952 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5198__auto__ = (function (){var switch__5147__auto__ = (function (state_13934){var state_val_13935 = (state_13934[1]);if((state_val_13935 === 1))
{var state_13934__$1 = state_13934;var statearr_13936_13953 = state_13934__$1;(statearr_13936_13953[2] = null);
(statearr_13936_13953[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13935 === 2))
{var state_13934__$1 = state_13934;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13934__$1,4,ch);
} else
{if((state_val_13935 === 3))
{var inst_13932 = (state_13934[2]);var state_13934__$1 = state_13934;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13934__$1,inst_13932);
} else
{if((state_val_13935 === 4))
{var inst_13915 = (state_13934[5]);var inst_13915__$1 = (state_13934[2]);var inst_13916 = (inst_13915__$1 == null);var state_13934__$1 = (function (){var statearr_13937 = state_13934;(statearr_13937[5] = inst_13915__$1);
return statearr_13937;
})();if(cljs.core.truth_(inst_13916))
{var statearr_13938_13954 = state_13934__$1;(statearr_13938_13954[1] = 5);
} else
{var statearr_13939_13955 = state_13934__$1;(statearr_13939_13955[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13935 === 5))
{var inst_13918 = cljs.core.async.close_BANG_.call(null,tc);var inst_13919 = cljs.core.async.close_BANG_.call(null,fc);var state_13934__$1 = (function (){var statearr_13940 = state_13934;(statearr_13940[6] = inst_13918);
return statearr_13940;
})();var statearr_13941_13956 = state_13934__$1;(statearr_13941_13956[2] = inst_13919);
(statearr_13941_13956[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13935 === 6))
{var inst_13915 = (state_13934[5]);var inst_13921 = p.call(null,inst_13915);var state_13934__$1 = state_13934;if(cljs.core.truth_(inst_13921))
{var statearr_13942_13957 = state_13934__$1;(statearr_13942_13957[1] = 9);
} else
{var statearr_13943_13958 = state_13934__$1;(statearr_13943_13958[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13935 === 7))
{var inst_13930 = (state_13934[2]);var state_13934__$1 = state_13934;var statearr_13944_13959 = state_13934__$1;(statearr_13944_13959[2] = inst_13930);
(statearr_13944_13959[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13935 === 8))
{var inst_13927 = (state_13934[2]);var state_13934__$1 = (function (){var statearr_13945 = state_13934;(statearr_13945[7] = inst_13927);
return statearr_13945;
})();var statearr_13946_13960 = state_13934__$1;(statearr_13946_13960[2] = null);
(statearr_13946_13960[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13935 === 9))
{var state_13934__$1 = state_13934;var statearr_13947_13961 = state_13934__$1;(statearr_13947_13961[2] = tc);
(statearr_13947_13961[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13935 === 10))
{var state_13934__$1 = state_13934;var statearr_13948_13962 = state_13934__$1;(statearr_13948_13962[2] = fc);
(statearr_13948_13962[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13935 === 11))
{var inst_13915 = (state_13934[5]);var inst_13925 = (state_13934[2]);var state_13934__$1 = state_13934;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13934__$1,8,inst_13925,inst_13915);
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
var state_machine__5148__auto____0 = (function (){var statearr_13950 = (new Array(8));(statearr_13950[0] = state_machine__5148__auto__);
(statearr_13950[1] = 1);
return statearr_13950;
});
var state_machine__5148__auto____1 = (function (state_13934){while(true){
var result__5149__auto__ = switch__5147__auto__.call(null,state_13934);if(cljs.core.keyword_identical_QMARK_.call(null,result__5149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5149__auto__;
}
break;
}
});
state_machine__5148__auto__ = function(state_13934){
switch(arguments.length){
case 0:
return state_machine__5148__auto____0.call(this);
case 1:
return state_machine__5148__auto____1.call(this,state_13934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5148__auto____0;
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5148__auto____1;
return state_machine__5148__auto__;
})()
;})(switch__5147__auto__))
})();var state__5199__auto__ = (function (){var statearr_13951 = f__5198__auto__.call(null);(statearr_13951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5197__auto___13952);
return statearr_13951;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5199__auto__);
}));
return cljs.core.PersistentVector.fromArray([tc,fc], true);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5197__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5198__auto__ = (function (){var switch__5147__auto__ = (function (state_14005){var state_val_14006 = (state_14005[1]);if((state_val_14006 === 7))
{var inst_14001 = (state_14005[2]);var state_14005__$1 = state_14005;var statearr_14007_14019 = state_14005__$1;(statearr_14007_14019[2] = inst_14001);
(statearr_14007_14019[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 6))
{var inst_13991 = (state_14005[5]);var inst_13994 = (state_14005[6]);var inst_13998 = f.call(null,inst_13991,inst_13994);var inst_13991__$1 = inst_13998;var state_14005__$1 = (function (){var statearr_14008 = state_14005;(statearr_14008[5] = inst_13991__$1);
return statearr_14008;
})();var statearr_14009_14020 = state_14005__$1;(statearr_14009_14020[2] = null);
(statearr_14009_14020[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 5))
{var inst_13991 = (state_14005[5]);var state_14005__$1 = state_14005;var statearr_14010_14021 = state_14005__$1;(statearr_14010_14021[2] = inst_13991);
(statearr_14010_14021[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 4))
{var inst_13994 = (state_14005[6]);var inst_13994__$1 = (state_14005[2]);var inst_13995 = (inst_13994__$1 == null);var state_14005__$1 = (function (){var statearr_14011 = state_14005;(statearr_14011[6] = inst_13994__$1);
return statearr_14011;
})();if(cljs.core.truth_(inst_13995))
{var statearr_14012_14022 = state_14005__$1;(statearr_14012_14022[1] = 5);
} else
{var statearr_14013_14023 = state_14005__$1;(statearr_14013_14023[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14006 === 3))
{var inst_14003 = (state_14005[2]);var state_14005__$1 = state_14005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14005__$1,inst_14003);
} else
{if((state_val_14006 === 2))
{var state_14005__$1 = state_14005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14005__$1,4,ch);
} else
{if((state_val_14006 === 1))
{var inst_13991 = init;var state_14005__$1 = (function (){var statearr_14014 = state_14005;(statearr_14014[5] = inst_13991);
return statearr_14014;
})();var statearr_14015_14024 = state_14005__$1;(statearr_14015_14024[2] = null);
(statearr_14015_14024[1] = 2);
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
});return ((function (switch__5147__auto__){
return (function() {
var state_machine__5148__auto__ = null;
var state_machine__5148__auto____0 = (function (){var statearr_14017 = (new Array(7));(statearr_14017[0] = state_machine__5148__auto__);
(statearr_14017[1] = 1);
return statearr_14017;
});
var state_machine__5148__auto____1 = (function (state_14005){while(true){
var result__5149__auto__ = switch__5147__auto__.call(null,state_14005);if(cljs.core.keyword_identical_QMARK_.call(null,result__5149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5149__auto__;
}
break;
}
});
state_machine__5148__auto__ = function(state_14005){
switch(arguments.length){
case 0:
return state_machine__5148__auto____0.call(this);
case 1:
return state_machine__5148__auto____1.call(this,state_14005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5148__auto____0;
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5148__auto____1;
return state_machine__5148__auto__;
})()
;})(switch__5147__auto__))
})();var state__5199__auto__ = (function (){var statearr_14018 = f__5198__auto__.call(null);(statearr_14018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5197__auto__);
return statearr_14018;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5199__auto__);
}));
return c__5197__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5197__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5198__auto__ = (function (){var switch__5147__auto__ = (function (state_14082){var state_val_14083 = (state_14082[1]);if((state_val_14083 === 1))
{var inst_14062 = cljs.core.seq.call(null,coll);var inst_14063 = inst_14062;var state_14082__$1 = (function (){var statearr_14084 = state_14082;(statearr_14084[5] = inst_14063);
return statearr_14084;
})();var statearr_14085_14099 = state_14082__$1;(statearr_14085_14099[2] = null);
(statearr_14085_14099[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14083 === 2))
{var inst_14063 = (state_14082[5]);var state_14082__$1 = state_14082;if(cljs.core.truth_(inst_14063))
{var statearr_14086_14100 = state_14082__$1;(statearr_14086_14100[1] = 4);
} else
{var statearr_14087_14101 = state_14082__$1;(statearr_14087_14101[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14083 === 3))
{var inst_14080 = (state_14082[2]);var state_14082__$1 = state_14082;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14082__$1,inst_14080);
} else
{if((state_val_14083 === 4))
{var inst_14063 = (state_14082[5]);var inst_14066 = cljs.core.first.call(null,inst_14063);var state_14082__$1 = state_14082;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14082__$1,7,ch,inst_14066);
} else
{if((state_val_14083 === 5))
{var state_14082__$1 = state_14082;if(cljs.core.truth_(close_QMARK_))
{var statearr_14088_14102 = state_14082__$1;(statearr_14088_14102[1] = 8);
} else
{var statearr_14089_14103 = state_14082__$1;(statearr_14089_14103[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14083 === 6))
{var inst_14078 = (state_14082[2]);var state_14082__$1 = state_14082;var statearr_14090_14104 = state_14082__$1;(statearr_14090_14104[2] = inst_14078);
(statearr_14090_14104[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14083 === 7))
{var inst_14063 = (state_14082[5]);var inst_14068 = (state_14082[2]);var inst_14069 = cljs.core.next.call(null,inst_14063);var inst_14063__$1 = inst_14069;var state_14082__$1 = (function (){var statearr_14091 = state_14082;(statearr_14091[6] = inst_14068);
(statearr_14091[5] = inst_14063__$1);
return statearr_14091;
})();var statearr_14092_14105 = state_14082__$1;(statearr_14092_14105[2] = null);
(statearr_14092_14105[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14083 === 8))
{var inst_14073 = cljs.core.async.close_BANG_.call(null,ch);var state_14082__$1 = state_14082;var statearr_14093_14106 = state_14082__$1;(statearr_14093_14106[2] = inst_14073);
(statearr_14093_14106[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14083 === 9))
{var state_14082__$1 = state_14082;var statearr_14094_14107 = state_14082__$1;(statearr_14094_14107[2] = null);
(statearr_14094_14107[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14083 === 10))
{var inst_14076 = (state_14082[2]);var state_14082__$1 = state_14082;var statearr_14095_14108 = state_14082__$1;(statearr_14095_14108[2] = inst_14076);
(statearr_14095_14108[1] = 6);
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
});return ((function (switch__5147__auto__){
return (function() {
var state_machine__5148__auto__ = null;
var state_machine__5148__auto____0 = (function (){var statearr_14097 = (new Array(7));(statearr_14097[0] = state_machine__5148__auto__);
(statearr_14097[1] = 1);
return statearr_14097;
});
var state_machine__5148__auto____1 = (function (state_14082){while(true){
var result__5149__auto__ = switch__5147__auto__.call(null,state_14082);if(cljs.core.keyword_identical_QMARK_.call(null,result__5149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5149__auto__;
}
break;
}
});
state_machine__5148__auto__ = function(state_14082){
switch(arguments.length){
case 0:
return state_machine__5148__auto____0.call(this);
case 1:
return state_machine__5148__auto____1.call(this,state_14082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5148__auto____0;
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5148__auto____1;
return state_machine__5148__auto__;
})()
;})(switch__5147__auto__))
})();var state__5199__auto__ = (function (){var statearr_14098 = f__5198__auto__.call(null);(statearr_14098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5197__auto__);
return statearr_14098;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5199__auto__);
}));
return c__5197__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = {};
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__2946__auto__ = _;if(and__2946__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__2946__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3550__auto__ = (((_ == null))?null:_);return (function (){var or__2955__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__2946__auto__ = m;if(and__2946__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__2946__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3550__auto__ = (((m == null))?null:m);return (function (){var or__2955__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__2946__auto__ = m;if(and__2946__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__2946__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3550__auto__ = (((m == null))?null:m);return (function (){var or__2955__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__2946__auto__ = m;if(and__2946__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__2946__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3550__auto__ = (((m == null))?null:m);return (function (){var or__2955__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14321 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t14321');

/**
* @constructor
*/
cljs.core.async.t14321 = (function (cs,ch,mult,meta14322){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14322 = meta14322;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14321.cljs$lang$type = true;
cljs.core.async.t14321.cljs$lang$ctorStr = "cljs.core.async/t14321";
cljs.core.async.t14321.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3491__auto__,writer__3492__auto__,opt__3493__auto__){return cljs.core._write.call(null,writer__3492__auto__,"cljs.core.async/t14321");
});})(cs))
;
cljs.core.async.t14321.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14321.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14321.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14321.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14321.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14321.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14321.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14323){var self__ = this;
var _14323__$1 = this;return self__.meta14322;
});})(cs))
;
cljs.core.async.t14321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14323,meta14322__$1){var self__ = this;
var _14323__$1 = this;return (new cljs.core.async.t14321(self__.cs,self__.ch,self__.mult,meta14322__$1));
});})(cs))
;
cljs.core.async.__GT_t14321 = ((function (cs){
return (function __GT_t14321(cs__$1,ch__$1,mult__$1,meta14322){return (new cljs.core.async.t14321(cs__$1,ch__$1,mult__$1,meta14322));
});})(cs))
;
}
return (new cljs.core.async.t14321(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5197__auto___14533 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5198__auto__ = (function (){var switch__5147__auto__ = (function (state_14451){var state_val_14452 = (state_14451[1]);if((state_val_14452 === 32))
{try{var inst_14326 = (state_14451[5]);var inst_14402 = (state_14451[6]);var inst_14408 = cljs.core.async.put_BANG_.call(null,inst_14402,inst_14326,done);var state_14451__$1 = state_14451;var statearr_14455_14534 = state_14451__$1;(statearr_14455_14534[2] = inst_14408);
(statearr_14455_14534[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e14453){if((e14453 instanceof Object))
{var ex__5141__auto__ = e14453;var statearr_14454_14535 = state_14451;(statearr_14454_14535[1] = 31);
(statearr_14454_14535[2] = ex__5141__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14453;
} else
{return null;
}
}
}} else
{if((state_val_14452 === 1))
{var state_14451__$1 = state_14451;var statearr_14456_14536 = state_14451__$1;(statearr_14456_14536[2] = null);
(statearr_14456_14536[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 33))
{var inst_14414 = (state_14451[7]);var inst_14416 = cljs.core.chunked_seq_QMARK_.call(null,inst_14414);var state_14451__$1 = state_14451;if(inst_14416)
{var statearr_14457_14537 = state_14451__$1;(statearr_14457_14537[1] = 36);
} else
{var statearr_14458_14538 = state_14451__$1;(statearr_14458_14538[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 2))
{var state_14451__$1 = state_14451;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14451__$1,4,ch);
} else
{if((state_val_14452 === 34))
{var state_14451__$1 = state_14451;var statearr_14459_14539 = state_14451__$1;(statearr_14459_14539[2] = null);
(statearr_14459_14539[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 3))
{var inst_14449 = (state_14451[2]);var state_14451__$1 = state_14451;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14451__$1,inst_14449);
} else
{if((state_val_14452 === 35))
{var inst_14438 = (state_14451[2]);var state_14451__$1 = state_14451;var statearr_14460_14540 = state_14451__$1;(statearr_14460_14540[2] = inst_14438);
(statearr_14460_14540[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 4))
{var inst_14326 = (state_14451[5]);var inst_14326__$1 = (state_14451[2]);var inst_14327 = (inst_14326__$1 == null);var state_14451__$1 = (function (){var statearr_14461 = state_14451;(statearr_14461[5] = inst_14326__$1);
return statearr_14461;
})();if(cljs.core.truth_(inst_14327))
{var statearr_14462_14541 = state_14451__$1;(statearr_14462_14541[1] = 5);
} else
{var statearr_14463_14542 = state_14451__$1;(statearr_14463_14542[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 36))
{var inst_14414 = (state_14451[7]);var inst_14418 = cljs.core.chunk_first.call(null,inst_14414);var inst_14419 = cljs.core.chunk_rest.call(null,inst_14414);var inst_14420 = cljs.core.count.call(null,inst_14418);var inst_14394 = inst_14419;var inst_14395 = inst_14418;var inst_14396 = inst_14420;var inst_14397 = 0;var state_14451__$1 = (function (){var statearr_14464 = state_14451;(statearr_14464[8] = inst_14396);
(statearr_14464[9] = inst_14397);
(statearr_14464[10] = inst_14395);
(statearr_14464[11] = inst_14394);
return statearr_14464;
})();var statearr_14465_14543 = state_14451__$1;(statearr_14465_14543[2] = null);
(statearr_14465_14543[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 5))
{var inst_14333 = cljs.core.deref.call(null,cs);var inst_14334 = cljs.core.seq.call(null,inst_14333);var inst_14335 = inst_14334;var inst_14336 = null;var inst_14337 = 0;var inst_14338 = 0;var state_14451__$1 = (function (){var statearr_14466 = state_14451;(statearr_14466[12] = inst_14337);
(statearr_14466[13] = inst_14336);
(statearr_14466[14] = inst_14335);
(statearr_14466[15] = inst_14338);
return statearr_14466;
})();var statearr_14467_14544 = state_14451__$1;(statearr_14467_14544[2] = null);
(statearr_14467_14544[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 37))
{var inst_14414 = (state_14451[7]);var inst_14423 = cljs.core.first.call(null,inst_14414);var state_14451__$1 = (function (){var statearr_14468 = state_14451;(statearr_14468[16] = inst_14423);
return statearr_14468;
})();var statearr_14469_14545 = state_14451__$1;(statearr_14469_14545[2] = null);
(statearr_14469_14545[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 6))
{var inst_14385 = cljs.core.deref.call(null,cs);var inst_14386 = cljs.core.keys.call(null,inst_14385);var inst_14387 = cljs.core.count.call(null,inst_14386);var inst_14388 = cljs.core.reset_BANG_.call(null,dctr,inst_14387);var inst_14393 = cljs.core.seq.call(null,inst_14386);var inst_14394 = inst_14393;var inst_14395 = null;var inst_14396 = 0;var inst_14397 = 0;var state_14451__$1 = (function (){var statearr_14470 = state_14451;(statearr_14470[17] = inst_14388);
(statearr_14470[8] = inst_14396);
(statearr_14470[9] = inst_14397);
(statearr_14470[10] = inst_14395);
(statearr_14470[11] = inst_14394);
return statearr_14470;
})();var statearr_14471_14546 = state_14451__$1;(statearr_14471_14546[2] = null);
(statearr_14471_14546[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 38))
{var inst_14435 = (state_14451[2]);var state_14451__$1 = state_14451;var statearr_14472_14547 = state_14451__$1;(statearr_14472_14547[2] = inst_14435);
(statearr_14472_14547[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 7))
{var inst_14447 = (state_14451[2]);var state_14451__$1 = state_14451;var statearr_14473_14548 = state_14451__$1;(statearr_14473_14548[2] = inst_14447);
(statearr_14473_14548[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 39))
{var inst_14414 = (state_14451[7]);var inst_14431 = (state_14451[2]);var inst_14432 = cljs.core.next.call(null,inst_14414);var inst_14394 = inst_14432;var inst_14395 = null;var inst_14396 = 0;var inst_14397 = 0;var state_14451__$1 = (function (){var statearr_14474 = state_14451;(statearr_14474[18] = inst_14431);
(statearr_14474[8] = inst_14396);
(statearr_14474[9] = inst_14397);
(statearr_14474[10] = inst_14395);
(statearr_14474[11] = inst_14394);
return statearr_14474;
})();var statearr_14475_14549 = state_14451__$1;(statearr_14475_14549[2] = null);
(statearr_14475_14549[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 8))
{var inst_14337 = (state_14451[12]);var inst_14338 = (state_14451[15]);var inst_14340 = (inst_14338 < inst_14337);var inst_14341 = inst_14340;var state_14451__$1 = state_14451;if(cljs.core.truth_(inst_14341))
{var statearr_14476_14550 = state_14451__$1;(statearr_14476_14550[1] = 10);
} else
{var statearr_14477_14551 = state_14451__$1;(statearr_14477_14551[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 40))
{var inst_14423 = (state_14451[16]);var inst_14424 = (state_14451[2]);var inst_14425 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14426 = cljs.core.async.untap_STAR_.call(null,m,inst_14423);var state_14451__$1 = (function (){var statearr_14478 = state_14451;(statearr_14478[19] = inst_14425);
(statearr_14478[20] = inst_14424);
return statearr_14478;
})();var statearr_14479_14552 = state_14451__$1;(statearr_14479_14552[2] = inst_14426);
(statearr_14479_14552[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 9))
{var inst_14383 = (state_14451[2]);var state_14451__$1 = state_14451;var statearr_14480_14553 = state_14451__$1;(statearr_14480_14553[2] = inst_14383);
(statearr_14480_14553[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 41))
{try{var inst_14326 = (state_14451[5]);var inst_14423 = (state_14451[16]);var inst_14429 = cljs.core.async.put_BANG_.call(null,inst_14423,inst_14326,done);var state_14451__$1 = state_14451;var statearr_14483_14554 = state_14451__$1;(statearr_14483_14554[2] = inst_14429);
(statearr_14483_14554[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e14481){if((e14481 instanceof Object))
{var ex__5141__auto__ = e14481;var statearr_14482_14555 = state_14451;(statearr_14482_14555[1] = 40);
(statearr_14482_14555[2] = ex__5141__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14481;
} else
{return null;
}
}
}} else
{if((state_val_14452 === 10))
{var inst_14336 = (state_14451[13]);var inst_14338 = (state_14451[15]);var inst_14344 = cljs.core._nth.call(null,inst_14336,inst_14338);var inst_14345 = cljs.core.nth.call(null,inst_14344,0,null);var inst_14346 = cljs.core.nth.call(null,inst_14344,1,null);var state_14451__$1 = (function (){var statearr_14484 = state_14451;(statearr_14484[21] = inst_14345);
return statearr_14484;
})();if(cljs.core.truth_(inst_14346))
{var statearr_14485_14556 = state_14451__$1;(statearr_14485_14556[1] = 13);
} else
{var statearr_14486_14557 = state_14451__$1;(statearr_14486_14557[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 42))
{var inst_14444 = (state_14451[2]);var state_14451__$1 = (function (){var statearr_14487 = state_14451;(statearr_14487[22] = inst_14444);
return statearr_14487;
})();var statearr_14488_14558 = state_14451__$1;(statearr_14488_14558[2] = null);
(statearr_14488_14558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 11))
{var inst_14335 = (state_14451[14]);var inst_14355 = (state_14451[23]);var inst_14355__$1 = cljs.core.seq.call(null,inst_14335);var state_14451__$1 = (function (){var statearr_14489 = state_14451;(statearr_14489[23] = inst_14355__$1);
return statearr_14489;
})();if(inst_14355__$1)
{var statearr_14490_14559 = state_14451__$1;(statearr_14490_14559[1] = 16);
} else
{var statearr_14491_14560 = state_14451__$1;(statearr_14491_14560[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 12))
{var inst_14381 = (state_14451[2]);var state_14451__$1 = state_14451;var statearr_14492_14561 = state_14451__$1;(statearr_14492_14561[2] = inst_14381);
(statearr_14492_14561[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 13))
{var inst_14345 = (state_14451[21]);var inst_14348 = cljs.core.async.close_BANG_.call(null,inst_14345);var state_14451__$1 = state_14451;var statearr_14496_14562 = state_14451__$1;(statearr_14496_14562[2] = inst_14348);
(statearr_14496_14562[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 14))
{var state_14451__$1 = state_14451;var statearr_14497_14563 = state_14451__$1;(statearr_14497_14563[2] = null);
(statearr_14497_14563[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 15))
{var inst_14337 = (state_14451[12]);var inst_14336 = (state_14451[13]);var inst_14335 = (state_14451[14]);var inst_14338 = (state_14451[15]);var inst_14351 = (state_14451[2]);var inst_14352 = (inst_14338 + 1);var tmp14493 = inst_14337;var tmp14494 = inst_14336;var tmp14495 = inst_14335;var inst_14335__$1 = tmp14495;var inst_14336__$1 = tmp14494;var inst_14337__$1 = tmp14493;var inst_14338__$1 = inst_14352;var state_14451__$1 = (function (){var statearr_14498 = state_14451;(statearr_14498[12] = inst_14337__$1);
(statearr_14498[13] = inst_14336__$1);
(statearr_14498[14] = inst_14335__$1);
(statearr_14498[15] = inst_14338__$1);
(statearr_14498[24] = inst_14351);
return statearr_14498;
})();var statearr_14499_14564 = state_14451__$1;(statearr_14499_14564[2] = null);
(statearr_14499_14564[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 16))
{var inst_14355 = (state_14451[23]);var inst_14357 = cljs.core.chunked_seq_QMARK_.call(null,inst_14355);var state_14451__$1 = state_14451;if(inst_14357)
{var statearr_14500_14565 = state_14451__$1;(statearr_14500_14565[1] = 19);
} else
{var statearr_14501_14566 = state_14451__$1;(statearr_14501_14566[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 17))
{var state_14451__$1 = state_14451;var statearr_14502_14567 = state_14451__$1;(statearr_14502_14567[2] = null);
(statearr_14502_14567[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 18))
{var inst_14379 = (state_14451[2]);var state_14451__$1 = state_14451;var statearr_14503_14568 = state_14451__$1;(statearr_14503_14568[2] = inst_14379);
(statearr_14503_14568[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 19))
{var inst_14355 = (state_14451[23]);var inst_14359 = cljs.core.chunk_first.call(null,inst_14355);var inst_14360 = cljs.core.chunk_rest.call(null,inst_14355);var inst_14361 = cljs.core.count.call(null,inst_14359);var inst_14335 = inst_14360;var inst_14336 = inst_14359;var inst_14337 = inst_14361;var inst_14338 = 0;var state_14451__$1 = (function (){var statearr_14504 = state_14451;(statearr_14504[12] = inst_14337);
(statearr_14504[13] = inst_14336);
(statearr_14504[14] = inst_14335);
(statearr_14504[15] = inst_14338);
return statearr_14504;
})();var statearr_14505_14569 = state_14451__$1;(statearr_14505_14569[2] = null);
(statearr_14505_14569[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 20))
{var inst_14355 = (state_14451[23]);var inst_14365 = cljs.core.first.call(null,inst_14355);var inst_14366 = cljs.core.nth.call(null,inst_14365,0,null);var inst_14367 = cljs.core.nth.call(null,inst_14365,1,null);var state_14451__$1 = (function (){var statearr_14506 = state_14451;(statearr_14506[25] = inst_14366);
return statearr_14506;
})();if(cljs.core.truth_(inst_14367))
{var statearr_14507_14570 = state_14451__$1;(statearr_14507_14570[1] = 22);
} else
{var statearr_14508_14571 = state_14451__$1;(statearr_14508_14571[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 21))
{var inst_14376 = (state_14451[2]);var state_14451__$1 = state_14451;var statearr_14509_14572 = state_14451__$1;(statearr_14509_14572[2] = inst_14376);
(statearr_14509_14572[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 22))
{var inst_14366 = (state_14451[25]);var inst_14369 = cljs.core.async.close_BANG_.call(null,inst_14366);var state_14451__$1 = state_14451;var statearr_14510_14573 = state_14451__$1;(statearr_14510_14573[2] = inst_14369);
(statearr_14510_14573[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 23))
{var state_14451__$1 = state_14451;var statearr_14511_14574 = state_14451__$1;(statearr_14511_14574[2] = null);
(statearr_14511_14574[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 24))
{var inst_14355 = (state_14451[23]);var inst_14372 = (state_14451[2]);var inst_14373 = cljs.core.next.call(null,inst_14355);var inst_14335 = inst_14373;var inst_14336 = null;var inst_14337 = 0;var inst_14338 = 0;var state_14451__$1 = (function (){var statearr_14512 = state_14451;(statearr_14512[12] = inst_14337);
(statearr_14512[13] = inst_14336);
(statearr_14512[14] = inst_14335);
(statearr_14512[26] = inst_14372);
(statearr_14512[15] = inst_14338);
return statearr_14512;
})();var statearr_14513_14575 = state_14451__$1;(statearr_14513_14575[2] = null);
(statearr_14513_14575[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 25))
{var inst_14396 = (state_14451[8]);var inst_14397 = (state_14451[9]);var inst_14399 = (inst_14397 < inst_14396);var inst_14400 = inst_14399;var state_14451__$1 = state_14451;if(cljs.core.truth_(inst_14400))
{var statearr_14514_14576 = state_14451__$1;(statearr_14514_14576[1] = 27);
} else
{var statearr_14515_14577 = state_14451__$1;(statearr_14515_14577[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 26))
{var inst_14442 = (state_14451[2]);var state_14451__$1 = (function (){var statearr_14516 = state_14451;(statearr_14516[27] = inst_14442);
return statearr_14516;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14451__$1,42,dchan);
} else
{if((state_val_14452 === 27))
{var inst_14397 = (state_14451[9]);var inst_14395 = (state_14451[10]);var inst_14402 = cljs.core._nth.call(null,inst_14395,inst_14397);var state_14451__$1 = (function (){var statearr_14517 = state_14451;(statearr_14517[6] = inst_14402);
return statearr_14517;
})();var statearr_14518_14578 = state_14451__$1;(statearr_14518_14578[2] = null);
(statearr_14518_14578[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 28))
{var inst_14414 = (state_14451[7]);var inst_14394 = (state_14451[11]);var inst_14414__$1 = cljs.core.seq.call(null,inst_14394);var state_14451__$1 = (function (){var statearr_14522 = state_14451;(statearr_14522[7] = inst_14414__$1);
return statearr_14522;
})();if(inst_14414__$1)
{var statearr_14523_14579 = state_14451__$1;(statearr_14523_14579[1] = 33);
} else
{var statearr_14524_14580 = state_14451__$1;(statearr_14524_14580[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 29))
{var inst_14440 = (state_14451[2]);var state_14451__$1 = state_14451;var statearr_14525_14581 = state_14451__$1;(statearr_14525_14581[2] = inst_14440);
(statearr_14525_14581[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 30))
{var inst_14396 = (state_14451[8]);var inst_14397 = (state_14451[9]);var inst_14395 = (state_14451[10]);var inst_14394 = (state_14451[11]);var inst_14410 = (state_14451[2]);var inst_14411 = (inst_14397 + 1);var tmp14519 = inst_14396;var tmp14520 = inst_14395;var tmp14521 = inst_14394;var inst_14394__$1 = tmp14521;var inst_14395__$1 = tmp14520;var inst_14396__$1 = tmp14519;var inst_14397__$1 = inst_14411;var state_14451__$1 = (function (){var statearr_14526 = state_14451;(statearr_14526[28] = inst_14410);
(statearr_14526[8] = inst_14396__$1);
(statearr_14526[9] = inst_14397__$1);
(statearr_14526[10] = inst_14395__$1);
(statearr_14526[11] = inst_14394__$1);
return statearr_14526;
})();var statearr_14527_14582 = state_14451__$1;(statearr_14527_14582[2] = null);
(statearr_14527_14582[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14452 === 31))
{var inst_14402 = (state_14451[6]);var inst_14403 = (state_14451[2]);var inst_14404 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14405 = cljs.core.async.untap_STAR_.call(null,m,inst_14402);var state_14451__$1 = (function (){var statearr_14528 = state_14451;(statearr_14528[29] = inst_14404);
(statearr_14528[30] = inst_14403);
return statearr_14528;
})();var statearr_14529_14583 = state_14451__$1;(statearr_14529_14583[2] = inst_14405);
(statearr_14529_14583[1] = 30);
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
var state_machine__5148__auto____0 = (function (){var statearr_14531 = (new Array(31));(statearr_14531[0] = state_machine__5148__auto__);
(statearr_14531[1] = 1);
return statearr_14531;
});
var state_machine__5148__auto____1 = (function (state_14451){while(true){
var result__5149__auto__ = switch__5147__auto__.call(null,state_14451);if(cljs.core.keyword_identical_QMARK_.call(null,result__5149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5149__auto__;
}
break;
}
});
state_machine__5148__auto__ = function(state_14451){
switch(arguments.length){
case 0:
return state_machine__5148__auto____0.call(this);
case 1:
return state_machine__5148__auto____1.call(this,state_14451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5148__auto____0;
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5148__auto____1;
return state_machine__5148__auto__;
})()
;})(switch__5147__auto__))
})();var state__5199__auto__ = (function (){var statearr_14532 = f__5198__auto__.call(null);(statearr_14532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5197__auto___14533);
return statearr_14532;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5199__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = {};
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__2946__auto__ = m;if(and__2946__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__2946__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3550__auto__ = (((m == null))?null:m);return (function (){var or__2955__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__2946__auto__ = m;if(and__2946__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__2946__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3550__auto__ = (((m == null))?null:m);return (function (){var or__2955__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__2946__auto__ = m;if(and__2946__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__2946__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3550__auto__ = (((m == null))?null:m);return (function (){var or__2955__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__2946__auto__ = m;if(and__2946__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__2946__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3550__auto__ = (((m == null))?null:m);return (function (){var or__2955__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__2946__auto__ = m;if(and__2946__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__2946__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3550__auto__ = (((m == null))?null:m);return (function (){var or__2955__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], true);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], true);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t14689 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t14689');

/**
* @constructor
*/
cljs.core.async.t14689 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14690){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta14690 = meta14690;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14689.cljs$lang$type = true;
cljs.core.async.t14689.cljs$lang$ctorStr = "cljs.core.async/t14689";
cljs.core.async.t14689.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3491__auto__,writer__3492__auto__,opt__3493__auto__){return cljs.core._write.call(null,writer__3492__auto__,"cljs.core.async/t14689");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14689.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14689.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14689.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14689.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14689.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14689.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14689.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14689.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14689.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14691){var self__ = this;
var _14691__$1 = this;return self__.meta14690;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14691,meta14690__$1){var self__ = this;
var _14691__$1 = this;return (new cljs.core.async.t14689(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14690__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14689 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14689(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14690){return (new cljs.core.async.t14689(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14690));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14689(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5197__auto___14794 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5198__auto__ = (function (){var switch__5147__auto__ = (function (state_14756){var state_val_14757 = (state_14756[1]);if((state_val_14757 === 1))
{var inst_14695 = (state_14756[5]);var inst_14695__$1 = calc_state.call(null);var inst_14696 = cljs.core.seq_QMARK_.call(null,inst_14695__$1);var state_14756__$1 = (function (){var statearr_14758 = state_14756;(statearr_14758[5] = inst_14695__$1);
return statearr_14758;
})();if(inst_14696)
{var statearr_14759_14795 = state_14756__$1;(statearr_14759_14795[1] = 2);
} else
{var statearr_14760_14796 = state_14756__$1;(statearr_14760_14796[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14757 === 2))
{var inst_14695 = (state_14756[5]);var inst_14698 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14695);var state_14756__$1 = state_14756;var statearr_14761_14797 = state_14756__$1;(statearr_14761_14797[2] = inst_14698);
(statearr_14761_14797[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14757 === 3))
{var inst_14695 = (state_14756[5]);var state_14756__$1 = state_14756;var statearr_14762_14798 = state_14756__$1;(statearr_14762_14798[2] = inst_14695);
(statearr_14762_14798[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14757 === 4))
{var inst_14695 = (state_14756[5]);var inst_14701 = (state_14756[2]);var inst_14702 = cljs.core.get.call(null,inst_14701,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14703 = cljs.core.get.call(null,inst_14701,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14704 = cljs.core.get.call(null,inst_14701,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14705 = inst_14695;var state_14756__$1 = (function (){var statearr_14763 = state_14756;(statearr_14763[6] = inst_14705);
(statearr_14763[7] = inst_14702);
(statearr_14763[8] = inst_14703);
(statearr_14763[9] = inst_14704);
return statearr_14763;
})();var statearr_14764_14799 = state_14756__$1;(statearr_14764_14799[2] = null);
(statearr_14764_14799[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14757 === 5))
{var inst_14705 = (state_14756[6]);var inst_14708 = cljs.core.seq_QMARK_.call(null,inst_14705);var state_14756__$1 = state_14756;if(inst_14708)
{var statearr_14765_14800 = state_14756__$1;(statearr_14765_14800[1] = 7);
} else
{var statearr_14766_14801 = state_14756__$1;(statearr_14766_14801[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14757 === 6))
{var inst_14754 = (state_14756[2]);var state_14756__$1 = state_14756;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14756__$1,inst_14754);
} else
{if((state_val_14757 === 7))
{var inst_14705 = (state_14756[6]);var inst_14710 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14705);var state_14756__$1 = state_14756;var statearr_14767_14802 = state_14756__$1;(statearr_14767_14802[2] = inst_14710);
(statearr_14767_14802[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14757 === 8))
{var inst_14705 = (state_14756[6]);var state_14756__$1 = state_14756;var statearr_14768_14803 = state_14756__$1;(statearr_14768_14803[2] = inst_14705);
(statearr_14768_14803[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14757 === 9))
{var inst_14713 = (state_14756[10]);var inst_14713__$1 = (state_14756[2]);var inst_14714 = cljs.core.get.call(null,inst_14713__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14715 = cljs.core.get.call(null,inst_14713__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14716 = cljs.core.get.call(null,inst_14713__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14756__$1 = (function (){var statearr_14769 = state_14756;(statearr_14769[10] = inst_14713__$1);
(statearr_14769[11] = inst_14715);
(statearr_14769[12] = inst_14716);
return statearr_14769;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14756__$1,10,inst_14714);
} else
{if((state_val_14757 === 10))
{var inst_14721 = (state_14756[13]);var inst_14720 = (state_14756[14]);var inst_14719 = (state_14756[2]);var inst_14720__$1 = cljs.core.nth.call(null,inst_14719,0,null);var inst_14721__$1 = cljs.core.nth.call(null,inst_14719,1,null);var inst_14722 = (inst_14720__$1 == null);var inst_14723 = cljs.core._EQ_.call(null,inst_14721__$1,change);var inst_14724 = (inst_14722) || (inst_14723);var state_14756__$1 = (function (){var statearr_14770 = state_14756;(statearr_14770[13] = inst_14721__$1);
(statearr_14770[14] = inst_14720__$1);
return statearr_14770;
})();if(cljs.core.truth_(inst_14724))
{var statearr_14771_14804 = state_14756__$1;(statearr_14771_14804[1] = 11);
} else
{var statearr_14772_14805 = state_14756__$1;(statearr_14772_14805[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14757 === 11))
{var inst_14720 = (state_14756[14]);var inst_14726 = (inst_14720 == null);var state_14756__$1 = state_14756;if(cljs.core.truth_(inst_14726))
{var statearr_14773_14806 = state_14756__$1;(statearr_14773_14806[1] = 14);
} else
{var statearr_14774_14807 = state_14756__$1;(statearr_14774_14807[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14757 === 12))
{var inst_14721 = (state_14756[13]);var inst_14716 = (state_14756[12]);var inst_14735 = (state_14756[15]);var inst_14735__$1 = inst_14716.call(null,inst_14721);var state_14756__$1 = (function (){var statearr_14775 = state_14756;(statearr_14775[15] = inst_14735__$1);
return statearr_14775;
})();if(cljs.core.truth_(inst_14735__$1))
{var statearr_14776_14808 = state_14756__$1;(statearr_14776_14808[1] = 17);
} else
{var statearr_14777_14809 = state_14756__$1;(statearr_14777_14809[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14757 === 13))
{var inst_14752 = (state_14756[2]);var state_14756__$1 = state_14756;var statearr_14778_14810 = state_14756__$1;(statearr_14778_14810[2] = inst_14752);
(statearr_14778_14810[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14757 === 14))
{var inst_14721 = (state_14756[13]);var inst_14728 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14721);var state_14756__$1 = state_14756;var statearr_14779_14811 = state_14756__$1;(statearr_14779_14811[2] = inst_14728);
(statearr_14779_14811[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14757 === 15))
{var state_14756__$1 = state_14756;var statearr_14780_14812 = state_14756__$1;(statearr_14780_14812[2] = null);
(statearr_14780_14812[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14757 === 16))
{var inst_14731 = (state_14756[2]);var inst_14732 = calc_state.call(null);var inst_14705 = inst_14732;var state_14756__$1 = (function (){var statearr_14781 = state_14756;(statearr_14781[16] = inst_14731);
(statearr_14781[6] = inst_14705);
return statearr_14781;
})();var statearr_14782_14813 = state_14756__$1;(statearr_14782_14813[2] = null);
(statearr_14782_14813[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14757 === 17))
{var inst_14735 = (state_14756[15]);var state_14756__$1 = state_14756;var statearr_14783_14814 = state_14756__$1;(statearr_14783_14814[2] = inst_14735);
(statearr_14783_14814[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14757 === 18))
{var inst_14721 = (state_14756[13]);var inst_14715 = (state_14756[11]);var inst_14716 = (state_14756[12]);var inst_14738 = cljs.core.empty_QMARK_.call(null,inst_14716);var inst_14739 = inst_14715.call(null,inst_14721);var inst_14740 = cljs.core.not.call(null,inst_14739);var inst_14741 = (inst_14738) && (inst_14740);var state_14756__$1 = state_14756;var statearr_14784_14815 = state_14756__$1;(statearr_14784_14815[2] = inst_14741);
(statearr_14784_14815[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14757 === 19))
{var inst_14743 = (state_14756[2]);var state_14756__$1 = state_14756;if(cljs.core.truth_(inst_14743))
{var statearr_14785_14816 = state_14756__$1;(statearr_14785_14816[1] = 20);
} else
{var statearr_14786_14817 = state_14756__$1;(statearr_14786_14817[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14757 === 20))
{var inst_14720 = (state_14756[14]);var state_14756__$1 = state_14756;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14756__$1,23,out,inst_14720);
} else
{if((state_val_14757 === 21))
{var state_14756__$1 = state_14756;var statearr_14787_14818 = state_14756__$1;(statearr_14787_14818[2] = null);
(statearr_14787_14818[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14757 === 22))
{var inst_14713 = (state_14756[10]);var inst_14749 = (state_14756[2]);var inst_14705 = inst_14713;var state_14756__$1 = (function (){var statearr_14788 = state_14756;(statearr_14788[17] = inst_14749);
(statearr_14788[6] = inst_14705);
return statearr_14788;
})();var statearr_14789_14819 = state_14756__$1;(statearr_14789_14819[2] = null);
(statearr_14789_14819[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14757 === 23))
{var inst_14746 = (state_14756[2]);var state_14756__$1 = state_14756;var statearr_14790_14820 = state_14756__$1;(statearr_14790_14820[2] = inst_14746);
(statearr_14790_14820[1] = 22);
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
});return ((function (switch__5147__auto__){
return (function() {
var state_machine__5148__auto__ = null;
var state_machine__5148__auto____0 = (function (){var statearr_14792 = (new Array(18));(statearr_14792[0] = state_machine__5148__auto__);
(statearr_14792[1] = 1);
return statearr_14792;
});
var state_machine__5148__auto____1 = (function (state_14756){while(true){
var result__5149__auto__ = switch__5147__auto__.call(null,state_14756);if(cljs.core.keyword_identical_QMARK_.call(null,result__5149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5149__auto__;
}
break;
}
});
state_machine__5148__auto__ = function(state_14756){
switch(arguments.length){
case 0:
return state_machine__5148__auto____0.call(this);
case 1:
return state_machine__5148__auto____1.call(this,state_14756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5148__auto____0;
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5148__auto____1;
return state_machine__5148__auto__;
})()
;})(switch__5147__auto__))
})();var state__5199__auto__ = (function (){var statearr_14793 = f__5198__auto__.call(null);(statearr_14793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5197__auto___14794);
return statearr_14793;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5199__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = {};
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__2946__auto__ = p;if(and__2946__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__2946__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3550__auto__ = (((p == null))?null:p);return (function (){var or__2955__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__2946__auto__ = p;if(and__2946__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__2946__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3550__auto__ = (((p == null))?null:p);return (function (){var or__2955__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__2946__auto__ = p;if(and__2946__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__2946__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3550__auto__ = (((p == null))?null:p);return (function (){var or__2955__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__2946__auto__ = p;if(and__2946__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__2946__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3550__auto__ = (((p == null))?null:p);return (function (){var or__2955__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3550__auto__)]);if(or__2955__auto__)
{return or__2955__auto__;
} else
{var or__2955__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__2955__auto____$1)
{return or__2955__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__2955__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__2955__auto__))
{return or__2955__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__2955__auto__,mults){
return (function (p1__14821_SHARP_){if(cljs.core.truth_(p1__14821_SHARP_.call(null,topic)))
{return p1__14821_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14821_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__2955__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14945 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t14945');

/**
* @constructor
*/
cljs.core.async.t14945 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14946){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14946 = meta14946;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14945.cljs$lang$type = true;
cljs.core.async.t14945.cljs$lang$ctorStr = "cljs.core.async/t14945";
cljs.core.async.t14945.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3491__auto__,writer__3492__auto__,opt__3493__auto__){return cljs.core._write.call(null,writer__3492__auto__,"cljs.core.async/t14945");
});})(mults,ensure_mult))
;
cljs.core.async.t14945.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14945.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14945.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14945.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14945.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14945.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14945.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14947){var self__ = this;
var _14947__$1 = this;return self__.meta14946;
});})(mults,ensure_mult))
;
cljs.core.async.t14945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14947,meta14946__$1){var self__ = this;
var _14947__$1 = this;return (new cljs.core.async.t14945(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14946__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14945 = ((function (mults,ensure_mult){
return (function __GT_t14945(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14946){return (new cljs.core.async.t14945(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14946));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14945(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5197__auto___15068 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5198__auto__ = (function (){var switch__5147__auto__ = (function (state_15020){var state_val_15021 = (state_15020[1]);if((state_val_15021 === 1))
{var state_15020__$1 = state_15020;var statearr_15022_15069 = state_15020__$1;(statearr_15022_15069[2] = null);
(statearr_15022_15069[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 2))
{var state_15020__$1 = state_15020;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15020__$1,4,ch);
} else
{if((state_val_15021 === 3))
{var inst_15018 = (state_15020[2]);var state_15020__$1 = state_15020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15020__$1,inst_15018);
} else
{if((state_val_15021 === 4))
{var inst_14950 = (state_15020[5]);var inst_14950__$1 = (state_15020[2]);var inst_14951 = (inst_14950__$1 == null);var state_15020__$1 = (function (){var statearr_15023 = state_15020;(statearr_15023[5] = inst_14950__$1);
return statearr_15023;
})();if(cljs.core.truth_(inst_14951))
{var statearr_15024_15070 = state_15020__$1;(statearr_15024_15070[1] = 5);
} else
{var statearr_15025_15071 = state_15020__$1;(statearr_15025_15071[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 5))
{var inst_14957 = cljs.core.deref.call(null,mults);var inst_14958 = cljs.core.vals.call(null,inst_14957);var inst_14959 = cljs.core.seq.call(null,inst_14958);var inst_14960 = inst_14959;var inst_14961 = null;var inst_14962 = 0;var inst_14963 = 0;var state_15020__$1 = (function (){var statearr_15026 = state_15020;(statearr_15026[6] = inst_14960);
(statearr_15026[7] = inst_14963);
(statearr_15026[8] = inst_14962);
(statearr_15026[9] = inst_14961);
return statearr_15026;
})();var statearr_15027_15072 = state_15020__$1;(statearr_15027_15072[2] = null);
(statearr_15027_15072[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 6))
{var inst_14998 = (state_15020[10]);var inst_14950 = (state_15020[5]);var inst_15000 = (state_15020[11]);var inst_14998__$1 = topic_fn.call(null,inst_14950);var inst_14999 = cljs.core.deref.call(null,mults);var inst_15000__$1 = cljs.core.get.call(null,inst_14999,inst_14998__$1);var state_15020__$1 = (function (){var statearr_15028 = state_15020;(statearr_15028[10] = inst_14998__$1);
(statearr_15028[11] = inst_15000__$1);
return statearr_15028;
})();if(cljs.core.truth_(inst_15000__$1))
{var statearr_15029_15073 = state_15020__$1;(statearr_15029_15073[1] = 19);
} else
{var statearr_15030_15074 = state_15020__$1;(statearr_15030_15074[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 7))
{var inst_15016 = (state_15020[2]);var state_15020__$1 = state_15020;var statearr_15031_15075 = state_15020__$1;(statearr_15031_15075[2] = inst_15016);
(statearr_15031_15075[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 8))
{var inst_14963 = (state_15020[7]);var inst_14962 = (state_15020[8]);var inst_14965 = (inst_14963 < inst_14962);var inst_14966 = inst_14965;var state_15020__$1 = state_15020;if(cljs.core.truth_(inst_14966))
{var statearr_15035_15076 = state_15020__$1;(statearr_15035_15076[1] = 10);
} else
{var statearr_15036_15077 = state_15020__$1;(statearr_15036_15077[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 9))
{var inst_14996 = (state_15020[2]);var state_15020__$1 = state_15020;var statearr_15037_15078 = state_15020__$1;(statearr_15037_15078[2] = inst_14996);
(statearr_15037_15078[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 10))
{var inst_14960 = (state_15020[6]);var inst_14963 = (state_15020[7]);var inst_14962 = (state_15020[8]);var inst_14961 = (state_15020[9]);var inst_14968 = cljs.core._nth.call(null,inst_14961,inst_14963);var inst_14969 = cljs.core.async.muxch_STAR_.call(null,inst_14968);var inst_14970 = cljs.core.async.close_BANG_.call(null,inst_14969);var inst_14971 = (inst_14963 + 1);var tmp15032 = inst_14960;var tmp15033 = inst_14962;var tmp15034 = inst_14961;var inst_14960__$1 = tmp15032;var inst_14961__$1 = tmp15034;var inst_14962__$1 = tmp15033;var inst_14963__$1 = inst_14971;var state_15020__$1 = (function (){var statearr_15038 = state_15020;(statearr_15038[6] = inst_14960__$1);
(statearr_15038[12] = inst_14970);
(statearr_15038[7] = inst_14963__$1);
(statearr_15038[8] = inst_14962__$1);
(statearr_15038[9] = inst_14961__$1);
return statearr_15038;
})();var statearr_15039_15079 = state_15020__$1;(statearr_15039_15079[2] = null);
(statearr_15039_15079[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 11))
{var inst_14960 = (state_15020[6]);var inst_14974 = (state_15020[13]);var inst_14974__$1 = cljs.core.seq.call(null,inst_14960);var state_15020__$1 = (function (){var statearr_15040 = state_15020;(statearr_15040[13] = inst_14974__$1);
return statearr_15040;
})();if(inst_14974__$1)
{var statearr_15041_15080 = state_15020__$1;(statearr_15041_15080[1] = 13);
} else
{var statearr_15042_15081 = state_15020__$1;(statearr_15042_15081[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 12))
{var inst_14994 = (state_15020[2]);var state_15020__$1 = state_15020;var statearr_15043_15082 = state_15020__$1;(statearr_15043_15082[2] = inst_14994);
(statearr_15043_15082[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 13))
{var inst_14974 = (state_15020[13]);var inst_14976 = cljs.core.chunked_seq_QMARK_.call(null,inst_14974);var state_15020__$1 = state_15020;if(inst_14976)
{var statearr_15044_15083 = state_15020__$1;(statearr_15044_15083[1] = 16);
} else
{var statearr_15045_15084 = state_15020__$1;(statearr_15045_15084[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 14))
{var state_15020__$1 = state_15020;var statearr_15046_15085 = state_15020__$1;(statearr_15046_15085[2] = null);
(statearr_15046_15085[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 15))
{var inst_14992 = (state_15020[2]);var state_15020__$1 = state_15020;var statearr_15047_15086 = state_15020__$1;(statearr_15047_15086[2] = inst_14992);
(statearr_15047_15086[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 16))
{var inst_14974 = (state_15020[13]);var inst_14978 = cljs.core.chunk_first.call(null,inst_14974);var inst_14979 = cljs.core.chunk_rest.call(null,inst_14974);var inst_14980 = cljs.core.count.call(null,inst_14978);var inst_14960 = inst_14979;var inst_14961 = inst_14978;var inst_14962 = inst_14980;var inst_14963 = 0;var state_15020__$1 = (function (){var statearr_15048 = state_15020;(statearr_15048[6] = inst_14960);
(statearr_15048[7] = inst_14963);
(statearr_15048[8] = inst_14962);
(statearr_15048[9] = inst_14961);
return statearr_15048;
})();var statearr_15049_15087 = state_15020__$1;(statearr_15049_15087[2] = null);
(statearr_15049_15087[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 17))
{var inst_14974 = (state_15020[13]);var inst_14983 = cljs.core.first.call(null,inst_14974);var inst_14984 = cljs.core.async.muxch_STAR_.call(null,inst_14983);var inst_14985 = cljs.core.async.close_BANG_.call(null,inst_14984);var inst_14986 = cljs.core.next.call(null,inst_14974);var inst_14960 = inst_14986;var inst_14961 = null;var inst_14962 = 0;var inst_14963 = 0;var state_15020__$1 = (function (){var statearr_15050 = state_15020;(statearr_15050[6] = inst_14960);
(statearr_15050[7] = inst_14963);
(statearr_15050[8] = inst_14962);
(statearr_15050[9] = inst_14961);
(statearr_15050[14] = inst_14985);
return statearr_15050;
})();var statearr_15051_15088 = state_15020__$1;(statearr_15051_15088[2] = null);
(statearr_15051_15088[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 18))
{var inst_14989 = (state_15020[2]);var state_15020__$1 = state_15020;var statearr_15052_15089 = state_15020__$1;(statearr_15052_15089[2] = inst_14989);
(statearr_15052_15089[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 19))
{var state_15020__$1 = state_15020;var statearr_15053_15090 = state_15020__$1;(statearr_15053_15090[2] = null);
(statearr_15053_15090[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 20))
{var state_15020__$1 = state_15020;var statearr_15054_15091 = state_15020__$1;(statearr_15054_15091[2] = null);
(statearr_15054_15091[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 21))
{var inst_15013 = (state_15020[2]);var state_15020__$1 = (function (){var statearr_15055 = state_15020;(statearr_15055[15] = inst_15013);
return statearr_15055;
})();var statearr_15056_15092 = state_15020__$1;(statearr_15056_15092[2] = null);
(statearr_15056_15092[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 22))
{var inst_15010 = (state_15020[2]);var state_15020__$1 = state_15020;var statearr_15057_15093 = state_15020__$1;(statearr_15057_15093[2] = inst_15010);
(statearr_15057_15093[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 23))
{var inst_14998 = (state_15020[10]);var inst_15002 = (state_15020[2]);var inst_15003 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14998);var state_15020__$1 = (function (){var statearr_15058 = state_15020;(statearr_15058[16] = inst_15002);
return statearr_15058;
})();var statearr_15059_15094 = state_15020__$1;(statearr_15059_15094[2] = inst_15003);
(statearr_15059_15094[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15021 === 24))
{try{var inst_14950 = (state_15020[5]);var inst_15000 = (state_15020[11]);var inst_15006 = cljs.core.async.muxch_STAR_.call(null,inst_15000);var state_15020__$1 = state_15020;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15020__$1,25,inst_15006,inst_14950);
}catch (e15060){if((e15060 instanceof Object))
{var ex__5141__auto__ = e15060;var statearr_15061_15095 = state_15020;(statearr_15061_15095[1] = 23);
(statearr_15061_15095[2] = ex__5141__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15060;
} else
{return null;
}
}
}} else
{if((state_val_15021 === 25))
{try{var inst_15008 = (state_15020[2]);var state_15020__$1 = state_15020;var statearr_15064_15096 = state_15020__$1;(statearr_15064_15096[2] = inst_15008);
(statearr_15064_15096[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15062){if((e15062 instanceof Object))
{var ex__5141__auto__ = e15062;var statearr_15063_15097 = state_15020;(statearr_15063_15097[1] = 23);
(statearr_15063_15097[2] = ex__5141__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15062;
} else
{return null;
}
}
}} else
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
});return ((function (switch__5147__auto__){
return (function() {
var state_machine__5148__auto__ = null;
var state_machine__5148__auto____0 = (function (){var statearr_15066 = (new Array(17));(statearr_15066[0] = state_machine__5148__auto__);
(statearr_15066[1] = 1);
return statearr_15066;
});
var state_machine__5148__auto____1 = (function (state_15020){while(true){
var result__5149__auto__ = switch__5147__auto__.call(null,state_15020);if(cljs.core.keyword_identical_QMARK_.call(null,result__5149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5149__auto__;
}
break;
}
});
state_machine__5148__auto__ = function(state_15020){
switch(arguments.length){
case 0:
return state_machine__5148__auto____0.call(this);
case 1:
return state_machine__5148__auto____1.call(this,state_15020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5148__auto____0;
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5148__auto____1;
return state_machine__5148__auto__;
})()
;})(switch__5147__auto__))
})();var state__5199__auto__ = (function (){var statearr_15067 = f__5198__auto__.call(null);(statearr_15067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5197__auto___15068);
return statearr_15067;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5199__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,java.util.Arrays.copyOf.call(null,rets,cnt));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5197__auto___15228 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5198__auto__ = (function (){var switch__5147__auto__ = (function (state_15200){var state_val_15201 = (state_15200[1]);if((state_val_15201 === 1))
{var state_15200__$1 = state_15200;var statearr_15202_15229 = state_15200__$1;(statearr_15202_15229[2] = null);
(statearr_15202_15229[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15201 === 2))
{var inst_15164 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15165 = 0;var state_15200__$1 = (function (){var statearr_15203 = state_15200;(statearr_15203[5] = inst_15165);
(statearr_15203[6] = inst_15164);
return statearr_15203;
})();var statearr_15204_15230 = state_15200__$1;(statearr_15204_15230[2] = null);
(statearr_15204_15230[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15201 === 3))
{var inst_15198 = (state_15200[2]);var state_15200__$1 = state_15200;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15200__$1,inst_15198);
} else
{if((state_val_15201 === 4))
{var inst_15165 = (state_15200[5]);var inst_15167 = (inst_15165 < cnt);var state_15200__$1 = state_15200;if(cljs.core.truth_(inst_15167))
{var statearr_15205_15231 = state_15200__$1;(statearr_15205_15231[1] = 6);
} else
{var statearr_15206_15232 = state_15200__$1;(statearr_15206_15232[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15201 === 5))
{var inst_15184 = (state_15200[2]);var state_15200__$1 = (function (){var statearr_15207 = state_15200;(statearr_15207[7] = inst_15184);
return statearr_15207;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15200__$1,12,dchan);
} else
{if((state_val_15201 === 6))
{var state_15200__$1 = state_15200;var statearr_15208_15233 = state_15200__$1;(statearr_15208_15233[2] = null);
(statearr_15208_15233[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15201 === 7))
{var state_15200__$1 = state_15200;var statearr_15209_15234 = state_15200__$1;(statearr_15209_15234[2] = null);
(statearr_15209_15234[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15201 === 8))
{var inst_15182 = (state_15200[2]);var state_15200__$1 = state_15200;var statearr_15210_15235 = state_15200__$1;(statearr_15210_15235[2] = inst_15182);
(statearr_15210_15235[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15201 === 9))
{var inst_15165 = (state_15200[5]);var inst_15177 = (state_15200[2]);var inst_15178 = (inst_15165 + 1);var inst_15165__$1 = inst_15178;var state_15200__$1 = (function (){var statearr_15211 = state_15200;(statearr_15211[8] = inst_15177);
(statearr_15211[5] = inst_15165__$1);
return statearr_15211;
})();var statearr_15212_15236 = state_15200__$1;(statearr_15212_15236[2] = null);
(statearr_15212_15236[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15201 === 10))
{var inst_15169 = (state_15200[2]);var inst_15170 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15200__$1 = (function (){var statearr_15213 = state_15200;(statearr_15213[9] = inst_15169);
return statearr_15213;
})();var statearr_15214_15237 = state_15200__$1;(statearr_15214_15237[2] = inst_15170);
(statearr_15214_15237[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15201 === 11))
{try{var inst_15165 = (state_15200[5]);var inst_15173 = chs__$1.call(null,inst_15165);var inst_15174 = done.call(null,inst_15165);var inst_15175 = cljs.core.async.take_BANG_.call(null,inst_15173,inst_15174);var state_15200__$1 = state_15200;var statearr_15217_15238 = state_15200__$1;(statearr_15217_15238[2] = inst_15175);
(statearr_15217_15238[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e15215){if((e15215 instanceof Object))
{var ex__5141__auto__ = e15215;var statearr_15216_15239 = state_15200;(statearr_15216_15239[1] = 10);
(statearr_15216_15239[2] = ex__5141__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15215;
} else
{return null;
}
}
}} else
{if((state_val_15201 === 12))
{var inst_15186 = (state_15200[10]);var inst_15186__$1 = (state_15200[2]);var inst_15187 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15186__$1);var state_15200__$1 = (function (){var statearr_15218 = state_15200;(statearr_15218[10] = inst_15186__$1);
return statearr_15218;
})();if(cljs.core.truth_(inst_15187))
{var statearr_15219_15240 = state_15200__$1;(statearr_15219_15240[1] = 13);
} else
{var statearr_15220_15241 = state_15200__$1;(statearr_15220_15241[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15201 === 13))
{var inst_15189 = cljs.core.async.close_BANG_.call(null,out);var state_15200__$1 = state_15200;var statearr_15221_15242 = state_15200__$1;(statearr_15221_15242[2] = inst_15189);
(statearr_15221_15242[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15201 === 14))
{var inst_15186 = (state_15200[10]);var inst_15191 = cljs.core.apply.call(null,f,inst_15186);var state_15200__$1 = state_15200;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15200__$1,16,out,inst_15191);
} else
{if((state_val_15201 === 15))
{var inst_15196 = (state_15200[2]);var state_15200__$1 = state_15200;var statearr_15222_15243 = state_15200__$1;(statearr_15222_15243[2] = inst_15196);
(statearr_15222_15243[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15201 === 16))
{var inst_15193 = (state_15200[2]);var state_15200__$1 = (function (){var statearr_15223 = state_15200;(statearr_15223[11] = inst_15193);
return statearr_15223;
})();var statearr_15224_15244 = state_15200__$1;(statearr_15224_15244[2] = null);
(statearr_15224_15244[1] = 2);
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
});return ((function (switch__5147__auto__){
return (function() {
var state_machine__5148__auto__ = null;
var state_machine__5148__auto____0 = (function (){var statearr_15226 = (new Array(12));(statearr_15226[0] = state_machine__5148__auto__);
(statearr_15226[1] = 1);
return statearr_15226;
});
var state_machine__5148__auto____1 = (function (state_15200){while(true){
var result__5149__auto__ = switch__5147__auto__.call(null,state_15200);if(cljs.core.keyword_identical_QMARK_.call(null,result__5149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5149__auto__;
}
break;
}
});
state_machine__5148__auto__ = function(state_15200){
switch(arguments.length){
case 0:
return state_machine__5148__auto____0.call(this);
case 1:
return state_machine__5148__auto____1.call(this,state_15200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5148__auto____0;
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5148__auto____1;
return state_machine__5148__auto__;
})()
;})(switch__5147__auto__))
})();var state__5199__auto__ = (function (){var statearr_15227 = f__5198__auto__.call(null);(statearr_15227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5197__auto___15228);
return statearr_15227;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5199__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5197__auto___15344 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5198__auto__ = (function (){var switch__5147__auto__ = (function (state_15324){var state_val_15325 = (state_15324[1]);if((state_val_15325 === 1))
{var inst_15295 = cljs.core.vec.call(null,chs);var inst_15296 = inst_15295;var state_15324__$1 = (function (){var statearr_15326 = state_15324;(statearr_15326[5] = inst_15296);
return statearr_15326;
})();var statearr_15327_15345 = state_15324__$1;(statearr_15327_15345[2] = null);
(statearr_15327_15345[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15325 === 2))
{var inst_15296 = (state_15324[5]);var inst_15298 = cljs.core.count.call(null,inst_15296);var inst_15299 = (inst_15298 > 0);var state_15324__$1 = state_15324;if(cljs.core.truth_(inst_15299))
{var statearr_15328_15346 = state_15324__$1;(statearr_15328_15346[1] = 4);
} else
{var statearr_15329_15347 = state_15324__$1;(statearr_15329_15347[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15325 === 3))
{var inst_15322 = (state_15324[2]);var state_15324__$1 = state_15324;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15324__$1,inst_15322);
} else
{if((state_val_15325 === 4))
{var inst_15296 = (state_15324[5]);var state_15324__$1 = state_15324;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15324__$1,7,inst_15296);
} else
{if((state_val_15325 === 5))
{var inst_15318 = cljs.core.async.close_BANG_.call(null,out);var state_15324__$1 = state_15324;var statearr_15330_15348 = state_15324__$1;(statearr_15330_15348[2] = inst_15318);
(statearr_15330_15348[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15325 === 6))
{var inst_15320 = (state_15324[2]);var state_15324__$1 = state_15324;var statearr_15331_15349 = state_15324__$1;(statearr_15331_15349[2] = inst_15320);
(statearr_15331_15349[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15325 === 7))
{var inst_15304 = (state_15324[6]);var inst_15303 = (state_15324[7]);var inst_15303__$1 = (state_15324[2]);var inst_15304__$1 = cljs.core.nth.call(null,inst_15303__$1,0,null);var inst_15305 = cljs.core.nth.call(null,inst_15303__$1,1,null);var inst_15306 = (inst_15304__$1 == null);var state_15324__$1 = (function (){var statearr_15332 = state_15324;(statearr_15332[8] = inst_15305);
(statearr_15332[6] = inst_15304__$1);
(statearr_15332[7] = inst_15303__$1);
return statearr_15332;
})();if(cljs.core.truth_(inst_15306))
{var statearr_15333_15350 = state_15324__$1;(statearr_15333_15350[1] = 8);
} else
{var statearr_15334_15351 = state_15324__$1;(statearr_15334_15351[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15325 === 8))
{var inst_15305 = (state_15324[8]);var inst_15304 = (state_15324[6]);var inst_15303 = (state_15324[7]);var inst_15296 = (state_15324[5]);var inst_15308 = (function (){var c = inst_15305;var v = inst_15304;var vec__15301 = inst_15303;var cs = inst_15296;return ((function (c,v,vec__15301,cs,inst_15305,inst_15304,inst_15303,inst_15296,state_val_15325){
return (function (p1__15245_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15245_SHARP_);
});
;})(c,v,vec__15301,cs,inst_15305,inst_15304,inst_15303,inst_15296,state_val_15325))
})();var inst_15309 = cljs.core.filterv.call(null,inst_15308,inst_15296);var inst_15296__$1 = inst_15309;var state_15324__$1 = (function (){var statearr_15335 = state_15324;(statearr_15335[5] = inst_15296__$1);
return statearr_15335;
})();var statearr_15336_15352 = state_15324__$1;(statearr_15336_15352[2] = null);
(statearr_15336_15352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15325 === 9))
{var inst_15304 = (state_15324[6]);var state_15324__$1 = state_15324;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15324__$1,11,out,inst_15304);
} else
{if((state_val_15325 === 10))
{var inst_15316 = (state_15324[2]);var state_15324__$1 = state_15324;var statearr_15338_15353 = state_15324__$1;(statearr_15338_15353[2] = inst_15316);
(statearr_15338_15353[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15325 === 11))
{var inst_15296 = (state_15324[5]);var inst_15313 = (state_15324[2]);var tmp15337 = inst_15296;var inst_15296__$1 = tmp15337;var state_15324__$1 = (function (){var statearr_15339 = state_15324;(statearr_15339[5] = inst_15296__$1);
(statearr_15339[9] = inst_15313);
return statearr_15339;
})();var statearr_15340_15354 = state_15324__$1;(statearr_15340_15354[2] = null);
(statearr_15340_15354[1] = 2);
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
var state_machine__5148__auto____0 = (function (){var statearr_15342 = (new Array(10));(statearr_15342[0] = state_machine__5148__auto__);
(statearr_15342[1] = 1);
return statearr_15342;
});
var state_machine__5148__auto____1 = (function (state_15324){while(true){
var result__5149__auto__ = switch__5147__auto__.call(null,state_15324);if(cljs.core.keyword_identical_QMARK_.call(null,result__5149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5149__auto__;
}
break;
}
});
state_machine__5148__auto__ = function(state_15324){
switch(arguments.length){
case 0:
return state_machine__5148__auto____0.call(this);
case 1:
return state_machine__5148__auto____1.call(this,state_15324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5148__auto____0;
state_machine__5148__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5148__auto____1;
return state_machine__5148__auto__;
})()
;})(switch__5147__auto__))
})();var state__5199__auto__ = (function (){var statearr_15343 = f__5198__auto__.call(null);(statearr_15343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5197__auto___15344);
return statearr_15343;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5199__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});

//@ sourceMappingURL=async.js.map