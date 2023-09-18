# lineten-customer

# Install project locally
Install project dependencies with npm i

# Run the project locally
Use below command in order to run the feature file using headed mode on cypress:
npx cypress open

Use below command in order to run the feature file headless mode on cypress:
npm run cypress:execution

# Run the project through Docker:
1. Create new or select an existing docker image where the above project needs to be executed.
   
2. Creation of new docker image can be achieved through below command:
docker build -t <dockerImageName> .

3. Check whether above selected docker image is downloads succesfully or not via below command:
docker image ls
   
4. Run the container:
docker run -i -t <dockerImageName> cypress run --spec cypress/e2e/features/api.feature —browser <browserName> 
 
