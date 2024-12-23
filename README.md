
# 📋 Contact List

This project is a simple API for managing a contact list. The API allows creating, listing, and deleting contacts, storing the data in a `.txt` file.

## ✨ Features

- Create a new contact: Adds a contact to the list.
- List all contacts: Retrieves all stored contacts.
- Delete a contact: Removes a specific contact from the list.



## 🛠 Technologies Used
[![My Skills](https://skillicons.dev/icons?i=nodejs,express,typescript,postman&theme=dark)](https://skillicons.dev)


## 🔗 Endpoints

### Contacts

- Create a Contact:  `POST 🠊 /contacts`
#### Example request body:
```json
{
  "name": "Edgar",
  "number": 91xxxxxxx
}
```
- List contacts: `GET 🠊 /contacts`
- Delete a contact: `DELETE 🠊 /contact?name=Edgar`

## 📥 Installation

#### Clone the repository:
```bash
   git clone https://github.com/edgarstratulat/api-contact-list.git
   cd api-contact-list
```

#### Install the required dependencies:
```bash
   npm install
```

#### Configure TypeScript:
```bash
  npx tsc --init
```

#### Start the development server:
```bash
  npm run dev
```
    
## 🚀 Usage

### Create a new contact

Send a POST request to the `/contacts` endpoint with the following body:

```json
{
  "name": "Edgar",
  "number": 912345678
}
```

### List contacts

Send a GET request to the `/contacts` endpoint to retrieve all contacts.

### Delete a contact

Send a DELETE request to the `/contacts` endpoint with the `name` parameter of the contact to be removed.


## 📜 License

This project is licensed under the MIT License. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for more information.


## 

Developed with ❤️ by [Edgar Stratulat](https://github.com/edgarstratulat).
