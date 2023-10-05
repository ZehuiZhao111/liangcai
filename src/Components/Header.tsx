import { Typography, Avatar } from '@mui/material'
import CompanyLogo from '../assets/CompanyLogo.svg'

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '10px 20px',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottom: '1px solid black',
        position: 'fixed',
        // top: '0px',
        height: '100px',
        width: '100%',
      }}
    >
      <div
        style={{
          flexShrink: '0',
        }}
      >
        <Avatar
          src={CompanyLogo}
          variant="square"
          style={{
            width: '80px',
            height: '80px',
          }}
        />
        <Typography> 无锡市亮彩包装制品有限公司</Typography>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexShrink: '0',
        }}
      >
        <div>
          <Typography>13395111883</Typography>
          <Typography>全国免费客服</Typography>
        </div>
        <div
          style={{
            marginLeft: '100px',
          }}
        >
          code
        </div>
      </div>
    </div>
  )
}

export default Header
