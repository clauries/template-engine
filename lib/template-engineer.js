function engineerHTML(engineer) {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body text-white bg-warning mb-3">
        <h5 class="card-title">${engineer.name}</h5>
        <h6 class="card-title"><i class="fas fa-glasses"></i> Engineer</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: ${engineer.email}</li>
        <li class="list-group-item">GitHub: ${engineer.github}</li>
    </ul>
</div>
`
}

module.exports = engineerHTML;