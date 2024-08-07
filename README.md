# Chat Application

# BackEnd

## Creating vite Environment
- npm create vite@latest .
- npm install
- npm run dev

## Libraries Used
- express (Initialize the Express Server).
- dotenv (read env variables).
- cookie-parser (parse the cookies).
- bcryptjs (Hashing the passwords).
- mongoose (connect to mongodb).
- socket.io (real time communication).
- jsonwebtoken(to create tokens and install them under their hood).
- nodemon (Automatic restart of the server after every change).
- react-router-dom (For Routing in React).
- react-hot-toast (For Error states and others).
- zustand (An Alternative for context in React).

## Modularity in the Code
- **Routes :**  Dedicated Js File
- **Controller :** Which controls the files and should have a seperate folder.
- **App.js :** The App.js file should be seperate.

## Some Points about MongoDB
- enum: ["male", "female"],  We use enum when we have some certain values.
- When creating a mongoose model give the name as the singular and first character should be capital.
- The mongodb will look and make it plural in the database.

## For Profile Pics
- avatar.iran.run/public/boy?username=Scott   {for girls it will be girl}.

## JWT
- Jwt token syntax  jwt.sign({details, secretkey, {expiresIn: "Time"}, (err, token) => { resp.json({token}) });
- For verifying the token we have to create the function.

## Cookie
- setting up the cookie  res.cookie('jwt', token, { maxAge: in milliseconds, httpOnly: true, sameSize: "strict", secure: process.env.NODE_ENV !== "development" })
- we can set domain for cookies.
- we can set expirty date for cookie
- for passwords bcrypt.compare(password, user.password);

## Creating Schemas for conversation and message
### Conversation
- _id, participants: [1, 2], messages: []
### Messages
- _id, senderId, recieverId, message: ""
- type: mongoose.Schema.Types.ObjectId, ref="User"
- timestamps: true, This will on the timestamps and we can also view the time stamps.

## Populate Function
- Since we only have reference ids in the messages array in conversation, To retrieve message we use populate function.

# Front End

## Tailwind css and daisyui
- **DaisyUi**  Instead of writing 100 class names, we will use semantic class names.
- **Tailwind css IntelliSense** Vs Code extension is used to inspect the css applied to the classes of Tailwind.
- **Es7+React/Redux/React-Native Snippets** is used for simplifying the coding process.
- We can import the Icons from **react-icons**
- For **Message Bubbles** We use it from daisyUi
- Skeleton in daisyi are used to prepare the loading skeleton.

## Cors Error
- It will happen only in development phase
- Once go into the viteconfig.js and see the changes for yourself.

## Zustand
- An Alternative for the context.

## Hooks Used
- **useState** For managing the state.
- **useEffect** For cleanups and renders.



