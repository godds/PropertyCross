var async = require('async');
var exec = require('child_process').exec;
var render = require('mustache').render;
var fs = require('fs');

var CONCURRENCY_LIMIT = 5;

async.series([
  generateIcons.bind(null, "assets/icon-base-173x173.png", [
    // ["FRAMEWORK-OVERLAY", "TARGET", WIDTH],
    ["assets/frameworks/air.png", "air/src/com/propertycross/air/assets/icon16x16.png", 16],
    ["assets/frameworks/air.png", "air/src/com/propertycross/air/assets/icon32x32.png", 32],
    ["assets/frameworks/air.png", "air/src/com/propertycross/air/assets/icon36x36.png", 36],
    ["assets/frameworks/air.png", "air/src/com/propertycross/air/assets/icon48x48.png", 48],
    ["assets/frameworks/air.png", "air/src/com/propertycross/air/assets/icon57x57.png", 57],
    ["assets/frameworks/air.png", "air/src/com/propertycross/air/assets/icon72x72.png", 72],
    ["assets/frameworks/air.png", "air/src/com/propertycross/air/assets/icon114x114.png", 114],
    ["assets/frameworks/air.png", "air/src/com/propertycross/air/assets/icon128x128.png", 128],
    ["assets/frameworks/jqtouch.png", "jqtouch/www/assets/icons/36x36.png", 36],
    ["assets/frameworks/jqtouch.png", "jqtouch/www/assets/icons/48x48.png", 48],
    ["assets/frameworks/jqtouch.png", "jqtouch/www/assets/icons/72x72.png", 72],
    ["assets/frameworks/jqtouch.png", "jqtouch/www/assets/icons/96x96.png", 96],
    ["assets/frameworks/jqtouch.png", "jqtouch/www/assets/icons/icon-57.png", 57],
    ["assets/frameworks/jqtouch.png", "jqtouch/www/assets/icons/icon-72.png", 72],
    ["assets/frameworks/jqtouch.png", "jqtouch/www/assets/icons/icon-57-2x.png", 114],
    ["assets/frameworks/jqtouch.png", "jqtouch/www/assets/icons/icon-72-2x.png", 144],
    ["assets/frameworks/jquerymobile.png", "jquerymobile/www/assets/icons/36x36.png", 36],
    ["assets/frameworks/jquerymobile.png", "jquerymobile/www/assets/icons/48x48.png", 48],
    ["assets/frameworks/jquerymobile.png", "jquerymobile/www/assets/icons/72x72.png", 72],
    ["assets/frameworks/jquerymobile.png", "jquerymobile/www/assets/icons/96x96.png", 96],
    ["assets/frameworks/jquerymobile.png", "jquerymobile/www/assets/icons/icon-57.png", 57],
    ["assets/frameworks/jquerymobile.png", "jquerymobile/www/assets/icons/icon-72.png", 72],
    ["assets/frameworks/jquerymobile.png", "jquerymobile/www/assets/icons/icon-57-2x.png", 114],
    ["assets/frameworks/jquerymobile.png", "jquerymobile/www/assets/icons/icon-72-2x.png", 144],
    ["assets/frameworks/jquerymobile.png", "jquerymobile/www/assets/icons/ApplicationIcon.png", 66],
    ["assets/frameworks/jquerymobile.png", "jquerymobile/www/assets/icons/ApplicationTileIcon.png", 173],
    ["assets/frameworks/native.png", "native/android/PropertyCross/res/drawable-hdpi/ic_launcher.png", 72],
    ["assets/frameworks/native.png", "native/android/PropertyCross/res/drawable-ldpi/ic_launcher.png", 36],
    ["assets/frameworks/native.png", "native/android/PropertyCross/res/drawable-mdpi/ic_launcher.png", 48],
    ["assets/frameworks/native.png", "native/android/PropertyCross/res/drawable-xhdpi/ic_launcher.png", 96],
    ["assets/frameworks/mgwt.png", "mgwt/src/main/webapp/assets/icons/36x36.png", 36],
    ["assets/frameworks/mgwt.png", "mgwt/src/main/webapp/assets/icons/48x48.png", 48],
    ["assets/frameworks/mgwt.png", "mgwt/src/main/webapp/assets/icons/72x72.png", 72],
    ["assets/frameworks/mgwt.png", "mgwt/src/main/webapp/assets/icons/96x96.png", 96],
    ["assets/frameworks/mgwt.png", "mgwt/src/main/webapp/assets/icons/icon-57.png", 57],
    ["assets/frameworks/mgwt.png", "mgwt/src/main/webapp/assets/icons/icon-72.png", 72],
    ["assets/frameworks/mgwt.png", "mgwt/src/main/webapp/assets/icons/icon-57-2x.png", 114],
    ["assets/frameworks/mgwt.png", "mgwt/src/main/webapp/assets/icons/icon-72-2x.png", 144],
    ["assets/frameworks/native.png", "native/ios/Icon.png", 57],
    ["assets/frameworks/native.png", "native/ios/Icon@2x.png", 114],
    ["assets/frameworks/native.png", "native/ios/Property Finder/Icon.png", 57],
    ["assets/frameworks/native.png", "native/ios/Property Finder/Icon@2x.png", 114],
    ["assets/frameworks/native.png", "native/windowsphone/PropertyFinder/ApplicationIcon.png", 66],
    ["assets/frameworks/native.png", "native/windowsphone/PropertyFinder/ApplicationTileIcon.png", 173],
    ["assets/frameworks/rhomobile.png", "rhomobile/icon/icon.png", 72],
    ["assets/frameworks/rhomobile.png", "rhomobile/icon/icon57.png", 57],
    ["assets/frameworks/rhomobile.png", "rhomobile/icon/icon72.png", 72],
    ["assets/frameworks/rhomobile.png", "rhomobile/icon/icon114.png", 114],
    ["assets/frameworks/titanium.png", "titanium/Resources/android/appicon.png", 128],
    ["assets/frameworks/titanium.png", "titanium/Resources/iphone/appicon.png", 57],
    ["assets/frameworks/titanium.png", "titanium/Resources/iphone/appicon@2x.png", 114],
    ["assets/frameworks/xamarin.png", "xamarin/android/PropertyCross/Resources/drawable-hdpi/ic_launcher.png", 72],
    ["assets/frameworks/xamarin.png", "xamarin/android/PropertyCross/Resources/drawable-ldpi/ic_launcher.png", 36],
    ["assets/frameworks/xamarin.png", "xamarin/android/PropertyCross/Resources/drawable-mdpi/ic_launcher.png", 48],
    ["assets/frameworks/xamarin.png", "xamarin/android/PropertyCross/Resources/drawable-xhdpi/ic_launcher.png", 96],
    ["assets/frameworks/sencha.png", "senchatouch2/www/assets/icons/36x36.png", 36],
    ["assets/frameworks/sencha.png", "senchatouch2/www/assets/icons/48x48.png", 48],
    ["assets/frameworks/sencha.png", "senchatouch2/www/assets/icons/72x72.png", 72],
    ["assets/frameworks/sencha.png", "senchatouch2/www/assets/icons/96x96.png", 96],
    ["assets/frameworks/sencha.png", "senchatouch2/www/assets/icons/icon-57.png", 57],
    ["assets/frameworks/sencha.png", "senchatouch2/www/assets/icons/icon-72.png", 72],
    ["assets/frameworks/sencha.png", "senchatouch2/www/assets/icons/icon-57-2x.png", 114],
    ["assets/frameworks/sencha.png", "senchatouch2/www/assets/icons/icon-72-2x.png", 144],
    ["assets/frameworks/sencha.png", "senchatouch2/www/assets/icons/ApplicationIcon.png", 66],
    ["assets/frameworks/sencha.png", "senchatouch2/www/assets/icons/ApplicationTileIcon.png", 173],
    ["assets/frameworks/kendoui.png", "kendoui/www/assets/icons/36x36.png", 36],
    ["assets/frameworks/kendoui.png", "kendoui/www/assets/icons/48x48.png", 48],
    ["assets/frameworks/kendoui.png", "kendoui/www/assets/icons/72x72.png", 72],
    ["assets/frameworks/kendoui.png", "kendoui/www/assets/icons/96x96.png", 96],
    ["assets/frameworks/kendoui.png", "kendoui/www/assets/icons/icon-57.png", 57],
    ["assets/frameworks/kendoui.png", "kendoui/www/assets/icons/icon-72.png", 72],
    ["assets/frameworks/kendoui.png", "kendoui/www/assets/icons/icon-57-2x.png", 114],
    ["assets/frameworks/kendoui.png", "kendoui/www/assets/icons/icon-72-2x.png", 144],
    ["assets/frameworks/kendoui.png", "kendoui/www/assets/icons/ApplicationIcon.png", 66],
    ["assets/frameworks/kendoui.png", "kendoui/www/assets/icons/ApplicationTileIcon.png", 173],
    ["assets/frameworks/intelappframework.png", "intelappframework/www/assets/icons/36x36.png", 36],
    ["assets/frameworks/intelappframework.png", "intelappframework/www/assets/icons/48x48.png", 48],
    ["assets/frameworks/intelappframework.png", "intelappframework/www/assets/icons/72x72.png", 72],
    ["assets/frameworks/intelappframework.png", "intelappframework/www/assets/icons/96x96.png", 96],
    ["assets/frameworks/intelappframework.png", "intelappframework/www/assets/icons/icon-57.png", 57],
    ["assets/frameworks/intelappframework.png", "intelappframework/www/assets/icons/icon-72.png", 72],
    ["assets/frameworks/intelappframework.png", "intelappframework/www/assets/icons/icon-57-2x.png", 114],
    ["assets/frameworks/intelappframework.png", "intelappframework/www/assets/icons/icon-72-2x.png", 144],
    ["assets/frameworks/intelappframework.png", "intelappframework/www/assets/icons/ApplicationIcon.png", 66],
    ["assets/frameworks/intelappframework.png", "intelappframework/www/assets/icons/ApplicationTileIcon.png", 173],
    ["assets/frameworks/lungo.png", "lungo/www/assets/icons/36x36.png", 36],
    ["assets/frameworks/lungo.png", "lungo/www/assets/icons/48x48.png", 48],
    ["assets/frameworks/lungo.png", "lungo/www/assets/icons/72x72.png", 72],
    ["assets/frameworks/lungo.png", "lungo/www/assets/icons/96x96.png", 96],
    ["assets/frameworks/lungo.png", "lungo/www/assets/icons/icon-57.png", 57],
    ["assets/frameworks/lungo.png", "lungo/www/assets/icons/icon-72.png", 72],
    ["assets/frameworks/lungo.png", "lungo/www/assets/icons/icon-57-2x.png", 114],
    ["assets/frameworks/lungo.png", "lungo/www/assets/icons/icon-72-2x.png", 144],
    ["assets/frameworks/lungo.png", "lungo/www/assets/icons/ApplicationIcon.png", 66],
    ["assets/frameworks/lungo.png", "lungo/www/assets/icons/ApplicationTileIcon.png", 173],
    ["assets/frameworks/phonejs.png", "phonejs/www/assets/icons/36x36.png", 36],
    ["assets/frameworks/phonejs.png", "phonejs/www/assets/icons/48x48.png", 48],
    ["assets/frameworks/phonejs.png", "phonejs/www/assets/icons/72x72.png", 72],
    ["assets/frameworks/phonejs.png", "phonejs/www/assets/icons/96x96.png", 96],
    ["assets/frameworks/phonejs.png", "phonejs/www/assets/icons/icon-57.png", 57],
    ["assets/frameworks/phonejs.png", "phonejs/www/assets/icons/icon-72.png", 72],
    ["assets/frameworks/phonejs.png", "phonejs/www/assets/icons/icon-57-2x.png", 114],
    ["assets/frameworks/phonejs.png", "phonejs/www/assets/icons/icon-72-2x.png", 144],
    ["assets/frameworks/phonejs.png", "phonejs/www/assets/icons/ApplicationIcon.png", 66],
    ["assets/frameworks/phonejs.png", "phonejs/www/assets/icons/ApplicationTileIcon.png", 173],
    ["assets/frameworks/enyo.png", "enyo/assets/icons/36x36.png", 36],
    ["assets/frameworks/enyo.png", "enyo/assets/icons/48x48.png", 48],
    ["assets/frameworks/enyo.png", "enyo/assets/icons/72x72.png", 72],
    ["assets/frameworks/enyo.png", "enyo/assets/icons/96x96.png", 96],
    ["assets/frameworks/enyo.png", "enyo/assets/icons/icon-57.png", 57],
    ["assets/frameworks/enyo.png", "enyo/assets/icons/icon-72.png", 72],
    ["assets/frameworks/enyo.png", "enyo/assets/icons/icon-57-2x.png", 114],
    ["assets/frameworks/enyo.png", "enyo/assets/icons/icon-72-2x.png", 144],
    ["assets/frameworks/enyo.png", "enyo/assets/icons/ApplicationIcon.png", 66],
    ["assets/frameworks/enyo.png", "enyo/assets/icons/ApplicationTileIcon.png", 173],
    ["assets/frameworks/delphi.png", "delphi/assets/icons/icon-57.png", 57],
    ["assets/frameworks/delphi.png", "delphi/assets/icons/icon-57-2x.png", 114],
    ["assets/frameworks/emy.png", "emy/www/assets/icons/36x36.png", 36],
    ["assets/frameworks/emy.png", "emy/www/assets/icons/48x48.png", 48],
    ["assets/frameworks/emy.png", "emy/www/assets/icons/72x72.png", 72],
    ["assets/frameworks/emy.png", "emy/www/assets/icons/96x96.png", 96],
    ["assets/frameworks/emy.png", "emy/www/assets/icons/icon-57.png", 57],
    ["assets/frameworks/emy.png", "emy/www/assets/icons/icon-72.png", 72],
    ["assets/frameworks/emy.png", "emy/www/assets/icons/icon-57-2x.png", 114],
    ["assets/frameworks/emy.png", "emy/www/assets/icons/icon-72-2x.png", 144],
    ["assets/frameworks/emy.png", "emy/www/assets/icons/ApplicationIcon.png", 66],
    ["assets/frameworks/emy.png", "emy/www/assets/icons/ApplicationTileIcon.png", 173],
    ["assets/frameworks/neomad.png", "neomad/res/Icons/ic_launcher.png", 72],
    ["assets/frameworks/neomad.png", "neomad/res/Icons/others/app.png", 72],
    ["assets/frameworks/neomad.png", "neomad/res/Icons/metro/app.png", 173]
  ]),

  generateSplashscreens.bind(null, "assets/splashscreen-bottom-640x640.png", [
    // ["TARGET", WIDTH, HEIGHT],
    ["air/src/com/propertycross/air/assets/splash.png", 320, 480],
    ["jqtouch/www/assets/splashscreens/200x320.png", 200, 320],
    ["jqtouch/www/assets/splashscreens/320x480.png", 320, 480],
    ["jqtouch/www/assets/splashscreens/480x800.png", 480, 800],
    ["jqtouch/www/assets/splashscreens/720x1280.png", 720, 1280],
    ["jqtouch/www/assets/splashscreens/screen-iphone-portrait.png", 320, 480],
    ["jqtouch/www/assets/splashscreens/screen-iphone-portrait-2x.png", 640, 960],
    ["jquerymobile/www/assets/splashscreens/200x320.png", 200, 320],
    ["jquerymobile/www/assets/splashscreens/320x480.png", 320, 480],
    ["jquerymobile/www/assets/splashscreens/480x800.png", 480, 800],
    ["jquerymobile/www/assets/splashscreens/720x1280.png", 720, 1280],
    ["jquerymobile/www/assets/splashscreens/screen-iphone-portrait.png", 320, 480],
    ["jquerymobile/www/assets/splashscreens/screen-iphone-portrait-2x.png", 640, 960],
    ["jquerymobile/www/assets/splashscreens/SplashScreenImage.jpg", 480, 800],
    ["mgwt/src/main/webapp/assets/splashscreens/200x320.png", 200, 320],
    ["mgwt/src/main/webapp/assets/splashscreens/320x480.png", 320, 480],
    ["mgwt/src/main/webapp/assets/splashscreens/480x800.png", 480, 800],
    ["mgwt/src/main/webapp/assets/splashscreens/720x1280.png", 720, 1280],
    ["mgwt/src/main/webapp/assets/splashscreens/screen-iphone-portrait.png", 320, 480],
    ["mgwt/src/main/webapp/assets/splashscreens/screen-iphone-portrait-2x.png", 640, 960],
    ["rhomobile/app/loading.png",320, 480],
    ["rhomobile/app/loading@2x.png", 640, 960],
    ["rhomobile/app/loading-568h@2x.png", 640, 1136],
    ["rhomobile/app/loading.png",640, 960],
    ["titanium/Resources/iphone/Default.png", 320, 480],
    ["titanium/Resources/iphone/Default@2x.png", 640, 960],
    ["senchatouch2/src/resources/loading/Default.png", 320, 480],
    ["kendoui/www/assets/splashscreens/200x320.png", 200, 320],
    ["kendoui/www/assets/splashscreens/320x480.png", 320, 480],
    ["kendoui/www/assets/splashscreens/480x800.png", 480, 800],
    ["kendoui/www/assets/splashscreens/720x1280.png", 720, 1280],
    ["kendoui/www/assets/splashscreens/screen-iphone-portrait.png", 320, 480],
    ["kendoui/www/assets/splashscreens/screen-iphone-portrait-2x.png", 640, 960],
    ["kendoui/www/assets/splashscreens/SplashScreenImage.jpg", 480, 800],
    ["intelappframework/www/assets/splashscreens/200x320.png", 200, 320],
    ["intelappframework/www/assets/splashscreens/320x480.png", 320, 480],
    ["intelappframework/www/assets/splashscreens/480x800.png", 480, 800],
    ["intelappframework/www/assets/splashscreens/720x1280.png", 720, 1280],
    ["intelappframework/www/assets/splashscreens/screen-iphone-portrait.png", 320, 480],
    ["intelappframework/www/assets/splashscreens/screen-iphone-portrait-2x.png", 640, 960],
    ["intelappframework/www/assets/splashscreens/SplashScreenImage.jpg", 480, 800],
    ["lungo/www/assets/splashscreens/200x320.png", 200, 320],
    ["lungo/www/assets/splashscreens/320x480.png", 320, 480],
    ["lungo/www/assets/splashscreens/480x800.png", 480, 800],
    ["lungo/www/assets/splashscreens/720x1280.png", 720, 1280],
    ["lungo/www/assets/splashscreens/screen-iphone-portrait.png", 320, 480],
    ["lungo/www/assets/splashscreens/screen-iphone-portrait-2x.png", 640, 960],
    ["lungo/www/assets/splashscreens/SplashScreenImage.jpg", 480, 800],
    ["delphi/assets/splashscreens/320x480.png", 320, 480],
    ["delphi/assets/splashscreens/640x960.png", 640, 960],
    ["delphi/assets/splashscreens/720x1280.png", 640, 1136],
    ["phonejs/www/assets/splashscreens/200x320.png", 200, 320],
    ["phonejs/www/assets/splashscreens/320x480.png", 320, 480],
    ["phonejs/www/assets/splashscreens/480x800.png", 480, 800],
    ["phonejs/www/assets/splashscreens/720x1280.png", 720, 1280],
    ["phonejs/www/assets/splashscreens/screen-iphone-portrait.png", 320, 480],
    ["phonejs/www/assets/splashscreens/screen-iphone-portrait-2x.png", 640, 960],
    ["phonejs/www/assets/splashscreens/SplashScreenImage.jpg", 480, 800],
    ["emy/www/assets/splashscreens/200x320.png", 200, 320],
    ["emy/www/assets/splashscreens/320x480.png", 320, 480],
    ["emy/www/assets/splashscreens/480x800.png", 480, 800],
    ["emy/www/assets/splashscreens/720x1280.png", 720, 1280],
    ["emy/www/assets/splashscreens/screen-iphone-portrait.png", 320, 480],
    ["emy/www/assets/splashscreens/screen-iphone-portrait-2x.png", 640, 960],
    ["emy/www/assets/splashscreens/SplashScreenImage.jpg", 480, 800],
    ["senchatouch2/www/assets/splashscreens/200x320.png", 200, 320],
    ["senchatouch2/www/assets/splashscreens/320x480.png", 320, 480],
    ["senchatouch2/www/assets/splashscreens/480x800.png", 480, 800],
    ["senchatouch2/www/assets/splashscreens/720x1280.png", 720, 1280],
    ["senchatouch2/www/assets/splashscreens/screen-iphone-portrait.png", 320, 480],
    ["senchatouch2/www/assets/splashscreens/screen-iphone-portrait-2x.png", 640, 960],
    ["senchatouch2/www/assets/splashscreens/SplashScreenImage.jpg", 480, 800],
  ]),

  generateOther.bind(null, "assets/star.png", [
    // ["TARGET", WIDTH (, HEIGHT)],
    ["xamarin/android/PropertyCross/Resources/drawable-xhdpi/star.png", 64],
    ["xamarin/android/PropertyCross/Resources/drawable-hdpi/star.png", 48],
    ["xamarin/android/PropertyCross/Resources/drawable-mdpi/star.png", 32],
    ["native/android/PropertyCross/res/drawable-hdpi/star.png", 48],
    ["native/android/PropertyCross/res/drawable-mdpi/star.png", 32],
    ["native/android/PropertyCross/res/drawable-xhdpi/star.png", 64],
  ]),

  generateOther.bind(null, "assets/nostar.png", [
    // ["TARGET", WIDTH (, HEIGHT)],
    ["native/android/PropertyCross/res/drawable-hdpi/nostar.png", 48],
    ["native/android/PropertyCross/res/drawable-mdpi/nostar.png", 32],
    ["native/android/PropertyCross/res/drawable-xhdpi/nostar.png", 64],
    ["xamarin/android/PropertyCross/Resources/drawable-xhdpi/nostar.png", 64],
    ["xamarin/android/PropertyCross/Resources/drawable-hdpi/nostar.png", 48],
    ["xamarin/android/PropertyCross/Resources/drawable-mdpi/nostar.png", 32]
  ]),

  generateOther.bind(null, "assets/refresh.png", [
    // ["TARGET", WIDTH (, HEIGHT)],
    ["native/android/PropertyCross/res/drawable-hdpi/refresh.png", 48],
    ["native/android/PropertyCross/res/drawable-mdpi/refresh.png", 32],
    ["native/android/PropertyCross/res/drawable-xhdpi/refresh.png", 64],
    ["xamarin/android/PropertyCross/Resources/drawable-xhdpi/refresh.png", 64],
    ["xamarin/android/PropertyCross/Resources/drawable-hdpi/refresh.png", 48],
    ["xamarin/android/PropertyCross/Resources/drawable-mdpi/refresh.png", 32]
  ]),

  generateOther.bind(null, "assets/actionbar_tile.png", [
    // ["TARGET", WIDTH (, HEIGHT)],
    ["native/android/PropertyCross/res/drawable-mdpi/actionbar_tile.png", 6],
    ["xamarin/android/PropertyCross/Resources/drawable-mdpi/actionbar_tile.png", 6]
  ])

], function(err) {
  if (err) {
    console.error(err);
  }
});

function generateIcons(background, icons, callback) {
  async.forEachLimit(icons, CONCURRENCY_LIMIT, function(config, callback) {
    renderAndExec(
        "convert \"{{{background}}}\" \"{{{overlay}}}\" -composite -resize {{{width}}}x{{{height}}}! -define png:exclude-chunks=date  png32:\"{{{result}}}\"",
        {
          background: background,
          overlay: config[0],
          width: config[2],
          height: config[2],
          result: config[1]
        },
        callback);
  }, callback);
}

function generateOther(source, config, callback) {
  async.forEachLimit(config, CONCURRENCY_LIMIT, function(config, callback) {
    renderAndExec(
        "convert \"{{{source}}}\" -resize {{{width}}}x{{{height}}}! -define png:exclude-chunks=date  png32:\"{{{result}}}\"",
        {
          source: source,
          width: config[1],
          height: config[2] || config[1],
          result: config[0]
        },
        callback);
  }, callback);
}

function generateSplashscreens(source, splashscreens, callback) {
  async.forEachLimit(splashscreens, CONCURRENCY_LIMIT, function(config, callback) {
    var width = config[1], height = config[2];
    var nominalHeight = height / width * 640;
    renderAndExec(
        "convert -size {{{nominalWidth}}}x{{{nominalHeight}}} canvas:black \"{{{source}}}\" -geometry +0+{{{offset}}} -composite -resize {{{width}}}x{{{height}}}! -define png:exclude-chunks=date  \"{{{result}}}\"",
        {
          nominalWidth: 640,
          nominalHeight: nominalHeight,
          offset: nominalHeight - 640,
          source: source,
          width: width,
          height: height,
          result: config[0]
        },
        callback);
  }, callback);
}

function renderAndExec(template, data, callback) {
  var cmd = render(template, data);
  exec(cmd, function(err) {
    if (err) {
      console.error("Failed to execute " + cmd + "\n");
    }
    callback(err);
  });
}
