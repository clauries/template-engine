function mainHTML(manager, engCard, intCard, teamSize) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>

    <!--Bootstrap 4.3.1-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!--jQuery-->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <!--FontAwesome-->
    <script src="https://kit.fontawesome.com/c8926dbcdf.js" crossorigin="anonymous"></script>
    <!--Google Fonts-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap">
    <style>
    .row {
        margin-bottom: 15px;
    }
    </style>
</head>

<body>
    <div class="container">
        <div class="jumbotron jumbotron-fluid text-white bg-info">
            <div class="container justify-content-center">
                <h1 class="display-4 text-center">My Team</h1>
                <p class="lead text-center">Team size: ${teamSize} members</p>
            </div>
        </div>
        <main class="justify-content-center">
            <div class="manager row justify-content-center">
                <div class="card" style="width: 18rem;">
                    <div class="card-body text-white bg-info mb-3">
                        <h5 class="card-title">${manager.name}</h5>
                        <h6 class="card-title"><i class="fas fa-mug-hot"></i> Manager</h6>  
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.id}</li>
                        <li class="list-group-item">Email: ${manager.email}</li>
                        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
<!--Write Engineer cards here-->
            <div class="engineer row justify-content-center">
                ${engCard}   
            </div>
<!--Write Intern cards here-->
            <div class="intern row justify-content-center">
                ${intCard}
            </div>
        </main>
    </div>

    <!--Bootstrap JS-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>

</html>
`

}

module.exports = mainHTML;
