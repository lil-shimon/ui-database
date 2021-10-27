import React from 'react'

/**
 * LinearProgressWithLabelProps定義
 */
export interface LinearProgressWithLabelProps {
  percent: number
}

/**
 * LinearProgressとlabelコンポーネント
 * @param {number} percent progressの数字
 * @returns 
 */
export const LinearProgressWithLabel: React.FC<LinearProgressWithLabelProps> = ({percent}) => {
    return (
      <div>
        {percent}
      </div>
    )
}