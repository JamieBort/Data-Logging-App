# ToDo

A comprehensive list of what still needs to addressed.

## To Do

1. Determine which branch has the following files the most up-to-date,

   the `NextSteps.md`, `Progress.md`, `README.md`, and `ToDo.md` files.

   The `React_Native_feature_list` branch or the `React_Native_cleanup` branch.

   Then merge those files into the `React_Native` branch.

   And then into the `dev` branch.

   And then into the `main` branch.

2. Determine whether I should use <View> and when it is/is not needed - when I am not getting any warnings to use one.

3. List the features I want to have.

   Organized by type: (insulin/pump/cartridge/etc., dexcom/sensor/transmitter/etc., exercise, etc. ).

   Then by description of what needs to be recorded.

   Then by questions that need to be asked when recording this information.

   Come back to the `React_Native_feature_list` branch for this.

4. Finish adding all my wanted features to the `DATA_OBJECT` object in the `./ReactNative/data-logging-app/FeatureList.js` file.

   Come back to the `React_Native_feature_list` branch for this.

5. Address the `The git repository at has too many active changes, only a subset of Git features will be enabled.` issue VS Code is giving me with this repo. See https://stackoverflow.com/questions/60160453/vs-code-the-git-repository-has-too-many-active-changes-only-a-subset-of-git-f

6. Look into restructuring the app:

   Moving all the components into a components directory.

   Determine whether I want to move the api calls to other file(s). A API call resource: https://www.freecodecamp.org/news/react-native-networking-api-requests-using-fetchapi/

   Come back to the `React_Native_cleanup` branch for this.

7. Get rid of the `<Separator />` component and group the buttons on the dashboard by `pump`, `cgm`, `physical activity`, `other`, etc.

8. Create a component for each type of data that needs to be entered into the database.

   For example:

   ```
   data: [
       "TimeStamp",
       "Lot Number",
       "Code",
       "Location On Body",

       // (LocationOnBody = [
       //   ["left side", "right side"],
       //   (bodyPart = ["thigh"]),
       // ]),

       // {
       //   "Location on Body": [
       //     ["left side", "right side"],
       //     (bodyPart = ["thigh"]),
       //   ],
       // },
   ],
   ```

   and

   ```
   data: [
       "TimeStamp",
       "Circumstances - note field?",
       {
           "Dropdown or Radio buttons or check boxes": [
           "option one",
           "option two",
           "option three",
           "option four opens a short field to enter a brief description",
           ],
       },
   ],
   ```

   Each base component for logging info will have a default setup.

   This will include an _edit_ button to edit (including delete) the last entry. And **possibly** a _more_ button to add more info.

   Come back to the `React_Native_feature_list` branch for this.

9. Add to the dashboard/landing page/home page a button to _edit older data_.

   Specifically

   - bulk editing older entries

   - and bulk deleting older entries

10. Look into how stable/reliable Airtable is.

    Can I back it up for example? Suppose I delete all the data manually, can I get it back? Suppose I delete all the data with an api call.

    Can I get it back?

    Can I use Google sheets too? Do I want to use both? Do I want to use Google Sheets instead of Airtable?

11. Look into using react-native-config instead.

    Also look at https://12factor.net/config

12. Update the steps in the `./Data-Logging-App/ReactNative/README.md` file.

    Make sure to include a reference to `expo start --tunnel`.

    And https://trello.com/c/bRzPaKks/1366-expo-catchall-for-learning-directory

13. If I ever use the `Angular`, `Svelte_Native`, or `Vue` Git branches, make sure to remove the following directories that do not correspond: `angular-tour-of-heroes/`, `ReactNative/`, `Svelte/`, and/or `Vue/`.

14. When the `React_Native` branch is ready to be merged into the `dev` branch, move the `./Data-Logging-App/ReactNative/data-logging-app` directory into the `./Data-Logging-App/` directory. (or the `./` directory.)
