<?php

print '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
print '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" ';
print '"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> ' . "\n";
print '<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">' . "\n";

print "<head>\n";
print " <!-- Added for google.com -->\n";
print ' <meta name="verify-v1" content="uMGE6YbXWIIfGGOKu1S4rsIJf1YeKeK22AB+Bt+wmHM=" /> ' . "\n";
print " <title>Welcome to artsyvisions.com!</title>\n";
print ' <style type="text/css">' . "\n";
print '  <!-- @import "http:basic_styles.css"; -->' . "\n";
print ' </style>' . "\n";
print "</head>\n";
print "<body>\n";
include_once( 'google_analytics.php' );

print "<h1>Welcome to artsyvisions.com!</h1>\n";
print "<p>\n";
print "This site doesn't do much, except host some photos ";
print " for me and maybe someday a few of my friends.&sup1;\n";
print "</p>\n";

// print "<hr>\n";
print "<p class='centered'>\n";
print '<a href="friends/tomh/index.php">Click here';
print " to see a list of published photo batches.</a>\n";
print "</p>\n";

// print "<hr />\n";
print "<hr color='#ddbb33' />\n";
print "<p>\n";
print "&sup1;&nbsp;If you're a friend and want to post some photos here, ";
print " give me a call or drop me a line!\n";
print "</p>\n";

print "</body>\n";
print "</html>\n";

?>
