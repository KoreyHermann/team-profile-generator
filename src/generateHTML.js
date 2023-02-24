//manager html card
const generateManager = function (manager) {
    return`
    <div class="flex justify-center">
  <div
    class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
    <h5
      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      ${manager.name}
    </h5>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      Manager
    </p>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      ${manager.id}
    </p>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      ${manager.email}
    </p>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      ${manager.office}
    </p>
  </div>
</div>
    `;
}

//engineer html card
const generateEngineer = function (engineer) {
    return`
    <div class="flex justify-center">
  <div
    class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
    <h5
      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      ${engineer.name}
    </h5>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      Engineer
    </p>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      ${engineer.id}
    </p>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      ${engineer.email}
    </p>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      ${manager.github}
    </p>
  </div>
</div>
    `;
}

//intern html card
const generateIntern = function (manager) {
    return`
    <div class="flex justify-center">
  <div
    class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
    <h5
      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      ${intern.name}
    </h5>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      Manager
    </p>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      ${intern.id}
    </p>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      ${intern.email}
    </p>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      ${intern.school}
    </p>
  </div>
</div>
    `;
}

generateHTML = (data) => {

    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    const employeeProfiles = pageArray.join('')

    const generateTeam = generateTeamPage(employeeProfiles); 
    return generateTeam;

}





// creates team profile page
const generateHTML = function (employeeProfiles){
    return`
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profiles</title>
        </head>
        <body>
        <div
            class="rounded-lg bg-neutral-100 p-6 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
            <h2 class="mb-5 text-3xl font-semibold">Team Profiles</h2>
        </div>

        <main>
            <div class = "container">
                <div class = "row justify-content-center" id = "team-cards">
                ${employeeProfiles}
            </div>
        </div>
        </main>
    
    
    </body>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>    
    <script src="https://cdn.tailwindcss.com"></script>
</html>
`;
}

module.exports = generateHTML;