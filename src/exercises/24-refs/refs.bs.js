// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Test$LearnReasonmlWorkshop = require("../../support/test.bs.js");

var x = 0;

x = x + 1 | 0;

function minAndMax(lst) {
  return Pervasives.failwith("For you to implement");
}

Test$LearnReasonmlWorkshop.runAll(/* :: */[
      /* tuple */[
        Caml_obj.caml_equal(Pervasives.failwith("For you to implement"), /* tuple */[
              2,
              9
            ]),
        "min and max"
      ],
      /* :: */[
        /* tuple */[
          Caml_obj.caml_equal(Pervasives.failwith("For you to implement"), /* tuple */[
                7,
                34
              ]),
          "min and max"
        ],
        /* [] */0
      ]
    ]);

exports.minAndMax = minAndMax;
/*  Not a pure module */