const db = require('../../util/database');

module.exports = (req, res) => {

    let id = req.body.id;

    if (!id || !id.length) {
        res.send({
            success: false,
            error: 'Hiányzó paraméterek'
        });
        return;
    }

    if (isNaN(id))
    {
        res.send({
            success: false,
            error: 'Az id paraméter nem integer értéket tartalmaz.'
        });
        return;
    }

    db.query('DELETE FROM jokes WHERE id = ?', [
        id], (error) => {
        if (!error) {
            res.send({
                success: true,
                content: "Sikeres törlés."
            });
        } else {
            console.log(error);
            res.send({
                success: false,
                error: "Sikertelen törlés."
            });
        }
    });

};
