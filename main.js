// --- System configuration variables ---
// Everything that you can customize is here!
// Anything that you should customize is given priority.

//cgSitename = 'JavaScript CMS';
//cgTheme = 'default';
//cgHomepageTitle = 'Main';


// STOP! No configuration or changes should be made below this point!
// This is the core software of the engine.
// All custom code and plugin code should go above this point.
// Editing core code will create major trouble should you choose to
// update your site.

console.log('Starting JavaScript CMS');
document.title = cgSitename;
var cgDocHead = document.getElementsByTagName('head')[0];

// Get the query string
const cgUrlData = new URLSearchParams(window.location.search);
// Get the title of the requested page
var cgReqTitle = cgUrlData.get('title');
console.log('Page title from URL: ' + cgReqTitle);

// This code loads the CSS theme from the relevant stylesheet
var cgCssLink = document.createElement('link');
cgCssLink.id = 'cssTheme';
cgCssLink.rel = 'stylesheet';
cgCssLink.type = 'text/css';
cgCssLink.href = 'themes/' + cgTheme + '/' + cgTheme + '.css';
cgCssLink.media = 'all';
cgDocHead.appendChild(cgCssLink);

// Add the site name to #titleHeading at the top of the page
document.getElementById('titleHeading').innerHTML = cgSitename;

// Insert homepage link
document.getElementById('topHomeLink').innerHTML = '<a href="' + cgWebPath + '">' + cgHomeLinkText + '</a>';

// This function generates the homepage of the site
function generateHomepage() {
    var rawList = httpGet('sysmsg/AllPages.dat');
    var pageContent = 'This is the homepage!';
    document.getElementById('pageContent').innerHTML = pageContent;
}

// Generate pages from the title
function generatePage(pageTitle) {
    var markdown = httpGet('pages/' + pageTitle + '.md');
    document.getElementById('pageContent').innerHTML = marked(markdown);
}

// Add page footer
var cgPageFooter = '<div id="footerColLeft" class="column-float-left">\
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Rocket-icon.svg"></img>\
    </div>\
    <div class="column-float-left">\
    <span id="pwrByLine">Powered by Raketa</span><br>\
    <span id="crtByLine">Created by r3d_f0x and contributors</span><br>\
    <span id="dwnFromLine"><a href="https://github.com/r3d-f0x/Raketa">Download from Github to power your own creation!\
    </a></span>\
    </div>\
    <div id="footerColRight" class="column-float-right">\
    <p class="footerColP">Raketa is a powerful tool to easily create your websites using markdown.  It operates \
    entirely on client-side scripting and coding languages to allow you to take advantage of reliable \
    free hosting platforms.</p>\
    </div>\
    ';
document.getElementById('pageFooter').innerHTML = cgPageFooter;


// Setup page generation from the URL
if (cgReqTitle == null) {
    generatePage(cgHomepageTitle);
} else if (cgReqTitle == cgHomepageTitle) {
    generatePage(cgHomepageTitle);
} else {
    generatePage(cgReqTitle);
}

// Stolen from StackOverflow: https://stackoverflow.com/a/4033310
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

// Load sample content, create way to display pages later.
//var markdown = httpGet('pages/sample.md');
//document.getElementById('sampleContent').innerHTML = marked(markdown);