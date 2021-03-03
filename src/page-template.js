const generateTeamMember = member => {
    console.log(member);
    return `
        <div class="col"
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${member.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${member.getRole()}</h6>
                    <p class="card-text">ID: ${member.id}</p>
                    <a href="mailto:${member.email}" class="card-link">${member.email}</a>
                    ${getTeamRole(member)}
                </div>
            </div>
        </div>
    `;
};

const getTeamRole = member => {
    if (member.getRole() === 'Manager') {
        return `
                    <p class="card-text">Office number: ${member.officeNum}</p>
        `;
    }
    else if (member.getRole() === 'Engineer') {
        return `
                    <p class="card-text">GitHub: <a href="${member.getGithub()}" class="card-link">${member.github}</a></p>
        `;
    }
    else {
        return `
                    <p class="card-text">School: ${member.school}</p>
        `;
    }
};

function generatePage(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    </head>

    <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">My Team</a>
            </div>
        </nav>
        <main>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                ${data.forEach(generateTeamMember)}
            </div>
        </main>
    </body>
    </html>
    `;
};

module.exports = generatePage;