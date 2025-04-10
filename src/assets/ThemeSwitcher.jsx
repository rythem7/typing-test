
function ThemeSwitcher() {

    const handleThemeChange = (e) => {
        document.documentElement.setAttribute("data-theme", e.target.value); // set the theme on the document element
    };

    return(
        <select
        className="fixed bottom-4 right-4 select select-bordered w-36"
        onChange={handleThemeChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="cupcake">Cupcake</option>
        <option value="bumblebee">Bumblebee</option>
        <option value="emerald">Emerald</option>
        <option value="corporate">Corporate</option>
        <option value="synthwave">Synthwave</option>
        <option value="cyberpunk">Cyberpunk</option>
        <option value="valentine">Valentine</option>
        <option value="halloween">Halloween</option>
        <option value="forest">Forest</option>
        <option value="aqua">Aqua</option>
        <option value="luxury">Luxury</option>
        <option value="dracula">Dracula</option>
      </select>
    );
};

export default ThemeSwitcher;