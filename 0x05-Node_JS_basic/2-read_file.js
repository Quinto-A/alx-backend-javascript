/**
 * imports the fs module for sync file operations
 */

const fs = require('fs');

/**
 * counts the number of students in a csv DB file & logs
 *
 * @param {string} filepath to CSV db files
 * @throws {Error} If DB cannot be loaded
 */
function countStudents(filepatth) {
  let data;
  try {
    data = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const lines = data.split('\n').map(line => line.trim()).filter(line => line !== '');

  if (lines.length === 0) {
    console.log('Number of students: 0');
    return;
  }

  const header = lines[0].split(',');
  const studentsData = lines.slice(1);

  const studentsByField = {};
  let totalStudents = 0;

  studentsData.forEach(line => {
    const [firstname, , , field] = line.split(',');
    if (firstname && field) {
      totalStudents++;
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
    studentsByField[field].push(firstname);
    }
  });

  console.log(`Number of students: ${totalStudents}`);
  for (const field in studentsByField) {
    if (Object.hasOwnProperty.call(studentsByField, field)) {
      const studentNames = studentsByField[field];
      console.log(`Number of students in ${field}: ${studentNames.length}.List: ${studentNames.join(', ')}`);
    }
  }
}

module.exports = countStudents;
