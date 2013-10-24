goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t8111 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t8111');

/**
* @constructor
*/
cljs.core.async.t8111 = (function (f,fn_handler,meta8112){
this.f = f;
this.fn_handler = fn_handler;
this.meta8112 = meta8112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8111.cljs$lang$type = true;
cljs.core.async.t8111.cljs$lang$ctorStr = "cljs.core.async/t8111";
cljs.core.async.t8111.cljs$lang$ctorPrWriter = (function (this__3369__auto__,writer__3370__auto__,opt__3371__auto__){return cljs.core._write.call(null,writer__3370__auto__,"cljs.core.async/t8111");
});
cljs.core.async.t8111.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8111.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.t8111.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.t8111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8113){var self__ = this;
return self__.meta8112;
});
cljs.core.async.t8111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8113,meta8112__$1){var self__ = this;
return (new cljs.core.async.t8111(self__.f,self__.fn_handler,meta8112__$1));
});
cljs.core.async.__GT_t8111 = (function __GT_t8111(f__$1,fn_handler__$1,meta8112){return (new cljs.core.async.t8111(f__$1,fn_handler__$1,meta8112));
});
}
return (new cljs.core.async.t8111(f,fn_handler,null));
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
{var val_8114 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_8114);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_8114);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3941__auto__ = ret;if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3941__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__3606__auto___8115 = n;var x_8116 = 0;while(true){
if((x_8116 < n__3606__auto___8115))
{(a[x_8116] = 0);
{
var G__8117 = (x_8116 + 1);
x_8116 = G__8117;
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
var G__8118 = (i + 1);
i = G__8118;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t8122 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t8122');

/**
* @constructor
*/
cljs.core.async.t8122 = (function (flag,alt_flag,meta8123){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta8123 = meta8123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8122.cljs$lang$type = true;
cljs.core.async.t8122.cljs$lang$ctorStr = "cljs.core.async/t8122";
cljs.core.async.t8122.cljs$lang$ctorPrWriter = (function (this__3369__auto__,writer__3370__auto__,opt__3371__auto__){return cljs.core._write.call(null,writer__3370__auto__,"cljs.core.async/t8122");
});
cljs.core.async.t8122.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t8122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t8122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8124){var self__ = this;
return self__.meta8123;
});
cljs.core.async.t8122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8124,meta8123__$1){var self__ = this;
return (new cljs.core.async.t8122(self__.flag,self__.alt_flag,meta8123__$1));
});
cljs.core.async.__GT_t8122 = (function __GT_t8122(flag__$1,alt_flag__$1,meta8123){return (new cljs.core.async.t8122(flag__$1,alt_flag__$1,meta8123));
});
}
return (new cljs.core.async.t8122(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t8128 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t8128');

/**
* @constructor
*/
cljs.core.async.t8128 = (function (cb,flag,alt_handler,meta8129){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta8129 = meta8129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8128.cljs$lang$type = true;
cljs.core.async.t8128.cljs$lang$ctorStr = "cljs.core.async/t8128";
cljs.core.async.t8128.cljs$lang$ctorPrWriter = (function (this__3369__auto__,writer__3370__auto__,opt__3371__auto__){return cljs.core._write.call(null,writer__3370__auto__,"cljs.core.async/t8128");
});
cljs.core.async.t8128.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8128.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t8128.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t8128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8130){var self__ = this;
return self__.meta8129;
});
cljs.core.async.t8128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8130,meta8129__$1){var self__ = this;
return (new cljs.core.async.t8128(self__.cb,self__.flag,self__.alt_handler,meta8129__$1));
});
cljs.core.async.__GT_t8128 = (function __GT_t8128(cb__$1,flag__$1,alt_handler__$1,meta8129){return (new cljs.core.async.t8128(cb__$1,flag__$1,alt_handler__$1,meta8129));
});
}
return (new cljs.core.async.t8128(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).call(null,opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,cljs.core.PersistentVector.fromArray([null,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8131_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__8131_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__3943__auto__ = wport;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__8132 = (i + 1);
i = G__8132;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3943__auto__ = ret;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3941__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3941__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"default","default",2558708147).call(null,opts),new cljs.core.Keyword(null,"default","default",2558708147)], true));
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
var alts_BANG___delegate = function (ports,p__8133){var map__8135 = p__8133;var map__8135__$1 = ((cljs.core.seq_QMARK_.call(null,map__8135))?cljs.core.apply.call(null,cljs.core.hash_map,map__8135):map__8135);var opts = map__8135__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__8133 = null;if (arguments.length > 1) {
  p__8133 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__8133);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__8136){
var ports = cljs.core.first(arglist__8136);
var p__8133 = cljs.core.rest(arglist__8136);
return alts_BANG___delegate(ports,p__8133);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t8144 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t8144');

/**
* @constructor
*/
cljs.core.async.t8144 = (function (ch,f,map_LT_,meta8145){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta8145 = meta8145;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8144.cljs$lang$type = true;
cljs.core.async.t8144.cljs$lang$ctorStr = "cljs.core.async/t8144";
cljs.core.async.t8144.cljs$lang$ctorPrWriter = (function (this__3369__auto__,writer__3370__auto__,opt__3371__auto__){return cljs.core._write.call(null,writer__3370__auto__,"cljs.core.async/t8144");
});
cljs.core.async.t8144.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8144.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t8144.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8144.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t8147 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t8147');

/**
* @constructor
*/
cljs.core.async.t8147 = (function (fn1,_,meta8145,ch,f,map_LT_,meta8148){
this.fn1 = fn1;
this._ = _;
this.meta8145 = meta8145;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta8148 = meta8148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8147.cljs$lang$type = true;
cljs.core.async.t8147.cljs$lang$ctorStr = "cljs.core.async/t8147";
cljs.core.async.t8147.cljs$lang$ctorPrWriter = (function (this__3369__auto__,writer__3370__auto__,opt__3371__auto__){return cljs.core._write.call(null,writer__3370__auto__,"cljs.core.async/t8147");
});
cljs.core.async.t8147.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8147.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t8147.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t8147.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$2){var self__ = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1){
return (function (p1__8137_SHARP_){return f1.call(null,(((p1__8137_SHARP_ == null))?null:self__.f.call(null,p1__8137_SHARP_)));
});
;})(f1))
});
cljs.core.async.t8147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8149){var self__ = this;
return self__.meta8148;
});
cljs.core.async.t8147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8149,meta8148__$1){var self__ = this;
return (new cljs.core.async.t8147(self__.fn1,self__._,self__.meta8145,self__.ch,self__.f,self__.map_LT_,meta8148__$1));
});
cljs.core.async.__GT_t8147 = (function __GT_t8147(fn1__$1,___$1,meta8145__$1,ch__$2,f__$2,map_LT___$2,meta8148){return (new cljs.core.async.t8147(fn1__$1,___$1,meta8145__$1,ch__$2,f__$2,map_LT___$2,meta8148));
});
}
return (new cljs.core.async.t8147(fn1,_,self__.meta8145,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3941__auto__ = ret;if(cljs.core.truth_(and__3941__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t8144.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8144.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8146){var self__ = this;
return self__.meta8145;
});
cljs.core.async.t8144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8146,meta8145__$1){var self__ = this;
return (new cljs.core.async.t8144(self__.ch,self__.f,self__.map_LT_,meta8145__$1));
});
cljs.core.async.__GT_t8144 = (function __GT_t8144(ch__$1,f__$1,map_LT___$1,meta8145){return (new cljs.core.async.t8144(ch__$1,f__$1,map_LT___$1,meta8145));
});
}
return (new cljs.core.async.t8144(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t8153 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t8153');

/**
* @constructor
*/
cljs.core.async.t8153 = (function (ch,f,map_GT_,meta8154){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta8154 = meta8154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8153.cljs$lang$type = true;
cljs.core.async.t8153.cljs$lang$ctorStr = "cljs.core.async/t8153";
cljs.core.async.t8153.cljs$lang$ctorPrWriter = (function (this__3369__auto__,writer__3370__auto__,opt__3371__auto__){return cljs.core._write.call(null,writer__3370__auto__,"cljs.core.async/t8153");
});
cljs.core.async.t8153.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8153.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t8153.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8153.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t8153.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8153.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8155){var self__ = this;
return self__.meta8154;
});
cljs.core.async.t8153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8155,meta8154__$1){var self__ = this;
return (new cljs.core.async.t8153(self__.ch,self__.f,self__.map_GT_,meta8154__$1));
});
cljs.core.async.__GT_t8153 = (function __GT_t8153(ch__$1,f__$1,map_GT___$1,meta8154){return (new cljs.core.async.t8153(ch__$1,f__$1,map_GT___$1,meta8154));
});
}
return (new cljs.core.async.t8153(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t8159 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t8159');

/**
* @constructor
*/
cljs.core.async.t8159 = (function (ch,p,filter_GT_,meta8160){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta8160 = meta8160;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8159.cljs$lang$type = true;
cljs.core.async.t8159.cljs$lang$ctorStr = "cljs.core.async/t8159";
cljs.core.async.t8159.cljs$lang$ctorPrWriter = (function (this__3369__auto__,writer__3370__auto__,opt__3371__auto__){return cljs.core._write.call(null,writer__3370__auto__,"cljs.core.async/t8159");
});
cljs.core.async.t8159.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8159.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t8159.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8159.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t8159.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8159.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8161){var self__ = this;
return self__.meta8160;
});
cljs.core.async.t8159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8161,meta8160__$1){var self__ = this;
return (new cljs.core.async.t8159(self__.ch,self__.p,self__.filter_GT_,meta8160__$1));
});
cljs.core.async.__GT_t8159 = (function __GT_t8159(ch__$1,p__$1,filter_GT___$1,meta8160){return (new cljs.core.async.t8159(ch__$1,p__$1,filter_GT___$1,meta8160));
});
}
return (new cljs.core.async.t8159(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5084__auto___8236 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5085__auto__ = (function (){var switch__5034__auto__ = (function (state_8219){var state_val_8220 = (state_8219[1]);if((state_val_8220 === 1))
{var state_8219__$1 = state_8219;var statearr_8221_8237 = state_8219__$1;(statearr_8221_8237[2] = null);
(statearr_8221_8237[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8220 === 2))
{var state_8219__$1 = state_8219;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8219__$1,4,ch);
} else
{if((state_val_8220 === 3))
{var inst_8217 = (state_8219[2]);var state_8219__$1 = state_8219;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8219__$1,inst_8217);
} else
{if((state_val_8220 === 4))
{var inst_8201 = (state_8219[5]);var inst_8201__$1 = (state_8219[2]);var inst_8202 = (inst_8201__$1 == null);var state_8219__$1 = (function (){var statearr_8222 = state_8219;(statearr_8222[5] = inst_8201__$1);
return statearr_8222;
})();if(cljs.core.truth_(inst_8202))
{var statearr_8223_8238 = state_8219__$1;(statearr_8223_8238[1] = 5);
} else
{var statearr_8224_8239 = state_8219__$1;(statearr_8224_8239[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8220 === 5))
{var inst_8204 = cljs.core.async.close_BANG_.call(null,out);var state_8219__$1 = state_8219;var statearr_8225_8240 = state_8219__$1;(statearr_8225_8240[2] = inst_8204);
(statearr_8225_8240[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8220 === 6))
{var inst_8201 = (state_8219[5]);var inst_8206 = p.call(null,inst_8201);var state_8219__$1 = state_8219;if(cljs.core.truth_(inst_8206))
{var statearr_8226_8241 = state_8219__$1;(statearr_8226_8241[1] = 8);
} else
{var statearr_8227_8242 = state_8219__$1;(statearr_8227_8242[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8220 === 7))
{var inst_8215 = (state_8219[2]);var state_8219__$1 = state_8219;var statearr_8228_8243 = state_8219__$1;(statearr_8228_8243[2] = inst_8215);
(statearr_8228_8243[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8220 === 8))
{var inst_8201 = (state_8219[5]);var state_8219__$1 = state_8219;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8219__$1,11,out,inst_8201);
} else
{if((state_val_8220 === 9))
{var state_8219__$1 = state_8219;var statearr_8229_8244 = state_8219__$1;(statearr_8229_8244[2] = null);
(statearr_8229_8244[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8220 === 10))
{var inst_8212 = (state_8219[2]);var state_8219__$1 = (function (){var statearr_8230 = state_8219;(statearr_8230[6] = inst_8212);
return statearr_8230;
})();var statearr_8231_8245 = state_8219__$1;(statearr_8231_8245[2] = null);
(statearr_8231_8245[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8220 === 11))
{var inst_8209 = (state_8219[2]);var state_8219__$1 = state_8219;var statearr_8232_8246 = state_8219__$1;(statearr_8232_8246[2] = inst_8209);
(statearr_8232_8246[1] = 10);
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
var state_machine__5035__auto____0 = (function (){var statearr_8234 = (new Array(7));(statearr_8234[0] = state_machine__5035__auto__);
(statearr_8234[1] = 1);
return statearr_8234;
});
var state_machine__5035__auto____1 = (function (state_8219){while(true){
var result__5036__auto__ = switch__5034__auto__.call(null,state_8219);if(cljs.core.keyword_identical_QMARK_.call(null,result__5036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5036__auto__;
}
break;
}
});
state_machine__5035__auto__ = function(state_8219){
switch(arguments.length){
case 0:
return state_machine__5035__auto____0.call(this);
case 1:
return state_machine__5035__auto____1.call(this,state_8219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5035__auto____0;
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5035__auto____1;
return state_machine__5035__auto__;
})()
;})(switch__5034__auto__))
})();var state__5086__auto__ = (function (){var statearr_8235 = f__5085__auto__.call(null);(statearr_8235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5084__auto___8236);
return statearr_8235;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5086__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5084__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5085__auto__ = (function (){var switch__5034__auto__ = (function (state_8394){var state_val_8395 = (state_8394[1]);if((state_val_8395 === 1))
{var state_8394__$1 = state_8394;var statearr_8396_8429 = state_8394__$1;(statearr_8396_8429[2] = null);
(statearr_8396_8429[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8395 === 2))
{var state_8394__$1 = state_8394;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8394__$1,4,in$);
} else
{if((state_val_8395 === 3))
{var inst_8392 = (state_8394[2]);var state_8394__$1 = state_8394;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8394__$1,inst_8392);
} else
{if((state_val_8395 === 4))
{var inst_8340 = (state_8394[5]);var inst_8340__$1 = (state_8394[2]);var inst_8341 = (inst_8340__$1 == null);var state_8394__$1 = (function (){var statearr_8397 = state_8394;(statearr_8397[5] = inst_8340__$1);
return statearr_8397;
})();if(cljs.core.truth_(inst_8341))
{var statearr_8398_8430 = state_8394__$1;(statearr_8398_8430[1] = 5);
} else
{var statearr_8399_8431 = state_8394__$1;(statearr_8399_8431[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8395 === 5))
{var inst_8343 = cljs.core.async.close_BANG_.call(null,out);var state_8394__$1 = state_8394;var statearr_8400_8432 = state_8394__$1;(statearr_8400_8432[2] = inst_8343);
(statearr_8400_8432[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8395 === 6))
{var inst_8340 = (state_8394[5]);var inst_8345 = f.call(null,inst_8340);var inst_8350 = cljs.core.seq.call(null,inst_8345);var inst_8351 = inst_8350;var inst_8352 = null;var inst_8353 = 0;var inst_8354 = 0;var state_8394__$1 = (function (){var statearr_8401 = state_8394;(statearr_8401[6] = inst_8352);
(statearr_8401[7] = inst_8351);
(statearr_8401[8] = inst_8354);
(statearr_8401[9] = inst_8353);
return statearr_8401;
})();var statearr_8402_8433 = state_8394__$1;(statearr_8402_8433[2] = null);
(statearr_8402_8433[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8395 === 7))
{var inst_8390 = (state_8394[2]);var state_8394__$1 = state_8394;var statearr_8403_8434 = state_8394__$1;(statearr_8403_8434[2] = inst_8390);
(statearr_8403_8434[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8395 === 8))
{var inst_8354 = (state_8394[8]);var inst_8353 = (state_8394[9]);var inst_8356 = (inst_8354 < inst_8353);var inst_8357 = inst_8356;var state_8394__$1 = state_8394;if(cljs.core.truth_(inst_8357))
{var statearr_8404_8435 = state_8394__$1;(statearr_8404_8435[1] = 10);
} else
{var statearr_8405_8436 = state_8394__$1;(statearr_8405_8436[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8395 === 9))
{var inst_8387 = (state_8394[2]);var state_8394__$1 = (function (){var statearr_8406 = state_8394;(statearr_8406[10] = inst_8387);
return statearr_8406;
})();var statearr_8407_8437 = state_8394__$1;(statearr_8407_8437[2] = null);
(statearr_8407_8437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8395 === 10))
{var inst_8352 = (state_8394[6]);var inst_8354 = (state_8394[8]);var inst_8359 = cljs.core._nth.call(null,inst_8352,inst_8354);var state_8394__$1 = state_8394;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8394__$1,13,out,inst_8359);
} else
{if((state_val_8395 === 11))
{var inst_8351 = (state_8394[7]);var inst_8365 = (state_8394[11]);var inst_8365__$1 = cljs.core.seq.call(null,inst_8351);var state_8394__$1 = (function (){var statearr_8411 = state_8394;(statearr_8411[11] = inst_8365__$1);
return statearr_8411;
})();if(inst_8365__$1)
{var statearr_8412_8438 = state_8394__$1;(statearr_8412_8438[1] = 14);
} else
{var statearr_8413_8439 = state_8394__$1;(statearr_8413_8439[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8395 === 12))
{var inst_8385 = (state_8394[2]);var state_8394__$1 = state_8394;var statearr_8414_8440 = state_8394__$1;(statearr_8414_8440[2] = inst_8385);
(statearr_8414_8440[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8395 === 13))
{var inst_8352 = (state_8394[6]);var inst_8351 = (state_8394[7]);var inst_8354 = (state_8394[8]);var inst_8353 = (state_8394[9]);var inst_8361 = (state_8394[2]);var inst_8362 = (inst_8354 + 1);var tmp8408 = inst_8352;var tmp8409 = inst_8351;var tmp8410 = inst_8353;var inst_8351__$1 = tmp8409;var inst_8352__$1 = tmp8408;var inst_8353__$1 = tmp8410;var inst_8354__$1 = inst_8362;var state_8394__$1 = (function (){var statearr_8415 = state_8394;(statearr_8415[12] = inst_8361);
(statearr_8415[6] = inst_8352__$1);
(statearr_8415[7] = inst_8351__$1);
(statearr_8415[8] = inst_8354__$1);
(statearr_8415[9] = inst_8353__$1);
return statearr_8415;
})();var statearr_8416_8441 = state_8394__$1;(statearr_8416_8441[2] = null);
(statearr_8416_8441[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8395 === 14))
{var inst_8365 = (state_8394[11]);var inst_8367 = cljs.core.chunked_seq_QMARK_.call(null,inst_8365);var state_8394__$1 = state_8394;if(inst_8367)
{var statearr_8417_8442 = state_8394__$1;(statearr_8417_8442[1] = 17);
} else
{var statearr_8418_8443 = state_8394__$1;(statearr_8418_8443[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8395 === 15))
{var state_8394__$1 = state_8394;var statearr_8419_8444 = state_8394__$1;(statearr_8419_8444[2] = null);
(statearr_8419_8444[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8395 === 16))
{var inst_8383 = (state_8394[2]);var state_8394__$1 = state_8394;var statearr_8420_8445 = state_8394__$1;(statearr_8420_8445[2] = inst_8383);
(statearr_8420_8445[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8395 === 17))
{var inst_8365 = (state_8394[11]);var inst_8369 = cljs.core.chunk_first.call(null,inst_8365);var inst_8370 = cljs.core.chunk_rest.call(null,inst_8365);var inst_8371 = cljs.core.count.call(null,inst_8369);var inst_8351 = inst_8370;var inst_8352 = inst_8369;var inst_8353 = inst_8371;var inst_8354 = 0;var state_8394__$1 = (function (){var statearr_8421 = state_8394;(statearr_8421[6] = inst_8352);
(statearr_8421[7] = inst_8351);
(statearr_8421[8] = inst_8354);
(statearr_8421[9] = inst_8353);
return statearr_8421;
})();var statearr_8422_8446 = state_8394__$1;(statearr_8422_8446[2] = null);
(statearr_8422_8446[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8395 === 18))
{var inst_8365 = (state_8394[11]);var inst_8374 = cljs.core.first.call(null,inst_8365);var state_8394__$1 = state_8394;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8394__$1,20,out,inst_8374);
} else
{if((state_val_8395 === 19))
{var inst_8380 = (state_8394[2]);var state_8394__$1 = state_8394;var statearr_8423_8447 = state_8394__$1;(statearr_8423_8447[2] = inst_8380);
(statearr_8423_8447[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8395 === 20))
{var inst_8365 = (state_8394[11]);var inst_8376 = (state_8394[2]);var inst_8377 = cljs.core.next.call(null,inst_8365);var inst_8351 = inst_8377;var inst_8352 = null;var inst_8353 = 0;var inst_8354 = 0;var state_8394__$1 = (function (){var statearr_8424 = state_8394;(statearr_8424[13] = inst_8376);
(statearr_8424[6] = inst_8352);
(statearr_8424[7] = inst_8351);
(statearr_8424[8] = inst_8354);
(statearr_8424[9] = inst_8353);
return statearr_8424;
})();var statearr_8425_8448 = state_8394__$1;(statearr_8425_8448[2] = null);
(statearr_8425_8448[1] = 8);
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
var state_machine__5035__auto____0 = (function (){var statearr_8427 = (new Array(14));(statearr_8427[0] = state_machine__5035__auto__);
(statearr_8427[1] = 1);
return statearr_8427;
});
var state_machine__5035__auto____1 = (function (state_8394){while(true){
var result__5036__auto__ = switch__5034__auto__.call(null,state_8394);if(cljs.core.keyword_identical_QMARK_.call(null,result__5036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5036__auto__;
}
break;
}
});
state_machine__5035__auto__ = function(state_8394){
switch(arguments.length){
case 0:
return state_machine__5035__auto____0.call(this);
case 1:
return state_machine__5035__auto____1.call(this,state_8394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5035__auto____0;
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5035__auto____1;
return state_machine__5035__auto__;
})()
;})(switch__5034__auto__))
})();var state__5086__auto__ = (function (){var statearr_8428 = f__5085__auto__.call(null);(statearr_8428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5084__auto__);
return statearr_8428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5086__auto__);
}));
return c__5084__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5084__auto___8521 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5085__auto__ = (function (){var switch__5034__auto__ = (function (state_8504){var state_val_8505 = (state_8504[1]);if((state_val_8505 === 1))
{var state_8504__$1 = state_8504;var statearr_8506_8522 = state_8504__$1;(statearr_8506_8522[2] = null);
(statearr_8506_8522[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8505 === 2))
{var state_8504__$1 = state_8504;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8504__$1,4,from);
} else
{if((state_val_8505 === 3))
{var inst_8502 = (state_8504[2]);var state_8504__$1 = state_8504;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8504__$1,inst_8502);
} else
{if((state_val_8505 === 4))
{var inst_8487 = (state_8504[5]);var inst_8487__$1 = (state_8504[2]);var inst_8488 = (inst_8487__$1 == null);var state_8504__$1 = (function (){var statearr_8507 = state_8504;(statearr_8507[5] = inst_8487__$1);
return statearr_8507;
})();if(cljs.core.truth_(inst_8488))
{var statearr_8508_8523 = state_8504__$1;(statearr_8508_8523[1] = 5);
} else
{var statearr_8509_8524 = state_8504__$1;(statearr_8509_8524[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8505 === 5))
{var state_8504__$1 = state_8504;if(cljs.core.truth_(close_QMARK_))
{var statearr_8510_8525 = state_8504__$1;(statearr_8510_8525[1] = 8);
} else
{var statearr_8511_8526 = state_8504__$1;(statearr_8511_8526[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8505 === 6))
{var inst_8487 = (state_8504[5]);var state_8504__$1 = state_8504;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8504__$1,11,to,inst_8487);
} else
{if((state_val_8505 === 7))
{var inst_8500 = (state_8504[2]);var state_8504__$1 = state_8504;var statearr_8512_8527 = state_8504__$1;(statearr_8512_8527[2] = inst_8500);
(statearr_8512_8527[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8505 === 8))
{var inst_8491 = cljs.core.async.close_BANG_.call(null,to);var state_8504__$1 = state_8504;var statearr_8513_8528 = state_8504__$1;(statearr_8513_8528[2] = inst_8491);
(statearr_8513_8528[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8505 === 9))
{var state_8504__$1 = state_8504;var statearr_8514_8529 = state_8504__$1;(statearr_8514_8529[2] = null);
(statearr_8514_8529[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8505 === 10))
{var inst_8494 = (state_8504[2]);var state_8504__$1 = state_8504;var statearr_8515_8530 = state_8504__$1;(statearr_8515_8530[2] = inst_8494);
(statearr_8515_8530[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8505 === 11))
{var inst_8497 = (state_8504[2]);var state_8504__$1 = (function (){var statearr_8516 = state_8504;(statearr_8516[6] = inst_8497);
return statearr_8516;
})();var statearr_8517_8531 = state_8504__$1;(statearr_8517_8531[2] = null);
(statearr_8517_8531[1] = 2);
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
var state_machine__5035__auto____0 = (function (){var statearr_8519 = (new Array(7));(statearr_8519[0] = state_machine__5035__auto__);
(statearr_8519[1] = 1);
return statearr_8519;
});
var state_machine__5035__auto____1 = (function (state_8504){while(true){
var result__5036__auto__ = switch__5034__auto__.call(null,state_8504);if(cljs.core.keyword_identical_QMARK_.call(null,result__5036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5036__auto__;
}
break;
}
});
state_machine__5035__auto__ = function(state_8504){
switch(arguments.length){
case 0:
return state_machine__5035__auto____0.call(this);
case 1:
return state_machine__5035__auto____1.call(this,state_8504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5035__auto____0;
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5035__auto____1;
return state_machine__5035__auto__;
})()
;})(switch__5034__auto__))
})();var state__5086__auto__ = (function (){var statearr_8520 = f__5085__auto__.call(null);(statearr_8520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5084__auto___8521);
return statearr_8520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5086__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5084__auto___8610 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5085__auto__ = (function (){var switch__5034__auto__ = (function (state_8592){var state_val_8593 = (state_8592[1]);if((state_val_8593 === 1))
{var state_8592__$1 = state_8592;var statearr_8594_8611 = state_8592__$1;(statearr_8594_8611[2] = null);
(statearr_8594_8611[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8593 === 2))
{var state_8592__$1 = state_8592;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8592__$1,4,ch);
} else
{if((state_val_8593 === 3))
{var inst_8590 = (state_8592[2]);var state_8592__$1 = state_8592;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8592__$1,inst_8590);
} else
{if((state_val_8593 === 4))
{var inst_8573 = (state_8592[5]);var inst_8573__$1 = (state_8592[2]);var inst_8574 = (inst_8573__$1 == null);var state_8592__$1 = (function (){var statearr_8595 = state_8592;(statearr_8595[5] = inst_8573__$1);
return statearr_8595;
})();if(cljs.core.truth_(inst_8574))
{var statearr_8596_8612 = state_8592__$1;(statearr_8596_8612[1] = 5);
} else
{var statearr_8597_8613 = state_8592__$1;(statearr_8597_8613[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8593 === 5))
{var inst_8576 = cljs.core.async.close_BANG_.call(null,tc);var inst_8577 = cljs.core.async.close_BANG_.call(null,fc);var state_8592__$1 = (function (){var statearr_8598 = state_8592;(statearr_8598[6] = inst_8576);
return statearr_8598;
})();var statearr_8599_8614 = state_8592__$1;(statearr_8599_8614[2] = inst_8577);
(statearr_8599_8614[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8593 === 6))
{var inst_8573 = (state_8592[5]);var inst_8579 = p.call(null,inst_8573);var state_8592__$1 = state_8592;if(cljs.core.truth_(inst_8579))
{var statearr_8600_8615 = state_8592__$1;(statearr_8600_8615[1] = 9);
} else
{var statearr_8601_8616 = state_8592__$1;(statearr_8601_8616[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8593 === 7))
{var inst_8588 = (state_8592[2]);var state_8592__$1 = state_8592;var statearr_8602_8617 = state_8592__$1;(statearr_8602_8617[2] = inst_8588);
(statearr_8602_8617[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8593 === 8))
{var inst_8585 = (state_8592[2]);var state_8592__$1 = (function (){var statearr_8603 = state_8592;(statearr_8603[7] = inst_8585);
return statearr_8603;
})();var statearr_8604_8618 = state_8592__$1;(statearr_8604_8618[2] = null);
(statearr_8604_8618[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8593 === 9))
{var state_8592__$1 = state_8592;var statearr_8605_8619 = state_8592__$1;(statearr_8605_8619[2] = tc);
(statearr_8605_8619[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8593 === 10))
{var state_8592__$1 = state_8592;var statearr_8606_8620 = state_8592__$1;(statearr_8606_8620[2] = fc);
(statearr_8606_8620[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8593 === 11))
{var inst_8573 = (state_8592[5]);var inst_8583 = (state_8592[2]);var state_8592__$1 = state_8592;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8592__$1,8,inst_8583,inst_8573);
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
var state_machine__5035__auto____0 = (function (){var statearr_8608 = (new Array(8));(statearr_8608[0] = state_machine__5035__auto__);
(statearr_8608[1] = 1);
return statearr_8608;
});
var state_machine__5035__auto____1 = (function (state_8592){while(true){
var result__5036__auto__ = switch__5034__auto__.call(null,state_8592);if(cljs.core.keyword_identical_QMARK_.call(null,result__5036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5036__auto__;
}
break;
}
});
state_machine__5035__auto__ = function(state_8592){
switch(arguments.length){
case 0:
return state_machine__5035__auto____0.call(this);
case 1:
return state_machine__5035__auto____1.call(this,state_8592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5035__auto____0;
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5035__auto____1;
return state_machine__5035__auto__;
})()
;})(switch__5034__auto__))
})();var state__5086__auto__ = (function (){var statearr_8609 = f__5085__auto__.call(null);(statearr_8609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5084__auto___8610);
return statearr_8609;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5086__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5084__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5085__auto__ = (function (){var switch__5034__auto__ = (function (state_8663){var state_val_8664 = (state_8663[1]);if((state_val_8664 === 7))
{var inst_8659 = (state_8663[2]);var state_8663__$1 = state_8663;var statearr_8665_8677 = state_8663__$1;(statearr_8665_8677[2] = inst_8659);
(statearr_8665_8677[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8664 === 6))
{var inst_8652 = (state_8663[5]);var inst_8649 = (state_8663[6]);var inst_8656 = f.call(null,inst_8649,inst_8652);var inst_8649__$1 = inst_8656;var state_8663__$1 = (function (){var statearr_8666 = state_8663;(statearr_8666[6] = inst_8649__$1);
return statearr_8666;
})();var statearr_8667_8678 = state_8663__$1;(statearr_8667_8678[2] = null);
(statearr_8667_8678[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8664 === 5))
{var inst_8649 = (state_8663[6]);var state_8663__$1 = state_8663;var statearr_8668_8679 = state_8663__$1;(statearr_8668_8679[2] = inst_8649);
(statearr_8668_8679[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8664 === 4))
{var inst_8652 = (state_8663[5]);var inst_8652__$1 = (state_8663[2]);var inst_8653 = (inst_8652__$1 == null);var state_8663__$1 = (function (){var statearr_8669 = state_8663;(statearr_8669[5] = inst_8652__$1);
return statearr_8669;
})();if(cljs.core.truth_(inst_8653))
{var statearr_8670_8680 = state_8663__$1;(statearr_8670_8680[1] = 5);
} else
{var statearr_8671_8681 = state_8663__$1;(statearr_8671_8681[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8664 === 3))
{var inst_8661 = (state_8663[2]);var state_8663__$1 = state_8663;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8663__$1,inst_8661);
} else
{if((state_val_8664 === 2))
{var state_8663__$1 = state_8663;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8663__$1,4,ch);
} else
{if((state_val_8664 === 1))
{var inst_8649 = init;var state_8663__$1 = (function (){var statearr_8672 = state_8663;(statearr_8672[6] = inst_8649);
return statearr_8672;
})();var statearr_8673_8682 = state_8663__$1;(statearr_8673_8682[2] = null);
(statearr_8673_8682[1] = 2);
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
});return ((function (switch__5034__auto__){
return (function() {
var state_machine__5035__auto__ = null;
var state_machine__5035__auto____0 = (function (){var statearr_8675 = (new Array(7));(statearr_8675[0] = state_machine__5035__auto__);
(statearr_8675[1] = 1);
return statearr_8675;
});
var state_machine__5035__auto____1 = (function (state_8663){while(true){
var result__5036__auto__ = switch__5034__auto__.call(null,state_8663);if(cljs.core.keyword_identical_QMARK_.call(null,result__5036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5036__auto__;
}
break;
}
});
state_machine__5035__auto__ = function(state_8663){
switch(arguments.length){
case 0:
return state_machine__5035__auto____0.call(this);
case 1:
return state_machine__5035__auto____1.call(this,state_8663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5035__auto____0;
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5035__auto____1;
return state_machine__5035__auto__;
})()
;})(switch__5034__auto__))
})();var state__5086__auto__ = (function (){var statearr_8676 = f__5085__auto__.call(null);(statearr_8676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5084__auto__);
return statearr_8676;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5086__auto__);
}));
return c__5084__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5084__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5085__auto__ = (function (){var switch__5034__auto__ = (function (state_8740){var state_val_8741 = (state_8740[1]);if((state_val_8741 === 1))
{var inst_8720 = cljs.core.seq.call(null,coll);var inst_8721 = inst_8720;var state_8740__$1 = (function (){var statearr_8742 = state_8740;(statearr_8742[5] = inst_8721);
return statearr_8742;
})();var statearr_8743_8757 = state_8740__$1;(statearr_8743_8757[2] = null);
(statearr_8743_8757[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8741 === 2))
{var inst_8721 = (state_8740[5]);var state_8740__$1 = state_8740;if(cljs.core.truth_(inst_8721))
{var statearr_8744_8758 = state_8740__$1;(statearr_8744_8758[1] = 4);
} else
{var statearr_8745_8759 = state_8740__$1;(statearr_8745_8759[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8741 === 3))
{var inst_8738 = (state_8740[2]);var state_8740__$1 = state_8740;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8740__$1,inst_8738);
} else
{if((state_val_8741 === 4))
{var inst_8721 = (state_8740[5]);var inst_8724 = cljs.core.first.call(null,inst_8721);var state_8740__$1 = state_8740;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8740__$1,7,ch,inst_8724);
} else
{if((state_val_8741 === 5))
{var state_8740__$1 = state_8740;if(cljs.core.truth_(close_QMARK_))
{var statearr_8746_8760 = state_8740__$1;(statearr_8746_8760[1] = 8);
} else
{var statearr_8747_8761 = state_8740__$1;(statearr_8747_8761[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8741 === 6))
{var inst_8736 = (state_8740[2]);var state_8740__$1 = state_8740;var statearr_8748_8762 = state_8740__$1;(statearr_8748_8762[2] = inst_8736);
(statearr_8748_8762[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8741 === 7))
{var inst_8721 = (state_8740[5]);var inst_8726 = (state_8740[2]);var inst_8727 = cljs.core.next.call(null,inst_8721);var inst_8721__$1 = inst_8727;var state_8740__$1 = (function (){var statearr_8749 = state_8740;(statearr_8749[6] = inst_8726);
(statearr_8749[5] = inst_8721__$1);
return statearr_8749;
})();var statearr_8750_8763 = state_8740__$1;(statearr_8750_8763[2] = null);
(statearr_8750_8763[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8741 === 8))
{var inst_8731 = cljs.core.async.close_BANG_.call(null,ch);var state_8740__$1 = state_8740;var statearr_8751_8764 = state_8740__$1;(statearr_8751_8764[2] = inst_8731);
(statearr_8751_8764[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8741 === 9))
{var state_8740__$1 = state_8740;var statearr_8752_8765 = state_8740__$1;(statearr_8752_8765[2] = null);
(statearr_8752_8765[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8741 === 10))
{var inst_8734 = (state_8740[2]);var state_8740__$1 = state_8740;var statearr_8753_8766 = state_8740__$1;(statearr_8753_8766[2] = inst_8734);
(statearr_8753_8766[1] = 6);
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
});return ((function (switch__5034__auto__){
return (function() {
var state_machine__5035__auto__ = null;
var state_machine__5035__auto____0 = (function (){var statearr_8755 = (new Array(7));(statearr_8755[0] = state_machine__5035__auto__);
(statearr_8755[1] = 1);
return statearr_8755;
});
var state_machine__5035__auto____1 = (function (state_8740){while(true){
var result__5036__auto__ = switch__5034__auto__.call(null,state_8740);if(cljs.core.keyword_identical_QMARK_.call(null,result__5036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5036__auto__;
}
break;
}
});
state_machine__5035__auto__ = function(state_8740){
switch(arguments.length){
case 0:
return state_machine__5035__auto____0.call(this);
case 1:
return state_machine__5035__auto____1.call(this,state_8740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5035__auto____0;
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5035__auto____1;
return state_machine__5035__auto__;
})()
;})(switch__5034__auto__))
})();var state__5086__auto__ = (function (){var statearr_8756 = f__5085__auto__.call(null);(statearr_8756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5084__auto__);
return statearr_8756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5086__auto__);
}));
return c__5084__auto__;
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
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3941__auto__ = _;if(and__3941__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3428__auto__ = (((_ == null))?null:_);return (function (){var or__3943__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3428__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3428__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3428__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t8979 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t8979');

/**
* @constructor
*/
cljs.core.async.t8979 = (function (cs,ch,mult,meta8980){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta8980 = meta8980;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8979.cljs$lang$type = true;
cljs.core.async.t8979.cljs$lang$ctorStr = "cljs.core.async/t8979";
cljs.core.async.t8979.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3369__auto__,writer__3370__auto__,opt__3371__auto__){return cljs.core._write.call(null,writer__3370__auto__,"cljs.core.async/t8979");
});})(cs))
;
cljs.core.async.t8979.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t8979.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t8979.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t8979.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t8979.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t8979.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
return self__.ch;
});})(cs))
;
cljs.core.async.t8979.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8981){var self__ = this;
return self__.meta8980;
});})(cs))
;
cljs.core.async.t8979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8981,meta8980__$1){var self__ = this;
return (new cljs.core.async.t8979(self__.cs,self__.ch,self__.mult,meta8980__$1));
});})(cs))
;
cljs.core.async.__GT_t8979 = ((function (cs){
return (function __GT_t8979(cs__$1,ch__$1,mult__$1,meta8980){return (new cljs.core.async.t8979(cs__$1,ch__$1,mult__$1,meta8980));
});})(cs))
;
}
return (new cljs.core.async.t8979(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5084__auto___9191 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5085__auto__ = (function (){var switch__5034__auto__ = (function (state_9109){var state_val_9110 = (state_9109[1]);if((state_val_9110 === 32))
{try{var inst_8984 = (state_9109[5]);var inst_9060 = (state_9109[6]);var inst_9066 = cljs.core.async.put_BANG_.call(null,inst_9060,inst_8984,done);var state_9109__$1 = state_9109;var statearr_9113_9192 = state_9109__$1;(statearr_9113_9192[2] = inst_9066);
(statearr_9113_9192[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e9111){if((e9111 instanceof Object))
{var ex__5028__auto__ = e9111;var statearr_9112_9193 = state_9109;(statearr_9112_9193[1] = 31);
(statearr_9112_9193[2] = ex__5028__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9111;
} else
{return null;
}
}
}} else
{if((state_val_9110 === 1))
{var state_9109__$1 = state_9109;var statearr_9114_9194 = state_9109__$1;(statearr_9114_9194[2] = null);
(statearr_9114_9194[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 33))
{var inst_9072 = (state_9109[7]);var inst_9074 = cljs.core.chunked_seq_QMARK_.call(null,inst_9072);var state_9109__$1 = state_9109;if(inst_9074)
{var statearr_9115_9195 = state_9109__$1;(statearr_9115_9195[1] = 36);
} else
{var statearr_9116_9196 = state_9109__$1;(statearr_9116_9196[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 2))
{var state_9109__$1 = state_9109;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9109__$1,4,ch);
} else
{if((state_val_9110 === 34))
{var state_9109__$1 = state_9109;var statearr_9117_9197 = state_9109__$1;(statearr_9117_9197[2] = null);
(statearr_9117_9197[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 3))
{var inst_9107 = (state_9109[2]);var state_9109__$1 = state_9109;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9109__$1,inst_9107);
} else
{if((state_val_9110 === 35))
{var inst_9096 = (state_9109[2]);var state_9109__$1 = state_9109;var statearr_9118_9198 = state_9109__$1;(statearr_9118_9198[2] = inst_9096);
(statearr_9118_9198[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 4))
{var inst_8984 = (state_9109[5]);var inst_8984__$1 = (state_9109[2]);var inst_8985 = (inst_8984__$1 == null);var state_9109__$1 = (function (){var statearr_9119 = state_9109;(statearr_9119[5] = inst_8984__$1);
return statearr_9119;
})();if(cljs.core.truth_(inst_8985))
{var statearr_9120_9199 = state_9109__$1;(statearr_9120_9199[1] = 5);
} else
{var statearr_9121_9200 = state_9109__$1;(statearr_9121_9200[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 36))
{var inst_9072 = (state_9109[7]);var inst_9076 = cljs.core.chunk_first.call(null,inst_9072);var inst_9077 = cljs.core.chunk_rest.call(null,inst_9072);var inst_9078 = cljs.core.count.call(null,inst_9076);var inst_9052 = inst_9077;var inst_9053 = inst_9076;var inst_9054 = inst_9078;var inst_9055 = 0;var state_9109__$1 = (function (){var statearr_9122 = state_9109;(statearr_9122[8] = inst_9052);
(statearr_9122[9] = inst_9053);
(statearr_9122[10] = inst_9054);
(statearr_9122[11] = inst_9055);
return statearr_9122;
})();var statearr_9123_9201 = state_9109__$1;(statearr_9123_9201[2] = null);
(statearr_9123_9201[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 5))
{var inst_8991 = cljs.core.deref.call(null,cs);var inst_8992 = cljs.core.seq.call(null,inst_8991);var inst_8993 = inst_8992;var inst_8994 = null;var inst_8995 = 0;var inst_8996 = 0;var state_9109__$1 = (function (){var statearr_9124 = state_9109;(statearr_9124[12] = inst_8995);
(statearr_9124[13] = inst_8996);
(statearr_9124[14] = inst_8993);
(statearr_9124[15] = inst_8994);
return statearr_9124;
})();var statearr_9125_9202 = state_9109__$1;(statearr_9125_9202[2] = null);
(statearr_9125_9202[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 37))
{var inst_9072 = (state_9109[7]);var inst_9081 = cljs.core.first.call(null,inst_9072);var state_9109__$1 = (function (){var statearr_9126 = state_9109;(statearr_9126[16] = inst_9081);
return statearr_9126;
})();var statearr_9127_9203 = state_9109__$1;(statearr_9127_9203[2] = null);
(statearr_9127_9203[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 6))
{var inst_9043 = cljs.core.deref.call(null,cs);var inst_9044 = cljs.core.keys.call(null,inst_9043);var inst_9045 = cljs.core.count.call(null,inst_9044);var inst_9046 = cljs.core.reset_BANG_.call(null,dctr,inst_9045);var inst_9051 = cljs.core.seq.call(null,inst_9044);var inst_9052 = inst_9051;var inst_9053 = null;var inst_9054 = 0;var inst_9055 = 0;var state_9109__$1 = (function (){var statearr_9128 = state_9109;(statearr_9128[8] = inst_9052);
(statearr_9128[9] = inst_9053);
(statearr_9128[10] = inst_9054);
(statearr_9128[17] = inst_9046);
(statearr_9128[11] = inst_9055);
return statearr_9128;
})();var statearr_9129_9204 = state_9109__$1;(statearr_9129_9204[2] = null);
(statearr_9129_9204[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 38))
{var inst_9093 = (state_9109[2]);var state_9109__$1 = state_9109;var statearr_9130_9205 = state_9109__$1;(statearr_9130_9205[2] = inst_9093);
(statearr_9130_9205[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 7))
{var inst_9105 = (state_9109[2]);var state_9109__$1 = state_9109;var statearr_9131_9206 = state_9109__$1;(statearr_9131_9206[2] = inst_9105);
(statearr_9131_9206[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 39))
{var inst_9072 = (state_9109[7]);var inst_9089 = (state_9109[2]);var inst_9090 = cljs.core.next.call(null,inst_9072);var inst_9052 = inst_9090;var inst_9053 = null;var inst_9054 = 0;var inst_9055 = 0;var state_9109__$1 = (function (){var statearr_9132 = state_9109;(statearr_9132[8] = inst_9052);
(statearr_9132[9] = inst_9053);
(statearr_9132[10] = inst_9054);
(statearr_9132[18] = inst_9089);
(statearr_9132[11] = inst_9055);
return statearr_9132;
})();var statearr_9133_9207 = state_9109__$1;(statearr_9133_9207[2] = null);
(statearr_9133_9207[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 8))
{var inst_8995 = (state_9109[12]);var inst_8996 = (state_9109[13]);var inst_8998 = (inst_8996 < inst_8995);var inst_8999 = inst_8998;var state_9109__$1 = state_9109;if(cljs.core.truth_(inst_8999))
{var statearr_9134_9208 = state_9109__$1;(statearr_9134_9208[1] = 10);
} else
{var statearr_9135_9209 = state_9109__$1;(statearr_9135_9209[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 40))
{var inst_9081 = (state_9109[16]);var inst_9082 = (state_9109[2]);var inst_9083 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_9084 = cljs.core.async.untap_STAR_.call(null,m,inst_9081);var state_9109__$1 = (function (){var statearr_9136 = state_9109;(statearr_9136[19] = inst_9083);
(statearr_9136[20] = inst_9082);
return statearr_9136;
})();var statearr_9137_9210 = state_9109__$1;(statearr_9137_9210[2] = inst_9084);
(statearr_9137_9210[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 9))
{var inst_9041 = (state_9109[2]);var state_9109__$1 = state_9109;var statearr_9138_9211 = state_9109__$1;(statearr_9138_9211[2] = inst_9041);
(statearr_9138_9211[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 41))
{try{var inst_8984 = (state_9109[5]);var inst_9081 = (state_9109[16]);var inst_9087 = cljs.core.async.put_BANG_.call(null,inst_9081,inst_8984,done);var state_9109__$1 = state_9109;var statearr_9141_9212 = state_9109__$1;(statearr_9141_9212[2] = inst_9087);
(statearr_9141_9212[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e9139){if((e9139 instanceof Object))
{var ex__5028__auto__ = e9139;var statearr_9140_9213 = state_9109;(statearr_9140_9213[1] = 40);
(statearr_9140_9213[2] = ex__5028__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9139;
} else
{return null;
}
}
}} else
{if((state_val_9110 === 10))
{var inst_8996 = (state_9109[13]);var inst_8994 = (state_9109[15]);var inst_9002 = cljs.core._nth.call(null,inst_8994,inst_8996);var inst_9003 = cljs.core.nth.call(null,inst_9002,0,null);var inst_9004 = cljs.core.nth.call(null,inst_9002,1,null);var state_9109__$1 = (function (){var statearr_9142 = state_9109;(statearr_9142[21] = inst_9003);
return statearr_9142;
})();if(cljs.core.truth_(inst_9004))
{var statearr_9143_9214 = state_9109__$1;(statearr_9143_9214[1] = 13);
} else
{var statearr_9144_9215 = state_9109__$1;(statearr_9144_9215[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 42))
{var inst_9102 = (state_9109[2]);var state_9109__$1 = (function (){var statearr_9145 = state_9109;(statearr_9145[22] = inst_9102);
return statearr_9145;
})();var statearr_9146_9216 = state_9109__$1;(statearr_9146_9216[2] = null);
(statearr_9146_9216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 11))
{var inst_8993 = (state_9109[14]);var inst_9013 = (state_9109[23]);var inst_9013__$1 = cljs.core.seq.call(null,inst_8993);var state_9109__$1 = (function (){var statearr_9147 = state_9109;(statearr_9147[23] = inst_9013__$1);
return statearr_9147;
})();if(inst_9013__$1)
{var statearr_9148_9217 = state_9109__$1;(statearr_9148_9217[1] = 16);
} else
{var statearr_9149_9218 = state_9109__$1;(statearr_9149_9218[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 12))
{var inst_9039 = (state_9109[2]);var state_9109__$1 = state_9109;var statearr_9150_9219 = state_9109__$1;(statearr_9150_9219[2] = inst_9039);
(statearr_9150_9219[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 13))
{var inst_9003 = (state_9109[21]);var inst_9006 = cljs.core.async.close_BANG_.call(null,inst_9003);var state_9109__$1 = state_9109;var statearr_9154_9220 = state_9109__$1;(statearr_9154_9220[2] = inst_9006);
(statearr_9154_9220[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 14))
{var state_9109__$1 = state_9109;var statearr_9155_9221 = state_9109__$1;(statearr_9155_9221[2] = null);
(statearr_9155_9221[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 15))
{var inst_8995 = (state_9109[12]);var inst_8996 = (state_9109[13]);var inst_8993 = (state_9109[14]);var inst_8994 = (state_9109[15]);var inst_9009 = (state_9109[2]);var inst_9010 = (inst_8996 + 1);var tmp9151 = inst_8995;var tmp9152 = inst_8993;var tmp9153 = inst_8994;var inst_8993__$1 = tmp9152;var inst_8994__$1 = tmp9153;var inst_8995__$1 = tmp9151;var inst_8996__$1 = inst_9010;var state_9109__$1 = (function (){var statearr_9156 = state_9109;(statearr_9156[12] = inst_8995__$1);
(statearr_9156[13] = inst_8996__$1);
(statearr_9156[14] = inst_8993__$1);
(statearr_9156[15] = inst_8994__$1);
(statearr_9156[24] = inst_9009);
return statearr_9156;
})();var statearr_9157_9222 = state_9109__$1;(statearr_9157_9222[2] = null);
(statearr_9157_9222[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 16))
{var inst_9013 = (state_9109[23]);var inst_9015 = cljs.core.chunked_seq_QMARK_.call(null,inst_9013);var state_9109__$1 = state_9109;if(inst_9015)
{var statearr_9158_9223 = state_9109__$1;(statearr_9158_9223[1] = 19);
} else
{var statearr_9159_9224 = state_9109__$1;(statearr_9159_9224[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 17))
{var state_9109__$1 = state_9109;var statearr_9160_9225 = state_9109__$1;(statearr_9160_9225[2] = null);
(statearr_9160_9225[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 18))
{var inst_9037 = (state_9109[2]);var state_9109__$1 = state_9109;var statearr_9161_9226 = state_9109__$1;(statearr_9161_9226[2] = inst_9037);
(statearr_9161_9226[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 19))
{var inst_9013 = (state_9109[23]);var inst_9017 = cljs.core.chunk_first.call(null,inst_9013);var inst_9018 = cljs.core.chunk_rest.call(null,inst_9013);var inst_9019 = cljs.core.count.call(null,inst_9017);var inst_8993 = inst_9018;var inst_8994 = inst_9017;var inst_8995 = inst_9019;var inst_8996 = 0;var state_9109__$1 = (function (){var statearr_9162 = state_9109;(statearr_9162[12] = inst_8995);
(statearr_9162[13] = inst_8996);
(statearr_9162[14] = inst_8993);
(statearr_9162[15] = inst_8994);
return statearr_9162;
})();var statearr_9163_9227 = state_9109__$1;(statearr_9163_9227[2] = null);
(statearr_9163_9227[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 20))
{var inst_9013 = (state_9109[23]);var inst_9023 = cljs.core.first.call(null,inst_9013);var inst_9024 = cljs.core.nth.call(null,inst_9023,0,null);var inst_9025 = cljs.core.nth.call(null,inst_9023,1,null);var state_9109__$1 = (function (){var statearr_9164 = state_9109;(statearr_9164[25] = inst_9024);
return statearr_9164;
})();if(cljs.core.truth_(inst_9025))
{var statearr_9165_9228 = state_9109__$1;(statearr_9165_9228[1] = 22);
} else
{var statearr_9166_9229 = state_9109__$1;(statearr_9166_9229[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 21))
{var inst_9034 = (state_9109[2]);var state_9109__$1 = state_9109;var statearr_9167_9230 = state_9109__$1;(statearr_9167_9230[2] = inst_9034);
(statearr_9167_9230[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 22))
{var inst_9024 = (state_9109[25]);var inst_9027 = cljs.core.async.close_BANG_.call(null,inst_9024);var state_9109__$1 = state_9109;var statearr_9168_9231 = state_9109__$1;(statearr_9168_9231[2] = inst_9027);
(statearr_9168_9231[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 23))
{var state_9109__$1 = state_9109;var statearr_9169_9232 = state_9109__$1;(statearr_9169_9232[2] = null);
(statearr_9169_9232[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 24))
{var inst_9013 = (state_9109[23]);var inst_9030 = (state_9109[2]);var inst_9031 = cljs.core.next.call(null,inst_9013);var inst_8993 = inst_9031;var inst_8994 = null;var inst_8995 = 0;var inst_8996 = 0;var state_9109__$1 = (function (){var statearr_9170 = state_9109;(statearr_9170[12] = inst_8995);
(statearr_9170[26] = inst_9030);
(statearr_9170[13] = inst_8996);
(statearr_9170[14] = inst_8993);
(statearr_9170[15] = inst_8994);
return statearr_9170;
})();var statearr_9171_9233 = state_9109__$1;(statearr_9171_9233[2] = null);
(statearr_9171_9233[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 25))
{var inst_9054 = (state_9109[10]);var inst_9055 = (state_9109[11]);var inst_9057 = (inst_9055 < inst_9054);var inst_9058 = inst_9057;var state_9109__$1 = state_9109;if(cljs.core.truth_(inst_9058))
{var statearr_9172_9234 = state_9109__$1;(statearr_9172_9234[1] = 27);
} else
{var statearr_9173_9235 = state_9109__$1;(statearr_9173_9235[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 26))
{var inst_9100 = (state_9109[2]);var state_9109__$1 = (function (){var statearr_9174 = state_9109;(statearr_9174[27] = inst_9100);
return statearr_9174;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9109__$1,42,dchan);
} else
{if((state_val_9110 === 27))
{var inst_9053 = (state_9109[9]);var inst_9055 = (state_9109[11]);var inst_9060 = cljs.core._nth.call(null,inst_9053,inst_9055);var state_9109__$1 = (function (){var statearr_9175 = state_9109;(statearr_9175[6] = inst_9060);
return statearr_9175;
})();var statearr_9176_9236 = state_9109__$1;(statearr_9176_9236[2] = null);
(statearr_9176_9236[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 28))
{var inst_9052 = (state_9109[8]);var inst_9072 = (state_9109[7]);var inst_9072__$1 = cljs.core.seq.call(null,inst_9052);var state_9109__$1 = (function (){var statearr_9180 = state_9109;(statearr_9180[7] = inst_9072__$1);
return statearr_9180;
})();if(inst_9072__$1)
{var statearr_9181_9237 = state_9109__$1;(statearr_9181_9237[1] = 33);
} else
{var statearr_9182_9238 = state_9109__$1;(statearr_9182_9238[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 29))
{var inst_9098 = (state_9109[2]);var state_9109__$1 = state_9109;var statearr_9183_9239 = state_9109__$1;(statearr_9183_9239[2] = inst_9098);
(statearr_9183_9239[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 30))
{var inst_9052 = (state_9109[8]);var inst_9053 = (state_9109[9]);var inst_9054 = (state_9109[10]);var inst_9055 = (state_9109[11]);var inst_9068 = (state_9109[2]);var inst_9069 = (inst_9055 + 1);var tmp9177 = inst_9052;var tmp9178 = inst_9053;var tmp9179 = inst_9054;var inst_9052__$1 = tmp9177;var inst_9053__$1 = tmp9178;var inst_9054__$1 = tmp9179;var inst_9055__$1 = inst_9069;var state_9109__$1 = (function (){var statearr_9184 = state_9109;(statearr_9184[8] = inst_9052__$1);
(statearr_9184[9] = inst_9053__$1);
(statearr_9184[10] = inst_9054__$1);
(statearr_9184[28] = inst_9068);
(statearr_9184[11] = inst_9055__$1);
return statearr_9184;
})();var statearr_9185_9240 = state_9109__$1;(statearr_9185_9240[2] = null);
(statearr_9185_9240[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9110 === 31))
{var inst_9060 = (state_9109[6]);var inst_9061 = (state_9109[2]);var inst_9062 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_9063 = cljs.core.async.untap_STAR_.call(null,m,inst_9060);var state_9109__$1 = (function (){var statearr_9186 = state_9109;(statearr_9186[29] = inst_9062);
(statearr_9186[30] = inst_9061);
return statearr_9186;
})();var statearr_9187_9241 = state_9109__$1;(statearr_9187_9241[2] = inst_9063);
(statearr_9187_9241[1] = 30);
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
});return ((function (switch__5034__auto__){
return (function() {
var state_machine__5035__auto__ = null;
var state_machine__5035__auto____0 = (function (){var statearr_9189 = (new Array(31));(statearr_9189[0] = state_machine__5035__auto__);
(statearr_9189[1] = 1);
return statearr_9189;
});
var state_machine__5035__auto____1 = (function (state_9109){while(true){
var result__5036__auto__ = switch__5034__auto__.call(null,state_9109);if(cljs.core.keyword_identical_QMARK_.call(null,result__5036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5036__auto__;
}
break;
}
});
state_machine__5035__auto__ = function(state_9109){
switch(arguments.length){
case 0:
return state_machine__5035__auto____0.call(this);
case 1:
return state_machine__5035__auto____1.call(this,state_9109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5035__auto____0;
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5035__auto____1;
return state_machine__5035__auto__;
})()
;})(switch__5034__auto__))
})();var state__5086__auto__ = (function (){var statearr_9190 = f__5085__auto__.call(null);(statearr_9190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5084__auto___9191);
return statearr_9190;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5086__auto__);
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
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3428__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3428__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3428__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3428__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3428__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424));if(and__3941__auto__)
{return !(cljs.core.empty_QMARK_.call(null,solos));
} else
{return and__3941__auto__;
}
})())?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], true);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t9362 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t9362');

/**
* @constructor
*/
cljs.core.async.t9362 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta9363){
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
this.meta9363 = meta9363;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9362.cljs$lang$type = true;
cljs.core.async.t9362.cljs$lang$ctorStr = "cljs.core.async/t9362";
cljs.core.async.t9362.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3369__auto__,writer__3370__auto__,opt__3371__auto__){return cljs.core._write.call(null,writer__3370__auto__,"cljs.core.async/t9362");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9362.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t9362.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9362.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9362.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9362.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9362.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9362.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t9362.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9362.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9364){var self__ = this;
return self__.meta9363;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9364,meta9363__$1){var self__ = this;
return (new cljs.core.async.t9362(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta9363__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t9362 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t9362(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta9363){return (new cljs.core.async.t9362(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta9363));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t9362(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5084__auto___9482 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5085__auto__ = (function (){var switch__5034__auto__ = (function (state_9435){var state_val_9436 = (state_9435[1]);if((state_val_9436 === 1))
{var inst_9368 = (state_9435[5]);var inst_9368__$1 = calc_state.call(null);var inst_9369 = cljs.core.seq_QMARK_.call(null,inst_9368__$1);var state_9435__$1 = (function (){var statearr_9437 = state_9435;(statearr_9437[5] = inst_9368__$1);
return statearr_9437;
})();if(inst_9369)
{var statearr_9438_9483 = state_9435__$1;(statearr_9438_9483[1] = 2);
} else
{var statearr_9439_9484 = state_9435__$1;(statearr_9439_9484[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 2))
{var inst_9368 = (state_9435[5]);var inst_9371 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9368);var state_9435__$1 = state_9435;var statearr_9440_9485 = state_9435__$1;(statearr_9440_9485[2] = inst_9371);
(statearr_9440_9485[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 3))
{var inst_9368 = (state_9435[5]);var state_9435__$1 = state_9435;var statearr_9441_9486 = state_9435__$1;(statearr_9441_9486[2] = inst_9368);
(statearr_9441_9486[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 4))
{var inst_9368 = (state_9435[5]);var inst_9374 = (state_9435[2]);var inst_9375 = cljs.core.get.call(null,inst_9374,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_9376 = cljs.core.get.call(null,inst_9374,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_9377 = cljs.core.get.call(null,inst_9374,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_9378 = inst_9368;var state_9435__$1 = (function (){var statearr_9442 = state_9435;(statearr_9442[6] = inst_9378);
(statearr_9442[7] = inst_9375);
(statearr_9442[8] = inst_9377);
(statearr_9442[9] = inst_9376);
return statearr_9442;
})();var statearr_9443_9487 = state_9435__$1;(statearr_9443_9487[2] = null);
(statearr_9443_9487[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 5))
{var inst_9378 = (state_9435[6]);var inst_9381 = cljs.core.seq_QMARK_.call(null,inst_9378);var state_9435__$1 = state_9435;if(inst_9381)
{var statearr_9444_9488 = state_9435__$1;(statearr_9444_9488[1] = 7);
} else
{var statearr_9445_9489 = state_9435__$1;(statearr_9445_9489[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 6))
{var inst_9433 = (state_9435[2]);var state_9435__$1 = state_9435;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9435__$1,inst_9433);
} else
{if((state_val_9436 === 7))
{var inst_9378 = (state_9435[6]);var inst_9383 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9378);var state_9435__$1 = state_9435;var statearr_9446_9490 = state_9435__$1;(statearr_9446_9490[2] = inst_9383);
(statearr_9446_9490[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 8))
{var inst_9378 = (state_9435[6]);var state_9435__$1 = state_9435;var statearr_9447_9491 = state_9435__$1;(statearr_9447_9491[2] = inst_9378);
(statearr_9447_9491[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 9))
{var inst_9386 = (state_9435[10]);var inst_9386__$1 = (state_9435[2]);var inst_9387 = cljs.core.get.call(null,inst_9386__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_9388 = cljs.core.get.call(null,inst_9386__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_9389 = cljs.core.get.call(null,inst_9386__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_9435__$1 = (function (){var statearr_9448 = state_9435;(statearr_9448[11] = inst_9389);
(statearr_9448[10] = inst_9386__$1);
(statearr_9448[12] = inst_9388);
return statearr_9448;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_9435__$1,10,inst_9387);
} else
{if((state_val_9436 === 10))
{var inst_9393 = (state_9435[13]);var inst_9395 = (state_9435[14]);var inst_9392 = (state_9435[2]);var inst_9393__$1 = cljs.core.nth.call(null,inst_9392,0,null);var inst_9394 = cljs.core.nth.call(null,inst_9392,1,null);var inst_9395__$1 = (inst_9393__$1 == null);var state_9435__$1 = (function (){var statearr_9449 = state_9435;(statearr_9449[13] = inst_9393__$1);
(statearr_9449[15] = inst_9394);
(statearr_9449[14] = inst_9395__$1);
return statearr_9449;
})();if(cljs.core.truth_(inst_9395__$1))
{var statearr_9450_9492 = state_9435__$1;(statearr_9450_9492[1] = 11);
} else
{var statearr_9451_9493 = state_9435__$1;(statearr_9451_9493[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 11))
{var inst_9395 = (state_9435[14]);var state_9435__$1 = state_9435;var statearr_9452_9494 = state_9435__$1;(statearr_9452_9494[2] = inst_9395);
(statearr_9452_9494[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 12))
{var inst_9394 = (state_9435[15]);var inst_9398 = cljs.core._EQ_.call(null,inst_9394,change);var state_9435__$1 = state_9435;var statearr_9453_9495 = state_9435__$1;(statearr_9453_9495[2] = inst_9398);
(statearr_9453_9495[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 13))
{var inst_9400 = (state_9435[2]);var state_9435__$1 = state_9435;if(cljs.core.truth_(inst_9400))
{var statearr_9454_9496 = state_9435__$1;(statearr_9454_9496[1] = 14);
} else
{var statearr_9455_9497 = state_9435__$1;(statearr_9455_9497[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 14))
{var inst_9393 = (state_9435[13]);var inst_9402 = (inst_9393 == null);var state_9435__$1 = state_9435;if(cljs.core.truth_(inst_9402))
{var statearr_9456_9498 = state_9435__$1;(statearr_9456_9498[1] = 17);
} else
{var statearr_9457_9499 = state_9435__$1;(statearr_9457_9499[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 15))
{var inst_9389 = (state_9435[11]);var inst_9394 = (state_9435[15]);var inst_9411 = (state_9435[16]);var inst_9411__$1 = inst_9389.call(null,inst_9394);var state_9435__$1 = (function (){var statearr_9458 = state_9435;(statearr_9458[16] = inst_9411__$1);
return statearr_9458;
})();if(cljs.core.truth_(inst_9411__$1))
{var statearr_9459_9500 = state_9435__$1;(statearr_9459_9500[1] = 20);
} else
{var statearr_9460_9501 = state_9435__$1;(statearr_9460_9501[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 16))
{var inst_9431 = (state_9435[2]);var state_9435__$1 = state_9435;var statearr_9461_9502 = state_9435__$1;(statearr_9461_9502[2] = inst_9431);
(statearr_9461_9502[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 17))
{var inst_9394 = (state_9435[15]);var inst_9404 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_9394);var state_9435__$1 = state_9435;var statearr_9462_9503 = state_9435__$1;(statearr_9462_9503[2] = inst_9404);
(statearr_9462_9503[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 18))
{var state_9435__$1 = state_9435;var statearr_9463_9504 = state_9435__$1;(statearr_9463_9504[2] = null);
(statearr_9463_9504[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 19))
{var inst_9407 = (state_9435[2]);var inst_9408 = calc_state.call(null);var inst_9378 = inst_9408;var state_9435__$1 = (function (){var statearr_9464 = state_9435;(statearr_9464[6] = inst_9378);
(statearr_9464[17] = inst_9407);
return statearr_9464;
})();var statearr_9465_9505 = state_9435__$1;(statearr_9465_9505[2] = null);
(statearr_9465_9505[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 20))
{var inst_9411 = (state_9435[16]);var state_9435__$1 = state_9435;var statearr_9466_9506 = state_9435__$1;(statearr_9466_9506[2] = inst_9411);
(statearr_9466_9506[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 21))
{var inst_9389 = (state_9435[11]);var inst_9414 = (state_9435[18]);var inst_9414__$1 = cljs.core.empty_QMARK_.call(null,inst_9389);var state_9435__$1 = (function (){var statearr_9467 = state_9435;(statearr_9467[18] = inst_9414__$1);
return statearr_9467;
})();if(inst_9414__$1)
{var statearr_9468_9507 = state_9435__$1;(statearr_9468_9507[1] = 23);
} else
{var statearr_9469_9508 = state_9435__$1;(statearr_9469_9508[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 22))
{var inst_9422 = (state_9435[2]);var state_9435__$1 = state_9435;if(cljs.core.truth_(inst_9422))
{var statearr_9470_9509 = state_9435__$1;(statearr_9470_9509[1] = 26);
} else
{var statearr_9471_9510 = state_9435__$1;(statearr_9471_9510[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 23))
{var inst_9388 = (state_9435[12]);var inst_9394 = (state_9435[15]);var inst_9416 = inst_9388.call(null,inst_9394);var inst_9417 = cljs.core.not.call(null,inst_9416);var state_9435__$1 = state_9435;var statearr_9472_9511 = state_9435__$1;(statearr_9472_9511[2] = inst_9417);
(statearr_9472_9511[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 24))
{var inst_9414 = (state_9435[18]);var state_9435__$1 = state_9435;var statearr_9473_9512 = state_9435__$1;(statearr_9473_9512[2] = inst_9414);
(statearr_9473_9512[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 25))
{var inst_9420 = (state_9435[2]);var state_9435__$1 = state_9435;var statearr_9474_9513 = state_9435__$1;(statearr_9474_9513[2] = inst_9420);
(statearr_9474_9513[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 26))
{var inst_9393 = (state_9435[13]);var state_9435__$1 = state_9435;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9435__$1,29,out,inst_9393);
} else
{if((state_val_9436 === 27))
{var state_9435__$1 = state_9435;var statearr_9475_9514 = state_9435__$1;(statearr_9475_9514[2] = null);
(statearr_9475_9514[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 28))
{var inst_9386 = (state_9435[10]);var inst_9428 = (state_9435[2]);var inst_9378 = inst_9386;var state_9435__$1 = (function (){var statearr_9476 = state_9435;(statearr_9476[19] = inst_9428);
(statearr_9476[6] = inst_9378);
return statearr_9476;
})();var statearr_9477_9515 = state_9435__$1;(statearr_9477_9515[2] = null);
(statearr_9477_9515[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9436 === 29))
{var inst_9425 = (state_9435[2]);var state_9435__$1 = state_9435;var statearr_9478_9516 = state_9435__$1;(statearr_9478_9516[2] = inst_9425);
(statearr_9478_9516[1] = 28);
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
});return ((function (switch__5034__auto__){
return (function() {
var state_machine__5035__auto__ = null;
var state_machine__5035__auto____0 = (function (){var statearr_9480 = (new Array(20));(statearr_9480[0] = state_machine__5035__auto__);
(statearr_9480[1] = 1);
return statearr_9480;
});
var state_machine__5035__auto____1 = (function (state_9435){while(true){
var result__5036__auto__ = switch__5034__auto__.call(null,state_9435);if(cljs.core.keyword_identical_QMARK_.call(null,result__5036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5036__auto__;
}
break;
}
});
state_machine__5035__auto__ = function(state_9435){
switch(arguments.length){
case 0:
return state_machine__5035__auto____0.call(this);
case 1:
return state_machine__5035__auto____1.call(this,state_9435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5035__auto____0;
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5035__auto____1;
return state_machine__5035__auto__;
})()
;})(switch__5034__auto__))
})();var state__5086__auto__ = (function (){var statearr_9481 = f__5085__auto__.call(null);(statearr_9481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5084__auto___9482);
return statearr_9481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5086__auto__);
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
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3941__auto__ = p;if(and__3941__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3941__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3428__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3941__auto__ = p;if(and__3941__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3941__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3428__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3941__auto__ = p;if(and__3941__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3428__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3941__auto__ = p;if(and__3941__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3428__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3428__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
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
return (function (topic){var or__3943__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3943__auto__,mults){
return (function (p1__9517_SHARP_){if(cljs.core.truth_(p1__9517_SHARP_.call(null,topic)))
{return p1__9517_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__9517_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3943__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t9641 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t9641');

/**
* @constructor
*/
cljs.core.async.t9641 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta9642){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta9642 = meta9642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9641.cljs$lang$type = true;
cljs.core.async.t9641.cljs$lang$ctorStr = "cljs.core.async/t9641";
cljs.core.async.t9641.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3369__auto__,writer__3370__auto__,opt__3371__auto__){return cljs.core._write.call(null,writer__3370__auto__,"cljs.core.async/t9641");
});})(mults,ensure_mult))
;
cljs.core.async.t9641.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t9641.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t9641.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t9641.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t9641.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t9641.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t9641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t9641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_9643){var self__ = this;
return self__.meta9642;
});})(mults,ensure_mult))
;
cljs.core.async.t9641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_9643,meta9642__$1){var self__ = this;
return (new cljs.core.async.t9641(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta9642__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t9641 = ((function (mults,ensure_mult){
return (function __GT_t9641(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta9642){return (new cljs.core.async.t9641(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta9642));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t9641(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5084__auto___9764 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5085__auto__ = (function (){var switch__5034__auto__ = (function (state_9716){var state_val_9717 = (state_9716[1]);if((state_val_9717 === 1))
{var state_9716__$1 = state_9716;var statearr_9718_9765 = state_9716__$1;(statearr_9718_9765[2] = null);
(statearr_9718_9765[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 2))
{var state_9716__$1 = state_9716;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9716__$1,4,ch);
} else
{if((state_val_9717 === 3))
{var inst_9714 = (state_9716[2]);var state_9716__$1 = state_9716;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9716__$1,inst_9714);
} else
{if((state_val_9717 === 4))
{var inst_9646 = (state_9716[5]);var inst_9646__$1 = (state_9716[2]);var inst_9647 = (inst_9646__$1 == null);var state_9716__$1 = (function (){var statearr_9719 = state_9716;(statearr_9719[5] = inst_9646__$1);
return statearr_9719;
})();if(cljs.core.truth_(inst_9647))
{var statearr_9720_9766 = state_9716__$1;(statearr_9720_9766[1] = 5);
} else
{var statearr_9721_9767 = state_9716__$1;(statearr_9721_9767[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 5))
{var inst_9653 = cljs.core.deref.call(null,mults);var inst_9654 = cljs.core.vals.call(null,inst_9653);var inst_9655 = cljs.core.seq.call(null,inst_9654);var inst_9656 = inst_9655;var inst_9657 = null;var inst_9658 = 0;var inst_9659 = 0;var state_9716__$1 = (function (){var statearr_9722 = state_9716;(statearr_9722[6] = inst_9659);
(statearr_9722[7] = inst_9658);
(statearr_9722[8] = inst_9657);
(statearr_9722[9] = inst_9656);
return statearr_9722;
})();var statearr_9723_9768 = state_9716__$1;(statearr_9723_9768[2] = null);
(statearr_9723_9768[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 6))
{var inst_9694 = (state_9716[10]);var inst_9696 = (state_9716[11]);var inst_9646 = (state_9716[5]);var inst_9694__$1 = topic_fn.call(null,inst_9646);var inst_9695 = cljs.core.deref.call(null,mults);var inst_9696__$1 = cljs.core.get.call(null,inst_9695,inst_9694__$1);var state_9716__$1 = (function (){var statearr_9724 = state_9716;(statearr_9724[10] = inst_9694__$1);
(statearr_9724[11] = inst_9696__$1);
return statearr_9724;
})();if(cljs.core.truth_(inst_9696__$1))
{var statearr_9725_9769 = state_9716__$1;(statearr_9725_9769[1] = 19);
} else
{var statearr_9726_9770 = state_9716__$1;(statearr_9726_9770[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 7))
{var inst_9712 = (state_9716[2]);var state_9716__$1 = state_9716;var statearr_9727_9771 = state_9716__$1;(statearr_9727_9771[2] = inst_9712);
(statearr_9727_9771[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 8))
{var inst_9659 = (state_9716[6]);var inst_9658 = (state_9716[7]);var inst_9661 = (inst_9659 < inst_9658);var inst_9662 = inst_9661;var state_9716__$1 = state_9716;if(cljs.core.truth_(inst_9662))
{var statearr_9731_9772 = state_9716__$1;(statearr_9731_9772[1] = 10);
} else
{var statearr_9732_9773 = state_9716__$1;(statearr_9732_9773[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 9))
{var inst_9692 = (state_9716[2]);var state_9716__$1 = state_9716;var statearr_9733_9774 = state_9716__$1;(statearr_9733_9774[2] = inst_9692);
(statearr_9733_9774[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 10))
{var inst_9659 = (state_9716[6]);var inst_9658 = (state_9716[7]);var inst_9657 = (state_9716[8]);var inst_9656 = (state_9716[9]);var inst_9664 = cljs.core._nth.call(null,inst_9657,inst_9659);var inst_9665 = cljs.core.async.muxch_STAR_.call(null,inst_9664);var inst_9666 = cljs.core.async.close_BANG_.call(null,inst_9665);var inst_9667 = (inst_9659 + 1);var tmp9728 = inst_9658;var tmp9729 = inst_9657;var tmp9730 = inst_9656;var inst_9656__$1 = tmp9730;var inst_9657__$1 = tmp9729;var inst_9658__$1 = tmp9728;var inst_9659__$1 = inst_9667;var state_9716__$1 = (function (){var statearr_9734 = state_9716;(statearr_9734[12] = inst_9666);
(statearr_9734[6] = inst_9659__$1);
(statearr_9734[7] = inst_9658__$1);
(statearr_9734[8] = inst_9657__$1);
(statearr_9734[9] = inst_9656__$1);
return statearr_9734;
})();var statearr_9735_9775 = state_9716__$1;(statearr_9735_9775[2] = null);
(statearr_9735_9775[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 11))
{var inst_9670 = (state_9716[13]);var inst_9656 = (state_9716[9]);var inst_9670__$1 = cljs.core.seq.call(null,inst_9656);var state_9716__$1 = (function (){var statearr_9736 = state_9716;(statearr_9736[13] = inst_9670__$1);
return statearr_9736;
})();if(inst_9670__$1)
{var statearr_9737_9776 = state_9716__$1;(statearr_9737_9776[1] = 13);
} else
{var statearr_9738_9777 = state_9716__$1;(statearr_9738_9777[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 12))
{var inst_9690 = (state_9716[2]);var state_9716__$1 = state_9716;var statearr_9739_9778 = state_9716__$1;(statearr_9739_9778[2] = inst_9690);
(statearr_9739_9778[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 13))
{var inst_9670 = (state_9716[13]);var inst_9672 = cljs.core.chunked_seq_QMARK_.call(null,inst_9670);var state_9716__$1 = state_9716;if(inst_9672)
{var statearr_9740_9779 = state_9716__$1;(statearr_9740_9779[1] = 16);
} else
{var statearr_9741_9780 = state_9716__$1;(statearr_9741_9780[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 14))
{var state_9716__$1 = state_9716;var statearr_9742_9781 = state_9716__$1;(statearr_9742_9781[2] = null);
(statearr_9742_9781[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 15))
{var inst_9688 = (state_9716[2]);var state_9716__$1 = state_9716;var statearr_9743_9782 = state_9716__$1;(statearr_9743_9782[2] = inst_9688);
(statearr_9743_9782[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 16))
{var inst_9670 = (state_9716[13]);var inst_9674 = cljs.core.chunk_first.call(null,inst_9670);var inst_9675 = cljs.core.chunk_rest.call(null,inst_9670);var inst_9676 = cljs.core.count.call(null,inst_9674);var inst_9656 = inst_9675;var inst_9657 = inst_9674;var inst_9658 = inst_9676;var inst_9659 = 0;var state_9716__$1 = (function (){var statearr_9744 = state_9716;(statearr_9744[6] = inst_9659);
(statearr_9744[7] = inst_9658);
(statearr_9744[8] = inst_9657);
(statearr_9744[9] = inst_9656);
return statearr_9744;
})();var statearr_9745_9783 = state_9716__$1;(statearr_9745_9783[2] = null);
(statearr_9745_9783[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 17))
{var inst_9670 = (state_9716[13]);var inst_9679 = cljs.core.first.call(null,inst_9670);var inst_9680 = cljs.core.async.muxch_STAR_.call(null,inst_9679);var inst_9681 = cljs.core.async.close_BANG_.call(null,inst_9680);var inst_9682 = cljs.core.next.call(null,inst_9670);var inst_9656 = inst_9682;var inst_9657 = null;var inst_9658 = 0;var inst_9659 = 0;var state_9716__$1 = (function (){var statearr_9746 = state_9716;(statearr_9746[14] = inst_9681);
(statearr_9746[6] = inst_9659);
(statearr_9746[7] = inst_9658);
(statearr_9746[8] = inst_9657);
(statearr_9746[9] = inst_9656);
return statearr_9746;
})();var statearr_9747_9784 = state_9716__$1;(statearr_9747_9784[2] = null);
(statearr_9747_9784[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 18))
{var inst_9685 = (state_9716[2]);var state_9716__$1 = state_9716;var statearr_9748_9785 = state_9716__$1;(statearr_9748_9785[2] = inst_9685);
(statearr_9748_9785[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 19))
{var state_9716__$1 = state_9716;var statearr_9749_9786 = state_9716__$1;(statearr_9749_9786[2] = null);
(statearr_9749_9786[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 20))
{var state_9716__$1 = state_9716;var statearr_9750_9787 = state_9716__$1;(statearr_9750_9787[2] = null);
(statearr_9750_9787[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 21))
{var inst_9709 = (state_9716[2]);var state_9716__$1 = (function (){var statearr_9751 = state_9716;(statearr_9751[15] = inst_9709);
return statearr_9751;
})();var statearr_9752_9788 = state_9716__$1;(statearr_9752_9788[2] = null);
(statearr_9752_9788[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 22))
{var inst_9706 = (state_9716[2]);var state_9716__$1 = state_9716;var statearr_9753_9789 = state_9716__$1;(statearr_9753_9789[2] = inst_9706);
(statearr_9753_9789[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 23))
{var inst_9694 = (state_9716[10]);var inst_9698 = (state_9716[2]);var inst_9699 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_9694);var state_9716__$1 = (function (){var statearr_9754 = state_9716;(statearr_9754[16] = inst_9698);
return statearr_9754;
})();var statearr_9755_9790 = state_9716__$1;(statearr_9755_9790[2] = inst_9699);
(statearr_9755_9790[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9717 === 24))
{try{var inst_9696 = (state_9716[11]);var inst_9646 = (state_9716[5]);var inst_9702 = cljs.core.async.muxch_STAR_.call(null,inst_9696);var state_9716__$1 = state_9716;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9716__$1,25,inst_9702,inst_9646);
}catch (e9756){if((e9756 instanceof Object))
{var ex__5028__auto__ = e9756;var statearr_9757_9791 = state_9716;(statearr_9757_9791[1] = 23);
(statearr_9757_9791[2] = ex__5028__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9756;
} else
{return null;
}
}
}} else
{if((state_val_9717 === 25))
{try{var inst_9704 = (state_9716[2]);var state_9716__$1 = state_9716;var statearr_9760_9792 = state_9716__$1;(statearr_9760_9792[2] = inst_9704);
(statearr_9760_9792[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e9758){if((e9758 instanceof Object))
{var ex__5028__auto__ = e9758;var statearr_9759_9793 = state_9716;(statearr_9759_9793[1] = 23);
(statearr_9759_9793[2] = ex__5028__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9758;
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
});return ((function (switch__5034__auto__){
return (function() {
var state_machine__5035__auto__ = null;
var state_machine__5035__auto____0 = (function (){var statearr_9762 = (new Array(17));(statearr_9762[0] = state_machine__5035__auto__);
(statearr_9762[1] = 1);
return statearr_9762;
});
var state_machine__5035__auto____1 = (function (state_9716){while(true){
var result__5036__auto__ = switch__5034__auto__.call(null,state_9716);if(cljs.core.keyword_identical_QMARK_.call(null,result__5036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5036__auto__;
}
break;
}
});
state_machine__5035__auto__ = function(state_9716){
switch(arguments.length){
case 0:
return state_machine__5035__auto____0.call(this);
case 1:
return state_machine__5035__auto____1.call(this,state_9716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5035__auto____0;
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5035__auto____1;
return state_machine__5035__auto__;
})()
;})(switch__5034__auto__))
})();var state__5086__auto__ = (function (){var statearr_9763 = f__5085__auto__.call(null);(statearr_9763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5084__auto___9764);
return statearr_9763;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5086__auto__);
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
,cljs.core.range.call(null,cnt));var c__5084__auto___9924 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5085__auto__ = (function (){var switch__5034__auto__ = (function (state_9896){var state_val_9897 = (state_9896[1]);if((state_val_9897 === 1))
{var state_9896__$1 = state_9896;var statearr_9898_9925 = state_9896__$1;(statearr_9898_9925[2] = null);
(statearr_9898_9925[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9897 === 2))
{var inst_9860 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_9861 = 0;var state_9896__$1 = (function (){var statearr_9899 = state_9896;(statearr_9899[5] = inst_9861);
(statearr_9899[6] = inst_9860);
return statearr_9899;
})();var statearr_9900_9926 = state_9896__$1;(statearr_9900_9926[2] = null);
(statearr_9900_9926[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9897 === 3))
{var inst_9894 = (state_9896[2]);var state_9896__$1 = state_9896;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9896__$1,inst_9894);
} else
{if((state_val_9897 === 4))
{var inst_9861 = (state_9896[5]);var inst_9863 = (inst_9861 < cnt);var state_9896__$1 = state_9896;if(cljs.core.truth_(inst_9863))
{var statearr_9901_9927 = state_9896__$1;(statearr_9901_9927[1] = 6);
} else
{var statearr_9902_9928 = state_9896__$1;(statearr_9902_9928[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9897 === 5))
{var inst_9880 = (state_9896[2]);var state_9896__$1 = (function (){var statearr_9903 = state_9896;(statearr_9903[7] = inst_9880);
return statearr_9903;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9896__$1,12,dchan);
} else
{if((state_val_9897 === 6))
{var state_9896__$1 = state_9896;var statearr_9904_9929 = state_9896__$1;(statearr_9904_9929[2] = null);
(statearr_9904_9929[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9897 === 7))
{var state_9896__$1 = state_9896;var statearr_9905_9930 = state_9896__$1;(statearr_9905_9930[2] = null);
(statearr_9905_9930[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9897 === 8))
{var inst_9878 = (state_9896[2]);var state_9896__$1 = state_9896;var statearr_9906_9931 = state_9896__$1;(statearr_9906_9931[2] = inst_9878);
(statearr_9906_9931[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9897 === 9))
{var inst_9861 = (state_9896[5]);var inst_9873 = (state_9896[2]);var inst_9874 = (inst_9861 + 1);var inst_9861__$1 = inst_9874;var state_9896__$1 = (function (){var statearr_9907 = state_9896;(statearr_9907[5] = inst_9861__$1);
(statearr_9907[8] = inst_9873);
return statearr_9907;
})();var statearr_9908_9932 = state_9896__$1;(statearr_9908_9932[2] = null);
(statearr_9908_9932[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9897 === 10))
{var inst_9865 = (state_9896[2]);var inst_9866 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_9896__$1 = (function (){var statearr_9909 = state_9896;(statearr_9909[9] = inst_9865);
return statearr_9909;
})();var statearr_9910_9933 = state_9896__$1;(statearr_9910_9933[2] = inst_9866);
(statearr_9910_9933[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9897 === 11))
{try{var inst_9861 = (state_9896[5]);var inst_9869 = chs__$1.call(null,inst_9861);var inst_9870 = done.call(null,inst_9861);var inst_9871 = cljs.core.async.take_BANG_.call(null,inst_9869,inst_9870);var state_9896__$1 = state_9896;var statearr_9913_9934 = state_9896__$1;(statearr_9913_9934[2] = inst_9871);
(statearr_9913_9934[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e9911){if((e9911 instanceof Object))
{var ex__5028__auto__ = e9911;var statearr_9912_9935 = state_9896;(statearr_9912_9935[1] = 10);
(statearr_9912_9935[2] = ex__5028__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9911;
} else
{return null;
}
}
}} else
{if((state_val_9897 === 12))
{var inst_9882 = (state_9896[10]);var inst_9882__$1 = (state_9896[2]);var inst_9883 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_9882__$1);var state_9896__$1 = (function (){var statearr_9914 = state_9896;(statearr_9914[10] = inst_9882__$1);
return statearr_9914;
})();if(cljs.core.truth_(inst_9883))
{var statearr_9915_9936 = state_9896__$1;(statearr_9915_9936[1] = 13);
} else
{var statearr_9916_9937 = state_9896__$1;(statearr_9916_9937[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9897 === 13))
{var inst_9885 = cljs.core.async.close_BANG_.call(null,out);var state_9896__$1 = state_9896;var statearr_9917_9938 = state_9896__$1;(statearr_9917_9938[2] = inst_9885);
(statearr_9917_9938[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9897 === 14))
{var inst_9882 = (state_9896[10]);var inst_9887 = cljs.core.apply.call(null,f,inst_9882);var state_9896__$1 = state_9896;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9896__$1,16,out,inst_9887);
} else
{if((state_val_9897 === 15))
{var inst_9892 = (state_9896[2]);var state_9896__$1 = state_9896;var statearr_9918_9939 = state_9896__$1;(statearr_9918_9939[2] = inst_9892);
(statearr_9918_9939[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9897 === 16))
{var inst_9889 = (state_9896[2]);var state_9896__$1 = (function (){var statearr_9919 = state_9896;(statearr_9919[11] = inst_9889);
return statearr_9919;
})();var statearr_9920_9940 = state_9896__$1;(statearr_9920_9940[2] = null);
(statearr_9920_9940[1] = 2);
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
});return ((function (switch__5034__auto__){
return (function() {
var state_machine__5035__auto__ = null;
var state_machine__5035__auto____0 = (function (){var statearr_9922 = (new Array(12));(statearr_9922[0] = state_machine__5035__auto__);
(statearr_9922[1] = 1);
return statearr_9922;
});
var state_machine__5035__auto____1 = (function (state_9896){while(true){
var result__5036__auto__ = switch__5034__auto__.call(null,state_9896);if(cljs.core.keyword_identical_QMARK_.call(null,result__5036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5036__auto__;
}
break;
}
});
state_machine__5035__auto__ = function(state_9896){
switch(arguments.length){
case 0:
return state_machine__5035__auto____0.call(this);
case 1:
return state_machine__5035__auto____1.call(this,state_9896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5035__auto____0;
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5035__auto____1;
return state_machine__5035__auto__;
})()
;})(switch__5034__auto__))
})();var state__5086__auto__ = (function (){var statearr_9923 = f__5085__auto__.call(null);(statearr_9923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5084__auto___9924);
return statearr_9923;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5086__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5084__auto___10040 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5085__auto__ = (function (){var switch__5034__auto__ = (function (state_10020){var state_val_10021 = (state_10020[1]);if((state_val_10021 === 1))
{var inst_9991 = cljs.core.vec.call(null,chs);var inst_9992 = inst_9991;var state_10020__$1 = (function (){var statearr_10022 = state_10020;(statearr_10022[5] = inst_9992);
return statearr_10022;
})();var statearr_10023_10041 = state_10020__$1;(statearr_10023_10041[2] = null);
(statearr_10023_10041[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10021 === 2))
{var inst_9992 = (state_10020[5]);var inst_9994 = cljs.core.count.call(null,inst_9992);var inst_9995 = (inst_9994 > 0);var state_10020__$1 = state_10020;if(cljs.core.truth_(inst_9995))
{var statearr_10024_10042 = state_10020__$1;(statearr_10024_10042[1] = 4);
} else
{var statearr_10025_10043 = state_10020__$1;(statearr_10025_10043[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10021 === 3))
{var inst_10018 = (state_10020[2]);var state_10020__$1 = state_10020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10020__$1,inst_10018);
} else
{if((state_val_10021 === 4))
{var inst_9992 = (state_10020[5]);var state_10020__$1 = state_10020;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10020__$1,7,inst_9992);
} else
{if((state_val_10021 === 5))
{var inst_10014 = cljs.core.async.close_BANG_.call(null,out);var state_10020__$1 = state_10020;var statearr_10026_10044 = state_10020__$1;(statearr_10026_10044[2] = inst_10014);
(statearr_10026_10044[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10021 === 6))
{var inst_10016 = (state_10020[2]);var state_10020__$1 = state_10020;var statearr_10027_10045 = state_10020__$1;(statearr_10027_10045[2] = inst_10016);
(statearr_10027_10045[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10021 === 7))
{var inst_9999 = (state_10020[6]);var inst_10000 = (state_10020[7]);var inst_9999__$1 = (state_10020[2]);var inst_10000__$1 = cljs.core.nth.call(null,inst_9999__$1,0,null);var inst_10001 = cljs.core.nth.call(null,inst_9999__$1,1,null);var inst_10002 = (inst_10000__$1 == null);var state_10020__$1 = (function (){var statearr_10028 = state_10020;(statearr_10028[6] = inst_9999__$1);
(statearr_10028[8] = inst_10001);
(statearr_10028[7] = inst_10000__$1);
return statearr_10028;
})();if(cljs.core.truth_(inst_10002))
{var statearr_10029_10046 = state_10020__$1;(statearr_10029_10046[1] = 8);
} else
{var statearr_10030_10047 = state_10020__$1;(statearr_10030_10047[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10021 === 8))
{var inst_9999 = (state_10020[6]);var inst_10001 = (state_10020[8]);var inst_10000 = (state_10020[7]);var inst_9992 = (state_10020[5]);var inst_10004 = (function (){var c = inst_10001;var v = inst_10000;var vec__9997 = inst_9999;var cs = inst_9992;return ((function (c,v,vec__9997,cs,inst_9999,inst_10001,inst_10000,inst_9992,state_val_10021){
return (function (p1__9941_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__9941_SHARP_);
});
;})(c,v,vec__9997,cs,inst_9999,inst_10001,inst_10000,inst_9992,state_val_10021))
})();var inst_10005 = cljs.core.filterv.call(null,inst_10004,inst_9992);var inst_9992__$1 = inst_10005;var state_10020__$1 = (function (){var statearr_10031 = state_10020;(statearr_10031[5] = inst_9992__$1);
return statearr_10031;
})();var statearr_10032_10048 = state_10020__$1;(statearr_10032_10048[2] = null);
(statearr_10032_10048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10021 === 9))
{var inst_10000 = (state_10020[7]);var state_10020__$1 = state_10020;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10020__$1,11,out,inst_10000);
} else
{if((state_val_10021 === 10))
{var inst_10012 = (state_10020[2]);var state_10020__$1 = state_10020;var statearr_10034_10049 = state_10020__$1;(statearr_10034_10049[2] = inst_10012);
(statearr_10034_10049[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10021 === 11))
{var inst_9992 = (state_10020[5]);var inst_10009 = (state_10020[2]);var tmp10033 = inst_9992;var inst_9992__$1 = tmp10033;var state_10020__$1 = (function (){var statearr_10035 = state_10020;(statearr_10035[5] = inst_9992__$1);
(statearr_10035[9] = inst_10009);
return statearr_10035;
})();var statearr_10036_10050 = state_10020__$1;(statearr_10036_10050[2] = null);
(statearr_10036_10050[1] = 2);
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
var state_machine__5035__auto____0 = (function (){var statearr_10038 = (new Array(10));(statearr_10038[0] = state_machine__5035__auto__);
(statearr_10038[1] = 1);
return statearr_10038;
});
var state_machine__5035__auto____1 = (function (state_10020){while(true){
var result__5036__auto__ = switch__5034__auto__.call(null,state_10020);if(cljs.core.keyword_identical_QMARK_.call(null,result__5036__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5036__auto__;
}
break;
}
});
state_machine__5035__auto__ = function(state_10020){
switch(arguments.length){
case 0:
return state_machine__5035__auto____0.call(this);
case 1:
return state_machine__5035__auto____1.call(this,state_10020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5035__auto____0;
state_machine__5035__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5035__auto____1;
return state_machine__5035__auto__;
})()
;})(switch__5034__auto__))
})();var state__5086__auto__ = (function (){var statearr_10039 = f__5085__auto__.call(null);(statearr_10039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5084__auto___10040);
return statearr_10039;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5086__auto__);
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
