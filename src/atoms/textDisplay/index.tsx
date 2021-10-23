import React from 'react'
import { useStyles } from './styles';

/**
 * LilChicContent Componentのタイプ定義
 */
type ChicProps = {
  title: string;
  content: string;
}

/**
 * シックなディスプレイコンポーネント
 * @param {string} title 大文字・黒で表示されるタイトル
 * @param {string} content 大文字・灰で表示されるメインコンテンツ
 */
export const LilChicContent: React.FC<ChicProps> = ({ title, content }) => {

  /**
   * スタイル使用の定義
   */
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>{title}</div>
      <div className={classes.content}>{content}</div>
    </div>
  )
}