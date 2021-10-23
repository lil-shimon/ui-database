import React from 'react'
import { LilButton } from './index'

export default {
  title: "LilButtons",
  component: LilButton,
  includeStories: /.*Story$/
}

/**
 * ButtonListのタイプ定義
 */
type ButtonListProps = {
  children: React.ReactElement[]
}

/**
 * たくさんのボタンを収納するコンポーネント
 * @param {ButtonListProps} children
 * @returns 
 */
const ButtonList: React.FC<ButtonListProps> = ({ children }) => {
  return (
    <div>
      {children.map((child: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => (
        <div>{child}</div>
      ))}
    </div>
  )
}

/**
 * ボタン表示コンポーネント
 */
export const buttonListStory = () => {
  <div style={{
    display: "flex",
    flexDirection: "row",
    width: "100vw"
  }}>
    <div style={{
      display: "flex",
      flexDirection: "column",
      marginRight: "1rem"
    }}>
      <h2>標準的なボタン</h2>
      <ButtonList>
        <LilButton title={"text"} />
        <LilButton title={"text"} />
        <LilButton title={"text"} />
      </ButtonList>
    </div>
  </div>
}