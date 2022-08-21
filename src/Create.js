const Create = () => {
  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form>
        <label>Blog Title</label>
        <input type="text" required />
        <label>Blog Body</label>
        <textarea required></textarea>
        <label>Blog Author :</label>
        <select>
          <option value="amir"></option>
          <option value="aram"></option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
