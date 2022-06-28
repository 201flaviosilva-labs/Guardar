
# Cheat Sheet

## Global 
| Name       | Description                   | param 1 | param 2 | return |
| ---------- | ----------------------------- | ------- | ------- | ------ |
| getVersion | Get number of current version | -       | -       | string |

## Local/Session Storage

The api it the same for both types of storage.

| Name       | Description                         | param 1                 | param 2     | return     |
| ---------- | ----------------------------------- | ----------------------- | ----------- | ---------- |
| setName    | Change the name of the storage      | name {string} ? guardar | -           | -          |
| getAll     | Get all data                        | json {boolean} ? false  | -           | {any}      |
| getData    | Get the items of a key              | key {string}            | -           | {any}      |
| setData    | Save/change a key                   | key {string}            | value {any} | -          |
| updateAll  | Save/change all data                | data {any}              | -           | -          |
| removeData | Delete a key                        | key {string}            | -           | -          |
| clear      | Delete all data                     | -                       | -           | -          |
| keys       | Get all keys                        | -                       | -           | {string[]} |
| size       | Get number of items                 | -                       | -           | {number}   |
| has        | Check if a key is stored            | key {string}            | -           | {boolean}  |
| isEmpty    | Check if the local storage is empty | -                       | -           | {boolean}  |
