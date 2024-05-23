const readline = require('readline');const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });let inventory = {};function addItem() {
    rl.question('Enter item name: ', (name) => {
      rl.question('Enter quantity: ', (quantity) => {
        inventory[name] = parseInt(quantity);
        console.log('Item added successfully!');
        showMenu();
      });
    });
  }function removeItem() {
    rl.question('Enter item name to remove: ', (name) => {
      if (inventory[name]) {
        delete inventory[name];
        console.log('Item removed successfully!');
      } else {
        console.log('Item not found in inventory.');
      }
      showMenu();
    });
  }function viewInventory() {
    console.log('Current Inventory:');
    for (let item in inventory) {
      console.log(`${item}: ${inventory[item]}`);
    }
    showMenu();
  }function showMenu() {
    console.log('\n1. Add item\n2. Remove item\n3. View inventory\n4. Exit');
    rl.question('Enter your choice: ', (choice) => {
      switch (choice) {
        case '1':
          addItem();
          break;
        case '2':
          removeItem();
          break;
        case '3':
          viewInventory();
          break;
        case '4':
          console.log('Exiting program.');
          rl.close();
          break;
        default:
          console.log('Invalid choice. Please try again.');
          showMenu();
      }
    });
  }function start() {
    console.log('Welcome to the Inventory Management System!');
    showMenu();
  }start();