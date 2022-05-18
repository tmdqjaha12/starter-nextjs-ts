import {
  ApolloClient,
  NormalizedCacheObject,
  OperationVariables,
  QueryOptions,
} from "@apollo/client";
import { initializeApollo, ResolverContext } from "@libs/apollo/apolloClient";
import type {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  NextPage,
} from "next";
import { ParsedUrlQuery } from "querystring";

const Home: NextPage = () => {
  return (
    <div className="bg-green-500">
      <h1 className="text-red-600">{process.env.LC_PROJECT_NAME}</h1>
    </div>
  );
};

const doRefreshToken = () => {};

const exeServerQuery = async (
  initState: any = null,
  ctx: ResolverContext | null,
  token: string = "",
  query: QueryOptions<OperationVariables, any>
) => {
  const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo(
    null,
    null,
    ""
  );
  const result = await apolloClient.query(query).catch((err) => {
    console.log("get faild Query");
    console.log(err);
  });

  // if (result?.["data"] == "need admin") {
  //   return result["data"];
  // }
  if (result?.["data"] == "jwt expired") {
    doRefreshToken(); // return apolloClient?
    const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo(
      null,
      null,
      ""
    );
    const result2 = await apolloClient.query(query).catch((err) => {
      console.log("get faild Query2");
      console.log(err);
    });
    return result2;
  }

  return result;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const result = exeServerQuery(null, ctx, '', query);

  return {
    props: {},
  };
};

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   return {
//     props: {},
//   };
// };

// This function gets called at build time
// export const getStaticPaths = async () => {
//   const paths = [
//     { params: { type: "a", idx: 1 } },
//     { params: { type: "a", idx: 1 } },
//   ];
//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const apolloClient = initializeApollo(null, null, "");
// let tablist: getTabListQuery_getTabList_list[] = [];
// try {
//   const result = await apolloClient.query<getTabListQuery>({
//     query: GETTABLIST_QUERY,
//     variables: {
//       where: {
//         at_tab_page: "experience",
//       },
//     },
//   });
//   tablist = result.data.getTabList.list;
// } catch (err: any) {
//   console.log("get faild Query");
// }
//   return {
//     props: {},
//   };
// };

export default Home;
