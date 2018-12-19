
// 加载商品信息

function loadGoods() {

    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

<<<<<<< HEAD
    xmlhttp.open("GET","product", true);
    xmlhttp.send(null);
    xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

        dataArray = xmlhttp.responseText;
        dataArray = JSON.parse(dataArray);

        var html = "";
        for (let data of dataArray) {
            html += '<div>\
                    <a href="detail.htm?name=id">\
            <img src="' + data.pimage + '" alt\
                ="商品图片">\
            <div>' + data.shop_price + '</div>'
                + '<div>' + data.pname + '</div>';
        }
        document.getElementById("goods-list").innerHTML = html;
    }

  }
=======
    xmlhttp.open("GET", "product", true);
    xmlhttp.send(null);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            dataArray = xmlhttp.responseText;
            dataArray = JSON.parse(dataArray);

            var html = "";
            for (let data of dataArray) {
                html += '<div>\
                    <a href="detail.htm?name=id">\
            <img src="' + data.pimage + '" alt\
                ="商品图片" width="150" height="150">\
            <div>' + data.shop_price + '</div>'
                    + '<div>' + data.pname + '</div>';
            }
            document.getElementById("goods-list").innerHTML = html;
        }

    }
>>>>>>> dev1
}

function getParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
$('#pass').keyup(function () {
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{6,}).*", "g");
    if (false == enoughRegex.test($(this).val())) {
        $('#passstrength').html('密码至少6位');
    } else {
        if (strongRegex.test($(this).val())) {
            $('#passstrength').className = 'ok';
            $('#passstrength').html('密码强度：强');
        } else if (mediumRegex.test($(this).val())) {
            $('#passstrength').className = 'alert';
            $('#passstrength').html('密码强度：中');
        } else {
            $('#passstrength').className = 'weak';
            $('#passstrength').html('密码强度：弱');
        }
    }
});

<<<<<<< HEAD




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
=======
$('#pass,#checkpass').keyup(function () {
    if ($('#checkpass').val() != '' && $('#checkpass').val() != $('#pass').val()) {
        $('#diffpass').html('两次密码输入不一致');
    } else {
        $('#diffpass').html("");
    }
})


$('#submit').click(function() {
    var enoughRegex = new RegExp("(?=.{6,}).*", "g");
    if (false == enoughRegex.test($('#pass').val()) || $('#checkpass').val() != $('#pass').val()) {
        return false;
    }
       
        else return true;
})
>>>>>>> dev1

// 加载新闻
<<<<<<< HEAD
// 加载帖子
=======
$('#all-news').onload(function() {
    
}) 
$('#goods-list a').onclick(function() {
    
})



// 加载帖子
>>>>>>> dev1
