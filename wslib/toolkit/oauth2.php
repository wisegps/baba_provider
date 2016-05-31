<?php
/**
 * Created by PhpStorm.
 * User: 1
 * Date: 14-7-12
 * Time: 下午1:55
 */
if(isset($_GET['code'])){
    //echo $_GET['code'];
    $code = $_GET['code'];
    $userinfo = getUserInfo($code);
	if(isset($_GET['state']))
		$userinfo["state"]=$_GET['state'];
    //echo "nickname:".$userinfo["nickname"];
}else{
    echo 'No code';
    exit();
}

function getUserInfo($code){
    $appid = "wxa5c196f7ec4b5df9";
    $appsecret = "e89542d7376fc479aac35706305fc23f";
    $access_token = "";

    // 根据code获取access_token
    $access_token_url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=$appid&secret=$appsecret&code=$code&grant_type=authorization_code";
//    echo $access_token_url;
    $access_token_json = https_request($access_token_url);
    $access_token_array = json_decode($access_token_json, true);
    $access_token = $access_token_array['access_token'];
//    echo "access_token:$access_token";
    $openid = $access_token_array['openid'];
	
	if($_GET['state']=='getOpenId'){//如果只是获取openid，则就此返回
		$arr=array("openid"=>$openid);
		return $arr;
	}
		
    // 根据access token获取用户信息
    $userinfo_url = "https://api.weixin.qq.com/sns/userinfo?access_token=$access_token&openid=$openid";
    $userinfo_json = https_request($userinfo_url);
    $userinfo_array = json_decode($userinfo_json, true);
	if($_GET['state']=='sso_login'){//进行登录
		$login_info=sso_login($userinfo_array["openid"]);
		$login_info['sso_login']='sso_login';
	}
		
	
	if($login_info){
		$userinfo_array=array_merge($userinfo_array,$login_info);
	}
	$userinfo_array["open_id"]=$userinfo_array["openid"];
    return $userinfo_array;
}

function sso_login($login_id){
	$d=date('Y-m-d H:i:s',strtotime('+8 hour'));
	$D=date('Y-m-d%20H:i:s',strtotime('+8 hour'));
	$str='21fb644e20c93b72773bf0f8d0905052app_key9410bc1cbfa8f44ee5f8a331ba8dd3fcformatjsonlogin_id'.$login_id.'methodwicare.user.sso_loginsign_methodmd5timestamp'.$D.'v1.0weixin_appsecrete89542d7376fc479aac35706305fc23f21fb644e20c93b72773bf0f8d0905052';
	$sing=strtoupper(md5($str));
	
	$url = "http://o.bibibaba.cn/router/rest?app_key=9410bc1cbfa8f44ee5f8a331ba8dd3fc&v=1.0&format=json&sign_method=md5&method=wicare.user.sso_login&weixin_appsecret=e89542d7376fc479aac35706305fc23f&timestamp=".$D."&login_id=".$login_id."&sign=".$sing;
    $info_json = https_request($url);
    $info_array = json_decode($info_json, true);
	return $info_array;
}

function https_request($url){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $data = curl_exec($curl);
    if(curl_errno($curl)){
        return 'ERROR'.curl_error($curl);
    }
    curl_close($curl);
    return $data;
}

setcookie("_wx_user_", json_encode($userinfo), time()+86400,"/",$_SERVER['HTTP_HOST']);
$cookie_url=$_COOKIE["__login_redirect_uri__"];
$u_data="";
foreach($userinfo as $x=>$x_value) {
  $u_data=$u_data."&".$x."=".$x_value;
}
if(strpbrk($cookie_url,"?"))
	$url=$cookie_url.$u_data;
else{
	$url=$cookie_url."?".substr($u_data,1);
}
header("Location: ".$url);
exit;
?>

<!DOCTYPE html>
<html class="um landscape min-width-240px min-width-320px min-width-480px min-width-768px min-width-1024px">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width, maximum-scale=1, user-scalable=no"  />
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1" media="(device-height: 568px)" />
    <title>用户信息</title>
</head>

<body class="um-vp c-wh" ontouchstart>
<div class="container">
    <!-- 内容 -->
    <p class="content">
        昵称：<?php echo $userinfo["nickname"]; ?><br>
        性别：<?php echo $userinfo["sex"]; ?><br>
        省份：<?php echo $userinfo["province"]; ?><br>
        城市：<?php echo $userinfo["city"]; ?><br>
        特权：<?php echo $userinfo["privilege"]; ?><br>
        <?php print_r($userinfo); ?>
    </p>
    <p>
    	cookie回调地址：<?php echo urldecode($_COOKIE["__login_redirect_uri__"]); ?><br>
    	openid：<?php echo $userinfo["openid"]; ?><br>
    	头像地址：<?php echo $userinfo["headimgurl"]; ?><br>
    	最后的跳转地址：<?php echo $url; ?><br>
    		<br>
    			<?php echo json_encode($userinfo); ?>
    			
    </p>
</div>
</body>
</html>