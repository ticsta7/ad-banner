
//修改微博发布栏默认内容+上方默认文字
  $("#v6_pl_content_publishertop .W_input").text('希望所有的美好都如期而至')
  $('em.spac1').text('写点什么');
  $('em.spac2').text('吧');
  $('em.spac3').text('总有人会听');
  $('em.spac4').text('。');


//下面2条要在页面渲染之前执行，才能生效
var hearderImg=$('.headpic .W_face_radius').attributes.src.value;  //获取头像地址
$('.gn_name .W_ficon').innerHTML=(` < img class='W_face_radius' src='https://tvax4.sinaimg.cn/crop.0.0.1080.1080.180/006DTvpjly8g5a8c61g0dj30u00u0juj.jpg?KID=imgbed,tva&Expires=1568465335&ssig=NEl8NIzom3' width='26' height='26'>`)   //替换头像icon
	
	
