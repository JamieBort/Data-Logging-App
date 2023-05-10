# Data-Logging-App

An app to log data points from my phone.

The web version might be in my [Personal Dashboard](https://github.com/JamieBort/PersonalDashboard); in which case it will be behind authentication.

The intent is to collect data to be analyzed to improve my quality of life. This will be done via my [Personal Dashboard](https://github.com/JamieBort/PersonalDashboard).

## Data points to collect

The timestamp for the following:

- when I change only my tubing (this almost never happens)

- when I change an old reservoir for a new reservoir (and refill it with insulin and replace the old tubing for new tubing - this always happens together)

- when I refill an old reservoir with insulin ( and replace the old tubing for new tubing - this always happens together)

- when I replace the old sensor for a new sensor.

- when I replace the old transmitter for a new transmitter

- when I remove the old transmitter and then replace the same old transmitter

- when I start/stop exercising

- when my pump/mobile loses the CGM signal.

- Possibly to log my sleep start/end.

* For the rest of the data points that are to be collect, see the [Data points to collect](https://docs.google.com/document/d/1KQw0Kq4O_SCzxrQZaZg0MucxXqoEE0kOTe9mDmxpD2M/edit#heading=h.yevh3z6ycq85) section of the [Personal Dashboard Business Requirements](https://docs.google.com/document/d/1KQw0Kq4O_SCzxrQZaZg0MucxXqoEE0kOTe9mDmxpD2M/) Google Drive doc.

At a later date I may start to record other data points such as lot numbers for these items, temperature, time of day, etc.

## Logistics and Features

**Mobile** (and tablet ? )

- to be entered with just the push of a button - each event gets one button that logs the timestamp. Nothing more - that's the default.

- option to select an `edit` button that will allow me to modify the date/time.

- a further option to edit older data.

**desktop** (and/or web based) features and logistics

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
        |   |   + - React_Native_feature_list -  For listing the features I'd like to implement.
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
