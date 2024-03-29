import { useState } from "react";

const Create = () => {

  const [title, setTitle] = useState('');

  const [body, setBody] = useState('');

  const [author, setAuthor] = useState('mario');

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
   

         {/*  Blog title elements  */}
        <label>Blog title:</label>

        <input 
          type="text" 

          required 

          value={title}


         onChange={ (e) => setTitle(e.target.value) }
        />
    

        {/*  Blog title elements  */}
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
   
        {/*  Blog title elements  */}
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>


      <p>
        {title}
      </p>
    </div>
  );
}
 
export default Create;