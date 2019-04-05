import reset from 'styled-reset';
import { injectGlobal } from './typed-components';

// tslint:disable-next-line
injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Inconsolata');
  ${reset};
  * {
    -ms-overflow-style: none; 
  &::-webkit-scrollbar { 
    display: none !important; 
  }
      box-sizing: border-box;
  }


  body{
    font-family: "Apple SD Gothic Neo", AppleSDGothicNeo, "Noto Sans CJK KR", NanumGothic, "Malgun Gothic", "맑은 고딕", 돋움, dotum, arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color:#212529;
  }
  a{ 
      color:inherit;
      text-decoration:none;
  }
  input,
  button{&:focus,&:active{outline:none}
  }

`;
