const mysql = require("mysql");
const express = require("express");
const app = express();
app.use(express.json());



const con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "books"
    }
);
con.connect((err) => {
    if (err)
        console.log(err);
    else {
        console.log("connected!");

        //READ All
        app.get("/books", (req, res) => {
            let sql = "SELECT * FROM books";
            console.log(sql);
            con.query(sql, async (err, result) => {
                if (err) {
                    res.status(500);
                    console.log("no result");
                    return res.send("no result");
                }
                else {
                    console.log(result);
                    return await res.send(result);

                }
            });

        });

        //READ one record
        app.get("/books/:id", (req, res) => {
            let readBookId = req.params.id;
            let sql = "SELECT * FROM books WHERE id= ?";
            con.query(sql, [readBookId], async (err, result) => {
                if (err) {
                    res.status(500);
                    console.log("no result");
                    return res.send("no result");
                }
                else {
                    console.log(result);
                    if (result.length == 0) {
                        res.status(404);
                        return res.send("کتابی با این شناسه یافت نشد");
                    }
                    else
                        return await res.send(result);

                }
            });

        });


        //READ records by title
        app.get("/books?q=", (req, res) => {
            let queryString = req.query;
            console.log(queryString);
            //let sql = "SELECT * FROM books WHERE id= ?";
            // con.query(sql, [readBookId], async (err, result) => {
            //     if (err) {
            //         res.status(500);
            //         console.log("no result");
            //         return res.send("no result");
            //     }
            //     else {
            //         console.log(result);
            //         if (result.length == 0) {
            //             res.status(404);
            //             return res.send("کتابی با این شناسه یافت نشد");
            //         }
            //         else
            //             return await res.send(result);

            //     }
            // });

        });



        //WRITE
        app.post("/books", (req, res) => {

            if (!req.body.title | !req.body.author | !req.body.publisher | !req.body.year)
                return res.send("لطفا تمام فیلدها را وارد کنید");
            else {
                let title = req.body.title;
                let author = req.body.author;
                let publisher = req.body.publisher;
                let year = Number(req.body.year);
                let sql = "INSERT INTO books (title,author,publisher,year) VALUES (?,?,?,?)";
                con.query(sql, [title, author, publisher, year], async (err, result) => {
                    if (err) {
                        res.status(500);
                        console.log(err);
                        return res.send("no result");
                    }
                    else {
                        console.log(result);
                        return await res.send(req.body);
                    }
                });
            }

        });


        //Update
        app.put("/books/:id", (req, res) => {
            console.log(req.body.title);
            let title = req.body.title;
            let author = req.body.author;
            let publisher = req.body.publisher;
            let year = Number(req.body.year);
            let sql = "UPDATE books SET title= ?,author= ?,publisher= ?,year= ? WHERE id=?";
            console.log(req.params);
            let id = req.params.id;
            console.log(id);
            con.query(sql, [title, author, publisher, year, id], async (err, result) => {
                if (err) {
                    res.status(500);
                    console.log(err);
                    return res.send("no result");
                }
                else {
                    console.log(result);
                    if(result.affectedRows==0){
                        res.status(404);
                        return res.send("کتابی با این شناسه یافت نشد");
                    }
                    else
                        return await res.send(req.body);
                    

                }
            });

        });


        //Delete
        app.delete("/books/:id", (req, res) => {
            console.log(req.body.title);
            let title = req.body.title;
            let author = req.body.author;
            let publisher = req.body.publisher;
            let year = Number(req.body.year);
            let id = req.params.id;
            let sql = "DELETE FROM books WHERE id=?";
            con.query(sql, [id], async (err, result) => {
                if (err) {
                    res.status(500);
                    console.log(err);
                    return res.send("no result");
                }
                else {
                    console.log(result);
                    return await res.send(result);

                }
            });

        });
        app.listen(3000, () => {
            console.log("server is running on port 3000");
        });

    }

});



