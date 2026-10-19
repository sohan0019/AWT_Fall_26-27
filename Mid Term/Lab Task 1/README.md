Name: Mohammad Sohanur Rahman
ID: 23-53829-3
Serial: 25
Section: D

-> Database setup steps, installation and run commands

1. Install PostgreSQL
2. Create the database(shop_management)
3. Install project dependencies
4. Run commands:
   pnpm install --no-frozen-lockfile
   pnpm migration:run
   pnpm start:dev

-> Endpoint list:

    Method          Endpoint
    POST            /products
    GET             /products
    GET             /products/:id
    PATCH           /products/:id
    DELETE          /products/:id
