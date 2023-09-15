import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('FoodSmile.db');

export const initRationTable = () => {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS ration
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        total_calories REAL NOT NULL);`,
        [],
        () => {
          resolve();
        }
      );
    });
  });
};

export const initRationFoodTable = () => {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS ration_food
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
        ration_id INTEGER NOT NULL,
        food_id INTEGER NOT NULL,
        quantity REAL NOT NULL,
        calories REAL NOT NULL,
        FOREIGN KEY (ration_id) REFERENCES ration (id),
        FOREIGN KEY (food_id) REFERENCES food (id));`,
        [],
        () => {
          resolve();
        }
      );
    });
  });
};

export const addRation = (name) => {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO ration (name, total_calories) VALUES (?, 0)`,
        [name],
        (_, result) => {
          resolve(result.insertId);
        }
      );
    });
  });
};

export const addRationFood = (rationId, foodId, quantity) => {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO ration_food (ration_id, food_id, quantity) VALUES (?, ?, ?)`,
        [rationId, foodId, quantity],
        (_, result) => {
          resolve(result.insertId);
        }
      );
    });
  });
};

export const fetchRations = () => {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ration`,
        [],
        (_, result) => {
          resolve(result.rows._array);
        },
      );
    });
  });
};

export const fetchRationFoods = (rationId) => {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ration_food WHERE ration_id = ?`,
        [rationId],
        (_, result) => {
          resolve(result.rows._array);
        }
      );
    });
  });
};