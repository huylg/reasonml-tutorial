// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Test$LearnReasonmlWorkshop = require("../../support/test.bs.js");

function advanceColor(stoplight) {
  return Pervasives.failwith("For you to implement");
}

var test_ex_red = {
  location: "",
  color: /* Red */0
};

var test_ex_red$prime = {
  location: test_ex_red.location,
  color: /* Green */2
};

var test_ex_yellow = {
  location: "",
  color: /* Yellow */1
};

var test_ex_yellow$prime = {
  location: test_ex_red.location,
  color: /* Red */0
};

var test_ex_green = {
  location: "",
  color: /* Green */2
};

var test_ex_green$prime = {
  location: test_ex_red.location,
  color: /* Yellow */1
};

Pervasives.failwith("For you to implement");

Pervasives.failwith("For you to implement");

Pervasives.failwith("For you to implement");

Test$LearnReasonmlWorkshop.runAll(/* :: */[
      /* tuple */[
        Caml_obj.caml_equal(test_ex_red, test_ex_red$prime),
        "advance color"
      ],
      /* :: */[
        /* tuple */[
          Caml_obj.caml_equal(test_ex_yellow, test_ex_yellow$prime),
          "advance color"
        ],
        /* :: */[
          /* tuple */[
            Caml_obj.caml_equal(test_ex_green, test_ex_green$prime),
            "advance color"
          ],
          /* [] */0
        ]
      ]
    ]);

exports.advanceColor = advanceColor;
/*  Not a pure module */
