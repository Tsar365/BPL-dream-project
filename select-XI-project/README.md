No, you should not write:
const res = await fetch("public/players.json")

In Vite + React, the public folder is treated as the root of your website. Files inside public are directly accessible by their path.


