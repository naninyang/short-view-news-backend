module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-plugin-mandrill",
      providerOptions: {
        apiKey: process.env.MANDRILL_API_KEY,
      },
      settings: {
        defaultFrom: "1157iamari@gmail.com",
        defaultName: "Chloe",
        defaultReplyTo: "1157iamari@gmail.com",
        defaultHtml: "Test",
        defaultText: "Test",
      },
    },
  },
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY_ID"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      region: "ap-northeast-2",
      params: {
        Bucket: "strapi-service-bucket",
      },
    },
  },
});
