import { initializeApp } from 'firebase/app';
import { useCallback, useEffect, useState } from 'react';
import { getDatabase, onValue, ref, update } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAXzlkZkvbAwHjKc4qA6zPYfoAuHiwg0c0",
    authDomain: "one--track.firebaseapp.com",
    databaseURL: "https://one--track-default-rtdb.firebaseio.com",
    projectId: "one--track",
    storageBucket: "one--track.appspot.com",
    messagingSenderId: "503148744717",
    appId: "1:503148744717:web:f33dbf86d4ee4c76570544"
  };

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};