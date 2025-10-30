# Test Cases - Saucedemo E-commerce

## 1. Login Functionality

| ID | Scenario | Steps | Expected Result |
|----|-----------|--------|----------------|
| TC01 | Valid Login | 1. Go to login page<br>2. Enter username: `standard_user`<br>3. Enter password: `secret_sauce`<br>4. Click Login | User is redirected to products page |
| TC02 | Invalid Password | 1. Go to login page<br>2. Enter username: `standard_user`<br>3. Enter password: `wrong_pass`<br>4. Click Login | Error message appears |
| TC03 | Empty Credentials | 1. Go to login page<br>2. Leave username & password empty<br>3. Click Login | Validation message shown |
