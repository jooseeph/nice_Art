import westTrialBold from "../../fonts/WestTrial/WestTrial-Bold.otf";
import westTrialLight from "../../fonts/WestTrial/WestTrial-Light.otf";
import westTrialSemiBold from "../../fonts/WestTrial/WestTrial-Medium.otf";
import westTrialRegular from "../../fonts/WestTrial/WestTrial-Regular.otf";
import westTrialThin from "../../fonts/WestTrial/WestTrial-ExtraLight.otf";
import westTrialXBlack from "../../fonts/WestTrial/WestTrial-ExtraBold.otf";
const typography = {
  "@font-face": [
    {
      fontFamily: "WestTrial Bold",
      src: `url("${westTrialBold}")`,
    },
    {
      fontFamily: "WestTrial Light",
      src: `url("${westTrialLight}")`,
    },
    {
      fontFamily: "WestTrial Medium",
      src: `url("${westTrialSemiBold}")`,
    },
    {
      fontFamily: "WestTrial Regular",
      src: `url("${westTrialRegular}")`,
    },
    {
      fontFamily: "WestTrial Thin",
      src: `url("${westTrialThin}")`,
    },
    {
      fontFamily: "WestTrial XBlack",
      src: `url("${westTrialXBlack}")`,
    },
  ],
};

export default typography;
