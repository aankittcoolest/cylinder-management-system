#### Admin

- Ability to add/update/remove MRP of cylinder. (Examplele: 500 INR)
- Ability to add/update/remove hawker delivery charge. (Example: 50 INR)
- Ability to add/update/remove loadman (personnel). (Example: 4 persons)
- Ability to add/update/remove hawkers(delivery-man)

#### Role Manager

- Ability to see all reports
- See godown inventory
- Ability to view MRP of cylinder. (Example: 500 INR)
- Ability to view hawker(delivery-man) commission. (Example: 50 INR)
- Ability to add/update loadman (personnel). (Example: 4 persons)
- Ability to add/update hawkers(delivery-man)
- Ability to see number of cylinders assigned by warehouse owner to each loadman .
- Ability to see number of cylinders assigned by each loadman to set of delivery-man.

```
  Example:
    loadman Name:
    loadman Age:
    loadman Address:
    loadman Phone Number:
    loadman photo:
```

- Ability to add/update cylinder types/categories. (Example: 14.2 kg, 19 kg)
  Example:
  cylinder size:  
  tag/name:
  [combination of size and tag/name should be unique]

  ```
  size: 5kg
  tag: domestic

  size: 5kg
  tag: commercial

  size: 14.2kg
  tag: domestic

  size: 19kg
  tag: commercial
  ```

- Ability to add/update/delete delivery-man (personnel).

```
  Example:
    delivery-man Name:
    delivery-man Age:
    delivery-man Address:
    delivery-man Phone Number:
    delivery-man photo:
```

#### Role Godown Incharge (1 person)

- See godown inventory
- Update/Insert/Delete Godown inventories (Admin should also be able to R/I/U/D, but manager should be able to R )

```
Breakdown example:
    1000 cylinders from(receive) Indian Oil
        200 cylinders of size 5 kg domestic
        200 cylinders of size 5 kg commercial
        300 cylinders of size 14.2 kg
        300 cylinders of size 19 kg

    1000 cylinders to(issue = give back) Indian Oil
        200 cylinders of size 5 kg domestic
        200 cylinders of size 5 kg commercial
        300 cylinders of size 14.2 kg
        300 cylinders of size 19 kg
        2 defective full cylinders
```

- Ability to issue full cylinder to load-man (Example 100 cylinders to loadman-A, 200 cylinders to loadman-B)
  (Only godown incharge should be able to do this)

* Following data is inserted by godown incharge

```
Breakdown example:
    100 cylinders to loadman-A
        15 cylinders of size 5 kg domestic
        5 cylinders of size 5 kg commercial
        50 cylinders of size 14.2 kg
        30 cylinders of size 19 kg
```

- Ability to recieve emtpy cylinder from load-man (Example 80 cylinders from loadman-A, 150 cylinders from loadman-B)
- Ability to issue empty cylinder to Indian Oil
- Ability to recieve full cylinder from Indian Oil
- Ability to issue full cylinder to delivery-man
- Ability to recieve empty cylinder from delivery-man

#### Role Load-man

Loadman-A - Ability to see only 100 full cylinders recieved from Godown incharge
Loadman-A - Ability to see only 80 empty cylinders given back to godown incharge
Loadman-A - Ability to balance cylinders (Example: 20)
Loadman-A - Ability to issue full cylinder to `delivery-man`.
Loadman-A - Ability to receive empty cylinder from `delivery-man`.
Loadman-A - Ability to receive amount from `delivery-man` and feed to application.

- Ability to select delivery-man to whom chunk of cylinders is assigned.
- Ability to tick a checkbox saying (is issued to customer)
- If above checkbox is ticked delivery-man dropbox should be disabled.

MRP:500

Loadman-B - Ability to see only 200 cyclinders recieved from Godown incharge
Loadman-B - Ability to see only 150 empty cyclinders given back to godown incharge
Loadman-B - Ability to balance cylinders (Example: 50)

```
CASE 1: New connection (count of filled cylinders decreases than stipulated count)
Example:
    Start of day:
        Full cylinders = 100
        New connections = 3
        Transfer connections = 0
    End of day:
        Empty cylinder = 97

CASE 2: Normal flow (count of filled cylinders is equal to empty cylinder stipulated count)
    Start of day:
        Full cylinders = 100
        New connections = 0
        Transfer connections = 0
    End of day:
        Empty cylinder = 100

CASE 3: Transfer connection (count of empty cylinders increases than stipulated count)
    Start of day:
        Full cylinders = 100
        New connections = 0
        Transfer connections = 2
    End of day:
        Empty cylinder = 102
```

Day-start: Start of day 7:00 AM
Day-end: End of day 7:00 AM

