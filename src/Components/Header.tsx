import { Typography } from '@mui/material'

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '10px 20px',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography> 无锡市亮彩包装制品有限公司</Typography>
        <Typography> 专业标签包装</Typography>
      </div>
      <div>全国免费客服</div>
    </div>
  )
}

export default Header
