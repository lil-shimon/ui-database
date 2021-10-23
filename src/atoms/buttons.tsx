import React from 'react'

export interface LilProps {
  title: string;
}

/// basicなボタンコンポーネント
export const lilButton = ({title} : LilProps) => {
  return <button>{title}</button>
}