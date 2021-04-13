// In diesem Projekt werde ich JavaScript verwenden, um zufällig ein Drei-Gänge-Menü zu erstellen, basierend auf dem, was auf einer Speisekarte verfügbar ist.

// Zuerst habe ich ein Menüobjekt erstellt, das die angebotenen Kurse enthalten soll.
const menu = {
  // dieses _course-Objekt enthält eine Zuordnung zwischen den einzelnen Gängen und den Gerichten
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return _courses.apetizers;
  },
  get mains() {
    return _course.mains;
  },
  get desserts() {
    return _courses.desserts;
  },
  // Erstellen einer Setter-Methode, um Änderungen an der Auswahl zu ermöglichen
  set appetizers(appetizers) {
    _courses.appetizers = appetizers;
  },
  set mains(mains) {
    _courses.mains = mains;
  },
  set desserts(desserts) {
    _courses.desserts = desserts;
  },
  // dies sollte die Kurse von den Getter- und Setter-Funktionen erhalten
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
      };
  },
  // Dadurch wird dem angegebenen Gang auf dem Menü ein neues Gericht hinzugefügt
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    // Dies schiebt die Dish-Objekte in das entsprechende Array in _courses des Menüs, basierend auf dem übergebenen courseName.
    return this._courses[courseName].push(dish);
  },
  // Dies ermöglicht uns, ein zufälliges Gericht aus einem Gang der Speisekarte zu bekommen.
  getRandomDishFromCourse(courseName) {
    // Festlegen der Schüsselanordnung für die Zufallsauswahl
    const dishes = this._courses[courseName];
    // Auswahl eines zufälligen Gerichts
    const randomIndex = Math.floor(Math.random() * dishes.length)
    return dishes[randomIndex]
  },
  // dies erzeugt eine zufällige Mahl
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers'); // eine beliebige Vorspeise zu bekommen
    const main = this.getRandomDishFromCourse("mains"); // zufällige Haupt
    const dessert = this.getRandomDishFromCourse('desserts'); //ein zufälliges Dessert.
    totalPrice = appetizer.price + main.price + dessert.price // Aufsummierung des Preises für die gesamte Mahlzeit
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is ${totalPrice}.`
  }
};
// Vorspeise
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.52);
menu.addDishToCourse('appetizers', 'Chips', 2.25);
menu.addDishToCourse('appetizers', 'Carot Fries', 5.64);

// Haupspeise
menu.addDishToCourse('mains', 'Beans', 8.63);
menu.addDishToCourse('mains', 'Lasagna', 10.46);
menu.addDishToCourse('mains', 'Steak', 7.26);

// Nachspeise
menu.addDishToCourse('desserts', 'Pudding', 3.45);
menu.addDishToCourse('desserts', 'Cake', 6.36);
menu.addDishToCourse('desserts', 'Ice Cream', 7.32);

let meal = menu.generateRandomMeal()
console.log(meal)

