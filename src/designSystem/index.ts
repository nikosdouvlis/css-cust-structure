import type { PropertyValue } from "@stitches/react";
import { createStitches } from "@stitches/react";
import { colors } from "./colors";
import { fonts, fontSizes, fontWeights, letterSpacings, lineHeights } from "./typography";
import { shadows } from "./shadows";
import { radii, sizes, space } from "./sizes";

const { css, styled, createTheme } = createStitches({
  prefix: "cl",
  utils: {
    px: (value: PropertyValue<"paddingLeft">) => ({ paddingLeft: value, paddingRight: value }),
    py: (value: PropertyValue<"paddingLeft">) => ({ paddingTop: value, paddingBottom: value }),
    mx: (value: PropertyValue<"marginLeft">) => ({ marginLeft: value, marginRight: value }),
    my: (value: PropertyValue<"marginLeft">) => ({ marginTop: value, marginBottom: value }),
  },
  theme: {
    colors,
    lineHeights,
    letterSpacings,
    fontWeights,
    fontSizes,
    shadows,
    fonts,
    sizes,
    space,
    radii,
  },
});

export { styled, css };

const userTheme = {
  variables: {
    primary: "#25d227",
    // primary: {
    //   400: "#6fe70d",
    //   500: "#CC0500",
    //   900: "#be00cc",
    // },
  },
};

// const userTheme = {
//   variables: {
//     primary: {
//       400: "#35CA35",
//       500: "#CC0500",
//     },
//   },
// };
console.log(variablesToInternalTheme(userTheme));
const userDefinedTheme = createTheme(variablesToInternalTheme(userTheme));
document.body.classList.add(userDefinedTheme);

function variablesToInternalTheme(appearance: any): any {
  const primary = appearance?.variables?.primary;
  if (!primary) {
    return undefined;
  }
  if (typeof primary === "string") {
    console.log("????????????", appearance);
    const primary500 = primary;
    const lightScales = ["50", "100", "200", "300", "400"];
    const darkScales = ["600", "700", "800", "900"];
    let lastHex = primary500;
    const lightEntries = lightScales.reverse().map((scale, i) => {
      lastHex = shadeColor(lastHex, 40);
      return [`primary${scale}`, lastHex];
    });
    lastHex = primary500;
    const darkEntries = darkScales.map((scale, i) => {
      lastHex = shadeColor(lastHex, -20);
      return [`primary${scale}`, lastHex];
    });
    console.log(lightScales, darkEntries);

    return {
      colors: {
        ...Object.fromEntries(lightEntries),
        primary500,
        ...Object.fromEntries(darkEntries),
      },
    };
  }
  return {
    colors: {
      ...Object.fromEntries(Object.entries(primary).map(([k, v]) => ["primary" + k, v])),
    },
  };
}

function shadeColor(color: any, percent: any) {
  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  // @ts-ignore
  R = parseInt((R * (100 + percent)) / 100);
  // @ts-ignore
  G = parseInt((G * (100 + percent)) / 100);
  // @ts-ignore
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

  return "#" + RR + GG + BB;
}
