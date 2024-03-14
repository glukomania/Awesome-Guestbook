import {User} from '../types/types'
const STORAGE_KEY = 'userTableData'


export const getTableData = (): any => {
const storedData = localStorage.getItem(STORAGE_KEY);
return storedData ? JSON.parse(storedData) : [];
}

export const saveTableData = (data: any): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export const deleteUser = (id: number):void => {
    const tableData = getTableData();
    if (tableData[id]) {
      delete tableData[id];
      saveTableData(tableData);
    }
  }

  export const getUser = (id: number) => {
    const tableData = getTableData();
    return tableData[id] || null;
  }

  export const addUser = (user: User) => {
    let tableData = getTableData();
    // here I try to get max value of current id to make an id for a new user

    let newUserId = 0
    if(tableData.length > 0) {
        const maxId = Object.keys(tableData).reduce((max, userId) => {
            const numericId = parseInt(userId, 10);
            return numericId > max ? numericId : max;
          }, 0);
        newUserId = maxId + 1;
    }

    const newUser = { ...user, id: newUserId };

    tableData[newUserId] = newUser
    saveTableData(tableData);
  }