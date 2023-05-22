const db = require('../../util/database');

module.exports = (req, res) => {

    let title = req.body.title;
    let content = req.body.content;

    if (!title || !content || !title.length || !content.length) {
        res.send({
            success: false,
            error: 'Hiányzó paraméterek'
        });
        return;
    }

    db.query('INSERT INTO jokes SET title = ?, content = ?, creator = ?', [
        title,
        content,
        req.session.userId
    ], (error, result) => {
        if (!error) {
            res.send({
                success: true,
                content: result.insertId
            });
        } else {
            console.error(error);
            res.send({
                success: false,
                error: "Sikertelen hozzáadás."
            });
        }
    });

};
