import React from "react";

const CreateTheme = () => {
  const [theme, setTheme] = React.useState({
    backgroundColor: "",
    name           : "",
    textColor      : "",
    // Add more theme properties as needed
  });

  const handleChange = (event) => {
    setTheme({
      ...theme,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to save the theme here
    // console.log(theme);
  };

  return (
    <div>
      <h2>Create and Edit Theme</h2>

      <form onSubmit={handleSubmit}>
        <label>
                Theme Name:
          <input
            type="text"
            name="name"
            value={theme.name}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
                Background Color:
          <input
            type="text"
            name="primaryColor"
            value={theme.primaryColor}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
                PrimaryColor Color:
          <input
            type="text"
            name="secondaryColor"
            value={theme.backgroundColor}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
                Background Color:
          <input
            type="text"
            name="secondaryColor"
            value={theme.backgroundColor}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
                Text Color:
          <input
            type="text"
            name="textColor"
            value={theme.textColor}
            onChange={handleChange}
          />
        </label>

        <br />

        {/* Add more form fields for other theme properties */}
        <br />

        <button type="submit">Save Theme</button>
      </form>
    </div>
  );
};

export default CreateTheme;