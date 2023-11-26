// Import necessary modules for Node.js
const readline = require('readline');
const fs = require('fs');
const csv = require('csv-parser');

// Create a readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform binary search on contacts by name
function binarySearch(contacts, targetName) {
    let low = 0;
    let high = contacts.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let midName = contacts[mid].name;

        if (midName === targetName) {
            return mid;  // Contact found
        } else if (midName < targetName) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;  // Contact not found
}

// Function to search for a contact in the phone book
function phoneBookSearch(contacts, targetName) {
    // Sort the contacts by name
    contacts.sort((a, b) => a.name.localeCompare(b.name));

    let index = binarySearch(contacts, targetName);

    if (index !== -1) {
        // Handle the case when there are multiple contacts with the same name
        let startIndex = index;
        let endIndex = index;

        // Check contacts with the same name towards the left
        while (startIndex > 0 && contacts[startIndex - 1].name === targetName) {
            startIndex--;
        }

        // Check contacts with the same name towards the right
        while (endIndex < contacts.length - 1 && contacts[endIndex + 1].name === targetName) {
            endIndex++;
        }

        // Print all contacts with the same name
        console.log(`Contacts found with the name '${targetName}':`);
        for (let i = startIndex; i <= endIndex; i++) {
            console.log(`Contact: ${JSON.stringify(contacts[i])}`);
        }
    } else {
        console.log("Contact not found.");
    }
}

// Function to read contacts from a CSV file
function readContactsFromCSV(file_path, callback) {
    const contacts = [];

    fs.createReadStream(file_path)
        .pipe(csv())
        .on('data', (row) => {
            contacts.push({ name: row["First Name"], surname: row["Last Name"], phone: row["Phone Number"] });
        })
        .on('end', () => {
            callback(contacts);
        });
}

// Example usage:
// Replace with the actual path to your CSV file
const file_path = 'C:/Users/Ishan Gohil/OneDrive/Desktop/CPL_Project/contacts.csv';
// Read contacts from CSV file
readContactsFromCSV(file_path, (contactsList) => {
    // Get user input for contact name
    rl.question("Enter the contact name to search: ", (searchName) => {
        // Now you can use the phoneBookSearch function with the user input and imported contacts list
        phoneBookSearch(contactsList, searchName);
        rl.close();
    });
});
