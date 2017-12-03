exports.run = (client, logger, message, args, app) => {
    logger.info(app);
    const authUrl = app.services.googleApi.getAuthUrl();
    message.channel.send(`Authorize this app by visiting this url: ${authUrl}`);
};

exports.aliases = ['gc'];
