# ASICS component library
A multi-brand component library to display design patterns and source code for the ASICS ecomm sites.

The goal is to promote consistency and reusability as well as provide an at-a-glance visuals for site components across all brands. The eventual goal of this is to be fully in-sync with the productiont site code living in the `asics-sfcc` repository. 

For now my vision is to continue adding more live component examples in this repository and eventually replace what is in the `asics-sfcc` repo, one component at a time. By the end, we will have an updated component library to look back on, as well as freshly written code that is up to standard for the live SFCC storefront sites.

Currently a work in progress...more components to come.

# Sites
- ASICS Performance
- Onitsuka Tiger
- ASICS Walking
- Haglofs

# Setup
Once cloned...
- run `$ npm install` to get all project dependencies
- to start the server, run `$ npm run devstart`
- navigate to `http://localhost:3000/` or `http://127.0.0.1:3000/`

# Deploy
Once changes are tested and committed to the `master` branch...
- deploy them to the Heroku remote branch with `$ git push heroku master`
- if successfully built, run `$ heroku open` to view the updated site

Current live site: https://evening-peak-02765.herokuapp.com/
