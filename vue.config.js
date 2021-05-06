const PORT = process.env.PORT || 5000;
module.exports = {
    devServer: {
        disableHostCheck: true,
        port: PORT,
        public: `0.0.0.0:${PORT}`
    },
    publicPath: "/"
}