const express = require("express");
const app = express();
const port = 3000;

app.use(express.json({
    limit: "50mb"
}));

app.listen(port, () => {
    console.log("서버가 포트 3000번으로 시작되었습니다.")
})

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/customers", (req, res) => {
    const customers = [
        {name: "John Doe", email: "john@gmail.com"},
        {name: "Jane Doe", email: "jane@gmail.com"},
    ];
    res.send(customers);
});

app.get("/customer/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const customers = [
        {id: 1, name: "John Doe", email: "john@gmail.com"},
        {id: 2, name: "Jane Doe", email: "jane@gmail.com"},
    ];

    const customer = customers.filter(c => c.id === id);

    if (customer.length > 0) res.send(customer);
    else {
        res.status(401).send({msg: "존재 하지 않는 ID 입니다."});
    }
});

app.post("/customer", (req, res) => {
   console.log(req.body.param);

   res.send("OK");
});