import { FC } from 'react';
import { textStyle } from './style';

const Error: FC = () => {
  return (
    <div className='error'>
      <p style={textStyle}>Error 404</p>
    </div>
  )
}

export default Error