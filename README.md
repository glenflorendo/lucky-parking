# Lucky Parking

![Lucky Parking](lucky-parking.png)

A [Hack for LA](https://www.hackforla.org/) project to help city planners and the community make informed decisions about parking politices in the City of Los Angeles.

## Prerequisites

- Install [Node.js 18](https://nodejs.org/).
- Install [pnpm](https://pnpm.io/).
- Fork the repository: https://github.com/hackforla/lucky-parking/fork.
- Clone your fork to your computer for local development.

## Scripts

In the project directory, you can run the following:

### pnpm install

Installs all dependencies defined in `package.json`. This step is required before running the project locally.

### pnpm run clean

Deletes any build artifacts and dependencies from the workspace and packages. You will need to re-execute `pnpm install` to run the project locally.

### pnpx nx dev client

Runs the client app in development mode. Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the client application.

### pnpx nx storybook ui

Runs the Storybook instance of the UI library. Open [http://localhost:6006/](http://localhost:6006/) in your browser to explore the UI library.

## Contributing

Contributions are always welcome!

To get started, following our organization [onboarding](https://www.hackforla.org/getting-started) steps, and as always, please adhere to [Hack for LA's Code of Conduct](https://github.com/hackforla/codeofconduct).
