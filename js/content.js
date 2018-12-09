// 加载商品信息
function loadGoods() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            dataArray = xmlhttp.responseText;
            dataArray = JSON.parse(dataArray);
            html = ""
            for(let data in dataArray) {
                html += '<div>\
                <a href="detail.htm?name=pid">\
                <img src="' + data[pimage] +'" alt\
                ="商品图片">\
                <div>' + data[shop-price] + '</div>'
                + '<div>' + data[pname] + '</div>';
            }
            document.getElementById('goods-list').innerHTML(html);
        }
    xmlhttp.open("GET", 'goods-list.json', true);
    xmlhttp.send();
}


// <html>
// <head>
// <title>JS判断密码强度</title>
// <script language=javascript>  
// 	//判断输入密码的类型  
// 	function CharMode(iN){  
// 		if (iN>=48 && iN <=57) //数字  
// 			return 1;  
// 		if (iN>=65 && iN <=90) //大写  
// 			return 2;  
// 		if (iN>=97 && iN <=122) //小写  
// 			return 4;  
// 		else  
// 			return 8;   
// 	}
// 	//bitTotal函数  
// 	//计算密码模式  
// 	function bitTotal(num){  
// 		modes=0;  
// 		for (i=0;i<4;i++){  
// 			if (num & 1) modes++;  
// 			num>>>=1;  
// 		}
// 		return modes;  
// 	}
// 	//返回强度级别  
// 	function checkStrong(sPW){  
// 		if (sPW.length<6)  
// 			return 0; //密码太短，不检测级别
// 		Modes=0;  
// 		for (i=0;i<sPW.length;i++){  
// 			//密码模式  
// 			Modes|=CharMode(sPW.charCodeAt(i));  
// 		}
// 		return bitTotal(Modes);  
// 	}
  
// 	//显示颜色  
// 	function pwStrength(pwd){  
// 		Dfault_color="#eeeeee";		//默认颜色
// 		L_color="#FF0000";		//低强度的颜色，且只显示在最左边的单元格中
// 		M_color="#FF9900";		//中等强度的颜色，且只显示在左边两个单元格中
// 		H_color="#33CC00";		//高强度的颜色，三个单元格都显示
// 		if (pwd==null||pwd==''){  
// 			Lcolor=Mcolor=Hcolor=Dfault_color;
// 		}  
// 		else{  
// 			S_level=checkStrong(pwd);  
// 			switch(S_level) {  
// 			case 0:  
// 				Lcolor=Mcolor=Hcolor=Dfault_color;
// 				break;
// 			case 1:  
// 				Lcolor=L_color;
// 				Mcolor=Hcolor=Dfault_color;
// 				break;  
// 			case 2:  
// 				Lcolor=Mcolor=M_color;  
// 				Hcolor=Dfault_color;  
// 				break;  
// 			default:  
// 				Lcolor=Mcolor=Hcolor=H_color;  
// 		}  
// 	}  
// 	document.getElementById("strength_L").style.background=Lcolor;  
// 	document.getElementById("strength_M").style.background=Mcolor;  
// 	document.getElementById("strength_H").style.background=Hcolor;  
// 	return;
// }
// </script>
// </head>
// <body>
// <form name=form1 action="" >
// 	<table width="250" border="0" cellpadding=2" bordercolor="#eeeeee" style='display:inline'>
// 		<tr>
// 			<td width="40%" align="right">密码:</td>
// 			<td colspan="3" align="left">
// 				<input type=password size=20 onKeyUp=pwStrength(this.value) onBlur=pwStrength(this.value)>
// 			</td>
// 		</tr> 
// 		<tr align="center">
// 			<td width="40%" align="right">密码强度:</td>
// 			<td width="20%" id="strength_L" bgcolor="#eeeeee">弱</td>  
// 			<td width="20%" id="strength_M" bgcolor="#eeeeee">中</td>  
// 			<td width="20%" id="strength_H" bgcolor="#eeeeee">强</td>  
// 		</tr>
// 	</table>
// </form>
// </body>
// </html>

// 判断密码强度
// 登录请求
// 注册请求
// 加载新闻
// 加载帖子