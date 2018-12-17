<?php
error_reporting(E_ALL);
ini_set('display_errors','On');

# some settings of POST vars
if (!isset($_POST['send']))  $send = ''; else $send = $_POST['send'];
if (!isset($_POST['toText'])) $toText = ''; else $toText = $_POST['toText'];
if (!isset($_POST['ccText'])) $ccText = ''; else $ccText = $_POST['ccText'];
if (!isset($_POST['subjectText'])) $subjectText = ''; else $subjectText = $_POST['subjectText'];
if (!isset($_POST['msgText'])) $msgText = ''; else $msgText = $_POST['msgText'];
if (!isset($_POST['ccText'])) $ccText = ''; else $ccText = $_POST['ccText'];
if (!isset($_POST['bccText'])) $bccText = ''; else $bccText = $_POST['bccText'];
if (!isset($_POST['nameText'])) $nameText = ''; else $nameText = $_POST['nameText'];
if (!isset($_POST['fromText'])) $fromText = ''; else $fromText = $_POST['fromText'];

if ($send == "") {
    $title="Test Email Page";
    $announce="---";
}
else {
	if($fromText === "") die("No name!");
  $toText="ju3tin@hotmail.co.uk";
	$title="Test Email Page";
  $announce="Your Message has been Sent!";
	$header = "From: ".$fromText."\r\n";
//	$header .= "Cc: ".$ccText."\n";
	$header .= "Reply-To : ".$fromText."\r\n";
	$header .= "Return-Path : ".$fromText."\r\n";
	$header .= "X-Mailer: PHP\r\n";
	$header .= "MIME-Version: 1.0\r\n";
	$header .= "Content-Type: text/plain; charset=iso-8859-1\r\n";
//	ini_set(sendmail_from,$fromText);  
	mail($toText, $subjectText, $msgText, $header, '-f'.$fromText);
//	ini_restore(sendmail_from);
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
 "http://www.w3.org/TR/html4/loose.dtd">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title><?php echo($title)?></title>
<style type="text/css">
<!-- 
A:link { color: #999999; }
A:visited { color: #999999; }
A:hover {color: #0099ff;}
-->
</style>
<script type="text/javascript">
<!--
function check()
{
var at=document.getElementById("fromText").value.indexOf("@");
var eml=document.getElementById("fromText").value;
var nam=document.getElementById("nameText").value;
var alerttxt="";
var submitOK="true";

if (eml.length < 5 || at == -1)
    {
    alerttxt=alerttxt+"Please enter a valid e-mail address!\r\n";
    submitOK="false"
    //return false;
    }
if (nam.length < 3)
    {
    alerttxt=alerttxt+"Please enter your name.\r\n";
    submitOK="false"
    //return false;
    }
if (submitOK=="false")
    {
    alert(alerttxt);
    return false;
    }
