import React from 'react'

export interface LilProps {
  title: string;
}

/// basicなボタンコンポーネント
export const LilButton = ({title} : LilProps) => {
  return <button>{title}</button>
}