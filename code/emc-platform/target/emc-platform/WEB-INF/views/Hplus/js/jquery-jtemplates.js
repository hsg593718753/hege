/* jTemplates 0.8.4 (http://jtemplates.tpython.com) Copyright (c) 2007-2013 Tomasz Gloc */
//eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6(3w.b&&!3w.b.3x){(7(b){9 j=7(s,H,m){5.1g=[];5.1D={};5.2M=u;5.1W={};5.1h={};5.m=b.1i({1X:1c,3y:1x,2N:1c,2O:1c,3z:1x,3A:1x},m);5.1E=(5.m.1E!==D)?(5.m.1E):(R.2g);5.13=(5.m.13!==D)?(5.m.13):(R.3B);5.2h=(5.m.2h!==D)?(5.m.2h):((5.m.1X)?(b.2P):(R.2P));6(s==u){c}5.3C(s,H);6(s){5.1F(5.1h[\'2i\'],H,5.m)}5.1h=u};j.4k=\'0.8.4\';j.J=1c;j.3D=4l;j.1y=0;j.z.3C=7(s,H){9 2Q=/\\{#1d *(\\w+) *(.*?) *\\}/g,2j,1G,U,1H=u,2R=[],i;2k((2j=2Q.4m(s))!==u){1H=2Q.1H;1G=2j[1];U=s.1Y(\'{#/1d \'+1G+\'}\',1H);6(U===-1){E p V(\'14: j "\'+1G+\'" 2S 2l 4n.\');}5.1h[1G]=s.1Z(1H,U);2R[1G]=R.2T(2j[2])}6(1H===u){5.1h[\'2i\']=s;c}K(i 2m 5.1h){6(i!==\'2i\'){5.1W[i]=p j()}}K(i 2m 5.1h){6(i!==\'2i\'){5.1W[i].1F(5.1h[i],b.1i({},H||{},5.1W||{}),b.1i({},5.m,2R[i]));5.1h[i]=u}}};j.z.1F=7(s,H,m){6(s==D){5.1g.x(p 1p(\'\',1,5));c}s=s.15(/[\\n\\r]/g,\'\');s=s.15(/\\{\\*.*?\\*\\}/g,\'\');5.2M=b.1i({},5.1W||{},H||{});5.m=p 2n(m);9 A=5.1g,20=s.1j(/\\{#.*?\\}/g),16=0,U=0,e,1q=0,i,l;K(i=0,l=(20)?(20.X):(0);i<l;++i){9 10=20[i];6(1q){U=s.1Y(\'{#/1I}\',16);6(U===-1){E p V("14: 4o 21 3E 1I.");}6(U>16){A.x(p 1p(s.1Z(16,U),1,5))}16=U+11;1q=0;2k(i<l&&20[i]!==\'{#/1I}\'){i++}22}U=s.1Y(10,16);6(U>16){A.x(p 1p(s.1Z(16,U),1q,5))}10.1j(/\\{#([\\w\\/]+).*?\\}/);9 2o=L.$1;2U(2o){B\'4p\':A.2V(10);F;B\'6\':e=p 1z(A,5);e.2V(10);A.x(e);A=e;F;B\'W\':A.2W();F;B\'/6\':B\'/K\':B\'/2X\':A=A.2Y();F;B\'2X\':e=p 1A(10,A,5);A.x(e);A=e;F;B\'K\':e=3F(10,A,5);A.x(e);A=e;F;B\'22\':B\'F\':A.x(p 17(2o));F;B\'2Z\':A.x(p 30(10,5.2M,5));F;B\'h\':A.x(p 31(10,5));F;B\'9\':A.x(p 32(10,5));F;B\'33\':A.x(p 34(10));F;B\'4q\':A.x(p 1p(\'{\',1,5));F;B\'4r\':A.x(p 1p(\'}\',1,5));F;B\'1I\':1q=1;F;B\'/1I\':6(j.J){E p V("14: 4s 35 3E 1I.");}F;3G:6(j.J){E p V(\'14: 4t 4u: \'+2o+\'.\');}}16=U+10.X}6(s.X>16){A.x(p 1p(s.3H(16),1q,5))}};j.z.M=7(d,h,q,I){++I;6(I==1&&q!=D){b.36(q,"2p")}9 $T=d,$P,18=\'\';6(5.m.3z){$T=5.1E(d,{2q:(5.m.3y&&I==1),23:5.m.1X},5.13)}6(!5.m.3A){$P=b.1i({},5.1D,h)}W{$P=b.1i({},5.1E(5.1D,{2q:(5.m.2N),23:1c},5.13),5.1E(h,{2q:(5.m.2N&&I==1),23:1c},5.13))}K(9 i=0,l=5.1g.X;i<l;++i){18+=5.1g[i].M($T,$P,q,I)}5.2r=u;--I;c 18};j.z.12=7(){6(5.2r==u){5.2r=p 2s(5)}c 5.2r};j.z.37=7(24,1B){5.1D[24]=1B};R=7(){};R.3B=7(3I){c 3I.15(/&/g,\'&4v;\').15(/>/g,\'&3J;\').15(/</g,\'&3K;\').15(/"/g,\'&4w;\').15(/\'/g,\'&#39;\')};R.2g=7(d,1J,13){6(d==u){c d}2U(d.38){B 2n:9 o={};K(9 i 2m d){o[i]=R.2g(d[i],1J,13)}6(!1J.23){6(d.4x("3a")){o.3a=d.3a}}c o;B 4y:9 a=[];K(9 i=0,l=d.X;i<l;++i){a[i]=R.2g(d[i],1J,13)}c a;B 3b:c(1J.2q)?(13(d)):(d);B 3L:6(1J.23){6(j.J){E p V("14: 4z 4A 2l 4B.");}W{c D}}}c d};R.2T=7(2t){6(2t===u||2t===D){c{}}9 o=2t.4C(/[= ]/);6(o[0]===\'\'){o.4D()}9 25={};K(9 i=0,l=o.X;i<l;i+=2){25[o[i]]=o[i+1]}c 25};R.2P=7(G){6(1K G!=="4E"||!G){c u}1k{c(p 3L("c "+b.3M(G)))()}1l(e){6(j.J){E p V("14: 4F 4G");}c{}}};R.3N=7(26,1y,3c){2k(26!=u){9 d=b.G(26,\'2p\');6(d!=D&&d.1y==1y&&d.d[3c]!=D){c d.d[3c]}26=26.4H}c u};9 1p=7(3d,1q,1d){5.27=3d;5.3O=1q;5.O=1d};1p.z.M=7(d,h,q,I){6(5.3O){c 5.27}9 s=5.27;9 19="";9 i=-1;9 28=0;9 29=-1;9 1L=0;2k(1x){9 1M=s.1Y("{",i+1);9 1N=s.1Y("}",i+1);6(1M<0&&1N<0){F}6((1M!=-1&&1M<1N)||(1N==-1)){i=1M;6(++28==1){29=1M;19+=s.1Z(1L,i);1L=-1}}W{i=1N;6(--28===0){6(29>=0){19+=5.O.12().3P(d,h,q,s.1Z(29,1N+1));29=-1;1L=i+1}}W 6(28<0){28=0}}}6(1L>-1){19+=s.3H(1L)}c 19};2s=7(t){5.3e=t};2s.z.3P=7($T,$P,$Q,2u){1k{9 19=3f(2u);6(b.4I(19)){6(5.3e.m.1X||!5.3e.m.2O){c\'\'}19=19($T,$P,$Q)}c(19===D)?(""):(3b(19))}1l(e){6(j.J){6(e 1C 17){e.1m="4J"}E e;}c""}};2s.z.1a=7($T,$P,$Q,2u){c 3f(2u)};9 1z=7(1O,1r){5.2v=1O;5.1P=1r;5.2a=[];5.1g=[];5.1Q=u};1z.z.x=7(e){5.1Q.x(e)};1z.z.2Y=7(){c 5.2v};1z.z.2V=7(N){N.1j(/\\{#(?:W)*6 (.*?)\\}/);5.2a.x(L.$1);5.1Q=[];5.1g.x(5.1Q)};1z.z.2W=7(){5.2a.x(1x);5.1Q=[];5.1g.x(5.1Q)};1z.z.M=7(d,h,q,I){9 18=\'\';1k{K(9 2b=0,3Q=5.2a.X;2b<3Q;++2b){6(5.1P.12().1a(d,h,q,5.2a[2b])){9 t=5.1g[2b];K(9 i=0,l=t.X;i<l;++i){18+=t[i].M(d,h,q,I)}c 18}}}1l(e){6(j.J||(e 1C 17)){E e;}}c 18};3F=7(N,1O,1d){6(N.1j(/\\{#K (\\w+?) *= *(\\S+?) +4K +(\\S+?) *(?:1b=(\\S+?))*\\}/)){9 f=p 1A(u,1O,1d);f.C=L.$1;f.Y={\'35\':(L.$2||0),\'21\':(L.$3||-1),\'1b\':(L.$4||1),\'y\':\'$T\'};f.3g=(7(i){c i});c f}W{E p V(\'14: 4L 4M "3R": \'+N);}};9 1A=7(N,1O,1d){5.2v=1O;5.O=1d;6(N!=u){N.1j(/\\{#2X +(.+?) +3S +(\\w+?)( .+)*\\}/);5.3T=L.$1;5.C=L.$2;5.Y=L.$3||u;5.Y=R.2T(5.Y)}5.2w=[];5.2x=[];5.3h=5.2w};1A.z.x=7(e){5.3h.x(e)};1A.z.2Y=7(){c 5.2v};1A.z.2W=7(){5.3h=5.2x};1A.z.M=7(d,h,q,I){1k{9 1s=(5.3g===D)?(5.O.12().1a(d,h,q,5.3T)):(5.3g);6(1s===$){E p V("2c: 4N \'$\' 4O 4P 4Q 3S 3U-7");}9 2d=[];9 1R=1K 1s;6(1R==\'3V\'){9 3i=[];b.1t(1s,7(k,v){2d.x(k);3i.x(v)});1s=3i}9 y=(5.Y.y!==D)?(5.O.12().1a(d,h,q,5.Y.y)):((d!=u)?(d):({}));6(y==u){y={}}9 s=2e(5.O.12().1a(d,h,q,5.Y.35)||0),e;9 1b=2e(5.O.12().1a(d,h,q,5.Y.1b)||1);6(1R!=\'7\'){e=1s.X}W{6(5.Y.21===D||5.Y.21===u){e=2e.4R}W{e=2e(5.O.12().1a(d,h,q,5.Y.21))+((1b>0)?(1):(-1))}}9 18=\'\';9 i,l;6(5.Y.2f){9 3j=s+2e(5.O.12().1a(d,h,q,5.Y.2f));e=(3j>e)?(e):(3j)}6((e>s&&1b>0)||(e<s&&1b<0)){9 1S=0;9 3W=(1R!=\'7\')?(4S.4T((e-s)/1b)):D;9 1u,1n;9 3k=0;K(;((1b>0)?(s<e):(s>e));s+=1b,++1S,++3k){6(j.J&&3k>j.3D){E p V("2c: 4U 3U 4V 4W 4X");}1u=2d[s];6(1R!=\'7\'){1n=1s[s]}W{1n=1s(s);6(1n===D||1n===u){F}}6((1K 1n==\'7\')&&(5.O.m.1X||!5.O.m.2O)){22}6((1R==\'3V\')&&(1u 2m 2n)&&(1n===2n[1u])){22}9 3X=y[5.C];y[5.C]=1n;y[5.C+\'$3Y\']=s;y[5.C+\'$1S\']=1S;y[5.C+\'$3Z\']=(1S===0);y[5.C+\'$40\']=(s+1b>=e);y[5.C+\'$41\']=3W;y[5.C+\'$2d\']=(1u!==D&&1u.38==3b)?(5.O.13(1u)):(1u);y[5.C+\'$1K\']=1K 1n;K(i=0,l=5.2w.X;i<l;++i){1k{18+=5.2w[i].M(y,h,q,I)}1l(1T){6(1T 1C 17){2U(1T.1m){B\'22\':i=l;F;B\'F\':i=l;s=e;F;3G:E 1T;}}W{E 1T;}}}1v y[5.C+\'$3Y\'];1v y[5.C+\'$1S\'];1v y[5.C+\'$3Z\'];1v y[5.C+\'$40\'];1v y[5.C+\'$41\'];1v y[5.C+\'$2d\'];1v y[5.C+\'$1K\'];1v y[5.C];y[5.C]=3X}}W{K(i=0,l=5.2x.X;i<l;++i){18+=5.2x[i].M(d,h,q,I)}}c 18}1l(e){6(j.J||(e 1C 17)){E e;}c""}};9 17=7(1m){5.1m=1m};17.z=V;17.z.M=7(d){E 5;};9 30=7(N,H,1r){N.1j(/\\{#2Z (.*?)(?: 4Y=(.*?))?\\}/);5.O=H[L.$1];6(5.O==D){6(j.J){E p V(\'14: 4Z 3R 2Z: \'+L.$1);}}5.42=L.$2;5.43=1r};30.z.M=7(d,h,q,I){1k{c 5.O.M(5.43.12().1a(d,h,q,5.42),h,q,I)}1l(e){6(j.J||(e 1C 17)){E e;}}c\'\'};9 31=7(N,1r){N.1j(/\\{#h 24=(\\w*?) 1B=(.*?)\\}/);5.C=L.$1;5.27=L.$2;5.1P=1r};31.z.M=7(d,h,q,I){1k{h[5.C]=5.1P.12().1a(d,h,q,5.27)}1l(e){6(j.J||(e 1C 17)){E e;}h[5.C]=D}c\'\'};9 32=7(N,1r){N.1j(/\\{#9 (.*?)\\}/);5.44=L.$1;5.1P=1r};32.z.M=7(d,h,q,I){1k{6(q==D){c""}9 25=5.1P.12().1a(d,h,q,5.44);9 1U=b.G(q,"2p");6(1U==D){1U={1y:(++j.1y),d:[]}}9 i=1U.d.x(25);b.G(q,"2p",1U);c"(R.3N(5,"+1U.1y+","+(i-1)+"))"}1l(e){6(j.J||(e 1C 17)){E e;}c\'\'}};9 34=7(N){N.1j(/\\{#33 50=(.*?)\\}/);5.3l=3f(L.$1);5.3m=5.3l.X;6(5.3m<=0){E p V(\'14: 51 52 K 33\');}5.3n=0;5.3o=-1};34.z.M=7(d,h,q,I){9 3p=b.G(q,\'2y\');6(3p!=5.3o){5.3o=3p;5.3n=0}9 i=5.3n++%5.3m;c 5.3l[i]};b.1e.1F=7(s,H,m){c b(5).1t(7(){9 t=(s&&s.38==j)?s:p j(s,H,m);b.G(5,\'2c\',t);b.G(5,\'2y\',0)})};b.1e.53=7(1V,H,m){9 s=b.2z({1w:1V,2A:\'2B\',2C:1c,1m:\'45\'}).46;c b(5).1F(s,H,m)};b.1e.54=7(3q,H,m){9 s=b(\'#\'+3q).3d();6(s==u){s=b(\'#\'+3q).47();s=s.15(/&3K;/g,"<").15(/&3J;/g,">")}s=b.3M(s);s=s.15(/^<\\!\\[55\\[([\\s\\S]*)\\]\\]>$/48,\'$1\');s=s.15(/^<\\!--([\\s\\S]*)-->$/48,\'$1\');c b(5).1F(s,H,m)};b.1e.56=7(){9 2f=0;b(5).1t(7(){6(b.2D(5)){++2f}});c 2f};b.1e.57=7(){b(5).49();c b(5).1t(7(){b.36(5,\'2c\')})};b.1e.37=7(24,1B){c b(5).1t(7(){9 t=b.2D(5);6(t!=u){t.37(24,1B)}W 6(j.J){E p V(\'14: j 2S 2l 4a.\');}})};b.1e.3r=7(d,h,1o){c b(5).1t(7(){9 t=b.2D(5);6(t!=u){6(1o!=D&&1o.3s){d=t.2h(d)}b.G(5,\'2y\',b.G(5,\'2y\')+1);b(5).47(t.M(d,h,5,0))}W 6(j.J){E p V(\'14: j 2S 2l 4a.\');}})};b.1e.58=7(1V,h,1o){9 Z=5;9 o=b.1i({2E:1c},b.59);o=b.1i(o,1o);b.2z({1w:1V,1m:o.1m,G:o.G,4b:o.4b,2C:o.2C,2F:o.2F,2E:o.2E,4c:o.4c,2A:\'2B\',4d:7(d){9 r=b(Z).3r(d,h,{3s:1x});6(o.2G){o.2G(r)}},5a:o.5b,5c:o.5d});c 5};9 3t=7(1w,h,2H,2I,1f,1o){5.4e=1w;5.1D=h;5.4f=2H;5.4g=2I;5.1f=1f;5.4h=u;5.2J=1o||{};9 Z=5;b(1f).1t(7(){b.G(5,\'3u\',Z)});5.3v()};3t.z.3v=7(){5.1f=b.4i(5.1f,7(2K){c(b.5e(5f.5g,2K.5h?2K[0]:2K))});6(5.1f.X===0){c}9 Z=5;b.2z({1w:5.4e,2A:\'2B\',G:5.4g,2E:1c,2F:Z.2J.2F,4d:7(d){1k{9 r=b(Z.1f).3r(d,Z.1D,{3s:1x});6(Z.2J.2G){Z.2J.2G(r)}}1l(1T){}}});5.4h=5i(7(){Z.3v()},5.4f)};b.1e.5j=7(1w,h,2H,2I,1o){c p 3t(1w,h,2H,2I,5,1o)};b.1e.49=7(){c b(5).1t(7(){9 2L=b.G(5,\'3u\');6(2L==u){c}9 Z=5;2L.1f=b.4i(2L.1f,7(o){c o!=Z});b.36(5,\'3u\')})};b.1i({3x:7(s,H,m){c p j(s,H,m)},5k:7(1V,H,m){9 s=b.2z({1w:1V,2A:\'2B\',2C:1c,1m:\'45\'}).46;c p j(s,H,m)},2D:7(q){c b.G(q,\'2c\')},5l:7(1d,G,4j){c 1d.M(G,4j,D,0)},5m:7(1B){j.J=1B}})})(b)};',62,333,'|||||this|if|function||var||jQuery|return|||||param||Template|||settings|||new|element||||null|||push|extData|prototype|node|case|_name|undefined|throw|break|data|includes|deep|DEBUG_MODE|for|RegExp|get|oper|_template|||TemplateUtils|||se|Error|else|length|_option|that|this_op||getBin|f_escapeString|jTemplates|replace|ss|JTException|ret|result|evaluate|step|false|template|fn|objs|_tree|_templates_code|extend|match|try|catch|type|cval|options|TextNode|literalMode|templ|fcount|each|ckey|delete|url|true|guid|opIF|opFOREACH|value|instanceof|_param|f_cloneData|setTemplate|tname|lastIndex|literal|filter|typeof|sExpr|lm|rm|par|_templ|_curr|mode|iteration|ex|refobj|url_|_templates|disallow_functions|indexOf|substring|op|end|continue|noFunc|name|obj|el|_value|nested|sText|_cond|ci|jTemplate|key|Number|count|cloneData|f_parseJSON|MAIN|iter|while|not|in|Object|op_|jTemplatesRef|escapeData|EvalObj|EvalClass|optionText|__value|_parent|_onTrue|_onFalse|jTemplateSID|ajax|dataType|text|async|getTemplate|cache|headers|on_success|interval|args|_options|elem|updater|_includes|filter_params|runnable_functions|parseJSON|reg|_template_settings|is|optionToObject|switch|addCond|switchToElse|foreach|getParent|include|Include|UserParam|UserVariable|cycle|Cycle|begin|removeData|setParam|constructor||toString|String|id|val|__templ|eval|_runFunc|_currentState|arr|tmp|loopCounter|_values|_length|_index|_lastSessionID|sid|elementName|processTemplate|StrToJSON|Updater|jTemplateUpdater|run|window|createTemplate|filter_data|clone_data|clone_params|escapeHTML|splitTemplates|FOREACH_LOOP_LIMIT|of|opFORFactory|default|substr|txt|gt|lt|Function|trim|ReturnRefValue|_literalMode|evaluateContent|cl|find|as|_arg|loop|object|_total|prevValue|index|first|last|total|_root|_mainTempl|_id|GET|responseText|html|im|processTemplateStop|defined|dataFilter|timeout|success|_url|_interval|_args|timer|grep|parameter|version|10000|exec|closed|No|elseif|ldelim|rdelim|Missing|unknown|tag|amp|quot|hasOwnProperty|Array|Functions|are|allowed|split|shift|string|Invalid|JSON|parentNode|isFunction|subtemplate|to|Operator|failed|Variable|cannot|be|used|MAX_VALUE|Math|ceil|Foreach|limit|was|exceed|root|Cannot|values|no|elements|setTemplateURL|setTemplateElement|CDATA|hasTemplate|removeTemplate|processTemplateURL|ajaxSettings|error|on_error|complete|on_complete|contains|document|body|jquery|setTimeout|processTemplateStart|createTemplateURL|processTemplateToText|jTemplatesDebugMode'.split('|'),0,{}));
if (window.jQuery && !window.jQuery.createTemplate) {
	(function(jQuery) {
		var Template = function(s, includes, settings) {
				this._tree = [];
				this._param = {};
				this._includes = null;
				this._templates = {};
				this._templates_code = {};
				this.settings = jQuery.extend({
					disallow_functions: false,
					filter_data: true,
					filter_params: false,
					runnable_functions: false,
					clone_data: true,
					clone_params: true
				}, settings);
				this.f_cloneData = (this.settings.f_cloneData !== undefined) ? (this.settings.f_cloneData) : (TemplateUtils.cloneData);
				this.f_escapeString = (this.settings.f_escapeString !== undefined) ? (this.settings.f_escapeString) : (TemplateUtils.escapeHTML);
				this.f_parseJSON = (this.settings.f_parseJSON !== undefined) ? (this.settings.f_parseJSON) : ((this.settings.disallow_functions) ? (jQuery.parseJSON) : (TemplateUtils.parseJSON));
				if (s == null) {
					return
				}
				this.splitTemplates(s, includes);
				if (s) {
					this.setTemplate(this._templates_code['MAIN'], includes, this.settings)
				}
				this._templates_code = null
			};
		Template.version = '0.8.4';
		Template.DEBUG_MODE = false;
		Template.FOREACH_LOOP_LIMIT = 10000;
		Template.guid = 0;
		Template.prototype.splitTemplates = function(s, includes) {
			var reg = /\{#template *(\w+) *(.*?) *\}/g,
				iter, tname, se, lastIndex = null,
				_template_settings = [],
				i;
			while ((iter = reg.exec(s)) !== null) {
				lastIndex = reg.lastIndex;
				tname = iter[1];
				se = s.indexOf('{#/template ' + tname + '}', lastIndex);
				if (se === -1) {
					throw new Error('jTemplates: Template "' + tname + '" is not closed.');
				}
				this._templates_code[tname] = s.substring(lastIndex, se);
				_template_settings[tname] = TemplateUtils.optionToObject(iter[2])
			}
			if (lastIndex === null) {
				this._templates_code['MAIN'] = s;
				return
			}
			for (i in this._templates_code) {
				if (i !== 'MAIN') {
					this._templates[i] = new Template()
				}
			}
			for (i in this._templates_code) {
				if (i !== 'MAIN') {
					this._templates[i].setTemplate(this._templates_code[i], jQuery.extend({}, includes || {}, this._templates || {}), jQuery.extend({}, this.settings, _template_settings[i]));
					this._templates_code[i] = null
				}
			}
		};
		Template.prototype.setTemplate = function(s, includes, settings) {
			if (s == undefined) {
				this._tree.push(new TextNode('', 1, this));
				return
			}
			s = s.replace(/[\n\r]/g, '');
			s = s.replace(/\{\*.*?\*\}/g, '');
			this._includes = jQuery.extend({}, this._templates || {}, includes || {});
			this.settings = new Object(settings);
			var node = this._tree,
				op = s.match(/\{#.*?\}/g),
				ss = 0,
				se = 0,
				e, literalMode = 0,
				i, l;
			for (i = 0, l = (op) ? (op.length) : (0); i < l; ++i) {
				var this_op = op[i];
				if (literalMode) {
					se = s.indexOf('{#/literal}', ss);
					if (se === -1) {
						throw new Error("jTemplates: No end of literal.");
					}
					if (se > ss) {
						node.push(new TextNode(s.substring(ss, se), 1, this))
					}
					ss = se + 11;
					literalMode = 0;
					while (i < l && op[i] !== '{#/literal}') {
						i++
					}
					continue
				}
				se = s.indexOf(this_op, ss);
				if (se > ss) {
					node.push(new TextNode(s.substring(ss, se), literalMode, this))
				}
				this_op.match(/\{#([\w\/]+).*?\}/);
				var op_ = RegExp.$1;
				switch (op_) {
				case 'elseif':
					node.addCond(this_op);
					break;
				case 'if':
					e = new opIF(node, this);
					e.addCond(this_op);
					node.push(e);
					node = e;
					break;
				case 'else':
					node.switchToElse();
					break;
				case '/if':
				case '/for':
				case '/foreach':
					node = node.getParent();
					break;
				case 'foreach':
					e = new opFOREACH(this_op, node, this);
					node.push(e);
					node = e;
					break;
				case 'for':
					e = opFORFactory(this_op, node, this);
					node.push(e);
					node = e;
					break;
				case 'continue':
				case 'break':
					node.push(new JTException(op_));
					break;
				case 'include':
					node.push(new Include(this_op, this._includes, this));
					break;
				case 'param':
					node.push(new UserParam(this_op, this));
					break;
				case 'var':
					node.push(new UserVariable(this_op, this));
					break;
				case 'cycle':
					node.push(new Cycle(this_op));
					break;
				case 'ldelim':
					node.push(new TextNode('{', 1, this));
					break;
				case 'rdelim':
					node.push(new TextNode('}', 1, this));
					break;
				case 'literal':
					literalMode = 1;
					break;
				case '/literal':
					if (Template.DEBUG_MODE) {
						throw new Error("jTemplates: Missing begin of literal.");
					}
					break;
				default:
					if (Template.DEBUG_MODE) {
						throw new Error('jTemplates: unknown tag: ' + op_ + '.');
					}
				}
				ss = se + this_op.length
			}
			if (s.length > ss) {
				node.push(new TextNode(s.substr(ss), literalMode, this))
			}
		};
		Template.prototype.get = function(d, param, element, deep) {
			++deep;
			if (deep == 1 && element != undefined) {
				jQuery.removeData(element, "jTemplatesRef")
			}
			var $T = d,
				$P, ret = '';
			if (this.settings.clone_data) {
				$T = this.f_cloneData(d, {
					escapeData: (this.settings.filter_data && deep == 1),
					noFunc: this.settings.disallow_functions
				}, this.f_escapeString)
			}
			if (!this.settings.clone_params) {
				$P = jQuery.extend({}, this._param, param)
			} else {
				$P = jQuery.extend({}, this.f_cloneData(this._param, {
					escapeData: (this.settings.filter_params),
					noFunc: false
				}, this.f_escapeString), this.f_cloneData(param, {
					escapeData: (this.settings.filter_params && deep == 1),
					noFunc: false
				}, this.f_escapeString))
			}
			for (var i = 0, l = this._tree.length; i < l; ++i) {
				ret += this._tree[i].get($T, $P, element, deep)
			}
			this.EvalObj = null;
			--deep;
			return ret
		};
		Template.prototype.getBin = function() {
			if (this.EvalObj == null) {
				this.EvalObj = new EvalClass(this)
			}
			return this.EvalObj
		};
		Template.prototype.setParam = function(name, value) {
			this._param[name] = value
		};
		TemplateUtils = function() {};
		TemplateUtils.escapeHTML = function(txt) {
			return txt.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
		};
		TemplateUtils.cloneData = function(d, filter, f_escapeString) {
			if (d == null) {
				return d
			}
			switch (d.constructor) {
			case Object:
				var o = {};
				for (var i in d) {
					o[i] = TemplateUtils.cloneData(d[i], filter, f_escapeString)
				}
				if (!filter.noFunc) {
					if (d.hasOwnProperty("toString")) {
						o.toString = d.toString
					}
				}
				return o;
			case Array:
				var a = [];
				for (var i = 0, l = d.length; i < l; ++i) {
					a[i] = TemplateUtils.cloneData(d[i], filter, f_escapeString)
				}
				return a;
			case String:
				return (filter.escapeData) ? (f_escapeString(d)) : (d);
			case Function:
				if (filter.noFunc) {
					if (Template.DEBUG_MODE) {
						throw new Error("jTemplates: Functions are not allowed.");
					} else {
						return undefined
					}
				}
			}
			return d
		};
		TemplateUtils.optionToObject = function(optionText) {
			if (optionText === null || optionText === undefined) {
				return {}
			}
			var o = optionText.split(/[= ]/);
			if (o[0] === '') {
				o.shift()
			}
			var obj = {};
			for (var i = 0, l = o.length; i < l; i += 2) {
				obj[o[i]] = o[i + 1]
			}
			return obj
		};
		TemplateUtils.parseJSON = function(data) {
			if (typeof data !== "string" || !data) {
				return null
			}
			try {
				return (new Function("return " + jQuery.trim(data)))()
			} catch (e) {
				if (Template.DEBUG_MODE) {
					throw new Error("jTemplates: Invalid JSON");
				}
				return {}
			}
		};
		TemplateUtils.ReturnRefValue = function(el, guid, id) {
			while (el != null) {
				var d = jQuery.data(el, 'jTemplatesRef');
				if (d != undefined && d.guid == guid && d.d[id] != undefined) {
					return d.d[id]
				}
				el = el.parentNode
			}
			return null
		};
		var TextNode = function(val, literalMode, template) {
				this._value = val;
				this._literalMode = literalMode;
				this._template = template
			};
		TextNode.prototype.get = function(d, param, element, deep) {
			if (this._literalMode) {
				return this._value
			}
			var s = this._value;
			var result = "";
			var i = -1;
			var nested = 0;
			var sText = -1;
			var sExpr = 0;
			while (true) {
				var lm = s.indexOf("{", i + 1);
				var rm = s.indexOf("}", i + 1);
				if (lm < 0 && rm < 0) {
					break
				}
				if ((lm != -1 && lm < rm) || (rm == -1)) {
					i = lm;
					if (++nested == 1) {
						sText = lm;
						result += s.substring(sExpr, i);
						sExpr = -1
					}
				} else {
					i = rm;
					if (--nested === 0) {
						if (sText >= 0) {
							result += this._template.getBin().evaluateContent(d, param, element, s.substring(sText, rm + 1));
							sText = -1;
							sExpr = i + 1
						}
					} else if (nested < 0) {
						nested = 0
					}
				}
			}
			if (sExpr > -1) {
				result += s.substr(sExpr)
			}
			return result
		};
		EvalClass = function(t) {
			this.__templ = t
		};
		EvalClass.prototype.evaluateContent = function($T, $P, $Q, __value) {
			try {
				var result = eval(__value);
				if (jQuery.isFunction(result)) {
					if (this.__templ.settings.disallow_functions || !this.__templ.settings.runnable_functions) {
						return ''
					}
					result = result($T, $P, $Q)
				}
				return (result === undefined) ? ("") : (String(result))
			} catch (e) {
				if (Template.DEBUG_MODE) {
					if (e instanceof JTException) {
						e.type = "subtemplate"
					}
					throw e;
				}
				return ""
			}
		};
		EvalClass.prototype.evaluate = function($T, $P, $Q, __value) {
			return eval(__value)
		};
		var opIF = function(par, templ) {
				this._parent = par;
				this._templ = templ;
				this._cond = [];
				this._tree = [];
				this._curr = null
			};
		opIF.prototype.push = function(e) {
			this._curr.push(e)
		};
		opIF.prototype.getParent = function() {
			return this._parent
		};
		opIF.prototype.addCond = function(oper) {
			oper.match(/\{#(?:else)*if (.*?)\}/);
			this._cond.push(RegExp.$1);
			this._curr = [];
			this._tree.push(this._curr)
		};
		opIF.prototype.switchToElse = function() {
			this._cond.push(true);
			this._curr = [];
			this._tree.push(this._curr)
		};
		opIF.prototype.get = function(d, param, element, deep) {
			var ret = '';
			try {
				for (var ci = 0, cl = this._cond.length; ci < cl; ++ci) {
					if (this._templ.getBin().evaluate(d, param, element, this._cond[ci])) {
						var t = this._tree[ci];
						for (var i = 0, l = t.length; i < l; ++i) {
							ret += t[i].get(d, param, element, deep)
						}
						return ret
					}
				}
			} catch (e) {
				if (Template.DEBUG_MODE || (e instanceof JTException)) {
					throw e;
				}
			}
			return ret
		};
		opFORFactory = function(oper, par, template) {
			if (oper.match(/\{#for (\w+?) *= *(\S+?) +to +(\S+?) *(?:step=(\S+?))*\}/)) {
				var f = new opFOREACH(null, par, template);
				f._name = RegExp.$1;
				f._option = {
					'begin': (RegExp.$2 || 0),
					'end': (RegExp.$3 || -1),
					'step': (RegExp.$4 || 1),
					'extData': '$T'
				};
				f._runFunc = (function(i) {
					return i
				});
				return f
			} else {
				throw new Error('jTemplates: Operator failed "find": ' + oper);
			}
		};
		var opFOREACH = function(oper, par, template) {
				this._parent = par;
				this._template = template;
				if (oper != null) {
					oper.match(/\{#foreach +(.+?) +as +(\w+?)( .+)*\}/);
					this._arg = RegExp.$1;
					this._name = RegExp.$2;
					this._option = RegExp.$3 || null;
					this._option = TemplateUtils.optionToObject(this._option)
				}
				this._onTrue = [];
				this._onFalse = [];
				this._currentState = this._onTrue
			};
		opFOREACH.prototype.push = function(e) {
			this._currentState.push(e)
		};
		opFOREACH.prototype.getParent = function() {
			return this._parent
		};
		opFOREACH.prototype.switchToElse = function() {
			this._currentState = this._onFalse
		};
		opFOREACH.prototype.get = function(d, param, element, deep) {
			try {
				var fcount = (this._runFunc === undefined) ? (this._template.getBin().evaluate(d, param, element, this._arg)) : (this._runFunc);
				if (fcount === $) {
					throw new Error("jTemplate: Variable '$' cannot be used as loop-function");
				}
				var key = [];
				var mode = typeof fcount;
				if (mode == 'object') {
					var arr = [];
					jQuery.each(fcount, function(k, v) {
						key.push(k);
						arr.push(v)
					});
					fcount = arr
				}
				var extData = (this._option.extData !== undefined) ? (this._template.getBin().evaluate(d, param, element, this._option.extData)) : ((d != null) ? (d) : ({}));
				if (extData == null) {
					extData = {}
				}
				var s = Number(this._template.getBin().evaluate(d, param, element, this._option.begin) || 0),
					e;
				var step = Number(this._template.getBin().evaluate(d, param, element, this._option.step) || 1);
				if (mode != 'function') {
					e = fcount.length
				} else {
					if (this._option.end === undefined || this._option.end === null) {
						e = Number.MAX_VALUE
					} else {
						e = Number(this._template.getBin().evaluate(d, param, element, this._option.end)) + ((step > 0) ? (1) : (-1))
					}
				}
				var ret = '';
				var i, l;
				if (this._option.count) {
					var tmp = s + Number(this._template.getBin().evaluate(d, param, element, this._option.count));
					e = (tmp > e) ? (e) : (tmp)
				}
				if ((e > s && step > 0) || (e < s && step < 0)) {
					var iteration = 0;
					var _total = (mode != 'function') ? (Math.ceil((e - s) / step)) : undefined;
					var ckey, cval;
					var loopCounter = 0;
					for (;
					((step > 0) ? (s < e) : (s > e)); s += step, ++iteration, ++loopCounter) {
						if (Template.DEBUG_MODE && loopCounter > Template.FOREACH_LOOP_LIMIT) {
							throw new Error("jTemplate: Foreach loop limit was exceed");
						}
						ckey = key[s];
						if (mode != 'function') {
							cval = fcount[s]
						} else {
							cval = fcount(s);
							if (cval === undefined || cval === null) {
								break
							}
						}
						if ((typeof cval == 'function') && (this._template.settings.disallow_functions || !this._template.settings.runnable_functions)) {
							continue
						}
						if ((mode == 'object') && (ckey in Object) && (cval === Object[ckey])) {
							continue
						}
						var prevValue = extData[this._name];
						extData[this._name] = cval;
						extData[this._name + '$index'] = s;
						extData[this._name + '$iteration'] = iteration;
						extData[this._name + '$first'] = (iteration === 0);
						extData[this._name + '$last'] = (s + step >= e);
						extData[this._name + '$total'] = _total;
						extData[this._name + '$key'] = (ckey !== undefined && ckey.constructor == String) ? (this._template.f_escapeString(ckey)) : (ckey);
						extData[this._name + '$typeof'] = typeof cval;
						for (i = 0, l = this._onTrue.length; i < l; ++i) {
							try {
								ret += this._onTrue[i].get(extData, param, element, deep)
							} catch (ex) {
								if (ex instanceof JTException) {
									switch (ex.type) {
									case 'continue':
										i = l;
										break;
									case 'break':
										i = l;
										s = e;
										break;
									default:
										throw ex;
									}
								} else {
									throw ex;
								}
							}
						}
						delete extData[this._name + '$index'];
						delete extData[this._name + '$iteration'];
						delete extData[this._name + '$first'];
						delete extData[this._name + '$last'];
						delete extData[this._name + '$total'];
						delete extData[this._name + '$key'];
						delete extData[this._name + '$typeof'];
						delete extData[this._name];
						extData[this._name] = prevValue
					}
				} else {
					for (i = 0, l = this._onFalse.length; i < l; ++i) {
						ret += this._onFalse[i].get(d, param, element, deep)
					}
				}
				return ret
			} catch (e) {
				if (Template.DEBUG_MODE || (e instanceof JTException)) {
					throw e;
				}
				return ""
			}
		};
		var JTException = function(type) {
				this.type = type
			};
		JTException.prototype = Error;
		JTException.prototype.get = function(d) {
			throw this;
		};
		var Include = function(oper, includes, templ) {
				oper.match(/\{#include (.*?)(?: root=(.*?))?\}/);
				this._template = includes[RegExp.$1];
				if (this._template == undefined) {
					if (Template.DEBUG_MODE) {
						throw new Error('jTemplates: Cannot find include: ' + RegExp.$1);
					}
				}
				this._root = RegExp.$2;
				this._mainTempl = templ
			};
		Include.prototype.get = function(d, param, element, deep) {
			try {
				return this._template.get(this._mainTempl.getBin().evaluate(d, param, element, this._root), param, element, deep)
			} catch (e) {
				if (Template.DEBUG_MODE || (e instanceof JTException)) {
					throw e;
				}
			}
			return ''
		};
		var UserParam = function(oper, templ) {
				oper.match(/\{#param name=(\w*?) value=(.*?)\}/);
				this._name = RegExp.$1;
				this._value = RegExp.$2;
				this._templ = templ
			};
		UserParam.prototype.get = function(d, param, element, deep) {
			try {
				param[this._name] = this._templ.getBin().evaluate(d, param, element, this._value)
			} catch (e) {
				if (Template.DEBUG_MODE || (e instanceof JTException)) {
					throw e;
				}
				param[this._name] = undefined
			}
			return ''
		};
		var UserVariable = function(oper, templ) {
				oper.match(/\{#var (.*?)\}/);
				this._id = RegExp.$1;
				this._templ = templ
			};
		UserVariable.prototype.get = function(d, param, element, deep) {
			try {
				if (element == undefined) {
					return ""
				}
				var obj = this._templ.getBin().evaluate(d, param, element, this._id);
				var refobj = jQuery.data(element, "jTemplatesRef");
				if (refobj == undefined) {
					refobj = {
						guid: (++Template.guid),
						d: []
					}
				}
				var i = refobj.d.push(obj);
				jQuery.data(element, "jTemplatesRef", refobj);
				return "(TemplateUtils.ReturnRefValue(this," + refobj.guid + "," + (i - 1) + "))"
			} catch (e) {
				if (Template.DEBUG_MODE || (e instanceof JTException)) {
					throw e;
				}
				return ''
			}
		};
		var Cycle = function(oper) {
				oper.match(/\{#cycle values=(.*?)\}/);
				this._values = eval(RegExp.$1);
				this._length = this._values.length;
				if (this._length <= 0) {
					throw new Error('jTemplates: no elements for cycle');
				}
				this._index = 0;
				this._lastSessionID = -1
			};
		Cycle.prototype.get = function(d, param, element, deep) {
			var sid = jQuery.data(element, 'jTemplateSID');
			if (sid != this._lastSessionID) {
				this._lastSessionID = sid;
				this._index = 0
			}
			var i = this._index++ % this._length;
			return this._values[i]
		};
		jQuery.fn.setTemplate = function(s, includes, settings) {
			return jQuery(this).each(function() {
				var t = (s && s.constructor == Template) ? s : new Template(s, includes, settings);
				jQuery.data(this, 'jTemplate', t);
				jQuery.data(this, 'jTemplateSID', 0)
			})
		};
		jQuery.fn.setTemplateURL = function(url_, includes, settings) {
			var s = jQuery.ajax({
				url: url_,
				dataType: 'text',
				async: false,
				type: 'GET'
			}).responseText;
			return jQuery(this).setTemplate(s, includes, settings)
		};
		jQuery.fn.setTemplateElement = function(elementName, includes, settings) {
			var s = jQuery('#' + elementName).val();
			if (s == null) {
				s = jQuery('#' + elementName).html();
				s = s.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
			}
			s = jQuery.trim(s);
			s = s.replace(/^<\!\[CDATA\[([\s\S]*)\]\]>$/im, '$1');
			s = s.replace(/^<\!--([\s\S]*)-->$/im, '$1');
			return jQuery(this).setTemplate(s, includes, settings)
		};
		jQuery.fn.hasTemplate = function() {
			var count = 0;
			jQuery(this).each(function() {
				if (jQuery.getTemplate(this)) {
					++count
				}
			});
			return count
		};
		jQuery.fn.removeTemplate = function() {
			jQuery(this).processTemplateStop();
			return jQuery(this).each(function() {
				jQuery.removeData(this, 'jTemplate')
			})
		};
		jQuery.fn.setParam = function(name, value) {
			return jQuery(this).each(function() {
				var t = jQuery.getTemplate(this);
				if (t != null) {
					t.setParam(name, value)
				} else if (Template.DEBUG_MODE) {
					throw new Error('jTemplates: Template is not defined.');
				}
			})
		};
		jQuery.fn.processTemplate = function(d, param, options) {
			return jQuery(this).each(function() {
				var t = jQuery.getTemplate(this);
				if (t != null) {
					if (options != undefined && options.StrToJSON) {
						d = t.f_parseJSON(d)
					}
					jQuery.data(this, 'jTemplateSID', jQuery.data(this, 'jTemplateSID') + 1);
					jQuery(this).html(t.get(d, param, this, 0))
				} else if (Template.DEBUG_MODE) {
					throw new Error('jTemplates: Template is not defined.');
				}
			})
		};
		jQuery.fn.processTemplateURL = function(url_, param, options) {
			var that = this;
			var o = jQuery.extend({
				cache: false
			}, jQuery.ajaxSettings);
			o = jQuery.extend(o, options);
			jQuery.ajax({
				url: url_,
				type: o.type,
				data: o.data,
				dataFilter: o.dataFilter,
				async: o.async,
				headers: o.headers,
				cache: o.cache,
				timeout: o.timeout,
				dataType: 'text',
				success: function(d) {
					var r = jQuery(that).processTemplate(d, param, {
						StrToJSON: true
					});
					if (o.on_success) {
						o.on_success(r)
					}
				},
				error: o.on_error,
				complete: o.on_complete
			});
			return this
		};
		var Updater = function(url, param, interval, args, objs, options) {
				this._url = url;
				this._param = param;
				this._interval = interval;
				this._args = args;
				this.objs = objs;
				this.timer = null;
				this._options = options || {};
				var that = this;
				jQuery(objs).each(function() {
					jQuery.data(this, 'jTemplateUpdater', that)
				});
				this.run()
			};
		Updater.prototype.run = function() {
			this.objs = jQuery.grep(this.objs, function(elem) {
				return (jQuery.contains(document.body, elem.jquery ? elem[0] : elem))
			});
			if (this.objs.length === 0) {
				return
			}
			var that = this;
			jQuery.ajax({
				url: this._url,
				dataType: 'text',
				data: this._args,
				cache: false,
				headers: that._options.headers,
				success: function(d) {
					try {
						var r = jQuery(that.objs).processTemplate(d, that._param, {
							StrToJSON: true
						});
						if (that._options.on_success) {
							that._options.on_success(r)
						}
					} catch (ex) {}
				}
			});
			this.timer = setTimeout(function() {
				that.run()
			}, this._interval)
		};
		jQuery.fn.processTemplateStart = function(url, param, interval, args, options) {
			return new Updater(url, param, interval, args, this, options)
		};
		jQuery.fn.processTemplateStop = function() {
			return jQuery(this).each(function() {
				var updater = jQuery.data(this, 'jTemplateUpdater');
				if (updater == null) {
					return
				}
				var that = this;
				updater.objs = jQuery.grep(updater.objs, function(o) {
					return o != that
				});
				jQuery.removeData(this, 'jTemplateUpdater')
			})
		};
		jQuery.extend({
			createTemplate: function(s, includes, settings) {
				return new Template(s, includes, settings)
			},
			createTemplateURL: function(url_, includes, settings) {
				var s = jQuery.ajax({
					url: url_,
					dataType: 'text',
					async: false,
					type: 'GET'
				}).responseText;
				return new Template(s, includes, settings)
			},
			getTemplate: function(element) {
				return jQuery.data(element, 'jTemplate')
			},
			processTemplateToText: function(template, data, parameter) {
				return template.get(data, parameter, undefined, 0)
			},
			jTemplatesDebugMode: function(value) {
				Template.DEBUG_MODE = value
			}
		})
	})(jQuery)
};