// Simple Age Calculator Code with Prompts/Alerts for 2023 (I know this is not the most efficent way.).

let year = prompt("What Year were you born?")


if (year > 2023) {
    document.write("Invalid Date Year")
}
else {
    let final_Year = 2023 - year;
    document.write(final_Year)
}