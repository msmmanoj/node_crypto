# Crypto

This is a sample application that encrypt and decrypt the given text based on secret using AES 128 and AES256

Install dependencies and run the application with this command:

```bash
npm install
npm run start
```
### API Details

POST API
http://localhost:3000/encrypt

body
{
"text":"sampleText",
"secret":"x3@4"
}

Sample response

{
"data": "U2FsdGVkX1+BFXRJaXW9Hce8t5K+zShFP3v98e6R37U="
}


POST API
http://localhost:3000/decrypt

body
{
"text":"U2FsdGVkX1+BFXRJaXW9Hce8t5K+zShFP3v98e6R37U=",
"secret":"x3@4"
}

Sample response

{
"data": "sampleText"
}


## Author

**Malepati Manoj**
* [github/msmmanoj](https://github.com/msmmanoj)

## License
Copyright © 2021 [Malepati Manoj](https://github.com/msmmanoj)
