import Box from '@mui/material/Box'
import { NextPage } from 'next'
import { SocialIcon } from 'react-social-icons'

import styles from 'styles/Common.module.css'

const vrchat = {
  icon: 'M0,0v64h64V0H0z M45 56h-.4c-.1-.1-.1-.1-.2-.1-.2-.1-1-.5-1.2-.8-.3-.1-.4-.3-.6-.6l-.3-.3-.2-.3-.3-.3-.5-.8-.2-.2v-.2l-.2-.2-.1-.2-.4-.4-.4-.6-.2-.2c-.1-.1-.1-.2-.1-.2l-.3-.3-.3-.4-.3-.4-.2-.3c-.1-.1-.2-.2-.2-.3l-.3-.4-.4-.4-.3-.4-.6-.8-1-1-.2-.3-.6-.5c-.1-.1-.1-.1-.6-.1-.8-.1-6.7-.1-10.8-.1-6 0-8.5 0-9-.1-.1 0-.2-.1-.2-.1h-.1-.1c0-.1-.1-.1-.1-.1H14l-.5-.2c-1-.6-2-1.5-2.5-2.5-.1-.4-.3-1-.4-1.2-.1-1-.1-11.7-.1-18.8l.1-4.7c0-1 0-1.4.1-1.5v-.2l.3-.8c.4-.8 1-1.5 1.7-2 .3-.2 1-.6 1.2-.7 0 0 .1 0 .1-.1h.1.1.1v-.1h.2c.1 0 .5-.1 1.3-.1h1.6l20.4-.1 8.4.1h1c.8 0 1.2.1 1.3.1.2 0 .3.1.4.1.5.2.8.4 1 .6 1 .6 1.7 1.5 2 2.5 0 .1.1.2.1.3l.1.2v.1.1c.1.2.1 1.4.2 3.3V21v14.5 2l-.2 3v.1h0 0-.1v.1c0 .2-.4 1-.6 1.2-.3.4-.8 1-1.2 1.3-.3.3-1 .6-1.3.8-.2.1-.5.1-.7.2l-.5.1-.1.1v1l-.1 3.5v2.8 1 .7l-.2.4c-.1.2-.2.4-.3.5-.3.6-1 1-1.5 1-.3 0-.5.1-.7 0zm0 0',
  mask: 'M45 56h-.4c-.1-.1-.1-.1-.2-.1-.2-.1-1-.5-1.2-.8-.3-.1-.4-.3-.6-.6l-.3-.3-.2-.3-.3-.3-.5-.8-.2-.2v-.2l-.2-.2-.1-.2-.4-.4-.4-.6-.2-.2c-.1-.1-.1-.2-.1-.2l-.3-.3-.3-.4-.3-.4-.2-.3c-.1-.1-.2-.2-.2-.3l-.3-.4-.4-.4-.3-.4-.6-.8-1-1-.2-.3-.6-.5c-.1-.1-.1-.1-.6-.1-.8-.1-6.7-.1-10.8-.1-6 0-8.5 0-9-.1-.1 0-.2-.1-.2-.1h-.1-.1c0-.1-.1-.1-.1-.1H14l-.5-.2c-1-.6-2-1.5-2.5-2.5-.1-.4-.3-1-.4-1.2-.1-1-.1-11.7-.1-18.8l.1-4.7c0-1 0-1.4.1-1.5v-.2l.3-.8c.4-.8 1-1.5 1.7-2 .3-.2 1-.6 1.2-.7 0 0 .1 0 .1-.1h.1.1.1v-.1h.2c.1 0 .5-.1 1.3-.1h1.6l20.4-.1 8.4.1h1c.8 0 1.2.1 1.3.1.2 0 .3.1.4.1.5.2.8.4 1 .6 1 .6 1.7 1.5 2 2.5 0 .1.1.2.1.3l.1.2v.1.1c.1.2.1 1.4.2 3.3V21v14.5 2l-.2 3v.1h0 0-.1v.1c0 .2-.4 1-.6 1.2-.3.4-.8 1-1.2 1.3-.3.3-1 .6-1.3.8-.2.1-.5.1-.7.2l-.5.1-.1.1v1l-.1 3.5v2.8 1 .7l-.2.4c-.1.2-.2.4-.3.5-.3.6-1 1-1.5 1-.3 0-.5.1-.7 0zm.4-2c.1-.1.2-.2.3-.4.1-.3.1-1 .1-6.2V43h.3.8c1-.1 1.2-.1 1.8-.4l1-.6a4 4 0 0 0 .7-1.3c.1 0 .1-.3.2-.4.1-.4.1-2.8.1-12l-.1-12c0-.1-.1-.2-.1-.4-.1-.2-.2-.5-.4-.7-.4-.6-1-1-1.6-1.3-.4-.2-.4-.2-.7-.2a875 875 0 0 0-32.4 0c-.6 0-1.2.3-1.7.8-.5.4-1 1.2-1 2a623 623 0 0 0-.1 21.5l.1 2.3c.1.2.1.3.2.5.1.5.5 1 1 1.4.3.3.5.4 1.2.7l.2.1 3.2.1H25h7 3.5l1 1 1.4 1.5 3 3.8 1 1.2.4.5 1 1 1.8 2c.2.1.2.1.4.1h.3zM24 37.2c-.3 0-.5 0-.7-.2-.4-.1-.7-.5-1-1l-.2-.7v-.6c-.1-.1-.1-.2-.2-.3v-.2s-.1-.3-.1-.4l-.1-.2v-.1c0-.1-.1-.1-.1-.2v-.2c-.1-.1-.2-.5-.2-.5v-.2L21 32h0c0-.1-.1-.2-.1-.3s-.1-.3-.1-.4l-.1-.3-.1-.2c0-.2-.1-.4-.1-.5l-.1-.2s0-.1-.1-.2l-.1-.6c0-.1-.1-.1-.1-.2H20v-.4-.2c-.1-.1-.1-.2-.1-.2l-.1-.3-.1-.4v-.2c-.1 0-.1-.1-.1-.2 0 0 0-.1-.1-.2v-.2s-.1-.2-.1-.3l-.1-.4c-.1-.1-.1-.1-.1-.2l-.1-.2v-.3-.3c-.1 0-.1-.1-.1-.2v-.1c0-.1-.1-.1-.1-.1v-.1l-.1-.4-.1-.3v-.1c0-.1-.1-.1-.1-.2v-.2l-.1-.3c-.1-.1-.1-.2-.1-.2l-.1-.2v-.2-.1C18 22 18 22 18 22v-.3-.2l-.2-.5h0l-.1-.3c0-.3 0-.5.3-.7.2-.2.4-.3.6-.4s.4-.2.8-.2c.5-.1 1 0 1 .2.1.1.2.3.2.4h0c.1.1.1.1.1.2v.1c0 .1.1.2.1.3v.3h0c.1 0 .1.1.1.1v.2l.1.4c.1.1.1.1.1.2s0 .1.1.2c0 .2 0 .2.1.5v.2l.1.3c0 .1.1.1.1.3 0 .1.1.2.1.2v.2s0 .1.1.1v.2.4c0 .1.1.2.1.3l.1.3v.2l.1.1.1.5s.1.2.1.3l.1.5c.1.1.1.1.1.2 0 0 0 .2.1.3 0 0 .1.3.1.5v.1c.1.2.1.3.1.3.1 0 .1.1.1.1v.1.1c0 .1.1.1.1.2v.2h.1v.2s0 .1.1.1v.2.1c0 .1.1.1.1.2l.1.2v.3l.1.1v.1.1s0 .1.1.1v.2h0l.1.2s0 .1.1.5v.3s.1.1.1.2v.2c.1.3.2.4.3.4v-.1c.1-.1.1-.3.2-.5l.1-.5c0-.1.1-.2.1-.3s.1-.2.1-.2c0-.2.1-.3.1-.5 0-.1 0-.2.1-.2v-.1-.2l.1-.1v-.3c.1 0 .1-.2.1-.3l.1-.3c0-.1.1-.1.1-.2h0c0-.1 0-.1.1-.2v-.3l.1-.3h.1c0-.1 0-.3.1-.5 0-.1 0-.2.1-.2 0-.3.1-.5.1-.6.1-.1.1-.2.1-.3s.1-.2.1-.3h0c.1-.1.1-.1.1-.2v-.1l.1-.4.1-.1h0s0-.1.1-.1v-.2s0-.1.1-.2v-.1-.4-.1-.1-.2s.1-.2.1-.3l.1-.2v-.2-.1c.1-.1.1-.1.1-.2v-.1c.1-.3.1-.4.2-.5v-.1-.2c.1 0 .1-.2.1-.3.1 0 .1-.2.1-.3 0 0 .1-.1.1-.2.1-.2.1-.4.2-.7.1-.2.3-.5.4-.6.1-.2.3-.3.6-.3.2 0 .5.1.8.2.5.1 1 .4 1.2.8v.1c.1.1.1.3 0 .3v.2c-.1.2-.1.2-.3.8v.2c0 .1 0 .2-.1.2h0l-.1.3v.2c-.1.1-.1.2-.1.2v.1h-.1v.3l-.1.2c-.1.1-.1.2-.1.3s-.1.3-.1.4v.3c-.1.1-.1.2-.1.3l-.1.3c0 .1-.1.2-.1.2v.2l-.1.1v.1.2c-.1.2-.1.3-.1.4-.1.2-.2.3-.2.4v.1c0 .1-.1.2-.1.2l-.2.7v.2s-.1.1-.1.2l-.1.2s0 .2-.1.3l-.2.7v.2l-.1.2c0 .1 0 .2-.1.2 0 .2-.1.4-.1.4v.1c0 .1 0 .1-.1.2v.2.3.3l-.1.2c0 .1 0 .2-.1.3v.3c-.1.1-.1.2-.1.3l-.2.5c0 .1-.1.3-.1.4l-.1.4c-.1.1-.1.2-.1.2v.1.1c-.1.1-.1.2-.2.4l-.1.4-.1.1v.1l-.1.2c0 .2-.2.6-.2.6v.1c0 .1-.1.2-.1.2-.1.2-.1.3-.2.4l-.8.4c-.5.1-1 .1-1.4 0zm18.7 0c-.2 0-.4-.1-.5-.2-.2-.3-.3-.5-.5-.8l-.3-.5-.2-.4c0-.1-.2-.4-.3-.6l-.2-.3c0-.1-.1-.3-.3-.6l-.3-.6c0-.1-.2-.4-.4-.8l-.3-.7s-.2-.3-.3-.6l-.7-1.3h-1-1v1.5l-.1 2.5v1.7.8.2l-.2.1c-.1.2-.3.3-.5.4h-.1-.1-.2c-.3.1-.8 0-1 0-.3-.1-.6-.3-.8-.5l-.2-.1V20l.2-.3.3-.3v-.1l2.8.1 4.3.1c.1 0 .4.1.5.1s.2.1.2.1c.2 0 .5.1.5.2h.1s.5.2.7.4c.7.4 1.2 1 1.5 1.8.1.2.2.5.2.7.2 1 .3 2 .1 3 0 .1 0 .2-.1.2h0v.1.1s0 .1-.1.1c0 .3-.3.8-.4 1-.4.6-1.2 1.3-1.8 1.6 0 0-.1 0-.1.1-.1 0-.3.1-.3.2-.1.1-.1.2.3 1l.2.4c.1.1.2.3.2.5l.3.4c0 .1.1.3.2.4v.4s.1.2.2.3l.1.3s.1.1.2.3l.1.3.2.4.3.5.3.7.3.4v.2c-.1.2-.1.3-.2.4-.2.5-.7 1-1.3 1-.1 0-.2 0-.3.1h-.2-.2zm-3-10c.3-.1.5-.1.6-.2.3 0 .7-.3 1-.6l.4-.7c.1-.5.1-1.4 0-1.7v-.3c-.1-.2-.1-.4-.2-.6-.2-.4-.6-.7-1-1C40 22 40 22 38 22h-1.7v.8 4c0 .1 0 .1.1.1 0 0 .1 0 .2.1h.2 2.7zm0 0',
  color: '#000000',
}

const About: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>이사람은?</h1>
      <p className={styles.description}>
        딱히 아이디어도 없고 할거 있어도 귀찮아서 안하는 사람 <br />
        월드 아이디어 주면 뭐라도 개발 해보려고 했는데 이제 귀찮아서 안할 사람
      </p>
      <br />
      <h1 className={styles.title}>사용하는 아바타는?</h1>
      <p className={styles.description}>
        오른쪽에 있는데 요즘(22년 10월 기준)은 シグ만 사용중
      </p>
      <br />
      <h1 className={styles.title}>연락은 어디로?</h1>
      <Box
        sx={{
          '& > :not(style)': { m: 1, width: '100%' },
        }}
      >
        <SocialIcon target="_blank" url="https://discord.gg/dCxt2f2" />
        <SocialIcon
          defaultSVG={vrchat}
          fgColor="black"
          target="_blank"
          url="https://vrchat.com/home/user/usr_8fd691ee-fbeb-4628-a129-c46e9aecfe47"
        />
      </Box>
    </>
  )
}

export default About
