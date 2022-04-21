import React, { useContext, useState } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import me from '../../assets/img/me.gif'
import ParShadows from '../../components/ParShadows'
import { PrevPathContext } from '../../contextapi/PrevPathProvider'
import layout, { IPageProps } from '../layout'

const About = ({ turn_page, opacity, to }: IPageProps) => {
  const { path } = useContext(PrevPathContext)
  const [is_me, set_is_me] = useState<boolean>(false)
  const content_ref = React.createRef<HTMLDivElement>()

  const show_me = () => {
    set_is_me(true)

    setTimeout(() => {
      set_is_me(false)
    }, 3100)
  }

  return (
    <main
      className='about'
      style={{
        opacity,
        transform: to(opacity, (coord: number) => {
          let new_coord = 0.5 - coord
          new_coord = 0.5 + new_coord

          if (path.next_path === '/projects' || path.prev_path === '/projects')
            return `translate3d(0,${new_coord * 100}px,0)`
        }),
      }}
    >
      <div onClick={() => turn_page('/projects')} className='global-links top-link about-link'>
        <div className='up'></div>
      </div>

      <div className='content' ref={content_ref}>
        <h2>Hello there!</h2>

        <div className='cont'>
          <ParShadows width='100%' left='0'>
            <Scrollbars
              // autoHide
              // autoHideTimeout={500}
              // autoHideDuration={300}
              // autoHeight
              // autoHeightMin={0}
              // autoHeightMax={scroll_height}
              universal={true}
              renderThumbVertical={(props) => <div {...props} className='thumb-vertical' />}
              renderTrackHorizontal={(props) => (
                <div {...props} style={{ ...props.style, display: 'none' }} className='track-horizontal' />
              )}
              renderView={(props) => <div {...props} style={{ ...props.style }} />}
            >
              <div className='scrollbar-div'>
                <p>
                  If you have arrived to this page you must have seen some of my projects, hence you have got to know me
                  already.
                </p>
                <p>Still here? Alright.</p>
                <p>
                  My family has a cosmopolitan distribution, occurring on all the world's continents except Antarctica.
                  I'm adapted for swimming, floating on the water surface, and in some cases diving in at least shallow
                  water. I am generally herbivorous, and a monogamous breeder. <span onClick={show_me}>Click</span> to
                  see me.
                </p>
                <p>But seriously go take a look at them. Works speak for themselves.</p>
                {is_me && (
                  <p className='gif'>
                    <span>
                      <img src={me} alt='me' />
                    </span>
                  </p>
                )}
              </div>
            </Scrollbars>
          </ParShadows>
        </div>
        <div className='contacts'>
          <a href='mailto:mayounnaised@gmail.com'>Email</a>
          <a href='https://www.linkedin.com/in/max-loginov-a4ba53139/' rel='noreferrer' target={'_blank'}>
            Linkedin
          </a>
        </div>
      </div>
      <div style={{ flex: '1 1 auto', content: '', height: '140px' }}></div>
    </main>
  )
}

export default layout(About, 'about')
