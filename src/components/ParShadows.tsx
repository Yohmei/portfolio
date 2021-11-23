import React from 'react'

const ParShadows = ({ children, width = '95%', left = '3%' }: any) => {
  const top_shadow_style = {
    content: '',
    width: width,
    height: '2px',
    backgroundColor: 'transparent',
    boxShadow: '0 5px 6px 10px white',
    position: 'absolute',
    zIndex: '100',
    top: '-10px',
    left: left,
  } as any

  const bot_shadow_style = {
    content: '',
    width: width,
    height: '2px',
    backgroundColor: 'transparent',
    boxShadow: '0 -7px 6px 10px white',
    position: 'absolute',
    zIndex: '100',
    bottom: '-10px',
    left: left,
  } as any
  return (
    <>
      <div className='top-shadow' style={top_shadow_style}></div>
      {children}
      <div className='bottom-shadow' style={bot_shadow_style}></div>
    </>
  )
}

export default ParShadows
