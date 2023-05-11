# ToDo.md

1. Update the steps in the `./Data-Logging-App/ReactNative/README.md` file. Make sure to include a reference to `expo start --tunnel`. And https://trello.com/c/bRzPaKks/1366-expo-catchall-for-learning-directory

2. When the `React_Native` branch is ready to be merged into the `dev` branch, move the `./Data-Logging-App/ReactNative/data-logging-app` directory into the `./Data-Logging-App/` directory. (or the `./` directory.)

3. If I ever use the `Angular`, `Svelte_Native`, or `Vue` Git branches, make sure to remove the following directories that do not correspond: `angular-tour-of-heroes/`, `ReactNative/`, `Svelte/`, and/or `Vue/`.

4. Look into how stable/reliable Airtable is. Can I back it up for example? Suppose I delete all the data manually, can I get it back? Suppose I delete all the data with an api call. Can I get it back? Can I use Google sheets too? Do I want to use both? Do I want to use Google Sheets instead of Airtable?

5. Clean up each file. Remove superfluous lines of code, comments, etc. Use `React_Native_cleanup` as a branch name.

6. Look into moving all the components into a components directory. Use `React_Native_cleanup` as a branch name.

7. Create a component for each type of data that needs to be entered into the database. For example:

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

   Come back to the `React_Native_feature_list` branch for this.
