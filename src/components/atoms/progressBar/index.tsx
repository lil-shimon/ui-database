import { Box, LinearProgress, Typography } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'

/**
 * LinearProgressWithLabelProps定義
 */
export interface LinearProgressWithLabelProps {
  percent: number
}

/**
 * Props定義
 */
export interface Props {
  isStart: boolean
}

/**
 * LinearProgressとlabelコンポーネント
 * @param {number} percent progressの数字
 * @returns 
 */
const LinearProgressWithLabel: React.FC<LinearProgressWithLabelProps> = (props) => {
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props}/>
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">
            {`${Math.round(props.percent)}%`}
          </Typography>
        </Box>
      </Box>
    )
}

export const LinearProgressBarWithLabel: React.FC<Props> = ({ isStart }) => {
  const [progress, setProgress] = useState<number>(10);
  const ref = useRef<NodeJS.Timer | null>(null)

  /**
   * progressをスタートさせる関数
   */
  const start = () => {
    ref.current = setInterval(() => {
      setProgress((prev: number) => checkProgress(prev))
    }, 1100)
  }

  const stop = () => {
    ref.current && clearInterval(ref.current);
    ref.current = null;
  }

  const checkProgress = (progress: number) => {
    return progress <= 90 ? progress + 10 : progress;
  }

  useEffect(() => {
    isStart && progress < 99 && start();
  }, [isStart])

  useEffect(() => {
    progress > 99 && stop();
  }, [progress])

  return (
    <div>
      <LinearProgressWithLabel percent={progress} />
    </div>
  )
}