// ==========================SETUP	
mkdir folder	
mkdir backend	
python -m venv venv	
venv\scripts\activate	

PIP	python  -m pip install --upgrade pip	

pip install django
django-admin startproject server .	
python manage.py startapp tables


PIP	pip install django djangorestframework djangorestframework-simplejwt django-cors-headers mysql-client							
python manage.py makemigrations, migrate, createsuperuser
		
// =====================
        
mkdir frontend	
npx create-react-app .		
NPM	npm audit fix --force		
						
NPM	npm install react-bootstrap bootstrap axios react-router-dom react-router-bootstrap @reduxjs/toolkit react-redux jwt-decode react-iframe	

npm install --save react-toastify	

VSCODE	python, pylance, mysql, sqlite, interpreter, tag, es7, raindow bracket icons							
GOGGLE	 React Developer Tools, Redux DevTools							
	
proxy:"http://127.0.0.1:8000/",							
							


rm -rf .git
git init
git add .
git commit -m "comment"
git branch -M master
git remote add origin https://github.com/larserra/react-js.git
git push -u origin master


git remote add origin https://github.com/larserra/react-js.git
git branch -M master
git push -u origin master

===========================================================

rm -rf .git
git init
git add .
git commit -m "comment"
git branch -M master
git remote add origin https://github.com/larserra/django-rf.git
git push -u origin master


git remote add origin https://github.com/larserra/django-rf.git
git branch -M main
git push -u origin main