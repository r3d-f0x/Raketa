# Raketa

Raketa is a fully client-side content management system that can be deployed for easily managing pages.  It can be used as a wiki in connection with a git repository.  Should you choose this option Github allows editing through the website, as does the Gitlab application which is fairly easy to install using an automated method.  This content engine is designed to create traditional sites as well and allow web creators to get new sites up and running by having a powerful foundation from which they can write their sites in markdown.

**Mastodon:** @r3df0x@7.62x54r.ru

## Features

* Relatively easy theme system.  Anyone with a basic understanding of CSS can create a new theme for their site.
* (Planned) Easy plugin creation and management system for adding functionality and custom code.
* (Planned) Embedding of third party comments.  This will be done initially through Disqus but others may be added.
* (Planned) Blog-style list of pages on the front page and an appropriate way of sorting them using meta data.
* (Planned) Allow metadata to be ented into pages by the author.
* (Planned) Customizeable top menu and an optional right-side bar
* (Planned) Create a system to customize the copyright with options for Creative Commons licenses.

## Installation

Download the files for Raketa to the location of your site.  In the root of the installation, create `config.js` and define any variables to customize your site.

At a minimum you should define the following variables:

`cgSitename = 'Your site name';`

`cgOwner = 'Your name or username';`

`cgCopyrightYear = '2021';`

It is also advisable to change the home page since it could be overwritten depending on how you update your site.

`cgHomepageTitle = 'home';`

## Known issues

* Sometimes when loading the page there is a bug where the default value of variables is displayed instead of the configured value.
* `cgCopyright` is automatically reset in `main.js` since 

## Customizing Raketa

### Adding small code changes without a new theme or plugin

The file `user.css` can be used to add styles or make changes without creating a new theme.  All styles applied here will be added over the current theme.

Small JavaScript code features can be added to `config.js` since it is a fully functional JavaScript file.

### Creating a new theme

In order to create a theme, you need to create a directory inside the `themes` directory with the name of your theme and inside of there a file with the same name ending in `.css`.  The directory and file must have the same name and however the name is written will be the name of your theme.  If you aren't experienced with CSS then I suggest that you copy the directory of an existing theme and change the names of the directory and file to whatever you want.  Doing this will give you a starting point from which you can modify the theme however you like.

Once you have a functional theme you can edit `config.js` and set the variable `cgTheme` to the name of your theme so it will be used on your site.

### Creating a new plugin

To create a new plugin, decide on a name for your plugin and create a directory under the `plugins` directory with that name followed by a file inside it with the same name and ending in `.js`.  Write the code of your plugin in that file.

After creating or downloading a plugin, go to `config.js` and add `cfLoadPlugin('PluginName');` to install the plugin.

## Consideration

### Disqus

Pros:
* It is very widespread and used on many sites.  It is likely that visitors will have a Disqus account for commenting and will be more inclined to engage.

Cons:
* Disqus is a third party tracker.
* Most adblockers will block it and visitors will never know they are missing out on discussion.

Possible solution to adblockers:

I don't want to push visitors too hard to whitelist the site and allow a third party.

* Give visitors a periodic notice informing them of the comment section and ask them to whitelist the site.  After dismissing the notice it should be at least a week before they are reminded.