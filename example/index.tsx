import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PcAvatar from '../.';

const App = () => {
  return (
    <div>
      <PcAvatar 
        defaultImg='https://beta.yuntingai.com/img/c164b4f31d6c9249ef69.png'
       defaultImgList={[
        'https://beta.yuntingai.com/img/25f3ed1a0f64ad92373f.png',
        'https://beta.yuntingai.com/img/6388e338b7cab0d00ff0.png',
        'https://beta.yuntingai.com/img/b3d7642930f7343eb9ae.png',
        'https://beta.yuntingai.com/img/a84131c959d402f913b7.png',
        'https://beta.yuntingai.com/img/09118bf627a6e08d8944.png',
        'https://beta.yuntingai.com/img/c164b4f31d6c9249ef69.png',
        'https://beta.yuntingai.com/img/789a05d7d79d8910cfed.png',
        'https://beta.yuntingai.com/img/88b0d13f384b7f292bb2.png',
        'https://beta.yuntingai.com/img/d0ba5a661e8a99864e49.png'
      ]} size={60} getFile={(pic) => {
        console.log(pic);
      }}
      cropConfirm={(pic, name) => {
        console.log(pic);
        console.log(name);
      }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
