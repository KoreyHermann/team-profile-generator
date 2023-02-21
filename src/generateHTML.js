// creates HTML page
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