// head태그 내부에 들어갈 부분 - 한 번만 실행
// 특정 페이지에서만 실행할 스크립트는 해당 컴포넌트에서
// 공통으로 실행할 스크립트는 레이아웃에서

const Header = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content="https://" /> */}
      {/* <meta property="og:title" content="" /> */}
      {/* <meta property="og:image" content="/images/" /> */}
      {/* <meta property="og:description" content="" /> */}

      {/* <!-- 다음의 태그는 필수는 아니지만, 포함하는 것을 추천함 --> */}
      {/* <meta name="robots" content="index, follow" />
      <meta key="googlebot" name="googlebot" content="index,follow" />
      <meta name="google" content="notranslate" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" /> */}
      <title>STARTER-NEXTJS-TS</title>
      {/* <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/images/favicon.ico"
      /> */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap"
        rel="stylesheet"
      />
      {/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
        integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu"
        crossOrigin="anonymous"
      /> */}
    </>
  );
};

export default Header;
