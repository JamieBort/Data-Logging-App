# ToDo

A comprehensive list of what still needs to addressed.

## To Do

1. Clean up each file.

   Remove superfluous lines of code, comments, etc.

   Remove commented out code, superfluous console.log()'s, and the like. Add helpful comments.

   Use `React_Native_cleanup` as a branch name.

2. List the features I want to have.

   Organized by type: (insulin/pump/cartridge/etc., dexcom/sensor/transmitter/etc., exercise, etc. ).

   Then by description of what needs to be recorded.

   Then by questions that need to be asked when recording this information.

   Come back to the `React_Native_feature_list` branch for this.

3. Finish adding all my wanted features to the `DATA_OBJECT` object in the `./ReactNative/data-logging-app/FeatureList.js` file.

   Come back to the `React_Native_feature_list` branch for this.

4. Address the `The git repository at has too many active changes, only a subset of Git features will be enabled.` issue VS Code is giving me with this repo. See https://stackoverflow.com/questions/60160453/vs-code-the-git-repository-has-too-many-active-changes-only-a-subset-of-git-f

5. Look into moving all the components into a components directory.

   Use `React_Native_cleanup` as a branch name.

   Come back to the `React_Native_cleanup` branch for this.

6. Create a component for each type of data that needs to be entered into the database.

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

7. Add to the dashboard/landing page/home page a button to _edit older data_.

8. Look into how stable/reliable Airtable is.

   Can I back it up for example? Suppose I delete all the data manually, can I get it back? Suppose I delete all the data with an api call.

   Can I get it back?

   Can I use Google sheets too? Do I want to use both? Do I want to use Google Sheets instead of Airtable?

9. Look into using react-native-config instead.

   Also look at https://12factor.net/config

10. Update the steps in the `./Data-Logging-App/ReactNative/README.md` file.

    Make sure to include a reference to `expo start --tunnel`.

    And https://trello.com/c/bRzPaKks/1366-expo-catchall-for-learning-directory

11. If I ever use the `Angular`, `Svelte_Native`, or `Vue` Git branches, make sure to remove the following directories that do not correspond: `angular-tour-of-heroes/`, `ReactNative/`, `Svelte/`, and/or `Vue/`.

12. When the `React_Native` branch is ready to be merged into the `dev` branch, move the `./Data-Logging-App/ReactNative/data-logging-app` directory into the `./Data-Logging-App/` directory. (or the `./` directory.)
