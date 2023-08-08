[11:42 pm, 08/08/2023] Anu Fi: <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css" />
</head>
<body class="flex items-center justify-center ">
    <div class=" flex flex-col justify-center items-center w-1/2 h-3/4 border-4">
        <form id="form" class="flex items-center justify-around flex-col" action="">
            <h1 class="font-extrabold text-3xl">Registration</h1>
            <table>
                <tr class="">
                    <td><label>Name</label></td>
                    <td><input class="border-2 border-black" type="te…
[11:42 pm, 08/08/2023] Anu Fi: const reviveEntries = () => {
    let entries = localStorage.getItem("user-Entries");
    return entries ? JSON.parse(entries) : [];
  };
  
  let nishaEntries = reviveEntries();
  
  const Entries = () => {
    const entries = reviveEntries();
  
    const tableEntries = entries
        .map(
            (entry) => `<tr>
                <td style = "padding: 2px 4px">${entry.name}</td>
                <td style = "padding: 2px 4px">${entry.email}</td>
                <td style = "padding: 2px 4px">${entry.password}</td>
                <td style = "padding: 2px 4px">${entry.dob}</td>
                <td style = "padding: 2px 4px">${entry.acceptedTermsAndConditions}</td>
            </tr>`
        )
        .join("\n");
  
    const table = `<table>
    …
