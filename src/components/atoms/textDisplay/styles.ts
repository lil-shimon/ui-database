import { makeStyles } from "@material-ui/styles";

/**
 * テキスト色定義
 * 灰色
 */
const textColour = "#c4c4c4";

/**
 * タイトル色定義
 * 黒
 */
const titleColour = "#2c2c2c";

/**
 * 影定義
 * 灰色の影で少しぼやっとなる
 */
const shadow = "0 0 4px #c4c4c4";

/**
 * width定義
 */
const textWidth = "70%";

export const useStyles = makeStyles({
  root: {
    marginBottom: "2rem"
  },
  title: {
    color: titleColour,
    fontSize: "16px",
    textShadow: shadow,
    fontWeight: 700,
    marginBottom: "1rem",
    width: textWidth,
  },
  content: {
    fontSize: "14px",
    color: textColour,
    textShadow: shadow,
    width: textWidth
  }
})