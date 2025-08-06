# 🎯Enigma-Task-3-Group-Algozenith-3.0

---

## 🕷 Marvel Comics

A Marvel-Comics website featuring all characters, comics, stories, series and all about the marvel world .  Users can browse through marvel comics and series. Marvel fans can use it to explore their favorite parts of the Marvel universe.

---

## 🖥 Tech-Stack

- 🎨 *Frontend* :- [HTML](https://html.spec.whatwg.org) , [CSS](https://www.w3.org/TR/CSS/) , [JS](https://262.ecma-international.org)
- ⚙ *API* :-[Marvel API](https://developer.marvel.com/)
- 🔧 *Backend* :- [ExpressJs](https://expressjs.com)

---

## 📁 Project Structure

```bash
📁marvel/
├── 📄 server.js
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 .gitignore
├── 📁 public/
    ├── 📄 index.html
    ├── 📄 characters.html
    ├── 📄 comics.html
    ├── 📄 events.html
    ├── 📄 fanzone.html
    ├── 📄 about.html
```

---

## 📌 Pre-requisites
- 🟢[Node.js (v16+ recommended)](https://nodejs.org/)
- 📦 [npm](https://www.npmjs.com/)
- 🌐 [Git](https://git-scm.com/)
- 📄 .env file - with environment variables like port
- 🦸‍♂🔗[Marvel API](https://developer.marvel.com/)
- [![npm version](https://img.shields.io/npm/v/md5.svg)](https://www.npmjs.com/package/md5)


---

## 🛠 Setup Guide

```bash
#1) Create a folder named marvel and make it a git repository.
`git init`.
#2) Fork the github repository and clone it into your folder.
`git clone` https://github.com/piyushmishra0620/Enigma-Task-3-Group-Algozenith-3.0 .
#3) Open the folder in code and install node dependencies.
`npm install` express md5 dotenv nodemon cors .
#4) Create a .env file and add the private api key and the port with which the server will run.
#PORT=3000
#PRIVATE_API= your private api key .
#5) Start your server locally .
`nodemon` server.js
```
---

## 🕷 Marvel API

```bash
#1) Create an account in Marvel Developers and get the public API and private API.
#2) Store the private API in the .env file and don't expose it on the frontend.
/// The query string of the marvel api requires three necessary parameters, i.e, the ts(timestamp) key,the hash key and the public api key , with the keys ts, hash, apikey respectively.
#3) So, use the private key on the backend to generate the hash key. One such way to generate is to use the md5 package. hash = md5(ts+private_key+public_key) ,in the order mentioned.
#4) Send a get request to the backend to get the hash key and ts and then use it in the query string along with your public api key.
```
---

## 🌐 Deployment Link

https://marvel-pedia-one.vercel.app/
---
