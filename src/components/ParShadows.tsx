import React from 'react'

const top_shadow_style = {
  content: '',
  width: '90%',
  height: '10px',
  backgroundColor: 'transparent',
  boxShadow: '0 5px 10px 10px white',
  position: 'absolute',
  zIndex: '100',
  top: '-10px',
  left: '5%',
} as any

const bot_shadow_style = {
  content: '',
  width: '90%',
  height: '10px',
  backgroundColor: 'transparent',
  boxShadow: '0 -12px 10px 10px white',
  position: 'absolute',
  zIndex: '100',
  bottom: '-12px',
  left: '3%',
} as any

const ParShadows = ({ children }: any) => {
  return (
    <>
      <div className='top-shadow' style={top_shadow_style}></div>
      {children}
      <div className='bottom-shadow' style={bot_shadow_style}></div>
    </>
  )
}

export default ParShadows
