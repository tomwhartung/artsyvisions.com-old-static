// Created by iWeb 2.0.4 local-build-20110111

function createMediaStream_id2()
{return IWCreateMediaCollection("file://localhost/private/var/www/artsyvisions.com/html/friends/philleese/Contact_Sheets/Contact_Sheets_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('file://localhost/private/var/www/artsyvisions.com/html/friends/philleese/Contact_Sheets',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget10'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('file://localhost/private/var/www/artsyvisions.com/html/friends/philleese/Contact_Sheets',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(4,new IWSize(214,161),new IWSize(214,34),new IWSize(222,210),27,27,0,new IWSize(18,17)),new IWPhotoFrame([IWCreateImage('Contact_Sheets_files/ul.png'),IWCreateImage('Contact_Sheets_files/top.png'),IWCreateImage('Contact_Sheets_files/ur.png'),IWCreateImage('Contact_Sheets_files/right.png'),IWCreateImage('Contact_Sheets_files/lr.png'),IWCreateImage('Contact_Sheets_files/bottom.png'),IWCreateImage('Contact_Sheets_files/ll.png'),IWCreateImage('Contact_Sheets_files/left.png')],null,0,0.300000,130.000000,10.000000,118.000000,45.000000,147.000000,30.000000,157.000000,83.000000,251.000000,120.000000,260.000000,120.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget10',null,'widget11',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','../Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Contact_Sheets_files/Contact_SheetsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixupAllIEPNGBGs();Widget.onload();fixAllIEPNGs('../Media/transparent.gif');fixupIECSS3Opacity('id4');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
