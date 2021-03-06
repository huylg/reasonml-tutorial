// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");
var Test$LearnReasonmlWorkshop = require("../../support/test.bs.js");

function factorial(x) {
  if (x < 0) {
    throw [
          Caml_builtin_exceptions.assert_failure,
          /* tuple */[
            "simpleRecursion.re",
            22,
            2
          ]
        ];
  }
  return Pervasives.failwith("For you to implement");
}

Test$LearnReasonmlWorkshop.runAll(/* :: */[
      /* tuple */[
        factorial(0) === 1,
        "factorial"
      ],
      /* :: */[
        /* tuple */[
          factorial(5) === 120,
          "factorial"
        ],
        /* :: */[
          /* tuple */[
            factorial(12) === 479001600,
            "factorial"
          ],
          /* [] */0
        ]
      ]
    ]);

exports.factorial = factorial;
/*  Not a pure module */
