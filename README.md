# probot-app

> A GitHub App built with [Probot](https://github.com/probot/probot) that A Probot app

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t probot-app .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> probot-app
```

## Contributing

If you have suggestions for how probot-app could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

For more information on building apps:
https://probot.github.io/docs/

To get your app running against GitHub, see:
https://probot.github.io/docs/development/

## License

[ISC](LICENSE) © 2024 Dan Hardej
