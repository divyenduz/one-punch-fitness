// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
"use strict";

var Curry = require("bs-platform/lib/js/curry.js");
var Assets = require("Assets");
var Colors = require("../../../../config/Colors.bs.js");
var Routines = require("../../../../config/Routines.bs.js");
var Reductive = require("reductive/src/reductive.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Progenitor = require("../../../../state/Progenitor.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var RoutineFacet = require("./RoutineFacet/RoutineFacet.bs.js");
var Header = require("./styled/Header");
var IntensityButton = require("./IntensityButton/IntensityButton.bs.js");
var Js_null_undefined = require("bs-platform/lib/js/js_null_undefined.js");
var Container = require("./styled/Container");
var View$BsReactNative = require("bs-react-native/src/components/view.js");
var CoverImage = require("./styled/CoverImage");
var LevelLabel = require("./styled/LevelLabel");
var ImageGradient = require("./styled/ImageGradient");
var WorkoutCardStartButton = require("./StartButton/WorkoutCardStartButton.bs.js");
var RoutineContainer = require("./styled/RoutineContainer");

function make(children) {
  return ReasonReact.wrapJsForReason(Container.default, {}, children);
}

var Container$1 = /* module */ [/* make */ make];

function make$1(children) {
  return ReasonReact.wrapJsForReason(Header.default, {}, children);
}

var Header$1 = /* module */ [/* make */ make$1];

function make$2(children) {
  return ReasonReact.wrapJsForReason(RoutineContainer.default, {}, children);
}

var RoutineContainer$1 = /* module */ [/* make */ make$2];

function make$3(children) {
  return ReasonReact.wrapJsForReason(LevelLabel.default, {}, children);
}

var LevelLabel$1 = /* module */ [/* make */ make$3];

function make$4(source, resizeMode, children) {
  return ReasonReact.wrapJsForReason(
    CoverImage.default,
    {
      source: Js_null_undefined.from_opt(source),
      resizeMode: Js_null_undefined.from_opt(resizeMode),
    },
    children
  );
}

var CoverImage$1 = /* module */ [/* make */ make$4];

function make$5(colors, children) {
  return ReasonReact.wrapJsForReason(
    ImageGradient.default,
    {
      colors: colors,
    },
    children
  );
}

var ImageGradient$1 = /* module */ [/* make */ make$5];

var Styled = /* module */ [
  /* Container */ Container$1,
  /* Header */ Header$1,
  /* RoutineContainer */ RoutineContainer$1,
  /* LevelLabel */ LevelLabel$1,
  /* CoverImage */ CoverImage$1,
  /* ImageGradient */ ImageGradient$1,
];

var component = ReasonReact.statelessComponent("WorkoutCardBase");

function make$6(navigation, reductiveState, dispatch, _) {
  var newrecord = component.slice();
  newrecord[/* render */ 9] = function() {
    var match = reductiveState[/* currentWorkout */ 0][/* level */ 0];
    var tmp;
    if (match > 4 || match < 0) {
      tmp = Assets.Illustrations.workoutLevel1;
    } else {
      switch (match) {
        case 0:
          tmp = Assets.Illustrations.workoutLevel1;
          break;
        case 1:
          tmp = Assets.Illustrations.workoutLevel2;
          break;
        case 2:
          tmp = Assets.Illustrations.workoutLevel3;
          break;
        case 3:
          tmp = Assets.Illustrations.workoutLevel4;
          break;
        case 4:
          tmp = Assets.Illustrations.workoutLevel5;
          break;
      }
    }
    return ReasonReact.element(
      /* None */ 0,
      /* None */ 0,
      make(
        /* array */ [
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            make$1(
              /* array */ [
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  make$4(/* Some */ [tmp], /* Some */ ["cover"], /* array */ [])
                ),
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  make$5(
                    /* array */ ["rgba(0,0,0,0)", Colors.spotiBlack],
                    /* array */ []
                  )
                ),
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  make$3(
                    /* array */ [
                      "level " +
                        Pervasives.string_of_int(
                          (reductiveState[/* currentWorkout */ 0][/* level */ 0] +
                            1) |
                            0
                        ),
                    ]
                  )
                ),
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  IntensityButton.make(
                    function() {
                      return Curry._1(dispatch, /* DecrementLevel */ 1);
                    },
                    "decrement",
                    reductiveState[/* currentWorkout */ 0][/* started */ 2] ||
                      +(
                        reductiveState[/* currentWorkout */ 0][/* level */ 0] ===
                        0
                      ),
                    /* array */ []
                  )
                ),
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  IntensityButton.make(
                    function() {
                      return Curry._1(dispatch, /* IncrementLevel */ 0);
                    },
                    "increment",
                    reductiveState[/* currentWorkout */ 0][/* started */ 2] ||
                      +(
                        reductiveState[/* currentWorkout */ 0][/* level */ 0] ===
                        4
                      ),
                    /* array */ []
                  )
                ),
              ]
            )
          ),
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            make$2(
              /* array */ [
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  View$BsReactNative.make(
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0
                  )(
                    /* array */ [
                      ReasonReact.element(
                        /* None */ 0,
                        /* None */ 0,
                        RoutineFacet.make(
                          "push-ups",
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              reductiveState[/* currentWorkout */ 0][/* level */ 0]
                            )[/* pushUps */ 0][/* sets */ 0],
                          ],
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              reductiveState[/* currentWorkout */ 0][/* level */ 0]
                            )[/* pushUps */ 0][/* reps */ 1],
                          ],
                          /* None */ 0,
                          /* None */ 0,
                          /* None */ 0,
                          /* array */ []
                        )
                      ),
                      ReasonReact.element(
                        /* None */ 0,
                        /* None */ 0,
                        RoutineFacet.make(
                          "sit-ups",
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              reductiveState[/* currentWorkout */ 0][/* level */ 0]
                            )[/* sitUps */ 1][/* sets */ 0],
                          ],
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              reductiveState[/* currentWorkout */ 0][/* level */ 0]
                            )[/* sitUps */ 1][/* reps */ 1],
                          ],
                          /* None */ 0,
                          /* None */ 0,
                          /* None */ 0,
                          /* array */ []
                        )
                      ),
                    ]
                  )
                ),
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  View$BsReactNative.make(
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0,
                    /* None */ 0
                  )(
                    /* array */ [
                      ReasonReact.element(
                        /* None */ 0,
                        /* None */ 0,
                        RoutineFacet.make(
                          "squats",
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              reductiveState[/* currentWorkout */ 0][/* level */ 0]
                            )[/* squats */ 2][/* sets */ 0],
                          ],
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              reductiveState[/* currentWorkout */ 0][/* level */ 0]
                            )[/* squats */ 2][/* reps */ 1],
                          ],
                          /* None */ 0,
                          /* None */ 0,
                          /* None */ 0,
                          /* array */ []
                        )
                      ),
                      ReasonReact.element(
                        /* None */ 0,
                        /* None */ 0,
                        RoutineFacet.make(
                          "run",
                          /* None */ 0,
                          /* None */ 0,
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              reductiveState[/* currentWorkout */ 0][/* level */ 0]
                            )[/* run */ 3][/* distance */ 0],
                          ],
                          /* Some */ [
                            Caml_array.caml_array_get(
                              Routines.variations,
                              reductiveState[/* currentWorkout */ 0][/* level */ 0]
                            )[/* run */ 3][/* units */ 1],
                          ],
                          /* None */ 0,
                          /* array */ []
                        )
                      ),
                    ]
                  )
                ),
              ]
            )
          ),
          ReasonReact.element(
            /* None */ 0,
            /* None */ 0,
            View$BsReactNative.make(
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0,
              /* None */ 0
            )(
              /* array */ [
                ReasonReact.element(
                  /* None */ 0,
                  /* None */ 0,
                  WorkoutCardStartButton.make(
                    reductiveState[/* currentWorkout */ 0][/* completed */ 3],
                    reductiveState[/* currentWorkout */ 0][/* completed */ 3]
                      ? "completed"
                      : reductiveState[/* currentWorkout */ 0][/* started */ 2]
                        ? "resume"
                        : "start",
                    function() {
                      Curry._1(dispatch, /* StartWorkout */ 2);
                      return navigation.navigate("Workout", {});
                    },
                    /* array */ []
                  )
                ),
              ]
            )
          ),
        ]
      )
    );
  };
  return newrecord;
}

var Base = /* module */ [
  /* Styled */ Styled,
  /* component */ component,
  /* make */ make$6,
];

var make$7 = Reductive.Provider[/* createMake */ 0](
  /* None */ 0,
  Progenitor.store
);

var Provider = /* module */ [/* make */ make$7];

var component$1 = ReasonReact.statelessComponent("WorkoutCard");

function make$8(navigation, _) {
  var newrecord = component$1.slice();
  newrecord[/* render */ 9] = function() {
    return ReasonReact.element(
      /* None */ 0,
      /* None */ 0,
      Curry._2(
        make$7,
        function(param, param$1, param$2) {
          return make$6(navigation, param, param$1, param$2);
        },
        /* array */ []
      )
    );
  };
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component$1, function(jsProps) {
  return make$8(jsProps.navigation, /* array */ []);
});

exports.Base = Base;
exports.Provider = Provider;
exports.component = component$1;
exports.make = make$8;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */
