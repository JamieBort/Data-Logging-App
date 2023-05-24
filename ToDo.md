# ToDo

A comprehensive list of what still needs to addressed.

## To Do

1.  Replace all `<Button>` components with `<Pressable>` components.

    Use the `React_Native_pressable` branch for this.

2.  Clean up the `./components/Group.js` file.

    Refactor the code. Rename variables. Deconstruct the objects differently.

    Delete comments, console.logs, etc.

    ~~Do this in the `React_Native_feature_list` branch.~~

    Come back to the `React_Native_cleanup` branch for this.

3.  Create a new user flow starting from the `./App.js` file. See the two notes regarding the user flow in the `./App.js` file.

4.  Create a `./ui/TogglePressable.js` file such that it can be used to "drill" down the `CONSTANTS` object in the `./constants/Constants.js` file.

    See the NOTE in the `./ui/PressableComponent2.js` file regarding recursive use/implementation of components.

    See also [React Native component calls itself](https://www.google.com/search?q=React+Native+component+calls+itself&oq=React+Native+component+calls+itself&aqs=chrome..69i57.7636j0j7&sourceid=chrome&ie=UTF-8)

    - [Recursive components in React: A real-world example](https://blog.logrocket.com/recursive-components-react-real-world-example/#:~:text=When%20a%20React%20component%20repeatedly,helps%20render%20deeply%20nested%20data.)

    - [How to render React Component into itself, in a recursive way](https://stackoverflow.com/questions/46003422/how-to-render-react-component-into-itself-in-a-recursive-way)

5.  Change the description for the `./Data-Logging-App/ReactNative/data-logging-app/components/dataComponents/` directory in the `.//Data-Logging-App/ReactNative/data-logging-app/components/README.md` file.

6.  Consider changing the location of the `./Data-Logging-App/ReactNative/data-logging-app/components/dataComponents/` directory. Or consider doing away with that directory and moving the files to an already existing directory.

7.  Update the components such that the const [isVisible, setIsVisible] = useState(false); toggles "off" the other ones when one of them is toggled visible.

8.  Possibly replace Alert with a modal.

9.  Implement a toggle switch component in the Group component.

10. Implement a modal component in the Group component.

11. Implement the `Top xx buttons pressed` component.

12. Create a component for each type of data that needs to be entered into the database.

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

13. Get the `<ToggleButton/>` component working in the `./App.js` file.

14. Add to the dashboard/landing page/home page a button to _edit older data_.

    Specifically

    - bulk editing older entries

    - and bulk deleting older entries

15. Look into how stable/reliable Airtable is.

    Can I back it up for example? Suppose I delete all the data manually, can I get it back? Suppose I delete all the data with an api call.

    Can I get it back?

    Can I use Google sheets too? Do I want to use both? Do I want to use Google Sheets instead of Airtable?

16. Look into using react-native-config instead of `.env`/`react-native-dotenv`.

    Also look at https://12factor.net/config

17. Update the steps in the `./Data-Logging-App/ReactNative/README.md` file.

    Make sure to include a reference to `expo start --tunnel`.

    And https://trello.com/c/bRzPaKks/1366-expo-catchall-for-learning-directory

18. If I ever use the `Angular`, `Svelte_Native`, or `Vue` Git branches, make sure to remove the following directories that do not correspond: `angular-tour-of-heroes/`, `ReactNative/`, `Svelte/`, and/or `Vue/`.

19. When the `React_Native` branch is ready to be merged into the `dev` branch, move the `./Data-Logging-App/ReactNative/data-logging-app` directory into the `./Data-Logging-App/` directory. (or the `./` directory.)

20. Determine whether I should use `<View>` and when it is/is not needed - when I am not getting any warnings to use one.

21. Consider getting rid of the `<Separator />` component.
