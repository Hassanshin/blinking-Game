//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================


// How to load in modules
const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const Patches = require('Patches')

//Diagnostics.log(Patches);
Diagnostics.log('start');

// How to access scene objects (uncomment line below to activate)
const v_Score = Scene.root.find('number');
//const number = Patches.getScalarValue('num');
//const text = Patches.getStringValue('text');
const total_Score = Patches.getScalarValue('num');

// How to access class properties (uncomment line below to activate)
v_Score.text = total_Score.toString();

// How to log messages to the console (uncomment line below to activate)
//Diagnostics.log('done. ' + total_Score.toString());

