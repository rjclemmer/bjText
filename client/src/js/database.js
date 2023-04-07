import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // Create a connection to the "jate" database with version 1.
  const jateDb = await openDB("jate", 1);

  // Start a transaction with "jate" object store in "readwrite" mode.
  const tx = jateDb.transaction("jate", "readwrite");

  // Get the object store from the transaction.
  const store = tx.objectStore('jate');

  // Put the content into the object store with an auto-incrementing key.
  const request = store.put({id: 1, value: content});

  // Wait for the put operation to complete and get the result.
  const result = await request;

  // Log a message indicating that the update has been saved to the database.
  console.log("Update has been saved to the database!", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // Log a message indicating that text has been retrieved.
  console.log("Text has been retrieved");

  // Create a connection to the "jate" database with version 1.
  const jateDb = await openDB("jate", 1);

  // Start a transaction with "jate" object store in "readonly" mode.
  const tx = jateDb.transaction("jate", "readonly");

  // Get the object store from the transaction.
  const store = tx.objectStore("jate");

  // Get all the values from the object store.
  const request = store.getAll();

  // Wait for the getAll operation to complete and get the result.
  const result = await request;

  // Log a message indicating that the result has been retrieved.
  console.log("result.value", result.value);

  // Return the retrieved result.
  return result.value;
};


initdb();
