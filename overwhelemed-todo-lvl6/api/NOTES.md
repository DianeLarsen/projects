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

for pics upload
npm install express ejs body-parser mongoose multer multer-gridfs-storage gridfs-stream method-override


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
npm install @syncfusion/ej2-react-lists --save
    import { ListViewComponent } from '@syncfusion/ej2-react-lists';
        let arts = [
            { text: 'Artwork', id: '01' },
            { text: 'Abstract', id: '02' },
            { text: 'Modern Painting', id: '03' },
            { text: 'Ceramics', id: '04' },
            { text: 'Animation Art', id: '05' },
            { text: 'Oil Painting', id: '06' }
        ];
        return (
        // specifies the tag to render the ListView component
        <ListViewComponent id="list" dataSource={arts}/>);

in client folder and package.json, go to bottom before last } 
    enter:    
        ,"proxy": "http://localhost:9000"

clean up src folder
    keep App.js (clean), index.js (clean), and App.css (clear)
    
create folders in src:

        components, pages, assets
        update title and fav.ico 

for Calendar
npm install @daypilot/daypilot-lite-react




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
git commit -m "working on posts and tasks"
git push


for images
    npm i @cloudinary/url-gen @cloudinary/react


    https://www.youtube.com/watch?v=pFHyZvVxce0&t=0s
    1hr 56min