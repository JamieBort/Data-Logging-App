# Data-Logging-App

An app to log data points from my phone to be saved into a database.

The web version might be incorporated into my [Personal Dashboard](https://github.com/JamieBort/PersonalDashboard); in which case it will be behind authentication.

The intent is to collect data that will then be analyzed to improve my quality of life. This will be done via my [Personal Dashboard](https://github.com/JamieBort/PersonalDashboard).

## Data points to collect

Examples of what will be collected are:

- When I change the sensor for my continuous glucose monitor, and any additional notes I want or need to leave.

- when I start exercising, when I stop, and how intensely I worked out (easy, medium, or hard), and any additional notes I want or need to leave.

- When I change my insulin pump infusion set and where on my body I placed it, and any additional notes I want or need to leave.

- When I treat a low blood sugar episode with food, the amount of grams I consume, and any additional notes I want or need to leave.

The rest of the data points that are to be collect, see the [Data points to collect](https://docs.google.com/document/d/1KQw0Kq4O_SCzxrQZaZg0MucxXqoEE0kOTe9mDmxpD2M/edit#heading=h.yevh3z6ycq85) section of the [Personal Dashboard Business Requirements](https://docs.google.com/document/d/1KQw0Kq4O_SCzxrQZaZg0MucxXqoEE0kOTe9mDmxpD2M/) Google Drive doc.

At a later date I may start to record other data points. Such as lot numbers for some of these items, temperature, time of day, etc.

## Logistics and Features

**Mobile** (and tablet ? )

- to be entered with just the push of a button - each event gets one button that logs the timestamp. Nothing more - that's the default.

- option to select an `edit` button that will allow me to modify the date/time.

- a further option to edit older data.

**Desktop** (web-based)

- I hadn't thought about this yet.
  But I think it is important to have the ability to add and change info without my phone/via a browser.

## Future Features

Replace Airtable with a more secure database.

## Directories and Files

### Directories

- .expo - See the `.expo/README.md` file.

- angular-tour-of-heroes - Created when in the `Angular_Tour_Of_Heros` branch and for exploring "regular" Angular. REMOVED FROM GIT CACHE - not visible anymore.

- ReactNative/ - Created for React Native projects.

- Svelte - Created for Svelte Native projects. REMOVED FROM GIT CACHE - not visible anymore.

- Vue - Created for Vue projects. REMOVED FROM GIT CACHE - not visible anymore.

### Files

- LICENSE

- NextSteps.md - The next things that need to be accomplished, in order, based on the list found in the `ToDo.md` file.

- Progress.md

- README.md - This readme file.

- ToDo.md - Tasks the need to be completed.

* Status.md - Not yet created.

## Associated Links

- GitHub repo https://trello.com/c/0dGDNxkk/1351-data-logging-app

## Branches

```
main - The live/production branch.
    |
    + - dev - The development branch.
        |
        + - library - For determining which library to use.
        |   |
        |   + - Angular - For exploring Angular.
        |   |   |
        |   |   + - Angular_Tour_Of_Heros - For exploring "regular" Angular.
        |   |   |
        |   |   + - Angular_Mobile - For exploring Angular that I'd build my app with.
        |   |
        |   + - Vue - For exploring Vue.
        |   |
        |   + - React_Native - For exploring React Native.
        |   |   |
        |   |   + - React_Native_feature_list -  For listing the features I'd like to implement. And for creating the associated components.
        |   |   |
        |   |   + - React_Native_cleanup -  For cleaning up each file. Remove superfluous lines of code, comments, etc. And for restructuring the file structure; for possibly creating and using a `components` directory.
        |   |   |
        |   |   + - React_Native_restructure -  For restructuring the folder structure of this project/app.
        |   |   |
        |   |   + - React_Native_variables - For updating the `./constants/Constants.js` file.
        |   |   |
        |   |   + - React_Native_top_buttons_pressed - For implementing the `Top xx buttons pressed` component in the `./App.js` file.
        |   |   |
        |   |   + - React_Native_modal - For implementing the modal component in the `./components/Group.js` file.
        |   |   |
        |   |   + - React_Native_pressable - For changing all `<Button>` components into `<Pressable>` components.
        |   |
        |   + - Svelte_Native - For exploring Svelte Native.
        |   |
        |   + - Ionic - For developing the app using Iconic, possibly in conjunction with Angular, Vue, React Native, or Svelte Native.
        |
        + - database_button - For setting up a database (Airtable, Google Drive doc., etc.).
                              And having a button in the app create a timestamp in the database. NOTE: name of branch to change.
        |
        + - sdk_install - For installing the sdk file or otherwise getting the app permanently on the phone.
                          Right now exp needs to be running on my computer for the app to work on my phone.
                          See sub-sections under https://docs.expo.dev/archive/expo-cli/#commands
```
