import {User} from '../types/types'
const STORAGE_KEY = 'userTableData'


export const getTableData = (): any => {
    const storedData = localStorage.getItem(STORAGE_KEY)
    return storedData ? JSON.parse(storedData) : []
}

export const saveTableData = (data: any): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export const deleteUser = (id: number):void => {
    const tableData = getTableData()
    if (tableData[id]) {
      delete tableData[id]
      saveTableData(tableData)
    }
}

export const deleteUsers = (ids: number[]):void => {
    let tableData = getTableData()
    tableData = tableData.filter((user:User)=> !ids.includes(user.id))
    saveTableData(tableData)
}

export const getUser = (id: number) => {
    const tableData = getTableData()
    return tableData[id] || null
}

export const addUser = (user: User) => {
    let tableData = getTableData()

    let newUserId = 0
    if (tableData.length > 0) {
        
        const maxId = tableData.reduce((max: number, currentUser: User) => {
            return currentUser.id > max ? currentUser.id : max
        }, 0)
        newUserId = maxId + 1
    }

    const newUser = { ...user, id: newUserId }
    tableData.push(newUser)
    saveTableData(tableData)
}