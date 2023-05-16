# ToDo

A comprehensive list of what still needs to addressed.

## To Do

1. Replace all `<Button>` components with `<Pressable>` components.

2. Possibly replace Alert with a modal.

3. Implement a toggle switch component in the Group component.

4. Implement a modal component in the Group component.

5. Implement the `Top xx buttons pressed` component.

6. Finish adding all my wanted features to the `DATA_OBJECT` object in the `./ReactNative/data-logging-app/FeatureList.js` file.

   Come back to the `React_Native_feature_list` branch for this.

7. List the features I want to have.

   Organized by type: (insulin/pump/cartridge/etc., dexcom/sensor/transmitter/etc., exercise, etc. ).

   Then by description of what needs to be recorded.

   Then by questions that need to be asked when recording this information.

   Come back to the `React_Native_feature_list` branch for this.

8. ~~Get rid of the `<Separator />` component and group the buttons on the dashboard by `pump`, `cgm`, `physical activity`, `other`, etc.

   See the `./ReactNative/data-logging-app/Variables.js` file for these names.~~

   I am using this now.

9. Create a component for each type of data that needs to be entered into the database.

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

   ~~Come back to the `React_Native_feature_list` branch for this.~~

   Create a `React_Native_feature_component` branch for this.

10. Get the `<ToggleButton/>` component working in the `./App.js` file.

11. Add to the dashboard/landing page/home page a button to _edit older data_.

    Specifically

    - bulk editing older entries

    - and bulk deleting older entries

12. Look into how stable/reliable Airtable is.

    Can I back it up for example? Suppose I delete all the data manually, can I get it back? Suppose I delete all the data with an api call.

    Can I get it back?

    Can I use Google sheets too? Do I want to use both? Do I want to use Google Sheets instead of Airtable?

13. Look into using react-native-config instead of `.env`/`react-native-dotenv`.

    Also look at https://12factor.net/config

14. Update the steps in the `./Data-Logging-App/ReactNative/README.md` file.

    Make sure to include a reference to `expo start --tunnel`.

    And https://trello.com/c/bRzPaKks/1366-expo-catchall-for-learning-directory

15. If I ever use the `Angular`, `Svelte_Native`, or `Vue` Git branches, make sure to remove the following directories that do not correspond: `angular-tour-of-heroes/`, `ReactNative/`, `Svelte/`, and/or `Vue/`.

16. When the `React_Native` branch is ready to be merged into the `dev` branch, move the `./Data-Logging-App/ReactNative/data-logging-app` directory into the `./Data-Logging-App/` directory. (or the `./` directory.)

17. Determine whether I should use `<View>` and when it is/is not needed - when I am not getting any warnings to use one.
