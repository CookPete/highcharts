/*
 Highcharts JS v6.1.0-modified (2018-06-14)

 (c) 2009-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(m){"object"===typeof module&&module.exports?module.exports=m:m(Highcharts)})(function(m){(function(b){var u=b.addEvent,k=b.Axis,m=b.Chart,e=b.color,l,h=b.each,t=b.extend,q=b.isNumber,c=b.Legend,p=b.LegendSymbolMixin,x=b.noop,w=b.merge,n=b.pick;b.ColorAxis||(l=b.ColorAxis=function(){this.init.apply(this,arguments)},t(l.prototype,k.prototype),t(l.prototype,{defaultColorAxisOptions:{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,
marker:{animation:{duration:50},width:.01},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0},keepProps:["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"].concat(k.prototype.keepProps),init:function(a,d){var f="vertical"!==a.options.legend.layout,r;this.coll="colorAxis";r=w(this.defaultColorAxisOptions,{side:f?2:1,reversed:!f},d,{opposite:!f,showEmpty:!1,title:null,visible:a.options.legend.enabled});k.prototype.init.call(this,
a,r);d.dataClasses&&this.initDataClasses(d);this.initStops();this.horiz=f;this.zoomEnabled=!1;this.defaultLegendLength=200},initDataClasses:function(a){var d,f=0,r=this.chart.options.chart.colorCount,g=this.options,b=a.dataClasses.length;this.dataClasses=d=[];this.legendItems=[];h(a.dataClasses,function(a,c){a=w(a);d.push(a);"category"===g.dataClassColor?(a.colorIndex=f,f++,f===r&&(f=0)):a.color=e(g.minColor).tweenTo(e(g.maxColor),2>b?.5:c/(b-1))})},setTickPositions:function(){if(!this.dataClasses)return k.prototype.setTickPositions.call(this)},
initStops:function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]];h(this.stops,function(a){a.color=e(a[1])})},setOptions:function(a){k.prototype.setOptions.call(this,a);this.options.crosshair=this.options.marker},setAxisSize:function(){var a=this.legendSymbol,d=this.chart,f=d.options.legend||{},b,g;a?(this.left=f=a.attr("x"),this.top=b=a.attr("y"),this.width=g=a.attr("width"),this.height=a=a.attr("height"),this.right=d.chartWidth-f-g,this.bottom=d.chartHeight-
b-a,this.len=this.horiz?g:a,this.pos=this.horiz?f:b):this.len=(this.horiz?f.symbolWidth:f.symbolHeight)||this.defaultLegendLength},normalizedValue:function(a){this.isLog&&(a=this.val2lin(a));return 1-(this.max-a)/(this.max-this.min||1)},toColor:function(a,d){var f=this.stops,b,g,c=this.dataClasses,p,e;if(c)for(e=c.length;e--;){if(p=c[e],b=p.from,f=p.to,(void 0===b||a>=b)&&(void 0===f||a<=f)){d&&(d.dataClass=e,d.colorIndex=p.colorIndex);break}}else{a=this.normalizedValue(a);for(e=f.length;e--&&!(a>
f[e][0]););b=f[e]||f[e+1];f=f[e+1]||b;a=1-(f[0]-a)/(f[0]-b[0]||1);g=b.color.tweenTo(f.color,a)}return g},getOffset:function(){var a=this.legendGroup,d=this.chart.axisOffset[this.side];a&&(this.axisParent=a,k.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=d)},setLegendColor:function(){var a,d=this.reversed;a=d?1:0;d=d?0:1;a=this.horiz?[a,0,d,0]:[0,d,0,a];this.legendColor={linearGradient:{x1:a[0],y1:a[1],x2:a[2],
y2:a[3]},stops:this.stops}},drawLegendSymbol:function(a,d){var f=a.padding,b=a.options,g=this.horiz,c=n(b.symbolWidth,g?this.defaultLegendLength:12),e=n(b.symbolHeight,g?12:this.defaultLegendLength),p=n(b.labelPadding,g?16:30),b=n(b.itemDistance,10);this.setLegendColor();d.legendSymbol=this.chart.renderer.rect(0,a.baseline-11,c,e).attr({zIndex:1}).add(d.legendGroup);this.legendItemWidth=c+f+(g?b:p);this.legendItemHeight=e+f+(g?p:0)},setState:function(a){h(this.series,function(d){d.setState(a)})},
visible:!0,setVisible:x,getSeriesExtremes:function(){var a=this.series,d=a.length;this.dataMin=Infinity;for(this.dataMax=-Infinity;d--;)a[d].getExtremes(),void 0!==a[d].valueMin&&(this.dataMin=Math.min(this.dataMin,a[d].valueMin),this.dataMax=Math.max(this.dataMax,a[d].valueMax))},drawCrosshair:function(a,d){var f=d&&d.plotX,b=d&&d.plotY,g,c=this.pos,e=this.len;d&&(g=this.toPixels(d[d.series.colorKey]),g<c?g=c-2:g>c+e&&(g=c+e+2),d.plotX=g,d.plotY=this.len-g,k.prototype.drawCrosshair.call(this,a,d),
d.plotX=f,d.plotY=b,this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0))},getPlotLinePath:function(a,d,f,b,c){return q(c)?this.horiz?["M",c-4,this.top-6,"L",c+4,this.top-6,c,this.top,"Z"]:["M",this.left,c,"L",this.left-6,c+6,this.left-6,c-6,"Z"]:k.prototype.getPlotLinePath.call(this,a,d,f,b)},update:function(a,d){var b=this.chart,c=b.legend;h(this.series,function(a){a.isDirtyData=!0});
a.dataClasses&&c.allItems&&(h(c.allItems,function(a){a.isDataClass&&a.legendGroup&&a.legendGroup.destroy()}),b.isDirtyLegend=!0);b.options[this.coll]=w(this.userOptions,a);k.prototype.update.call(this,a,d);this.legendItem&&(this.setLegendColor(),c.colorizeItem(this,!0))},remove:function(){this.legendItem&&this.chart.legend.destroyItem(this);k.prototype.remove.call(this)},getDataClassLegendSymbols:function(){var a=this,d=this.chart,f=this.legendItems,c=d.options.legend,e=c.valueDecimals,k=c.valueSuffix||
"",l;f.length||h(this.dataClasses,function(c,g){var q=!0,r=c.from,n=c.to;l="";void 0===r?l="\x3c ":void 0===n&&(l="\x3e ");void 0!==r&&(l+=b.numberFormat(r,e)+k);void 0!==r&&void 0!==n&&(l+=" - ");void 0!==n&&(l+=b.numberFormat(n,e)+k);f.push(t({chart:d,name:l,options:{},drawLegendSymbol:p.drawRectangle,visible:!0,setState:x,isDataClass:!0,setVisible:function(){q=this.visible=!q;h(a.series,function(a){h(a.points,function(a){a.dataClass===g&&a.setVisible(q)})});d.legend.colorizeItem(this,q)}},c))});
return f},name:""}),h(["fill","stroke"],function(a){b.Fx.prototype[a+"Setter"]=function(){this.elem.attr(a,e(this.start).tweenTo(e(this.end),this.pos),null,!0)}}),u(m,"afterGetAxes",function(){var a=this.options.colorAxis;this.colorAxis=[];a&&new l(this,a)}),u(c,"afterGetAllItems",function(a){var d=[],c=this.chart.colorAxis[0];c&&c.options&&c.options.showInLegend&&(c.options.dataClasses?d=c.getDataClassLegendSymbols():d.push(c),h(c.series,function(c){b.erase(a.allItems,c)}));for(;d.length;)a.allItems.unshift(d.pop())}),
u(c,"afterColorizeItem",function(a){a.visible&&a.item.legendColor&&a.item.legendSymbol.attr({fill:a.item.legendColor})}),u(c,"afterUpdate",function(a,c,b){this.chart.colorAxis[0]&&this.chart.colorAxis[0].update({},b)}))})(m);(function(b){var m=b.defined,k=b.each,v=b.noop;b.colorPointMixin={isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==this.value},setVisible:function(b){var e=this,h=b?"show":"hide";k(["graphic","dataLabel"],function(b){if(e[b])e[b][h]()})},setState:function(e){b.Point.prototype.setState.call(this,
e);this.graphic&&this.graphic.attr({zIndex:"hover"===e?1:0})}};b.colorSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:v,parallelArrays:["x","y","value"],colorKey:"value",translateColors:function(){var b=this,l=this.options.nullColor,h=this.colorAxis,m=this.colorKey;k(this.data,function(e){var c=e[m];if(c=e.options.color||(e.isNull?l:h&&void 0!==c?h.toColor(c,e):e.color||b.color))e.color=
c})},colorAttribs:function(b){var e={};m(b.color)&&(e[this.colorProp||"fill"]=b.color);return e}}})(m);(function(b){var m=b.colorPointMixin,k=b.each,v=b.merge,e=b.noop,l=b.pick,h=b.Series,t=b.seriesType,q=b.seriesTypes;t("heatmap","scatter",{animation:!1,borderWidth:0,dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}\x3cbr/\x3e"},states:{hover:{halo:!1,
brightness:.2}}},v(b.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){var b;q.scatter.prototype.init.apply(this,arguments);b=this.options;b.pointRange=l(b.pointRange,b.colsize||1);this.yAxis.axisPointRange=b.rowsize||1},translate:function(){var b=this.options,e=this.xAxis,h=this.yAxis,m=b.pointPadding||0,n=function(a,b,c){return Math.min(Math.max(b,a),c)};this.generatePoints();k(this.points,function(a){var c=(b.colsize||
1)/2,f=(b.rowsize||1)/2,p=n(Math.round(e.len-e.translate(a.x-c,0,1,0,1)),-e.len,2*e.len),c=n(Math.round(e.len-e.translate(a.x+c,0,1,0,1)),-e.len,2*e.len),g=n(Math.round(h.translate(a.y-f,0,1,0,1)),-h.len,2*h.len),f=n(Math.round(h.translate(a.y+f,0,1,0,1)),-h.len,2*h.len),k=l(a.pointPadding,m);a.plotX=a.clientX=(p+c)/2;a.plotY=(g+f)/2;a.shapeType="rect";a.shapeArgs={x:Math.min(p,c)+k,y:Math.min(g,f)+k,width:Math.abs(c-p)-2*k,height:Math.abs(f-g)-2*k}});this.translateColors()},drawPoints:function(){q.column.prototype.drawPoints.call(this);
k(this.points,function(b){b.graphic.css(this.colorAttribs(b))},this)},animate:e,getBox:e,drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,alignDataLabel:q.column.prototype.alignDataLabel,getExtremes:function(){h.prototype.getExtremes.call(this,this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;h.prototype.getExtremes.call(this)}}),b.extend({haloPath:function(b){if(!b)return[];var c=this.shapeArgs;return["M",c.x-b,c.y-b,"L",c.x-b,c.y+c.height+b,c.x+c.width+b,c.y+c.height+b,c.x+
c.width+b,c.y-b,"Z"]}},m))})(m)});
