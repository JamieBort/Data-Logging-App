// ./PostEventComponent.js

// NOTE: Not yet implemented

// NOTE: NOT USING THIS.

// TODO: delete this file.

import {
  AIRTABLE_BASE_ID_DATA_LOGGING_BASE,
  TABLE_ID,
  AIRTABLE_TOKEN,
  wrong_TOKEN,
} from "@env";

const PostEventComponent = () => {
  // POST event in Data Logging Base base in Airtable.

  const postEvent = async (param) => {
    try {
      const airtableData = {
        fields: {
          Type: param,
          TimeStamp: Date.now(),
        },
      };

      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID_DATA_LOGGING_BASE}/${TABLE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${AIRTABLE_TOKEN}`,
            // Authorization: `Bearer ${wrong_TOKEN}`,
          },
          body: JSON.stringify(airtableData),
        },
      );

      if (!response.ok) {
        const message = `Error has ocurred:${response.status}`;
        throw new Error(message);
      }

      const dataResponse = await response.json();
      //   return dataResponse;
      console.log("dataResponse:", dataResponse);
      Alert.alert("Event Created:", dataResponse.fields.Type);
    } catch (error) {
      console.log(error.message);
      Alert.alert("Event NOT Created:", error.message);
      return null;
    }
  };
};

export default PostEventComponent;
