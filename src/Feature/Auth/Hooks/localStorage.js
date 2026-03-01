class localStorageService {
  constructor(key = "users") {
    this.key = key
  }
  setData(newUser) {
    const allData = JSON.parse(localStorage.getItem('users')) || []
    allData.push(newUser)
    localStorage.setItem('users', JSON.stringify(allData))
  }
  getData() {
    const data = localStorage.getItem(this.key)
    return data ? JSON.parse(data) : []
  }
  removeLocalStorage(){
    localStorage.removeItem(this.key)
  }
}


export default localStorageService
