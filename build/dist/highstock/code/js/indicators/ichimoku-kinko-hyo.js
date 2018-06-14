/*
  Highcharts JS v6.1.0-modified (2018-06-14)

 Indicator series type for Highstock

 (c) 2010-2017 Sebastian Bochan

 License: www.highcharts.com/license
*/
(function(n){"object"===typeof module&&module.exports?module.exports=n:n(Highcharts)})(function(n){(function(k){function n(a){return a.reduce(function(a,b){return Math.max(a,b[1])},-Infinity)}function B(a){return a.reduce(function(a,b){return Math.min(a,b[2])},Infinity)}function x(a){return{high:n(a),low:B(a)}}function C(a){var c,b,f,g,h;w(a.series,function(a){if(a.xData)for(g=a.xData,h=b=a.xIncrement?1:g.length-1;0<h;h--)if(f=g[h]-g[h-1],c===t||f<c)c=f});return c}var t,D=k.seriesType,w=k.each,y=
k.merge,z=k.color,E=k.isArray,A=k.defined,v=k.seriesTypes.sma;k.approximations["ichimoku-averages"]=function(){var a=[],c;w(arguments,function(b,f){a.push(k.approximations.average(b));c=!c&&void 0===a[f]});return c?void 0:a};D("ikh","sma",{params:{period:26,periodTenkan:9,periodSenkouSpanB:52},marker:{enabled:!1},tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eTENKAN SEN: {point.tenkanSen:.3f}\x3cbr/\x3eKIJUN SEN: {point.kijunSen:.3f}\x3cbr/\x3eCHIKOU SPAN: {point.chikouSpan:.3f}\x3cbr/\x3eSENKOU SPAN A: {point.senkouSpanA:.3f}\x3cbr/\x3eSENKOU SPAN B: {point.senkouSpanB:.3f}\x3cbr/\x3e'},
tenkanLine:{styles:{lineWidth:1,lineColor:void 0}},kijunLine:{styles:{lineWidth:1,lineColor:void 0}},chikouLine:{styles:{lineWidth:1,lineColor:void 0}},senkouSpanA:{styles:{lineWidth:1,lineColor:void 0}},senkouSpanB:{styles:{lineWidth:1,lineColor:void 0}},senkouSpan:{styles:{fill:"rgba(255, 0, 0, 0.5)"}},dataGrouping:{approximation:"ichimoku-averages"}},{pointArrayMap:["tenkanSen","kijunSen","chikouSpan","senkouSpanA","senkouSpanB"],pointValKey:"tenkanSen",nameComponents:["periodSenkouSpanB","period",
"periodTenkan"],init:function(){v.prototype.init.apply(this,arguments);this.options=y({tenkanLine:{styles:{lineColor:this.color}},kijunLine:{styles:{lineColor:this.color}},chikouLine:{styles:{lineColor:this.color}},senkouSpanA:{styles:{lineColor:this.color,fill:z(this.color).setOpacity(.5).get()}},senkouSpanB:{styles:{lineColor:this.color,fill:z(this.color).setOpacity(.5).get()}},senkouSpan:{styles:{fill:z(this.color).setOpacity(.2).get()}}},this.options)},toYData:function(a){return[a.tenkanSen,a.kijunSen,
a.chikouSpan,a.senkouSpanA,a.senkouSpanB]},translate:function(){var a=this;v.prototype.translate.apply(a);w(a.points,function(c){w(a.pointArrayMap,function(b){A(c[b])&&(c["plot"+b]=a.yAxis.toPixels(c[b],!0),c.plotY=c["plot"+b],c.tooltipPos=[c.plotX,c["plot"+b]],c.isNull=!1)})})},drawGraph:function(){for(var a=this,c=a.points,b=c.length,f=a.options,g=a.graph,h=a.color,k={options:{gapSize:f.gapSize}},e=a.pointArrayMap.length,m=[[],[],[],[],[],[]],p,q,l;b--;)for(q=c[b],l=0;l<e;l++)p=a.pointArrayMap[l],
A(q[p])&&m[l].push({plotX:q.plotX,plotY:q["plot"+p],isNull:!1});w("tenkanLine kijunLine chikouLine senkouSpanA senkouSpanB senkouSpan".split(" "),function(b,c){a.points=m[c];a.options=y(f[b].styles,k);a.graph=a["graph"+b];a.nextPoints=m[c-1];5===c?(a.points=m[c-1],a.options=y(f[b].styles,k),a.graph=a["graph"+b],a.nextPoints=m[c-2],a.fillGraph=!0,a.color=a.options.fill):(a.fillGraph=!1,a.color=h);v.prototype.drawGraph.call(a);a["graph"+b]=a.graph});delete a.nextPoints;delete a.fillGraph;a.points=c;
a.options=f;a.graph=g},getGraphPath:function(a){var c,b,f=[];a=a||this.points;if(this.fillGraph&&this.nextPoints){b=v.prototype.getGraphPath.call(this,this.nextPoints);b[0]="L";c=v.prototype.getGraphPath.call(this,a);b=b.slice(0,c.length);for(var g=b.length-1;0<g;g-=3)f.push(b[g-2],b[g-1],b[g]);c=c.concat(f)}else c=v.prototype.getGraphPath.apply(this,arguments);return c},getValues:function(a,c){var b=c.period,f=c.periodTenkan;c=c.periodSenkouSpanB;var g=a.xData,h=a.yData,k=h&&h.length||0;a=C(a.xAxis);
var e=[],m=[],p,q,l,r,u,d,n;if(g.length<=b||!E(h[0])||4!==h[0].length)return!1;p=g[0]-b*a;for(d=0;d<b;d++)m.push(p+d*a);for(d=0;d<k;d++)d>=f&&(l=h.slice(d-f,d),l=x(l),l=(l.high+l.low)/2),d>=b&&(r=h.slice(d-b,d),r=x(r),r=(r.high+r.low)/2,n=(l+r)/2),d>=c&&(u=h.slice(d-c,d),u=x(u),u=(u.high+u.low)/2),p=h[d][0],q=g[d],e[d]===t&&(e[d]=[]),e[d+b]===t&&(e[d+b]=[]),e[d+b][0]=l,e[d+b][1]=r,e[d+b][2]=t,d>=b?e[d-b][2]=p:(e[d+b][3]=t,e[d+b][4]=t),e[d+2*b]===t&&(e[d+2*b]=[]),e[d+2*b][3]=n,e[d+2*b][4]=u,m.push(q);
for(d=1;d<=b;d++)m.push(q+d*a);return{values:e,xData:m,yData:e}}})})(n)});
