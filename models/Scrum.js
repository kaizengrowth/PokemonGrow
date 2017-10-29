// Scrum.create = (scrum, userid) => {
//     return db.one(
//         `INSERT INTO scrums
//       (question, answer, category, difficulty, user_id)
//       VALUES ($1, $2, $3, $4, $5)
//       RETURNING *`, [scrum.question, scrum.answer, scrum.category, scrum.difficulty, userid]);
// }