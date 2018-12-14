
// 加载商品信息
function loadGoods() {

    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

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
}

$("input").blur(function(){ 
    $(this).css("background-color","#ffffff"); 
  });
$('#pass').keyup(function(e) {
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{6,}).*", "g");
    if (false == enoughRegex.test($(this).val())) {
    $('#passstrength').html('More Characters');
    } else if (strongRegex.test($(this).val())) {
    $('#passstrength').className = 'ok';
    $('#passstrength').html('Strong!');
    } else if (mediumRegex.test($(this).val())) {
    $('#passstrength').className = 'alert';
    $('#passstrength').html('Medium!');
    } else {
    $('#passstrength').className = 'error';
    $('#passstrength').html('Weak!');
    }
    return true;
   });


// 登录请求
// 注册请求
// 加载新闻
// 加载帖子