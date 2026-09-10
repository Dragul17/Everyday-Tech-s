const fs = require('fs');
const path = require('path');

const newName = 'DraGulA';
const newEmail = 'dinezktg2007@gmail.com';

// Update articles
const articlesDir = path.join(__dirname, '../content/articles');
const files = fs.readdirSync(articlesDir);

files.forEach(file => {
  if (file.endsWith('.md')) {
    const filePath = path.join(articlesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/\[YOUR NAME\]/g, newName);
    fs.writeFileSync(filePath, content);
  }
});

// Update generator script so future articles are correct
const scriptPath = path.join(__dirname, 'generate-articles.js');
if (fs.existsSync(scriptPath)) {
  let scriptContent = fs.readFileSync(scriptPath, 'utf8');
  scriptContent = scriptContent.replace(/\[YOUR NAME\]/g, newName);
  fs.writeFileSync(scriptPath, scriptContent);
}

// Update contact page
const contactPath = path.join(__dirname, '../src/app/contact/page.js');
if (fs.existsSync(contactPath)) {
  let contactContent = fs.readFileSync(contactPath, 'utf8');
  contactContent = contactContent.replace(/\[YOUR REAL CONTACT EMAIL\]/g, newEmail);
  fs.writeFileSync(contactPath, contactContent);
}

console.log('User details updated successfully.');
