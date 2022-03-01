This project was bootstrapped with Next.

Este sitio web forma parte de un curso realizado en Udemy "React - La Guía Completa: Hooks Context Redux MERN" por Juan Pablo De La Torre Valdez. Para su realización se utilizo React.

This web site is part of a course I've taken in Udemy "React - La Guía Completa: Hooks Context Redux MERN" by Juan Pablo De La Torre Valdez. For its development React library was employed.

Notes: this works perfectly on local environment, but for deployment some changes were made:
I've splited the project in strapi (heroku)/ next(vercel)
In the Layout.js file I made a procedure which purpose is to parse url to nice pretty title, it won't work in vercel (I think it is because it lacks support to the "replaceAll" string method), so I took it off and made those changes inside the forEach call instead. Also the deployment version works with postgreSQL (I used heroku postgre service). You'll also have to configure your cloudinary settings/credentials, you'll need to fill the tables for this to work (otherwise you'll be trying to map non iterable), happy hacking!