const db = require('../../util/database');

module.exports = (req, res) => {

    db.query('SELECT jokes.id, created_at, title, content, username FROM jokes ' +
        'INNER JOIN user ON user.id = jokes.creator', (error, result) => {
        if (error) {
            console.log(error);
            res.send({
                success: false,
                error: 'Hiba a feldolgozás során'
            });
            return;
        }
        res.send({
            success: true,
            content: result
        });
    });
};
