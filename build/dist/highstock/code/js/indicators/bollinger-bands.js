/*
  Highcharts JS v6.1.0-modified (2018-06-14)

 Indicator series type for Highstock

 (c) 2010-2017 Pawe Fus

 License: www.highcharts.com/license
*/
(function(c){"object"===typeof module&&module.exports?module.exports=c:c(Highcharts)})(function(c){(function(e){var c=e.each,n=e.merge,x=e.isArray,p=e.seriesTypes.sma;e.seriesType("bb","sma",{name:"BB (20, 2)",params:{period:20,standardDeviation:2,index:3},bottomLine:{styles:{lineWidth:1,lineColor:void 0}},topLine:{styles:{lineWidth:1,lineColor:void 0}},tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e\x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eTop: {point.top}\x3cbr/\x3eMiddle: {point.middle}\x3cbr/\x3eBottom: {point.bottom}\x3cbr/\x3e'},
marker:{enabled:!1},dataGrouping:{approximation:"averages"}},{pointArrayMap:["top","middle","bottom"],pointValKey:"middle",nameComponents:["period","standardDeviation"],init:function(){p.prototype.init.apply(this,arguments);this.options=n({topLine:{styles:{lineColor:this.color}},bottomLine:{styles:{lineColor:this.color}}},this.options)},toYData:function(a){return[a.top,a.middle,a.bottom]},translate:function(){var a=this,k=["plotTop","plotMiddle","plotBottom"];p.prototype.translate.apply(a,arguments);
c(a.points,function(d){c([d.top,d.middle,d.bottom],function(f,c){null!==f&&(d[k[c]]=a.yAxis.toPixels(f,!0))})})},drawGraph:function(){for(var a=this,k=a.points,d=k.length,f=a.options,e=a.graph,y={options:{gapSize:f.gapSize}},m=[[],[]],b;d--;)b=k[d],m[0].push({plotX:b.plotX,plotY:b.plotTop,isNull:b.isNull}),m[1].push({plotX:b.plotX,plotY:b.plotBottom,isNull:b.isNull});c(["topLine","bottomLine"],function(b,d){a.points=m[d];a.options=n(f[b].styles,y);a.graph=a["graph"+b];p.prototype.drawGraph.call(a);
a["graph"+b]=a.graph});a.points=k;a.options=f;a.graph=e;p.prototype.drawGraph.call(a)},getValues:function(a,c){var d=c.period,f=c.standardDeviation,e=a.xData,k=(a=a.yData)?a.length:0,m=[],b,h,g,q,n=[],u=[],v,l;if(e.length<d)return!1;v=x(a[0]);for(l=d;l<=k;l++){q=e.slice(l-d,l);h=a.slice(l-d,l);b=p.prototype.getValues.call(this,{xData:q,yData:h},c);q=b.xData[0];b=b.yData[0];g=0;for(var w=h.length,r=0,t;r<w;r++)t=(v?h[r][c.index]:h[r])-b,g+=t*t;g=Math.sqrt(g/(w-1));h=b+f*g;g=b-f*g;m.push([q,h,b,g]);
n.push(q);u.push([h,b,g])}return{values:m,xData:n,yData:u}}})})(c)});
