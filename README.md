<h1 align="center">Lend A Paw</h1>
<div align="center">
<img src="https://github.com/Yolisss/Lend-A-Paw/assets/106282120/2d458cf7-c83b-4a72-8651-fc7bf99817b0" />
</div>

## Contents

- About
- Mock User Account
- Tech Stack
- API Reference
- Official Database Schema
- Wireframe
- Installation


<h2>About<h2>
<h3 align="center"> Why use Lend A Paw? - App Overview </h3>
  Lend A Paw is an application for animal lovers and are looking to find ways to help animals in need. With Lend A Paw, you have the option to adopt your pet of choice, and have access to a list of animals that are up for adoption. What if you're not interested in adopting a pet at the moment? No problem! Lend A Paw's mission (besides getting you to adopt instead of shop animals) is to also spread awareness about fostering, donating, and volunterring! 
  <h3 align="center">DISCLAIMER</h3>
  <p align="center">Because this app is utilizing the free version of Render, timing for pages to render may delay by a few seconds</h4>
<br>
  <h3>Mock User Account (Can Be Used To Test Site)</h3>
  <table align="center">
  <tr>
    <th>EMAIL</th>
    <th>PASSWORD</th>
  </tr>
  <tr>
    <td>kittylover@gmail.com</td>
     <td>#Ilovecats3</td>
  </tr>
  </table>
    <br></br>
 
  

## Tech Stack 
[Back to Contents](#contents)

<table align="center">
  <tr>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168923681-ece848fc-5700-430b-957f-e8de784e9847.png" width="48" height="48" alt="html" />
      <br>html
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168924521-589f95da-069a-496a-bcc1-ee6dd132ff12.png" width="48" height="48" alt="CSS" />
      <br>CSS
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168977094-6a5073a2-2f48-4f5a-ae0e-ed1421a678c6.png" width="48" height="48" alt="JavaScript" />
      <br>JavaScript
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168976819-15a1f4e0-29cf-4ac0-94a7-1f15eee374a1.png" width="48" height="48" alt="postgreSQL" />
      <br>postgreSQL
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168978951-5ac2af5e-c911-4e59-b493-683071cf1860.png" width="48" height="48" alt="Express" />
      <br>Express
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979311-4a486cad-32c8-46f4-a5da-912fdc51b2d6.png" width="48" height="48" alt="React" />
      <br>React
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979848-733f7090-0f78-401a-9ceb-4267231abef7.png" width="48" height="48" alt="Node" />
      <br>Node
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168980647-1690f9de-bf0e-4318-93cb-1b2ba3701ded.png" width="48" height="48" alt="Bootstrap" />
      <br>Bootstrap
    </td>
    <td align="center" width="96">
        <img src="[https://pbs.twimg.com/profile_images/1337188620222906368/oNKK_fVe_400x400.jpg](https://www.petfinder.com/themes/custom/consumer_react/logo.svg)" width="48" height="48" alt="Render" />
      <br>Render
    </td>
  </tr>
</table>

## API Reference 
[Back to Contents](#contents)

<table align="center">
  <tr>
     <td align="center" width="96">
        <img src="petfinder.png" width="60" height="48" alt="PetFinder" />
     </td>
   <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202351473-c2b9308b-9fd1-4dd6-980e-108bb1eb8731.png" height="40px"><br>Auth0</td>
  </tr>
</table>
  
<h2>Official Database Schema</h2>
<h4 align="center">User</h4>
<table align="center">
  </tr>
  <tr>
    <th>id</th>
   <th>Full Name</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>INTEGER (Primary Key)</td>
    <td>VARCHAR (255)</td>
    <td>VARCHAR (255)</td>
  </tr>
</table>
<h4 align="center">Adoption Form</h4>
<table align="center">
  <tr>
    <th>id</th>
    <th>pet_id</th>
    <th>fullname</th>
    <th>email</th>
    <th>reason</th>
  </tr>
  <tr>
    <td>INTEGER (Primary Key)</td>
    <td>INTEGER (Foreign Key)</td>
    <td>VARCHAR (255)</td>
    <td>VARCHAR (255)</td>
    <td>VARCHAR (255)</td>
  </tr>
 </table>
 <h4 align="center">Stretch goal: Favorites</h4>
<table align="center">
  <tr>
    <th>pet_id</th>
    <th>User Email</th>
  </tr>
  <tr>
    <td>INTEGER</td>
    <td>VARCHAR (255)</td>
  </tr>
</table>


## Wireframe
<p float="left">
<h4 align="center">From Left To Right</h4>
<h4 align="center">Home Page | About Us</h4>
<p align="center">
<img src="https://github.com/Yolisss/Lend-A-Paw/assets/106282120/2aace635-0982-4ad6-ad8b-8b5e91ad53f3" width="320" height="700" />
<img src="https://github.com/Yolisss/Lend-A-Paw/assets/106282120/0b12ef76-791e-4fa2-900e-c90af5cbd826" width="320" height="700" />
</p>
<h4 align="center">Adoptable Pets Page Part 1 | Adoptable Page Part 2 </h4>
<p align="center">
<img src="https://github.com/Yolisss/Lend-A-Paw/assets/106282120/534ba119-82be-4f0e-8dd4-478352c214a0" width="320" height="700" />
<img src="https://github.com/Yolisss/Lend-A-Paw/assets/106282120/6273187f-425d-47f7-8739-be98560e5317" width="320" height="700" />
</p>
<h4 align="center"> Sign-In/Sign-Up Form | Adoption Form</h4>
<p align="center">
<img src="https://github.com/Yolisss/Lend-A-Paw/assets/106282120/b3edca06-a088-46c7-81dc-5581d91fa91d" width="320" height="700" />
<img src="https://github.com/Yolisss/Lend-A-Paw/assets/106282120/f3b4dd75-b00e-4196-875d-617df114683c" width="320" height="700" />
</p>
<h4 align="center">Ways To Help Part 1 | Ways To Help Part 2</h4>
<p align="center">
<img src="https://github.com/Yolisss/Lend-A-Paw/assets/106282120/7a8d5771-ad5d-4e19-95cc-e0ac504b5e86" width="320" height="700" />
<img src="https://github.com/Yolisss/Lend-A-Paw/assets/106282120/38ae8645-7301-4f82-9cdf-a2823603651e" width="320" height="700" />
</p>
<h4 align="center"> "Thank You For Submitting Your Form" Page</h4>
<p align="center">
<img src="https://github.com/Yolisss/Lend-A-Paw/assets/106282120/05c838d4-5425-4227-89df-55fecbe11f86" width="320" height="300" />
<p>
<h4 align="center">Strech goal: Favorites Feature Part 1 | Favorites Feature Part 2</h4>
<p align="center">
<img src="https://github.com/Yolisss/Lend-A-Paw/assets/106282120/8d1fe1d9-0060-49e8-86be-480af51e7f52" width="320" height="700" />
<img src="https://github.com/Yolisss/Lend-A-Paw/assets/106282120/b4127c37-1e69-4ff0-9117-a45a774e45f1" width="320" height="700" />

 
 
## Installation
Step 1. Go to the source directory in your terminal to clone this project. Once that is done, switch into the project directory.
```bash
 git clone https://github.com/Yolisss/Lend-A-Paw
```

Step 2. To remove the owner git track from the project's main directory, run the command `rm -rf .git`. Then run the command `git init` to start your own git track.
```bash
 rm -rf .git
 git init
```

Step 3. Switch into the server folder with the command `cd server` and install npm with the command `npm install`.
```bash
 cd server
 npm install
```

Step 4. Inside your server folder, create an .env file with the command `touch .env`. Copy the instructions in the .env.example files to copy the correct option for your configuation into the new .env file. 
```bash
 touch .env
```

Step 5. Staying inside of the server folder, run either option A or option B:
<ul>
 <li>A. The command `psql -U postgres -f db.sql` if your postgres is set-up with a user and password</li>
 <li>B. The command `psql -f db.sql` if your postgres is not set-up with a user and password</li>
</ul>

Here is what your command might look like:

```bash
 psql postgres -f db.sql
```
Step 6. Go to the client folder in the project with the command `cd ..` and `cd client`. Then run the command `npm install` in that client folder.
```bash
 cd .. 
 cd client
 npm install
```

Step 7: Run both servers by opening a new terminal and by switching over to the server folder with the command `cd server`in it. Then run the command `npm run dev` inside the new terminal. 
```bash
 cd server
 npm run dev
```









