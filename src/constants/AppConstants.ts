export const APP_CONSTANTS = {
  index: "/roles/list",
  base_url:
    process.env.REACT_APP_BRANCH === "prod"
      ? process.env.REACT_APP_PROD_BASE_URL
      : process.env.REACT_APP_BETA_BASE_URL,
  gql_connection: "https://cerebro-public-f43i3yczga-uc.a.run.app/graaaaphql/",
  gql_connection_wss:
    "wss://cerebro-public-f43i3yczga-uc.a.run.app/graaaaphql-sub/jhf23iune9f426ojnf6s6k8jdf/",
  marketing_agencies: "Marketing and Agencies",
  MICROSOFT_CLIENT_ID: "271bc082-0701-454e-8a72-6341a9739236",
};
