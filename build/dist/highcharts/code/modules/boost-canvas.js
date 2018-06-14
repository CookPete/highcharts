/*
 Highcharts JS v6.1.0-modified (2018-06-14)
 Boost module

 (c) 2010-2017 Highsoft AS
 Author: Torstein Honsi

 License: www.highcharts.com/license
*/
(function(k){"object"===typeof module&&module.exports?module.exports=k:k(Highcharts)})(function(k){(function(c){var k=c.win.document,Y=function(){},Z=c.Color,w=c.Series,e=c.seriesTypes,m=c.each,q=c.extend,x=c.addEvent,aa=c.fireEvent,ba=c.isNumber,ca=c.merge,da=c.pick,y=c.wrap,I;c.initCanvasBoost=function(){c.seriesTypes.heatmap&&c.wrap(c.seriesTypes.heatmap.prototype,"drawPoints",function(){var a=this.getContext();a?(m(this.points,function(b){var f=b.plotY;void 0===f||isNaN(f)||null===b.y||(f=b.shapeArgs,
b=b.series.pointAttribs(b),a.fillStyle=b.fill,a.fillRect(f.x,f.y,f.width,f.height))}),this.canvasToSVG()):this.chart.showLoading("Your browser doesn't support HTML5 canvas, \x3cbr\x3eplease use a modern browser")});c.extend(w.prototype,{getContext:function(){var a=this.chart,b=a.chartWidth,f=a.chartHeight,c=a.seriesGroup||this.group,d=this,e,h=function(a,f,d,b,c,t,e){a.call(this,d,f,b,c,t,e)};a.isChartSeriesBoosting()&&(d=a,c=a.seriesGroup);e=d.ctx;d.canvas||(d.canvas=k.createElement("canvas"),d.renderTarget=
a.renderer.image("",0,0,b,f).addClass("highcharts-boost-canvas").add(c),d.ctx=e=d.canvas.getContext("2d"),a.inverted&&m(["moveTo","lineTo","rect","arc"],function(a){y(e,a,h)}),d.boostCopy=function(){d.renderTarget.attr({href:d.canvas.toDataURL("image/png")})},d.boostClear=function(){e.clearRect(0,0,d.canvas.width,d.canvas.height);d===this&&d.renderTarget.attr({href:""})},d.boostClipRect=a.renderer.clipRect(),d.renderTarget.clip(d.boostClipRect));d.canvas.width!==b&&(d.canvas.width=b);d.canvas.height!==
f&&(d.canvas.height=f);d.renderTarget.attr({x:0,y:0,width:b,height:f,style:"pointer-events: none",href:""});d.boostClipRect.attr(a.getBoostClipRect(d));return e},canvasToSVG:function(){this.chart.isChartSeriesBoosting()?this.boostClear&&this.boostClear():(this.boostCopy||this.chart.boostCopy)&&(this.boostCopy||this.chart.boostCopy)()},cvsLineTo:function(a,b,f){a.lineTo(b,f)},renderCanvas:function(){var a=this,b=a.options,f=a.chart,t=this.xAxis,d=this.yAxis,e=(f.options.boost||{}).timeRendering||!1,
h,k=0,m=a.processedXData,w=a.processedYData,J=b.data,l=t.getExtremes(),z=l.min,A=l.max,l=d.getExtremes(),y=l.min,ea=l.max,K={},B,fa=!!a.sampling,L,C=b.marker&&b.marker.radius,M=this.cvsDrawPoint,D=b.lineWidth?this.cvsLineTo:!1,N=C&&1>=C?this.cvsMarkerSquare:this.cvsMarkerCircle,ga=this.cvsStrokeBatch||1E3,ha=!1!==b.enableMouseTracking,O,l=b.threshold,p=d.getThreshold(l),P=ba(l),Q=p,ia=this.fill,R=a.pointArrayMap&&"low,high"===a.pointArrayMap.join(","),S=!!b.stacking,ja=a.cropStart||0,l=f.options.loading,
ka=a.requireSorting,T,la=b.connectNulls,U=!m,E,F,r,v,G,n=S?a.data:m||J,ma=a.fillOpacity?(new Z(a.color)).setOpacity(da(b.fillOpacity,.75)).get():a.color,V=function(){ia?(h.fillStyle=ma,h.fill()):(h.strokeStyle=a.color,h.lineWidth=b.lineWidth,h.stroke())},X=function(d,b,c,g){0===k&&(h.beginPath(),D&&(h.lineJoin="round"));f.scroller&&"highcharts-navigator-series"===a.options.className?(b+=f.scroller.top,c&&(c+=f.scroller.top)):b+=f.plotTop;d+=f.plotLeft;T?h.moveTo(d,b):M?M(h,d,b,c,O):D?D(h,d,b):N&&
N.call(a,h,d,b,C,g);k+=1;k===ga&&(V(),k=0);O={clientX:d,plotY:b,yBottom:c}},H=function(a,b,c){G=a+","+b;ha&&!K[G]&&(K[G]=!0,f.inverted&&(a=t.len-a,b=d.len-b),L.push({clientX:a,plotX:a,plotY:b,i:ja+c}))};this.renderTarget&&this.renderTarget.attr({href:""});(this.points||this.graph)&&this.destroyGraphics();a.plotGroup("group","series",a.visible?"visible":"hidden",b.zIndex,f.seriesGroup);a.markerGroup=a.group;x(a,"destroy",function(){a.markerGroup=null});L=this.points=[];h=this.getContext();a.buildKDTree=
Y;this.boostClear&&this.boostClear();this.visible&&(99999<J.length&&(f.options.loading=ca(l,{labelStyle:{backgroundColor:c.color("#ffffff").setOpacity(.75).get(),padding:"1em",borderRadius:"0.5em"},style:{backgroundColor:"none",opacity:1}}),c.clearTimeout(I),f.showLoading("Drawing..."),f.options.loading=l),e&&console.time("canvas rendering"),c.eachAsync(n,function(b,c){var e,g,h,k=!1,l=!1,m=!1,u=!1,W="undefined"===typeof f.index,q=!0;if(!W){U?(e=b[0],g=b[1],n[c+1]&&(m=n[c+1][0]),n[c-1]&&(u=n[c-1][0])):
(e=b,g=w[c],n[c+1]&&(m=n[c+1]),n[c-1]&&(u=n[c-1]));m&&m>=z&&m<=A&&(k=!0);u&&u>=z&&u<=A&&(l=!0);R?(U&&(g=b.slice(1,3)),h=g[0],g=g[1]):S&&(e=b.x,g=b.stackY,h=g-b.y);b=null===g;ka||(q=g>=y&&g<=ea);if(!b&&(e>=z&&e<=A&&q||k||l))if(e=Math.round(t.toPixels(e,!0)),fa){if(void 0===r||e===B){R||(h=g);if(void 0===v||g>F)F=g,v=c;if(void 0===r||h<E)E=h,r=c}e!==B&&(void 0!==r&&(g=d.toPixels(F,!0),p=d.toPixels(E,!0),X(e,P?Math.min(g,Q):g,P?Math.max(p,Q):p,c),H(e,g,v),p!==g&&H(e,p,r)),r=v=void 0,B=e)}else g=Math.round(d.toPixels(g,
!0)),X(e,g,p,c),H(e,g,c);T=b&&!la;0===c%5E4&&(a.boostCopy||a.chart.boostCopy)&&(a.boostCopy||a.chart.boostCopy)()}return!W},function(){var b=f.loadingDiv,d=f.loadingShown;V();a.canvasToSVG();e&&console.timeEnd("canvas rendering");aa(a,"renderedCanvas");d&&(q(b.style,{transition:"opacity 250ms",opacity:0}),f.loadingShown=!1,I=setTimeout(function(){b.parentNode&&b.parentNode.removeChild(b);f.loadingDiv=f.loadingSpan=null},250));delete a.buildKDTree;a.buildKDTree()},f.renderer.forExport?Number.MAX_VALUE:
void 0))}});e.scatter.prototype.cvsMarkerCircle=function(a,b,c,e){a.moveTo(b,c);a.arc(b,c,e,0,2*Math.PI,!1)};e.scatter.prototype.cvsMarkerSquare=function(a,b,c,e){a.rect(b-e,c-e,2*e,2*e)};e.scatter.prototype.fill=!0;e.bubble&&(e.bubble.prototype.cvsMarkerCircle=function(a,b,c,e,d){a.moveTo(b,c);a.arc(b,c,this.radii&&this.radii[d],0,2*Math.PI,!1)},e.bubble.prototype.cvsStrokeBatch=1);q(e.area.prototype,{cvsDrawPoint:function(a,b,c,e,d){d&&b!==d.clientX&&(a.moveTo(d.clientX,d.yBottom),a.lineTo(d.clientX,
d.plotY),a.lineTo(b,c),a.lineTo(b,e))},fill:!0,fillOpacity:!0,sampling:!0});q(e.column.prototype,{cvsDrawPoint:function(a,b,c,e){a.rect(b-1,c,1,e-c)},fill:!0,sampling:!0});c.Chart.prototype.callbacks.push(function(a){x(a,"predraw",function(){a.renderTarget&&a.renderTarget.attr({href:""});a.canvas&&a.canvas.getContext("2d").clearRect(0,0,a.canvas.width,a.canvas.height)});x(a,"render",function(){a.boostCopy&&a.boostCopy()})})}})(k)});
