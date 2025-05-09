# 📝 Real-Time Markdown Editor

A clean, two-pane real-time Markdown editor built with Flask and deployed on Fly.io. This project lets users type Markdown on the left and see beautifully rendered rich text on the right — with instant PDF export and copy-to-clipboard functionality.

Live Demo: https://markdown-editor-zo.fly.dev


## ⚙️ Features

- Real-time Markdown rendering
- Rich text preview using `marked.js`
- Export preview as a formatted PDF
- Copy rendered content to clipboard
- Responsive two-pane layout
- Deployed on Fly.io using Docker


## 🧠 What I Built

This project demonstrates full-stack deployment and UI/UX problem solving:

### 🔧 Technical Stack

| Area               | Tools / Concepts                                |
|--------------------|--------------------------------------------------|
| Backend            | Python 3, Flask, Jinja2 templating               |
| Frontend           | HTML5, CSS3, Vanilla JS, `marked.js`, `html2pdf.js` |
| DevOps & Hosting   | Docker, Fly.io CLI, Deployment configs           |
| Project Structure  | Templating with `templates/`, static file routing |
| Browser Features   | Clipboard API, PDF export via canvas             |

### 🚀 Key Skills Demonstrated

- Flask app development and routing
- Serving and organizing static assets in Flask
- Client-side JavaScript event handling
- PDF generation in-browser using html2pdf.js
- Clipboard operations using Web API
- Configuring Dockerfile for production builds
- Deploying and debugging live apps on Fly.io
- Reading and fixing deployment logs, handling 502/white-screen errors


## 🧩 Debugging & Challenges Solved

#### 1. White Screen After Deployment  
**Problem:** The deployed app displayed a blank white screen.  
**Cause:** Flask couldn't locate `index.html` or static assets.  
**Fix:**  
- Ensured correct `templates/` and `static/` folder structure  
- Replaced hardcoded paths with `{{ url_for(...) }}` in HTML


#### 2. App Not Listening on Fly.io's Required Port  
**Problem:** Deployment logs warned: “App is not listening on 0.0.0.0:8080.”  
**Cause:** Flask’s default port `5000` is inaccessible to Fly’s proxy.  
**Fix:**  
- Set `host='0.0.0.0'` and `port=8080` in `app.run()` manually


#### 3. ImportError: `url_quote` from `werkzeug.urls`  
**Problem:** Deployment crashed with a Flask-Werkzeug import error  
**Cause:** Version mismatch  
**Fix:**  
- Pinned compatible versions in `requirements.txt`:


#### 4. VS Code Couldn't Detect Flask  
**Problem:** Editor showed "flask not found" underlines  
**Cause:** Wrong Python interpreter selected  
**Fix:**  
- Created a virtual environment  
- Installed Flask  
- Switched to the correct interpreter in VS Code


