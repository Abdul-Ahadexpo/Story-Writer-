document
  .getElementById("downloadTxtBtn")
  .addEventListener("click", function () {
    const story = document.getElementById("story").value.trim();

    if (story === "") {
      alert("Please write something before downloading.");
      return;
    }

    // Prompt user for filename
    const fileName = prompt(
      "Please enter a filename for your text file:",
      "story.txt"
    );

    if (fileName === null) {
      return; // User canceled prompt
    } else if (fileName.trim() === "") {
      alert("Filename cannot be empty.");
      return;
    }

    // Generate and download as text file
    downloadFile(story, "text/plain", fileName);
  });

document.getElementById("downloadMdBtn").addEventListener("click", function () {
  const story = document.getElementById("story").value.trim();

  if (story === "") {
    alert("Please write something before downloading.");
    return;
  }

  // Prompt user for filename
  const fileName = prompt(
    "Please enter a filename for your Markdown file:",
    "story.md"
  );

  if (fileName === null) {
    return; // User canceled prompt
  } else if (fileName.trim() === "") {
    alert("Filename cannot be empty.");
    return;
  }

  // Generate and download as Markdown file
  downloadFile(story, "text/plain", fileName);
});

function downloadFile(content, contentType, fileName) {
  const blob = new Blob([content], { type: contentType });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
}
