// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Test$LearnReasonmlWorkshop = require("../../support/test.bs.js");

console.log("(5^2)/2 = " + String(12));

var halved = 12;

var toString = String(halved);

console.log("(5^2)/2 = " + toString);

function average(x, y) {
  return Pervasives.failwith("For you to implement");
}

Test$LearnReasonmlWorkshop.runAll(/* :: */[
      /* tuple */[
        Pervasives.failwith("For you to implement") === 5,
        "average"
      ],
      /* :: */[
        /* tuple */[
          Pervasives.failwith("For you to implement") === 75,
          "average"
        ],
        /* [] */0
      ]
    ]);

exports.average = average;
/*  Not a pure module */