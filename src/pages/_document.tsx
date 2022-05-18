import Document, { Head, Html, Main, NextScript } from "next/document";
import Header from "@components/Header";

// 서버에서 한 번만 실행 됨. 즉, 한 번만 렌더링 됨. (onclick이벤트 등 추가 불가)

/**
 * <Main /> - _app 컴포넌트 렌더링
 */
class CustomDocument extends Document {
  render(): JSX.Element {
    // lang="ko"
    return (
      <Html>
        <Head>
          <Header />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
