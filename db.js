const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./WorkShopRocketseat")

db.serialize( function() {
    // Criar a tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS ideaas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );`)

    /*const query = `
    INSERT INTO ideaas(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);`

    const values = [
        "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        "Cursos de Progrmação",
        "Estudo",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores soluta totam",
        "http://rocketseat.com.br"
    ]

    db.run(query, values, function(err) {
        if (err) return console.log(err)

        console.log(this)
    })


    db.all(`SELECT * FROM ideaas`, function(err, rows) {
        if (err) return console.log(err)

        console.log(rows)
    })*/
})

module.exports = db