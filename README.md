# Team Profile Generator

## Table of Contents
* [Description](#description)
* [The Challenge](#challenge)
* [The Criteria](#criteria)
* [Installation](#install)
* [Usage](#usage)

## Description <a name="description"></a>
A command-line application created using Node.js that takes user input about their software engineering team and generates an HTML page.

![Team Profile Generator](./screenshot/team-profile-generator.gif)
[Click here to watch video](https://drive.google.com/file/d/1zZErlHF2Q2G29mcMt-Guv94bQIBvLtqh/preview)

## The Challenge <a name="challenge"></a>
AS A manager I WANT to generate a webpage that displays my team's basic info SO THAT I have quick access to their emails and GitHub profiles

## The Criteria <a name="criteria"></a>
1. Generate an HTML file that displays the information the user passed in about their team
1. When you click on an email address, the default email program opens up and populates the TO field with the team member's email address
1. When you click on a GitHub username, that GitHub profile opens in a new tab
1. When starting application, you are prompted to enter the team manager's name, employee ID, email, and office number
1. Then you are asked to pick to add an engineer, add an intern, or finish building the team
1. If you pick the engineer option, you are prompted to enter their name, ID, email, and GitHub name
1. If you pick the intern option, you are prompted to enter their name, ID, email, and school name
1. If you pick finish building the team, the application ends and the HTML file is generated

## Installation <a name="install"></a>
After cloning the code, use npm install to install dependecies and then type node index into your terminal. Answer the prompted questions and index.html file will be generated to the dist folder.

## Usage <a name="usage"></a>
MIT License

Copyright (c) 2021 Ian Jackson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 