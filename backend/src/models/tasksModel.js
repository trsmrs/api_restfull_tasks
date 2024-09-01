const connection = require('./connection')



const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks')
    return tasks
}


 const createTask = async (tasks) =>{
    const {title} = tasks;
    const dateUTC = new Date(Date.now());

    const query = 'INSERT INTO tasks(title, description, status, created_at) VALUES(?, ?, ?, ?)';
    const [createdTask] = await connection.execute(query, [title, 'descricao', 'pending', dateUTC])

    return {insertId: createdTask.insertId};
 }

 const deletTask = async (id) =>{
      const removedTask = await connection.execute('DELETE FROM  tasks WHERE id = ?', [id])
      return removedTask;
 }

 const updateTask = async (id, task) =>{
  const query = 'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?'
  const {title, description, status} = task;
  const [updatedTask] = await connection.execute(query, [title, description, status, id])
  return updatedTask
 }


module.exports = {
  getAll,
  createTask,
  deletTask,
  updateTask,
};