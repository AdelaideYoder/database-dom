// In your JavaScript file, load your home inventory from local storage.

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

// pull database back from local storage
let allTheStuff = loadDatabase("HomeInventory");

console.log("This is to see the inventory database", allTheStuff);

//______________________________THE NEXT PART_______________________________________
// Iterate over every data set in the database and create a <section> component.

const HomeInventoryDatabase = loadDatabase("HomeInventory")
console.log("this is it", HomeInventoryDatabase)

const myStuffArticle = document.querySelector("#myStuff")

const homeInventoryFragment = document.createDocumentFragment()

//---------------------------FIRST WAY TO WRITE FUNCTION USING .forEach--------------------------
// for (let tableForm in HomeInventoryDatabase) {
//     const invTable = HomeInventoryDatabase[tableForm]
//     invTable.forEach(item => {
//       const sectionElement = document.createElement("section")
//       for (let key in item) {
//         const paragraphElement = document.createElement("p")
//         paragraphElement.textContent = `${key}: ${item[key]}`
//         sectionElement.appendChild(paragraphElement)
//       }
//       homeInventoryFragment.appendChild(sectionElement)
//     })
//   }  
  

//   myStuffArticle.appendChild(homeInventoryFragment)

//-------------------------------SECOND WAY TO WRITE FUNCTION USING LONG WAY-----------------------
//_______________"FOR IN" LOOP_________"FOR" LOOP_________"FOR IN" LOOP___________________________
for (let tableForm in HomeInventoryDatabase) {
    const invTable = HomeInventoryDatabase[tableForm]
    // invTable.forEach(item => {
        console.log("invTable", invTable)
    for (let i = 0; i < invTable.length; i++) {
      const sectionElement = document.createElement("section")
      for (let key in invTable[i]) {
        const paragraphElement = document.createElement("p")
        paragraphElement.textContent = `${key}: ${invTable[i][key]}`
        sectionElement.appendChild(paragraphElement)
      }
      homeInventoryFragment.appendChild(sectionElement)
    }
  }  
  

  myStuffArticle.appendChild(homeInventoryFragment)

// That component itself should contain three <p> components. One for the name, location, and description.
// Attach the p components as children of the section.
// Attach the section as a child of the article.


//___________________________ADVANCED CHALLENGE_____________________________________

// const HomeInventoryDatabase = loadDatabase("HomeInventory")

// const myStuffArticle = document.querySelector("#myStuff")

// const homeInventoryFragment = document.createDocumentFragment()

// const populateDomForDataSet = (dataSet) => {
//     const invTable = HomeInventoryDatabase[dataSet]
//     invTable.forEach(item => {
//       const sectionElement = document.createElement("section")
//       for (let key in item) {
//         const paragraphElement = document.createElement("p")
//         paragraphElement.textContent = `${key}: ${item[key]}`
//         sectionElement.appendChild(paragraphElement)
//       }
//       homeInventoryFragment.appendChild(sectionElement)
//     }) 
//   }
  
//   populateDomForDataSet("movies")
  
//   myStuffArticle.appendChild(homeInventoryFragment)
