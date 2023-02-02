create folder:

***cd <created folder>

intall things:

touch server.js
npm init -y
npm install express
npm install morgan
npm install mongoose
npm install jsonwebtoken
npm install dotenv
npm install express-jwt
npm install bcrypt


already installed but can be installed on new computers        
npm install -g nodemon

confirm package.json "main": "server.js"


create folders:

mkdir models
mkdir routes
mkdir client
create routes folder  
create client folder

cd client
npx create-react-app .
npm install axios
npm install react-router-dom

in client folder and package.json, go to bottom before last } 
    enter:    
        ,"proxy": "http://localhost:9000"

clean up src folder
    keep App.js (clean), index.js (clean), and App.css (clear)
    
create folders in src:

        components, pages, assets
        update title and fav.ico 





to start servers:

npm start 
    -for frontend
nodemon server.js 
    -for server
sudo mongod --dbpath ~/data/db 
    -for mongodb 




to find mongo instance
sudo lsof -iTCP -sTCP:LISTEN -n -P
sudo killall mongod    

SECRET= "tomato, toyota, jackrabbit, opener"

git add -A
git commit -m "able to get auth working and creating a task"
git push
