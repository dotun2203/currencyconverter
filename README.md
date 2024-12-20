# Currency Converter API ⚡️

Welcome to my **Currency Converter API** — a fun little hobby project that transforms currencies into magical numbers and historical timelines!

## What’s This About?

This is a Node.js/Express.js backend service that:

- **Authenticates Users:** Register & login with JWT-based authentication.
- **Manages Profiles:** Update your profile info, because who doesn’t love personalization?
- **Converts Currencies:** Takes in an amount, a "from" currency, and a "to" currency, and voilà—converts it using real-time exchange rates from the [Frankfurter API](https://www.frankfurter.app/)!
- **Provides Historical Rates:** Fetches historical exchange data over a given time period. Perfect for those who love to marvel at the changing tides of finance.
- **Saves Favorites:** Mark your go-to currency pairs as favorites to avoid typing them again.
- **Sets Notifications:** Set up "rate alerts" and get notified when a currency hits your desired threshold.

## Why I Built This

- To get more comfortable with **Node.js** and **Express.js**.
- To practice **JWT authentication**, database models with **MongoDB**, and **RESTful APIs**.
- Because I like seeing numbers convert into other numbers. Don’t judge.

## Tech Stack

- **Node.js & Express.js**: For powering the server and routes.
- **MongoDB & Mongoose**: For persisting user data, favorites, and notifications.
- **JWT**: For authentication (security first, right?).
- **Axios**: For fetching real-time and historical exchange rates.
- **Frankfurter API**: A no-fuss, no-auth, free currency API.
- **dotenv**: For environment variables (keys and secrets stay secret!).

## Endpoints Overview

- **Auth:** `/auth/register` and `/auth/login`
- **Profile:** `/profile` (get & update)
- **Currency:**
  - `/currency/convert?from=USD&to=EUR&amount=100`
  - `/currency/historical?base=USD&symbols=EUR&start_date=2020-01-01&end_date=2020-01-05`
- **Favorites:** `/favorites` (POST and GET)
- **Notifications:** `/notifications` (POST and GET)

## DOCUMENTATION

https://documenter.getpostman.com/view/22114110/2sAYJ3E1UD
