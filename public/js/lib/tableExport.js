!function(e){e.fn.extend({tableExport:function(t){function n(e){return"true"==i.htmlContent?content_data=e.html().trim():content_data=e.text().trim(),"true"==i.escape&&(content_data=escape(content_data)),content_data}var i={separator:",",ignoreColumn:[],tableName:"yourTableName",type:"csv",pdfFontSize:14,pdfLeftMargin:20,escape:"true",htmlContent:"false",consoleLog:"false"},t=e.extend(i,t),o=this;if("csv"==i.type||"txt"==i.type){var a="";e(o).find("thead").find("tr").each(function(){a+="\n",e(this).filter(":visible").find("th").each(function(t){"none"!=e(this).css("display")&&-1==i.ignoreColumn.indexOf(t)&&(a+='"'+n(e(this))+'"'+i.separator)}),a=e.trim(a),a=e.trim(a).substring(0,a.length-1)}),e(o).find("tbody").find("tr").each(function(){a+="\n",e(this).filter(":visible").find("td").each(function(t){"none"!=e(this).css("display")&&-1==i.ignoreColumn.indexOf(t)&&(a+='"'+n(e(this))+'"'+i.separator)}),a=e.trim(a).substring(0,a.length-1)}),"true"==i.consoleLog&&console.log(a);var s="base64,"+e.base64.encode(a);window.open("data:application/"+i.type+";filename=exportData;"+s)}else if("sql"==i.type){var a="INSERT INTO `"+i.tableName+"` (";e(o).find("thead").find("tr").each(function(){e(this).filter(":visible").find("th").each(function(t){"none"!=e(this).css("display")&&-1==i.ignoreColumn.indexOf(t)&&(a+="`"+n(e(this))+"`,")}),a=e.trim(a),a=e.trim(a).substring(0,a.length-1)}),a+=") VALUES ",e(o).find("tbody").find("tr").each(function(){a+="(",e(this).filter(":visible").find("td").each(function(t){"none"!=e(this).css("display")&&-1==i.ignoreColumn.indexOf(t)&&(a+='"'+n(e(this))+'",')}),a=e.trim(a).substring(0,a.length-1),a+="),"}),a=e.trim(a).substring(0,a.length-1),a+=";","true"==i.consoleLog&&console.log(a);var s="base64,"+e.base64.encode(a);window.open("data:application/sql;filename=exportData;"+s)}else if("json"==i.type){var d=[];e(o).find("thead").find("tr").each(function(){var t=[];e(this).filter(":visible").find("th").each(function(o){"none"!=e(this).css("display")&&-1==i.ignoreColumn.indexOf(o)&&t.push(n(e(this)))}),d.push(t)});var r=[];e(o).find("tbody").find("tr").each(function(){var t=[];e(this).filter(":visible").find("td").each(function(o){"none"!=e(this).css("display")&&-1==i.ignoreColumn.indexOf(o)&&t.push(n(e(this)))}),r.push(t)});var l=[];l.push({header:d,data:r}),"true"==i.consoleLog&&console.log(JSON.stringify(l));var s="base64,"+e.base64.encode(JSON.stringify(l));window.open("data:application/json;filename=exportData;"+s)}else if("xml"==i.type){var f='<?xml version="1.0" encoding="utf-8"?>';f+="<tabledata><fields>",e(o).find("thead").find("tr").each(function(){e(this).filter(":visible").find("th").each(function(t){"none"!=e(this).css("display")&&-1==i.ignoreColumn.indexOf(t)&&(f+="<field>"+n(e(this))+"</field>")})}),f+="</fields><data>";var c=1;e(o).find("tbody").find("tr").each(function(){f+='<row id="'+c+'">';var t=0;e(this).filter(":visible").find("td").each(function(o){"none"!=e(this).css("display")&&-1==i.ignoreColumn.indexOf(o)&&(f+="<column-"+t+">"+n(e(this))+"</column-"+t+">"),t++}),c++,f+="</row>"}),f+="</data></tabledata>","true"==i.consoleLog&&console.log(f);var s="base64,"+e.base64.encode(f);window.open("data:application/xml;filename=exportData;"+s)}else if("excel"==i.type||"doc"==i.type||"powerpoint"==i.type){var h="<table>";e(o).find("thead").find("tr").each(function(){h+="<tr>",e(this).filter(":visible").find("th").each(function(t){"none"!=e(this).css("display")&&-1==i.ignoreColumn.indexOf(t)&&(h+="<td>"+n(e(this))+"</td>")}),h+="</tr>"});var c=1;e(o).find("tbody").find("tr").each(function(){h+="<tr>";var t=0;e(this).filter(":visible").find("td").each(function(o){"none"!=e(this).css("display")&&-1==i.ignoreColumn.indexOf(o)&&(h+="<td>"+n(e(this))+"</td>"),t++}),c++,h+="</tr>"}),h+="</table>","true"==i.consoleLog&&console.log(h);var p="<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:"+i.type+"' xmlns='http://www.w3.org/TR/REC-html40'>";p+="<head>",p+="<!--[if gte mso 9]>",p+="<xml>",p+="<x:ExcelWorkbook>",p+="<x:ExcelWorksheets>",p+="<x:ExcelWorksheet>",p+="<x:Name>",p+="{worksheet}",p+="</x:Name>",p+="<x:WorksheetOptions>",p+="<x:DisplayGridlines/>",p+="</x:WorksheetOptions>",p+="</x:ExcelWorksheet>",p+="</x:ExcelWorksheets>",p+="</x:ExcelWorkbook>",p+="</xml>",p+="<![endif]-->",p+="</head>",p+="<body>",p+=h,p+="</body>",p+="</html>";var s="base64,"+e.base64.encode(p);window.open("data:application/vnd.ms-"+i.type+";filename=exportData.doc;"+s)}else if("png"==i.type)html2canvas(e(o),{onrendered:function(e){var t=e.toDataURL("image/png");window.open(t)}});else if("pdf"==i.type){var u=new jsPDF("p","pt","a4",!0);u.setFontSize(i.pdfFontSize);var m=i.pdfLeftMargin;e(o).find("thead").find("tr").each(function(){e(this).filter(":visible").find("th").each(function(t){if("none"!=e(this).css("display")&&-1==i.ignoreColumn.indexOf(t)){var o=m+50*t;u.text(o,20,n(e(this)))}})});var x=20,b=1,g=0;e(o).find("tbody").find("tr").each(function(t){rowCalc=t+1,rowCalc%26==0&&(u.addPage(),b++,x+=10),g=x+10*rowCalc-280*(b-1),e(this).filter(":visible").find("td").each(function(t){if("none"!=e(this).css("display")&&-1==i.ignoreColumn.indexOf(t)){var o=m+50*t;u.text(o,g,n(e(this)))}})}),u.output("datauri")}}})}(jQuery);