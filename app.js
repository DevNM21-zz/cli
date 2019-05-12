#!/usr/bin/env node
const Aboutme = require('./commands/aboutme');
const contactMe = require('./commands/contactme')
const inquirer = require('inquirer')
const data = require('./data')

const Index = () => {
    console.log('Welcome to my profile');
    // Aboutme()
    // contactMe()
    
    inquirer.prompt([{ 
        type : "list",
        choices : ['aboutme','contactme'],
        name : "response"
    }]).then((response) => {
        var a = response.response;
        if (a === 'aboutme') {
            console.log(data.aboutme);
            }
        else if (a === 'contactme') {
            console.log(data.contactme);
            
        }
        
        
    })
};
Index()


module.exports = Index;