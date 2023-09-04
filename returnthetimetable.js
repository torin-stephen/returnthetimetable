// ==UserScript==
// @name     RETURN THE TIMETABLE
// @include  https://vle.bromcomcloud.com/*
// @icon     https://vle.bromcomcloud.com/favicon.ico
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant    GM_addStyle
// ==/UserScript==
//--- The @grant directive is used to restore the proper sandbox.

$("#PagesUL").append ( `
    <li class="">
    <a data-menuname="Timetable" href="/Timetable">
        <span class="icon"><i class="fa fa-list-alt"></i></span>
        <span class="text">Timetable</span>
    </a>
    </li>
` );

