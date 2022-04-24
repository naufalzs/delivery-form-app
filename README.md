# siCekout (Simple Checkout Form App)

## Table of Contents

- [Description](#description)
- [Initial Setup](#initial-setup)
- [Running Development Environment](#running-development-environment)

## Description

### Abstract

siCekout is a web application that can facilitate e-commerce website to register user data for checkout requirement. It makes registering checkout form simple, easy, and convenient for both user and company.

There are three main flow here, Delivery form, Shipment/Payment selector, and Summary details. In delivery form, user provided by input which validate on realtime, so its make registering data very convenient for user, it also provide dropshipper option to accomodate e-commerce which provide dropship feature. Next step is shipment/payment selector, which show selected list of shipment/payment with detail. It make company ease to manage the list to only show company partners, and also it help user to choose the best option for them. Last step is summary details which showing user the summarize version of the form they register. It ease user to double check their options and got details of total price they must pay.

### Feature

There are six siCekout main features here:

1. Realtime validation input.
2. Dropshipper option.
3. Integrated selector (for shipment/payment).
4. Realtime details summary (shipment/payment/dropship choosen and total price).
5. Order id generator.
6. Persisted state in local storage.

## Initial Setup

This project use ReactJS, Styled Components, React Hooks Form, Redux, and many libraries included. You need to install the required
dependencies prior to testing, building or contributing to the project.

## Running Development Environment

To install dependencies the server:

```bash
yarn install
```

To run the server:

```bash
yarn dev
```

You can see the app running by going to `http://localhost:3020/` via your browser.
