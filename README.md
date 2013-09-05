# SVTLE RESPONSIVE THEME

pelican-svbtle-responsive is a responsive theme for [Pelican](http://getpelican.com), it is my hack of a svbtle-like theme.

## DEMO

You can see the [theme in action](http://saurabh-kumar.com/).

## FEATURES

- responsive
- syntax highlighting for pre blocks
- supports google analytics
- custom list of links

## KNOWN ISSUES

- no IE testing
- no custom menu

## INSTALL

Clone the [repository](https://github.com/theskumar/pelican-svbtle-responsive), edit your `pelicanconf.py` and modify the `THEME` variable to make it point to the downloaded theme location.

## PELICANCONF.PY

Supports a number of common global variables but patches are welcomed if you need better support.

- `GOOGLE_ANALYTICS` your UA-XYZ code

- `USER_LOGO_URL` you don't need to replace the logo placeholder, instead put your logo in content/images/your_logo.png and make this point to `SITEURL + '/static/images/your_logo.png'`

- `DISQUS_SITENAME` set this to enable disqus comments in articles

- `COLLAPSE_COMMENTS` set to `True` to have article comments hidden by default. Clicking on the `comments` link will toggle visibility.

- `TAGLINE` some text rendered right below the logo

- `INTERNET_DEFENSE_LEAGUE` set this to `True` if you want to enable the [Internet Defense League](http://internetdefenseleague.org) code


## MODIFICATIONS

- Accent color can be changed by editing `@accent` in `./static/css/style.less`.
- A different Pygmentize theme can be used by editing `./Makefile` and running `make pygments`.

## AUTHOR

pelican-svbtle-responsive is authored by Saurabh Kumar ([@thes_kumar](http://twitter.com/thes_kumar))

It is a fork of [pelican-svbhack](https://github.com/giulivo/pelican-svbhack) authored by Giulio Fidente.

## LICENSE

Released under MIT License, full details in `LICENSE` file.
