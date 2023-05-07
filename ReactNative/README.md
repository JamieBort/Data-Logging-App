# ReactNative/

Created for React Native projects.

**NOTE:** From https://reactnative.dev/blog/2018/05/07/using-typescript-with-react-native we can use Typescript instead.

## Steps For Creating and Starting this Application

1.  navigated to https://expo.dev/

2.  Selected `Create a project`.

3.  Entered a name under `Display Name` and `A human-readable name for your Expo project.`.

4.  Selected `Create`.

    The following was then displayed:

    See the `01.png` and `02.png` screenshot in the `./attempt03/screenshots_for_markdown_files/` directory.

    ```
    Start developing your project
    You just created a new EAS project. Now, it's time to link this to your local project. There are two ways to accomplish this:

    Create a new project
    Terminal
    npm install --global eas-cli && \
    npx create-expo-app data-logging-app && \
    cd data-logging-app && \
    eas init --id d75b5df0-61b2-4a7b-b4d4-bbb4caba0d77
    Link an existing codebase
    Run the following commands in your project root directory:

    Terminal
    npm install --global eas-cli && \
    eas init --id d75b5df0-61b2-4a7b-b4d4-bbb4caba0d77
    ```

5.  Ran this (from above) in Terminal:

    ```
    npm install --global eas-cli && \
    npx create-expo-app data-logging-app && \
    cd data-logging-app && \
    eas init --id d75b5df0-61b2-4a7b-b4d4-bbb4caba0d77
    Link an existing codebase
    Run the following commands in your project root directory:
    ```

6.  In the `data-logging-app` directory, run `npx expo start` or `expo start`.

7.  [more steps] - make note of these

8.  Navigate to in terminal and run `expo start`.

9.  To

    a. view the app on a browser,

        Select `w` for `open web` option.

        See `Press w` in the `03.png` screenshot in the `./attempt03/screenshots_for_markdown_files/` directory.

        Note, https://docs.expo.dev/tutorial/create-your-first-app/#install-dependencies
        I did not install these dependencies with this command. But I was prompted to install some dependencies when I pressed `w`.

    b. view the app on the phone,

        [list next steps]

## Directories and Files

### Directories

- data-logging-app/ - The data logging application.

- screenshots_for_markdown_files/ -

### Files

- README.md - This readme file.

- Resources.md - Resources used in the attempt03/ directory. Everything I will learn I can keep track of here.
