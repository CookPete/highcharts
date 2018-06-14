/*
 Highcharts JS v6.1.0-modified (2018-06-14)

 (c) 2009-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(n){"object"===typeof module&&module.exports?module.exports=n:n(Highcharts)})(function(n){(function(b){var u=b.addEvent,g=b.Axis,n=b.Chart,m=b.color,q,h=b.each,t=b.extend,r=b.isNumber,e=b.Legend,c=b.LegendSymbolMixin,x=b.noop,w=b.merge,p=b.pick;b.ColorAxis||(q=b.ColorAxis=function(){this.init.apply(this,arguments)},t(q.prototype,g.prototype),t(q.prototype,{defaultColorAxisOptions:{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,
marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0},keepProps:["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"].concat(g.prototype.keepProps),init:function(a,d){var f="vertical"!==a.options.legend.layout,l;this.coll="colorAxis";l=w(this.defaultColorAxisOptions,{side:f?2:1,reversed:!f},d,{opposite:!f,showEmpty:!1,title:null,visible:a.options.legend.enabled});
g.prototype.init.call(this,a,l);d.dataClasses&&this.initDataClasses(d);this.initStops();this.horiz=f;this.zoomEnabled=!1;this.defaultLegendLength=200},initDataClasses:function(a){var d=this.chart,f,l=0,k=d.options.chart.colorCount,b=this.options,e=a.dataClasses.length;this.dataClasses=f=[];this.legendItems=[];h(a.dataClasses,function(a,c){a=w(a);f.push(a);a.color||("category"===b.dataClassColor?(c=d.options.colors,k=c.length,a.color=c[l],a.colorIndex=l,l++,l===k&&(l=0)):a.color=m(b.minColor).tweenTo(m(b.maxColor),
2>e?.5:c/(e-1)))})},setTickPositions:function(){if(!this.dataClasses)return g.prototype.setTickPositions.call(this)},initStops:function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]];h(this.stops,function(a){a.color=m(a[1])})},setOptions:function(a){g.prototype.setOptions.call(this,a);this.options.crosshair=this.options.marker},setAxisSize:function(){var a=this.legendSymbol,d=this.chart,f=d.options.legend||{},l,k;a?(this.left=f=a.attr("x"),this.top=l=a.attr("y"),
this.width=k=a.attr("width"),this.height=a=a.attr("height"),this.right=d.chartWidth-f-k,this.bottom=d.chartHeight-l-a,this.len=this.horiz?k:a,this.pos=this.horiz?f:l):this.len=(this.horiz?f.symbolWidth:f.symbolHeight)||this.defaultLegendLength},normalizedValue:function(a){this.isLog&&(a=this.val2lin(a));return 1-(this.max-a)/(this.max-this.min||1)},toColor:function(a,d){var f=this.stops,l,k,b=this.dataClasses,e,c;if(b)for(c=b.length;c--;){if(e=b[c],l=e.from,f=e.to,(void 0===l||a>=l)&&(void 0===f||
a<=f)){k=e.color;d&&(d.dataClass=c,d.colorIndex=e.colorIndex);break}}else{a=this.normalizedValue(a);for(c=f.length;c--&&!(a>f[c][0]););l=f[c]||f[c+1];f=f[c+1]||l;a=1-(f[0]-a)/(f[0]-l[0]||1);k=l.color.tweenTo(f.color,a)}return k},getOffset:function(){var a=this.legendGroup,d=this.chart.axisOffset[this.side];a&&(this.axisParent=a,g.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=d)},setLegendColor:function(){var a,
d=this.reversed;a=d?1:0;d=d?0:1;a=this.horiz?[a,0,d,0]:[0,d,0,a];this.legendColor={linearGradient:{x1:a[0],y1:a[1],x2:a[2],y2:a[3]},stops:this.stops}},drawLegendSymbol:function(a,d){var f=a.padding,b=a.options,k=this.horiz,c=p(b.symbolWidth,k?this.defaultLegendLength:12),e=p(b.symbolHeight,k?12:this.defaultLegendLength),h=p(b.labelPadding,k?16:30),b=p(b.itemDistance,10);this.setLegendColor();d.legendSymbol=this.chart.renderer.rect(0,a.baseline-11,c,e).attr({zIndex:1}).add(d.legendGroup);this.legendItemWidth=
c+f+(k?b:h);this.legendItemHeight=e+f+(k?h:0)},setState:function(a){h(this.series,function(d){d.setState(a)})},visible:!0,setVisible:x,getSeriesExtremes:function(){var a=this.series,d=a.length;this.dataMin=Infinity;for(this.dataMax=-Infinity;d--;)a[d].getExtremes(),void 0!==a[d].valueMin&&(this.dataMin=Math.min(this.dataMin,a[d].valueMin),this.dataMax=Math.max(this.dataMax,a[d].valueMax))},drawCrosshair:function(a,d){var f=d&&d.plotX,b=d&&d.plotY,c,e=this.pos,h=this.len;d&&(c=this.toPixels(d[d.series.colorKey]),
c<e?c=e-2:c>e+h&&(c=e+h+2),d.plotX=c,d.plotY=this.len-c,g.prototype.drawCrosshair.call(this,a,d),d.plotX=f,d.plotY=b,this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0,this.cross.attr({fill:this.crosshair.color})))},getPlotLinePath:function(a,d,f,b,c){return r(c)?this.horiz?["M",c-4,this.top-6,"L",c+4,this.top-6,c,this.top,"Z"]:["M",this.left,c,"L",this.left-6,c+6,this.left-6,c-6,"Z"]:
g.prototype.getPlotLinePath.call(this,a,d,f,b)},update:function(a,d){var c=this.chart,b=c.legend;h(this.series,function(a){a.isDirtyData=!0});a.dataClasses&&b.allItems&&(h(b.allItems,function(a){a.isDataClass&&a.legendGroup&&a.legendGroup.destroy()}),c.isDirtyLegend=!0);c.options[this.coll]=w(this.userOptions,a);g.prototype.update.call(this,a,d);this.legendItem&&(this.setLegendColor(),b.colorizeItem(this,!0))},remove:function(){this.legendItem&&this.chart.legend.destroyItem(this);g.prototype.remove.call(this)},
getDataClassLegendSymbols:function(){var a=this,d=this.chart,f=this.legendItems,e=d.options.legend,k=e.valueDecimals,q=e.valueSuffix||"",g;f.length||h(this.dataClasses,function(e,l){var m=!0,r=e.from,p=e.to;g="";void 0===r?g="\x3c ":void 0===p&&(g="\x3e ");void 0!==r&&(g+=b.numberFormat(r,k)+q);void 0!==r&&void 0!==p&&(g+=" - ");void 0!==p&&(g+=b.numberFormat(p,k)+q);f.push(t({chart:d,name:g,options:{},drawLegendSymbol:c.drawRectangle,visible:!0,setState:x,isDataClass:!0,setVisible:function(){m=this.visible=
!m;h(a.series,function(a){h(a.points,function(a){a.dataClass===l&&a.setVisible(m)})});d.legend.colorizeItem(this,m)}},e))});return f},name:""}),h(["fill","stroke"],function(a){b.Fx.prototype[a+"Setter"]=function(){this.elem.attr(a,m(this.start).tweenTo(m(this.end),this.pos),null,!0)}}),u(n,"afterGetAxes",function(){var a=this.options.colorAxis;this.colorAxis=[];a&&new q(this,a)}),u(e,"afterGetAllItems",function(a){var d=[],c=this.chart.colorAxis[0];c&&c.options&&c.options.showInLegend&&(c.options.dataClasses?
d=c.getDataClassLegendSymbols():d.push(c),h(c.series,function(c){b.erase(a.allItems,c)}));for(;d.length;)a.allItems.unshift(d.pop())}),u(e,"afterColorizeItem",function(a){a.visible&&a.item.legendColor&&a.item.legendSymbol.attr({fill:a.item.legendColor})}),u(e,"afterUpdate",function(a,c,b){this.chart.colorAxis[0]&&this.chart.colorAxis[0].update({},b)}))})(n);(function(b){var n=b.defined,g=b.each,v=b.noop,m=b.seriesTypes;b.colorPointMixin={isValid:function(){return null!==this.value&&Infinity!==this.value&&
-Infinity!==this.value},setVisible:function(b){var h=this,q=b?"show":"hide";g(["graphic","dataLabel"],function(b){if(h[b])h[b][q]()})},setState:function(g){b.Point.prototype.setState.call(this,g);this.graphic&&this.graphic.attr({zIndex:"hover"===g?1:0})}};b.colorSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:v,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:m.column.prototype.pointAttribs,
translateColors:function(){var b=this,h=this.options.nullColor,m=this.colorAxis,r=this.colorKey;g(this.data,function(e){var c=e[r];if(c=e.options.color||(e.isNull?h:m&&void 0!==c?m.toColor(c,e):e.color||b.color))e.color=c})},colorAttribs:function(b){var g={};n(b.color)&&(g[this.colorProp||"fill"]=b.color);return g}}})(n);(function(b){var n=b.colorPointMixin,g=b.each,v=b.merge,m=b.noop,q=b.pick,h=b.Series,t=b.seriesType,r=b.seriesTypes;t("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",
dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}\x3cbr/\x3e"},states:{hover:{halo:!1,brightness:.2}}},v(b.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){var b;r.scatter.prototype.init.apply(this,arguments);b=this.options;b.pointRange=q(b.pointRange,b.colsize||1);
this.yAxis.axisPointRange=b.rowsize||1},translate:function(){var b=this.options,c=this.xAxis,h=this.yAxis,m=b.pointPadding||0,p=function(a,b,c){return Math.min(Math.max(b,a),c)};this.generatePoints();g(this.points,function(a){var d=(b.colsize||1)/2,e=(b.rowsize||1)/2,g=p(Math.round(c.len-c.translate(a.x-d,0,1,0,1)),-c.len,2*c.len),d=p(Math.round(c.len-c.translate(a.x+d,0,1,0,1)),-c.len,2*c.len),k=p(Math.round(h.translate(a.y-e,0,1,0,1)),-h.len,2*h.len),e=p(Math.round(h.translate(a.y+e,0,1,0,1)),-h.len,
2*h.len),n=q(a.pointPadding,m);a.plotX=a.clientX=(g+d)/2;a.plotY=(k+e)/2;a.shapeType="rect";a.shapeArgs={x:Math.min(g,d)+n,y:Math.min(k,e)+n,width:Math.abs(d-g)-2*n,height:Math.abs(e-k)-2*n}});this.translateColors()},drawPoints:function(){r.column.prototype.drawPoints.call(this);g(this.points,function(b){b.graphic.attr(this.colorAttribs(b))},this)},animate:m,getBox:m,drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,alignDataLabel:r.column.prototype.alignDataLabel,getExtremes:function(){h.prototype.getExtremes.call(this,
this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;h.prototype.getExtremes.call(this)}}),b.extend({haloPath:function(b){if(!b)return[];var c=this.shapeArgs;return["M",c.x-b,c.y-b,"L",c.x-b,c.y+c.height+b,c.x+c.width+b,c.y+c.height+b,c.x+c.width+b,c.y-b,"Z"]}},n))})(n)});