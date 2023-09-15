import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('FoodSmile.db');

const checkFoodTable = async (tx) => {
  return new Promise((resolve) => {
    tx.executeSql(
      'SELECT COUNT(*) as rowCount FROM food;',
      [],
      (_, result) => {
        resolve(result.rows.item(0).rowCount);
      }
    );
  });
};

export const initFoodTable = () => {
  return new Promise((resolve) => {
    db.transaction(async (tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS food
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        unit TEXT NOT NULL,
        calories REAL NOT NULL);`,
        [],
        async () => {
          const rowCount = await checkFoodTable(tx);
          if (rowCount === 0) {
            await insertInitialFood(tx);
          }
          resolve();
        }
      )
    });
  });
};

const insertInitialFood = (tx) => {
  return new Promise(async (resolve) => {
    const initialFood = [
      { name: 'Яблоко', unit: 'шт', calories: 78 },
      { name: 'Банан', unit: 'шт', calories: 107 },
      { name: 'Огурец', unit: 'шт', calories: 15 },
      { name: 'Помидор', unit: 'шт', calories: 18 },
      { name: 'Яйцо (вареное)', unit: 'шт', calories: 78 },
      { name: 'Куриное филе (грудка)', unit: '100г', calories: 165 },
      { name: 'Картофель (вареный)', unit: '100г', calories: 87 },
      { name: 'Хлеб ржаной', unit: '100г', calories: 242 },
      { name: 'Миндаль', unit: '100г', calories: 575 },
      { name: 'Лосось', unit: '100г', calories: 208 },
      { name: 'Вода', unit: 'литр', calories: 0 },
    ];

    for (const food of initialFood) {
      addFood(food.name, food.unit, food.calories);
    }
    resolve();
  });
};

export const addFood = (name, unit, calories, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO food (name, unit, calories) VALUES (?, ?, ?);',
      [name, unit, calories],
      () => {
        if (callback) {
          callback();
        }
      }
    );
  });
};

export const fetchAllFood = (callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM food ORDER BY name ASC;',
      [],
      (_, result) => {
        callback(result.rows._array);
      }
    );
  });
};

export const deleteFood = (id, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'DELETE FROM food WHERE id = ?;',
      [id],
      () => {
        callback();
      }
    );
  });
};
