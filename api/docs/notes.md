### Sample graphql queries

- get user

```

```

- create user

```
mutation createUser($input: createUserInput) {
  user: createUser(input: $input) {
    name
    date_of_birth
    address
    phone_number
  }
}

{
  "input": {
    "name": "Ankit Agrawal",
    "address": "Test Address",
    "date_of_birth": "12-12-2020",
    "phone_number": "123456789"
  }
}

```
