<?php
session_start();
$appId="wxa5c196f7ec4b5df9";//公众号id
$appSecret="公众号秘钥";//公众号秘钥
$url="https://api.weixin.qq.com/cgi-bin/";//微信接口
$tokenUrl=$url."token?grant_type=client_credential&appid=$appId&secret=$appSecret";//获取token的接口
$ticketUrl=$url."ticket/getticket?type=jsapi&access_token=";//获取ticket的接口

$fileName="tokenAndTicket";//保存token和ticket的文件名


$action=$_GET["action"];
switch ($action) {
	case "ticket"://获取jsapi_ticket
		returnTicket();
		break;
	default://获取jsapi_ticket
		returnTicket();
		break;
}



function returnTicket(){
	if(file_exists($GLOBALS['fileName'])){//检查一下文件，是否有ticket
		$tokenAndTicket=file_get_contents($GLOBALS['fileName']);
		$json=json_decode($tokenAndTicket,true);
		$expires=time()-$json["time"];
		if($expires<5400){//检查是否过期,微信给的是7200秒过期，预防万一，我们提早半个小时
			echo '{"ticket":"'.$json["ticket"].'","expires":'.$expires.'}';
			return;
		}
	}
	
	//已过期(或者没有这个文件)则重新获取
	$token=_getToken();		//先重新获取token
	$res=_getHttp($GLOBALS['ticketUrl'].$token,"","GET");	//重新获取ticket

	$json=json_decode($res,true);
	//保存在文件里
	$json=array("token"=>$token,"ticket"=>$json["ticket"],"time"=>time());
	file_put_contents($GLOBALS['fileName'],json_encode($json));
	echo '{"ticket":"'.$json["ticket"].'","expires":'.$json["expires"].'}';
	return;
}

function _getToken(){
	//获取token
	$res=_getHttp($GLOBALS['tokenUrl'],"","GET");
	$json=json_decode($res,true);
	return $json["access_token"];
}

function _getHttp($url,$type){//发送http请求
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);//需要获取的URL地址，也可以在curl_init()函数中设置。
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);//将curl_exec()获取的信息以文件流的形式返回，而不是直接输出。
    
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);//禁用后cURL将终止从服务端进行验证。
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);//与上面设置连体
    
    $response = curl_exec($ch);//执行设置好的会话,成功时返回 TRUE，或者在失败时返回 FALSE。 然而，如果 CURLOPT_RETURNTRANSFER选项被设置，函数执行成功时会返回执行的结果，失败时返回 FALSE 。
    $error = curl_error($ch);//返回错误信息
    curl_close($ch);//关闭一个cURL会话
    return $response;
}