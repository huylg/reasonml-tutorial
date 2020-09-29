// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");
var Test$LearnReasonmlWorkshop = require("../../support/test.bs.js");

if (!Caml_obj.caml_equal(Pervasives.$at(/* :: */[
            5,
            /* :: */[
              1,
              /* [] */0
            ]
          ], /* :: */[
            8,
            /* :: */[
              4,
              /* [] */0
            ]
          ]), /* :: */[
        5,
        /* :: */[
          1,
          /* :: */[
            8,
            /* :: */[
              4,
              /* [] */0
            ]
          ]
        ]
      ])) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "listRange.re",
          9,
          2
        ]
      ];
}

if (!Caml_obj.caml_equal(List.append(/* :: */[
            5,
            /* :: */[
              1,
              /* [] */0
            ]
          ], /* :: */[
            8,
            /* :: */[
              4,
              /* [] */0
            ]
          ]), /* :: */[
        5,
        /* :: */[
          1,
          /* :: */[
            8,
            /* :: */[
              4,
              /* [] */0
            ]
          ]
        ]
      ])) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "listRange.re",
          10,
          2
        ]
      ];
}

function range(from, to_) {
  return Pervasives.failwith("For you to implement");
}

Test$LearnReasonmlWorkshop.runAll(/* :: */[
      /* tuple */[
        Caml_obj.caml_equal(Pervasives.failwith("For you to implement"), /* :: */[
              1,
              /* :: */[
                2,
                /* :: */[
                  3,
                  /* [] */0
                ]
              ]
            ]),
        "range"
      ],
      /* :: */[
        /* tuple */[
          Caml_obj.caml_equal(Pervasives.failwith("For you to implement"), /* :: */[
                -5,
                /* :: */[
                  -4,
                  /* :: */[
                    -3,
                    /* :: */[
                      -2,
                      /* :: */[
                        -1,
                        /* :: */[
                          0,
                          /* :: */[
                            1,
                            /* :: */[
                              2,
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]),
          "range"
        ],
        /* [] */0
      ]
    ]);

exports.range = range;
/*  Not a pure module */