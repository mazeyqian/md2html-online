/*

 Copyright (C) 2004-2010 Alex Gorbatchev.

 @license
 Dual licensed under the MIT and GPL licenses.
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (d, e, c) {
    d != Array.prototype && d != Object.prototype && (d[e] = c.value)
};
$jscomp.getGlobal = function (d) {
    return "undefined" != typeof window && window === d ? d : "undefined" != typeof global && null != global ? global : d
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () {
    $jscomp.initSymbol = function () {
    };
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.symbolCounter_ = 0;
$jscomp.Symbol = function (d) {
    return $jscomp.SYMBOL_PREFIX + (d || "") + $jscomp.symbolCounter_++
};
$jscomp.initSymbolIterator = function () {
    $jscomp.initSymbol();
    var d = $jscomp.global.Symbol.iterator;
    d || (d = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
    "function" != typeof Array.prototype[d] && $jscomp.defineProperty(Array.prototype, d, {
        configurable: !0,
        writable: !0,
        value: function () {
            return $jscomp.arrayIterator(this)
        }
    });
    $jscomp.initSymbolIterator = function () {
    }
};
$jscomp.arrayIterator = function (d) {
    var e = 0;
    return $jscomp.iteratorPrototype(function () {
        return e < d.length ? {done: !1, value: d[e++]} : {done: !0}
    })
};
$jscomp.iteratorPrototype = function (d) {
    $jscomp.initSymbolIterator();
    d = {next: d};
    d[$jscomp.global.Symbol.iterator] = function () {
        return this
    };
    return d
};
$jscomp.iteratorFromArray = function (d, e) {
    $jscomp.initSymbolIterator();
    d instanceof String && (d += "");
    var c = 0, a = {
        next: function () {
            if (c < d.length) {
                var b = c++;
                return {value: e(b, d[b]), done: !1}
            }
            a.next = function () {
                return {done: !0, value: void 0}
            };
            return a.next()
        }
    };
    a[Symbol.iterator] = function () {
        return a
    };
    return a
};
$jscomp.polyfill = function (d, e, c, a) {
    if (e) {
        c = $jscomp.global;
        d = d.split(".");
        for (a = 0; a < d.length - 1; a++) {
            var b = d[a];
            b in c || (c[b] = {});
            c = c[b]
        }
        d = d[d.length - 1];
        a = c[d];
        e = e(a);
        e != a && null != e && $jscomp.defineProperty(c, d, {configurable: !0, writable: !0, value: e})
    }
};
$jscomp.polyfill("Array.prototype.keys", function (d) {
    return d ? d : function () {
        return $jscomp.iteratorFromArray(this, function (d) {
            return d
        })
    }
}, "es6-impl", "es3");
$jscomp.findInternal = function (d, e, c) {
    d instanceof String && (d = String(d));
    for (var a = d.length, b = 0; b < a; b++) {
        var f = d[b];
        if (e.call(c, f, b, d)) return {i: b, v: f}
    }
    return {i: -1, v: void 0}
};
$jscomp.polyfill("Array.prototype.find", function (d) {
    return d ? d : function (d, c) {
        return $jscomp.findInternal(this, d, c).v
    }
}, "es6-impl", "es3");
eval(function (d, e, c, a, b, f) {
    b = function (a) {
        return (a < e ? "" : b(parseInt(a / e))) + (35 < (a %= e) ? String.fromCharCode(a + 29) : a.toString(36))
    };
    if (!"".replace(/^/, String)) {
        for (; c--;) f[b(c)] = a[c] || b(c);
        a = [function (a) {
            return f[a]
        }];
        b = function () {
            return "\\w+"
        };
        c = 1
    }
    for (; c--;) a[c] && (d = d.replace(new RegExp("\\b" + b(c) + "\\b", "g"), a[c]));
    return d
}('K M;I(M)1S 2U("2a\'t 4k M 4K 2g 3l 4G 4H");(6(){6 r(f,e){I(!M.1R(f))1S 3m("3s 15 4R");K a=f.1w;f=M(f.1m,t(f)+(e||""));I(a)f.1w={1m:a.1m,19:a.19?a.19.1a(0):N};H f}6 t(f){H(f.1J?"g":"")+(f.4s?"i":"")+(f.4p?"m":"")+(f.4v?"x":"")+(f.3n?"y":"")}6 B(f,e,a,b){K c=u.L,d,h,g;v=R;5K{O(;c--;){g=u[c];I(a&g.3r&&(!g.2p||g.2p.W(b))){g.2q.12=e;I((h=g.2q.X(f))&&h.P===e){d={3k:g.2b.W(b,h,a),1C:h};1N}}}}5v(i){1S i}5q{v=11}H d}6 p(f,e,a){I(3b.Z.1i)H f.1i(e,a);O(a=a||0;a<f.L;a++)I(f[a]===e)H a;H-1}M=6(f,e){K a=[],b=M.1B,c=0,d,h;I(M.1R(f)){I(e!==1d)1S 3m("2a\'t 5r 5I 5F 5B 5C 15 5E 5p");H r(f)}I(v)1S 2U("2a\'t W 3l M 59 5m 5g 5x 5i");e=e||"";O(d={2N:11,19:[],2K:6(g){H e.1i(g)>-1},3d:6(g){e+=g}};c<f.L;)I(h=B(f,c,b,d)){a.U(h.3k);c+=h.1C[0].L||1}Y I(h=n.X.W(z[b],f.1a(c))){a.U(h[0]);c+=h[0].L}Y{h=f.3a(c);I(h==="[")b=M.2I;Y I(h==="]")b=M.1B;a.U(h);c++}a=15(a.1K(""),n.Q.W(e,w,""));a.1w={1m:f,19:d.2N?d.19:N};H a};M.3v="1.5.0";M.2I=1;M.1B=2;K C=/\\$(?:(\\d\\d?|[$&`\'])|{([$\\w]+)})/g,w=/[^5h]+|([\\s\\S])(?=[\\s\\S]*\\1)/g,A=/^(?:[?*+]|{\\d+(?:,\\d*)?})\\??/,v=11,u=[],n={X:15.Z.X,1A:15.Z.1A,1C:1r.Z.1C,Q:1r.Z.Q,1e:1r.Z.1e},x=n.X.W(/()??/,"")[1]===1d,D=6(){K f=/^/g;n.1A.W(f,"");H!f.12}(),y=6(){K f=/x/g;n.Q.W("x",f,"");H!f.12}(),E=15.Z.3n!==1d,z={};z[M.2I]=/^(?:\\\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\\29-26-f]{2}|u[\\29-26-f]{4}|c[A-3o-z]|[\\s\\S]))/;z[M.1B]=/^(?:\\\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\\d*|x[\\29-26-f]{2}|u[\\29-26-f]{4}|c[A-3o-z]|[\\s\\S])|\\(\\?[:=!]|[?*+]\\?|{\\d+(?:,\\d*)?}\\??)/;M.1h=6(f,e,a,b){u.U({2q:r(f,"g"+(E?"y":"")),2b:e,3r:a||M.1B,2p:b||N})};M.2n=6(f,e){K a=f+"/"+(e||"");H M.2n[a]||(M.2n[a]=M(f,e))};M.3c=6(f){H r(f,"g")};M.5l=6(f){H f.Q(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g,"\\\\$&")};M.5e=6(f,e,a,b){e=r(e,"g"+(b&&E?"y":""));e.12=a=a||0;f=e.X(f);H b?f&&f.P===a?f:N:f};M.3q=6(){M.1h=6(){1S 2U("2a\'t 55 1h 54 3q")}};M.1R=6(f){H 53.Z.1q.W(f)==="[2m 15]"};M.3p=6(f,e,a,b){O(K c=r(e,"g"),d=-1,h;h=c.X(f);){a.W(b,h,++d,f,c);c.12===h.P&&c.12++}I(e.1J)e.12=0};M.57=6(f,e){H 6 a(b,c){K d=e[c].1I?e[c]:{1I:e[c]},h=r(d.1I,"g"),g=[],i;O(i=0;i<b.L;i++)M.3p(b[i],h,6(k){g.U(d.3j?k[d.3j]||"":k[0])});H c===e.L-1||!g.L?g:a(g,c+1)}([f],0)};15.Z.1p=6(f,e){H J.X(e[0])};15.Z.W=6(f,e){H J.X(e)};15.Z.X=6(f){K e=n.X.1p(J,14),a;I(e){I(!x&&e.L>1&&p(e,"")>-1){a=15(J.1m,n.Q.W(t(J),"g",""));n.Q.W(f.1a(e.P),a,6(){O(K c=1;c<14.L-2;c++)I(14[c]===1d)e[c]=1d})}I(J.1w&&J.1w.19)O(K b=1;b<e.L;b++)I(a=J.1w.19[b-1])e[a]=e[b];!D&&J.1J&&!e[0].L&&J.12>e.P&&J.12--}H e};I(!D)15.Z.1A=6(f){(f=n.X.W(J,f))&&J.1J&&!f[0].L&&J.12>f.P&&J.12--;H!!f};1r.Z.1C=6(f){M.1R(f)||(f=15(f));I(f.1J){K e=n.1C.1p(J,14);f.12=0;H e}H f.X(J)};1r.Z.Q=6(f,e){K a=M.1R(f),b,c;I(a&&1j e.58()==="3f"&&e.1i("${")===-1&&y)H n.Q.1p(J,14);I(a){I(f.1w)b=f.1w.19}Y f+="";I(1j e==="6")c=n.Q.W(J,f,6(){I(b){14[0]=1f 1r(14[0]);O(K d=0;d<b.L;d++)I(b[d])14[0][b[d]]=14[d+1]}I(a&&f.1J)f.12=14[14.L-2]+14[0].L;H e.1p(N,14)});Y{c=J+"";c=n.Q.W(c,f,6(){K d=14;H n.Q.W(e,C,6(h,g,i){I(g)5b(g){24"$":H"$";24"&":H d[0];24"`":H d[d.L-1].1a(0,d[d.L-2]);24"\'":H d[d.L-1].1a(d[d.L-2]+d[0].L);5a:i="";g=+g;I(!g)H h;O(;g>d.L-3;){i=1r.Z.1a.W(g,-1)+i;g=1Q.3i(g/10)}H(g?d[g]||"":"$")+i}Y{g=+i;I(g<=d.L-3)H d[g];g=b?p(b,i):-1;H g>-1?d[g+1]:h}})})}I(a&&f.1J)f.12=0;H c};1r.Z.1e=6(f,e){I(!M.1R(f))H n.1e.1p(J,14);K a=J+"",b=[],c=0,d,h;I(e===1d||+e<0)e=5D;Y{e=1Q.3i(+e);I(!e)H[]}O(f=M.3c(f);d=f.X(a);){I(f.12>c){b.U(a.1a(c,d.P));d.L>1&&d.P<a.L&&3b.Z.U.1p(b,d.1a(1));h=d[0].L;c=f.12;I(b.L>=e)1N}f.12===d.P&&f.12++}I(c===a.L){I(!n.1A.W(f,"")||h)b.U("")}Y b.U(a.1a(c));H b.L>e?b.1a(0,e):b};M.1h(/\\(\\?#[^)]*\\)/,6(f){H n.1A.W(A,f.2S.1a(f.P+f[0].L))?"":"(?:)"});M.1h(/\\((?!\\?)/,6(){J.19.U(N);H"("});M.1h(/\\(\\?<([$\\w]+)>/,6(f){J.19.U(f[1]);J.2N=R;H"("});M.1h(/\\\\k<([\\w$]+)>/,6(f){K e=p(J.19,f[1]);H e>-1?"\\\\"+(e+1)+(3R(f.2S.3a(f.P+f[0].L))?"":"(?:)"):f[0]});M.1h(/\\[\\^?]/,6(f){H f[0]==="[]"?"\\\\b\\\\B":"[\\\\s\\\\S]"});M.1h(/^\\(\\?([5A]+)\\)/,6(f){J.3d(f[1]);H""});M.1h(/(?:\\s+|#.*)+/,6(f){H n.1A.W(A,f.2S.1a(f.P+f[0].L))?"":"(?:)"},M.1B,6(){H J.2K("x")});M.1h(/\\./,6(){H"[\\\\s\\\\S]"},M.1B,6(){H J.2K("s")})})();1j 2e!="1d"&&(2e.M=M);K 1v=6(){6 r(a,b){a.1l.1i(b)!=-1||(a.1l+=" "+b)}6 t(a){H a.1i("3e")==0?a:"3e"+a}6 B(a){H e.1Y.2A[t(a)]}6 p(a,b,c){I(a==N)H N;K d=c!=R?a.3G:[a.2G],h={"#":"1c",".":"1l"}[b.1o(0,1)]||"3h",g,i;g=h!="3h"?b.1o(1):b.5u();I((a[h]||"").1i(g)!=-1)H a;O(a=0;d&&a<d.L&&i==N;a++)i=p(d[a],b,c);H i}6 C(a,b){K c={},d;O(d 2g a)c[d]=a[d];O(d 2g b)c[d]=b[d];H c}6 w(a,b,c,d){6 h(g){g=g||1P.5y;I(!g.1F){g.1F=g.52;g.3N=6(){J.5w=11}}c.W(d||1P,g)}a.3g?a.3g("4U"+b,h):a.4y(b,h,11)}6 A(a,b){K c=e.1Y.2j,d=N;I(c==N){c={};O(K h 2g e.1U){K g=e.1U[h];d=g.4x;I(d!=N){g.1V=h.4w();O(g=0;g<d.L;g++)c[d[g]]=h}}e.1Y.2j=c}d=e.1U[c[a]];d==N&&b!=11&&1P.1X(e.13.1x.1X+(e.13.1x.3E+a));H d}6 v(a,b){O(K c=a.1e("\\n"),d=0;d<c.L;d++)c[d]=b(c[d],d);H c.1K("\\n")}6 u(a,b){I(a==N||a.L==0||a=="\\n")H a;a=a.Q(/</g,"&1y;");a=a.Q(/ {2,}/g,6(c){O(K d="",h=0;h<c.L-1;h++)d+=e.13.1W;H d+" "});I(b!=N)a=v(a,6(c){I(c.L==0)H"";K d="";c=c.Q(/^(&2s;| )+/,6(h){d=h;H""});I(c.L==0)H d;H d+\'<17 1g="\'+b+\'">\'+c+"</17>"});H a}6 n(a,b){a.1e("\\n");O(K c="",d=0;d<50;d++)c+="                    ";H a=v(a,6(h){I(h.1i("\\t")==-1)H h;O(K g=0;(g=h.1i("\\t"))!=-1;)h=h.1o(0,g)+c.1o(0,b-g%b)+h.1o(g+1,h.L);H h})}6 x(a){H a.Q(/^\\s+|\\s+$/g,"")}6 D(a,b){I(a.P<b.P)H-1;Y I(a.P>b.P)H 1;Y I(a.L<b.L)H-1;Y I(a.L>b.L)H 1;H 0}6 y(a,b){6 c(k){H k[0]}O(K d=N,h=[],g=b.2D?b.2D:c;(d=b.1I.X(a))!=N;){K i=g(d,b);I(1j i=="3f")i=[1f e.2L(i,d.P,b.23)];h=h.1O(i)}H h}6 E(a){K b=/(.*)((&1G;|&1y;).*)/;H a.Q(e.3A.3M,6(c){K d="",h=N;I(h=b.X(c)){c=h[1];d=h[2]}H\'<a 2h="\'+c+\'">\'+c+"</a>"+d})}6 z(){O(K a=1E.36("1k"),b=[],c=0;c<a.L;c++)a[c].3s=="20"&&b.U(a[c]);H b}6 f(a){a=a.1F;K b=p(a,".20",R);a=p(a,".3O",R);K c=1E.4i("3t");I(!(!a||!b||p(a,"3t"))){B(b.1c);r(b,"1m");O(K d=a.3G,h=[],g=0;g<d.L;g++)h.U(d[g].4z||d[g].4A);h=h.1K("\\r");c.39(1E.4D(h));a.39(c);c.2C();c.4C();w(c,"4u",6(){c.2G.4E(c);b.1l=b.1l.Q("1m","")})}}I(1j 3F!="1d"&&1j M=="1d")M=3F("M").M;K e={2v:{"1g-27":"","2i-1s":1,"2z-1s-2t":11,1M:N,1t:N,"42-45":R,"43-22":4,1u:R,16:R,"3V-17":R,2l:11,"41-40":R,2k:11,"1z-1k":11},13:{1W:"&2s;",2M:R,46:11,44:11,34:"4n",1x:{21:"4o 1m",2P:"?",1X:"1v\\n\\n",3E:"4r\'t 4t 1D O: ",4g:"4m 4B\'t 51 O 1z-1k 4F: ",37:\'<!4T 1z 4S "-//4V//3H 4W 1.0 4Z//4Y" "1Z://2y.3L.3K/4X/3I/3H/3I-4P.4J"><1z 4I="1Z://2y.3L.3K/4L/5L"><3J><4N 1Z-4M="5G-5M" 6K="2O/1z; 6J=6I-8" /><1t>6L 1v</1t></3J><3B 1L="25-6M:6Q,6P,6O,6N-6F;6y-2f:#6x;2f:#6w;25-22:6v;2O-3D:3C;"><T 1L="2O-3D:3C;3w-32:1.6z;"><T 1L="25-22:6A-6E;">1v</T><T 1L="25-22:.6C;3w-6B:6R;"><T>3v 3.0.76 (72 73 3x)</T><T><a 2h="1Z://3u.2w/1v" 1F="38" 1L="2f:#3y">1Z://3u.2w/1v</a></T><T>70 17 6U 71.</T><T>6T 6X-3x 6Y 6D.</T></T><T>6t 61 60 J 1k, 5Z <a 2h="6u://2y.62.2w/63-66/65?64=5X-5W&5P=5O" 1L="2f:#3y">5R</a> 5V <2R/>5U 5T 5S!</T></T></3B></1z>\'}},1Y:{2j:N,2A:{}},1U:{},3A:{6n:/\\/\\*[\\s\\S]*?\\*\\//2c,6m:/\\/\\/.*$/2c,6l:/#.*$/2c,6k:/"([^\\\\"\\n]|\\\\.)*"/g,6o:/\'([^\\\\\'\\n]|\\\\.)*\'/g,6p:1f M(\'"([^\\\\\\\\"]|\\\\\\\\.)*"\',"3z"),6s:1f M("\'([^\\\\\\\\\']|\\\\\\\\.)*\'","3z"),6q:/(&1y;|<)!--[\\s\\S]*?--(&1G;|>)/2c,3M:/\\w+:\\/\\/[\\w-.\\/?%&=:@;]*/g,6a:{18:/(&1y;|<)\\?=?/g,1b:/\\?(&1G;|>)/g},69:{18:/(&1y;|<)%=?/g,1b:/%(&1G;|>)/g},6d:{18:/(&1y;|<)\\s*1k.*?(&1G;|>)/2T,1b:/(&1y;|<)\\/\\s*1k\\s*(&1G;|>)/2T}},16:{1H:6(a){6 b(i,k){H e.16.2o(i,k,e.13.1x[k])}O(K c=\'<T 1g="16">\',d=e.16.2x,h=d.2X,g=0;g<h.L;g++)c+=(d[h[g]].1H||b)(a,h[g]);c+="</T>";H c},2o:6(a,b,c){H\'<2W><a 2h="#" 1g="6e 6h\'+b+" "+b+\'">\'+c+"</a></2W>"},2b:6(a){K b=a.1F,c=b.1l||"";b=B(p(b,".20",R).1c);K d=6(h){H(h=15(h+"6f(\\\\w+)").X(c))?h[1]:N}("6g");b&&d&&e.16.2x[d].2B(b);a.3N()},2x:{2X:["21","2P"],21:{1H:6(a){I(a.V("2l")!=R)H"";K b=a.V("1t");H e.16.2o(a,"21",b?b:e.13.1x.21)},2B:6(a){a=1E.6j(t(a.1c));a.1l=a.1l.Q("47","")}},2P:{2B:6(){K a="68=0";a+=", 18="+(31.30-33)/2+", 32="+(31.2Z-2Y)/2+", 30=33, 2Z=2Y";a=a.Q(/^,/,"");a=1P.6Z("","38",a);a.2C();K b=a.1E;b.6W(e.13.1x.37);b.6V();a.2C()}}}},35:6(a,b){K c;I(b)c=[b];Y{c=1E.36(e.13.34);O(K d=[],h=0;h<c.L;h++)d.U(c[h]);c=d}c=c;d=[];I(e.13.2M)c=c.1O(z());I(c.L===0)H d;O(h=0;h<c.L;h++){O(K g=c[h],i=a,k=c[h].1l,j=3W 0,l={},m=1f M("^\\\\[(?<2V>(.*?))\\\\]$"),s=1f M("(?<27>[\\\\w-]+)\\\\s*:\\\\s*(?<1T>[\\\\w-%#]+|\\\\[.*?\\\\]|\\".*?\\"|\'.*?\')\\\\s*;?","g");(j=s.X(k))!=N;){K o=j.1T.Q(/^[\'"]|[\'"]$/g,"");I(o!=N&&m.1A(o)){o=m.X(o);o=o.2V.L>0?o.2V.1e(/\\s*,\\s*/):[]}l[j.27]=o}g={1F:g,1n:C(i,l)};g.1n.1D!=N&&d.U(g)}H d},1M:6(a,b){K c=J.35(a,b),d=N,h=e.13;I(c.L!==0)O(K g=0;g<c.L;g++){b=c[g];K i=b.1F,k=b.1n,j=k.1D,l;I(j!=N){I(k["1z-1k"]=="R"||e.2v["1z-1k"]==R){d=1f e.4l(j);j="4O"}Y I(d=A(j))d=1f d;Y 6H;l=i.3X;I(h.2M){l=l;K m=x(l),s=11;I(m.1i("<![6G[")==0){m=m.4h(9);s=R}K o=m.L;I(m.1i("]]\\>")==o-3){m=m.4h(0,o-3);s=R}l=s?m:l}I((i.1t||"")!="")k.1t=i.1t;k.1D=j;d.2Q(k);b=d.2F(l);I((i.1c||"")!="")b.1c=i.1c;i.2G.74(b,i)}}},2E:6(a){w(1P,"4k",6(){e.1M(a)})}};e.2E=e.2E;e.1M=e.1M;e.2L=6(a,b,c){J.1T=a;J.P=b;J.L=a.L;J.23=c;J.1V=N};e.2L.Z.1q=6(){H J.1T};e.4l=6(a){6 b(j,l){O(K m=0;m<j.L;m++)j[m].P+=l}K c=A(a),d,h=1f e.1U.5Y,g=J,i="2F 1H 2Q".1e(" ");I(c!=N){d=1f c;O(K k=0;k<i.L;k++)(6(){K j=i[k];g[j]=6(){H h[j].1p(h,14)}})();d.28==N?1P.1X(e.13.1x.1X+(e.13.1x.4g+a)):h.2J.U({1I:d.28.17,2D:6(j){O(K l=j.17,m=[],s=d.2J,o=j.P+j.18.L,F=d.28,q,G=0;G<s.L;G++){q=y(l,s[G]);b(q,o);m=m.1O(q)}I(F.18!=N&&j.18!=N){q=y(j.18,F.18);b(q,j.P);m=m.1O(q)}I(F.1b!=N&&j.1b!=N){q=y(j.1b,F.1b);b(q,j.P+j[0].5Q(j.1b));m=m.1O(q)}O(j=0;j<m.L;j++)m[j].1V=c.1V;H m}})}};e.4j=6(){};e.4j.Z={V:6(a,b){K c=J.1n[a];c=c==N?b:c;K d={"R":R,"11":11}[c];H d==N?c:d},3Y:6(a){H 1E.4i(a)},4c:6(a,b){K c=[];I(a!=N)O(K d=0;d<a.L;d++)I(1j a[d]=="2m")c=c.1O(y(b,a[d]));H J.4e(c.6b(D))},4e:6(a){O(K b=0;b<a.L;b++)I(a[b]!==N)O(K c=a[b],d=c.P+c.L,h=b+1;h<a.L&&a[b]!==N;h++){K g=a[h];I(g!==N)I(g.P>d)1N;Y I(g.P==c.P&&g.L>c.L)a[b]=N;Y I(g.P>=c.P&&g.P<d)a[h]=N}H a},4d:6(a){K b=[],c=2u(J.V("2i-1s"));v(a,6(d,h){b.U(h+c)});H b},3U:6(a){K b=J.V("1M",[]);I(1j b!="2m"&&b.U==N)b=[b];a:{a=a.1q();K c=3W 0;O(c=c=1Q.6c(c||0,0);c<b.L;c++)I(b[c]==a){b=c;1N a}b=-1}H b!=-1},2r:6(a,b,c){a=["1s","6i"+b,"P"+a,"6r"+(b%2==0?1:2).1q()];J.3U(b)&&a.U("67");b==0&&a.U("1N");H\'<T 1g="\'+a.1K(" ")+\'">\'+c+"</T>"},3Q:6(a,b){K c="",d=a.1e("\\n").L,h=2u(J.V("2i-1s")),g=J.V("2z-1s-2t");I(g==R)g=(h+d-1).1q().L;Y I(3R(g)==R)g=0;O(K i=0;i<d;i++){K k=b?b[i]:h+i,j;I(k==0)j=e.13.1W;Y{j=g;O(K l=k.1q();l.L<j;)l="0"+l;j=l}a=j;c+=J.2r(i,k,a)}H c},49:6(a,b){a=x(a);K c=a.1e("\\n");J.V("2z-1s-2t");K d=2u(J.V("2i-1s"));a="";O(K h=J.V("1D"),g=0;g<c.L;g++){K i=c[g],k=/^(&2s;|\\s)+/.X(i),j=N,l=b?b[g]:d+g;I(k!=N){j=k[0].1q();i=i.1o(j.L);j=j.Q(" ",e.13.1W)}i=x(i);I(i.L==0)i=e.13.1W;a+=J.2r(g,l,(j!=N?\'<17 1g="\'+h+\' 5N">\'+j+"</17>":"")+i)}H a},4f:6(a){H a?"<4a>"+a+"</4a>":""},4b:6(a,b){6 c(l){H(l=l?l.1V||g:g)?l+" ":""}O(K d=0,h="",g=J.V("1D",""),i=0;i<b.L;i++){K k=b[i],j;I(!(k===N||k.L===0)){j=c(k);h+=u(a.1o(d,k.P-d),j+"48")+u(k.1T,j+k.23);d=k.P+k.L+(k.75||0)}}h+=u(a.1o(d),c()+"48");H h},1H:6(a){K b="",c=["20"],d;I(J.V("2k")==R)J.1n.16=J.1n.1u=11;1l="20";J.V("2l")==R&&c.U("47");I((1u=J.V("1u"))==11)c.U("6S");c.U(J.V("1g-27"));c.U(J.V("1D"));a=a.Q(/^[ ]*[\\n]+|[\\n]*[ ]*$/g,"").Q(/\\r/g," ");b=J.V("43-22");I(J.V("42-45")==R)a=n(a,b);Y{O(K h="",g=0;g<b;g++)h+=" ";a=a.Q(/\\t/g,h)}a=a;a:{b=a=a;h=/<2R\\s*\\/?>|&1y;2R\\s*\\/?&1G;/2T;I(e.13.46==R)b=b.Q(h,"\\n");I(e.13.44==R)b=b.Q(h,"");b=b.1e("\\n");h=/^\\s*/;g=4Q;O(K i=0;i<b.L&&g>0;i++){K k=b[i];I(x(k).L!=0){k=h.X(k);I(k==N){a=a;1N a}g=1Q.4q(k[0].L,g)}}I(g>0)O(i=0;i<b.L;i++)b[i]=b[i].1o(g);a=b.1K("\\n")}I(1u)d=J.4d(a);b=J.4c(J.2J,a);b=J.4b(a,b);b=J.49(b,d);I(J.V("41-40"))b=E(b);1j 2H!="1d"&&2H.3S&&2H.3S.1C(/5s/)&&c.U("5t");H b=\'<T 1c="\'+t(J.1c)+\'" 1g="\'+c.1K(" ")+\'">\'+(J.V("16")?e.16.1H(J):"")+\'<3Z 5z="0" 5H="0" 5J="0">\'+J.4f(J.V("1t"))+"<3T><3P>"+(1u?\'<2d 1g="1u">\'+J.3Q(a)+"</2d>":"")+\'<2d 1g="17"><T 1g="3O">\'+b+"</T></2d></3P></3T></3Z></T>"},2F:6(a){I(a===N)a="";J.17=a;K b=J.3Y("T");b.3X=J.1H(a);J.V("16")&&w(p(b,".16"),"5c",e.16.2b);J.V("3V-17")&&w(p(b,".17"),"56",f);H b},2Q:6(a){J.1c=""+1Q.5d(1Q.5n()*5k).1q();e.1Y.2A[t(J.1c)]=J;J.1n=C(e.2v,a||{});I(J.V("2k")==R)J.1n.16=J.1n.1u=11},5j:6(a){a=a.Q(/^\\s+|\\s+$/g,"").Q(/\\s+/g,"|");H"\\\\b(?:"+a+")\\\\b"},5f:6(a){J.28={18:{1I:a.18,23:"1k"},1b:{1I:a.1b,23:"1k"},17:1f M("(?<18>"+a.18.1m+")(?<17>.*?)(?<1b>"+a.1b.1m+")","5o")}}};H e}();1j 2e!="1d"&&(2e.1v=1v);',
    62, 441, "      function                                     return if this var length XRegExp null for index replace true  div push getParam call exec else prototype  false lastIndex config arguments RegExp toolbar code left captureNames slice right id undefined split new class addToken indexOf typeof script className source params substr apply toString String line title gutter SyntaxHighlighter _xregexp strings lt html test OUTSIDE_CLASS match brush document target gt getHtml regex global join style highlight break concat window Math isRegExp throw value brushes brushName space alert vars http syntaxhighlighter expandSource size css case font Fa name htmlScript dA can handler gm td exports color in href first discoveredBrushes light collapse object cache getButtonHtml trigger pattern getLineHtml nbsp numbers parseInt defaults com items www pad highlighters execute focus func all getDiv parentNode navigator INSIDE_CLASS regexList hasFlag Match useScriptTags hasNamedCapture text help init br input gi Error values span list 250 height width screen top 500 tagName findElements getElementsByTagName aboutDialog _blank appendChild charAt Array copyAsGlobal setFlag highlighter_ string attachEvent nodeName floor backref output the TypeError sticky Za iterate freezeTokens scope type textarea alexgorbatchev version margin 2010 005896 gs regexLib body center align noBrush require childNodes DTD xhtml1 head org w3 url preventDefault container tr getLineNumbersHtml isNaN userAgent tbody isLineHighlighted quick void innerHTML create table links auto smart tab stripBrs tabs bloggerMode collapsed plain getCodeLinesHtml caption getMatchesHtml findMatches figureOutLineNumbers removeNestedMatches getTitleHtml brushNotHtmlScript substring createElement Highlighter load HtmlScript Brush pre expand multiline min Can ignoreCase find blur extended toLowerCase aliases addEventListener innerText textContent wasn select createTextNode removeChild option same frame xmlns dtd twice 1999 equiv meta htmlscript transitional 1E3 expected PUBLIC DOCTYPE on W3C XHTML TR EN Transitional  configured srcElement Object after run dblclick matchChain valueOf constructor default switch click round execAt forHtmlScript token gimy functions getKeywords 1E6 escape within random sgi another finally supply MSIE ie toUpperCase catch returnValue definition event border imsx constructing one Infinity from when Content cellpadding flags cellspacing try xhtml Type spaces 2930402 hosted_button_id lastIndexOf donate active development keep to xclick _s Xml please like you paypal cgi cmd webscr bin highlighted scrollbars aspScriptTags phpScriptTags sort max scriptScriptTags toolbar_item _ command command_ number getElementById doubleQuotedString singleLinePerlComments singleLineCComments multiLineCComments singleQuotedString multiLineDoubleQuotedString xmlComments alt multiLineSingleQuotedString If https 1em 000 fff background 5em xx bottom 75em Gorbatchev large serif CDATA continue utf charset content About family sans Helvetica Arial Geneva 3em nogutter Copyright syntax close write 2004 Alex open JavaScript highlighter July 02 replaceChild offset 83".split(" "),
    0, {}));
(function () {
    function d() {
        var d = SyntaxHighlighter.regexLib;
        this.regexList = [{regex: d.multiLineDoubleQuotedString, css: "string"}, {
            regex: d.multiLineSingleQuotedString,
            css: "string"
        }, {regex: d.singleLineCComments, css: "comments"}, {
            regex: d.multiLineCComments,
            css: "comments"
        }, {regex: /\s*#.*/gm, css: "preprocessor"}, {
            regex: new RegExp(this.getKeywords("break case catch continue default delete do else false  for function if in instanceof new null return super switch this throw true try typeof var while with"), "gm"),
            css: "keyword"
        }];
        this.forHtmlScript(d.scriptScriptTags)
    }

    "undefined" != typeof require ? SyntaxHighlighter = require("shCore").SyntaxHighlighter : null;
    d.prototype = new SyntaxHighlighter.Highlighter;
    d.aliases = ["js", "jscript", "javascript"];
    SyntaxHighlighter.brushes.JScript = d;
    "undefined" != typeof exports ? exports.Brush = d : null
})();
(function () {
    function d() {
        this.regexList = [{
            regex: SyntaxHighlighter.regexLib.multiLineCComments,
            css: "comments"
        }, {
            regex: SyntaxHighlighter.regexLib.doubleQuotedString,
            css: "string"
        }, {regex: SyntaxHighlighter.regexLib.singleQuotedString, css: "string"}, {
            regex: /\#[a-fA-F0-9]{3,6}/g,
            css: "value"
        }, {regex: /(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)/g, css: "value"}, {regex: /!important/g, css: "color3"}, {
            regex: new RegExp("\\b([a-z_]|)" + "ascent azimuth background-attachment background-color background-image background-position background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index".replace(/ /g,
                "(?=:)\\b|\\b([a-z_\\*]|\\*|)") + "(?=:)\\b", "gm"), css: "keyword"
        }, {
            regex: new RegExp("\\b" + "above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow".replace(/ /g,
                "(?!-)(?!:)\\b|\\b()") + ":\\b", "g"), css: "value"
        }, {
            regex: new RegExp(this.getKeywords("[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif"), "g"),
            css: "color1"
        }];
        this.forHtmlScript({left: /(&lt;|<)\s*style.*?(&gt;|>)/gi, right: /(&lt;|<)\/\s*style\s*(&gt;|>)/gi})
    }

    "undefined" != typeof require ? SyntaxHighlighter = require("shCore").SyntaxHighlighter : null;
    d.prototype = new SyntaxHighlighter.Highlighter;
    d.aliases = ["css"];
    SyntaxHighlighter.brushes.CSS = d;
    "undefined" !=
    typeof exports ? exports.Brush = d : null
})();
(function () {
    function d() {
        this.regexList = [{
            regex: new XRegExp("(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)", "gm"),
            css: "color2"
        }, {regex: SyntaxHighlighter.regexLib.xmlComments, css: "comments"}, {
            regex: new XRegExp("(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)", "sg"),
            func: function (d, c) {
                c = SyntaxHighlighter.Match;
                var a = d[0], b = (new XRegExp("(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)", "xg")).exec(a), f = [];
                if (null != d.attributes) for (var h, e = new XRegExp("(?<name> [\\w:\\-\\.]+)\\s*=\\s*(?<value> \".*?\"|'.*?'|\\w+)",
                    "xg"); null != (h = e.exec(a));) f.push(new c(h.name, d.index + h.index, "color1")), f.push(new c(h.value, d.index + h.index + h[0].indexOf(h.value), "string"));
                null != b && f.push(new c(b.name, d.index + b[0].indexOf(b.name), "keyword"));
                return f
            }
        }]
    }

    "undefined" != typeof require ? SyntaxHighlighter = require("shCore").SyntaxHighlighter : null;
    d.prototype = new SyntaxHighlighter.Highlighter;
    d.aliases = ["xml", "xhtml", "xslt", "html", "htm"];
    SyntaxHighlighter.brushes.Xml = d;
    "undefined" != typeof exports ? exports.Brush = d : null
})();
(function () {
    function d() {
        this.regexList = [{regex: /^#!.*$/gm, css: "preprocessor bold"}, {
            regex: /\/[\w-\/]+/gm,
            css: "plain"
        }, {
            regex: SyntaxHighlighter.regexLib.singleLinePerlComments,
            css: "comments"
        }, {
            regex: SyntaxHighlighter.regexLib.doubleQuotedString,
            css: "string"
        }, {
            regex: SyntaxHighlighter.regexLib.singleQuotedString,
            css: "string"
        }, {
            regex: new RegExp(this.getKeywords("if fi then elif else for do done until while break continue case function return in eq ne ge le"), "gm"),
            css: "keyword"
        }, {
            regex: new RegExp(this.getKeywords("alias apropos awk basename bash bc bg builtin bzip2 cal cat cd cfdisk chgrp chmod chown chrootcksum clear cmp comm command cp cron crontab csplit cut date dc dd ddrescue declare df diff diff3 dig dir dircolors dirname dirs du echo egrep eject enable env ethtool eval exec exit expand export expr false fdformat fdisk fg fgrep file find fmt fold format free fsck ftp gawk getopts grep groups gzip hash head history hostname id ifconfig import install join kill less let ln local locate logname logout look lpc lpr lprint lprintd lprintq lprm ls lsof make man mkdir mkfifo mkisofs mknod more mount mtools mv netstat nice nl nohup nslookup open op passwd paste pathchk ping popd pr printcap printenv printf ps pushd pwd quota quotacheck quotactl ram rcp read readonly renice remsync rm rmdir rsync screen scp sdiff sed select seq set sftp shift shopt shutdown sleep sort source split ssh strace su sudo sum symlink sync tail tar tee test time times touch top traceroute trap tr true tsort tty type ulimit umask umount unalias uname unexpand uniq units unset unshar useradd usermod users uuencode uudecode v vdir vi watch wc whereis which who whoami Wget xargs yes"),
                "gm"), css: "functions"
        }]
    }

    "undefined" != typeof require ? SyntaxHighlighter = require("shCore").SyntaxHighlighter : null;
    d.prototype = new SyntaxHighlighter.Highlighter;
    d.aliases = ["bash", "shell", "terminal", "cmd"];
    SyntaxHighlighter.brushes.Bash = d;
    "undefined" != typeof exports ? exports.Brush = d : null
})();
(function () {
    function d() {
        this.regexList = [{
            regex: SyntaxHighlighter.regexLib.singleLineCComments,
            css: "comments"
        }, {
            regex: SyntaxHighlighter.regexLib.multiLineCComments,
            css: "comments"
        }, {
            regex: SyntaxHighlighter.regexLib.doubleQuotedString,
            css: "string"
        }, {regex: SyntaxHighlighter.regexLib.singleQuotedString, css: "string"}, {
            regex: /^ *#.*/gm,
            css: "preprocessor"
        }, {
            regex: new RegExp(this.getKeywords("ATOM BOOL BOOLEAN BYTE CHAR COLORREF DWORD DWORDLONG DWORD_PTR DWORD32 DWORD64 FLOAT HACCEL HALF_PTR HANDLE HBITMAP HBRUSH HCOLORSPACE HCONV HCONVLIST HCURSOR HDC HDDEDATA HDESK HDROP HDWP HENHMETAFILE HFILE HFONT HGDIOBJ HGLOBAL HHOOK HICON HINSTANCE HKEY HKL HLOCAL HMENU HMETAFILE HMODULE HMONITOR HPALETTE HPEN HRESULT HRGN HRSRC HSZ HWINSTA HWND INT INT_PTR INT32 INT64 LANGID LCID LCTYPE LGRPID LONG LONGLONG LONG_PTR LONG32 LONG64 LPARAM LPBOOL LPBYTE LPCOLORREF LPCSTR LPCTSTR LPCVOID LPCWSTR LPDWORD LPHANDLE LPINT LPLONG LPSTR LPTSTR LPVOID LPWORD LPWSTR LRESULT PBOOL PBOOLEAN PBYTE PCHAR PCSTR PCTSTR PCWSTR PDWORDLONG PDWORD_PTR PDWORD32 PDWORD64 PFLOAT PHALF_PTR PHANDLE PHKEY PINT PINT_PTR PINT32 PINT64 PLCID PLONG PLONGLONG PLONG_PTR PLONG32 PLONG64 POINTER_32 POINTER_64 PSHORT PSIZE_T PSSIZE_T PSTR PTBYTE PTCHAR PTSTR PUCHAR PUHALF_PTR PUINT PUINT_PTR PUINT32 PUINT64 PULONG PULONGLONG PULONG_PTR PULONG32 PULONG64 PUSHORT PVOID PWCHAR PWORD PWSTR SC_HANDLE SC_LOCK SERVICE_STATUS_HANDLE SHORT SIZE_T SSIZE_T TBYTE TCHAR UCHAR UHALF_PTR UINT UINT_PTR UINT32 UINT64 ULONG ULONGLONG ULONG_PTR ULONG32 ULONG64 USHORT USN VOID WCHAR WORD WPARAM WPARAM WPARAM char bool short int __int32 __int64 __int8 __int16 long float double __wchar_t clock_t _complex _dev_t _diskfree_t div_t ldiv_t _exception _EXCEPTION_POINTERS FILE _finddata_t _finddatai64_t _wfinddata_t _wfinddatai64_t __finddata64_t __wfinddata64_t _FPIEEE_RECORD fpos_t _HEAPINFO _HFILE lconv intptr_t jmp_buf mbstate_t _off_t _onexit_t _PNH ptrdiff_t _purecall_handler sig_atomic_t size_t _stat __stat64 _stati64 terminate_function time_t __time64_t _timeb __timeb64 tm uintptr_t _utimbuf va_list wchar_t wctrans_t wctype_t wint_t signed"),
                "gm"), css: "color1 bold"
        }, {
            regex: new RegExp(this.getKeywords("assert isalnum isalpha iscntrl isdigit isgraph islower isprintispunct isspace isupper isxdigit tolower toupper errno localeconv setlocale acos asin atan atan2 ceil cos cosh exp fabs floor fmod frexp ldexp log log10 modf pow sin sinh sqrt tan tanh jmp_buf longjmp setjmp raise signal sig_atomic_t va_arg va_end va_start clearerr fclose feof ferror fflush fgetc fgetpos fgets fopen fprintf fputc fputs fread freopen fscanf fseek fsetpos ftell fwrite getc getchar gets perror printf putc putchar puts remove rename rewind scanf setbuf setvbuf sprintf sscanf tmpfile tmpnam ungetc vfprintf vprintf vsprintf abort abs atexit atof atoi atol bsearch calloc div exit free getenv labs ldiv malloc mblen mbstowcs mbtowc qsort rand realloc srand strtod strtol strtoul system wcstombs wctomb memchr memcmp memcpy memmove memset strcat strchr strcmp strcoll strcpy strcspn strerror strlen strncat strncmp strncpy strpbrk strrchr strspn strstr strtok strxfrm asctime clock ctime difftime gmtime localtime mktime strftime time"),
                "gm"), css: "functions bold"
        }, {
            regex: new RegExp(this.getKeywords("break case catch class const __finally __exception __try const_cast continue private public protected __declspec default delete deprecated dllexport dllimport do dynamic_cast else enum explicit extern if for friend goto inline mutable naked namespace new noinline noreturn nothrow register reinterpret_cast return selectany sizeof static static_cast struct switch template this thread throw true false try typedef typeid typename union using uuid virtual void volatile whcar_t while"),
                "gm"), css: "keyword bold"
        }]
    }

    "undefined" != typeof require ? SyntaxHighlighter = require("shCore").SyntaxHighlighter : null;
    d.prototype = new SyntaxHighlighter.Highlighter;
    d.aliases = ["cpp", "c"];
    SyntaxHighlighter.brushes.Cpp = d;
    "undefined" != typeof exports ? exports.Brush = d : null
})();
(function () {
    function d() {
        this.regexList = [{
            regex: SyntaxHighlighter.regexLib.singleLineCComments, func: function (d, c) {
                c = 0 == d[0].indexOf("///") ? "color1" : "comments";
                return [new SyntaxHighlighter.Match(d[0], d.index, c)]
            }
        }, {regex: SyntaxHighlighter.regexLib.multiLineCComments, css: "comments"}, {
            regex: /@"(?:[^"]|"")*"/g,
            css: "string"
        }, {
            regex: SyntaxHighlighter.regexLib.doubleQuotedString,
            css: "string"
        }, {regex: SyntaxHighlighter.regexLib.singleQuotedString, css: "string"}, {
            regex: /^\s*#.*/gm,
            css: "preprocessor"
        }, {
            regex: new RegExp(this.getKeywords("abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach get goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed set short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual void while"),
                "gm"), css: "keyword"
        }, {
            regex: /\bpartial(?=\s+(?:class|interface|struct)\b)/g,
            css: "keyword"
        }, {regex: /\byield(?=\s+(?:return|break)\b)/g, css: "keyword"}];
        this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)
    }

    "undefined" != typeof require ? SyntaxHighlighter = require("shCore").SyntaxHighlighter : null;
    d.prototype = new SyntaxHighlighter.Highlighter;
    d.aliases = ["c#", "c-sharp", "csharp", "cs"];
    SyntaxHighlighter.brushes.CSharp = d;
    "undefined" != typeof exports ? exports.Brush = d : null
})();
(function () {
    function d() {
        this.regexList = [{regex: /^\+\+\+.*$/gm, css: "color2"}, {
            regex: /^\-\-\-.*$/gm,
            css: "color2"
        }, {regex: /^\s.*$/gm, css: "color1"}, {regex: /^@@.*@@$/gm, css: "variable"}, {
            regex: /^\+[^\+]{1}.*$/gm,
            css: "string"
        }, {regex: /^\-[^\-]{1}.*$/gm, css: "comments"}]
    }

    "undefined" != typeof require ? SyntaxHighlighter = require("shCore").SyntaxHighlighter : null;
    d.prototype = new SyntaxHighlighter.Highlighter;
    d.aliases = ["diff", "patch"];
    SyntaxHighlighter.brushes.Diff = d;
    "undefined" != typeof exports ? exports.Brush = d :
        null
})();
(function () {
    function d() {
        this.regexList = [{
            regex: SyntaxHighlighter.regexLib.singleLineCComments,
            css: "comments"
        }, {regex: /\/\*([^\*][\s\S]*)?\*\//gm, css: "comments"}, {
            regex: /\/\*(?!\*\/)\*[\s\S]*?\*\//gm,
            css: "preprocessor"
        }, {
            regex: SyntaxHighlighter.regexLib.doubleQuotedString,
            css: "string"
        }, {
            regex: SyntaxHighlighter.regexLib.singleQuotedString,
            css: "string"
        }, {regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi, css: "value"}, {
            regex: /(?!\@interface\b)\@[\$\w]+\b/g,
            css: "color1"
        }, {regex: /\@interface\b/g, css: "color2"},
            {
                regex: new RegExp(this.getKeywords("abstract assert boolean break byte case catch char class const continue default do double else enum extends false final finally float for goto if implements import instanceof int interface long native new null package private protected public return short static strictfp super switch synchronized this throw throws true transient try void volatile while"), "gm"),
                css: "keyword"
            }];
        this.forHtmlScript({left: /(&lt;|<)%[@!=]?/g, right: /%(&gt;|>)/g})
    }

    "undefined" != typeof require ?
        SyntaxHighlighter = require("shCore").SyntaxHighlighter : null;
    d.prototype = new SyntaxHighlighter.Highlighter;
    d.aliases = ["java"];
    SyntaxHighlighter.brushes.Java = d;
    "undefined" != typeof exports ? exports.Brush = d : null
})();
(function () {
    function d() {
        var d = SyntaxHighlighter.regexLib;
        this.regexList = [{regex: d.multiLineCComments, css: "comments"}, {
            regex: d.singleLineCComments,
            css: "comments"
        }, {regex: d.doubleQuotedString, css: "string"}, {
            regex: d.singleQuotedString,
            css: "string"
        }, {regex: /\#[a-fA-F0-9]{3,6}/g, css: "value"}, {
            regex: /\b(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)\b/g,
            css: "value"
        }, {regex: /\$\w+/g, css: "variable"}, {
            regex: new RegExp(this.getKeywords("!important !default"), "g"),
            css: "color3"
        }, {
            regex: new RegExp(this.getKeywords("@import @extend @debug @warn @if @for @while @mixin @include"),
                "g"), css: "preprocessor"
        }, {
            regex: new RegExp("\\b([a-z_]|)" + "ascent azimuth background-attachment background-color background-image background-position background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index".replace(/ /g,
                "(?=:)\\b|\\b([a-z_\\*]|\\*|)") + "(?=:)\\b", "gm"), css: "keyword"
        }, {
            regex: new RegExp("\\b" + "above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero digits disc dotted double embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow".replace(/ /g,
                "(?!-)(?!:)\\b|\\b()") + ":\\b", "g"), css: "value"
        }, {
            regex: new RegExp(this.getKeywords("[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif"), "g"),
            css: "color1"
        }]
    }

    "undefined" != typeof require ? SyntaxHighlighter = require("shCore").SyntaxHighlighter : null;
    d.prototype = new SyntaxHighlighter.Highlighter;
    d.aliases = ["sass", "scss"];
    SyntaxHighlighter.brushes.Sass = d;
    "undefined" != typeof exports ? exports.Brush = d : null
})();
(function () {
    function d() {
        this.regexList = [{
            regex: SyntaxHighlighter.regexLib.singleLineCComments,
            css: "comments"
        }, {
            regex: SyntaxHighlighter.regexLib.multiLineCComments,
            css: "comments"
        }, {
            regex: SyntaxHighlighter.regexLib.doubleQuotedString,
            css: "string"
        }, {regex: SyntaxHighlighter.regexLib.singleQuotedString, css: "string"}, {regex: /\$\w+/g, css: "variable"}, {
            regex: new RegExp(this.getKeywords("abs acos acosh addcslashes addslashes array_change_key_case array_chunk array_combine array_count_values array_diff array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill array_filter array_flip array_intersect array_intersect_assoc array_intersect_key array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map array_merge array_merge_recursive array_multisort array_pad array_pop array_product array_push array_rand array_reduce array_reverse array_search array_shift array_slice array_splice array_sum array_udiff array_udiff_assoc array_udiff_uassoc array_uintersect array_uintersect_assoc array_uintersect_uassoc array_unique array_unshift array_values array_walk array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists closedir closelog copy cos cosh count count_chars date decbin dechex decoct deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br parse_ini_file parse_str parse_url passthru pathinfo print readlink realpath rewind rewinddir rmdir round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime strtoupper strtr strval substr substr_compare"),
                "gmi"), css: "functions"
        }, {
            regex: new RegExp(this.getKeywords("__FILE__ __LINE__ __METHOD__ __FUNCTION__ __CLASS__"), "gmi"),
            css: "constants"
        }, {
            regex: new RegExp(this.getKeywords("abstract and array as break case catch cfunction class clone const continue declare default die do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach function include include_once global goto if implements interface instanceof namespace new old_function or private protected public return require require_once static switch throw try use var while xor "),
                "gm"), css: "keyword"
        }];
        this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags)
    }

    "undefined" != typeof require ? SyntaxHighlighter = require("shCore").SyntaxHighlighter : null;
    d.prototype = new SyntaxHighlighter.Highlighter;
    d.aliases = ["php"];
    SyntaxHighlighter.brushes.Php = d;
    "undefined" != typeof exports ? exports.Brush = d : null
})();
(function () {
    function d() {
    }

    "undefined" != typeof require ? SyntaxHighlighter = require("shCore").SyntaxHighlighter : null;
    d.prototype = new SyntaxHighlighter.Highlighter;
    d.aliases = ["text", "plain", "txt"];
    SyntaxHighlighter.brushes.Plain = d;
    "undefined" != typeof exports ? exports.Brush = d : null
})();
!function (d) {
    function e(a) {
        return void 0 === Function.prototype.name ? (a = /function\s([^(]{1,})\(/.exec(a.toString())) && 1 < a.length ? a[1].trim() : "" : void 0 === a.prototype ? a.constructor.name : a.prototype.constructor.name
    }

    var c = {
        version: "6.0.1", _plugins: {}, _uuids: [], _activePlugins: {}, rtl: function () {
            return "rtl" === d("html").attr("dir")
        }, plugin: function (a, b) {
            b = b || e(a);
            var f = b.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
            this._plugins[f] = this[b] = a
        }, registerPlugin: function (a) {
            var b = e(a.constructor).toLowerCase();
            a.uuid = this.GetYoDigits(6, b);
            a.$element.attr("data-" + b, a.uuid).trigger("init.zf." + b);
            this._activePlugins[a.uuid] = a
        }, unregisterPlugin: function (a) {
            var b = e(a.constructor).toLowerCase();
            delete this._activePlugins[a.uuid];
            a.$element.removeAttr("data-" + b).trigger("destroyed.zf." + b)
        }, _reflow: function (a) {
            var b = Object.keys(this._activePlugins), f = this;
            if (!a) b.forEach(function (a) {
                f._activePlugins[a]._init()
            }); else if ("string" === typeof a) {
                var d = a.split("-")[1];
                d ? this._activePlugins[a]._init() : (d = new RegExp(a,
                    "i"), b.filter(function (a) {
                    return d.test(a)
                }).forEach(function (a) {
                    f._activePlugins[a]._init()
                }))
            }
        }, GetYoDigits: function (a, b) {
            a = a || 6;
            return Math.round(Math.pow(36, a + 1) - Math.random() * Math.pow(36, a)).toString(36).slice(1) + (b ? "-" + b : "")
        }, reflow: function (a, b) {
            "undefined" === typeof b ? b = Object.keys(this._plugins) : "string" === typeof b && (b = [b]);
            var f = this;
            d.each(b, function (b, c) {
                var h = f._plugins[c];
                d(a).find("[data-" + c + "]").addBack("*").each(function () {
                    d(this).attr("zf-plugin") ? console.warn("Tried to initialize " +
                        c + " on an element that already has a Foundation plugin.") : d(this).data("zf-plugin", new h(d(this)))
                })
            })
        }, getFnName: e, transitionend: function (a) {
            var b = {
                transition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend"
            }, f = document.createElement("div"), d, c;
            for (c in b) "undefined" !== typeof f.style[c] && (d = b[c]);
            if (d) return d;
            d = setTimeout(function () {
                a.triggerHandler("transitionend", [a])
            }, 1);
            return "transitionend"
        }, util: {
            throttle: function (a, b) {
                var f =
                    null;
                return function () {
                    var d = this, c = arguments;
                    null === f && (f = setTimeout(function () {
                        a.apply(d, c);
                        f = null
                    }, b))
                }
            }
        }
    };
    window.Foundation = c;
    d.fn.foundation = function (a) {
        var b = typeof a, f = d("meta.foundation-mq"), h = d(".no-js");
        f.length || d('<meta class="foundation-mq">').appendTo(document.head);
        h.length && h.removeClass("no-js");
        if ("undefined" === b) c.MediaQuery._init(), c.reflow(this); else if ("string" === b) {
            var g = Array.prototype.slice.call(arguments, 1), k = this.data("zfPlugin");
            if (void 0 !== k && void 0 !== k[a]) 1 === this.length ?
                k[a].apply(k, g) : this.each(function (b, f) {
                    k[a].apply(d(f).data("zfPlugin"), g)
                }); else throw new ReferenceError("We're sorry, '" + a + "' is not an available method for " + (k ? e(k) : "this element") + ".");
        } else throw new TypeError("We're sorry, '" + b + "' is not a valid parameter. You must use a string representing the method you wish to invoke.");
        return this
    };
    (function () {
        Date.now && window.Date.now || (window.Date.now = Date.now = function () {
            return (new Date).getTime()
        });
        for (var a = ["webkit", "moz"], b = 0; b < a.length && !window.requestAnimationFrame; ++b) {
            var f =
                a[b];
            window.requestAnimationFrame = window[f + "RequestAnimationFrame"];
            window.cancelAnimationFrame = window[f + "CancelAnimationFrame"] || window[f + "CancelRequestAnimationFrame"]
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var d = 0;
            window.requestAnimationFrame = function (a) {
                var b = Date.now(), f = Math.max(d + 16, b);
                return setTimeout(function () {
                    a(d = f)
                }, f - b)
            };
            window.cancelAnimationFrame = clearTimeout
        }
        window.performance && window.performance.now ||
        (window.performance = {
            start: Date.now(), now: function () {
                return Date.now() - this.start
            }
        })
    })();
    Function.prototype.bind || (Function.prototype.bind = function (a) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var b = Array.prototype.slice.call(arguments, 1), f = this, d = function () {
        }, c = function () {
            return f.apply(this instanceof d ? this : a, b.concat(Array.prototype.slice.call(arguments)))
        };
        this.prototype && (d.prototype = this.prototype);
        c.prototype = new d;
        return c
    })
}(jQuery);
!function (d, e) {
    var c = function (a, b) {
        a = a.length ? a[0] : a;
        if (a === e || a === document) throw Error("I'm sorry, Dave. I'm afraid I can't do that.");
        b = a.getBoundingClientRect();
        a = a.parentNode.getBoundingClientRect();
        var f = document.body.getBoundingClientRect(), d = e.pageYOffset, c = e.pageXOffset;
        return {
            width: b.width,
            height: b.height,
            offset: {top: b.top + d, left: b.left + c},
            parentDims: {width: a.width, height: a.height, offset: {top: a.top + d, left: a.left + c}},
            windowDims: {width: f.width, height: f.height, offset: {top: d, left: c}}
        }
    };
    d.Box =
        {
            ImNotTouchingYou: function (a, b, f, d) {
                a = c(a);
                if (b) {
                    var h = c(b);
                    var e = a.offset.top + a.height <= h.height + h.offset.top;
                    b = a.offset.top >= h.offset.top;
                    var m = a.offset.left >= h.offset.left;
                    a = a.offset.left + a.width <= h.width
                } else e = a.offset.top + a.height <= a.windowDims.height + a.windowDims.offset.top, b = a.offset.top >= a.windowDims.offset.top, m = a.offset.left >= a.windowDims.offset.left, a = a.offset.left + a.width <= a.windowDims.width;
                return f ? m === a === !0 : d ? b === e === !0 : -1 === [e, b, m, a].indexOf(!1)
            }, GetDimensions: c, GetOffsets: function (a,
                                                       b, f, d, e, k) {
            a = c(a);
            b = b ? c(b) : null;
            switch (f) {
                case "top":
                    return {left: b.offset.left, top: b.offset.top - (a.height + d)};
                case "left":
                    return {left: b.offset.left - (a.width + e), top: b.offset.top};
                case "right":
                    return {left: b.offset.left + b.width + e, top: b.offset.top};
                case "center top":
                    return {left: b.offset.left + b.width / 2 - a.width / 2, top: b.offset.top - (a.height + d)};
                case "center bottom":
                    return {left: k ? e : b.offset.left + b.width / 2 - a.width / 2, top: b.offset.top + b.height + d};
                case "center left":
                    return {
                        left: b.offset.left - (a.width + e), top: b.offset.top +
                        b.height / 2 - a.height / 2
                    };
                case "center right":
                    return {left: b.offset.left + b.width + e + 1, top: b.offset.top + b.height / 2 - a.height / 2};
                case "center":
                    return {
                        left: a.windowDims.offset.left + a.windowDims.width / 2 - a.width / 2,
                        top: a.windowDims.offset.top + a.windowDims.height / 2 - a.height / 2
                    };
                case "reveal":
                    return {left: (a.windowDims.width - a.width) / 2, top: a.windowDims.offset.top + d};
                case "reveal full":
                    return {left: a.windowDims.offset.left, top: a.windowDims.offset.top};
                default:
                    return {left: b.offset.left, top: b.offset.top + b.height + d}
            }
        }
        }
}(window.Foundation,
    window);
!function (d, e) {
    e.Keyboard = {};
    var c = {
        9: "TAB",
        13: "ENTER",
        27: "ESCAPE",
        32: "SPACE",
        37: "ARROW_LEFT",
        38: "ARROW_UP",
        39: "ARROW_RIGHT",
        40: "ARROW_DOWN"
    }, a = function (a) {
        var b = {}, f;
        for (f in a) b[a[f]] = a[f];
        return b
    }(c);
    e.Keyboard.keys = a;
    var b = function (a) {
        var b = c[a.which || a.keyCode] || String.fromCharCode(a.which).toUpperCase();
        a.shiftKey && (b = "SHIFT_" + b);
        a.ctrlKey && (b = "CTRL_" + b);
        a.altKey && (b = "ALT_" + b);
        return b
    };
    e.Keyboard.parseKey = b;
    var f = {};
    e.Keyboard.handleKey = function (a, c, k) {
        var h = f[e.getFnName(c)];
        a = b(a);
        if (!h) return console.warn("Component not defined!");
        h = "undefined" === typeof h.ltr ? h : e.rtl() ? d.extend({}, h.ltr, h.rtl) : d.extend({}, h.rtl, h.ltr);
        (h = k[h[a]]) && "function" === typeof h ? (h.apply(c), (k.handled || "function" === typeof k.handled) && k.handled.apply(c)) : (k.unhandled || "function" === typeof k.unhandled) && k.unhandled.apply(c)
    };
    e.Keyboard.findFocusable = function (a) {
        return a.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function () {
            return !d(this).is(":visible") ||
            0 > d(this).attr("tabindex") ? !1 : !0
        })
    };
    e.Keyboard.register = function (a, b) {
        f[a] = b
    }
}(jQuery, window.Foundation);
!function (d, e) {
    function c(a) {
        var b = {};
        if ("string" !== typeof a) return b;
        a = a.trim().slice(1, -1);
        return a ? b = a.split("&").reduce(function (a, b) {
            var f = b.replace(/\+/g, " ").split("=");
            b = f[0];
            f = f[1];
            b = decodeURIComponent(b);
            f = void 0 === f ? null : decodeURIComponent(f);
            a.hasOwnProperty(b) ? Array.isArray(a[b]) ? a[b].push(f) : a[b] = [a[b], f] : a[b] = f;
            return a
        }, {}) : b
    }

    e.MediaQuery = {
        queries: [], current: "", atLeast: function (a) {
            return (a = this.get(a)) ? window.matchMedia(a).matches : !1
        }, get: function (a) {
            for (var b in this.queries) {
                var f =
                    this.queries[b];
                if (a === f.name) return f.value
            }
            return null
        }, _init: function () {
            var a = d(".foundation-mq").css("font-family"), a = c(a), b;
            for (b in a) this.queries.push({name: b, value: "only screen and (min-width: " + a[b] + ")"});
            this.current = this._getCurrentSize();
            this._watcher()
        }, _getCurrentSize: function () {
            var a, b;
            for (b in this.queries) {
                var f = this.queries[b];
                window.matchMedia(f.value).matches && (a = f)
            }
            return "object" === typeof a ? a.name : a
        }, _watcher: function () {
            var a = this;
            d(window).on("resize.zf.mediaquery", function () {
                var b =
                    a._getCurrentSize();
                b !== a.current && (d(window).trigger("changed.zf.mediaquery", [b, a.current]), a.current = b)
            })
        }
    };
    window.matchMedia || (window.matchMedia = function () {
        var a = window.styleMedia || window.media;
        if (!a) {
            var b = document.createElement("style"), f = document.getElementsByTagName("script")[0], d = null;
            b.type = "text/css";
            b.id = "matchmediajs-test";
            f.parentNode.insertBefore(b, f);
            d = "getComputedStyle" in window && window.getComputedStyle(b, null) || b.currentStyle;
            a = {
                matchMedium: function (a) {
                    a = "@media " + a + "{ #matchmediajs-test { width: 1px; } }";
                    b.styleSheet ? b.styleSheet.cssText = a : b.textContent = a;
                    return "1px" === d.width
                }
            }
        }
        return function (b) {
            return {matches: a.matchMedium(b || "all"), media: b || "all"}
        }
    }())
}(jQuery, Foundation);
!function (d, e) {
    function c(f, c, g, k) {
        function h() {
            c[0].style.transitionDuration = 0;
            c.removeClass(l + " " + p + " " + g)
        }

        c = d(c).eq(0);
        if (c.length) {
            var l = f ? a[0] : a[1], p = f ? b[0] : b[1];
            h();
            c.addClass(g).css("transition", "none");
            requestAnimationFrame(function () {
                c.addClass(l);
                f && c.show()
            });
            requestAnimationFrame(function () {
                c[0].offsetWidth;
                c.css("transition", "");
                c.addClass(p)
            });
            c.one(e.transitionend(c), function () {
                f || c.hide();
                h();
                k && k.apply(c)
            })
        }
    }

    var a = ["mui-enter", "mui-leave"], b = ["mui-enter-active", "mui-leave-active"];
    e.Move = function (a, b, d) {
        function f(n) {
            e || (e = window.performance.now());
            c = n - e;
            d.apply(b);
            c < a ? h = window.requestAnimationFrame(f, b) : (window.cancelAnimationFrame(h), b.trigger("finished.zf.animate", [b]).triggerHandler("finished.zf.animate", [b]))
        }

        var c, e = null;
        var h = window.requestAnimationFrame(f)
    };
    e.Motion = {
        animateIn: function (a, b, d) {
            c(!0, a, b, d)
        }, animateOut: function (a, b, d) {
            c(!1, a, b, d)
        }
    }
}(jQuery, Foundation);
!function (d, e) {
    e.Nest = {
        Feather: function (c, a) {
            c.attr("role", "menubar");
            a = a || "zf";
            c = c.find("li").attr({role: "menuitem"});
            var b = "is-" + a + "-submenu", f = b + "-item", e = "is-" + a + "-submenu-parent";
            c.each(function () {
                var a = d(this), c = a.children("ul");
                c.length && (a.addClass("has-submenu " + e), c.addClass("submenu " + b).attr("data-submenu", ""));
                a.parent("[data-submenu]").length && a.addClass("is-submenu-item " + f)
            })
        }, Burn: function (d, a) {
            d.find("li").removeAttr("tabindex");
            var b = "is-" + a + "-submenu", f = b + "-item";
            a = "is-" + a + "-submenu-parent";
            d.find("*").removeClass(b + " " + f + " " + a + " has-submenu is-submenu-item submenu is-active").removeAttr("data-submenu").css("display", "")
        }
    }
}(jQuery, window.Foundation);
!function (d, e) {
    e.Timer = function (d, a, b) {
        var f = this, c = a.duration, e = Object.keys(d.data())[0] || "timer", k = -1, m, l;
        this.restart = function () {
            k = -1;
            clearTimeout(l);
            this.start()
        };
        this.start = function () {
            clearTimeout(l);
            k = 0 >= k ? c : k;
            d.data("paused", !1);
            m = Date.now();
            l = setTimeout(function () {
                a.infinite && f.restart();
                b()
            }, k);
            d.trigger("timerstart.zf." + e)
        };
        this.pause = function () {
            clearTimeout(l);
            d.data("paused", !0);
            var a = Date.now();
            k -= a - m;
            d.trigger("timerpaused.zf." + e)
        }
    };
    e.onImagesLoaded = function (c, a) {
        var b = c.length;
        0 ===
        b && a();
        var f = function () {
            b--;
            0 === b && a()
        };
        c.each(function () {
            if (this.complete) f(); else if ("undefined" !== typeof this.naturalWidth && 0 < this.naturalWidth) f(); else d(this).one("load", function () {
                f()
            })
        })
    }
}(jQuery, window.Foundation);
(function (d) {
    function e() {
        this.removeEventListener("touchmove", c);
        this.removeEventListener("touchend", e);
        k = !1
    }

    function c(a) {
        d.spotSwipe.preventDefault && a.preventDefault();
        if (k) {
            var c = b - a.touches[0].pageX;
            a = f - a.touches[0].pageY;
            var m;
            g = (new Date).getTime() - h;
            Math.abs(c) >= d.spotSwipe.moveThreshold && g <= d.spotSwipe.timeThreshold ? m = 0 < c ? "left" : "right" : Math.abs(a) >= d.spotSwipe.moveThreshold && g <= d.spotSwipe.timeThreshold && (m = 0 < a ? "down" : "up");
            m && (e.call(this), d(this).trigger("swipe", m).trigger("swipe" + m))
        }
    }

    function a(a) {
        1 == a.touches.length && (b = a.touches[0].pageX, f = a.touches[0].pageY, k = !0, h = (new Date).getTime(), this.addEventListener("touchmove", c, !1), this.addEventListener("touchend", e, !1))
    }

    d.spotSwipe = {
        version: "1.0.0",
        enabled: "ontouchstart" in document.documentElement,
        preventDefault: !0,
        moveThreshold: 75,
        timeThreshold: 200
    };
    var b, f, h, g, k = !1;
    d.event.special.swipe = {
        setup: function () {
            this.addEventListener && this.addEventListener("touchstart", a, !1)
        }
    };
    d.each(["left", "up", "down", "right"], function () {
        d.event.special["swipe" +
        this] = {
            setup: function () {
                d(this).on("swipe", d.noop)
            }
        }
    })
})(jQuery);
!function (d) {
    d.fn.addTouch = function () {
        this.each(function (e, c) {
            d(c).bind("touchstart touchmove touchend touchcancel", function () {
                var a = event.changedTouches[0],
                    b = {touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup"}[event.type],
                    d = document.createEvent("MouseEvent");
                d.initMouseEvent(b, !0, !0, window, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null);
                a.target.dispatchEvent(d)
            })
        })
    }
}(jQuery);
!function (d, e) {
    e(document).on("click.zf.trigger", "[data-open]", function () {
        var a = e(this).data("open");
        e("#" + a).triggerHandler("open.zf.trigger", [e(this)])
    });
    e(document).on("click.zf.trigger", "[data-close]", function () {
        var a = e(this).data("close");
        a ? e("#" + a).triggerHandler("close.zf.trigger", [e(this)]) : e(this).trigger("close.zf.trigger")
    });
    e(document).on("click.zf.trigger", "[data-toggle]", function () {
        var a = e(this).data("toggle");
        e("#" + a).triggerHandler("toggle.zf.trigger", [e(this)])
    });
    e(document).on("close.zf.trigger",
        "[data-closable]", function () {
            var a = e(this).data("closable") || "fade-out";
            d.Motion ? d.Motion.animateOut(e(this), a, function () {
                e(this).trigger("closed.zf")
            }) : e(this).fadeOut().trigger("closed.zf")
        });
    var c = function () {
        for (var a = ["WebKit", "Moz", "O", "Ms", ""], b = 0; b < a.length; b++) if (a[b] + "MutationObserver" in window) return window[a[b] + "MutationObserver"];
        return !1
    }(), a = function () {
        g();
        f();
        h();
        b()
    };
    e(window).load(function () {
        a()
    });
    var b = function (a) {
        var b = e("[data-yeti-box]"), d = ["dropdown", "tooltip", "reveal"];
        a && ("string" ===
        typeof a ? d.push(a) : "object" === typeof a && "string" === typeof a[0] ? d.concat(a) : console.error("Plugin names must be strings"));
        b.length && (a = d.map(function (a) {
            return "closeme.zf." + a
        }).join(" "), e(window).off(a).on(a, function (a, b) {
            a = a.namespace.split(".")[0];
            e("[data-" + a + "]").not('[data-yeti-box="' + b + '"]').each(function () {
                var a = e(this);
                a.triggerHandler("close.zf.trigger", [a])
            })
        }))
    }, f = function (a) {
        var b, d = e("[data-resize]");
        if (d.length) e(window).off("resize.zf.trigger").on("resize.zf.trigger", function (f) {
            b &&
            clearTimeout(b);
            b = setTimeout(function () {
                c || d.each(function () {
                    e(this).triggerHandler("resizeme.zf.trigger")
                });
                d.attr("data-events", "resize")
            }, a || 10)
        })
    }, h = function (a) {
        var b, d = e("[data-scroll]");
        if (d.length) e(window).off("scroll.zf.trigger").on("scroll.zf.trigger", function (f) {
            b && clearTimeout(b);
            b = setTimeout(function () {
                c || d.each(function () {
                    e(this).triggerHandler("scrollme.zf.trigger")
                });
                d.attr("data-events", "scroll")
            }, a || 10)
        })
    }, g = function () {
        if (!c) return !1;
        var a = document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"),
            b = function (a) {
                a = e(a[0].target);
                switch (a.attr("data-events")) {
                    case "resize":
                        a.triggerHandler("resizeme.zf.trigger", [a]);
                        break;
                    case "scroll":
                        a.triggerHandler("scrollme.zf.trigger", [a, window.pageYOffset]);
                        break;
                    default:
                        return !1
                }
            };
        if (a.length) for (var d = 0; d <= a.length - 1; d++) (new c(b)).observe(a[d], {
            attributes: !0,
            childList: !1,
            characterData: !1,
            subtree: !1,
            attributeFilter: ["data-events"]
        })
    };
    d.IHearYou = a
}(window.Foundation, window.jQuery);
!function (d, e) {
    function c(a, b) {
        this.$element = a;
        this.options = e.extend({}, c.defaults, this.$element.data(), b);
        this.$window = e(window);
        this.name = "Abide";
        this.attr = "data-abide";
        this._init();
        this._events();
        d.registerPlugin(this)
    }

    c.defaults = {
        validateOn: "fieldChange",
        labelErrorClass: "is-invalid-label",
        inputErrorClass: "is-invalid-input",
        formErrorSelector: ".form-error",
        formErrorClass: "is-visible",
        patterns: {
            alpha: /^[a-zA-Z]+$/,
            alpha_numeric: /^[a-zA-Z0-9]+$/,
            integer: /^[-+]?\d+$/,
            number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
            card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            cvv: /^([0-9]){3,4}$/,
            email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
            url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
            domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
            datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
            date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
            dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
            month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
            day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
            color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
        },
        validators: {
            equalTo: function (a, b, d) {
                return document.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value === a.value
            }
        }
    };
    c.prototype._init = function () {
    };
    c.prototype._events = function () {
        var a = this;
        this.$element.off(".abide").on("reset.fndtn.abide", function (b) {
            a.resetForm(e(this))
        }).on("submit.fndtn.abide", function (b) {
            b.preventDefault();
            a.validateForm(a.$element)
        }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide",
            function (b) {
                "fieldChange" === a.options.validateOn && a.validateInput(e(b.target), a.$element)
            }).on("keydown.fndtn.abide", function (a) {
        })
    };
    c.prototype._reflow = function () {
    };
    c.prototype.requiredCheck = function (a) {
        switch (a[0].type) {
            case "text":
                return a.attr("required") && !a.val() ? !1 : !0;
            case "checkbox":
                return a.attr("required") && !a.is(":checked") ? !1 : !0;
            case "radio":
                return a.attr("required") && !a.is(":checked") ? !1 : !0;
            default:
                return !a.attr("required") || a.val() && a.val().length && !a.is(":empty") ? !0 : !1
        }
    };
    c.prototype.findLabel =
        function (a) {
            return a.next("label").length ? a.next("label") : a.closest("label")
        };
    c.prototype.addErrorClasses = function (a) {
        var b = this.findLabel(a), d = a.next(this.options.formErrorSelector) || a.find(this.options.formErrorSelector);
        b && b.addClass(this.options.labelErrorClass);
        d && d.addClass(this.options.formErrorClass);
        a.addClass(this.options.inputErrorClass)
    };
    c.prototype.removeErrorClasses = function (a) {
        var b = this.findLabel(a), d = a.next(this.options.formErrorSelector) || a.find(this.options.formErrorSelector);
        b &&
        b.hasClass(this.options.labelErrorClass) && b.removeClass(this.options.labelErrorClass);
        d && d.hasClass(this.options.formErrorClass) && d.removeClass(this.options.formErrorClass);
        a.hasClass(this.options.inputErrorClass) && a.removeClass(this.options.inputErrorClass)
    };
    c.prototype.validateInput = function (a, b) {
        var d = this;
        b.find('input[type="text"]');
        b.find('input[type="checkbox"]');
        if ("text" === a[0].type) d.requiredCheck(a) && d.validateText(a) ? (d.removeErrorClasses(a), a.trigger("valid.fndtn.abide", a[0])) : (d.addErrorClasses(a),
            a.trigger("invalid.fndtn.abide", a[0])); else if ("radio" === a[0].type) {
            var c = a.attr("name");
            b = a.siblings("label");
            d.validateRadio(c) ? (e(b).each(function () {
                e(this).hasClass(d.options.labelErrorClass) && e(this).removeClass(d.options.labelErrorClass)
            }), a.trigger("valid.fndtn.abide", a[0])) : (e(b).each(function () {
                e(this).addClass(d.options.labelErrorClass)
            }), a.trigger("invalid.fndtn.abide", a[0]))
        } else "checkbox" === a[0].type ? d.requiredCheck(a) ? (d.removeErrorClasses(a), a.trigger("valid.fndtn.abide", a[0])) : (d.addErrorClasses(a),
            a.trigger("invalid.fndtn.abide", a[0])) : d.requiredCheck(a) && d.validateText(a) ? (d.removeErrorClasses(a), a.trigger("valid.fndtn.abide", a[0])) : (d.addErrorClasses(a), a.trigger("invalid.fndtn.abide", a[0]))
    };
    c.prototype.validateForm = function (a) {
        for (var b = a.find("input"), d = a.find("input").length, c = 0; c < d;) this.validateInput(e(b[c]), a), c++;
        a.find(".form-error.is-visible").length || a.find(".is-invalid-label").length ? a.find("[data-abide-error]").css("display", "block") : a.find("[data-abide-error]").css("display",
            "none")
    };
    c.prototype.validateText = function (a) {
        var b = this.options.patterns, d = e(a).val();
        a = e(a).attr("pattern");
        return 0 === d.length ? !0 : d.match(b[a]) ? !0 : !1
    };
    c.prototype.validateRadio = function (a) {
        var b = this;
        e(':radio[name="' + a + '"]').siblings("label");
        var d = 0;
        e(':radio[name="' + a + '"]').each(function () {
            b.requiredCheck(e(this)) || d++;
            e(this).is(":checked") && (d = 0)
        });
        return 0 < d ? !1 : !0
    };
    c.prototype.matchValidation = function (a, b) {
    };
    c.prototype.resetForm = function (a) {
        e("[" + this.invalidAttr + "]", a).removeAttr("data-invalid");
        e("." + this.options.labelErrorClass, a).not("small").removeClass(this.options.labelErrorClass);
        e("." + this.options.inputErrorClass, a).not("small").removeClass(this.options.inputErrorClass);
        e(".form-error.is-visible").removeClass("is-visible");
        a.find("[data-abide-error]").css("display", "none");
        e(":input", a).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr("data-invalid")
    };
    c.prototype.destroy = function () {
    };
    d.plugin(c, "Abide");
    "undefined" !== typeof module && "undefined" !== typeof module.exports &&
    (module.exports = c);
    "function" === typeof define && define(["foundation"], function () {
        return c
    })
}(Foundation, jQuery);
!function (d, e) {
    function c(a, b) {
        this.$element = a;
        this.options = d.extend({}, c.defaults, this.$element.data(), b);
        this._init();
        e.registerPlugin(this);
        e.Keyboard.register("Accordion", {ENTER: "toggle", SPACE: "toggle", ARROW_DOWN: "next", ARROW_UP: "previous"})
    }

    c.defaults = {slideSpeed: 250, multiExpand: !1, allowAllClosed: !1};
    c.prototype._init = function () {
        this.$element.attr("role", "tablist");
        this.$tabs = this.$element.children("li");
        this.$tabs.each(function (a, c) {
            a = d(c);
            var b = a.find("[data-tab-content]"), f = b[0].id || e.GetYoDigits(6,
                "accordion");
            c = c.id || f + "-label";
            a.find("a:first").attr({"aria-controls": f, role: "tab", id: c, "aria-expanded": !1, "aria-selected": !1});
            b.attr({role: "tabpanel", "aria-labelledby": c, "aria-hidden": !0, id: f})
        });
        var a = this.$element.find(".is-active").children("[data-tab-content]");
        a.length && this.down(a, !0);
        this._events()
    };
    c.prototype._events = function () {
        var a = this;
        this.$tabs.each(function () {
            var b = d(this), c = b.children("[data-tab-content]");
            if (c.length) b.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion",
                function (d) {
                    d.preventDefault();
                    b.hasClass("is-active") ? (a.options.allowAllClosed || b.siblings().hasClass("is-active")) && a.up(c) : a.down(c)
                }).on("keydown.zf.accordion", function (d) {
                e.Keyboard.handleKey(d, a, {
                    toggle: function () {
                        a.toggle(c)
                    }, next: function () {
                        b.next().find("a").focus().trigger("click.zf.accordion")
                    }, previous: function () {
                        b.prev().find("a").focus().trigger("click.zf.accordion")
                    }, handled: function () {
                        d.preventDefault();
                        d.stopPropagation()
                    }
                })
            })
        })
    };
    c.prototype.toggle = function (a) {
        a.parent().hasClass("is-active") ?
            (this.options.allowAllClosed || a.parent().siblings().hasClass("is-active")) && this.up(a) : this.down(a)
    };
    c.prototype.down = function (a, b) {
        var c = this;
        if (!this.options.multiExpand && !b) {
            var h = this.$element.find(".is-active").children("[data-tab-content]");
            h.length && this.up(h)
        }
        a.attr("aria-hidden", !1).parent("[data-tab-content]").addBack().parent().addClass("is-active");
        e.Move(c.options.slideSpeed, a, function () {
            a.slideDown(c.options.slideSpeed)
        });
        b || e._reflow(this.$element.attr("data-accordion"));
        d("#" + a.attr("aria-labelledby")).attr({
            "aria-expanded": !0,
            "aria-selected": !0
        });
        this.$element.trigger("down.zf.accordion", [a])
    };
    c.prototype.up = function (a) {
        var b = a.parent().siblings(), c = this,
            b = this.options.multiExpand ? b.hasClass("is-active") : a.parent().hasClass("is-active");
        if (this.options.allowAllClosed || b) e.Move(this.options.slideSpeed, a, function () {
            a.slideUp(c.options.slideSpeed)
        }), a.attr("aria-hidden", !0).parent().removeClass("is-active"), d("#" + a.attr("aria-labelledby")).attr({
            "aria-expanded": !1,
            "aria-selected": !1
        }), this.$element.trigger("up.zf.accordion",
            [a])
    };
    c.prototype.destroy = function () {
        this.$element.find("[data-tab-content]").slideUp(0).css("display", "");
        this.$element.find("a").off(".zf.accordion");
        e.unregisterPlugin(this)
    };
    e.plugin(c, "Accordion")
}(jQuery, window.Foundation);
!function (d) {
    function e(c, a) {
        this.$element = c;
        this.options = d.extend({}, e.defaults, this.$element.data(), a);
        Foundation.Nest.Feather(this.$element, "accordion");
        this._init();
        Foundation.registerPlugin(this);
        Foundation.Keyboard.register("AccordionMenu", {
            ENTER: "toggle",
            SPACE: "toggle",
            ARROW_RIGHT: "open",
            ARROW_UP: "up",
            ARROW_DOWN: "down",
            ARROW_LEFT: "close",
            ESCAPE: "closeAll",
            TAB: "down",
            SHIFT_TAB: "up"
        })
    }

    e.defaults = {slideSpeed: 250, multiOpen: !0};
    e.prototype._init = function () {
        this.$element.find("[data-submenu]").not(".is-active").slideUp(0);
        this.$element.attr({role: "tablist", "aria-multiselectable": this.options.multiOpen});
        this.$menuLinks = this.$element.find(".has-submenu");
        this.$menuLinks.each(function () {
            var a = this.id || Foundation.GetYoDigits(6, "acc-menu-link"), c = d(this),
                e = c.children("[data-submenu]"), g = e[0].id || Foundation.GetYoDigits(6, "acc-menu"),
                k = e.hasClass("is-active");
            c.attr({"aria-controls": g, "aria-expanded": k, "aria-selected": !1, role: "tab", id: a});
            e.attr({"aria-labelledby": a, "aria-hidden": !k, role: "tabpanel", id: g})
        });
        var c = this.$element.find(".is-active");
        if (c.length) {
            var a = this;
            c.each(function () {
                a.down(d(this))
            })
        }
        this._events()
    };
    e.prototype._events = function () {
        var c = this;
        this.$element.find("li").each(function () {
            var a = d(this).children("[data-submenu]");
            if (a.length) d(this).children("a").off("click.zf.accordionmenu").on("click.zf.accordionmenu", function (b) {
                b.preventDefault();
                c.toggle(a)
            })
        }).on("keydown.zf.accordionmenu", function (a) {
            var b = d(this), f = b.parent("ul").children("li"), e, g, k = b.children("[data-submenu]");
            f.each(function (a) {
                d(this).is(b) && (e = f.eq(Math.max(0,
                    a - 1)), g = f.eq(Math.min(a + 1, f.length - 1)), d(this).children("[data-submenu]:visible").length && (g = b.find("li:first-child")), d(this).is(":first-child") ? e = b.parents("li").first() : e.children("[data-submenu]:visible").length && (e = e.find("li:last-child")), d(this).is(":last-child") && (g = b.parents("li").first().next("li")))
            });
            Foundation.Keyboard.handleKey(a, c, {
                open: function () {
                    k.is(":hidden") && (c.down(k), k.find("li").first().focus())
                }, close: function () {
                    k.length && !k.is(":hidden") ? c.up(k) : b.parent("[data-submenu]").length &&
                        (c.up(b.parent("[data-submenu]")), b.parents("li").first().focus())
                }, up: function () {
                    e.focus()
                }, down: function () {
                    g.focus()
                }, toggle: function () {
                    b.children("[data-submenu]").length && c.toggle(b.children("[data-submenu]"))
                }, closeAll: function () {
                    c.hideAll()
                }, handled: function () {
                    a.preventDefault();
                    a.stopImmediatePropagation()
                }
            })
        })
    };
    e.prototype.hideAll = function () {
        this.$element.find("[data-submenu]").slideUp(this.options.slideSpeed)
    };
    e.prototype.toggle = function (d) {
        d.is(":hidden") ? this.down(d) : this.up(d)
    };
    e.prototype.down =
        function (d) {
            var a = this;
            console.log(d);
            this.options.multiOpen || this.up(this.$element.find(".is-active").not(d.parentsUntil(this.$element)));
            d.addClass("is-active").attr({"aria-hidden": !1}).parent(".has-submenu").attr({
                "aria-expanded": !0,
                "aria-selected": !0
            });
            Foundation.Move(this.options.slideSpeed, d, function () {
                d.slideDown(a.options.slideSpeed)
            });
            this.$element.trigger("down.zf.accordionMenu", [d])
        };
    e.prototype.up = function (d) {
        var a = this;
        Foundation.Move(this.options.slideSpeed, d, function () {
            d.slideUp(a.options.slideSpeed)
        });
        d.attr("aria-hidden", !0).find("[data-submenu]").slideUp(0).attr("aria-hidden", !0).end().parent(".has-submenu").attr({
            "aria-expanded": !1,
            "aria-selected": !1
        });
        this.$element.trigger("up.zf.accordionMenu", [d])
    };
    e.prototype.destroy = function () {
        this.$element.find("[data-submenu]").slideDown(0).css("display", "");
        this.$element.find("a").off("click.zf.accordionMenu");
        Foundation.Nest.Burn(this.$element, "accordion");
        Foundation.unregisterPlugin(this)
    };
    Foundation.plugin(e, "AccordionMenu")
}(jQuery, window.Foundation);
!function (d, e) {
    function c(a, b) {
        this.$element = a;
        this.options = d.extend({}, c.defaults, this.$element.data(), b);
        e.Nest.Feather(this.$element, "drilldown");
        this._init();
        e.registerPlugin(this);
        e.Keyboard.register("Drilldown", {
            ENTER: "open",
            SPACE: "open",
            ARROW_RIGHT: "next",
            ARROW_UP: "up",
            ARROW_DOWN: "down",
            ARROW_LEFT: "previous",
            ESCAPE: "close",
            TAB: "down",
            SHIFT_TAB: "up"
        })
    }

    c.defaults = {
        backButton: '<li class="js-drilldown-back" tabindex="0"><a>Back</a></li>',
        wrapper: "<div></div>",
        closeOnClick: !1
    };
    c.prototype._init =
        function () {
            this.$submenuAnchors = this.$element.find("li.has-submenu");
            this.$submenus = this.$submenuAnchors.children("[data-submenu]").addClass("is-drilldown-sub");
            this.$menuItems = this.$element.find("li").not(".js-drilldown-back").attr("role", "menuitem");
            this._prepareMenu();
            this._keyboardEvents()
        };
    c.prototype._prepareMenu = function () {
        var a = this;
        this.$submenuAnchors.each(function () {
            var b = d(this);
            b.find("a")[0].removeAttribute("href");
            b.children("[data-submenu]").attr({"aria-hidden": !0, tabindex: 0, role: "menu"});
            a._events(b)
        });
        this.$submenus.each(function () {
            var b = d(this);
            b.find(".js-drilldown-back").length || (b.prepend(a.options.backButton), a._back(b))
        });
        this.$element.parent().hasClass("is-drilldown") || (this.$wrapper = d(this.options.wrapper).addClass("is-drilldown").css(this._getMaxDims()), this.$element.wrap(this.$wrapper))
    };
    c.prototype._events = function (a) {
        var b = this;
        a.off("click.zf.drilldown").on("click.zf.drilldown", function (c) {
            c.stopImmediatePropagation();
            c.preventDefault();
            if (c.target !== c.currentTarget.firstElementChild) return !1;
            b._show(a);
            if (b.options.closeOnClick) {
                var f = d("body").not(b.$wrapper);
                f.off(".zf.drilldown").on("click.zf.drilldown", function (a) {
                    a.preventDefault();
                    b._hideAll();
                    f.off(".zf.drilldown")
                })
            }
        })
    };
    c.prototype._keyboardEvents = function () {
        var a = this;
        this.$menuItems.add(this.$element.find(".js-drilldown-back")).on("keydown.zf.drilldown", function (b) {
            var c = d(this), h = c.parent("ul").children("li"), g, k;
            h.each(function (a) {
                d(this).is(c) && (g = h.eq(Math.max(0, a - 1)), k = h.eq(Math.min(a + 1, h.length - 1)))
            });
            e.Keyboard.handleKey(b,
                a, {
                    next: function () {
                        c.is(a.$submenuAnchors) && (a._show(c), c.on(e.transitionend(c), function () {
                            c.find("ul li").filter(a.$menuItems).first().focus()
                        }))
                    }, previous: function () {
                        a._hide(c.parent("ul"));
                        c.parent("ul").on(e.transitionend(c), function () {
                            setTimeout(function () {
                                c.parent("ul").parent("li").focus()
                            }, 1)
                        })
                    }, up: function () {
                        g.focus()
                    }, down: function () {
                        k.focus()
                    }, close: function () {
                        a._back()
                    }, open: function () {
                        c.is(a.$menuItems) ? c.is(a.$submenuAnchors) && (a._show(c), setTimeout(function () {
                                c.find("ul li").filter(a.$menuItems).first().focus()
                            },
                            1)) : (a._hide(c.parent("ul")), setTimeout(function () {
                            c.parent("ul").parent("li").focus()
                        }, 1))
                    }, handled: function () {
                        b.preventDefault();
                        b.stopImmediatePropagation()
                    }
                })
        })
    };
    c.prototype._hideAll = function () {
        var a = this.$element.find(".is-drilldown-sub.is-active").addClass("is-closing");
        a.one(e.transitionend(a), function (b) {
            a.removeClass("is-active is-closing")
        });
        this.$element.trigger("closed.zf.drilldown")
    };
    c.prototype._back = function (a) {
        var b = this;
        a.off("click.zf.drilldown");
        a.children(".js-drilldown-back").on("click.zf.drilldown",
            function (d) {
                d.stopImmediatePropagation();
                b._hide(a)
            })
    };
    c.prototype._menuLinkEvents = function () {
        var a = this;
        this.$menuItems.not(".has-submenu").off("click.zf.drilldown").on("click.zf.drilldown", function (b) {
            setTimeout(function () {
                a._hideAll()
            }, 0)
        })
    };
    c.prototype._show = function (a) {
        a.children("[data-submenu]").addClass("is-active");
        this.$element.trigger("open.zf.drilldown", [a])
    };
    c.prototype._hide = function (a) {
        a.addClass("is-closing").one(e.transitionend(a), function () {
            a.removeClass("is-active is-closing")
        });
        a.trigger("hide.zf.drilldown", [a])
    };
    c.prototype._getMaxDims = function () {
        var a = 0, b = {};
        this.$submenus.add(this.$element).each(function () {
            var b = d(this).children("li").length;
            a = b > a ? b : a
        });
        b.height = a * this.$menuItems[0].getBoundingClientRect().height + "px";
        b.width = this.$element[0].getBoundingClientRect().width + "px";
        return b
    };
    c.prototype.destroy = function () {
        this._hideAll();
        e.Nest.Burn(this.$element, "drilldown");
        this.$element.unwrap().find(".js-drilldown-back").remove().end().find(".is-active, .is-closing, .is-drilldown-sub").removeClass("is-active is-closing is-drilldown-sub").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role").off(".zf.drilldown").end().off("zf.drilldown");
        e.unregisterPlugin(this)
    };
    e.plugin(c, "Drilldown")
}(jQuery, window.Foundation);
!function (d, e) {
    function c(a, b) {
        this.$element = a;
        this.options = d.extend({}, c.defaults, this.$element.data(), b);
        this._init();
        e.registerPlugin(this);
        e.Keyboard.register("Dropdown", {
            ENTER: "open",
            SPACE: "open",
            ESCAPE: "close",
            TAB: "tab_forward",
            SHIFT_TAB: "tab_backward"
        })
    }

    c.defaults = {hoverDelay: 250, hover: !1, vOffset: 1, hOffset: 1, positionClass: "", trapFocus: !1};
    c.prototype._init = function () {
        var a = this.$element.attr("id");
        this.$anchor = d('[data-toggle="' + a + '"]') || d('[data-open="' + a + '"]');
        this.$anchor.attr({
            "aria-controls": a,
            "data-is-focus": !1, "data-yeti-box": a, "aria-haspopup": !0, "aria-expanded": !1
        });
        this.options.positionClass = this.getPositionClass();
        this.counter = 4;
        this.usedPositions = [];
        this.$element.attr({
            "aria-hidden": "true",
            "data-yeti-box": a,
            "data-resize": a,
            "aria-labelledby": this.$anchor[0].id || e.GetYoDigits(6, "dd-anchor")
        });
        this._events()
    };
    c.prototype.getPositionClass = function () {
        var a = this.$element[0].className.match(/(top|left|right)/g);
        return a = a ? a[0] : ""
    };
    c.prototype._reposition = function (a) {
        this.usedPositions.push(a ?
            a : "bottom");
        !a && 0 > this.usedPositions.indexOf("top") ? this.$element.addClass("top") : "top" === a && 0 > this.usedPositions.indexOf("bottom") ? this.$element.removeClass(a) : "left" === a && 0 > this.usedPositions.indexOf("right") ? this.$element.removeClass(a).addClass("right") : "right" === a && 0 > this.usedPositions.indexOf("left") ? this.$element.removeClass(a).addClass("left") : !a && -1 < this.usedPositions.indexOf("top") && 0 > this.usedPositions.indexOf("left") ? this.$element.addClass("left") : "top" === a && -1 < this.usedPositions.indexOf("bottom") &&
        0 > this.usedPositions.indexOf("left") ? this.$element.removeClass(a).addClass("left") : ("left" === a && -1 < this.usedPositions.indexOf("right") && 0 > this.usedPositions.indexOf("bottom") || "right" === a && -1 < this.usedPositions.indexOf("left") && this.usedPositions.indexOf("bottom"), this.$element.removeClass(a));
        this.classChanged = !0;
        this.counter--
    };
    c.prototype._setPosition = function () {
        if ("false" === this.$anchor.attr("aria-expanded")) return !1;
        var a = this.getPositionClass(), b = e.Box.GetDimensions(this.$element);
        e.Box.GetDimensions(this.$anchor);
        if (b.width >= b.windowDims.width || !this.counter && !e.Box.ImNotTouchingYou(this.$element)) return this.$element.offset(e.Box.GetOffsets(this.$element, this.$anchor, "center bottom", this.options.vOffset, this.options.hOffset, !0)).css({
            width: b.windowDims.width - 2 * this.options.hOffset,
            height: "auto"
        }), this.classChanged = !0, !1;
        for (this.$element.offset(e.Box.GetOffsets(this.$element, this.$anchor, a, this.options.vOffset, this.options.hOffset)); !e.Box.ImNotTouchingYou(this.$element) && this.counter;) this._reposition(a),
            this._setPosition()
    };
    c.prototype._events = function () {
        var a = this;
        this.$element.on({
            "open.zf.trigger": this.open.bind(this),
            "close.zf.trigger": this.close.bind(this),
            "toggle.zf.trigger": this.toggle.bind(this),
            "resizeme.zf.trigger": this._setPosition.bind(this)
        });
        this.options.hover && (clearTimeout(a.timeout), this.$anchor.on("mouseenter.zf.dropdown mouseleave.zf.dropdown", function () {
            a.timeOut = setTimeout(function () {
                a.toggle()
            }, a.options.hoverDelay)
        }));
        this.$anchor.add(this.$element).on("keydown.zf.dropdown",
            function (b) {
                var d = e.Keyboard.findFocusable(a.$element);
                e.Keyboard.handleKey(b, a, {
                    tab_forward: function () {
                        this.$element.find(":focus").is(d.eq(-1)) && (this.options.trapFocus ? (d.eq(0).focus(), b.preventDefault()) : this.close())
                    }, tab_backward: function () {
                        if (this.$element.find(":focus").is(d.eq(0)) || this.$element.is(":focus")) this.options.trapFocus ? (d.eq(-1).focus(), b.preventDefault()) : this.close()
                    }, open: function () {
                        a.open();
                        a.$element.attr("tabindex", -1).focus()
                    }, close: function () {
                        a.close();
                        a.$anchor.focus()
                    }
                })
            })
    };
    c.prototype.open = function () {
        this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id"));
        this.$anchor.addClass("hover").attr({"aria-expanded": !0});
        this._setPosition();
        this.$element.addClass("is-open").attr({"aria-hidden": !1});
        this.$element.trigger("show.zf.dropdown", [this.$element])
    };
    c.prototype.close = function () {
        if (!this.$element.hasClass("is-open")) return !1;
        this.$element.removeClass("is-open").attr({"aria-hidden": !0});
        this.$anchor.removeClass("hover").attr("aria-expanded", !1);
        if (this.classChanged) {
            var a =
                this.getPositionClass();
            a && this.$element.removeClass(a);
            this.$element.addClass(this.options.positionClass).css({height: "", width: ""});
            this.classChanged = !1;
            this.counter = 4;
            this.usedPositions.length = 0
        }
        this.$element.trigger("hide.zf.dropdown", [this.$element])
    };
    c.prototype.toggle = function () {
        this.$element.hasClass("is-open") ? this.close() : this.open()
    };
    c.prototype.destroy = function () {
        this.$element.off(".zf.trigger").hide();
        this.$anchor.off(".zf.dropdown");
        e.unregisterPlugin(this)
    };
    e.plugin(c, "Dropdown")
}(jQuery,
    window.Foundation);
!function (d, e) {
    function c(a, b) {
        this.$element = a;
        this.options = e.extend({}, c.defaults, this.$element.data(), b);
        d.Nest.Feather(this.$element, "dropdown");
        this._init();
        d.registerPlugin(this);
        d.Keyboard.register("DropdownMenu", {
            ENTER: "open",
            SPACE: "open",
            ARROW_RIGHT: "next",
            ARROW_UP: "up",
            ARROW_DOWN: "down",
            ARROW_LEFT: "previous",
            ESCAPE: "close"
        })
    }

    c.defaults = {
        clickOpen: !0,
        closeOnClick: !1,
        disableHover: !1,
        autoclose: !0,
        hoverDelay: 150,
        closingTime: 500,
        alignment: "left",
        verticalClass: "vertical",
        rightClass: "align-right"
    };
    c.prototype._init =
        function () {
            this.$element.hasClass(this.options.verticalClass) && (this.vertical = !0);
            this._prepareMenu()
        };
    c.prototype._prepareMenu = function () {
        var a = this;
        this.$tabs = this.$element.children("li.has-submenu");
        this.$tabs.children("[data-submenu]").addClass("first-sub");
        this.$submenus = this.$element.find("li.has-submenu");
        this.$menuItems = this.$element.find("li").attr({role: "menuitem", tabindex: 0});
        this.$menuItems.children("a").attr("tabindex", -1);
        this.$element.hasClass(this.options.rightClass) ? (this.options.alignment =
            "right", this.$submenus.addClass("is-left-arrow opens-left")) : this.$submenus.addClass("is-right-arrow opens-right");
        this.vertical || this.$tabs.removeClass("is-right-arrow is-left-arrow opens-left opens-right").addClass("is-down-arrow");
        this.$tabs.each(function () {
            var a = e(this);
            a.attr({
                role: "menuitem",
                tabindex: 0,
                "aria-label": a.children("a:first-child").text()
            }).children("a").attr("tabindex", -1);
            a.children("[data-submenu]") && a.attr("aria-haspopup", !0)
        });
        this.$submenus.each(function () {
            var b = e(this);
            b.children("[data-submenu]").attr({
                "aria-hidden": !0,
                tabindex: -1, role: "menu"
            }).addClass("vertical");
            a._events(b)
        })
    };
    c.prototype._events = function (a) {
        var b = this, c = void 0 !== window.ontouchstart;
        if (this.options.clickOpen || c) a.off("click.zf.dropdownmenu").on("click.zf.dropdownmenu", function (d) {
            if (e(this).hasClass("is-dropdown-submenu-parent")) {
                var f = a.data("isClick");
                c && f || (d.preventDefault(), d.stopPropagation(), a.data("isClick") ? b._hide(a) : (b._hideOthers(a), b._show(a), a.data("isClick", !0).parentsUntil("[data-dropdown-menu]", ".is-dropdown-submenu-parent").data("isClick",
                    !0), b.options.closeOnClick && b._addBodyHandler()))
            }
        });
        this.options.disableHover || (this.$menuItems.on("mouseenter.zf.dropdownmenu", function (a) {
            a = e(this);
            a.hasClass("is-active") || b._hideOthers(a)
        }), a.on("mouseenter.zf.dropdownmenu", function (d) {
            clearTimeout(a.closeTimer);
            a.hasClass("is-active") || (a.openTimer = setTimeout(function () {
                b._show(a)
            }, b.options.hoverDelay))
        }).on("mouseleave.zf.dropdownmenu", function (d) {
            !a.data("isClick") && b.options.autoclose && (clearTimeout(a.openTimer), a.closeTimer = setTimeout(function () {
                    b._hide(a)
                },
                b.options.closingTime))
        }));
        this.$menuItems.on("keydown.zf.dropdownmenu", function (a) {
            var c = e(this), f = b.$element.children("li"), h = c.is(f),
                l = h ? f : c.parents("li").first().add(c.parent("ul").children("li")), p, n;
            l.each(function (a) {
                e(this).is(c) && (p = l.eq(a - 1), n = l.eq(a + 1))
            });
            var f = function () {
                c.is(":last-child") || n.focus()
            }, q = function () {
                p.focus()
            }, r = function () {
                c.has("ul").length && (b._show(c), c.find("li").first().focus())
            }, t = function () {
                c.parents("li").first().focus();
                b._hide(c.parents("li").first())
            }, u = {
                open: r,
                close: function () {
                    b._hideAll();
                    b.$menuItems.first().focus()
                }, handled: function () {
                    a.preventDefault();
                    a.stopImmediatePropagation()
                }
            };
            h ? b.vertical ? "left" === b.options.alignment ? e.extend(u, {
                down: f,
                up: q,
                next: r,
                previous: t
            }) : e.extend(u, {down: f, up: q, next: t, previous: r}) : e.extend(u, {
                next: f,
                previous: q,
                down: r,
                up: t
            }) : "left" === b.options.alignment ? e.extend(u, {
                next: r,
                previous: t,
                down: f,
                up: q
            }) : e.extend(u, {next: t, previous: r, down: f, up: q});
            d.Keyboard.handleKey(a, b, u)
        })
    };
    c.prototype._toggle = function (a) {
        a.hasClass("is-active") ?
            this._hide(a) : this._show(a)
    };
    c.prototype._addBodyHandler = function () {
        var a = e("body"), b = this;
        a.not(b.$element).on("click.zf.dropdownmenu tap.zf.dropdownmenu touchend.zf.dropdownmenu", function (d) {
            b._hideAll();
            a.off("click.zf.dropdownmenu tap.zf.dropdownmenu touchend.zf.dropdownmenu")
        })
    };
    c.prototype._show = function (a) {
        this._hideOthers(a);
        a.focus();
        var b = a.children("[data-submenu]:first-of-type");
        a.addClass("is-active");
        b.css("visibility", "hidden").addClass("js-dropdown-active").attr("aria-hidden", !1);
        var c = d.Box.ImNotTouchingYou(b, null, !0);
        c || ("left" === this.options.alignment ? a.removeClass("opens-left").addClass("opens-right") : a.removeClass("opens-right").addClass("opens-left"), this.changed = !0, c = d.Box.ImNotTouchingYou(b, null, !0), c || (a.removeClass("opens-left opens-right").addClass("opens-inner"), this.changed = !0));
        b.css("visibility", "");
        this.$element.trigger("show.zf.dropdownmenu", [a])
    };
    c.prototype._hide = function (a) {
        this._hideSome(a)
    };
    c.prototype._hideSome = function (a) {
        a.length && (a.removeClass("is-active opens-inner").data("isClick",
            !1).find(".is-active").removeClass("is-active").data("isClick", !1).end().find(".js-dropdown-active").removeClass("js-dropdown-active").attr("aria-hidden", !0), a.parent(".has-submenu").removeClass("is-active"), this.changed && ("left" === this.options.alignment ? a.find(".opens-left").removeClass("opens-left").addClass("opens-right") : a.find(".opens-right").removeClass("opens-right").addClass("opens-left")), this.$element.trigger("hide.zf.dropdownmenu"))
    };
    c.prototype._hideOthers = function (a) {
        this._hideSome(a.siblings(".has-submenu.is-active"))
    };
    c.prototype._hideAll = function () {
        this._hideSome(this.$element)
    };
    c.prototype.destroy = function () {
        this._hideAll();
        this.$element.removeData("zf-plugin").find("li").removeClass("js-dropdown-nohover is-right-arrow is-left-arrow opens-left opens-inner opens-right").add("a").off(".zf.dropdownmenu").end().find("ul").removeClass("first-sub");
        d.Nest.Burn(this.$element, "dropdown");
        d.unregisterPlugin(this)
    };
    d.plugin(c, "DropdownMenu")
}(Foundation, jQuery);
!function (d, e) {
    function c(a, b) {
        this.$element = a;
        this.options = e.extend({}, c.defaults, this.$element.data(), b);
        this.$window = e(window);
        this.name = "equalizer";
        this.attr = "data-equalizer";
        this._init();
        this._events();
        d.registerPlugin(this)
    }

    c.defaults = {equalizeOnStack: !0, throttleInterval: 50};
    c.prototype._init = function () {
        this._reflow()
    };
    c.prototype._events = function () {
        var a = this;
        this.$window.off(".equalizer").on("resize.fndtn.equalizer", d.util.throttle(function () {
            a._reflow()
        }, a.options.throttleInterval))
    };
    c.prototype._killswitch =
        function () {
        };
    c.prototype._reflow = function () {
        var a = this;
        e("[" + this.attr + "]").each(function () {
            var b = e(this), c = [], h = b.find("img");
            if (h.length) d.onImagesLoaded(h, function () {
                c = a.getHeights(b);
                a.applyHeight(b, c)
            }); else c = a.getHeights(b), a.applyHeight(b, c)
        })
    };
    c.prototype.getHeights = function (a) {
        var b = a.data("equalizer");
        a = b ? a.find("[" + this.attr + '-watch="' + b + '"]:visible') : a.find("[" + this.attr + "-watch]:visible");
        a.height("inherit");
        a = a.map(function () {
            return e(this).outerHeight(!1)
        }).get();
        console.log(a);
        return a
    };
    c.prototype.applyHeight = function (a, b) {
        var d = a.data("equalizer"),
            d = d ? a.find("[" + this.attr + '-watch="' + d + '"]:visible') : a.find("[" + this.attr + "-watch]:visible");
        b = Math.max.apply(null, b);
        a.trigger("preEqualized.zf.Equalizer");
        for (var c = 0; c < d.length; c++) e(d[c]).css("height", b);
        a.trigger("postEqualized.zf.Equalizer")
    };
    c.prototype.destroy = function () {
    };
    d.plugin(c, "Equalizer");
    "undefined" !== typeof module && "undefined" !== typeof module.exports && (module.exports = c);
    "function" === typeof define && define(["foundation"],
        function () {
            return c
        })
}(Foundation, jQuery);
!function (d, e) {
    function c(a, b) {
        this.$element = a;
        this.options = e.extend({}, c.defaults, b);
        this.rules = [];
        this.currentPath = "";
        this._init();
        this._events();
        d.registerPlugin(this)
    }

    c.defaults = {rules: null};
    c.SPECIAL_QUERIES = {
        landscape: "screen and (orientation: landscape)",
        portrait: "screen and (orientation: portrait)",
        retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
    };
    c.prototype._init =
        function () {
            this._addBreakpoints();
            this._generateRules();
            this._reflow()
        };
    c.prototype._events = function () {
        e(window).on("resize.fndtn.interchange", d.util.throttle(this._reflow.bind(this), 50))
    };
    c.prototype._reflow = function () {
        var a, b;
        for (b in this.rules) {
            var d = this.rules[b];
            window.matchMedia(d.query).matches && (a = d)
        }
        a && this.replace(a.path)
    };
    c.prototype._addBreakpoints = function () {
        for (var a in d.MediaQuery.queries) {
            var b = d.MediaQuery.queries[a];
            c.SPECIAL_QUERIES[b.name] = b.value
        }
    };
    c.prototype._generateRules =
        function () {
            var a = [];
            var b = this.options.rules ? this.options.rules : this.$element.data("interchange").match(/\[.*?\]/g);
            for (var d in b) {
                var e = b[d].slice(1, -1).split(", "), g = e.slice(0, -1).join(""), e = e[e.length - 1];
                c.SPECIAL_QUERIES[e] && (e = c.SPECIAL_QUERIES[e]);
                a.push({path: g, query: e})
            }
            this.rules = a
        };
    c.prototype.replace = function (a) {
        if (this.currentPath !== a) {
            var b = this;
            "IMG" === this.$element[0].nodeName ? this.$element.attr("src", a).load(function () {
                    b.$element.trigger("replaced.zf.interchange");
                    b.currentPath = a
                }) :
                a.match(/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i) ? this.$element.css({"background-image": "url(" + a + ")"}) : e.get(a, function (d) {
                    b.$element.html(d);
                    b.$element.trigger("replaced.zf.interchange");
                    b.currentPath = a
                })
        }
    };
    c.prototype.destroy = function () {
    };
    d.plugin(c, "Interchange");
    "undefined" !== typeof module && "undefined" !== typeof module.exports && (module.exports = c);
    "function" === typeof define && define(["foundation"], function () {
        return c
    })
}(Foundation, jQuery);
!function (d, e) {
    function c(a, b) {
        this.$element = a;
        this.options = e.extend({}, c.defaults, b);
        this._init();
        d.registerPlugin(this)
    }

    c.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        activeClass: "active",
        deepLinking: !1
    };
    c.prototype._init = function () {
        var a = this.$element[0].id || d.GetYoDigits(6, "magellan");
        this.$targets = e("[data-magellan-target]");
        this.$links = this.$element.find("a");
        this.$element.attr({"data-resize": a, "data-scroll": a, id: a});
        this.$active = e();
        this.scrollPos = parseInt(window.pageYOffset,
            10);
        this._events()
    };
    c.prototype.calcPoints = function () {
        var a = this, b = document.body, d = document.documentElement;
        this.points = [];
        this.winHeight = Math.round(Math.max(window.innerHeight, document.body.clientHeight));
        this.docHeight = Math.round(Math.max(b.scrollHeight, b.offsetHeight, d.clientHeight, d.scrollHeight, d.offsetHeight));
        this.$targets.each(function () {
            var b = e(this), d = Math.round(b.offset().top - a.options.threshold);
            b.targetPoint = d;
            a.points.push(d)
        })
    };
    c.prototype._events = function () {
        var a = this, b = e("html, body"),
            d = {duration: a.options.animationDuration, easing: a.options.animationEasing};
        e(window).one("load", function () {
            a.calcPoints();
            a._updateActive()
        });
        this.$element.on({
            "resizeme.zf.trigger": this.reflow.bind(this),
            "scrollme.zf.trigger": this._updateActive.bind(this)
        }).on("click.zf.magellan", 'a[href^="#"]', function (c) {
            c.preventDefault();
            c = this.getAttribute("href");
            c = e(c).offset().top - a.options.threshold / 2;
            b.stop(!0).animate({scrollTop: c}, d)
        })
    };
    c.prototype.reflow = function () {
        this.calcPoints();
        this._updateActive()
    };
    c.prototype._updateActive = function () {
        var a = parseInt(window.pageYOffset, 10);
        if (a + this.winHeight === this.docHeight) var b = this.points.length - 1; else if (a < this.points[0]) b = 0; else {
            var d = this.scrollPos < a, c = this;
            b = this.points.filter(function (b, e) {
                return d ? b <= a : b - c.options.threshold <= a
            });
            b = b.length ? b.length - 1 : 0
        }
        this.$active.removeClass(this.options.activeClass);
        this.$active = this.$links.eq(b).addClass(this.options.activeClass);
        this.options.deepLinking && (b = this.$active[0].getAttribute("href"), window.history.pushState ?
            window.history.pushState(null, null, b) : window.location.hash = b);
        this.scrollPos = a;
        this.$element.trigger("update.zf.magellan", [this.$active])
    };
    c.prototype.destroy = function () {
        this.$element.off(".zf.trigger .zf.magellan").find("." + this.options.activeClass).removeClass(this.options.activeClass);
        var a = this.$active[0].getAttribute("href");
        window.location.hash.replace(a, "");
        d.unregisterPlugin(this)
    };
    d.plugin(c, "Magellan");
    "undefined" !== typeof module && "undefined" !== typeof module.exports && (module.exports = c);
    "function" === typeof define && define(["foundation"], function () {
        return c
    })
}(Foundation, jQuery);
!function (d, e) {
    function c(a, b) {
        this.$element = a;
        this.options = d.extend({}, c.defaults, this.$element.data(), b);
        this.$lastTrigger = d();
        this._init();
        this._events();
        e.registerPlugin(this)
    }

    c.defaults = {
        closeOnClick: !0,
        transitionTime: 0,
        position: "left",
        forceTop: !0,
        isRevealed: !1,
        revealOn: null,
        autoFocus: !0,
        revealClass: "reveal-for-"
    };
    c.prototype._init = function () {
        var a = this.$element.attr("id");
        this.$element.attr("aria-hidden", "true");
        d(document).find('[data-open="' + a + '"], [data-close="' + a + '"], [data-toggle="' + a +
            '"]').attr("aria-expanded", "false").attr("aria-controls", a);
        this.options.closeOnClick && (d(".js-off-canvas-exit").length ? this.$exiter = d(".js-off-canvas-exit") : (a = document.createElement("div"), a.setAttribute("class", "js-off-canvas-exit"), d("[data-off-canvas-content]").append(a), this.$exiter = d(a)));
        this.options.isRevealed = this.options.isRevealed || (new RegExp(this.options.revealClass, "g")).test(this.$element[0].className);
        this.options.isRevealed && (this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2],
            this._setMQChecker());
        this.options.transitionTime || (this.options.transitionTime = 1E3 * parseFloat(window.getComputedStyle(d("[data-off-canvas-wrapper]")[0]).transitionDuration))
    };
    c.prototype._events = function () {
        this.$element.on({
            "open.zf.trigger": this.open.bind(this),
            "close.zf.trigger": this.close.bind(this),
            "toggle.zf.trigger": this.toggle.bind(this),
            "keydown.zf.offcanvas": this._handleKeyboard.bind(this)
        });
        if (this.$exiter.length) this.$exiter.on({"click.zf.offcanvas": this.close.bind(this)})
    };
    c.prototype._setMQChecker =
        function () {
            var a = this;
            d(window).on("changed.zf.mediaquery", function () {
                e.MediaQuery.atLeast(a.options.revealOn) ? a.reveal(!0) : a.reveal(!1)
            }).one("load.zf.offcanvas", function () {
                e.MediaQuery.atLeast(a.options.revealOn) && a.reveal(!0)
            })
        };
    c.prototype.reveal = function (a) {
        var b = this.$element.find("[data-close]");
        a ? b.length && b.hide() : b.length && b.show()
    };
    c.prototype.open = function (a, b) {
        if (!this.$element.hasClass("is-open")) {
            var c = this;
            d(document.body);
            d("body").scrollTop(0);
            e.Move(this.options.transitionTime,
                this.$element, function () {
                    d("[data-off-canvas-wrapper]").addClass("is-off-canvas-open is-open-" + c.options.position);
                    c.$element.addClass("is-open").attr("aria-hidden", "false").trigger("opened.zf.offcanvas")
                });
            b && (this.$lastTrigger = b.attr("aria-expanded", "true"));
            if (this.options.autoFocus) this.$element.one("finished.zf.animate", function () {
                c.$element.find("a, button").eq(0).focus()
            })
        }
    };
    c.prototype.close = function () {
        if (this.$element.hasClass("is-open")) {
            var a = this;
            e.Move(this.options.transitionTime, this.$element,
                function () {
                    d("[data-off-canvas-wrapper]").removeClass("is-off-canvas-open is-open-" + a.options.position);
                    a.$element.removeClass("is-open")
                });
            this.$element.attr("aria-hidden", "true").trigger("closed.zf.offcanvas");
            this.$lastTrigger.attr("aria-expanded", "false")
        }
    };
    c.prototype.toggle = function (a, b) {
        this.$element.hasClass("is-open") ? this.close(a, b) : this.open(a, b)
    };
    c.prototype._handleKeyboard = function (a) {
        27 === a.which && (a.stopPropagation(), a.preventDefault(), this.close(), this.$lastTrigger.focus())
    };
    c.prototype.destroy =
        function () {
        };
    e.plugin(c, "OffCanvas")
}(jQuery, Foundation);
!function (d, e) {
    function c(a, b) {
        this.$element = a;
        this.options = d.extend({}, c.defaults, this.$element.data(), b);
        this._init();
        e.registerPlugin(this);
        e.Keyboard.register("Orbit", {
            ltr: {ARROW_RIGHT: "next", ARROW_LEFT: "previous"},
            rtl: {ARROW_LEFT: "next", ARROW_RIGHT: "previous"}
        })
    }

    c.defaults = {
        bullets: !0,
        navButtons: !0,
        animInFromRight: "slide-in-right",
        animOutToRight: "slide-out-right",
        animInFromLeft: "slide-in-left",
        animOutToLeft: "slide-out-left",
        autoPlay: !0,
        timerDelay: 5E3,
        infiniteWrap: !0,
        swipe: !0,
        pauseOnHover: !0,
        accessible: !0,
        containerClass: "orbit-container",
        slideClass: "orbit-slide",
        boxOfBullets: "orbit-bullets",
        nextClass: "orbit-next",
        prevClass: "orbit-previous"
    };
    c.prototype._init = function () {
        this.$wrapper = this.$element.find("." + this.options.containerClass);
        this.$slides = this.$element.find("." + this.options.slideClass);
        var a = this.$element.find("img");
        this.$slides.filter(".is-active").length || this.$slides.eq(0).addClass("is-active");
        if (a.length) e.onImagesLoaded(a, this._prepareForOrbit.bind(this)); else this._prepareForOrbit();
        this.options.bullets && this._loadBullets();
        this._events();
        this.options.autoPlay && this.geoSync();
        this.options.accessible && this.$wrapper.attr("tabindex", 0)
    };
    c.prototype._loadBullets = function () {
        this.$bullets = this.$element.find("." + this.options.boxOfBullets).find("button")
    };
    c.prototype.geoSync = function () {
        var a = this;
        this.timer = new e.Timer(this.$element, {duration: this.options.timerDelay, infinite: !1}, function () {
            a.changeSlide(!0)
        });
        this.timer.start()
    };
    c.prototype._prepareForOrbit = function () {
        var a = this;
        this._setWrapperHeight(function (b) {
            a._setSlideHeight(b)
        })
    };
    c.prototype._setWrapperHeight = function (a) {
        var b = 0, c, e = 0;
        this.$slides.each(function () {
            c = this.getBoundingClientRect().height;
            d(this).attr("data-slide", e);
            e && d(this).css({position: "relative", display: "none"});
            b = c > b ? c : b;
            e++
        });
        e === this.$slides.length && (this.$wrapper.css({height: b}), a(b))
    };
    c.prototype._setSlideHeight = function (a) {
        this.$slides.each(function () {
            d(this).css("max-height", a)
        })
    };
    c.prototype._events = function () {
        var a = this;
        if (this.options.swipe) this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit",
            function (b) {
                b.preventDefault();
                a.changeSlide(!0)
            }).on("swiperight.zf.orbit", function (b) {
            b.preventDefault();
            a.changeSlide(!1)
        });
        if (this.options.autoPlay && (this.$slides.on("click.zf.orbit", function () {
                a.$element.data("clickedOn", a.$element.data("clickedOn") ? !1 : !0);
                a.timer[a.$element.data("clickedOn") ? "pause" : "start"]()
            }), this.options.pauseOnHover)) this.$element.on("mouseenter.zf.orbit", function () {
            a.timer.pause()
        }).on("mouseleave.zf.orbit", function () {
            a.$element.data("clickedOn") || a.timer.start()
        });
        if (this.options.navButtons) this.$element.find("." +
            this.options.nextClass + ", ." + this.options.prevClass).attr("tabindex", 0).on("click.zf.orbit touchend.zf.orbit", function () {
            a.changeSlide(d(this).hasClass(a.options.nextClass))
        });
        if (this.options.bullets) this.$bullets.on("click.zf.orbit touchend.zf.orbit", function () {
            if (/is-active/g.test(this.className)) return !1;
            var b = d(this).data("slide"), c = b > a.$slides.filter(".is-active").data("slide"), e = a.$slides.eq(b);
            a.changeSlide(c, e, b)
        });
        this.$wrapper.add(this.$bullets).on("keydown.zf.orbit", function (b) {
            e.Keyboard.handleKey(b,
                a, {
                    next: function () {
                        a.changeSlide(!0)
                    }, previous: function () {
                        a.changeSlide(!1)
                    }, handled: function () {
                        d(b.target).is(a.$bullets) && a.$bullets.filter(".is-active").focus()
                    }
                })
        })
    };
    c.prototype.changeSlide = function (a, b, d) {
        var c = this.$slides.filter(".is-active").eq(0);
        if (/mui/g.test(c[0].className)) return !1;
        var f = this.$slides.first(), k = this.$slides.last(), m = a ? "Right" : "Left", l = a ? "Left" : "Right",
            p = this;
        var n = b ? b : a ? this.options.infiniteWrap ? c.next("." + this.options.slideClass).length ? c.next("." + this.options.slideClass) :
            f : c.next("." + this.options.slideClass) : this.options.infiniteWrap ? c.prev("." + this.options.slideClass).length ? c.prev("." + this.options.slideClass) : k : c.prev("." + this.options.slideClass);
        n.length && (this.options.bullets && (d = d || this.$slides.index(n), this._updateBullets(d)), e.Motion.animateIn(n.addClass("is-active").css({
            position: "absolute",
            top: 0
        }), this.options["animInFrom" + m], function () {
            n.css({position: "relative", display: "block"}).attr("aria-live", "polite")
        }), e.Motion.animateOut(c.removeClass("is-active"),
            this.options["animOutTo" + l], function () {
                c.removeAttr("aria-live");
                p.options.autoPlay && p.timer.restart();
                p.$element.trigger("slidechange.zf.orbit", [n])
            }))
    };
    c.prototype._updateBullets = function (a) {
        var b = this.$element.find("." + this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur().find("span:last").detach();
        this.$bullets.eq(a).addClass("is-active").append(b)
    };
    c.prototype.destroy = function () {
        delete this.timer;
        this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide();
        e.unregisterPlugin(this)
    };
    e.plugin(c, "Orbit")
}(jQuery, window.Foundation);
!function (d, e) {
    function c(a) {
        this.$element = e(a);
        this.rules = this.$element.data("responsive-menu");
        this.currentPlugin = this.currentMq = null;
        this._init();
        this._events();
        d.registerPlugin(this)
    }

    var a = {
        dropdown: {cssClass: "dropdown", plugin: d._plugins["dropdown-menu"] || null},
        drilldown: {cssClass: "drilldown", plugin: d._plugins.drilldown || null},
        accordion: {cssClass: "accordion-menu", plugin: d._plugins["accordion-menu"] || null}
    };
    c.defaults = {};
    c.prototype._init = function () {
        for (var b = {}, d = this.rules.split(" "), c = 0; c < d.length; c++) {
            var g =
                d[c].split("-"), k = 1 < g.length ? g[0] : "small", g = 1 < g.length ? g[1] : g[0];
            null !== a[g] && (b[k] = a[g])
        }
        this.rules = b;
        e.isEmptyObject(b) || this._checkMediaQueries()
    };
    c.prototype._events = function () {
        var a = this;
        e(window).on("changed.zf.mediaquery", function () {
            a._checkMediaQueries()
        })
    };
    c.prototype._checkMediaQueries = function () {
        var b, c = this;
        e.each(this.rules, function (a) {
            d.MediaQuery.atLeast(a) && (b = a)
        });
        !b || this.currentPlugin instanceof this.rules[b].plugin || (e.each(a, function (a, b) {
            c.$element.removeClass(b.cssClass)
        }),
            this.$element.addClass(this.rules[b].cssClass), this.currentPlugin && this.currentPlugin.destroy(), this.currentPlugin = new this.rules[b].plugin(this.$element, {}))
    };
    c.prototype.destroy = function () {
        this.currentPlugin.destroy();
        e(window).off(".zf.ResponsiveMenu");
        d.unregisterPlugin(this)
    };
    d.plugin(c, "ResponsiveMenu")
}(Foundation, jQuery);
!function (d, e) {
    function c(a, b) {
        this.$element = d(a);
        this.options = d.extend({}, c.defaults, this.$element.data(), b);
        this._init();
        this._events();
        e.registerPlugin(this)
    }

    c.defaults = {hideFor: "medium"};
    c.prototype._init = function () {
        var a = this.$element.data("responsive-toggle");
        a || console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar.");
        this.$targetMenu = d("#" + a);
        this.$toggler = this.$element.find("[data-toggle]");
        this._update()
    };
    c.prototype._events = function () {
        d(window).on("changed.zf.mediaquery",
            this._update.bind(this));
        this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this))
    };
    c.prototype._update = function () {
        e.MediaQuery.atLeast(this.options.hideFor) ? (this.$element.hide(), this.$targetMenu.show()) : (this.$element.show(), this.$targetMenu.hide())
    };
    c.prototype.toggleMenu = function () {
        e.MediaQuery.atLeast(this.options.hideFor) || (this.$targetMenu.toggle(0), this.$element.trigger("toggled.zf.responsiveToggle"))
    };
    c.prototype.destroy = function () {
    };
    e.plugin(c, "ResponsiveToggle")
}(jQuery,
    Foundation);
!function (d, e) {
    function c(a, b) {
        this.$element = a;
        this.options = e.extend({}, c.defaults, this.$element.data(), b);
        this._init();
        d.registerPlugin(this);
        d.Keyboard.register("Reveal", {
            ENTER: "open",
            SPACE: "open",
            ESCAPE: "close",
            TAB: "tab_forward",
            SHIFT_TAB: "tab_backward"
        })
    }

    c.defaults = {
        animationIn: "",
        animationOut: "",
        showDelay: 0,
        hideDelay: 0,
        closeOnClick: !0,
        closeOnEsc: !0,
        multipleOpened: !1,
        vOffset: 100,
        hOffset: 0,
        fullScreen: !1,
        btmOffsetPct: 10,
        overlay: !0,
        resetOnClose: !1
    };
    c.prototype._init = function () {
        this.id = this.$element.attr("id");
        this.isActive = !1;
        this.$anchor = e('[data-open="' + this.id + '"]').length ? e('[data-open="' + this.id + '"]') : e('[data-toggle="' + this.id + '"]');
        if (this.$anchor.length) {
            var a = this.$anchor[0].id || d.GetYoDigits(6, "reveal");
            this.$anchor.attr({"aria-controls": this.id, id: a, "aria-haspopup": !0, tabindex: 0});
            this.$element.attr({"aria-labelledby": a})
        }
        if (this.options.fullScreen || this.$element.hasClass("full")) this.options.fullScreen = !0, this.options.overlay = !1;
        this.options.overlay && (this.$overlay = this._makeOverlay(this.id));
        this.$element.attr({role: "dialog", "aria-hidden": !0, "data-yeti-box": this.id, "data-resize": this.id});
        this._events()
    };
    c.prototype._makeOverlay = function (a) {
        var b = e("<div></div>").addClass("reveal-overlay").attr({tabindex: -1, "aria-hidden": !0}).appendTo("body");
        this.options.closeOnClick && b.attr({"data-close": a});
        return b
    };
    c.prototype._events = function () {
        var a = this;
        this.$element.on({
            "open.zf.trigger": this.open.bind(this),
            "close.zf.trigger": this.close.bind(this),
            "toggle.zf.trigger": this.toggle.bind(this),
            "resizeme.zf.trigger": function () {
                a.$element.is(":visible") && a._setPosition(function () {
                })
            }
        });
        if (this.$anchor.length) this.$anchor.on("keydown.zf.reveal", function (b) {
            if (13 === b.which || 32 === b.which) b.stopPropagation(), b.preventDefault(), a.open()
        });
        if (this.options.closeOnClick && this.options.overlay) this.$overlay.off(".zf.reveal").on("click.zf.reveal", this.close.bind(this))
    };
    c.prototype._setPosition = function (a) {
        var b = d.Box.GetDimensions(this.$element), c = this.options.fullScreen ? "reveal full" : b.height >= .5 *
        b.windowDims.height ? "reveal" : "center";
        "reveal full" === c ? (console.log("full"), this.$element.offset(d.Box.GetOffsets(this.$element, null, c, this.options.vOffset)).css({
            height: b.windowDims.height,
            width: b.windowDims.width
        })) : d.MediaQuery.atLeast("medium") && d.Box.ImNotTouchingYou(this.$element, null, !0, !1) ? this.$element.css({
            "max-height": b.windowDims.height - this.options.vOffset * (this.options.btmOffsetPct / 100 + 1),
            width: ""
        }).offset(d.Box.GetOffsets(this.$element, null, c, this.options.vOffset)) : (this.$element.css({
            width: b.windowDims.width -
            2 * this.options.hOffset
        }).offset(d.Box.GetOffsets(this.$element, null, "center", this.options.vOffset, this.options.hOffset)), this.changedSize = !0);
        a()
    };
    c.prototype.open = function () {
        var a = this;
        this.isActive = !0;
        this.$element.css({visibility: "hidden"}).show().scrollTop(0);
        this._setPosition(function () {
            a.$element.hide().css({visibility: ""});
            a.options.multipleOpened || a.$element.trigger("closeme.zf.reveal", a.id);
            a.options.animationIn ? a.options.overlay ? d.Motion.animateIn(a.$overlay, "fade-in", function () {
                d.Motion.animateIn(a.$element,
                    a.options.animationIn, function () {
                    })
            }) : d.Motion.animateIn(a.$element, a.options.animationIn, function () {
            }) : a.options.overlay ? a.$overlay.show(0, function () {
                a.$element.show(a.options.showDelay, function () {
                })
            }) : a.$element.show(a.options.showDelay, function () {
            })
        });
        this.$element.attr({"aria-hidden": !1}).attr("tabindex", -1).focus().trigger("open.zf.reveal");
        e("body").addClass("is-reveal-open").attr({"aria-hidden": this.options.overlay || this.options.fullScreen ? !0 : !1});
        setTimeout(function () {
                a._extraHandlers()
            },
            0)
    };
    c.prototype._extraHandlers = function () {
        var a = this,
            b = this.$element.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function () {
                return !e(this).is(":visible") || 0 > e(this).attr("tabindex") ? !1 : !0
            });
        if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) e("body").on("click.zf.reveal", function (b) {
            a.close()
        });
        if (this.options.closeOnEsc) e(window).on("keydown.zf.reveal",
            function (c) {
                0 === b.length && c.preventDefault();
                d.Keyboard.handleKey(c, a, {
                    close: function () {
                        this.options.closeOnEsc && this.close()
                    }
                })
            });
        this.$element.on("keydown.zf.reveal", function (c) {
            var f = e(this);
            d.Keyboard.handleKey(c, a, {
                tab_forward: function () {
                    this.$element.find(":focus").is(b.eq(-1)) && (b.eq(0).focus(), c.preventDefault())
                }, tab_backward: function () {
                    if (this.$element.find(":focus").is(b.eq(0)) || this.$element.is(":focus")) b.eq(-1).focus(), c.preventDefault()
                }, open: function () {
                    f.is(b) && this.open()
                }, close: function () {
                    this.options.closeOnEsc &&
                    this.close()
                }
            });
            0 === b.length && c.preventDefault()
        })
    };
    c.prototype.close = function () {
        if (!this.isActive || !this.$element.is(":visible")) return !1;
        var a = this;
        this.options.animationOut ? d.Motion.animateOut(this.$element, this.options.animationOut, function () {
            a.options.overlay && d.Motion.animateOut(a.$overlay, "fade-out", function () {
            })
        }) : this.$element.hide(a.options.hideDelay, function () {
            a.options.overlay && a.$overlay.hide(0, function () {
            })
        });
        this.options.closeOnEsc && e(window).off("keydown.zf.reveal");
        !this.options.overlay &&
        this.options.closeOnClick && e("body").off("click.zf.reveal");
        this.$element.off("keydown.zf.reveal");
        this.changedSize && this.$element.css({height: "", width: ""});
        e("body").removeClass("is-reveal-open").attr({"aria-hidden": !1, tabindex: ""});
        this.options.resetOnClose && this.$element.html(this.$element.html());
        this.isActive = !1;
        this.$element.attr({"aria-hidden": !0}).trigger("closed.zf.reveal")
    };
    c.prototype.toggle = function () {
        this.isActive ? this.close() : this.open()
    };
    c.prototype.destroy = function () {
        this.options.overlay &&
        this.$overlay.hide().off().remove();
        this.$element.hide();
        this.$anchor.off();
        d.unregisterPlugin(this)
    };
    d.plugin(c, "Reveal");
    "undefined" !== typeof module && "undefined" !== typeof module.exports && (module.exports = c);
    "function" === typeof define && define(["foundation"], function () {
        return c
    })
}(Foundation, jQuery);
!function (d, e) {
    function c(a, f) {
        this.$element = a;
        this.options = d.extend({}, c.defaults, this.$element.data(), f);
        this._init();
        e.registerPlugin(this);
        e.Keyboard.register("Slider", {
            ltr: {
                ARROW_RIGHT: "increase",
                ARROW_UP: "increase",
                ARROW_DOWN: "decrease",
                ARROW_LEFT: "decrease",
                SHIFT_ARROW_RIGHT: "increase_fast",
                SHIFT_ARROW_UP: "increase_fast",
                SHIFT_ARROW_DOWN: "decrease_fast",
                SHIFT_ARROW_LEFT: "decrease_fast"
            },
            rtl: {
                ARROW_LEFT: "increase",
                ARROW_RIGHT: "decrease",
                SHIFT_ARROW_LEFT: "increase_fast",
                SHIFT_ARROW_RIGHT: "decrease_fast"
            }
        })
    }

    function a(a, d) {
        return a / d
    }

    c.defaults = {
        start: 0,
        end: 100,
        step: 1,
        initialStart: 0,
        initialEnd: 100,
        binding: !1,
        clickSelect: !0,
        vertical: !1,
        draggable: !0,
        disabled: !1,
        doubleSided: !1,
        decimal: 2,
        moveTime: 200,
        disabledClass: "disabled"
    };
    c.prototype._init = function () {
        this.inputs = this.$element.find("input");
        this.handles = this.$element.find("[data-slider-handle]");
        this.$handle = this.handles.eq(0);
        this.$input = this.inputs.length ? this.inputs.eq(0) : d("#" + this.$handle.attr("aria-controls"));
        this.$fill = this.$element.find("[data-slider-fill]").css(this.options.vertical ?
            "height" : "width", 0);
        var a = !1, c = this;
        if (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) this.options.disabled = !0, this.$element.addClass(this.options.disabledClass);
        this.inputs.length || (this.inputs = d().add(this.$input), this.options.binding = !0);
        this._setInitAttr(0);
        this._events(this.$handle);
        this.handles[1] && (this.options.doubleSided = !0, this.$handle2 = this.handles.eq(1), this.$input2 = this.inputs.length ? this.inputs.eq(1) : d("#" + this.$handle2.attr("aria-controls")), this.inputs[1] ||
        (this.inputs = this.inputs.add(this.$input2)), a = !0, this._setHandlePos(this.$handle, this.options.initialStart, !0, function () {
            c._setHandlePos(c.$handle2, c.options.initialEnd)
        }), this._setInitAttr(1), this._events(this.$handle2));
        a || this._setHandlePos(this.$handle, this.options.initialStart, !0)
    };
    c.prototype._setHandlePos = function (b, d, c, g) {
        d = parseFloat(d);
        d < this.options.start ? d = this.options.start : d > this.options.end && (d = this.options.end);
        if (this.options.doubleSided) if (0 === this.handles.index(b)) {
            var f = parseFloat(this.$handle2.attr("aria-valuenow"));
            d = d >= f ? f - this.options.step : d
        } else f = parseFloat(this.$handle.attr("aria-valuenow")), d = d <= f ? f + this.options.step : d;
        this.options.vertical && !c && (d = this.options.end - d);
        var h = this, l = (c = this.options.vertical) ? "height" : "width", p = c ? "top" : "left";
        c = b[0].getBoundingClientRect()[l] / 2;
        var f = this.$element[0].getBoundingClientRect()[l], n = (d / this.options.end).toFixed(this.options.decimal),
            q = ((f - c) * n / f * 100).toFixed(this.options.decimal);
        d = 0 < d ? parseFloat(d.toFixed(this.options.decimal)) : 0;
        var r = {};
        this._setValues(b,
            d);
        if (this.options.doubleSided) {
            var t = 0 === this.handles.index(b);
            this.handles.index(b);
            t ? (r[p] = (0 < n ? 100 * n : 0) + "%", d = (100 * (a(this.$handle2.position()[p] + c, f) - parseFloat(n))).toFixed(this.options.decimal) + "%", r["min-" + l] = d, g && "function" === typeof g && g()) : (d = (100 > d ? d : 100) - (parseFloat(this.$handle[0].style.left) || this.options.end - d), r["min-" + l] = d + "%")
        }
        this.$element.one("finished.zf.animate", function () {
            h.animComplete = !0;
            h.$element.trigger("moved.zf.slider", [b])
        });
        g = h.$element.data("dragging") ? 1E3 / 60 : h.options.moveTime;
        e.Move(g, b, function () {
            b.css(p, q + "%");
            h.options.doubleSided ? h.$fill.css(r) : h.$fill.css(l, 100 * n + "%")
        })
    };
    c.prototype._setInitAttr = function (a) {
        var b = this.inputs.eq(a).attr("id") || e.GetYoDigits(6, "slider");
        this.inputs.eq(a).attr({id: b, max: this.options.end, min: this.options.start});
        this.handles.eq(a).attr({
            role: "slider",
            "aria-controls": b,
            "aria-valuemax": this.options.end,
            "aria-valuemin": this.options.start,
            "aria-valuenow": 0 === a ? this.options.initialStart : this.options.initialEnd,
            "aria-orientation": this.options.vertical ?
                "vertical" : "horizontal",
            tabindex: 0
        })
    };
    c.prototype._setValues = function (a, d) {
        var b = this.options.doubleSided ? this.handles.index(a) : 0;
        this.inputs.eq(b).val(d);
        a.attr("aria-valuenow", d)
    };
    c.prototype._handleEvent = function (a, d, c) {
        if (c) {
            a = c;
            var b = !0
        } else {
            a.preventDefault();
            c = (b = this.options.vertical) ? "height" : "width";
            var e = b ? "top" : "left", f = b ? a.pageY : a.pageX;
            b = this.$handle[0].getBoundingClientRect()[c] / 2;
            a = this.$element[0].getBoundingClientRect()[c];
            f = this.$element.offset()[e] - f;
            f = 0 < f ? -b : f - b < -a ? a : Math.abs(f);
            a = f / a * (this.options.end - this.options.start);
            b = !1;
            if (!d) {
                d = this.$handle;
                d = Math.abs(d.position()[e] + d[c]() / 2 - f);
                var h = this.$handle2;
                c = Math.abs(h.position()[e] + h[c]() / 2 - f);
                d = d <= c ? this.$handle : this.$handle2
            }
        }
        this._setHandlePos(d, a, b)
    };
    c.prototype._events = function (a) {
        if (this.options.disabled) return !1;
        var b = this, c;
        this.inputs.off("change.zf.slider").on("change.zf.slider", function (a) {
            var c = b.inputs.index(d(this));
            b._handleEvent(a, b.handles.eq(c), d(this).val())
        });
        if (this.options.clickSelect) this.$element.off("click.zf.slider").on("click.zf.slider",
            function (a) {
                if (b.$element.data("dragging")) return !1;
                b.animComplete = !1;
                b.options.doubleSided ? b._handleEvent(a) : b._handleEvent(a, b.$handle)
            });
        if (this.options.draggable) {
            this.handles.addTouch();
            var g = d("body");
            a.off("mousedown.zf.slider").on("mousedown.zf.slider", function (e) {
                a.addClass("is-dragging");
                b.$fill.addClass("is-dragging");
                b.$element.data("dragging", !0);
                b.animComplete = !1;
                c = d(e.currentTarget);
                g.on("mousemove.zf.slider", function (a) {
                    a.preventDefault();
                    b._handleEvent(a, c)
                }).on("mouseup.zf.slider",
                    function (d) {
                        b.animComplete = !0;
                        b._handleEvent(d, c);
                        a.removeClass("is-dragging");
                        b.$fill.removeClass("is-dragging");
                        b.$element.data("dragging", !1);
                        g.off("mousemove.zf.slider mouseup.zf.slider")
                    })
            })
        }
        a.off("keydown.zf.slider").on("keydown.zf.slider", function (a) {
            var c = b.options.doubleSided ? b.handles.index(d(this)) : 0, f = parseFloat(b.inputs.eq(c).val()), h,
                n = d(this);
            e.Keyboard.handleKey(a, b, {
                decrease: function () {
                    h = f - b.options.step
                }, increase: function () {
                    h = f + b.options.step
                }, decrease_fast: function () {
                    h = f - 10 * b.options.step
                },
                increase_fast: function () {
                    h = f + 10 * b.options.step
                }, handled: function () {
                    a.preventDefault();
                    b._setHandlePos(n, h, !0)
                }
            })
        })
    };
    c.prototype.destroy = function () {
        this.handles.off(".zf.slider");
        this.inputs.off(".zf.slider");
        this.$element.off(".zf.slider");
        e.unregisterPlugin(this)
    };
    e.plugin(c, "Slider")
}(jQuery, window.Foundation);
!function (d, e) {
    function c(a, f) {
        this.$element = a;
        this.options = d.extend({}, c.defaults, this.$element.data(), f);
        this._init();
        e.registerPlugin(this)
    }

    function a(a) {
        return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * a
    }

    c.defaults = {
        container: "<div data-sticky-container></div>",
        stickTo: "top",
        anchor: "",
        topAnchor: "",
        btmAnchor: "",
        marginTop: 1,
        marginBottom: 1,
        stickyOn: "medium",
        stickyClass: "sticky",
        containerClass: "sticky-container",
        checkEvery: -1
    };
    c.prototype._init = function () {
        var a = this.$element.parent("[data-sticky-container]"),
            c = this.$element[0].id || e.GetYoDigits(6, "sticky"), h = this;
        a.length || (this.wasWrapped = !0);
        this.$container = a.length ? a : d(this.options.container).wrapInner(this.$element);
        this.$container.addClass(this.options.containerClass);
        this.$element.addClass(this.options.stickyClass).attr({"data-resize": c});
        this.scrollCount = this.options.checkEvery;
        this.isStuck = !1;
        "" !== this.options.topAnchor ? this._parsePoints() : this.$anchor = this.options.anchor ? d("#" + this.options.anchor) : d(document.body);
        this._setSizes(function () {
            h._calc(!1)
        });
        this._events(c.split("-").reverse().join("-"))
    };
    c.prototype._parsePoints = function () {
        for (var a = [this.options.topAnchor, this.options.btmAnchor], c = {}, e = 0, g = a.length; e < g && a[e]; e++) {
            if ("number" === typeof a[e]) var k = a[e]; else {
                var m = a[e].split(":"), l = d("#" + m[0]);
                k = l.offset().top;
                m[1] && "bottom" === m[1].toLowerCase() && (k += l[0].getBoundingClientRect().height)
            }
            c[e] = k
        }
        this.points = c
    };
    c.prototype._events = function (a) {
        var b = this, c = "scroll.zf." + a;
        this.isOn || (this.canStick && (this.isOn = !0, d(window).off(c).on(c, function (a) {
            0 ===
            b.scrollCount ? (b.scrollCount = b.options.checkEvery, b._setSizes(function () {
                b._calc(!1, window.pageYOffset)
            })) : (b.scrollCount--, b._calc(!1, window.pageYOffset))
        })), this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function (d, e) {
            b._setSizes(function () {
                b._calc(!1);
                b.canStick ? b.isOn || b._events(a) : b.isOn && b._pauseListeners(c)
            })
        }))
    };
    c.prototype._pauseListeners = function (a) {
        this.isOn = !1;
        d(window).off(a);
        this.$element.trigger("pause.zf.sticky")
    };
    c.prototype._calc = function (a, d) {
        a && this._setSizes();
        if (!this.canStick) return this.isStuck && this._removeSticky(!0), !1;
        d || (d = window.pageYOffset);
        d >= this.topPoint ? d <= this.bottomPoint ? this.isStuck || this._setSticky() : this.isStuck && this._removeSticky(!1) : this.isStuck && this._removeSticky(!0)
    };
    c.prototype._setSticky = function () {
        var a = this.options.stickTo, d = "top" === a ? "marginTop" : "marginBottom",
            c = "top" === a ? "bottom" : "top", e = {};
        e[d] = this.options[d] + "em";
        e[a] = 0;
        e[c] = "auto";
        e.left = this.$container.offset().left + parseInt(window.getComputedStyle(this.$container[0])["padding-left"],
            10);
        this.isStuck = !0;
        this.$element.removeClass("is-anchored is-at-" + c).addClass("is-stuck is-at-" + a).css(e).trigger("sticky.zf.stuckto:" + a)
    };
    c.prototype._removeSticky = function (a) {
        var b = this.options.stickTo, d = "top" === b, c = {},
            e = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight;
        var m = d ? "bottom" : "top";
        c[d ? "marginTop" : "marginBottom"] = 0;
        a && !d || d && !a ? (c[b] = e, c[m] = 0) : (c[b] = 0, c[m] = e);
        c.left = "";
        this.isStuck = !1;
        this.$element.removeClass("is-stuck is-at-" + b).addClass("is-anchored is-at-" +
            (a ? "top" : "bottom")).css(c).trigger("sticky.zf.unstuckfrom:" + a ? "top" : "bottom")
    };
    c.prototype._setSizes = function (a) {
        (this.canStick = e.MediaQuery.atLeast(this.options.stickyOn)) || a();
        var b = this.$container[0].getBoundingClientRect().width, d = window.getComputedStyle(this.$container[0]),
            c = parseInt(d["padding-right"], 10);
        this.$anchor && this.$anchor.length ? this.anchorHeight = this.$anchor[0].getBoundingClientRect().height : this._parsePoints();
        this.$element.css({"max-width": b - c + "px"});
        this.containerHeight = b = this.$element[0].getBoundingClientRect().height ||
            this.containerHeight;
        this.$container.css({height: b});
        this.elemHeight = b;
        this.isStuck && this.$element.css({left: this.$container.offset().left + parseInt(d["padding-left"], 10)});
        this._setBreakPoints(b, function () {
            a && a()
        })
    };
    c.prototype._setBreakPoints = function (b, d) {
        if (!this.canStick) if (d) d(); else return !1;
        var c = a(this.options.marginTop), e = a(this.options.marginBottom),
            f = this.points ? this.points[0] : this.$anchor.offset().top,
            m = this.points ? this.points[1] : f + this.anchorHeight, l = window.innerHeight;
        "top" === this.options.stickTo ?
            (f -= c, m -= b + c) : "bottom" === this.options.stickTo && (f -= l - (b + e), m -= l - e);
        this.topPoint = f;
        this.bottomPoint = m;
        d && d()
    };
    c.prototype.destroy = function () {
        this._removeSticky(!0);
        this.$element.removeClass(this.options.stickyClass + " is-anchored is-at-top").css({
            height: "",
            top: "",
            bottom: "",
            "max-width": ""
        }).off("resizeme.zf.trigger");
        this.$anchor.off("change.zf.sticky");
        d(window).off("scroll.zf.sticky");
        this.wasWrapped ? this.$element.unwrap() : this.$container.removeClass(this.options.containerClass).css({height: ""});
        e.unregisterPlugin(this)
    };
    e.plugin(c, "Sticky")
}(jQuery, window.Foundation);
!function (d, e) {
    function c(a, b) {
        this.$element = a;
        this.options = d.extend({}, c.defaults, this.$element.data(), b);
        this._init();
        e.registerPlugin(this);
        e.Keyboard.register("Tabs", {
            ENTER: "open",
            SPACE: "open",
            ARROW_RIGHT: "next",
            ARROW_UP: "previous",
            ARROW_DOWN: "next",
            ARROW_LEFT: "previous"
        })
    }

    c.defaults = {autoFocus: !1, wrapOnKeys: !0, matchHeight: !1, linkClass: "tabs-title", panelClass: "tabs-panel"};
    c.prototype._init = function () {
        var a = this;
        this.$tabTitles = this.$element.find("." + this.options.linkClass);
        this.$tabContent = d('[data-tabs-content="' +
            this.$element[0].id + '"]');
        this.$tabTitles.each(function () {
            var b = d(this), c = b.find("a"), e = b.hasClass("is-active"), k = c.attr("href").slice(1),
                m = k + "-label", l = d(k);
            b.attr({role: "presentation"});
            c.attr({role: "tab", "aria-controls": k, "aria-selected": e, id: m});
            l.attr({role: "tabpanel", "aria-hidden": !e, "aria-labelledby": m});
            e && a.options.autoFocus && c.focus()
        });
        if (this.options.matchHeight) {
            var b = this.$tabContent.find("img");
            if (b.length) e.onImagesLoaded(b, this._setHeight.bind(this)); else this._setHeight()
        }
        this._events()
    };
    c.prototype._events = function () {
        this._addKeyHandler();
        this._addClickHandler();
        if (this.options.matchHeight) d(window).on("changed.zf.mediaquery", this._setHeight.bind(this))
    };
    c.prototype._addClickHandler = function () {
        var a = this;
        this.$tabTitles.off("click.zf.tabs").on("click.zf.tabs", function (b) {
            b.preventDefault();
            b.stopPropagation();
            d(this).hasClass("is-active") || a._handleTabChange(d(this))
        })
    };
    c.prototype._addKeyHandler = function () {
        var a = this;
        a.$element.find("li:first-of-type");
        a.$element.find("li:last-of-type");
        this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function (b) {
            b.stopPropagation();
            b.preventDefault();
            var c = d(this), h = c.parent("ul").children("li"), g, k;
            h.each(function (b) {
                d(this).is(c) && (a.options.wrapOnKeys ? (g = 0 === b ? h.last() : h.eq(b - 1), k = b === h.length - 1 ? h.first() : h.eq(b + 1)) : (g = h.eq(Math.max(0, b - 1)), k = h.eq(Math.min(b + 1, h.length - 1))))
            });
            e.Keyboard.handleKey(b, a, {
                open: function () {
                    c.find('[role="tab"]').focus();
                    a._handleTabChange(c)
                }, previous: function () {
                    g.find('[role="tab"]').focus();
                    a._handleTabChange(g)
                },
                next: function () {
                    k.find('[role="tab"]').focus();
                    a._handleTabChange(k)
                }
            })
        })
    };
    c.prototype._handleTabChange = function (a) {
        var b = a.find('[role="tab"]'), c = b.attr("href"), c = d(c),
            e = this.$element.find("." + this.options.linkClass + ".is-active").removeClass("is-active").find('[role="tab"]').attr({"aria-selected": "false"}).attr("href");
        d(e).removeClass("is-active").attr({"aria-hidden": "true"});
        a.addClass("is-active");
        b.attr({"aria-selected": "true"});
        c.addClass("is-active").attr({"aria-hidden": "false"});
        this.$element.trigger("change.zf.tabs",
            [a])
    };
    c.prototype.selectTab = function (a) {
        a = "object" === typeof a ? a[0].id : a;
        0 > a.indexOf("#") && (a = "#" + a);
        a = this.$tabTitles.find('[href="' + a + '"]').parent("." + this.options.linkClass);
        this._handleTabChange(a)
    };
    c.prototype._setHeight = function () {
        var a = 0;
        this.$tabContent.find("." + this.options.panelClass).css("height", "").each(function () {
            var b = d(this), c = b.hasClass("is-active");
            c || b.css({visibility: "hidden", display: "block"});
            var e = this.getBoundingClientRect().height;
            c || b.css({visibility: "", display: ""});
            a = e > a ?
                e : a
        }).css("height", a + "px")
    };
    c.prototype.destroy = function () {
        this.$element.find("." + this.options.linkClass).off(".zf.tabs").hide().end().find("." + this.options.panelClass).hide();
        this.options.matchHeight && d(window).off("changed.zf.mediaquery");
        e.unregisterPlugin(this)
    };
    e.plugin(c, "Tabs")
}(jQuery, window.Foundation);
!function (d, e) {
    function c(a, b) {
        this.$element = a;
        this.options = e.extend({}, c.defaults, a.data(), b);
        this.className = "";
        this._init();
        this._events();
        d.registerPlugin(this)
    }

    c.defaults = {animate: !1};
    c.prototype._init = function () {
        if (this.options.animate) {
            var a = this.options.animate.split(" ");
            this.animationIn = a[0];
            this.animationOut = a[1] || null
        } else a = this.$element.data("toggler"), this.className = "." === a[0] ? a.slice(1) : a;
        a = this.$element[0].id;
        e('[data-open="' + a + '"], [data-close="' + a + '"], [data-toggle="' + a + '"]').attr("aria-controls",
            a);
        this.$element.is(":hidden") && this.$element.attr("aria-expanded", "false")
    };
    c.prototype._events = function () {
        var a = this;
        this.$element.on("toggle.zf.trigger", function () {
            a.toggle();
            return !1
        })
    };
    c.prototype.toggle = function () {
        this.options.animate ? this._toggleAnimate() : this._toggleClass()
    };
    c.prototype._toggleClass = function () {
        this.$element.toggleClass(this.className);
        this.$element.hasClass(this.className) ? this.$element.trigger("on.zf.toggler") : this.$element.trigger("off.zf.toggler");
        this._updateARIA()
    };
    c.prototype._toggleAnimate =
        function () {
            var a = this;
            this.$element.is(":hidden") ? d.Motion.animateIn(this.$element, this.animationIn, function () {
                this.trigger("on.zf.toggler");
                a._updateARIA()
            }) : d.Motion.animateOut(this.$element, this.animationOut, function () {
                this.trigger("off.zf.toggler");
                a._updateARIA()
            })
        };
    c.prototype._updateARIA = function () {
        this.$element.is(":hidden") ? this.$element.attr("aria-expanded", "false") : this.$element.attr("aria-expanded", "true")
    };
    c.prototype.destroy = function () {
        this.$element.off(".zf.toggler");
        d.unregisterPlugin(this)
    };
    d.plugin(c, "Toggler");
    "undefined" !== typeof module && "undefined" !== typeof module.exports && (module.exports = c);
    "function" === typeof define && define(["foundation"], function () {
        return c
    })
}(Foundation, jQuery);
!function (d, e, c) {
    function a(b, e) {
        this.$element = b;
        this.options = d.extend({}, a.defaults, this.$element.data(), e);
        this.isClick = this.isActive = !1;
        this._init();
        c.registerPlugin(this)
    }

    a.defaults = {
        disableForTouch: !1,
        hoverDelay: 200,
        fadeInDuration: 150,
        fadeOutDuration: 150,
        disableHover: !1,
        templateClasses: "",
        tooltipClass: "tooltip",
        triggerClass: "has-tip",
        showOn: "small",
        template: "",
        tipText: "",
        touchCloseText: "Tap to close.",
        clickOpen: !0,
        positionClass: "",
        vOffset: 10,
        hOffset: 12
    };
    a.prototype._init = function () {
        var a = this.$element.attr("aria-describedby") ||
            c.GetYoDigits(6, "tooltip");
        this.options.positionClass = this._getPositionClass(this.$element);
        this.options.tipText = this.options.tipText || this.$element.attr("title");
        this.template = this.options.template ? d(this.options.template) : this._buildTemplate(a);
        this.template.appendTo(e.body).text(this.options.tipText).hide();
        this.$element.attr({
            title: "",
            "aria-describedby": a,
            "data-yeti-box": a,
            "data-toggle": a,
            "data-resize": a
        }).addClass(this.triggerClass);
        this.usedPositions = [];
        this.counter = 4;
        this.classChanged = !1;
        this._events()
    };
    a.prototype._getPositionClass = function (a) {
        return a ? a = (a = a[0].className.match(/(top|left|right)/g)) ? a[0] : "" : ""
    };
    a.prototype._buildTemplate = function (a) {
        var b = (this.options.tooltipClass + " " + this.options.positionClass).trim();
        return d("<div></div>").addClass(b).attr({
            role: "tooltip",
            "aria-hidden": !0,
            "data-is-active": !1,
            "data-is-focus": !1,
            id: a
        })
    };
    a.prototype._reposition = function (a) {
        this.usedPositions.push(a ? a : "bottom");
        !a && 0 > this.usedPositions.indexOf("top") ? this.template.addClass("top") : "top" === a && 0 > this.usedPositions.indexOf("bottom") ?
            this.template.removeClass(a) : "left" === a && 0 > this.usedPositions.indexOf("right") ? this.template.removeClass(a).addClass("right") : "right" === a && 0 > this.usedPositions.indexOf("left") ? this.template.removeClass(a).addClass("left") : !a && -1 < this.usedPositions.indexOf("top") && 0 > this.usedPositions.indexOf("left") ? this.template.addClass("left") : "top" === a && -1 < this.usedPositions.indexOf("bottom") && 0 > this.usedPositions.indexOf("left") ? this.template.removeClass(a).addClass("left") : ("left" === a && -1 < this.usedPositions.indexOf("right") &&
            0 > this.usedPositions.indexOf("bottom") || "right" === a && -1 < this.usedPositions.indexOf("left") && this.usedPositions.indexOf("bottom"), this.template.removeClass(a));
        this.classChanged = !0;
        this.counter--
    };
    a.prototype._setPosition = function () {
        var a = this._getPositionClass(this.template), d = c.Box.GetDimensions(this.template),
            e = c.Box.GetDimensions(this.$element);
        if (d.width >= d.windowDims.width || !this.counter && !c.Box.ImNotTouchingYou(this.template)) return this.template.offset(c.Box.GetOffsets(this.template, this.$element,
            "center bottom", this.options.vOffset, this.options.hOffset, !0)).css({
            width: e.windowDims.width - 2 * this.options.hOffset,
            height: "auto"
        }), !1;
        for (this.template.offset(c.Box.GetOffsets(this.template, this.$element, "center " + (a || "bottom"), this.options.vOffset, this.options.hOffset)); !c.Box.ImNotTouchingYou(this.template) && this.counter;) this._reposition(a), this._setPosition()
    };
    a.prototype.show = function () {
        if ("all" !== this.options.showOn && !c.MediaQuery.atLeast(this.options.showOn)) return !1;
        this.template.css("visibility",
            "hidden").show();
        this._setPosition();
        this.$element.trigger("closeme.zf.tooltip", this.template.attr("id"));
        this.template.attr({"data-is-active": !0, "aria-hidden": !1});
        this.isActive = !0;
        this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function () {
        });
        this.$element.trigger("show.zf.tooltip")
    };
    a.prototype.hide = function () {
        var a = this;
        this.template.stop().attr({
            "aria-hidden": !0,
            "data-is-active": !1
        }).fadeOut(this.options.fadeOutDuration, function () {
            a.isActive = !1;
            a.isClick = !1;
            a.classChanged && (a.template.removeClass(a._getPositionClass(a.template)).addClass(a.options.positionClass), a.usedPositions = [], a.counter = 4, a.classChanged = !1)
        });
        this.$element.trigger("hide.zf.tooltip")
    };
    a.prototype._events = function () {
        var a = this, d = !1;
        if (!this.options.disableHover) this.$element.on("mouseenter.zf.tooltip", function (b) {
            a.isActive || (a.timeout = setTimeout(function () {
                a.show()
            }, a.options.hoverDelay))
        }).on("mouseleave.zf.tooltip", function (b) {
            clearTimeout(a.timeout);
            (!d || !a.isClick && a.options.clickOpen) &&
            a.hide()
        });
        if (this.options.clickOpen) this.$element.on("mousedown.zf.tooltip", function (b) {
            b.stopImmediatePropagation();
            a.isClick ? a.hide() : (a.isClick = !0, !a.options.disableHover && a.$element.attr("tabindex") || a.isActive || a.show())
        });
        if (!this.options.disableForTouch) this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function (b) {
            a.isActive ? a.hide() : a.show()
        });
        this.$element.on({"close.zf.trigger": this.hide.bind(this)});
        this.$element.on("focus.zf.tooltip", function (b) {
            d = !0;
            console.log(a.isClick);
            if (a.isClick) return !1;
            a.show()
        }).on("focusout.zf.tooltip", function (b) {
            d = !1;
            a.isClick = !1;
            a.hide()
        }).on("resizeme.zf.trigger", function () {
            a.isActive && a._setPosition()
        })
    };
    a.prototype.toggle = function () {
        this.isActive ? this.hide() : this.show()
    };
    a.prototype.destroy = function () {
        this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tootip").removeAttr("aria-describedby").removeAttr("data-yeti-box").removeAttr("data-toggle").removeAttr("data-resize");
        this.template.remove();
        c.unregisterPlugin(this)
    };
    c.plugin(a, "Tooltip")
}(jQuery,
    window.document, window.Foundation);
(function () {
    function d(a) {
        this.tokens = [];
        this.tokens.links = {};
        this.options = a || m.defaults;
        this.rules = l.normal;
        this.options.gfm && (this.rules = this.options.tables ? l.tables : l.gfm)
    }

    function e(a, b) {
        this.options = b || m.defaults;
        this.links = a;
        this.rules = p.normal;
        this.renderer = this.options.renderer || new c;
        this.renderer.options = this.options;
        if (!this.links) throw Error("Tokens array requires a `links` property.");
        this.options.gfm ? this.rules = this.options.breaks ? p.breaks : p.gfm : this.options.pedantic && (this.rules = p.pedantic)
    }

    function c(a) {
        this.options = a || {}
    }

    function a(a) {
        this.tokens = [];
        this.token = null;
        this.options = a || m.defaults;
        this.options.renderer = this.options.renderer || new c;
        this.renderer = this.options.renderer;
        this.renderer.options = this.options
    }

    function b(a, b) {
        return a.replace(b ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }

    function f(a) {
        return a.replace(/&([#\w]+);/g, function (a, b) {
            b = b.toLowerCase();
            return "colon" === b ? ":" : "#" === b.charAt(0) ? "x" ===
            b.charAt(1) ? String.fromCharCode(parseInt(b.substring(2), 16)) : String.fromCharCode(+b.substring(1)) : ""
        })
    }

    function h(a, b) {
        a = a.source;
        b = b || "";
        return function t(d, c) {
            if (!d) return new RegExp(a, b);
            c = c.source || c;
            c = c.replace(/(^|[^\[])\^/g, "$1");
            a = a.replace(d, c);
            return t
        }
    }

    function g() {
    }

    function k(a) {
        for (var b = 1, d, c; b < arguments.length; b++) for (c in d = arguments[b], d) Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        return a
    }

    function m(c, e, f) {
        if (f || "function" === typeof e) {
            f || (f = e, e = null);
            e = k({}, m.defaults,
                e || {});
            var n = e.highlight, h = 0;
            try {
                var g = d.lex(c, e)
            } catch (v) {
                return f(v)
            }
            var l = g.length;
            var q = function (b) {
                if (b) return e.highlight = n, f(b);
                try {
                    var d = a.parse(g, e)
                } catch (w) {
                    b = w
                }
                e.highlight = n;
                return b ? f(b) : f(null, d)
            };
            if (!n || 3 > n.length) return q();
            delete e.highlight;
            if (!l) return q();
            for (; h < g.length; h++) (function (a) {
                return "code" !== a.type ? --l || q() : n(a.text, a.lang, function (b, d) {
                    if (b) return q(b);
                    if (null == d || d === a.text) return --l || q();
                    a.text = d;
                    a.escaped = !0;
                    --l || q()
                })
            })(g[h])
        } else try {
            return e && (e = k({}, m.defaults,
                e)), a.parse(d.lex(c, e), e)
        } catch (v) {
            v.message += "\nPlease report this to https://github.com/chjj/marked.";
            if ((e || m.defaults).silent) return "<p>An error occured:</p><pre>" + b(v.message + "", !0) + "</pre>";
            throw v;
        }
    }

    var l = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences: g,
        hr: /^( *[-*_]){3,} *(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
        nptable: g,
        lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
        blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
        list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
        html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
        table: g,
        paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
        text: /^[^\n]+/,
        bullet: /(?:[*+-]|\d+\.)/,
        item: /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/
    };
    l.item = h(l.item, "gm")(/bull/g, l.bullet)();
    l.list = h(l.list)(/bull/g, l.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + l.def.source + ")")();
    l.blockquote =
        h(l.blockquote)("def", l.def)();
    l._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";
    l.html = h(l.html)("comment", /\x3c!--[\s\S]*?--\x3e/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, l._tag)();
    l.paragraph = h(l.paragraph)("hr", l.hr)("heading", l.heading)("lheading", l.lheading)("blockquote", l.blockquote)("tag", "<" + l._tag)("def", l.def)();
    l.normal =
        k({}, l);
    l.gfm = k({}, l.normal, {
        fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
        paragraph: /^/,
        heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
    });
    l.gfm.paragraph = h(l.paragraph)("(?!", "(?!" + l.gfm.fences.source.replace("\\1", "\\2") + "|" + l.list.source.replace("\\1", "\\3") + "|")();
    l.tables = k({}, l.gfm, {
        nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
        table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
    });
    d.rules = l;
    d.lex = function (a, b) {
        return (new d(b)).lex(a)
    };
    d.prototype.lex = function (a) {
        a = a.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n");
        return this.token(a, !0)
    };
    d.prototype.token = function (a, b, d) {
        a = a.replace(/^ +$/gm, "");
        for (var c, e, f, h, n, g, k; a;) {
            if (f = this.rules.newline.exec(a)) a = a.substring(f[0].length), 1 < f[0].length && this.tokens.push({type: "space"});
            if (f = this.rules.code.exec(a)) a = a.substring(f[0].length), f = f[0].replace(/^ {4}/gm, ""), this.tokens.push({
                type: "code", text: this.options.pedantic ? f : f.replace(/\n+$/,
                    "")
            }); else if (f = this.rules.fences.exec(a)) a = a.substring(f[0].length), this.tokens.push({
                type: "code",
                lang: f[2],
                text: f[3] || ""
            }); else if (f = this.rules.heading.exec(a)) a = a.substring(f[0].length), this.tokens.push({
                type: "heading",
                depth: f[1].length,
                text: f[2]
            }); else if (b && (f = this.rules.nptable.exec(a))) {
                a = a.substring(f[0].length);
                n = {
                    type: "table",
                    header: f[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                    align: f[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: f[3].replace(/\n$/, "").split("\n")
                };
                for (g = 0; g < n.align.length; g++) /^ *-+: *$/.test(n.align[g]) ?
                    n.align[g] = "right" : /^ *:-+: *$/.test(n.align[g]) ? n.align[g] = "center" : /^ *:-+ *$/.test(n.align[g]) ? n.align[g] = "left" : n.align[g] = null;
                for (g = 0; g < n.cells.length; g++) n.cells[g] = n.cells[g].split(/ *\| */);
                this.tokens.push(n)
            } else if (f = this.rules.lheading.exec(a)) a = a.substring(f[0].length), this.tokens.push({
                type: "heading",
                depth: "=" === f[2] ? 1 : 2,
                text: f[1]
            }); else if (f = this.rules.hr.exec(a)) a = a.substring(f[0].length), this.tokens.push({type: "hr"}); else if (f = this.rules.blockquote.exec(a)) a = a.substring(f[0].length),
                this.tokens.push({type: "blockquote_start"}), f = f[0].replace(/^ *> ?/gm, ""), this.token(f, b, !0), this.tokens.push({type: "blockquote_end"}); else if (f = this.rules.list.exec(a)) {
                a = a.substring(f[0].length);
                h = f[2];
                this.tokens.push({type: "list_start", ordered: 1 < h.length});
                f = f[0].match(this.rules.item);
                c = !1;
                k = f.length;
                for (g = 0; g < k; g++) n = f[g], e = n.length, n = n.replace(/^ *([*+-]|\d+\.) +/, ""), ~n.indexOf("\n ") && (e -= n.length, n = this.options.pedantic ? n.replace(/^ {1,4}/gm, "") : n.replace(new RegExp("^ {1," + e + "}", "gm"),
                    "")), this.options.smartLists && g !== k - 1 && (e = l.bullet.exec(f[g + 1])[0], h === e || 1 < h.length && 1 < e.length || (a = f.slice(g + 1).join("\n") + a, g = k - 1)), e = c || /\n\n(?!\s*$)/.test(n), g !== k - 1 && (c = "\n" === n.charAt(n.length - 1), e || (e = c)), this.tokens.push({type: e ? "loose_item_start" : "list_item_start"}), this.token(n, !1, d), this.tokens.push({type: "list_item_end"});
                this.tokens.push({type: "list_end"})
            } else if (f = this.rules.html.exec(a)) a = a.substring(f[0].length), this.tokens.push({
                type: this.options.sanitize ? "paragraph" : "html", pre: !this.options.sanitizer &&
                ("pre" === f[1] || "script" === f[1] || "style" === f[1]), text: f[0]
            }); else if (!d && b && (f = this.rules.def.exec(a))) a = a.substring(f[0].length), this.tokens.links[f[1].toLowerCase()] = {
                href: f[2],
                title: f[3]
            }; else if (b && (f = this.rules.table.exec(a))) {
                a = a.substring(f[0].length);
                n = {
                    type: "table",
                    header: f[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                    align: f[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: f[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                };
                for (g = 0; g < n.align.length; g++) /^ *-+: *$/.test(n.align[g]) ? n.align[g] =
                    "right" : /^ *:-+: *$/.test(n.align[g]) ? n.align[g] = "center" : /^ *:-+ *$/.test(n.align[g]) ? n.align[g] = "left" : n.align[g] = null;
                for (g = 0; g < n.cells.length; g++) n.cells[g] = n.cells[g].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
                this.tokens.push(n)
            } else if (b && (f = this.rules.paragraph.exec(a))) a = a.substring(f[0].length), this.tokens.push({
                type: "paragraph",
                text: "\n" === f[1].charAt(f[1].length - 1) ? f[1].slice(0, -1) : f[1]
            }); else if (f = this.rules.text.exec(a)) a = a.substring(f[0].length), this.tokens.push({
                type: "text",
                text: f[0]
            });
            else if (a) throw Error("Infinite loop on byte: " + a.charCodeAt(0));
        }
        return this.tokens
    };
    var p = {
        escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
        autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
        url: g,
        tag: /^\x3c!--[\s\S]*?--\x3e|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
        link: /^!?\[(inside)\]\(href\)/,
        reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
        nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
        strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
        em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
        code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        br: /^ {2,}\n(?!\s*$)/,
        del: g,
        text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/,
        _inside: /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,
        _href: /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/
    };
    p.link = h(p.link)("inside", p._inside)("href", p._href)();
    p.reflink = h(p.reflink)("inside", p._inside)();
    p.normal = k({}, p);
    p.pedantic = k({}, p.normal, {
        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
    });
    p.gfm = k({}, p.normal, {
        escape: h(p.escape)("])", "~|])")(),
        url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        del: /^~~(?=\S)([\s\S]*?\S)~~/,
        text: h(p.text)("]|", "~]|")("|", "|https?://|")()
    });
    p.breaks = k({}, p.gfm, {br: h(p.br)("{2,}", "*")(), text: h(p.gfm.text)("{2,}", "*")()});
    e.rules = p;
    e.output = function (a, b, d) {
        return (new e(b, d)).output(a)
    };
    e.prototype.output = function (a) {
        for (var d = "", c, e; a;) if (e = this.rules.escape.exec(a)) a = a.substring(e[0].length), d += e[1]; else if (e = this.rules.autolink.exec(a)) a = a.substring(e[0].length), "@" === e[2] ? (c = ":" === e[1].charAt(6) ? this.mangle(e[1].substring(7)) :
            this.mangle(e[1]), e = this.mangle("mailto:") + c) : e = c = b(e[1]), d += this.renderer.link(e, null, c); else if (!this.inLink && (e = this.rules.url.exec(a))) a = a.substring(e[0].length), e = c = b(e[1]), d += this.renderer.link(e, null, c); else if (e = this.rules.tag.exec(a)) !this.inLink && /^<a /i.test(e[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(e[0]) && (this.inLink = !1), a = a.substring(e[0].length), d += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e[0]) : b(e[0]) : e[0]; else if (e = this.rules.link.exec(a)) a = a.substring(e[0].length),
            this.inLink = !0, d += this.outputLink(e, {
            href: e[2],
            title: e[3]
        }), this.inLink = !1; else if ((e = this.rules.reflink.exec(a)) || (e = this.rules.nolink.exec(a))) a = a.substring(e[0].length), c = (e[2] || e[1]).replace(/\s+/g, " "), (c = this.links[c.toLowerCase()]) && c.href ? (this.inLink = !0, d += this.outputLink(e, c), this.inLink = !1) : (d += e[0].charAt(0), a = e[0].substring(1) + a); else if (e = this.rules.strong.exec(a)) a = a.substring(e[0].length), d += this.renderer.strong(this.output(e[2] || e[1])); else if (e = this.rules.em.exec(a)) a = a.substring(e[0].length),
            d += this.renderer.em(this.output(e[2] || e[1])); else if (e = this.rules.code.exec(a)) a = a.substring(e[0].length), d += this.renderer.codespan(b(e[2], !0)); else if (e = this.rules.br.exec(a)) a = a.substring(e[0].length), d += this.renderer.br(); else if (e = this.rules.del.exec(a)) a = a.substring(e[0].length), d += this.renderer.del(this.output(e[1])); else if (e = this.rules.text.exec(a)) a = a.substring(e[0].length), d += this.renderer.text(b(this.smartypants(e[0]))); else if (a) throw Error("Infinite loop on byte: " + a.charCodeAt(0));
        return d
    };
    e.prototype.outputLink = function (a, d) {
        var c = b(d.href);
        d = d.title ? b(d.title) : null;
        return "!" !== a[0].charAt(0) ? this.renderer.link(c, d, this.output(a[1])) : this.renderer.image(c, d, b(a[1]))
    };
    e.prototype.smartypants = function (a) {
        return this.options.smartypants ? a.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c").replace(/"/g, "\u201d").replace(/\.{3}/g, "\u2026") : a
    };
    e.prototype.mangle = function (a) {
        if (!this.options.mangle) return a;
        for (var b = "", d = a.length, c = 0, e; c < d; c++) e = a.charCodeAt(c), .5 < Math.random() && (e = "x" + e.toString(16)), b += "&#" + e + ";";
        return b
    };
    c.prototype.code = function (a, d, c) {
        if (this.options.highlight) {
            var e = this.options.highlight(a, d);
            null != e && e !== a && (c = !0, a = e)
        }
        return d ? '<pre class="' + this.options.langPrefix + b(d, !0) + ';">' + (c ? a : b(a, !0)) + "\n</pre>\n" : "<pre>" + (c ? a : b(a, !0)) + "\n</pre>"
    };
    c.prototype.blockquote = function (a) {
        return "<blockquote>\n" + a + "</blockquote>\n"
    };
    c.prototype.html = function (a) {
        return a
    };
    c.prototype.heading =
        function (a, b, d) {
            // debugger;
            // return "<h" + b + ' id="' + this.options.headerPrefix + d.toLowerCase().replace(/[^\w]+/g, "-") + '">' + a + "</h" + b + ">\n"
            return "<h" + b + '>' + a + "</h" + b + ">\n"
        };
    c.prototype.hr = function () {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
    };
    c.prototype.list = function (a, b) {
        b = b ? "ol" : "ul";
        return "<" + b + ">\n" + a + "</" + b + ">\n"
    };
    c.prototype.listitem = function (a) {
        return "<li>" + a + "</li>\n"
    };
    c.prototype.paragraph = function (a) {
        return "<p>" + a + "</p>\n"
    };
    c.prototype.table = function (a, b) {
        return "<table>\n<thead>\n" + a + "</thead>\n<tbody>\n" + b + "</tbody>\n</table>\n"
    };
    c.prototype.tablerow = function (a) {
        return "<tr>\n" + a + "</tr>\n"
    };
    c.prototype.tablecell = function (a, b) {
        var d = b.header ? "th" : "td";
        return (b.align ? "<" + d + ' style="text-align:' + b.align + '">' : "<" + d + ">") + a + "</" + d + ">\n"
    };
    c.prototype.strong = function (a) {
        return "<strong>" + a + "</strong>"
    };
    c.prototype.em = function (a) {
        return "<em>" + a + "</em>"
    };
    c.prototype.codespan = function (a) {
        return "<code>" + a + "</code>"
    };
    c.prototype.br = function () {
        return this.options.xhtml ? "<br/>" : "<br>"
    };
    c.prototype.del = function (a) {
        return "<del>" + a + "</del>"
    };
    c.prototype.link = function (a, b, d) {
        if (this.options.sanitize) {
            try {
                var c = decodeURIComponent(f(a)).replace(/[^\w:]/g, "").toLowerCase()
            } catch (u) {
                return ""
            }
            if (0 === c.indexOf("javascript:") || 0 === c.indexOf("vbscript:")) return ""
        }
        a = '<a href="' + a + '"';
        b && (a += ' title="' + b + '"');
        return a + (">" + d + "</a>")
    };
    c.prototype.image = function (a, b, d) {
        a = '<img src="' + a + '" alt="' + d + '"';
        b && (a += ' title="' + b + '"');
        return a += this.options.xhtml ? "/>" : ">"
    };
    c.prototype.text = function (a) {
        return a
    };
    a.parse = function (b, d, c) {
        return (new a(d, c)).parse(b)
    };
    a.prototype.parse = function (a) {
        this.inline = new e(a.links, this.options, this.renderer);
        this.tokens = a.reverse();
        for (a = ""; this.next();) a += this.tok();
        return a
    };
    a.prototype.next = function () {
        return this.token = this.tokens.pop()
    };
    a.prototype.peek = function () {
        return this.tokens[this.tokens.length - 1] || 0
    };
    a.prototype.parseText = function () {
        for (var a = this.token.text; "text" === this.peek().type;) a += "\n" + this.next().text;
        return this.inline.output(a)
    };
    a.prototype.tok = function () {
        switch (this.token.type) {
            case "space":
                return "";
            case "hr":
                return this.renderer.hr();
            case "heading":
                return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
            case "code":
                return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
            case "table":
                var a = "";
                var b = "";
                var d, c;
                var e = "";
                for (d = 0; d < this.token.header.length; d++) e += this.renderer.tablecell(this.inline.output(this.token.header[d]), {
                    header: !0,
                    align: this.token.align[d]
                });
                a += this.renderer.tablerow(e);
                for (d = 0; d < this.token.cells.length; d++) {
                    var f =
                        this.token.cells[d];
                    e = "";
                    for (c = 0; c < f.length; c++) e += this.renderer.tablecell(this.inline.output(f[c]), {
                        header: !1,
                        align: this.token.align[c]
                    });
                    b += this.renderer.tablerow(e)
                }
                return this.renderer.table(a, b);
            case "blockquote_start":
                for (b = ""; "blockquote_end" !== this.next().type;) b += this.tok();
                return this.renderer.blockquote(b);
            case "list_start":
                b = "";
                for (a = this.token.ordered; "list_end" !== this.next().type;) b += this.tok();
                return this.renderer.list(b, a);
            case "list_item_start":
                for (b = ""; "list_item_end" !== this.next().type;) b +=
                    "text" === this.token.type ? this.parseText() : this.tok();
                return this.renderer.listitem(b);
            case "loose_item_start":
                for (b = ""; "list_item_end" !== this.next().type;) b += this.tok();
                return this.renderer.listitem(b);
            case "html":
                return b = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text), this.renderer.html(b);
            case "paragraph":
                return this.renderer.paragraph(this.inline.output(this.token.text));
            case "text":
                return this.renderer.paragraph(this.parseText())
        }
    };
    g.exec = g;
    m.options =
        m.setOptions = function (a) {
            k(m.defaults, a);
            return m
        };
    m.defaults = {
        gfm: !0,
        tables: !0,
        breaks: !1,
        pedantic: !1,
        sanitize: !1,
        sanitizer: null,
        mangle: !0,
        smartLists: !1,
        silent: !1,
        highlight: null,
        langPrefix: "brush: ",
        smartypants: !1,
        headerPrefix: "",
        renderer: new c,
        xhtml: !1
    };
    m.Parser = a;
    m.parser = a.parse;
    m.Renderer = c;
    m.Lexer = d;
    m.lexer = d.lex;
    m.InlineLexer = e;
    m.inlineLexer = e.output;
    m.parse = m;
    "undefined" !== typeof module && "object" === typeof exports ? module.exports = m : "function" === typeof define && define.amd ? define(function () {
            return m
        }) :
        this.marked = m
}).call(function () {
    return this || ("undefined" !== typeof window ? window : global)
}());
/*
 clipboard.js v1.5.5
 https://zenorocha.github.io/clipboard.js

 Licensed MIT ? Zeno Rocha
*/
!function (d) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = d() : "function" == typeof define && define.amd ? define([], d) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Clipboard = d()
}(function () {
    return function e(c, a, b) {
        function f(g, m) {
            if (!a[g]) {
                if (!c[g]) {
                    var k = "function" == typeof require && require;
                    if (!m && k) return k(g, !0);
                    if (h) return h(g, !0);
                    m = Error("Cannot find module '" + g + "'");
                    throw m.code = "MODULE_NOT_FOUND", m;
                }
                m = a[g] = {exports: {}};
                c[g][0].call(m.exports, function (a) {
                    var b = c[g][1][a];
                    return f(b ? b : a)
                }, m, m.exports, e, c, a, b)
            }
            return a[g].exports
        }

        for (var h = "function" == typeof require && require, g = 0; g < b.length; g++) f(b[g]);
        return f
    }({
        1: [function (e, c, a) {
            var b = e("matches-selector");
            c.exports = function (a, c, e) {
                for (a = e ? a : a.parentNode; a && a !== document;) {
                    if (b(a, c)) return a;
                    a = a.parentNode
                }
            }
        }, {"matches-selector": 2}], 2: [function (e, c, a) {
            e = Element.prototype;
            var b = e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector ||
                e.oMatchesSelector;
            c.exports = function (a, c) {
                if (b) return b.call(a, c);
                c = a.parentNode.querySelectorAll(c);
                for (var e = 0; e < c.length; ++e) if (c[e] == a) return !0;
                return !1
            }
        }, {}], 3: [function (e, c, a) {
            function b(a, b, c, e) {
                return function (c) {
                    c.delegateTarget = f(c.target, b, !0);
                    c.delegateTarget && e.call(a, c)
                }
            }

            var f = e("closest");
            c.exports = function (a, c, e, f) {
                var g = b.apply(this, arguments);
                return a.addEventListener(e, g), {
                    destroy: function () {
                        a.removeEventListener(e, g)
                    }
                }
            }
        }, {closest: 1}], 4: [function (e, c, a) {
            a.node = function (a) {
                return void 0 !==
                    a && a instanceof HTMLElement && 1 === a.nodeType
            };
            a.nodeList = function (b) {
                var c = Object.prototype.toString.call(b);
                return void 0 !== b && ("[object NodeList]" === c || "[object HTMLCollection]" === c) && "length" in b && (0 === b.length || a.node(b[0]))
            };
            a.string = function (a) {
                return "string" == typeof a || a instanceof String
            };
            a.function = function (a) {
                return "[object Function]" === Object.prototype.toString.call(a)
            }
        }, {}], 5: [function (e, c, a) {
            function b(a, b, c) {
                return a.addEventListener(b, c), {
                    destroy: function () {
                        a.removeEventListener(b, c)
                    }
                }
            }

            function f(a, b, c) {
                return Array.prototype.forEach.call(a, function (a) {
                    a.addEventListener(b, c)
                }), {
                    destroy: function () {
                        Array.prototype.forEach.call(a, function (a) {
                            a.removeEventListener(b, c)
                        })
                    }
                }
            }

            var h = e("./is"), g = e("delegate");
            c.exports = function (a, c, e) {
                if (!a && !c && !e) throw Error("Missing required arguments");
                if (!h.string(c)) throw new TypeError("Second argument must be a String");
                if (!h.function(e)) throw new TypeError("Third argument must be a Function");
                if (h.node(a)) return b(a, c, e);
                if (h.nodeList(a)) return f(a,
                    c, e);
                if (h.string(a)) return g(document.body, a, c, e);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            }
        }, {"./is": 4, delegate: 3}], 6: [function (e, c, a) {
            c.exports = function (a) {
                if ("INPUT" === a.nodeName || "TEXTAREA" === a.nodeName) a.focus(), a.setSelectionRange(0, a.value.length), a = a.value; else {
                    a.hasAttribute("contenteditable") && a.focus();
                    var b = window.getSelection(), c = document.createRange();
                    c.selectNodeContents(a);
                    b.removeAllRanges();
                    b.addRange(c);
                    a = b.toString()
                }
                return a
            }
        },
            {}], 7: [function (e, c, a) {
            function b() {
            }

            b.prototype = {
                on: function (a, b, c) {
                    var e = this.e || (this.e = {});
                    return (e[a] || (e[a] = [])).push({fn: b, ctx: c}), this
                }, once: function (a, b, c) {
                    function e() {
                        f.off(a, e);
                        b.apply(c, arguments)
                    }

                    var f = this;
                    return e._ = b, this.on(a, e, c)
                }, emit: function (a) {
                    var b = [].slice.call(arguments, 1), c = ((this.e || (this.e = {}))[a] || []).slice(), e = 0,
                        f = c.length;
                    for (e; f > e; e++) c[e].fn.apply(c[e].ctx, b);
                    return this
                }, off: function (a, b) {
                    var c = this.e || (this.e = {}), e = c[a], f = [];
                    if (e && b) for (var h = 0, p = e.length; p > h; h++) e[h].fn !==
                    b && e[h].fn._ !== b && f.push(e[h]);
                    return f.length ? c[a] = f : delete c[a], this
                }
            };
            c.exports = b
        }, {}], 8: [function (e, c, a) {
            a.__esModule = !0;
            var b = function () {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var e = b[c];
                        e.enumerable = e.enumerable || !1;
                        e.configurable = !0;
                        "value" in e && (e.writable = !0);
                        Object.defineProperty(a, e.key, e)
                    }
                }

                return function (b, c, e) {
                    return c && a(b.prototype, c), e && a(b, e), b
                }
            }(), f = (e = e("select")) && e.__esModule ? e : {"default": e};
            e = function () {
                function a(b) {
                    if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function");
                    this.resolveOptions(b);
                    this.initSelection()
                }

                return a.prototype.resolveOptions = function () {
                    var a = 0 >= arguments.length || void 0 === arguments[0] ? {} : arguments[0];
                    this.action = a.action;
                    this.emitter = a.emitter;
                    this.target = a.target;
                    this.text = a.text;
                    this.trigger = a.trigger;
                    this.selectedText = ""
                }, a.prototype.initSelection = function () {
                    if (this.text && this.target) throw Error('Multiple attributes declared, use either "target" or "text"');
                    if (this.text) this.selectFake(); else {
                        if (!this.target) throw Error('Missing required attributes, use either "target" or "text"');
                        this.selectTarget()
                    }
                }, a.prototype.selectFake = function () {
                    var a = this;
                    this.removeFake();
                    this.fakeHandler = document.body.addEventListener("click", function () {
                        return a.removeFake()
                    });
                    this.fakeElem = document.createElement("textarea");
                    this.fakeElem.style.position = "absolute";
                    this.fakeElem.style.left = "-9999px";
                    this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px";
                    this.fakeElem.setAttribute("readonly", "");
                    this.fakeElem.value = this.text;
                    document.body.appendChild(this.fakeElem);
                    this.selectedText =
                        f.default(this.fakeElem);
                    this.copyText()
                }, a.prototype.removeFake = function () {
                    this.fakeHandler && (document.body.removeEventListener("click"), this.fakeHandler = null);
                    this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                }, a.prototype.selectTarget = function () {
                    this.selectedText = f.default(this.target);
                    this.copyText()
                }, a.prototype.copyText = function () {
                    var a = void 0;
                    try {
                        a = document.execCommand(this.action)
                    } catch (k) {
                        a = !1
                    }
                    this.handleResult(a)
                }, a.prototype.handleResult = function (a) {
                    a ? this.emitter.emit("success",
                        {
                            action: this.action,
                            text: this.selectedText,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this)
                        }) : this.emitter.emit("error", {
                        action: this.action,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this)
                    })
                }, a.prototype.clearSelection = function () {
                    this.target && this.target.blur();
                    window.getSelection().removeAllRanges()
                }, a.prototype.destroy = function () {
                    this.removeFake()
                }, b(a, [{
                    key: "action", set: function () {
                        if (this._action = 0 >= arguments.length || void 0 === arguments[0] ? "copy" : arguments[0],
                            "copy" !== this._action && "cut" !== this._action) throw Error('Invalid "action" value, use either "copy" or "cut"');
                    }, get: function () {
                        return this._action
                    }
                }, {
                    key: "target", set: function (a) {
                        if (void 0 !== a) {
                            if (!a || "object" != typeof a || 1 !== a.nodeType) throw Error('Invalid "target" value, use a valid Element');
                            this._target = a
                        }
                    }, get: function () {
                        return this._target
                    }
                }]), a
            }();
            a.default = e;
            c.exports = a.default
        }, {select: 6}], 9: [function (e, c, a) {
            function b(a) {
                return a && a.__esModule ? a : {"default": a}
            }

            function f(a, b) {
                if ("function" !=
                    typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                });
                b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }

            function h(a, b) {
                a = "data-clipboard-" + a;
                if (b.hasAttribute(a)) return b.getAttribute(a)
            }

            a.__esModule = !0;
            var g = e("./clipboard-action"), k = b(g), g = e("tiny-emitter"), g = b(g);
            e = e("good-listener");
            var m = b(e);
            e = function (a) {
                function b(c,
                           e) {
                    if (!(this instanceof b)) throw new TypeError("Cannot call a class as a function");
                    a.call(this);
                    this.resolveOptions(e);
                    this.listenClick(c)
                }

                return f(b, a), b.prototype.resolveOptions = function () {
                    var a = 0 >= arguments.length || void 0 === arguments[0] ? {} : arguments[0];
                    this.action = "function" == typeof a.action ? a.action : this.defaultAction;
                    this.target = "function" == typeof a.target ? a.target : this.defaultTarget;
                    this.text = "function" == typeof a.text ? a.text : this.defaultText
                }, b.prototype.listenClick = function (a) {
                    var b = this;
                    this.listener = m.default(a, "click", function (a) {
                        return b.onClick(a)
                    })
                }, b.prototype.onClick = function (a) {
                    a = a.delegateTarget || a.currentTarget;
                    this.clipboardAction && (this.clipboardAction = null);
                    this.clipboardAction = new k.default({
                        action: this.action(a),
                        target: this.target(a),
                        text: this.text(a),
                        trigger: a,
                        emitter: this
                    })
                }, b.prototype.defaultAction = function (a) {
                    return h("action", a)
                }, b.prototype.defaultTarget = function (a) {
                    return (a = h("target", a)) ? document.querySelector(a) : void 0
                }, b.prototype.defaultText = function (a) {
                    return h("text",
                        a)
                }, b.prototype.destroy = function () {
                    this.listener.destroy();
                    this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                }, b
            }(g.default);
            a.default = e;
            c.exports = a.default
        }, {"./clipboard-action": 8, "good-listener": 5, "tiny-emitter": 7}]
    }, {}, [9])(9)
});
(function (d) {
    function e(a) {
        a.stopPropagation();
        a.preventDefault()
    }

    function c(a) {
        d.isFunction(a) && (a = {onFileRead: a});
        a = d.extend({}, d.fn.fileDrop.defaults, a);
        a.decodeBase64 && (a.removeDataUriScheme = !0);
        a.addClassTo = d(a.addClassTo);
        if (!d.isFunction(a.onFileRead)) throw'The option "onFileRead" is not set to a function!';
        return a
    }

    function a(a, c) {
        a.addEventListener("dragenter", function (a) {
            d(c.addClassTo).addClass(c.overClass);
            e(a)
        }, !1);
        a.addEventListener("dragover", function (a) {
            clearTimeout(f);
            f = setTimeout(function () {
                    d(c.addClassTo).removeClass(c.overClass)
                },
                100);
            e(a)
        }, !1);
        a.addEventListener("drop", function (a) {
            d(c.addClassTo).removeClass(c.overClass);
            e(a);
            a = a.dataTransfer.files;
            for (var f = [], g = 0; g <= a.length - 1; g++) {
                var h = new FileReader, k = b(a[g], f, a.length, c);
                h.addEventListener ? h.addEventListener("loadend", k, !1) : h.onloadend = k;
                h.readAsDataURL(a[g])
            }
        }, !1)
    }

    function b(a, b, c, e) {
        return function (f) {
            var g = f.target.result;
            e.removeDataUriScheme && (g = d.removeUriScheme(g));
            if (e.decodeBase64) {
                g = window.atob(g);
                try {
                    decodeURIComponent(window.escape(g))
                } catch (n) {
                }
            }
            b.push({
                name: a.name,
                size: a.size, type: a.type, lastModified: a.lastModifiedDate, data: f.target.result
            });
            if (b.length === c && d.isFunction(e.onFileRead)) e.onFileRead(b, e)
        }
    }

    var f = null;
    d.removeUriScheme = function (a) {
        return a.replace(/^data:.*;base64,/, "")
    };
    d.support.fileDrop = !!window.FileList;
    d.fn.fileDrop = function (b) {
        var e = c(b);
        return this.each(function () {
            0 === e.addClassTo.length && (e.addClassTo = d(this));
            a(this, e)
        })
    };
    d.fn.fileDrop.defaults = {
        overClass: "state-over",
        addClassTo: null,
        onFileRead: null,
        removeDataUriScheme: !0,
        decodeBase64: !1
    }
})(jQuery);
(function (d) {
    function e(c) {
        var a = 0, b = 0, d = [];
        if (!c) return c;
        c += "";
        do {
            var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(c.charAt(a++));
            var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(c.charAt(a++));
            var k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(c.charAt(a++));
            var m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(c.charAt(a++));
            var l = e << 18 | g << 12 | k << 6 | m;
            e = l >> 16 & 255;
            g = l >> 8 & 255;
            l &= 255;
            64 == k ? d[b++] = String.fromCharCode(e) : 64 == m ? d[b++] = String.fromCharCode(e, g) : d[b++] = String.fromCharCode(e, g, l)
        } while (a < c.length);
        return d.join("")
    }

    d.atob || (d.atob = e)
})(window);
var $\u039e\u039emarkdown\u0394html\u039e\u039e$_app = function (d) {
    var e = {
        pt: d("#plain_text"),
        ph: d("#plain_html"),
        btnConvert: d("#btn_convert"),
        btnClear: d("#btn_clear"),
        btnCopyToClipboard: d("#btn_copy_to_clipboard"),
        renderedContent: d("#rendered_content"),
        btnHeadings: d("#btn_headings"),
        btnList: d("#btn_ul"),
        btnCode: d("#btn_code"),
        btnReadme: d("#btn_readme"),
        btnFileTree: d("#btn_filetree"),
        btnCheatsheet: d("#btn_cheatsheet"),
        btnAll: d("#btn_md_all"),
        copyStatus: d(".copy-status"),
        clipboard: d(".clip-btn"),
        header: d(".header"),
        downArrow: d(".down-arrow"),
        plainText: d("#plain_text"),
        fontSelector: d("#font_selector"),
        expandContractArrow: d("#expand-contract_arrow")
    }, c = {$jqo: null, fn: null};
    c.$jqo = e;
    c.fn = {init: null, clean: null};
    var a = function () {
        e.copyStatus.css({display: "none", "font-weight": "bold"});
        new Clipboard(e.clipboard.selector);
        d.support.fileDrop ? b() : alert("Your browser does not support file drag-n-drop :(");
        e.plainText.focus()
    };
    var b = function () {
        var a = d("#FILE_COUNT");
        d("html").fileDrop({
            decodeBase64: !1, removeDataUriScheme: !1,
            onFileRead: function (b) {
                var c = "";
                d.each(b, function (a) {
                    0 <= this.type.indexOf("image") || (a = d.removeUriScheme(this.data), c = window.atob(a))
                });
                a.text(b.length + " file" + (1 === b.length ? "" : "s") + " dropped!");
                e.pt.html(c);
                e.btnConvert.trigger("click")
            }
        })
    };
    var f = function () {
        d("div.toolbar").css("display", "none");
        d(".page-container").css("visibility", "visible")
    };
    var h = function () {
        e.downArrow.click(function () {
            e.header.slideToggle();
            e.expandContractArrow.hasClass("down-arrow") ? (e.expandContractArrow.removeClass("down-arrow"),
                e.expandContractArrow.addClass("up-arrow")) : (e.expandContractArrow.removeClass("up-arrow"), e.expandContractArrow.addClass("down-arrow"))
        });
        e.btnConvert.click(function () {
            var a = marked(e.pt.val());
            e.ph.val(a);
            e.renderedContent.html(a);
            SyntaxHighlighter.highlight(e.renderedContent);
            setTimeout(f, 200)
        });
        e.btnClear.click(function () {
            e.pt.val("");
            e.plainText.focus()
        });
        e.btnCheatsheet.click(function () {
            window.open("http://codebehold.com/code/info/quickref/markdown/markdown-cheatsheet.html")
        });
        e.btnHeadings.click(function () {
            e.pt.val("# h1 Heading\n\n## h2 Heading\n\n### h3 Heading\n\n#### h4 Heading\n\n##### h5 Heading\n\n###### h6 Heading\n\n")
        });
        e.btnList.click(function () {
            e.pt.val("# List\n\n- Item 1\n- Item 2\n  - Item 2a\n  - Item 2b\n- Item 3\n")
        });
        e.btnFileTree.click(function () {
            e.pt.val('<div class="tree">\n<div class="node">ROOT</div>\n<div class="children">\n<div class="node"><i class="fa fa-folder-open i-gold"></i>Folder</div>\n<div class="children">\n<div class="node">\nfile 1\n<span class="sm-txt">\n<i class="fa fa-info-circle"></i>\nINLINE COMMENT\n</span>\n</div>\n<div class="node">file 2</div>\n<div class="node">file 3</div>\n<span class="under-node-comment">\n<i class="fa fa-arrow-circle-up"></i> \nUNDER NODE COMMENT\n</span>\n<div class="node">file 4</div>\n</div>\n<div class="node">app.component.ts</div>\n<div class="node">app.module.ts</div>\n<div class="node"><i class="fa fa-file-text i-lightcoral">\n</i>README.md</div>\n<div class="node"><i class="fa fa-cog i-mediumseagreen"></i>app.config</div>\n<div class="node"><i class="fa fa-eye"></i><a href="http://codebehold.com/code/example/css-filetree/">demo</a></div>\n</div>\n</div>\n')
        });
        e.btnCode.click(function () {
            e.pt.val('## Some Code\n\n> box your code with three grave symbols \u2014 <kbd>\\`</kbd> <kbd>\\`</kbd> <kbd>\\`</kbd>\n\n### HTML\n\n```html\n<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<title>Document</title>\n</head>\n<body>\n</body>\n</html>\n```\n\n### CSS\n\n```css\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp{\n  font-family: monospace;\n  font-size: 1em;\n}\n```\n\n### JavaScript\n\n```js\n//Loop through each file that was dropped\n$.each(fileCollection, function(i){\n\tif(this.type.indexOf(\'image\')>=0){\n\t\tnewHtml += \'<img src="\' + this.data + \'"/>\';\n\t\tif(i !== fileCollection.length-1){\n\t\t\tnewHtml += "<hr />";\n\t\t}\n\t}else{\n\t\tvar noScheme = $.removeUriScheme(this.data);\n\t\tvar base64Decoded = window.atob(noScheme);\n\t\tnewText = base64Decoded;\n\t}\n});\n```\n\n[Syntax highlighter credit and thanks to Alex Gorbatchev](http://alexgorbatchev.com/SyntaxHighlighter/)\n\n')
        });
        e.btnAll.click(function () {
            e.pt.val('# Heading 1\n\nParagraph text.\n\n## Heading 2\n\nhttps://safeweb.norton.com/safety\n\n## Heading 3\n\n> **Comment Box**\n> \n> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet recusandae repellendus, illo explicabo, saepe necessitatibus. Maiores dolore, officia necessitatibus placeat excepturi aliquid sit soluta modi itaque asperiores! Itaque, ex, deserunt\n\n- bullet 1\n- bullet 2\n  - bullet 2a\n  - bullet 2b\n- bullet 3\n\n\n| Year | Temperature (low) | Temperature (high) |  \n| ---- | ----------------- | -------------------|  \n| 1900 |               -10 |                 25 |  \n| 1910 |               -15 |                 30 |  \n| 1920 | &nbsp; | &nbsp; |\n\n---\n\n## Some Code\n\n> box your code with three grave symbols \u2014 <kbd>\\`</kbd> <kbd>\\`</kbd> <kbd>\\`</kbd>\n\n```html\n<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<title>Document</title>\n</head>\n<body>\n</body>\n</html>\n```\n\n')
        });
        e.btnReadme.click(function () {
            e.pt.val("README.md # YAM2H\n\n### Yet Another Markdown To HTML Converter\n\n08 December 2015 (Tuesday)\n\nYAM2H demonstrates the conversion of markdown to HTML via JavaScript in a web browser.\n\n![](img/app.jpg)\n\n### Markdown, HTML &amp; Results Displayed\n\n- Write markdown in your browser &mdash; or click buttons to generate example markdown for you\n- Click the `Convert` button\n- Another text box displays the generated HTML code\n- The browser then renders the HTML code, displaying the final result\n\n### Dependencies\n\n- [jQuery](http://jquery.com/download/)\n- [Foundation](http://foundation.zurb.com/sites/getting-started.html)\n- [marked-js](https://github.com/chjj/marked)\n- [clipboard.js](https://zenorocha.github.io/clipboard.js)\n\n");
            e.btnConvert.trigger("click")
        });
        e.clipboard.on("success", function (a) {
            e.copyStatus.css("color", "#00880E");
            e.copyStatus.html("Copied!");
            e.copyStatus.fadeIn(400).delay(200).fadeOut(600)
        });
        e.clipboard.on("error", function (a) {
            e.copyStatus.css("color", "#BE1705");
            e.copyStatus.text("Error: Use Ctrl+C");
            e.copyStatus.fadeIn("slow");
            e.copyStatus.fadeOut("slow")
        });
        e.fontSelector.change(function () {
            var a = "";
            d("select option:selected").each(function () {
                a += d(this).text()
            });
            "Arial" === a && d("#rendered_content *").css("font-family",
                'Arial,"Helvetica Neue",Helvetica,sans-serif;');
            "Arial Narrow" === a && d("#rendered_content *").css("font-family", '"Arial Narrow",Arial,sans-serif');
            "Verdana" === a && d("#rendered_content *").css("font-family", "Verdana,Geneva,sans-serif");
            "Trebuchet" === a && d("#rendered_content *").css("font-family", '"Trebuchet MS","Lucida Grande","Lucida Sans Unicode","Lucida Sans",Tahoma,sans-serif');
            "Tahoma" === a && d("#rendered_content *").css("font-family", "Tahoma,Verdana,Segoe,sans-serif");
            "Times New Roman" === a && d("#rendered_content *").css("font-family",
                'TimesNewRoman,"Times New Roman",Times,Baskerville,Georgia,serif');
            "Palatino" === a && d("#rendered_content *").css("font-family", 'Palatino,"Palatino Linotype","Palatino LT STD","Book Antiqua",Georgia,serif');
            "Georgia" === a && d("#rendered_content *").css("font-family", 'Georgia,Times,"Times New Roman",serif');
            "Courier New" === a && d("#rendered_content *").css("font-family", '"Courier New",Courier,"Lucida Sans Typewriter","Lucida Typewriter",monospace');
            "Lucida Sans" === a && d("#rendered_content *").css("font-family",
                '"Lucida Sans","Lucida Sans Typewriter","Lucida Console",monaco,"Bitstream Vera Sans Mono",monospace')
        })
    };
    c.init = function () {
        h();
        a()
    };
    return {APP: c}
}(jQuery);
$(document).ready(function () {
    $\u039e\u039emarkdown\u0394html\u039e\u039e$_app.APP.init()
});
